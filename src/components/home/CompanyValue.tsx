import circlePattern from "/assets/shared/desktop/bg-pattern-small-circle.svg";

type CompanyValueProps = {
  img: string;
  patternStyle?: string;
  title: string;
  description: string;
};

function CompanyValue({ img, patternStyle, title, description }: CompanyValueProps) {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="relative w-50.5">
        <img src={circlePattern} alt="" className={`absolute w-full ${patternStyle ?? ""}`} />
        <img src={img} alt="" className="relative z-10 max-w-50.25" />
      </div>

      <div className="flex flex-col gap-8 text-center">
        <h2 className="font-medium text-[20px] leading-base tracking-[5px] uppercase">{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default CompanyValue;