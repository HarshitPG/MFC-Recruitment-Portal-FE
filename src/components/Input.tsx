interface Props {
  label: string;
  placeholder: string;
  type: string;
}
const Input = ({ label, type, placeholder }: Props) => {
  return (
    <input
      className="nes-input is-dark text-white outline-none "
      type={type}
      placeholder={placeholder}
      name={label}
    />
  );
};

export default Input;
