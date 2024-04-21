import { ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  submit?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}
const Button = ({ children, submit, onClick, className, disabled }: Props) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`nes-btn is-error custom-nes-error ${className}`}
      onClick={onClick}
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
};

export default Button;
