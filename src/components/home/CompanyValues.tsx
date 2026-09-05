import CompanyValue from "./CompanyValue";
import passionateImg from "/assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "/assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "/assets/home/desktop/illustration-friendly.svg";

type ValueItem = {
  img: string;
  patternStyle?: string;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    img: passionateImg,
    title: "Passionate",
    description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: resourcefulImg,
    patternStyle: "-rotate-90",
    title: "Resourceful",
    description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: friendlyImg,
    patternStyle: "rotate-90",
    title: "Friendly",
    description: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

function CompanyValues() {
  return (
    <section className="px-6 flex flex-col gap-20 items-center">
      {values.map((val) => (
        <CompanyValue
          key={val.title}
          img={val.img}
          patternStyle={val.patternStyle}
          title={val.title}
          description={val.description}
        />
      ))}
    </section>
  )
}

export default CompanyValues;