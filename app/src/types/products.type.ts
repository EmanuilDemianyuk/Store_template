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