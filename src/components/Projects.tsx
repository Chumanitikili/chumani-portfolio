
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  repoUrl: string;
  liveUrl?: string;
  image?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Inventory Management System",
    description: "A full-stack inventory tracking system with barcode scanning capabilities, user authentication, and real-time stock updates.",
    tools: ["Python", "Django", "PostgreSQL", "JavaScript", "Bootstrap"],
    repoUrl: "https://github.com/Chumanitikili/inventory-management",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description: "Interactive weather application that displays current conditions and forecasts based on user location or search input.",
    tools: ["JavaScript", "React", "OpenWeather API", "CSS3", "Chart.js"],
    repoUrl: "https://github.com/Chumanitikili/weather-dashboard",
    liveUrl: "https://chumanitikili.github.io/weather-dashboard",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Cloud Infrastructure Automation",
    description: "Collection of infrastructure-as-code templates for quickly deploying scalable cloud resources on AWS and Azure.",
    tools: ["Terraform", "AWS", "Azure", "Python", "Bash"],
    repoUrl: "https://github.com/Chumanitikili/cloud-automation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Task Management API",
    description: "RESTful API for task management with user authentication, task categorization, and deadline reminders.",
    tools: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
    repoUrl: "https://github.com/Chumanitikili/task-api",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Python", "JavaScript", "DevOps", "Web"];

  const filterProjects = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setProjects(projectsData);
      return;
    }

    let filtered: Project[] = [];
    switch (filter) {
      case "Python":
        filtered = projectsData.filter(p => p.tools.some(t => ["Python", "Django", "Flask"].includes(t)));
        break;
      case "JavaScript":
        filtered = projectsData.filter(p => p.tools.some(t => ["JavaScript", "React", "Node.js", "Vue.js"].includes(t)));
        break;
      case "DevOps":
        filtered = projectsData.filter(p => p.tools.some(t => ["AWS", "Azure", "Terraform", "Docker"].includes(t)));
        break;
      case "Web":
        filtered = projectsData.filter(p => p.tools.some(t => ["HTML5", "CSS3", "React", "Django", "Vue.js"].includes(t)));
        break;
      default:
        filtered = projectsData;
    }
    setProjects(filtered);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="h-1 w-20 bg-capetown-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my technical work. These projects showcase my skills in software development, 
            cloud architecture, and DevOps practices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => filterProjects(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                  ? 'bg-capetown-blue text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover group">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-capetown-blue to-capetown-darkblue">
                    <Code size={48} className="text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      aria-label="View repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Chumanitikili" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-capetown-blue text-white rounded-full shadow-lg hover:bg-capetown-darkblue transition-colors"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
