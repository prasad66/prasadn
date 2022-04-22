import { memo } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ProjectsTitle from "components/Projects/ProjectsTitle";
import AllProjectsButton from "components/Projects/AllProjectsButton";

import allProjects, { ProjectType } from "lib/projects";
import Footer2 from './../components/Footer2';

const projects: ProjectType[] = [
  allProjects.memories,
  allProjects.blog,
  allProjects.social,
  allProjects.shareme,
  // allProjects.covid19,
  // allProjects.google,
  allProjects.expense,
];

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Prasad</title>
      </Head>
      <motion.div
        key="index"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <>
          <Header />
          <Skills />
          <ProjectsTitle text={"Featured Projects"} />
          <Projects projects={projects} />
          <AllProjectsButton />
          {/* <Footer /> */}
          {/* <Footer1 /> */}
          <Footer2 />
        </>
      </motion.div>
    </>
  );
};

export default memo(IndexPage);
