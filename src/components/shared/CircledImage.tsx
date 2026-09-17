import circlePattern from "/assets/shared/desktop/bg-pattern-small-circle.svg";

type CircledImageProps = {
  img: string;
  patternStyle?: string;
}

function CircledImage({ img, patternStyle }: CircledImageProps) {
  return (
    <div className="relative w-50.5">
      <img src={circlePattern} alt="" className={`absolute w-full ${patternStyle ?? ""}`} />
      <img src={img} alt="" className="relative z-10 max-w-50.25" />
    </div>
  )
}

export default CircledImage;