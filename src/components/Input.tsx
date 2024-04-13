interface Props {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<Props> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}: Props) => {
  return (
    <input
      className="nes-input is-dark text-white outline-none "
      type={type}
      placeholder={placeholder}
      name={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
