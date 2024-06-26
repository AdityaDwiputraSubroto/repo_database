const { createCommentSchema, filePhotoCommentSchema } = require("./schema");

function validateCreateCommentSchema(payload) {
    const validateResult = createCommentSchema.validate(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}

function validateCommentImageSchema(payload) {
    const validateResult = filePhotoCommentSchema.validate(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}


module.exports = { validateCreateCommentSchema, validateCommentImageSchema };