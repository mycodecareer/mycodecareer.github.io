/*
 * Container is a generic component that can be used to wrap other components.
 *
 * positioning: justiy-XX and items-XX classNames
 * lg, md, sm, xs: screen size specific classNames
 *
 */
function Container(props, { positioning, spacing, lg, md, sm, xs }) {
  // Establish Defaults
  if (!positioning) positioning = "justify-center items-center";
  if (!spacing) spacing = "w-full";

  return (
    <div
      className={`flex flex-col flex-wrap ${positioning} ${spacing} ${lg} ${md} ${sm} ${xs}`}
    >
      {props.children}
    </div>
  );
}

export default Container;
