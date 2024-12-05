import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    shirtSize: yup.string().oneOf(['XS', 'S', 'M', 'L', 'XL'], 'Invalid size').required('Shirt size is required'),
    comments: yup.string().optional(),
});
