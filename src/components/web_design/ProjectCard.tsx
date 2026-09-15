type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
};

function ProjectCard({ name, description, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-[#FDF3F0] rounded-[15px] overflow-hidden">
      <img src={image} alt={name} className="h-80 object-cover object-top" />

      <div className="px-7.5 py-8 flex flex-col gap-4 text-center">
        <h2 className="text-peach text-[20px] leading-base tracking-[5px] font-medium uppercase">{name}</h2>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;