import icons from "../../assets/icons.svg";

export const Icon = ({ className, id }) => {
  return (
    <>
      <svg className={className}>
        <use href={`${icons}#${id}`} />
      </svg>
    </>
  );
};
