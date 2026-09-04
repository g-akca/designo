type CompanyValueProps = {
  img: string;
  title: string;
  description: string;
};

function CompanyValue({ img, title, description }: CompanyValueProps) {
  return (
    <div className="flex flex-col gap-12 items-center">
      <img src={img} alt="" className="w-50.5" />

      <div className="flex flex-col gap-8 text-center">
        <h2 className="font-medium text-[20px] leading-base tracking-[5px] uppercase">{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default CompanyValue;