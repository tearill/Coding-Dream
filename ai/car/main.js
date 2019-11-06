const fs = require('fs');

const image = fs.readFileSync("cp.jpg").toString("base64");

const AipOcrClient = require("baidu-aip-sdk").ocr;
const client = new AipOcrClient('17712416', 'IwhS9PwnIOogKIQCT4MhIL4D', 'ZQCtcF306pEECXC7Sqe1XaYb4eSfqKAg');

const options = {};
options["multi_detect"] = "true";

client
    .licensePlate(image, options)
    .then(function(result) {
        console.log(result);
    });
