import { Link } from "react-router-dom";

export const ItemPreview = (props) => {
  const { watchItem, styles } = props;
  const watchNumber = watchItem.number;
  const watchLinkID = `/shop/${watchNumber}`;
  console.log(watchItem.previewImgStyle);

  return (
    <Link to={watchLinkID}>
      <article className={styles.article}>
        <div
          className={watchItem.previewImgStyle}
          // alt="a silver watch with a blue face and a yellow background"
        ></div>
        <h3>{watchItem.watchName}</h3>
        <p>${watchItem.price}</p>
      </article>
    </Link>
  );
};
