import { Link } from "react-router-dom";

export const ItemPreview = (props) => {
  const { watchItem, styles } = props;
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
