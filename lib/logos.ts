type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "java"
  | "spring"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "s3"
  | "socketio"
  | "typescript"
  | "vercel"
  | "ejs"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "bash"
  | "reactSpring"
  | "framerMotion"
  | "tailwind"
  | "sanity"
  | "speech";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/assets/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  tailwind: {
    label: "Tailwind CSS",
    logo: "/assets/icons/tailwind.svg",
    spin: false,
  },
  sanity: {
    label: "Sanity",
    logo: "/assets/icons/sanity.svg",
    spin: false,
  },
  speech: {
    label: "Speechly",
    logo: "/assets/icons/sanity.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  spring: {
    label: "Spring Boot",
    logo: "/assets/icons/spring.svg",
  },
  java: {
    label: "Java",
    logo: "/assets/icons/java.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/assets/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  s3: {
    label: "AWS-S3",
    logo: "/assets/icons/s3.svg",
  },
  socketio: {
    label: "Socket.IO",
    logo: "/assets/icons/socketio.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  reactSpring: {
    label: "react-spring",
    logo: "/assets/icons/react-spring.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
};

export default logos;
