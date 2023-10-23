import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';

type SignInValues = {
    email: string;
    password: string;
}
 
export function SignIn():JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const form = useForm<SignInValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const { register, resetField, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: SignInValues) => {
    // console.log(data);
    resetField('email');
    resetField('password');
    handleOpen();
  };
 
  return (
    <>
      <IconButton onClick={handleOpen} className={styles.SignIn__icon}>
        <i className="fa-solid fa-circle-user fa-2xl" style={{color: "#dcfce7"}}></i>
      </IconButton>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className={styles.SignIn__Dialog}
      >
        <Card className={styles.SignIn__Card}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <CardBody className={styles.SignIn__CardBody}>
                <Typography 
                variant="h4" 
                className={styles.SignIn__h4}>
                    Sign In
                </Typography>
                <Typography
                    className={styles.SignIn__p}
                    variant="paragraph"
                    color="gray"
                >
                    Enter your email and password to Sign In.
                </Typography>
                <Typography 
                className={styles.SignIn__h6}
                variant="h6">
                    Your Email
                </Typography>
                <Input 
                label="Email" 
                size="lg" 
                crossOrigin={undefined} 
                type="email"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Invalid email format'
                    }
                })}
                />
                <p className={styles.SignIn__errorMsg}>{errors.email?.message}</p>
                <Typography 
                className={styles.SignIn__h6}
                variant="h6">
                    Your Password
                </Typography>
                <Input 
                label="Password" 
                size="lg" 
                crossOrigin={undefined} 
                type="password"
                {...register('password', {
                    required: 'Password is required',
                    minLength: 5
                })}
                />
                <p className={styles.SignIn__errorMsg}>{errors.password?.message}</p>
           {/* <div className="-ml-2.5 -mt-3">
             <Checkbox label="Remember Me" crossOrigin={undefined} />
           </div> */}
            </CardBody>
            <CardFooter className={styles.SignIn__CardFooter}>
                <Button 
                variant="filled" 
                type="submit"
                fullWidth
                className={styles.SignIn__Button}
                >
                    Sign In
                </Button>
                <Typography 
                variant="small" 
                className={styles.SignIn__linkBox}>
                    Don&apos;t have an account?
                    <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    className={styles.SignIn__link}
                    onClick={handleOpen}
                    >
                    Sign up
                    </Typography>
                </Typography>
            </CardFooter>
            </form>
        </Card>
      </Dialog>
    </>
  );
}