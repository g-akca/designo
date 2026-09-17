type PrimaryButtonProps = {
  children: React.ReactNode;
  color?: "white" | "peach";
};

function PrimaryButton({ children, color = "white" }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`
        rounded-lg min-w-38 min-h-14 uppercase font-medium text-[15px] leading-5.5
        tracking-[1px] transition-all cursor-pointer hover:bg-light-peach
        ${color === "white" ? "bg-white hover:text-white" : "bg-peach text-white"}
      `}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;