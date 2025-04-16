import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import supabase from '../../lib/supabaseClient.js';  // Import your Postgres client

export const login = async (req, res) => {
    const { email, password } = req.body;

    const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email);

    if (error) {
        console.error('Supabase error:', error.message);
        return res.status(500).json({ message: 'Database error' });
    }

    if (!users || users.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return res.json({ token });
};

export const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const { data: existingUsers, error: checkError } = await supabase
            .from('users')
            .select('id')
            .eq('email', email);

        if (checkError) {
            console.error('Supabase error:', checkError.message);
            return res.status(500).json({ message: 'Database error' });
        }

        if (existingUsers && existingUsers.length > 0) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const password_hash = await bcrypt.hash(password, 10);

        // Insert the new user
        const { data: newUser, error: insertError } = await supabase
            .from('users')
            .insert([
                { email, password_hash }
            ])
            .select(); // so we can return the user

        if (insertError) {
            console.error('Insert error:', insertError.message);
            return res.status(500).json({ message: 'Error creating user' });
        }

        // Create token for immediate login after registration (optional)
        const token = jwt.sign(
            { userId: newUser[0].id, email: newUser[0].email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(201).json({ message: 'User registered', token });
    } catch (err) {
        console.error('Unexpected error:', err.message);
        return res.status(500).json({ message: 'Server error' });
    }
};
