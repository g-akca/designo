import CircledImage from "./CircledImage";
import PrimaryButton from "./PrimaryButton";

type LocationItemProps = {
  name: string;
  image: string;
  patternStyle?: string;
};

function LocationItem({ name, image, patternStyle = "" }: LocationItemProps) {
  return (
    <div className="flex flex-col gap-12 items-center">
      <CircledImage img={image} patternStyle={patternStyle} />

      <div className="flex flex-col gap-8 items-center">
        <p className="text-[20px] leading-base uppercase font-medium tracking-[5px]">{name}</p>

        <PrimaryButton color="peach">
          See Location
        </PrimaryButton>
      </div>
    </div>
  )
}

export default LocationItem;