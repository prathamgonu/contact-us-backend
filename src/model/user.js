import {Schema, model} from 'mongoose'
import validator from 'validator'
import { compare, hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    city: {
		type: String,
		required: true,
		trim: true,
	},
    mobileNumber: {
        type: String, 
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value, 'any')) {
                throw new Error('Mobile number is invalid');
            }
        }
    },
    message: {
		type: String,
		required: true,
		trim: true,
	},
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'generateAuthToken')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await hash(user.password, 8)
    }

    next()
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
    const user = this
    await deleteMany({ owner: user._id })
    next()
})

const User = model('User', userSchema)

export default User