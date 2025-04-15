import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sql from '../../lib/supabaseClient.js';  // Import your Postgres client

// Function to check credentials and generate a JWT token
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch the user by email
        const user = await sql`
            SELECT * FROM users WHERE email = ${email}
        `;

        // If no user found, return error
        if (user.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user[0].password);

        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user[0].id, email: user[0].email },
            process.env.JWT_SECRET, // Ensure you have JWT_SECRET in .env
            { expiresIn: '1h' } // Set an expiration time for the token
        );

        // Send token as response
        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
