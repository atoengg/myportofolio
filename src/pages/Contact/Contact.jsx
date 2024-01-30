import React from "react";
import Layouts from "../../layouts/Layouts";
import SocialMedia from "../../components/Elements/SocialMedia/SocialMedia";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import FormContact from "../../components/Fragments/Form/FormContact";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <div>
      <Layouts>
        <section className="py-20">
          <div className="container">
            <Toaster
              position="top-right"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: "",
                duration: 5000,
                style: {
                  background: "#fff",
                  color: "#030712",
                },

                // Default options for specific types
                success: {
                  duration: 3000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
              }}
            />
            <div className="text-center">
              <h4 className="font-bold uppercase text-[#030712] text-2xl mb-3">
                {">_ Contact Me"}
              </h4>
              <p className="text-[#030712] text-sm">
                Don't be Shy, to get in touch with me:
              </p>
            </div>

            <div className="flex flex-wrap items-center mt-10 ">
              <div className="w-full lg:w-6/12">
                <h2 className="mb-3 font-semibold text-lg">Get In Touch</h2>
                <p className="mb-3">
                  {" "}
                  I'm open to collaboration and eager to discuss how my skills
                  and experience can contribute to your success. Whether it's a
                  one-time project or an ongoing partnership, I'm here to
                  explore and create value together. you can contact me via
                  email or social media.
                </p>
                <div className="flex items-center">
                  <SocialMedia location={"https://github.com/atoengg"}>
                    <BsGithub />
                  </SocialMedia>
                  <SocialMedia
                    location={
                      "https://www.linkedin.com/in/mohammad-irham-alkarim-648070215/"
                    }
                  >
                    <BsLinkedin />
                  </SocialMedia>
                  <SocialMedia location={"https://wa.me/082141598507"}>
                    <BsWhatsapp />
                  </SocialMedia>
                  <SocialMedia location={"https://www.instagram.com/atoengg/"}>
                    <BsInstagram />
                  </SocialMedia>
                </div>
              </div>

              <div className="w-full lg:w-6/12">
                <FormContact />
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    </div>
  );
};

export default Contact;
