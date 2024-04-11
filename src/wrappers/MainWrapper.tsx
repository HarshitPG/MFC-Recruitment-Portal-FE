import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const MainWrapper = ({ children }: Props) => {
  return <div className="w-full h-[90vw]">{children}</div>;
};

export default MainWrapper;
