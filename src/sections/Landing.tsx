import Input from "../components/Input";
import Button from "../components/Button";
import BoundingBox from "../components/BoundingBox";
const Landing = () => {
  return (
    <div className="w-full flex-grow h-[100vh] md:h-full relative flex justify-center items-center text-dark">
      <BoundingBox>
        <div className="w-full h-full relative z-[100] flex justify-between flex-col md:flex-row">
          <div className="heading text-center md:text-left">
            <h1 className="text-[2rem] md:text-[2.6rem] text-prime">
              MOZILLA FIREFOX
            </h1>
            <span className="text-light text-base md:text-2xl">
              IS RECRUITING
            </span>
          </div>
          <div className="flex-grow h-full p-4 md:p-8 mt-4 md:mt-0">
            <form className="flex flex-col gap-3 md:gap-6 w-full md:w-[60%] mx-auto">
              <Input label={"email"} placeholder="Email" type="text" />
              <Input
                label={"password"}
                placeholder="Password"
                type="password"
              />
              <Button submit={true}>Sign In</Button>
            </form>
            <section className="text-center mt-6 md:mt-12 text-light bg-dark py-2 md:py-4 w-full md:w-[60%] mx-auto relative">
              <p className="mb-8 md:mb-12 text-xs md:text-base">
                Don't have an account?
              </p>
              <div className="text-black text-sm md:text-lg cursor-pointer w-full bg-prime absolute bottom-0 py-1">
                SignUp
              </div>
            </section>
          </div>
        </div>
        <img
          src="/background.png"
          alt=""
          className="hidden md:block absolute bottom-0 invert brightness-[50%] left-0 scale-95"
        />
        <div className="absolute bottom-0 w-full md:hidden">
          <img
            src="/empty-bg.png"
            alt=""
            className="w-[85%] mx-auto invert brightness-50 absolute bottom-8"
          />
          <img
            src="/Dino.png"
            alt=""
            className="invert w-20 absolute bottom-10"
          />
          <img
            src="/cacti.png"
            alt=""
            className="invert w-20 bottom-10 absolute right-20"
          />
          <img
            src="/cacti.png"
            alt=""
            className="invert w-10 bottom-10 absolute right-16"
          />
        </div>
      </BoundingBox>
    </div>
  );
};

export default Landing;
