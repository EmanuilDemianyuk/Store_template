import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imgSrc: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  imgSrc,
  rating,
}) => {
  return (
    <Card className="mt-6 w-80 h-[425px]">
      <CardHeader className="relative h-56 text-black">
        <img src={imgSrc} alt={name} />
      </CardHeader>
      <CardBody className="text-black">
        <div className="flex justify-between items-center mb-2">
          <Typography variant="h5" className="mb-2 text-black font-content">
            {name}
          </Typography>
          <Typography variant="h6">
            <span className="me-2 font-content">{rating}.0</span>
            <i
              className="fa-solid fa-star bg-BrandLightGreen p-2 rounded-full"
              style={{ color: '#068c52' }}
            ></i>
          </Typography>
        </div>
        <Typography className='font-content h-16'>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-center">
        <Typography variant="h4" className="text-black font-content">
          {price}$
        </Typography>
        <Button
          variant="outlined"
          className="font-content rounded-full border-BrandDarkGreen text-BrandDarkGreen hover:bg-BrandDarkGreen hover:text-white"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;