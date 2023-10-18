import { Nullable } from "./types";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    category: string;
    type: string;
    rating: number;
}
export interface ProductsSwipperProps {
    products: IProduct[] | undefined;
}
export interface CustomStepperProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}
export interface IStorage {
    setItem(key: string, value: string): void;
    getItem(key: string): Nullable<string>;
    removeItem(key: string): void;
    clear():void;
}