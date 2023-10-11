import React, { FC } from 'react';
import {
    Typography,
    IconButton,
    Drawer,
    DrawerStylesType
  } from "@material-tailwind/react";
import { useActionData } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const DrawerSlide:FC = () => {
  const { openRight } = useTypedSelector(state => state.drawer);
  const { handlerDrawerSlide } = useActions();

  const handlerClose = () => {
    handlerDrawerSlide(!openRight);
  }
  
  return (
    <div className='h-full'>
      <Drawer
      placement="right"
      open={openRight}
      onClose={handlerClose}
      className="p-4 bg-BrandWrapperGB"
      overlay={false}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" className='text-4xl font-header'>
            Cart
          </Typography>
          <IconButton variant="text" onClick={handlerClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 text-BrandDarkGreen"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerSlide;