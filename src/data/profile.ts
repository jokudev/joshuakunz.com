export type SkillCategory = {
  category: string;
  icon: "cloud" | "container" | "workflow" | "line-chart" | "code";
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  imageAlt: string;
};

export const profile = {
  name: "Joshua Kunz",
  role: "Senior DevOps Engineer",
  subtitle: "Building resilient systems, automated pipelines, and observable infrastructure.",
  email: "hello@example.com",
  github: "https://github.com/jokudev",
  linkedin: "https://linkedin.com/in/joshua-kunz",
  twitter: "https://x.com/joshua_kunz",
  resumeUrl: "/resume.pdf",
  about: [
    "I design and operate infrastructure with reliability as a feature, not a patch. My approach combines infrastructure as code, immutable delivery, and clear operational playbooks so teams can move quickly without sacrificing safety.",
    "I focus on GitOps-driven workflows, progressive delivery, and robust CI/CD foundations that scale with product and team growth. I enjoy turning fragile build-and-release paths into predictable, observable systems.",
    "Across cloud-native environments, I treat observability as a first-class architecture concern. Metrics, traces, and logs should provide fast feedback loops for both developers and operators."
  ],
  skills: [
    {
      category: "Cloud & Infra",
      icon: "cloud",
      items: ["AWS", "Azure", "GCP", "Terraform", "Pulumi"]
    },
    {
      category: "Orchestration",
      icon: "container",
      items: ["Kubernetes", "Docker", "Helm", "ArgoCD"]
    },
    {
      category: "CI/CD",
      icon: "workflow",
      items: ["GitHub Actions", "GitLab CI", "Jenkins", "Flux"]
    },
    {
      category: "Observability",
      icon: "line-chart",
      items: ["Prometheus", "Grafana", "Datadog", "ELK"]
    },
    {
      category: "Languages",
      icon: "code",
      items: ["Go", "Python", "Rust", "TypeScript", "Bash"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Northstar Cloud Systems",
      role: "Senior DevOps Engineer",
      start: "2022-01",
      end: "Present",
      bullets: [
        "Led a multi-cluster Kubernetes migration, improving deployment reliability and reducing failed releases by 35%.",
        "Designed a reusable Terraform module framework across 6 products, cutting infrastructure provisioning time by 45%.",
        "Implemented SLO-driven observability with Prometheus and Grafana, reducing incident mean time to resolution by 38%."
      ]
    },
    {
      company: "ScaleForge Labs",
      role: "Platform Engineer",
      start: "2019-04",
      end: "2021-12",
      bullets: [
        "Rebuilt CI pipelines in GitHub Actions with parallelized jobs, reducing average build time by 50%.",
        "Introduced GitOps delivery with ArgoCD and policy checks, decreasing manual production changes by 90%.",
        "Automated cost visibility dashboards and rightsizing workflows, lowering monthly cloud spend by 22%."
      ]
    },
    {
      company: "Bytecraft Technologies",
      role: "DevOps Engineer",
      start: "2016-07",
      end: "2019-03",
      bullets: [
        "Containerized monolithic workloads and introduced Helm-based release templates across environments.",
        "Built centralized logging on ELK and alert routing, improving incident detection coverage from 60% to 95%.",
        "Developed internal release tooling in Go and Bash, reducing deployment handoff time by 40%."
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      title: "K8s GitOps Platform",
      description:
        "A multi-environment delivery platform using ArgoCD, policy checks, and Helm overlays for safe, repeatable releases.",
      tags: ["Kubernetes", "ArgoCD", "Helm", "OPA"],
      github: "https://github.com/jokudev/k8s-gitops-platform",
      demo: "https://example.com/gitops-platform",
      imageAlt: "Dashboard-style preview of a Kubernetes GitOps deployment platform."
    },
    {
      title: "Serverless Cost Optimizer",
      description:
        "An automated analysis pipeline that identifies runtime, memory, and concurrency optimization opportunities for serverless workloads.",
      tags: ["AWS Lambda", "Python", "FinOps", "CloudWatch"],
      github: "https://github.com/jokudev/serverless-cost-optimizer",
      demo: "https://example.com/serverless-optimizer",
      imageAlt: "Cost optimization report interface for serverless infrastructure."
    },
    {
      title: "Custom Terraform Provider",
      description:
        "A Terraform provider in Go for internal platform APIs, enabling declarative resource lifecycle management in IaC workflows.",
      tags: ["Terraform", "Go", "IaC", "Provider SDK"],
      github: "https://github.com/jokudev/custom-terraform-provider",
      imageAlt: "Terminal-like view of Terraform plan output for custom resources."
    },
    {
      title: "Observability Starter Kit",
      description:
        "A production-ready monitoring stack with Prometheus, Grafana, and alerting templates for Kubernetes and VM workloads.",
      tags: ["Prometheus", "Grafana", "Alertmanager", "Kubernetes"],
      github: "https://github.com/jokudev/observability-starter-kit",
      demo: "https://example.com/observability-kit",
      imageAlt: "Graphs and service health widgets in an observability dashboard."
    }
  ] as Project[]
};

