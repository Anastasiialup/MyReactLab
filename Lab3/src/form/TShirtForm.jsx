import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import tshirtImage from '../styles/Untitled1.jpg';

// Валідаційна схема
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    shirtSize: yup.string().oneOf(['XS', 'S', 'M', 'L', 'XL'], 'Invalid shirt size').required('Shirt size is required'),
    comments: yup.string().max(500, 'Max length is 500 characters'),
});

function TShirtForm() {
    const [isSubmitted, setIsSubmitted] = useState(false); // Для відстеження відправки форми
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data); // Виведення даних у консоль
        setIsSubmitted(true); // Відзначаємо, що форма відправлена
    };

    const handleResetForm = () => {
        setIsSubmitted(false); // Скидаємо стан, щоб форма стала доступною для нової відправки
        reset(); // Очищаємо поля форми
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!isSubmitted ? (
                <>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" {...register('name')} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label>Shirt Size:</label>
                        <div className="radio-group">
                            <label htmlFor="XS">
                                <input
                                    type="radio"
                                    id="XS"
                                    value="XS"
                                    {...register('shirtSize')}
                                />
                                XS
                            </label>
                            <label htmlFor="S">
                                <input
                                    type="radio"
                                    id="S"
                                    value="S"
                                    {...register('shirtSize')}
                                />
                                S
                            </label>
                            <label htmlFor="M">
                                <input
                                    type="radio"
                                    id="M"
                                    value="M"
                                    {...register('shirtSize')}
                                />
                                M
                            </label>
                            <label htmlFor="L">
                                <input
                                    type="radio"
                                    id="L"
                                    value="L"
                                    {...register('shirtSize')}
                                />
                                L
                            </label>
                            <label htmlFor="XL">
                                <input
                                    type="radio"
                                    id="XL"
                                    value="XL"
                                    {...register('shirtSize')}
                                />
                                XL
                            </label>
                        </div>

                        {errors.shirtSize && <p>{errors.shirtSize.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="comments">Other Comments:</label>
                        <textarea id="comments" {...register('comments')}></textarea>
                        {errors.comments && <p>{errors.comments.message}</p>}
                    </div>

                    {/* Текст і зображення попереднього перегляду */}
                    <div className="tshirt-preview">
                        <label>T-Shirt Preview:</label>
                        <img src={tshirtImage} alt="T-Shirt Preview"/>
                    </div>

                    <button type="submit">Submit</button>
                </>
            ) : (
                <div className="thank-you-message">
                    <h3>Thank you for your order!</h3>
                    <p>Your response has been successfully submitted.</p>
                    <button type="button" onClick={handleResetForm}>
                        Submit Another Response
                    </button>
                </div>
            )}
        </form>
    );
}

export default TShirtForm;
