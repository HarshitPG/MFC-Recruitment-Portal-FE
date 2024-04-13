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

      <div className="nes-container is-rounded w-full md:w-[70%] is-dark dark-nes-container overflow-y-scroll">
        <form className="flex flex-col gap-8 md:gap-4 w-full">
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <label className="w-full md:w-[40%]">Mobile Number:</label>
            <Input label={"mobile"} placeholder="Your mobile" type="text" />
          </section>
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <label className="w-full md:w-[40%]">Personal Email:</label>
            <Input label={"email"} placeholder="Personal Email" type="text" />
          </section>
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <p className="w-full md:w-[40%]">Domains:</p>
            <div className="flex flex-col">
              <label>
                <input type="checkbox" className="nes-checkbox is-dark" />
                <span className="text-xs md:text-base">Technical</span>
              </label>
              <label>
                <input type="checkbox" className="nes-checkbox is-dark" />
                <span className="text-xs md:text-base">Design</span>
              </label>
              <label>
                <input type="checkbox" className="nes-checkbox is-dark" />
                <span className="text-xs md:text-base">Management</span>
              </label>
            </div>
          </section>
          <section className="flex items-start text-xs md:text-base flex-col">
            <label className="w-full">
              Have you volunteered in any of the MFC event:
              <br />
              If yes, enter event name
            </label>
            <Input
              label={"volunteer"}
              placeholder="Enter event details"
              type="text"
            />
          </section>
          <section className="flex items-start text-xs md:text-base flex-col">
            <label className="w-full">
              Have you participated in any of the MFC event:
              <br />
              If yes, enter event name
            </label>
            <Input
              label={"participated"}
              placeholder="Enter event details"
              type="text"
            />
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
