import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  submit?: boolean;
}
const Button = ({ children, submit }: Props) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className="bg-dark text-sm md:text-lg text-arcade text-light py-2 px-6 w-fit shadow-[4px_4px_0px_#cecece]"
    >
      {children}
    </button>
  );
};

export default Button;
