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
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './style.module.scss';

function OrderForm():JSX.Element {
    const [deliveryMethod, setDeliveryMethod] = useState<boolean>(true);
    const { card } = useTypedSelector(state => state);

    const onChangeDelivery = () => setDeliveryMethod(!deliveryMethod);
    
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
                        value='Delivery'
                        color='orange' 
                        crossOrigin={undefined}
                        checked={deliveryMethod} 
                        onChange={() => onChangeDelivery()}
                    />
                    <Radio 
                        name="delivery" 
                        label="Pickup" 
                        value='Pickup'
                        color='orange' 
                        crossOrigin={undefined}
                        checked={!deliveryMethod} 
                        onChange={() => onChangeDelivery()} 
                    />
                </div>
                {
                    deliveryMethod ?
                    (
                        <div>
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
                        </div>
                    )
                    :  <></>
                }
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
                {
                    deliveryMethod ?
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
                        </div>
                    ) : <></>
                }
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
                <OrderValue deliveryMethod={deliveryMethod} products={card} />
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