const Header = () => {
  return (
    <div className="w-full flex justify-between md:justify-around relative h-[3rem] md:h-[5rem]">
      <div className="w-full h-[4px] bg-white absolute top-1/2  -translate-y-1/2"></div>
      <button className="nes-btn btn-header">
        <span className="text-xl">1</span>
        <p className="text-xs hidden md:block">
          Complete
          <br />
          Profile
        </p>
      </button>
      <button className="nes-btn btn-header">
        <span className="text-xl">2</span>
        <p className="text-xs hidden md:block">Tasks</p>
      </button>
      <button className="nes-btn btn-header">
        <span className="text-xl">3</span>
        <p className="text-xs hidden md:block">
          Task
          <br />
          Submission
        </p>
      </button>
      <button className="nes-btn btn-header">
        <span className="text-xl">4</span>
        <p className="text-xs hidden md:block">
          Application
          <br />
          Status
        </p>
      </button>
    </div>
  );
};

export default Header;
