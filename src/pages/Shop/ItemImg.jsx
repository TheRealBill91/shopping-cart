import { useImage } from "react-image";

// Not currently in use

export const ItemImg = (props) => {
  const { imgSrc, alt } = props;
  const { src } = useImage({
    srcList: imgSrc,
  });

  return (
    <img
      style={{
        width: "auto",
        height: "105px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      src={src}
      alt={alt}
    />
  );
};
