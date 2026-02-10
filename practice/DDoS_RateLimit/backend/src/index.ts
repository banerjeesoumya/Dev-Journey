import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();
const port = 3000;

const otpStore: Record<string, string> = {};

app.use(express.json());

// Rate limiter configuration
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});


app.post('/generate-otp', otpLimiter, (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;

    console.log(`Generated OTP for ${email}: ${otp}`);
    return res.status(200).json({
        message: 'OTP generated successfully',
    })
})

app.post("/reset-password", passwordResetLimiter, (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        return res.status(400).json({ error: 'Email, OTP, and new password are required' });
    }
    if (otpStore[email] === otp) {
        console.log(`Password reset successful for ${email} and has been changed to: ${newPassword}`);
        delete otpStore[email];
        return res.status(200).json({
            message: 'Password reset successful',
        })
    } else {
        return res.status(400).json({ error: 'Invalid OTP' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});