export type StackCategory = {
  category: string;
  items: string[];
};

export type StackGroup = {
  name: string;
  categories: StackCategory[];
};

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  location: string;
};

export type CompetitionItem = {
  year: string;
  event: string;
  result: string;
  highlight: boolean;
  link?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  repo?: string;
  demo?: string;
};

export const profile = {
  name: "Joshua Kunz",
  role: "Angehender Informatiker EFZ // Applikationsentwicklung",
  location: "Basel, Schweiz",
  birth: "2007, Basel",
  email: "contact@joshuakunz.com",
  github: "https://github.com/jokudev",
  githubRepo: "https://github.com/jokudev/joshuakunz.com",
  cvUrl: "/resume.pdf",
  subtitle:
    "Begeistert für Linux, Infrastruktur und Cloud-Technologien. Baue produktionsnahe Lösungen in meinem Homelab.",
  about: [
    "Ich bin Joshua Kunz, 2007 in Basel geboren und lebe in Basel. Seit meiner Kindheit faszinieren mich Computer und Technologie, was mich zur Ausbildung als Informatiker EFZ bewog.",
    "Beruflich arbeite ich als Applikationsentwickler und liebe das Problemlösen und die kreative Seite der Softwareentwicklung. Im ersten Lehrjahr wurde ich von einem erfahrenen Kollegen in die Welt von Linux, Infrastruktur und Automation eingeführt. Seitdem baue ich in der Freizeit intensiv an meinem eigenen Homelab. Mein Homelab ist mehr als nur ein Hobby – es ist mein Spielplatz für praktisches, exploratives Lernen."
  ],
  languages: [
    { name: "Deutsch", level: "Muttersprache" },
    { name: "Englisch", level: "C1" }
  ],
  interests: ["Musik", "Kochen", "Gaming", "Lesen", "Technologie", "Reisen"],
  stack: [
    {
      name: "Professional",
      categories: [
        {
          category: "Sprachen",
          items: ["Java"]
        },
        {
          category: "Datenbanken",
          items: ["PostgreSQL", "HyperSQL"]
        },
        {
          category: "Tools & IDEs",
          items: ["Maven", "GitLab", "SonarQube", "IntelliJ IDEA"]
        }
      ]
    },
    {
      name: "Homelab",
      categories: [
        {
          category: "Cloud & Infra",
          items: ["AWS", "Docker", "Kubernetes", "Terraform"]
        },
        {
          category: "CI/CD & Automation",
          items: ["Git", "GitLab CI", "Ansible", "Semaphore"]
        },
        {
          category: "Systeme & Tools",
          items: ["Linux", "Proxmox", "Talos"]
        }
      ]
    }
  ] as StackGroup[],
  education: [
    {
      period: "2022 – 2026",
      title: "Lehre Informatiker EFZ – Applikationsentwicklung",
      institution: "Swiss AviationSoftware Ltd.",
      location: "Allschwil"
    },
    {
      period: "2022 – 2026",
      title: "Technische Berufsmaturität",
      institution: "Berufsbildungszentrum Baselland",
      location: ""
    },
    {
      period: "2019 – 2022",
      title: "Sekundarschule Niveau E",
      institution: "Sekundarschule Sissach",
      location: ""
    }
  ] as EducationItem[],
  competitionMeta: "SwissSkills — Skill 53: Cloud Computing",
  competitionMetaLink: "https://skill53.ch",
  competitions: [
    {
      year: "2025",
      event: "Regionalmeisterschaften",
      result: "1. Platz",
      highlight: false,
      link: "https://www.ict-berufsbildung.ch/resources/RM_Year2025_Ranking-ALL_ICT-BBCH5.pdf"
    },
    {
      year: "2025",
      event: "Nationalmeisterschaften",
      result: "4. Platz",
      highlight: true,
      link: "https://www.ict-berufsbildung.ch/resources/Resultate_SwissSkills_ICTskills2025.pdf"
    },
    {
      year: "2026",
      event: "Regionalmeisterschaften",
      result: "8. Platz",
      highlight: false,
      link: "https://www.ict-berufsbildung.ch/resources/Regionalmeisterschaft-2026-Rangliste.pdf"
    },
    {
      year: "2027",
      event: "Nationalmeisterschaften",
      result: "qualifiziert",
      highlight: false
    }
  ] as CompetitionItem[],
  projects: [
    {
      title: "Linux-basierte Infrastruktur & Homelab",
      description: "Pseudo-produktive Infrastruktur zu Hause mit Docker, Kubernetes und IaC.",
      bullets: [
        "Aufbau und Betrieb einer pseudo-produktiven Infrastruktur mit Docker, Kubernetes und mehreren selbst gehosteten Diensten",
        "Infrastruktur-as-Code mit Terraform und Ansible für automatisierte Deployments",
        "Netzwerk-Segmentierung, TLS/PKI, Reverse Proxies und Least-Privilege-Zugriffe",
        "Monitoring & Alerting für Stabilität und Performance"
      ],
      tags: ["Linux", "Docker", "Kubernetes", "Terraform", "Ansible"],
      // repo: "https://github.com/joshuakunz"
    },
    {
      title: "Berufliche Applikationsentwicklung",
      description:
        "Praxisnahe Java- und Backend-Aufgaben im Rahmen der Lehre bei Swiss AviationSoftware Ltd.",
      bullets: ["Mitarbeit an produktionsnahen Applikationsmodulen und strukturierten Entwicklungsprozessen."],
      tags: ["Java", "Applikationsentwicklung"],
      demo: "https://www.swiss-as.com/"
    }
  ] as ProjectItem[]
};
