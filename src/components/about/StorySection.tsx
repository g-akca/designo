type StorySectionProps = {
  heading: string;
  story: string;
  image: string;
  tabletImage: string;
};

function StorySection({ heading, story, image, tabletImage }: StorySectionProps) {
  const paragraphs = story
    .split(/<br\s*\/?>/i)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div 
      className="
        flex flex-col bg-[#FDF3F0] bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] 
        bg-position-[left_320px] bg-no-repeat overflow-hidden tablet:rounded-[15px] tablet:bg-position-[right_110px]
      "
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={tabletImage} />
        <img src={image} alt="" className="h-80 w-full object-cover" />
      </picture>

      <div 
        className="
          px-6 py-12 min-h-136.25 max-w-143 self-center flex flex-col items-center justify-center 
          gap-6 text-center tablet:py-17 tablet:px-0 tablet:min-h-104
        "
      >
        <h2 className="text-[32px] leading-9 font-medium text-peach tablet:text-[40px] tablet:leading-12">{heading}</h2>

        <div className="flex flex-col gap-5 tablet:gap-6">
          {paragraphs.map((paragraph, index) => (
            <p key={`${heading}-${index}`} className="text-[15px] leading-6.25 whitespace-pre-line tablet:text-base tablet:leading-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StorySection;