import { useTranslation } from "react-i18next";
import {
  bannerAppTourSby,
  bannerEmpathiCare,
  bannerHolaaDelivery,
  bannerUtmClean,
  iconBoostrap,
  iconCss,
  iconFigma,
  iconGit,
  iconGithub,
  iconHtml,
  iconJs,
  iconMysql,
  iconNodeJs,
  iconPhp,
  iconPostman,
  iconReact,
  iconTailwindCss,
  iconVite,
  imgLeadFrontend,
  imgPelcode,
  imgTeamIT,
  imgWarlab,
} from "../../../image";

export const dataSkills = [
  {
    id: 1,
    title: "HTML",
    icon: iconHtml,
  },
  {
    id: 2,
    title: "CSS",
    icon: iconCss,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: iconJs,
  },
  {
    id: 4,
    title: "Bootsrap",
    icon: iconBoostrap,
  },
  {
    id: 5,
    title: "Tailwind Css",
    icon: iconTailwindCss,
  },
  {
    id: 6,
    title: "Github",
    icon: iconGithub,
  },
  {
    id: 7,
    title: "Postman",
    icon: iconPostman,
  },
  {
    id: 8,
    title: "GIT",
    icon: iconGit,
  },
  {
    id: 9,
    title: "PHP",
    icon: iconPhp,
  },
  {
    id: 10,
    title: "mysql",
    icon: iconMysql,
  },
  {
    id: 11,
    title: "React JS",
    icon: iconReact,
  },
  {
    id: 12,
    title: "Node JS",
    icon: iconNodeJs,
  },
  {
    id: 13,
    title: "Figma",
    icon: iconFigma,
  },
  {
    id: 14,
    title: "Vite",
    icon: iconVite,
  },
];

