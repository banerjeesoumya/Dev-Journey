import express from 'express';

const app = express();
const port = 3000;

const otpStore: Record<string, string> = {};

app.use(express.json());

app.post('/generate-otp', (req, res) => {
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

app.post("/reset-password", (req, res) => {
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