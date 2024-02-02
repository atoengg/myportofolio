import React, { useEffect, useState } from "react";
import Layouts from "../../layouts/Layouts";
import CardCertif from "../../components/Fragments/CardCertif/CardCertif";
import {
  sertifBangdev,
  sertifBugBounty,
  sertifDigitalent,
  sertifMSIB,
  sertifPelcode,
  sertifProgateCMD,
  sertifProgateGit,
  sertifProgateHTMLCSS,
  sertifProgateJS,
  sertifProgateReact,
  sertifWebinarCyber,
  sertifWebinarReact,
} from "../../../image";
import SkeletonCardCertif from "../../components/Fragments/SkeletonLoading/SkeletonCardCertif";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const [loading, setLoading] = useState(true);
  const [displayedCertificates, setDisplayedCertificates] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCertificates();
        setDisplayedCertificates(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchCertificates = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            img: sertifMSIB,
            title: "MSIB BATCH 5",
            description: t("descCertif1"),
            type: "NEW",
            catagory1: "Studi Independent",
            catagory2: "Alterra Academy",
          },
          {
            img: sertifBangdev,
            title: "Bootcamp UI/UX Design & Web Class",
            description: t("descCertif2"),
            catagory1: "BootCamp",
            catagory2: "Bangkalan dev",
          },
          {
            img: sertifDigitalent,
            title: "Intro to Front-end Development",
            description: t("descCertif3"),
            catagory1: "Kominfo",
            catagory2: "Fresh Graduate Academy",
          },
          {
            img: sertifWebinarReact,
            title: "Webinar React JS",
            description: t("descCertif4"),
            catagory1: "Edspert.id",
            catagory2: "React JS",
          },
          {
            img: sertifPelcode,
            description: t("descCertif5"),
            title: "Coding Training",
            catagory1: "Python",
            catagory2: "Himasi UTM",
          },
          {
            img: sertifBugBounty,
            title: "Basic Hacking Webinar",
            description: t("descCertif6"),
            catagory1: "Bug Hunter",
            catagory2: "Merdeka Siber",
          },
          {
            img: sertifWebinarCyber,
            description: t("descCertif7"),
            title: "Webinar Cyber Security",
            catagory1: "Webinar",
            catagory2: "Himasis Poltek STMI Jakarta",
          },
          {
            img: sertifProgateHTMLCSS,
            title: "Course HTML & CSS",
            description: t("descCertif8"),
            catagory1: "Progate",
            catagory2: "HTML & CSS",
          },
          {
            img: sertifProgateJS,
            title: "Course Javascript",
            description: t("descCertif9"),
            catagory1: "Progate",
            catagory2: "Javascript",
          },
          {
            img: sertifProgateCMD,
            title: "Course Command Line",
            description: t("descCertif10"),
            catagory1: "Progate",
            catagory2: "CMD",
          },
          {
            img: sertifProgateGit,
            title: "Course GIT",
            description: t("descCertif11"),
            catagory1: "Progate",
            catagory2: "GIT",
          },
          {
            img: sertifProgateReact,
            title: "Course React",
            description: t("descCertif12"),
            catagory1: "Progate",
            catagory2: "React JS",
          },
        ]);
      }, 2000);
    });
  };

  return (
    <div>
      <Layouts>
        <section className="py-20">
          <div className="container">
            <h4 className="font-bold uppercase text-2xl mb-5">
              {">_ My Certificate"}
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {!loading ? (
                displayedCertificates.map((item, index) => (
                  <CardCertif key={index} {...item} />
                ))
              ) : (
                <SkeletonCardCertif certificate={12} />
              )}
            </div>
          </div>
        </section>
      </Layouts>
    </div>
  );
};

export default Certificate;
