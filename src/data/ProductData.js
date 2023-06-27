import watch1 from "../assets/photos/watch-1.jpg"
import watch2 from "../assets/photos/watch-2.jpg";
import watch3 from "../assets/photos/watch-3.jpeg";
import uniqid from "uniqid";

export const productData = [
    {
        id: uniqid(),
        watchName: "Styler",
        price: 85.43,
        quantity: 0,
        productImage: watch1,
    },
    {
        id: uniqid(),
        watchName: "Executive",
        price: 123.23,
        quantity: 0,
        productImage: watch2,
    },
    {
        id: uniqid(),
        watchName: "Cool guy",
        price: 94.34,
        quantity: 0,
        productImage: watch3,
    },
];
