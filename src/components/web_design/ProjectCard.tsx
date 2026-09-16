type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
};

function ProjectCard({ name, description, image }: ProjectCardProps) {
  return (
    <div 
      className="
        flex flex-col bg-[#FDF3F0] rounded-[15px] overflow-hidden tablet:min-h-77.5 
        tablet:grid tablet:grid-cols-[339px_auto] tablet:items-center desktop:flex
      "
    >
      <img src={image} alt={name} className="h-80 object-cover object-top tablet:h-auto" />

      <div className="px-7.5 py-8 flex flex-col gap-4 text-center tablet:px-8 tablet:gap-3.75 desktop:gap-4">
        <h2 className="text-peach text-[20px] leading-base tracking-[5px] font-medium uppercase">{name}</h2>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;