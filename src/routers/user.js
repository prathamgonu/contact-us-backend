import { Router } from 'express'
import User from '../model/user.js'
import auth from '../middleware/auth.js'

const router = new Router()

// Create a new user
router.post('/contact', async (req, res) => {
    const { name, email, city, message, mobileNumber } = req.body;

    try {
        

        // Create a new instance of the User model with the form data
        const user = new User({
            name,
            email,
			city,
            message,
            mobileNumber
        });

        // Save the user data to the database
        await user.save();

        res.status(201).send('Thank you for your message! We will get back to you soon.');
    } catch (e) {
        res.status(500).send('An error occurred while processing the contact form.');
    }
});



export default router