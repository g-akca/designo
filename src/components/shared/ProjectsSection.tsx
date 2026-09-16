import ProjectCard from "./ProjectCard";

type Project = {
  name: string;
  description: string;
  image: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="relative flex flex-col gap-10 tablet:gap-8 desktop:grid desktop:grid-cols-3 desktop:gap-x-7.5">
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