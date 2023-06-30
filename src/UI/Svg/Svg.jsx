/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
export const InlineSvg = (props) => {
  console.log();
  return (
    <svg
      width={props.width}
      heigth={props.height}>
      <use href={`./icons.svg#${props.nAme}`} />
    </svg>
  );
};

