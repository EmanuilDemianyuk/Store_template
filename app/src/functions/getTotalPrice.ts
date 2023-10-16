import { IProduct } from "../types/products.type";

const getTotalPrice = (products: IProduct[]): number => {
    const totalPrice = products?.map(item => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0) || 0;

    return totalPrice;
}

export default getTotalPrice;
