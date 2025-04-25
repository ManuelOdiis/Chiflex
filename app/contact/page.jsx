import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "../../components/Socials";
import Form from "./Form";
import Menubar from "@/components/Menubar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div>
      <Menubar />
      <section className="pt-16 xl:pt-32" id="contact">
        <div className="container mx-auto">
          <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
            <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
              {/*info*/}
              <div className="w-full xl:max-w-[380px] xl:pr[70px]xl:border-r xl:border-border/40 h-640px]">
                <h4 className="text-[26px] font-primary font-bold mb-6">
                  Contact Us
                </h4>
                <p className="mb-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae veritatis illo quisquam repellat, iusto incidunt! Quas
                  esse quae est id nesciunt velit ut hic. Accusantium
                  reprehenderit dicta quos hic cumque.
                </p>
                {/*contact item*/}
                <div className="flex flex-col gap-[40px] mb-16">
                  {/*contact item*/}
                  <div className="flex items-start gap-[20px]">
                    <div>
                      <RiChat1Line className="text-[28px] text-accent" />
                    </div>
                    <div>
                      <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                        Chat with us
                      </h5>
                      <p className="m-4">Our friendly team is here to help</p>
                      <p className="font-semibold font-primary">
                        Here@Chiflex.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[20px]">
                    <div>
                      <RiMapPin2Line className="text-[28px] text-accent" />
                    </div>
                    <div>
                      <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                        Office
                      </h5>
                      <p className="m-4">Come and say hello at our Office</p>
                      <p className="font-semibold font-primary">
                        1250 Brickstone Ave, Dallas, TX 75201, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[20px]">
                    <div>
                      <RiSmartphoneLine className="text-[28px] text-accent" />
                    </div>
                    <div>
                      <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                        Phone
                      </h5>
                      <p className="m-4">Mon-Sat 8am-5pm</p>
                      <p className="font-semibold font-primary">
                        +1 (555) 000-0000
                      </p>
                    </div>
                  </div>
                </div>
                <Socials
                  containerStyles="flex gap-[40px]"
                  iconStyles="text-primary text-[20px]"
                />
              </div>
              {/*form*/}
              <div className="flex-1">
                <h2 className="h2 mb-3">Request An Order</h2>
                <p className="mb-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat, laboriosam a dignissimos voluptatem, fugit doloremque
                  asperiores velit excepturi molestias recusandae praesentium
                  nisi distinctio, ullam amet odio eum. Architecto, deserunt?
                </p>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
