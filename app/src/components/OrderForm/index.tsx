import React from 'react';
import {
    Input,
    Radio,
    Checkbox,
    Button,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import styles from './style.module.scss';

function OrderForm():JSX.Element {
    return (
        <section className={styles.OrderForm}>
            <h3>Ordering</h3>
            <form>
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Delivery method
                </Typography>
                <div className={styles.OrderForm__blockOne}>
                    <Radio 
                        name="delivery" 
                        label="Delivery"
                        color='orange' 
                        crossOrigin={undefined} 
                        defaultChecked 
                    />
                    <Radio 
                        name="delivery" 
                        label="Pickup" 
                        color='orange' 
                        crossOrigin={undefined} 
                    />
                </div>
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Delivery address
                </Typography>
                <div className={styles.OrderForm__blockTwo}>
                    <Input 
                        size="lg"
                        color="green"
                        label="Harrisburg"
                        crossOrigin={undefined} 
                        disabled={true}
                        className="rounded-lg" 
                    />
                    <Input 
                        size="lg"
                        color="green"
                        label="Street*"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                </div>
                <div className={styles.OrderForm__blockThree}>
                    <div>
                    <Input 
                        size="lg"
                        color="green"
                        label="House building*"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    </div>
                    <div>
                    <Input 
                        size="lg"
                        color="green"
                        label="Entrance"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    </div>
                    <div>
                    <Input 
                        size="lg"
                        color="green"
                        label="Floor"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    </div>
                    <div>
                    <Input 
                        size="lg"
                        color="green"
                        label="Apartment"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    </div>
                </div>
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Contacts
                </Typography>
                <div className={styles.OrderForm__blockTwo}>
                    <Input 
                        size="lg"
                        color="green"
                        label="Name*"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                    <Input 
                        size="lg"
                        color="green"
                        label="Mobile number*"
                        crossOrigin={undefined} 
                        className="rounded-lg" 
                    />
                </div>
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Delivery time
                </Typography>
                <div className={styles.OrderForm__blockOne}>
                    <Radio 
                        name="time" 
                        label="Delivery as soon as possible"
                        color='orange' 
                        crossOrigin={undefined} 
                        defaultChecked 
                    />
                    <Radio 
                        name="time" 
                        label="Normal delivery (from one hour to two hours)" 
                        color='orange' 
                        crossOrigin={undefined} 
                    />
                </div>
                <Typography 
                variant='h5'
                className={styles.OrderForm__h5}
                >
                    Payment method
                </Typography>
                <div className={styles.OrderForm__blockOne}>
                    <Radio 
                        name="payment" 
                        label="Cash"
                        color='orange' 
                        crossOrigin={undefined} 
                        defaultChecked 
                    />
                    <Radio 
                        name="payment" 
                        label="Bank card upon receipt" 
                        color='orange' 
                        crossOrigin={undefined} 
                    />
                </div>
                <Checkbox 
                    label="Do not call me back to clarify the order"
                    color='orange'  
                    crossOrigin={undefined} 
                />
                <div className='my-4'>
                    <Textarea 
                        label="Comment"
                        color="green"
                    />
                </div>
                <div>
                    <Typography
                    variant='h6'
                    className='font-content'
                    >
                        The amount of the order:  $
                    </Typography>
                    <Typography
                    variant='h6'
                    className='font-content'
                    >
                        Delivery cost: 10$
                    </Typography>
                </div>
                <div className={styles.OrderForm__blockFour}>
                    <Typography
                    variant='h4'
                    className={styles.OrderForm__h5}
                    >
                        Total:
                    </Typography>
                    <Typography
                    variant='h4'
                    className='font-content text-orange-600'
                    >
                          $
                    </Typography>
                </div>
                <Checkbox 
                    label="I agree with the public offer agreement"
                    color='orange'  
                    crossOrigin={undefined} 
                />
                <div className={styles.OrderForm__blockBtn}>
                    <button 
                    type='submit'
                    >
                        Send order
                    </button>
                </div>
            </form>
        </section>
    );
}

export default OrderForm;