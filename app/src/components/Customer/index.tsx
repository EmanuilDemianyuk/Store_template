import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import ReadonlyRating from '../ReadonlyRating';

interface CustomerProps {
    fullName: string,
    rate: number,
    date: string,
    imageSrc: string
}

function Customer({fullName, rate, date, imageSrc}: CustomerProps):JSX.Element {
    return (
        <Card color="white" shadow={true} className="w-full max-w-[50rem] p-4 mx-auto">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={imageSrc}
            alt="avatar"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className='font-content'>
                {fullName}
              </Typography>
              <ReadonlyRating rate={rate} />
            </div>
            <Typography color="blue-gray" className='font-content'>{date}</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className='font-content'>
            &quot;I'm incredibly impressed with the food delivery service. The food arrived promptly, was delicious, and the delivery person was friendly and professional. Highly recommended!&quot;
          </Typography>
        </CardBody>
      </Card>
    );
}

export default Customer;