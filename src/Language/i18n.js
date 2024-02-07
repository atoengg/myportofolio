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
          descCertif1:
            "have successfully participated in the Kampus Merdeka MSIB program batch 5 under the auspices of the Kemendikbud at the Alterra Academy partner by studying the frontend field using ReactJS technology for 4.5 months.",
          descCertif2:
            "Become a participant in the UI/UX Design & Web Class Bootcamp organized by the Bangkalan Dev Community for 2 days online.",
          descCertif3:
            "have successfully completed the intro to front-end dev training held by Kominfo in collaboration with Progate partners for 1 month.",
          descCertif4:
            'Become a participant in a webinar with the theme "Switching Your Career? Level Up Yourself as a React Js Developer" held by Edspert.id for 2 days. The webinar mostly discusses how to develop website applications using React JS.',
          descCertif5:
            'became a speaker at a coding training event organized by Himasi with the theme "Hone Skills in Progamming Using Python" during 2 offline meetings.',
          descCertif6:
            "Become a participant in a webinar held by Merdeka Siber with a series of bug hunter journeys and bug hunting tips.",
          descCertif7:
            'became a participant in a webinar held by Himasis Polytechnic STMI Jakarta with the theme "Pentingnya Menjaga Keamanan Data Pribadi di Era Digital',
          descCertif8:
            "successfully completed the HTML & CSS course with 4 studies and 3 exercises on the Progate page, the course covers HTML & CSS fundamentals.",
          descCertif9:
            "successfully completed the Javascript course with 7 studies on the Progate page, the course covers Javascript fundamentals for web development.",
          descCertif10:
            "successfully completed the Command Line course with 1 studies on the Progate page, the course covers Command Line fundamentals.",
          descCertif11:
            "successfully completed the GIT course with 1 studies on the Progate page, the course covers GIT fundamentals.",
          descCertif12:
            "successfully completed the React course with 4 studies on the Progate page, the course covers React fundamentals for front-end web development.",
          myProject: ">_ My Project",
          subTitleproject: "Some projects I have built:",
          contacMe: ">_ Contact Me",
          subTitleContact: "Don't be Shy, to get in touch with me:",
          descContact:
            "I'm open to collaboration and eager to discuss how my skills and experience can contribute to your success. Whether it's a one-time project or an ongoing partnership, I'm here to explore and create value together. you can contact me via email or social media.",
          educationalBg: ">_ educational background",
          subtitleEducationBg: "The following is my educational history:",
          titleEdu: "Trunojoyo University, Madura",
          studyEdu: "S1, Information System",
          descEdu1: "Current Activity: Laboratory Assistant.",
          descEdu2:
            "Create web projects using HTML, CSS, Javascript, boostrap, tailwind css, php, and React JS.",
          descEdu3:
            "Graduated from all compulsory courses and did not retake any courses.",
          descEduAlta1:
            "successfully designed and built a technology product as a team, namely the capstone project.",
          descEduAlta2:
            "successfully designed and built a technology product individually.",
          descEduAlta3:
            "skills and comprehensive understanding of frontend fundamentals and how to implement them.",
          descEduAlta4:
            "skills and comprehensive understanding of mastering front end using the react js framework and how to implement it.",
          descEduAlta5:
            "do individual daily assignments in the form of quizzes, summaries and practicums.",
          descEduAlta6: "live sessions with mentors 3 times a week.",
          descEduAlta7: "GPA 94 out of 100.",
          descEduDigitalent1:
            "learn an introduction to front end basics such as, HTML, CSS, and Javascript, and Git.",
          descEduDigitalent2: "complete practical assignments.",
          descEduDigitalent3:
            "successfully completed the HTML and CSS team project assignments.",
          descEduDigitalent4:
            "successfully completed individual Javascript project assignments.",
          descEduDigitalent5:
            "meet with a mentor to discuss practical assignments.",
          studyEduMan: "High School Diploma in Mathematics & Science",
          descEduMan1:
            "Served as a member of the Student Council's Division of Noble Character and Moral Integrity for one term.",
          descEduMan2: "Participated in biology Olympiad classes.",
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
          descCertif1:
            "telah sukses mengikuti program MSIB Kampus Merdeka angkatan 5 dibawah naungan Kemendikbud mitra Alterra Academy dengan mempelajari bidang frontend menggunakan teknologi ReactJS selama 4,5 bulan.",
          descCertif2:
            "Menjadi peserta UI/UX Design & Web Class Bootcamp yang diselenggarakan oleh Komunitas Dev Bangkalan selama 2 hari secara online.",
          descCertif3:
            "telah berhasil menyelesaikan pelatihan intro to front-end dev yang diselenggarakan Kominfo bekerjasama dengan mitra Progate selama 1 bulan.",
          descCertif4:
            'Menjadi peserta webinar bertema "Switching Your Career? Level Up Yourself as a React Js Developer" yang diadakan oleh Edspert.id selama 2 hari. Webinar tersebut banyak membahas tentang cara mengembangkan aplikasi website menggunakan React JS.',
          descCertif5:
            "menjadi pembicara pada acara pelatihan coding yang diselenggarakan oleh Himasi dengan tema “Mengasah Keterampilan Pemrograman Menggunakan Python” selama 2 kali pertemuan offline.",
          descCertif6:
            "Jadilah peserta webinar yang diadakan Merdeka Siber dengan rangkaian perjalanan bug hunter dan tips berburu bug.",
          descCertif7:
            'menjadi peserta webinar yang diadakan oleh Himasis Politeknik STMI Jakarta dengan tema "Pentingnya Menjaga Keamanan Data Pribadi di Era Digital',
          descCertif8:
            "berhasil menyelesaikan kursus HTML & CSS dengan 4 pelajaran dan 3 latihan di halaman Progate, kursus tersebut mencakup dasar-dasar HTML & CSS.",
          descCertif9:
            "berhasil menyelesaikan kursus Javascript dengan 7 studi di halaman Progate, kursus ini mencakup dasar-dasar Javascript untuk pengembangan web.",
          descCertif10:
            "berhasil menyelesaikan kursus Command Line dengan 1 studi di halaman Progate, kursus tersebut mencakup dasar-dasar Command Line.",
          descCertif11:
            "berhasil menyelesaikan kursus GIT dengan 1 studi di halaman Progate, kursus tersebut mencakup dasar-dasar GIT.",
          descCertif12:
            "berhasil menyelesaikan kursus React dengan 4 studi di halaman Progate, kursus tersebut mencakup dasar-dasar React untuk pengembangan web front-end.",
          myProject: ">_ proyek saya",
          subTitleproject: "Beberapa proyek yang pernah saya bangun:",
          contacMe: ">_ Hubungi Saya",
          subTitleContact: "Jangan Malu, untuk menghubungi saya:",
          descContact:
            "Saya terbuka untuk berkolaborasi dan ingin mendiskusikan bagaimana keterampilan dan pengalaman saya dapat berkontribusi pada kesuksesan Anda. Baik itu proyek satu kali atau kemitraan berkelanjutan, saya di sini untuk mengeksplorasi dan menciptakan nilai bersama. Anda dapat menghubungi saya melalui email atau media sosial.",
          educationalBg: ">_ Riwayat Pendidikan",
          subtitleEducationBg:
            "berikut riwayat pendidikan yang sudah saya tempuh:",
          titleEdu: "Universitas Trunojoyo Madura",
          studyEdu: "S1, Sistem Informasi",
          descEdu1: "Aktivitas Saat Ini: Asisten Laboratorium.",
          descEdu2:
            "Buat proyek web menggunakan HTML, CSS, Javascript, boostrap, tailwind css, php, dan React JS.",
          descEdu3:
            "Lulus dari semua mata kuliah wajib dan tidak mengambil kembali mata kuliah apapun.",
          descEduAlta1:
            "berhasil merancang dan membangun produk teknologi yang dikerjakan secara tim, yakni capstone project.",
          descEduAlta2:
            "berhasil merancang dan membangun produk teknologi secara individual",
          descEduAlta3:
            "keterampilan dan pemahaman komprehensif tentang dasar-dasar frontend dan cara menerapkannya.",
          descEduAlta4:
            "keterampilan dan pemahaman komprehensif tentang penguasaan front end menggunakan framework react js dan cara mengimplementasikannya.",
          descEduAlta5:
            "mengerjakan tugas harian individu berupa kuis, rangkuman dan praktikum.",
          descEduAlta6: "sesi langsung dengan mentor 3 kali seminggu.",
          descEduAlta7: "IPK 94 dari 100.",
          descEduDigitalent1:
            "mempelajari pengenalan dasar-dasar front end seperti, HTML, CSS, dan Javascript, dan Git",
          descEduDigitalent2: "menyelesaikan tugas praktikum.",
          descEduDigitalent3:
            "berhasil menyelesaikan tugas proyek tim HTML dan CSS.",
          descEduDigitalent4:
            "berhasil menyelesaikan tugas proyek Javascript individu.",
          descEduDigitalent5:
            "meet dengan mentor untuk mendiskusikan tugas praktikum.",
          studyEduMan: "Sekolah Menengah Keatas, Matematika & Sains",
          descEduMan1:
            "Menjabat sebagai anggota OSIS Divisi Akhlak Mulia dan Integritas Moral selama satu periode.",
          descEduMan2: "Berpartisipasi dalam kelas olimpiade biologi.",
        },
      },
    },
  });
