type StorySectionProps = {
  heading: string;
  story: string;
  image: string;
  tabletImage: string;
  desktopImage: string;
  isReversed?: boolean;
};

function StorySection({ heading, story, image, tabletImage, desktopImage, isReversed = false }: StorySectionProps) {
  const paragraphs = story
    .split(/<br\s*\/?>/i)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div 
      className={`
        flex flex-col bg-[#FDF3F0] bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] 
        bg-position-[left_320px] bg-no-repeat overflow-hidden tablet:rounded-[15px] tablet:bg-position-[right_110px]
        desktop:bg-bottom desktop:min-h-160 desktop:gap-23.5 ${isReversed ? "desktop:flex-row-reverse" : "desktop:flex-row"}
      `}
    >
      <picture>
        <source media="(min-width: 1440px)" srcSet={desktopImage} />
        <source media="(min-width: 768px)" srcSet={tabletImage} />
        <img src={image} alt="" className="h-80 w-full object-cover desktop:h-full desktop:w-119" />
      </picture>

      <div 
        className={`
          px-6 py-12 min-h-136.25 max-w-143 self-center flex flex-col justify-center 
          gap-6 text-center tablet:py-17 tablet:px-0 tablet:min-h-104 desktop:text-start
          desktop:min-h-auto ${isReversed ? "desktop:pl-32" : "desktop:pr-32"}
        `}
      >
        <h2 className="text-[32px] leading-9 font-medium text-peach tablet:text-[40px] tablet:leading-12">{heading}</h2>

        <div className="flex flex-col gap-6">
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