import elegantMesh from "../assets/photos/elegantMesh.jpg";
import chronographClassic from "../assets/photos/chronographClassic.jpg";
import goldPrestige from "../assets/photos/goldPrestige.jpg";
import desertRose from "../assets/photos/desertRose.jpg";
import silverClassic from "../assets/photos/silverClassic.jpg";
import leatherTimekeeper from "../assets/photos/leatherTimekeeper.jpg";
import blackEdition from "../assets/photos/blackEdition.jpg";
import blueHorizon from "../assets/photos/blueHorizon.jpg";
import woodland from "../assets/photos/woodland.jpg";
import uniqid from "uniqid";

import styles from "../pages/Shop/styles.module.css";

export const productData = [
  {
    id: uniqid(),
    watchName: "Elegant Mesh",
    imgDescription:
      "This elegant wristwatch features a black face with silver hands and hour markers, set in a sleek silver case.",
    price: 385.43,
    quantity: 0,
    inCart: false,
    productImage: elegantMesh,
    previewImgStyle: styles.elegantMeshImg,
    imageAlt:
      "A photo of a Calvin Klein wristwatch with a black face, silver hands and hour markers, and a black mesh strap, resting on its side on a yellow background.",
  },
  {
    id: uniqid(),
    watchName: "Chronograph Classic",
    imgDescription:
      "This stylish silver wristwatch boasts a black face with white markings, three subdials for seconds, minutes, and hours, and a tachymeter on the outer edge.",
    price: 223.23,
    quantity: 0,
    inCart: false,
    productImage: chronographClassic,
    previewImgStyle: styles.chronographClassic,
    imageAlt:
      "A photo of a silver wristwatch with a black face, white markings, three subdials, a tachymeter, and a date window, resting on a textured gray surface.",
  },
  {
    id: uniqid(),
    watchName: "Gold Prestige",
    imgDescription:
      "The Gold Prestige is a stunning timepiece that combines classic design with modern luxury.",
    price: 494.34,
    quantity: 0,
    inCart: false,
    productImage: goldPrestige,
    previewImgStyle: styles.goldPrestige,
    imageAlt: "Watch with white face, gold casing, and black leather strap",
  },
  {
    id: uniqid(),
    watchName: "Desert Rose",
    imgDescription:
      "This stunning rose gold watch features a round face with black minute and hour hands.",
    price: 399,
    quantity: 0,
    inCart: false,
    productImage: desertRose,
    previewImgStyle: styles.desertRose,
    imageAlt:
      "A rose gold watch with black hands on a bed of succulent plants.",
  },
  {
    id: uniqid(),
    watchName: "Silver Classic",
    imgDescription:
      "This timeless Timex wristwatch boasts a silver metal band and a round white face with black numbers and hands.",
    price: 299,
    quantity: 0,
    inCart: false,
    productImage: silverClassic,
    previewImgStyle: styles.silverClassic,
    imageAlt:
      "A silver Timex wristwatch with a white face and black numbers on a black wooden surface.",
  },
  {
    id: uniqid(),
    watchName: "Leather Timekeeper",
    imgDescription:
      "This elegant Seiko watch features a black face with silver hands and white hour markers, set on a brown leather strap.",
    price: 449,
    quantity: 0,
    inCart: false,
    productImage: leatherTimekeeper,
    previewImgStyle: styles.leatherTimekeeper,
    imageAlt:
      "A Seiko watch with a black face and silver hands on a brown leather strap.",
  },
  {
    id: uniqid(),
    watchName: "Black Edition",
    imgDescription:
      "This stylish wristwatch features a black face with white vintage style numbers and hands, set in a black case.",
    price: 429,
    quantity: 0,
    inCart: false,
    productImage: blackEdition,
    previewImgStyle: styles.blackEdition,
    imageAlt:
      "A black wristwatch with white vintage style numbers and hands, and three smaller dials within the main dial.",
  },
  {
    id: uniqid(),
    watchName: "Blue Horizon",
    imgDescription:
      "This elegant wristwatch features a blue face with a black bezel and white numbers and markers, set in a silver case.",
    price: 399,
    quantity: 0,
    inCart: false,
    productImage: blueHorizon,
    previewImgStyle: styles.blueHorizon,
    imageAlt:
      "A silver wristwatch with a blue face, black bezel, white numbers and markers, and a date window.",
  },
  {
    id: uniqid(),
    watchName: "Woodland",
    imgDescription:
      "This unique wristwatch features a round wooden face with black hour, minute, and second hands, set on a tan leather strap with red and white stitching.",
    price: 349,
    quantity: 0,
    inCart: false,
    productImage: woodland,
    previewImgStyle: styles.woodland,
    imageAlt:
      "A wooden wristwatch with a tan leather strap and black hands, resting on a bed of green pine needles.",
  },
];
