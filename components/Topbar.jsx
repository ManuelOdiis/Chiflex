import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0  bg-[#E6E9F2] dark:bg-slate-700/[.3]  flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* phone, mail and social */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className=" hidden xl:flex items-center gap-8">
            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-orange-600 flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-primary dark:text-slate-100">+ (555) 000-0000</p>
            </div>
            {/* mail*/}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-orange-600 flex items-center justify-center">
                <RiMailFill />
              </div>
              <p className="font-medium text-primary dark:text-slate-100">Email@gmail.com</p>
            </div>
          </div>
          {/*socials*/}
          <Socials
            containerStyles="flex item-center gap-8 mx-auto xl:mx-8 "
            iconStyles="text-orange-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
