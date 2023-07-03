import elegantMesh from "../assets/photos/elegantMesh.jpg";
import chronographClassic from "../assets/photos/chronographClassic.jpg";
import uniqid from "uniqid";

import styles from "../pages/Shop/styles.module.css";

// We use the number property for two reasons:
// 1) in each object because the React documentation
// recommends against using the same id to map over an object as well as using it
// for other things.
// 2) Each cart item has it's own child route, and an ID is needed to display each
// child route. Because we already have an ID when mapping over the watchObjects, it is
// called number here instead

export const productData = [
  {
    id: uniqid(),
    watchName: "Elegant Mesh",
    imgDescription:
      "This elegant wristwatch features a black face with silver hands and hour markers, set in a sleek silver case. The black mesh strap adds a touch of sophistication to the design. The Calvin Klein brand name on the face is a mark of quality and style.",
    price: 85.43,
    quantity: 0,
    inCart: false,
    productImage: elegantMesh,
    previewImgStyle: styles.elegantMeshImg,
    imageAlt:
      "A photo of a Calvin Klein wristwatch with a black face, silver hands and hour markers, and a black mesh strap, resting on its side on a yellow background.",
    number: 1,
  },
  {
    id: uniqid(),
    watchName: "Chronograph Classic",
    imgDescription:
      "This stylish silver wristwatch boasts a black face with white markings, three subdials for seconds, minutes, and hours, and a tachymeter on the outer edge. The date window between the 4 and 5 o’clock positions adds functionality to this classic design. The stainless steel bracelet with fold-over clasp completes the timeless look.",
    price: 123.23,
    quantity: 0,
    inCart: false,
    productImage: chronographClassic,
    previewImgStyle: styles.chronographClassic,
    imageAlt:
      "A photo of a silver wristwatch with a black face, white markings, three subdials, a tachymeter, and a date window, resting on a textured gray surface.",
    number: 2,
  },
  {
    id: uniqid(),
    watchName: "Cool guy",
    price: 94.34,
    quantity: 0,
    inCart: false,
    // productImage: watch3,
    imageAlt:
      "A photo of a Rolex Deepsea Sea-Dweller watch with a stainless steel case and bracelet, black dial, blue and black bezel, date window, and helium escape valve, on a gray fabric background.",
    number: 3,
  },
];
