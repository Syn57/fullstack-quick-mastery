import * as yup from 'yup';

export const newProductReqBodyvalidator = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    stock: yup.number().required(),
    category: yup.string().required(),
    image: yup.string(),
}).noUnknown(false, 'Forbidden field: ${unknown}');

export const updateProductReqBodyvalidator = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    stock: yup.number().required(),
    category: yup.string().required(),
    image: yup.string(),
}).noUnknown(true, 'Forbidden field: ${unknown}');

