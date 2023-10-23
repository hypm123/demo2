const express = require('express');
const app = express('');

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Chào mừng bạn đến với dịch vụ của chúng tôi!'
    });
});

app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});
