const multer = require('multer');
const path = require('path');

function createMulterUpload(folderName, maxFiles = 10) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folderName);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniqueSuffix + '-' + file.originalname);
        }
    });

    const fileFilter = (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (mimetype && extname) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed (jpeg, jpg, png, gif)'));
        }
    };

    const upload = multer({
        storage,
        fileFilter,
        limits: {
            fileSize: 5 * 1024 * 1024,
            files: maxFiles
        }
    });

    return {
        single: (fieldName) => upload.single(fieldName),
        array: (fieldName, maxCount) => upload.array(fieldName, maxCount || maxFiles),
        fields: (fields) => upload.fields(fields)
    };
}

module.exports = createMulterUpload;