export const dataExperience = [
  {
    id: 1,
    image: imgLeadFrontend,
    content: (
      <>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 rounded-md shadow-md p-4">
          <div className="md:text-end">
            <time className="font-mono italic">Nov 2023 - Dec 2023</time>
          </div>
          <div className="flex flex-col text-lg font-bold md:text-end">
            Team Lead Frontend
            <span className="text-xs font-normal text-[#4b5563] italic">
              Capstone Project ~ Alterra Academy
            </span>
          </div>
          <div className="my-2">
            <img
              src={imgLeadFrontend}
              alt="image-lead-frontend"
              className="rounded-md hover:cursor-zoom-in"
            />

            <ul className="text-[15px] px-4 mt-2">
              <li className="list-disc">
                divide tasks to each member of the frontend division.
              </li>
              <li className="list-disc">
                Code review, managing conflicts, merging code from branch 1 with
                other branches.
              </li>
              <li className="list-disc">
                follow up with each member regarding the text, become a bridge
                to other divisions when there are complaints from team members.
              </li>
              <li className="list-disc">
                provide assessments to team members.
              </li>
              <li className="list-disc">
                Provide progress reports on capstone project work to PM and
                mentors every time there is a class.
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    image: imgPelcode,
    content: (
      <>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10 rounded-md shadow-md p-4 ">
          <time className="font-mono italic">Sep 2022</time>

          <div className="flex flex-col text-lg font-bold">
            Coding Training{" "}
            <span className="text-xs font-normal text-[#4b5563] italic ">
              Speaker ~ Trunojoyo Madura University
            </span>
          </div>
          <div className="my-2">
            <img
              src={imgPelcode}
              alt="image-Pelcode"
              className="rounded-md hover:cursor-zoom-in"
            />

            <ul className="text-[15px] px-4 mt-2">
              <li className="list-disc">
                Preparing the material: The speaker needs to prepare
                comprehensive and structured material on the basics of Python.
                This includes covering fundamental concepts, syntax, data types,
                variables, operators, flow control, data structures, and basic
                functions in the Python programming language.
              </li>
              <li className="list-disc">
                Providing examples and demonstrations
              </li>
              <li className="list-disc">
                assigning programming tasks using Python. This promotes active
                participation and deepens participants understanding.
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    image: imgWarlab,
    content: (
      <>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 rounded-md shadow-md p-4">
          <div className="md:text-end">
            <time className="font-mono italic">Mar 2022 - present</time>
          </div>
          <div className="flex flex-col text-lg font-bold md:text-end">
            Laboratory Assistant{" "}
            <span className="text-xs font-normal text-[#4b5563] italic ">
              Warga Lab ~ Trunojoyo Madura University
            </span>
          </div>

          <div className="my-2">
            <img
              src={imgWarlab}
              alt="image-Warlab"
              className="rounded-md hover:cursor-zoom-in"
            />

            <ul className="text-[15px] px-4 mt-2">
              <li className="list-disc">
                deliver material in practicum in accordance with the module.
              </li>
              <li className="list-disc">Delivering projects to practice.</li>
              <li className="list-disc">Providing guidance and support.</li>
              <li className="list-disc">
                Administrative tasks: Administrative duties may be assigned to
                the assistant, such as managing inventory, ordering supplies, or
                maintaining records related to the laboratory activities.
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 4,
    image: imgTeamIT,
    content: (
      <>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10 rounded-md shadow-md p-4">
          <time className="font-mono italic ">Jan 2021 - Feb 2021</time>

          <div className="text-lg font-bold flex flex-col ">
            IT Team{" "}
            <span className="text-xs font-normal text-[#4b5563] italic ">
              Campus Expo ~ MAN 1 GRESIK
            </span>
          </div>

          <div className="my-2">
            <img
              src={imgTeamIT}
              alt="image-team-IT"
              className="rounded-md hover:cursor-zoom-in"
            />

            <ul className="text-[15px] px-4 mt-2">
              <li className="list-disc">technical preparation and setup.</li>
              <li className="list-disc">
                expo website or application management.{" "}
              </li>
              <li className="list-disc">
                creation and maintenance of digital materials: such as
                multimedia presentations, promotional vidios, and promotional
                materials to be displayed on screens or monitors.
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

export const dataProjects = [
  {
    img: bannerEmpathiCare,
    title: "EmpathiCare",
    description:
      "EmpathiCare adalah aplikasi yang bertujuan membantu pengguna mengelola stres dan kecemasan. Aplikasi ini memungkinkan pengguna untuk berinteraksi dengan psikolog atau spesialis kesehatan mental, serta memberikan akses ke informasi kesehatan mental yang berguna.",
    linkGit: "https://github.com/Capstone-Mental-Health-Care-Group-6",
    linkWeb: "https://empathicare-two.vercel.app/",
    categories: [
      "React",
      "Bootstrap",
      "Golang",
      "Flutter",
      "Figma",
      "API",
      "Postman",
      "GIT",
      "Github",
      "TeamWork",
      "Vite",
      "NodeJS",
      "Web",
    ],
  },
  {
    img: bannerHolaaDelivery,
    title: "Holaa-Delivery",
    description:
      "Holaa-delivery merupakan sebuah aplikasi website delivery makanan dan minuman di tempat cafe yang berada di Dalegan, Panceng, Gresik. aplikasi ini dibuat dengan tujuan untuk menyediakan layanan pengiriman makanan dan minuman kepada pelanggan dengan lebih mudah dan efisien.",
    linkGit: "https://github.com/atoengg/holaa-delivery",
    linkWeb: "https://holaa-delivery.vercel.app/",
    categories: [
      "React",
      "Redux",
      "RestApi",
      "TailwindCss",
      "GIT",
      "Postman",
      "Firebase",
      "Vite",
      "NodeJS",
      "Web",
    ],
  },
  {
    img: bannerAppTourSby,
    title: "AppTourSurabaya",
    description:
      "AppTourSurabaya merupakan aplikasi berbasis Android yang berisi informasi dan informasi objek wisata Lokasi objek wisata ini berada di kota Surabaya yang dilengkapi dengan fasilitas lengkap dengan gambar. Diharapkan aplikasi ini dapat menjadi panduan bagi pengguna dalam mencari lokasi terkait pariwisata di kota surabaya.",
    linkGit: "https://github.com/atoengg/AppTourSurabaya",
    linkWeb: "/",
    categories: ["Kotlin", "Firebase", "TeamWork", "Github", "GIT", "Android"],
  },
  {
    img: bannerUtmClean,
    title: "UTM Clean",
    description:
      "UTM Clean merupakan sebuah platflom landing page yang bergerak dalam bidang jasa khususnya pada perawatan sepatu seperti mencuci, repaint, dan treatment.",
    linkGit: "https://github.com/atoengg/utmCleanShoes.github.io",
    linkWeb: "https://utm-clean-shoes.vercel.app/",
    categories: ["HTML", "TailwindCss", "Javascript", "Aos", "Web"],
  },
];
