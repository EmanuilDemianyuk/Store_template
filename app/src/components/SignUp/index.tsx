import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '../../typesOrInterface/interface';

const SignUp = () => {

  const { register, resetField, handleSubmit, formState: { errors } } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = data => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('id')} type='text'/>
        
      </form>
    </div>
  )
}

export default SignUp