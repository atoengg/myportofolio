import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hi, I'm",
          introduction:
            "I am a information systems student at Trunojoyo University. I've honed my skills in HTML, CSS, and JavaScript, and I've learned advanced JavaScript frameworks like React.js to create dynamic web applications. I am committed to staying up to date with the latest technology developments to continue pushing the boundaries of web development.",
          aboutme: ">_ About Me",
          titleDescription: "Hi Kidss🖖, who am i?",
          descriptionMe1:
            "Let me introduce myself, Mohammad Irham Al Karim, who was raised by my father and mother in the city of Gresik. Yep, I was born in 2002 to 1 sibling. I like the world of IT starting from grade 2 MTS/SMP, at that time I read an article about hackers and from there I started to become familiar with the term programming language. Since that incident, I have been interested in exploring the world of IT.",
          descriptionMe2:
            "Previously I had an interest in the IT world, especially engineering software. I have hobbies that I still do today, like playing volleyball, hiking and camping.",
          descriptionMe3:
            "The first time I learned a programming language started when I was in high school, in grade 12, by watching YouTube video tutorials. At that time I had difficulty learning programming languages. Even when I was in college my academic abilities could be said to be mediocre.",
          descriptionMe4:
            "To be precise, in the 7th semester, I took part in a program from the Ministry of Education and Culture, namely the independent study independent campus at the Alterra Academy partner. I focused on studying the front end using the React JS tech stack, which at that time I didn't know much about the React JS tech stack. However, thanks to the guidance of my mentor and my hard work in learning, I was finally able to create a web application using the React JS tech stack.",
          mySkills: ">_ My Skills",
          subtitleMySkills:
            "The skills, tools and technologies I am really good at:",
          myExperience: ">_ My Experience",
          subtitleMyExperience:
            "Here is a quick summary of my most recent experiences:",
          experience1: "Team Lead Frontend",
          descExpLead1: "divide tasks to each member of the frontend division.",
          descExpLead2:
            "Code review, managing conflicts, merging code from branch 1 with other branches.",
          descExpLead3:
            "following up on the progress of each member, becoming a bridge for other divisions when there are complaints from team members.",
          descExpLead4: "provide assessments to team members.",
          descExpLead5:
            "Provide progress reports on capstone project work to PM and mentors every time there is a class.",
          experience2: "Coding Training",
          descExpPelcode1:
            "Preparing the material: The speaker needs to prepare comprehensive and structured material on the basics of Python. This includes covering fundamental concepts, syntax, data types,variables, operators, flow control, data structures, and basic functions in the Python programming language.",
          descExpPelcode2: "Providing examples and demonstrations.",
          descExpPelcode3:
            "assigning programming tasks using Python. This promotes active participation and deepens participants understanding.",
          experience3: "Laboratory Assistant",
          descExpLab1:
            "deliver material in practicum in accordance with the module.",
          descExpLab2: "provide practitioners with practical assignments.",
          descExpLab3: "Provide guidance and support to practitioners.",
          descExpLab4:
            "Administrative tasks: in the form of providing assessments to practitioners regarding the tasks being carried out.",
          experience4: "IT Team",
          descExpIt1: "technical preparation and setup.",
          descExpIt2:
            "creation and maintenance of digital materials: such as multimedia presentations, promotional vidios, and promotional materials to be displayed on screens or monitors.",
        },
      },
      ina: {
        translation: {
          greeting: "Hai, Saya",
          introduction:
            "Saya seorang mahasiswa sistem informasi di Universitas Trunojoyo. Saya telah mengasah keterampilan saya dalam HTML, CSS, dan JavaScript, dan saya telah mempelajari framework JavaScript tingkat lanjut seperti React.js untuk membuat aplikasi web dinamis. Saya berkomitmen untuk selalu mengikuti perkembangan teknologi terkini untuk terus mendorong batas-batas pengembangan web.",
          aboutme: ">_ Tentang Saya",
          titleDescription: "Hai Kidss🖖, Siapa aku?",
          descriptionMe1:
            "perkenalkan saya Mohammad Irham Al Karim dibesarkan oleh Ayah dan Ibu di kota Gresik. Yapss, saya kelahiran tahun 2002 dari 1 saudara. Saya suka dunia IT mulai dari kelas 2 MTS/SMP, waktu itu iseng baca artikel tentang hacker dan dari situ mulai mengenal istilah bahasa pemrogaman. Semenjak kejadian itu saya pun tertarik untuk mendalami dunia IT.",
          descriptionMe2:
            "sebelum saya memiliki minat di dunia IT khususnya software engineering, saya mempunyai hobi yang masih saya lakukan sampai sekarang seperti bermain voli, hiking, dan camping.",
          descriptionMe3:
            "pertama kali saya belajar bahasa pemrogaman dimulai saat saya duduk di bangku SMA tepatnya kelas 12, dengan bermodalkan menonton vidio tutorial youtube. Pada waktu itu saya sempat mengalami kesulitan dalam mempelajari bahasa pemrogaman. Bahkan saat kuliah kemampuan akademik saya bisa di bilang biasa-biasa saja.",

          descriptionMe4:
            "tepatnya pada semester 7, saya mengikuti program dari kemendikbud yakni kampus merdeka studi independent di mitra alterra academy. Saya berfokus menekuni bidang front end dengan menggunakan tech stack react js, yang saat itu tidak banyak yang saya ketahui soal tech stack react js. Namun, berkat didikan dari mentor dan usaha keras saya dalam belajar, saya pun akhirnya mampu membuat aplikasi web dengan menggunakan tech stack react js.",
          mySkills: ">_ Kemampuan Saya",
          subtitleMySkills:
            "Keterampilan, alat, dan teknologi yang sangat saya kuasai:",
          myExperience: ">_ Pengalaman Saya",
          subtitleMyExperience:
            "Berikut ringkasan singkat pengalaman terbaru saya:",
          experience1: "Ketua Tim Frontend",
          descExpLead1:
            "membagikan tugas kepada setiap anggota divisi frontend.",
          descExpLead2:
            "Review kode, pengelolaan konflik, penggabungan kode dari branch 1 dengan branch lain.",
          descExpLead3:
            "menindak lanjuti progres dari setiap anggota, menjadi jembatan bagi divisi lain ketika ada keluhan dari anggota tim.",
          descExpLead4: "memberikan penilaian kepada anggota tim.",
          descExpLead5:
            "Memberikan laporan kemajuan pekerjaan capstone project kepada PM dan mentor setiap kali ada kelas",
          experience2: "Pelatihan Coding",
          descExpPelcode1:
            "Mempersiapkan materi: Pembicara perlu menyiapkan materi dasar-dasar Python secara komprehensif dan terstruktur. Termasuk mencakup konsep dasar, sintaksis, tipe data, variabel, operator, kontrol aliran, struktur data, dan fungsi dasar dalam bahasa pemrograman Python.",
          descExpPelcode2: "Memberikan contoh dan demonstrasi.",
          descExpPelcode3:
            "menugaskan tugas pemrograman menggunakan Python. Hal ini mendorong partisipasi aktif dan memperdalam pemahaman peserta.",
          experience3: "Asisten laboratorium",
          descExpLab1: "menyampaikan materi praktikum sesuai dengan modul.",
          descExpLab2: "memberikan kepada praktikan berupa tugas praktikum",
          descExpLab3: "Memberikan bimbingan dan dukungan kepada praktikan.",
          descExpLab4:
            "Tugas administratif: berupa memberikan penilaian kepada praktikan terkait tugas yang di kerjakan.",
          experience4: "Tim IT",
          descExpIt1: "persiapan dan pengaturan teknis.",
          descExpIt2:
            "pembuatan dan pemeliharaan materi digital: seperti presentasi multimedia, video promosi, dan materi promosi untuk ditampilkan di layar atau monitor.",
        },
      },
    },
  });
