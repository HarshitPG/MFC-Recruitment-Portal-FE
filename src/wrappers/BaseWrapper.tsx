import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const BaseWrapper = ({ children }: Props) => {
  return (
    <div className="w-full min-w-screen min-h-screen md:max-h-screen flex flex-col overflow-x-hidden font-arcade">
      {children}
    </div>
  );
};

export default BaseWrapper;
