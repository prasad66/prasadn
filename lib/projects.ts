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
      github: "https://github.com/prasad66/shareme.git",
    },
  },
  google: {
    title: "Google Search Clone",
    description: [
      "This is the Search Clone of the **Google Search** Engine",
      "Using **Next JS** the server side rendering is done so ther wont be any late loading of the pages",
      "The user can search for any query and the results will be shown related for the search term",
      "The results displayed are limited page by page to make the pagination possible ",
      "This is a mobile responsive design and designed using **Tailwind CSS**",
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
      "Expense Tracker application - A **Voice Based Tracker** - is used to track the expenses based on the Income and Expenses",
      "This is created using **React** and styled using **Material UI**",
      "The Expense can also be recorded using **voice recognition**, both the income and expenses can be recorded",
      "The state is managed through **Redux** and the data is stored in the local storage",
      "The application is fully responsive for all screen sizes",
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
      "This is a clone of the WhatsApp application focused on **One-to-One** Chat",
      "The Users are authenticated using **Google Authentication**",
      "THe users can chat to another user using their email ID",
      "The profile picture of the other user will be visible after they signin",
      "The last seen of the user is also updated.",
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
      logos.nextjs,
      logos.materialui,
    ],
  },




};

export default projects;

