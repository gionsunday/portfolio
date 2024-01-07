"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Muchency Photo Studio Website",
    description: "A Photography Website.",
    image: "/projects/muchency.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://muchencystudiopro2.netlify.app",
  },
  {
    id: 2,
    title: "Naija Kitchen Website",
    description: "A website for Nigerian delicacies",
    image: "/projects/naijakitchen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://naija-kitchen.onrender.com/",
  },
  {
    id: 3,
    title: "Phoenix NFT Market",
    description: "Create, Mint and Sell NFT Collections",
    image: "/projects/phoenix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://phoenix-nft-market.onrender.com",
  },
  {
    id: 4,
    title: "Fruitella",
    description: "Fruits, Vegetable & organic products website ",
    image: "/projects/fruitella.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://fruitella.onrender.com/",
  },
  {
    id: 5,
    title: "Express Autos",
    description: "Fullstack Car Auction Website",
    image: "/projects/express.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "http://express-autos.com",
  },
  {
    id: 6,
    title: "Hubiex Website",
    description: "Fullstack Trading Website",
    image: "/projects/hubiex.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://hubiex.com/",
  },
  {
    id: 7,
    title: "Webserver",
    description: "API Endpoints",
    image: "/projects/trans.jpg",
    tag: ["All", "Servers"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Fullstack Taskmanager(open source)",
    description: "Fullstack Trading Website",
    image: "/projects/taskmanager.jpg",
    tag: ["All", "Servers"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://zerotaskmanager.onrender.com",
  },
  {
    id: 9,
    title: "Job Creator",
    description: "Fullstack Job API",
    image: "/projects/jobapi.jpg",
    tag: ["All", "Servers"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://job-api-47pu.onrender.com",
  },
  {
    id: 9,
    title: "Iwebs Website",
    description: "Web developers website",
    image: "/projects/iwebs.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://iwebs.onrender.com/",
  },
  {
    id: 10,
    title: "Vendor Server",
    description: "API ENDPOINTS",
    image: "/projects/vendor.jpg",
    tag: ["All", "Servers"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://vendors-oze4.onrender.com",
  },
  {
    id: 10,
    title: "User Dashboard",
    description: "Full User Dashboard",
    image: "/projects/dashboard.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gionsunday",
    previewUrl: "https://foxic.onrender.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
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
          name="Servers"
          isSelected={tag === "Servers"}
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
