import React from "react";
import { ReactNode } from "react";
// import Navbar from "./Navbar";
interface Props {
  children: ReactNode;
}
const BoundingBox = ({ children }: Props) => {
  return (
    <div className="w-[100%] h-[100%] mx-auto border-4 md:border-8 border-prime p-2 md:p-8 relative border-dashed overflow-y-scroll md:overflow-y-hidden overflow-x-hidden md:flex flex-grow">
      <div className="w-full h-full absolute top-0 left-0 border-4 border-prime blur-lg"></div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default BoundingBox;
