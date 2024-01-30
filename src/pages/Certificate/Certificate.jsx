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

const Certificate = () => {
  const [loading, setLoading] = useState(true);
  const [displayedCertificates, setDisplayedCertificates] = useState([]);

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
            description:
              "have successfully participated in the Kampus Merdeka MSIB program batch 5 under the auspices of the Kemendikbud at the Alterra Academy partner by studying the frontend field using ReactJS technology for 4.5 months.",
            type: "NEW",
            catagory1: "Studi Independent",
            catagory2: "Alterra Academy",
          },
          {
            img: sertifBangdev,
            title: "Bootcamp UI/UX Design & Web Class",
            description:
              "Become a participant in the UI/UX Design & Web Class Bootcamp organized by the Bangkalan Dev Community for 2 days online.",
            catagory1: "BootCamp",
            catagory2: "Bangkalan dev",
          },
          {
            img: sertifDigitalent,
            title: "Intro to Front-end Development",
            description:
              "have successfully completed the intro to front-end dev training held by Kominfo in collaboration with Progate partners for 1 month.",
            catagory1: "Kominfo",
            catagory2: "Fresh Graduate Academy",
          },
          {
            img: sertifWebinarReact,
            title: "Webinar React JS",
            description:
              'Become a participant in a webinar with the theme "Switching Your Career? Level Up Yourself as a React Js Developer" held by Edspert.id for 2 days. The webinar mostly discusses how to develop website applications using React JS.',
            catagory1: "Edspert.id",
            catagory2: "React JS",
          },
          {
            img: sertifPelcode,
            description:
              'became a speaker at a coding training event organized by Himasi with the theme "Hone Skills in Progamming Using Python" during 2 offline meetings.',
            title: "Coding Training",
            catagory1: "Python",
            catagory2: "Himasi UTM",
          },
          {
            img: sertifBugBounty,
            title: "Basic Hacking Webinar",
            description:
              "Become a participant in a webinar held by Merdeka Siber with a series of bug hunter journeys and bug hunting tips.",
            catagory1: "Bug Hunter",
            catagory2: "Merdeka Siber",
          },
          {
            img: sertifWebinarCyber,
            description:
              'became a participant in a webinar held by Himasis Polytechnic STMI Jakarta with the theme "Pentingnya Menjaga Keamanan Data Pribadi di Era Digital".',
            title: "Webinar Cyber Security",
            catagory1: "Webinar",
            catagory2: "Himasis Poltek STMI Jakarta",
          },
          {
            img: sertifProgateHTMLCSS,
            title: "Course HTML & CSS",
            description:
              "successfully completed the HTML & CSS course with 4 studies and 3 exercises on the Progate page, the course covers HTML & CSS fundamentals.",
            catagory1: "Progate",
            catagory2: "HTML & CSS",
          },
          {
            img: sertifProgateJS,
            title: "Course Javascript",
            description:
              "successfully completed the Javascript course with 7 studies on the Progate page, the course covers Javascript fundamentals for web development.",
            catagory1: "Progate",
            catagory2: "Javascript",
          },
          {
            img: sertifProgateCMD,
            title: "Course Command Line",
            description:
              "successfully completed the Command Line course with 1 studies on the Progate page, the course covers Command Line fundamentals.",
            catagory1: "Progate",
            catagory2: "CMD",
          },
          {
            img: sertifProgateGit,
            title: "Course GIT",
            description:
              "successfully completed the GIT course with 1 studies on the Progate page, the course covers GIT fundamentals.",
            catagory1: "Progate",
            catagory2: "GIT",
          },
          {
            img: sertifProgateReact,
            title: "Course React",
            description:
              "successfully completed the React course with 4 studies on the Progate page, the course covers React fundamentals for front-end web development.",
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
