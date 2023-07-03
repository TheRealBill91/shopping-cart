import { Suspense, useEffect } from "react";
import { AddToCartButton } from "../../components/ui/AddCartButton";
import { ItemImg } from "./ItemImg";
import { Link } from "react-router-dom";

export const ItemPreview = (props) => {
  const { watchItem, styles } = props;
  const watchNumber = watchItem.number;
  const watchLinkID = `/shop/${watchNumber}`;
  // console.log(watchItem);

  return (
    <Link to={watchLinkID}>
      <article className={styles.article}>
        <img
          className={styles.previewImg}
          loading="lazy"
          src={watchItem.productImage}
          alt="a silver watch with a blue face and a yellow background"
        ></img>
        <h3>{watchItem.watchName}</h3>
        <p>${watchItem.price}</p>
      </article>
    </Link>
  );
};
