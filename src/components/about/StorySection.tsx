type StorySectionProps = {
  heading: string;
  story: string;
  image: string;
};

function StorySection({ heading, story, image }: StorySectionProps) {
  const paragraphs = story
    .split(/<br\s*\/?>/i)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-col bg-[#FDF3F0]">
      <img src={image} alt="" className="h-80 object-cover" />

      <div 
        className="
          bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] bg-left bg-no-repeat px-6 
          py-12 min-h-136.25 flex flex-col items-center justify-center gap-6 text-center
        "
      >
        <h2 className="text-[32px] leading-9 font-medium text-peach">{heading}</h2>

        <div className="flex flex-col gap-5">
          {paragraphs.map((paragraph, index) => (
            <p key={`${heading}-${index}`} className="text-[15px] leading-6.25 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StorySection;