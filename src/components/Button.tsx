import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  submit?: boolean;
}
const Button = ({ children, submit }: Props) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className="nes-btn is-error custom-nes-error"
    >
      {children}
    </button>
  );
};

export default Button;
