// const { default: ImageKit } = require('@imagekit/nodejs');
const Imagekit = require('@imagekit/nodejs');


const imageKit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


async function uploaddFile(buffer) {
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });
    return result;
};

module.exports = uploaddFile;