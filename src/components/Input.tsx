interface Props {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
const Input: React.FC<Props> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  required = false,
}: Props) => {
  return (
    <input
      className="nes-input is-dark text-white outline-none "
      type={type}
      placeholder={placeholder}
      name={label}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
