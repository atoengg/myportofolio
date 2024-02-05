import React, { useEffect } from "react";
import Layouts from "../../layouts/Layouts";
import SocialMedia from "../../components/Elements/SocialMedia/SocialMedia";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import FormContact from "../../components/Fragments/Form/FormContact";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h4 className="font-bold uppercase text-2xl mb-3">
                {t("contacMe")}
              </h4>
              <p className="text-sm">{t("subTitleContact")}</p>
            </div>

            <div className="flex flex-wrap items-center mt-10 ">
              <div className="w-full lg:w-6/12">
                <h2 className="mb-3 font-semibold text-lg">Get In Touch</h2>
                <p className="mb-3">{t("descContact")}</p>
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
