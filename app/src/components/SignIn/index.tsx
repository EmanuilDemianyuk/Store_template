import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  IconButton,
  Checkbox
} from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';
import { useVerificationUserMutation } from "../../store/api/users.api";
import Cookies from 'js-cookie';
import { USER__CASHE__KEY } from "../../constants/browserApiKey";
import { TStatusCode } from "../../typesOrInterface/types";
import cookiesLifeCycle from "../../functions/cookiesLifeCycle";

type SignInValues = {
    email: string;
    password: string;
}
 
export function SignIn({openModalWindow, setOpenModalWindow}: any):JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const [authFail, setAuthFail] = useState<TStatusCode | undefined>();
  const handleModalWindow = () => setOpenModalWindow(!openModalWindow);
  
  const [verificationUser]  = useVerificationUserMutation();
  
  
  const form = useForm<SignInValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const { register, reset, handleSubmit, formState: { errors } } = form;

  const onSubmit = async (dataForm: SignInValues) => {    
    try {
      const payload = await verificationUser(dataForm).unwrap();
      const userData = JSON.stringify(payload)
      Cookies.set(USER__CASHE__KEY, userData, cookiesLifeCycle(checked, 7));

      reset();
      handleModalWindow();
    } 
    catch (error) {
      if(typeof error === 'object') {
        setAuthFail(error as TStatusCode);
      }
    }
  };

  return (
    <>
      <IconButton onClick={handleModalWindow} className={styles.SignIn__icon}>
        <i className="fa-solid fa-circle-user fa-2xl" style={{color: "#dcfce7"}}></i>
      </IconButton>
      <Dialog
        size="xs"
        open={openModalWindow}
        handler={handleModalWindow}
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
                    minLength: 8
                })}
                />
                <p className={styles.SignIn__errorMsg}>{errors.password?.message}</p>
                { 
                  authFail && <p className={styles.SignIn__errorMsg}>{authFail?.data.message}</p>
                }
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
                <Checkbox crossOrigin='true' onChange={() => {
                 setChecked(!checked) 
                }} label="Remember Me" />
                <Typography 
                variant="small" 
                className={styles.SignIn__linkBox}>
                    Don&apos;t have an account?
                    <Typography
                    as="a"
                    href="/signup"
                    variant="small"
                    className={styles.SignIn__link}
                    onClick={handleModalWindow}
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