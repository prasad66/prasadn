import logos from "./logos";

// full projects page

type ProjectName =
  | "shareme"
  | "covid19"
  | "google"
  | "expense"
  | "whatsapp"
  | "memories"
  | "blog"
  | "social"
  | "todos"
  // | "thisWebsite"
  // | "theMealHub"
  // | "pokemon"
  // | "jokes"
  ;

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {

  covid19: {
    title: "Covid 19 Tracker",
    description: [
      "Covid-19 tracker is made using **React.**",
      "This web app can be used to track current and historical data of the World COuntries. The web app shows a vector **World Map**, user may click over or search for any country and will be able to see the total confirmed, recovered, active and deceased for that country.",
      "There is also a country wise table of covid data.",
      "The app also features historical data using **charts** made using **Leaflet**, user may view data of any country.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes .",
    ],
    images: {
      main: {
        link: "/project/covid19/poster.png",
        width: 1000,
        height: 600,
      },
    },
    stack: [
      logos.react,
      logos.materialui,
    ],
    links: {
      live: "https://covid19-pvt.netlify.app/",
      github: "https://github.com/prasad66/covid-19-tracker.git",
    },
  },
  social: {
    title: "Social Media",
    description: [
      "Social Media Application is made using **React.**",
      "We can **signup** and **signin** to use the application and cannot view without logingin.",
      "The user can **share** post and their friends can **view** them and **like** them",
      "An user can **follow** and **unfollow** other user.",
      "The user profile page can be viewed and their firends profile can also be viewed",],
    images: {
      main: {
        link: "/project/socialmedia/socialmedia.png",
        width: 1000,
        height: 600,
      },
    },
    stack: [
      logos.react,
      logos.expressjs,
      logos.mongodb,
    ],
    links: {
      live: "https://social-mda.netlify.app/",
      github: "https://github.com/prasad66/social-client.git",
    },
  },
  memories: {
    title: "Memories",
    description: [
      "Memories App is made using **React.**",
      "This application is authenticated using **JWT** and **Google OAuth**.",
      "This web app can be used to **store** the memroies of a particular palce or event",
      "We can **sinup** and **singin** to create the memories. It can only be viewed without signin",
      "The **signed in** user can like the picture and comment on the picture",
      "A picture can be clicked and **viewed seperately** and **similar posts will shown at the bottom",],
    images: {
      main: {
        link: "/project/memories/memories.png",
        width: 1000,
        height: 600,
      },
    },
    stack: [
      logos.react,
      logos.expressjs,
      logos.mongodb,
      logos.materialui,
    ],
    links: {
      live: "https://memries.netlify.app/",
      github: "https://github.com/prasad66/memories-client.git",
    },
  },
  todos: {
    title: "Todo App",
    description: [
      "Todo App is made using **React.**",
      "This web app can be used to **store** the Todos list in **Mongo DB** and can retrive using an api call",
      "The completed task can be marked completd by clicking on it",
      "The task can also be **edited** after created. A **modal** will appear for editing",
      "The task can also be delted with or without completing the tasks",],
    images: {
      main: {
        link: "/project/todos/todo.png",
        width: 1000,
        height: 600,
      },
    },
    stack: [
      logos.react,
      logos.expressjs,
      logos.mongodb,
    ],
    links: {
      live: "https://to2s.netlify.app/",
      github: "https://github.com/prasad66/todo-client.git",
    },
  },
  blog: {
    title: "Blog App",
    description: [
      "Blog App is made using **React.**",
      "This web app can be used to **store** the memroies of a particular palce or event",
      "We can **sinup** and **singin** to create the memories. It can only be viewed without signin",
      "The **signed in** user can like the picture and comment on the picture",
      "A picture can be clicked and **viewed seperately** and **similar posts will shown at the bottom",],
    images: {
      main: {
        link: "/project/blog/poster.png",
        width: 1000,
        height: 600,
      },
    },
    stack: [
      logos.react,
      logos.expressjs,
      logos.mongodb,
    ],
    links: {
      live: "https://blog-appl.netlify.app/",
      github: "https://github.com/prasad66/blog-client.git",
    },
  },
  shareme: {
    title: "ShareMe",
    description: [
      "**Upload**, **view** and **vote** for the cutest dogs, Dogmash project is inspired by Mark Zuckerberg's infamous website **facemash.**",
      "This was my first big **fullstack** project made using **node.js** with **express.js** and styled using **Bootstrap**. Users can upload their dog pics to the website without any registration which will only be made public once the admin logs in and approve the uploaded image. Yes this project has an **Admin panel** built into it to ensure images are appropriate.",
      "Uploaded images are stored on **amazon s3 bucket**, uploaded using **presigned URL** straight from browser to s3 bucket.",
      "This project also has **rate limiting** to avoid spam and uses **CSRF token** protection.",
    ],
    images: {
      main: {
        link: "/project/shareme/poster.png",
        width: 1903,
        height: 1065,
      },
    },
    stack: [
      logos.react,
      logos.tailwind,
      logos.sanity,
    ],
    links: {
      live: "https://sharemepvt.netlify.app/",
      github: "https://github.com/prasad66/covid-19-tracker.git",
    },
  },
  google: {
    title: "Google Search Clone",
    description: [
      "Connect-4 board game that allows you to **play with anyone around the world** with no registration or downloads. You and your friend just need to open the link in the browser and you're ready to play 🙂",
      "The frontend is built using **React** and styled using **material-ui** and backend built using **node.js**.",
      "**socket.io** library is used for live transfer of data from client to server using websockets.",
      "The app supports multiple games running parallel, means multiple pair of people can play on the same website at the same time without any interference.",
      "If you wish to test this project, you must run the url on different browsers, or better check my **[video explaining how it works](https://www.linkedin.com/posts/bhavya-tomar_careerhack-github-hackathon-activity-6760854974944694272-aEDM)** that I posted on LinkedIn.",
    ],
    stack: [logos.nextjs, logos.tailwind],
    links: {
      github: "https://github.com/prasad66/google-clone.git",
      live: "https://google-pvt.vercel.app/",
    },
    images: {
      main: {
        link: "/project/google/poster.png",
        // mp4: "/project/connect-4/c4mp4.mp4",
        // webm: "/project/connect-4/c4webm.webm",
        width: 1173,
        height: 700,
      },
    },
  },
  expense: {
    title: "Expense Tracker",
    description: [
      "Goal tracker app made with my friend for a **hackthon that we won.**",
      "The challenge for the hackathon was to make a **CRUDy** web application for goal management.",
      "The application is made using **React** and styled using **material-ui.**",
      "Features of the app are **create, update, edit and delete** goals. Add **labels** to goal, Start a **timer to track** the time spent for goal, **timer keeps running even when the window is closed!**",
      "**Filter** goals by hashtag and/or text, **sort** goals by time spent per goal.",
      "View a **Bar graph** that displays the amount of time spent per goal.",
      "Check this video made by my hackathon partner **Priya Aswani** **[explaining how it works](https://www.linkedin.com/posts/activity-6755554068011319296-VlpE)**",
    ],
    links: {
      github: "https://github.com/prasad66/Expense-Tracker.git",
      live: "https://expense-tracker-dacce.web.app/",
    },
    stack: [logos.react, logos.materialui, logos.redux],
    images: {
      main: {
        link: "/project/expense/poster.png",
        width: 1200,
        height: 800,
      },
    },
    // special: {
    //   text: "Hackathon winner",
    //   link: "https://www.linkedin.com/posts/mintbean_mintbeanhackathon-mintbean-hackathon-activity-6757030650957619200-xUa8",
    // },
  },
  whatsapp: {
    title: "WhatsApp Clone",
    description: [
      "My very first **fullstack Typescript** web application.",
      "As the title suggests, the app can be used to shorten urls that can be shared with anyone on the internet.",
      "A **QR code** is also generated when submitting a URL that can be scanned to redirect to the original URL.",
      "The frontend is built using **React** with **Material-UI** for styling.",
      "The backend is build with **Node.js** with **Express.js** framework along with **MongoDB** database to store the URLs.",
    ],
    images: {
      main: {
        link: "/project/whatsapp/poster.png",
        width: 964,
        height: 600,
      },
    },
    links: {
      github: "https://github.com/BhavyaCodes/url-shortener-ts-backend",
      live: "https://short-url-three.vercel.app/",
    },
    stack: [
      logos.typescript,
      logos.react,
      logos.expressjs,
      logos.materialui,
      logos.mongodb,
      logos.nodejs,
    ],
  },




};

export default projects;

