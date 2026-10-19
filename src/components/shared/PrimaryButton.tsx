import { Link } from "react-router";

type PrimaryButtonProps = {
  children: React.ReactNode;
  color?: "white" | "peach";
  type?: "button" | "submit";
  to?: string;
};

function PrimaryButton({ children, color = "white", type = "button", to }: PrimaryButtonProps) {
  const className = `
    rounded-lg min-w-38 min-h-14 flex justify-center items-center uppercase font-medium text-[15px] 
    leading-5.5 tracking-[1px] transition-all cursor-pointer hover:bg-light-peach
    ${color === "white" ? "bg-white hover:text-white" : "bg-peach text-white"}
  `;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;