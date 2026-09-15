import ProjectCard from "./ProjectCard";
import expressImg from "/assets/web-design/desktop/image-express.jpg";
import transferImg from "/assets/web-design/desktop/image-transfer.jpg";
import photonImg from "/assets/web-design/desktop/image-photon.jpg";
import builderImg from "/assets/web-design/desktop/image-builder.jpg";
import blogrImg from "/assets/web-design/desktop/image-blogr.jpg";
import campImg from "/assets/web-design/desktop/image-camp.jpg";

const projects = [
  {
    name: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: expressImg,
  },
  {
    name: "Transfer",
    description: "Site for low-cost money transfers and sending money within seconds",
    image: transferImg,
  },
  {
    name: "Photon",
    description: "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImg,
  },
  {
    name: "Builder",
    description: "Connects users with local contractors based on their location",
    image: builderImg,
  },
  {
    name: "Blogr",
    description: "Blogr is a platform for creating an online blog or publication",
    image: blogrImg,
  },
  {
    name: "Camp",
    description: "Get expert training in coding, data, design, and digital marketing",
    image: campImg,
  },
];

function ProjectsSection() {
  return (
    <section className="flex flex-col gap-10 tablet:gap-8">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.name}
          name={proj.name}
          description={proj.description}
          image={proj.image}
        />
      ))}
    </section>
  )
}

export default ProjectsSection;