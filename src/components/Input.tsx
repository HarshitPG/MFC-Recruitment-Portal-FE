interface Props {
  label: string;
  placeholder: string;
  type: string;
}
const Input = ({ label, type, placeholder }: Props) => {
  return (
    <input
      className="text-arcade px-4 py-2 text-sm md:text-xl bg-transparent outline-none border-2 border-[#aeaeae] text-white"
      type={type}
      placeholder={placeholder}
      name={label}
    />
  );
};

export default Input;
