
import React from 'react';
import { GraduationCap, Briefcase, Code, Server } from 'lucide-react';

const Summary = () => {
  const skills = [
    { category: "Languages & Web", items: ["Python", "JavaScript", "HTML5", "CSS3"] },
    { category: "Frameworks & Tools", items: ["Flask", "Django", "Vue.js", "Flutter", "Git", "GitHub"] },
    { category: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Docker", "Terraform", "CI/CD pipelines"] },
    { category: "Databases", items: ["SQL", "Google BigQuery", "Elasticsearch"] },
    { category: "OS & Infrastructure", items: ["Linux", "Windows", "macOS", "Server Setup"] },
    { category: "Project & Communication", items: ["Jira", "Confluence", "Slack", "Teams", "Zoom"] }
  ];

  return (
    <section id="summary" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Professional Summary
          </h2>
          <div className="h-1 w-20 bg-capetown-blue mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Results-driven tech professional with 6+ years of progressive experience across fintech, telecoms, and enterprise IT, with a focus on product support, digital transformation, and technical operations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Skilled in cloud technologies (AWS, Azure), DevOps practices, and implementing scalable tools to drive customer satisfaction and product adoption. Adept at cross-functional collaboration, using data to inform business strategy, and building automation through APIs, webhooks, and CI/CD workflows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Proven impact in fast-paced SaaS and cloud environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white shadow rounded-lg p-6 card-hover">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-capetown-blue mr-3" size={24} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="font-medium">BCom Information Systems</span>
                <span className="text-sm text-gray-500">University of the Western Cape (2017 - 2020)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">Business Administration Certificate</span>
                <span className="text-sm text-gray-500">UCT Graduate School of Business (2021)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6 card-hover">
            <div className="flex items-center mb-4">
              <Briefcase className="text-capetown-blue mr-3" size={24} />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              <li>AWS Solutions Architect Professional (2022)</li>
              <li>Microsoft Azure Fundamentals</li>
              <li>CompTIA Network+ / Server+ / Linux+</li>
              <li>Harvard CS50 – Intro to Computer Science</li>
              <li>DevOps & CI/CD Foundations (SkillSoft)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 card-hover">
          <div className="flex items-center mb-6">
            <Code className="text-capetown-blue mr-3" size={24} />
            <h3 className="text-xl font-semibold">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.slice(0, 3).map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="font-medium mb-2">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {skills.slice(3).map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="font-medium mb-2">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
