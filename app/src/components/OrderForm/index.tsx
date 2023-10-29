import { useState } from 'react';
import {
    Input,
    Radio,
    Checkbox,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import OrderValue from './OrderValue';
import OrderCard from './OrderCard';
import OrderSuccess from '../OrderSuccess';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';

type OrderFormValues = {
    deliveryMethod: string;
    city: string;
    street: string;
    house: string;
    entrance: string;
    floor: string;
    apartment: string;
    name: string;
    mobile: string;
    deliveryTime: string;
    paymentMethod: string;
    call: string;
    comment: string;
    publicOffer: string;
}

function OrderForm():JSX.Element {
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    const form = useForm<OrderFormValues>();
    const { register, handleSubmit, formState, watch } = form;
    const { errors } = formState;

    const onSubmit = (data: OrderFormValues) => {
        setSubmitSuccess(true);
        
    };

    const deliveryMethod = watch('deliveryMethod');

    const { card } = useTypedSelector(state => state);
    
    return (
        <section className={styles.OrderForm}>
            <h3>Ordering</h3>
            <div className={styles.OrderForm__ordersCon}>
                {
                    (card.length === 0)
                    ? <p className={styles.OrderForm__h5}>
                        Your cart is empty
                      </p>
                    : 
                    <ul className={styles.OrderForm__list}>
                        {card.map(item => (
                            <OrderCard
                            id={item.id}
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            img={item.img} 
                            category={item.category}
                            type={item.type}
                            rating={item.rating}
                            />
                        ))}
                    </ul>
                }
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Delivery method
                </Typography>
                <div className={styles.OrderForm__blockOne}>
                    <Radio 
                        {...register('deliveryMethod', {
                            required: 'Delivery method is required'
                        })}
                        name="deliveryMethod" 
                        label="Delivery"
                        value='Delivery'
                        color='orange' 
                        crossOrigin={undefined}
                    />
                    <Radio 
                        {...register('deliveryMethod', {
                            required: 'Delivery method is required'
                        })}
                        name="deliveryMethod" 
                        label="Pickup" 
                        value='Pickup'
                        color='orange' 
                        crossOrigin={undefined}
                    />
                    <p className={styles.OrderForm__errorMsg}>{errors.deliveryMethod?.message}</p>
                </div>
                {
                    deliveryMethod === 'Delivery' &&
                    (
                        <div>
                        <Typography 
                        variant='h5'
                        className={styles.OrderForm__h5}
                        >
                            Delivery address
                        </Typography>
                        <div className={styles.OrderForm__blockTwo}>
                            <div>
                            <Input 
                                {...register('city')}
                                value="Harrisburg"
                                size="lg"
                                color="green"
                                name="city"
                                label="Harrisburg"
                                crossOrigin={undefined} 
                                disabled={true}
                                className="rounded-lg" 
                            />
                            </div>
                            <div>
                            <Input 
                                {...register('street', {
                                    required: 'Street is required'
                                })}
                                size="lg"
                                color="green"
                                name='street'
                                label="Street*"
                                crossOrigin={undefined} 
                                className="rounded-lg" 
                            />
                            <p className={styles.OrderForm__errorMsg}>{errors.street?.message}</p>
                            </div>
                        </div>
                        <div className={styles.OrderForm__blockThree}>
                            <div>
                            <Input 
                                {...register('house', {
                                    required: 'House building is required'
                                })}
                                size="lg"
                                color="green"
                                name='house'
                                label="House building*"
                                crossOrigin={undefined} 
                                className="rounded-lg" 
                            />
                            <p className={styles.OrderForm__errorMsg}>{errors.house?.message}</p>
                            </div>
                            <div>
                            <Input 
                                {...register('entrance', {
                                    required: 'Entrance is required'
                                })}
                                size="lg"
                                color="green"
                                name='entrance'
                                label="Entrance*"
                                crossOrigin={undefined} 
                                className="rounded-lg" 
                            />
                            <p className={styles.OrderForm__errorMsg}>{errors.entrance?.message}</p>
                            </div>
                            <div>
                            <Input 
                                {...register('floor')}
                                size="lg"
                                color="green"
                                name='floor'
                                label="Floor"
                                crossOrigin={undefined} 
                                className="rounded-lg" 
                            />
                            </div>
                            <div>
                            <Input
                                {...register('apartment')} 
                                size="lg"
                                color="green"
                                name='apartment'
                                label="Apartment"
                                crossOrigin={undefined} 
                                className="rounded-lg" 
                            />
                            </div>
                        </div>
                        </div>
                    )
                }
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Contacts
                </Typography>
                <div className={styles.OrderForm__blockTwo}>
                    <div>
                    <Input 
                        {...register('name', {
                            required: 'Name is required',
                            minLength: 3
                        })}
                        size="lg"
                        color="green"
                        name='name'
                        label="Name*"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    <p className={styles.OrderForm__errorMsg}>{errors.name?.message}</p>
                    </div>
                    <div>
                    <Input 
                        {...register('mobile', {
                            required: 'Mobile number is required',
                            pattern: {
                                value: /^\+380\d{9}$/,
                                message: 'Mobile number must start with +380 and 9 more digits'
                            }
                        })}
                        type='text'
                        size="lg"
                        color="green"
                        name='mobile'
                        label="Mobile number*"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    <p className={styles.OrderForm__errorMsg}>{errors.mobile?.message}</p>
                    </div> 
                </div>
                {
                    deliveryMethod === 'Delivery' &&
                    (
                        <div>
                        <Typography 
                        variant='h5'
                        className={styles.OrderForm__h5}
                        >
                            Delivery time
                        </Typography>
                        <div className={styles.OrderForm__blockOne}>
                            <Radio 
                                {...register('deliveryTime', {
                                    required: 'Delivery Time is required'
                                })}
                                value="Quick"
                                name="deliveryTime" 
                                label="Delivery as soon as possible"
                                color='orange' 
                                crossOrigin={undefined} 
                            />
                            <Radio 
                                {...register('deliveryTime', {
                                    required: 'Delivery Time is required'
                                })}
                                value="Normal"
                                name="deliveryTime" 
                                label="Normal delivery (from one hour to two hours)" 
                                color='orange' 
                                crossOrigin={undefined} 
                            />
                            <p className={styles.OrderForm__errorMsg}>{errors.deliveryTime?.message}</p>
                        </div>
                        </div>
                    )
                }
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Payment method
                </Typography>
                <div className={styles.OrderForm__blockOne}>
                    <Radio 
                        {...register('paymentMethod', {
                            required: 'Payment method is required'
                        })}
                        value="Cash"
                        name="paymentMethod" 
                        label="Cash"
                        color='orange' 
                        crossOrigin={undefined} 
                    />
                    <Radio 
                        {...register('paymentMethod', {
                            required: 'Payment method is required'
                        })}
                        value="Bank card"
                        name="paymentMethod" 
                        label="Bank card upon receipt" 
                        color='orange' 
                        crossOrigin={undefined} 
                    />
                    <p className={styles.OrderForm__errorMsg}>{errors.paymentMethod?.message}</p>
                </div>
                <Checkbox 
                    {...register('call')}
                    name="call"
                    label="Do not call me back to clarify the order"
                    color='orange'  
                    crossOrigin={undefined} 
                />
                <div className='my-4'>
                    <Textarea
                        {...register('comment')}
                        name="comment" 
                        label="Comment"
                        color="green"
                    />
                </div>
                <OrderValue deliveryMethod={deliveryMethod} products={card} />
                <Checkbox 
                    {...register('publicOffer', {
                        required: 'Public offer is required'
                    })}
                    name="publicOffer" 
                    label="I agree with the public offer agreement"
                    color='orange'  
                    crossOrigin={undefined} 
                />
                <p className={styles.OrderForm__errorMsg}>{errors.publicOffer?.message}</p>
                <div className={styles.OrderForm__blockBtn}>
                    <button 
                    type='submit'
                    >
                        Send order
                    </button>
                </div>
            </form>
            {submitSuccess && <OrderSuccess />}
        </section>
    );
}

export default OrderForm;