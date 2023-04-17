import BulletPoint from "./BulletPoint";
import ImageContainer from "../common/Layout/ImageContainer";

function BulletPointList({ title, bulletPoints, collabImg, reverse = false }) {
  const baseOuterDivCSS =
    "justify-evenly items-center gap-6 lg:flex-row-reverse lg:justify-between";
  const reverseouterdivcss =
    "justify-between items-start lg:flex-row lg:items-center";

  let outerDivCSS = reverse ? reverseouterdivcss : baseOuterDivCSS;

  let innerDivCSS = reverse
    ? "justify-center items-end text-right"
    : "justify-start items-start text-left flex-wrap";

  let bulletCSS = reverse ? "items-end" : "items-start";
  let h3CSS = reverse ? "pl-10" : "pr-10";

  return (
    <div className={`flex flex-col-reverse w-full lg:gap-24 ${outerDivCSS}`}>
      <div className={`flex flex-col gap-8 w-full lg:w-1/2 ${innerDivCSS}`}>
        <h3
          className={`text-4xl font-bold md:text-5xl md:font-normal md:${h3CSS}`}
        >
          {title}
        </h3>
        <div
          className={`flex flex-col justify-center gap-2 w-full mb-12 ${bulletCSS}`}
        >
          {bulletPoints.map((bp) => {
            return (
              <BulletPoint key={bp.text} image={bp.image} text={bp.text} />
            );
          })}
        </div>
      </div>
      <ImageContainer className="aspect-square">
        <img src={collabImg} alt="#" className="w-full h-full rounded-md" />
      </ImageContainer>
    </div>
  );
}

export default BulletPointList;
