import CircledImage from "../shared/CircledImage";

type CompanyValueProps = {
  img: string;
  patternStyle?: string;
  title: string;
  description: string;
};

function CompanyValue({ img, patternStyle, title, description }: CompanyValueProps) {
  return (
    <div className="flex flex-col gap-12 items-center tablet:grid tablet:grid-cols-[202px_auto] desktop:flex desktop:flex-col">
      <CircledImage img={img} patternStyle={patternStyle} />

      <div className="flex flex-col gap-8 text-center tablet:gap-4 tablet:text-start desktop:text-center desktop:gap-8">
        <h2 className="font-medium text-[20px] leading-base tracking-[5px] uppercase">{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default CompanyValue;