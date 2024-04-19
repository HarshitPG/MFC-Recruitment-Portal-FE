import { useState } from "react";
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
  const [inputType, setInputType] = useState(type);
  return (
    <div className="relative w-full">
      <input
        className="nes-input is-dark text-white outline-none "
        type={inputType}
        placeholder={placeholder}
        name={label}
        value={value}
        onChange={onChange}
        required={required}
      />
      {type === "password" && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-2  h-1/2 w-10 outline-none border-0"
          onClick={() => {
            if (inputType === "text") {
              setInputType("password");
            } else {
              setInputType("text");
            }
          }}
          type="button"
        >
          {inputType === "password" && (
            <img src="/eye.png" alt="" className="h-full mx-auto invert" />
          )}
          {inputType === "text" && (
            <img
              src="/invisible.png"
              alt=""
              className="h-full mx-auto invert"
            />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
