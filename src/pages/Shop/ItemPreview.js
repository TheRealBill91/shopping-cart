import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const ItemPreview = (props) => {
  const { watchItem } = props;
  const watchName = watchItem.watchName.split(" ").join("").toLowerCase();
  const watchLinkName = `/shop/${watchName}`;

  return (
    <Link to={watchLinkName}>
      <article className={styles.article}>
        <div
          className={watchItem.previewImgStyle}
          aria-label={watchItem.imageAlt}
        ></div>
        <h3>{watchItem.watchName}</h3>
        <p className={styles.pricePara}>${watchItem.price}</p>
      </article>
    </Link>
  );
};
