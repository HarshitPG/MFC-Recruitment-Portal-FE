import Input from "../components/Input";
const Profile = () => {
  return (
    <div className="w-full profile py-6 flex gap-4 flex-col md:flex-row">
      <div className="nes-container is-dark with-title w-full md:w-[30%] dark-nes-container">
        <p className="title dark-nes-container text-sm md:text-base">
          Hello World!
        </p>
        <p className="text-light text-xs md:text-base">
          Got a sec? We need you to spice up your profile with the right deets.
          Drop your name, contacts, Domains and whatever else floats your boat.
          It helps us help you better! Cheers!
        </p>
      </div>

      <div className="nes-container is-rounded w-full md:w-[70%] is-dark dark-nes-container ">
        <form className="flex flex-col gap-4 w-full">
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <label className="w-full md:w-[40%]">Your Name:</label>
            <Input label={"name"} placeholder="Your name" type="text" />
          </section>
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <label className="w-full md:w-[40%]">Registration No.:</label>
            <Input
              label={"registration"}
              placeholder="VIT Registration no."
              type="text"
            />
          </section>
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <p className="w-full md:w-[40%]">Domains:</p>
            <div className="flex flex-col">
              <label>
                <input type="checkbox" className="nes-checkbox is-dark" />
                <span className="text-xs md:text-xl">Technical</span>
              </label>
              <label>
                <input type="checkbox" className="nes-checkbox is-dark" />
                <span className="text-xs md:text-xl">Design</span>
              </label>
              <label>
                <input type="checkbox" className="nes-checkbox is-dark" />
                <span className="text-xs md:text-xl">Management</span>
              </label>
            </div>
          </section>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="nes-btn is-error w-fit custom-nes-error text-xs md:text-xl"
            >
              Next &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
