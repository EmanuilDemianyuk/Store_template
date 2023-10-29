import { IProduct } from "../typesOrInterface/interface";

/**
 * @description The function accepts an array of products of type IProduct and returns the sum of these products
 * @param products - array of products of type IProduct
 * @returns - the amount of goods
 */
const getTotalPrice = (products: IProduct[]): number => {
    const totalPrice = products?.map(item => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0) || 0;

    return totalPrice;
}

export default getTotalPrice;
