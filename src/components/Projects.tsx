import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  repoUrl: string;
  liveUrl?: string;
  image?: string;
}

const Projects = () => {
  const { theme } = useTheme();
  
  const projectsData: Project[] = [
    {
      id: 1,
      name: "Crypto Price Glider",
      description: "Real-time cryptocurrency tracking application with interactive charts, price alerts, and portfolio management features.",
      tools: ["Next.js", "TypeScript", "TailwindCSS", "API Integration", "Recharts"],
      repoUrl: "https://github.com/Chumanitikili/crypto-price-glider",
      liveUrl: "https://crypto-price-glider.vercel.app/",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Casino Slots Game",
      description: "Interactive casino slot machine simulation with animations, sound effects, and realistic gameplay mechanics.",
      tools: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Local Storage"],
      repoUrl: "https://github.com/Chumanitikili/casino-slots-game",
      liveUrl: "https://casino-slots-game.onrender.com/",
      image: "https://images.unsplash.com/photo-1535406208535-55f792a3dc9b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Robben Island Experience",
      description: "Virtual tour application showcasing the historical Robben Island with interactive 3D elements and educational content.",
      tools: ["React", "Three.js", "GSAP", "Framer Motion", "Vercel"],
      repoUrl: "https://github.com/Chumanitikili/robben-island-experience",
      liveUrl: "https://robben-island-experience.vercel.app/",
      image: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Cloud Infrastructure Automation",
      description: "Collection of infrastructure-as-code templates for rapidly deploying scalable cloud resources on AWS and Azure.",
      tools: ["Terraform", "AWS", "Azure", "Python", "Bash"],
      repoUrl: "https://github.com/Chumanitikili/cloud-automation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "API Gateway Service",
      description: "Secure microservice API gateway with rate limiting, authentication, and request transformation capabilities.",
      tools: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
      repoUrl: "https://github.com/Chumanitikili/api-gateway",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "DevOps Pipeline Builder",
      description: "Modular CI/CD pipeline generator with templates for various deployment scenarios and cloud providers.",
      tools: ["Python", "GitHub Actions", "Jenkins", "Docker", "YAML"],
      repoUrl: "https://github.com/Chumanitikili/devops-pipeline-builder",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Cloud", "Automation", "Frontend", "Backend"];

  const filterProjects = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setProjects(projectsData);
      return;
    }

    let filtered: Project[] = [];
    switch (filter) {
      case "Cloud":
        filtered = projectsData.filter(p => p.tools.some(t => ["AWS", "Azure", "Terraform", "Docker", "Infrastructure"].includes(t)));
        break;
      case "Automation":
        filtered = projectsData.filter(p => p.tools.some(t => ["Python", "Terraform", "GitHub Actions", "Jenkins", "CI/CD", "Bash"].includes(t)));
        break;
      case "Frontend":
        filtered = projectsData.filter(p => p.tools.some(t => ["React", "Next.js", "HTML5", "CSS3", "TypeScript", "JavaScript", "TailwindCSS"].includes(t)));
        break;
      case "Backend":
        filtered = projectsData.filter(p => p.tools.some(t => ["Node.js", "Express", "MongoDB", "API", "Python", "Django"].includes(t)));
        break;
      default:
        filtered = projectsData;
    }
    setProjects(filtered);
  };

  return (
    <section id="projects" className="dark:bg-gradient-to-b dark:from-black/80 dark:to-black/95 section-padding transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="h-1 w-20 bg-capetown-blue dark:bg-matrix-green mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A portfolio of technical work showcasing my expertise in cloud infrastructure, 
            automation, and full-stack development.
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
                  ? theme === 'dark'
                    ? 'bg-matrix-green text-black shadow-md'
                    : 'bg-capetown-blue text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900/30 rounded-lg shadow-md dark:shadow-[0_0_15px_rgba(0,255,0,0.05)] overflow-hidden card-hover group border border-gray-200 dark:border-matrix-green/20"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-capetown-blue to-capetown-darkblue dark:from-matrix-dark dark:to-matrix-black">
                    <Code size={48} className="text-white dark:text-matrix-green" />
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
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span 
                      key={tool} 
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-matrix-green/10"
                    >
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
            className="inline-flex items-center px-6 py-3 bg-capetown-blue dark:bg-matrix-green/90 text-white dark:text-black rounded-full shadow-lg hover:bg-capetown-darkblue dark:hover:bg-matrix-green transition-colors"
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
