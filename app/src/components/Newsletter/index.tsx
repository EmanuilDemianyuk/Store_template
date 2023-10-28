import { useForm } from 'react-hook-form';
import styles from './style.module.scss';

type FormValues = {
  email: string;
}

const Newsletter = ():JSX.Element => {
  const form = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    }
  });
  const { register, resetField, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    resetField('email');
  }

  return (
    <div className={styles.Newsletter}>
        <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p>The latest news, articles, and resources, sent to your inbox weekly</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input 
            type='email' 
            placeholder='Enter your email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email format'
              }
            })}
            className={styles.inputEmail}/>

            <input
            value="Subscribe"
            type='submit'
            className={styles.inputSubmit}/>
        </form>

        <div className={styles.Newsletter__errorMessage}>
          {errors.email?.message}
        </div>
    </div>
  )
}

export default Newsletter;