type PrimaryButtonProps = {
  children: React.ReactNode;
};

function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="
        bg-white rounded-lg w-38 h-14 uppercase font-medium text-[15px] leading-5.5
        tracking-[1px] hover:bg-light-peach hover:text-white transition-all cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default PrimaryButton;