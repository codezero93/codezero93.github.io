export const siteConfig = {
  name: "Samran Ali",
  title: "Senior Mobile Application Developer",
  description:
    "Portfolio of Samran Ali, a senior mobile developer in Riyadh building Flutter and native apps for the Saudi market.",
  accentColor: "#1d4ed8",
  social: {
    email: "samraan.ali.93@gmail.com",
    linkedin: "https://linkedin.com/in/samraan-ali",
    twitter: "", // left empty so the X/Twitter icon is hidden
    github: "",
  },
  aboutMe:
    "I'm a senior mobile developer based in Riyadh with 9 years of experience designing, building, and shipping apps for Android and iOS. At ZADIP Group I've built Flutter apps used across Saudi Arabia, including Ektefa (HR and payroll) and Cadre (jobs), each with 50K+ downloads, published on Google Play, the App Store, Huawei AppGallery, and Microsoft Store. Before that I built and published 7 native Android apps. I work across the stack, from Flutter and native Kotlin/Swift to backend services in NestJS and FastAPI, and I care about clean architecture, testing, performance, and RTL-aware apps that work well for Arabic-speaking users.",
  skills: [
    "Flutter",
    "Dart",
    "Kotlin",
    "Swift",
    "Provider",
    "Bloc",
    "Stacked (MVVM)",
    "Clean Architecture",
    "Firebase",
    "Node.js",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "REST APIs",
    "Claude & OpenAI APIs",
    "Codemagic CI/CD",
    "Figma",
  ],
  projects: [
    {
      name: "Ektefa",
      description:
        "Cloud-based HR and payroll system covering payroll, attendance, leave, and employee records. 50K+ downloads; I've owned the app for 6+ years across mobile, web, and desktop.",
      link: "https://play.google.com/store/apps/details?id=com.zadip.ektefa2&hl=en",
      skills: ["Flutter", "Stacked", "Firebase", "REST APIs"],
    },
    {
      name: "Cadre",
      description:
        "Job-hunting platform connecting candidates directly with employers that use Ektefa. 50K+ downloads.",
      link: "https://play.google.com/store/apps/details?id=com.zadip.cadre&hl=en",
      skills: ["Flutter", "Firebase", "REST APIs"],
    },
    {
      name: "Muaref QR",
      description:
        "QR and Bluetooth check-in and attendance system on mobile, web, and kiosk tablets, integrated with the Ektefa ecosystem.",
      link: "https://apps.apple.com/app/id1506494945",
      skills: ["Flutter", "BLE", "NestJS"],
    },
    {
      name: "Nafeth",
      description:
        "Vehicle management and rental solution built as a Flutter desktop application, published on the Microsoft Store.",
      link: "https://apps.microsoft.com/detail/9pk20ph53l2v",
      skills: ["Flutter Desktop", "Windows"],
    },
    {
      name: "Kafy",
      description:
        "Healthcare appointment platform with separate Patient and Doctor apps, including booking and scheduling flows.",
      skills: ["Flutter", "Firebase"],
    },
  ],
  experience: [
    {
      company: "ZADIP Group, Riyadh",
      title: "Senior Mobile Application Developer",
      dateRange: "Jul 2019 - Present",
      bullets: [
        "Designed and built 5+ production Flutter apps, including Ektefa and Cadre (each 50K+ downloads), published across Google Play, the App Store, Huawei AppGallery, and Microsoft Store.",
        "Owned the Ektefa HR and payroll app for 6+ years, growing it into an ecosystem of connected products (Muaref attendance, Cadre jobs).",
        "Shipped apps on 3 platforms (mobile, web, and Windows/macOS desktop) from a single shared Flutter codebase.",
        "Developed NestJS backend services and REST APIs, including a kiosk device-provisioning service using the Google Android Management API.",
        "Integrated REST APIs, Firebase, Google Maps, and QR/Bluetooth attendance, with role-based access for sensitive payroll and patient data.",
        "Led the full lifecycle from Figma design through Codemagic CI/CD to store submission.",
      ],
    },
    {
      company: "Systems Integration, Karachi",
      title: "Mobile Application Developer (Native Android)",
      dateRange: "Feb 2017 - Jul 2019",
      bullets: [
        "Built and published 7 native Android apps (Kotlin/Java) to Google Play, owning development and release end to end.",
        "Built client-server apps with REST APIs and JSON parsing for real-time enterprise data.",
        "Implemented Bluetooth, GPS, and hardware-level communication to integrate peripheral devices.",
      ],
    },
  ],
  education: [
    {
      school: "Iqra University, Karachi",
      degree: "Bachelors of Science in Computer Science",
      dateRange: "2013 - 2017",
      achievements: [
        "Coursework: Data Structures & Algorithms, Artificial Intelligence, Design & Analysis of Algorithms",
      ],
    },
  ],
};
