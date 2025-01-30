import joi from 'joi'


export const addCategorySchema=joi.object({
name:joi.string().trim().min(3).max(70).required(),
file:joi.object({
    fieldname:joi.string().required(),
    originalname:joi.string().required(),
    encoding:joi.string().required(),
    mimetype:joi.string().required(),
    destination:joi.string().required(),
    filename:joi.string().required(),
    size:joi.number().positive().required(),
    path:joi.string().required(),

}),
files:joi.object({
image:joi.array().items(joi.object({
    size:joi.number().positive().required(),
    path:joi.string().required(),
    filename: joi.string().required(),
    destination: joi.string().required(),
    mimetype: joi.string().required(),
    encoding: joi.string().required(),
    originalname: joi.string().required(),
    fieldname: joi.string().required()}))
})
}).required()