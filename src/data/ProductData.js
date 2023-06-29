import watch1 from "../assets/photos/watch-1.jpg";
import watch2 from "../assets/photos/watch-2.jpg";
import watch3 from "../assets/photos/watch-3.jpeg";
import uniqid from "uniqid";

// We use the number property in each object because the React documentation
// recommends against using the same id to map over an object as well as using it
// for other things.

export const productData = [
  {
    id: uniqid(),
    watchName: "Styler",
    price: 85.43,
    quantity: 0,
    productImage: watch1,
    imageAlt:
      "A photo of a Calvin Klein wristwatch with a black face, silver hands and hour markers, and a black mesh strap, resting on its side on a yellow background.",
    number: 1,
  },
  {
    id: uniqid(),
    watchName: "Executive",
    price: 123.23,
    quantity: 0,
    productImage: watch2,
    imageAlt:
      "A photo of a silver wristwatch with a black face, white markings, three subdials, a tachymeter, and a date window, resting on a textured gray surface.",
    number: 2,
  },
  {
    id: uniqid(),
    watchName: "Cool guy",
    price: 94.34,
    quantity: 0,
    productImage: watch3,
    imageAlt:
      "A photo of a Rolex Deepsea Sea-Dweller watch with a stainless steel case and bracelet, black dial, blue and black bezel, date window, and helium escape valve, on a gray fabric background.",
    number: 3,
  },
];
