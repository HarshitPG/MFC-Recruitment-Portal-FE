import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const MainWrapper = ({ children }: Props) => {
  return <div className="w-full min-h-screen h-screen">{children}</div>;
};

export default MainWrapper;
