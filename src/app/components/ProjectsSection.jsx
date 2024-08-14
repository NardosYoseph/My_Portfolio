"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "Incident Tracking Website for Amhara-Bank",
    description: "React nextjs",
    image: "/images/aba.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NardosYoseph/aba_db_incident_tracker",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Living Word",
    description: "Flutter Church Application",
    image: "/images/living_word.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/NardosYoseph/Living-Word-",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Betting App",
    description: "Flutter Desktop App\nwith Hive local storage",
    image: "/images/betting1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/NardosYoseph/Betting-App-with-Hive",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Event Ticketing App",
    description: "Flutter Mobile App\nBackend-nodejs\nChapa payment integrated",
    image: "/images/event.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/NardosYoseph/Flutter-Event-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Living Word",
    description: "Church website with Nextjs and nodejs",
    image: "/images/livingword.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NardosYoseph/Living-Word-",
    previewUrl: "https://livingword.vercel.app/",
  },
  {
    id: 6,
    title: "Ayzot E-commerce",
    description: "E-commerce website with nextjs and nodejs ",
    image: "/images/ayzot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NardosYoseph/Ayzot_Ecommerce_Frontend",
    previewUrl: "https://ayzot.vercel.app/",
  }
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
            <head> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9635869266478553"
     crossorigin="anonymous"></script></head>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
