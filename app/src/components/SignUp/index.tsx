import { useState } from 'react';
import { Card, CardBody, CardFooter, Checkbox, Dialog, Input, Typography } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { useSetUserMutation } from '../../store/api/users.api';
import { IUser } from '../../typesOrInterface/interface';
import styles from './style.module.scss';

const SignUp = ():JSX.Element => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<IUser>();
  const [setUser] = useSetUserMutation();

  const onSubmit = async (dataForm: IUser) => {
    try {
      // const payload = await setUser(dataForm).unwrap();
      // const userData = JSON.stringify(payload);

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <Card className={styles.SignUp__Card}>
          <CardBody className={styles.SignUp__CardBody}>
            <Typography 
            variant='h4'
            className={styles.SignUp__h4}>
              Sign Up
            </Typography>
            <p className={styles.SignUp__subtitle}>Nice to meet you! Enter your details to register.</p>
            <form 
            className={styles.SignUp__form} 
            onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input 
                    {...register('userName', {
                      required: 'Name is required',
                      minLength: 3
                    })}
                    size="lg"
                    color="green"
                    name='userName'
                    label="Name*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.userName?.message}</p>
                </div>
                <div>
                  <Input 
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Invalid email format'
                    }
                    })}
                    label="Email*" 
                    size="lg" 
                    crossOrigin={undefined} 
                    type="email"
                    color="green"
                    name='email'
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.email?.message}</p>
                </div>
                <div>
                  <Input 
                    {...register('phone', {
                        required: 'Mobile number is required',
                        pattern: {
                            value: /^\+380\d{9}$/,
                            message: 'Mobile number must start with +380 and 9 more digits'
                        }
                    })}
                    type='text'
                    size="lg"
                    color="green"
                    name='phone'
                    label="Mobile number*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.phone?.message}</p>
                </div> 
                <div>
                  <Input 
                    {...register('address.address.city')}
                    value="Harrisburg"
                    size="lg"
                    color="green"
                    name="city"
                    label="Harrisburg"
                    crossOrigin={undefined} 
                    disabled={true}
                  />
                </div>
                <div>
                  <Input 
                    {...register('address.address.street', {
                        required: 'Street is required'
                    })}
                    size="lg"
                    color="green"
                    name='street'
                    label="Street*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.address?.address?.street?.message}</p>
                </div>
                <div>
                  <Input 
                    {...register('address.address.number', {
                        required: 'House building is required'
                    })}
                    size="lg"
                    color="green"
                    name='house'
                    label="House building*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.address?.address?.number?.message}</p>
                </div>
                <div>
                  <Input 
                    {...register('address.address.entrance', {
                      required: 'Entrance is required'
                    })}
                    size="lg"
                    color="green"
                    name='entrance'
                    label="Entrance*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.address?.address?.entrance?.message}</p>
                </div>
                <div>
                  <Input 
                    {...register('address.address.floor', {
                      required: 'Floor is required'
                    })}
                    size="lg"
                    color="green"
                    name='floor'
                    label="Floor*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.address?.address?.floor?.message}</p>
                </div>
                <div>
                  <Input 
                    {...register('address.address.apartment', {
                      required: 'Apartment is required'
                    })}
                    size="lg"
                    color="green"
                    name='apartment'
                    label="Apartment*"
                    crossOrigin={undefined} 
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.address?.address?.apartment?.message}</p>
                </div>
                <div>
                  <Input 
                    {...register('password', {
                    required: 'Password is required',
                    minLength: 5
                    })}
                    label="Password*" 
                    size="lg" 
                    color="green"
                    crossOrigin={undefined} 
                    type="password"
                    name='password'
                  />
                  <p className={styles.SignUp__errorMsg}>{errors.password?.message}</p>
                </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
              <button 
                type="submit"
                className={styles.SignUp__Button}
                >
                  Sign Up
              </button>
          </CardFooter>
        </Card>
    </>
  );
}

export default SignUp;