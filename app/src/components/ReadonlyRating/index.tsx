import { Rating } from "@material-tailwind/react";
 
export default function ReadonlyRating({ rate }: { rate: number }):JSX.Element {
    return <Rating value={rate} readonly />;
}