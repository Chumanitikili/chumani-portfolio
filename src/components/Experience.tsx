
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Hewlett Packard Enterprise (HPE)",
      role: "Customer Success/Product Manager",
      period: "Feb 2024 – Present",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Defined and executed customer success strategies, increasing product engagement by 20% through usage tracking and proactive check-ins.",
        "Led the design and deployment of custom API integrations and Slack/MS Teams webhooks to streamline customer updates.",
        "Collaborated with product and engineering teams to prioritize roadmap features based on customer feedback and data analysis.",
        "Delivered success playbooks and adoption dashboards using cloud metrics and usage logs."
      ]
    },
    {
      company: "Hewlett Packard Enterprise (HPE)",
      role: "Business Analyst",
      period: "Aug 2023 – Jan 2024",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Managed subscription data pipelines and KPIs for key enterprise clients.",
        "Conducted SQL-based reporting and used GitHub + Jira to track feature-related issues.",
        "Created customer health models and assisted in CRM optimization initiatives.",
        "Partnered with engineering and PM teams to define backlog items based on usage analytics."
      ]
    },
    {
      company: "Vox Telecom (Frogfoot Fibre)",
      role: "NOC Consultant (Tier 2)",
      period: "Apr 2021 – Aug 2023",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Handled advanced technical support, escalating Layer 2/3 faults and resolving infrastructure outages.",
        "Supported fiber rollout monitoring using NMS tools and created automated fault-tracking systems.",
        "Authored internal troubleshooting guides, reducing average resolution time by 25%.",
        "Provided root cause analysis (RCA) for recurring faults and liaised with ISP engineering teams."
      ]
    },
    {
      company: "BMI Investments",
      role: "NOC Technician (Tier 1)",
      period: "Jan 2021 – Apr 2021",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Diagnosed connectivity issues and escalated critical incidents across switching/routing networks.",
        "Configured and tested workstations for new deployments.",
        "Supported basic server monitoring and infrastructure alerts via internal NMS tools."
      ]
    },
    {
      company: "Entsika Education & Training Authority",
      role: "Program Coordinator",
      period: "Jan 2020 – Dec 2020",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Oversaw field logistics, onboarding 20+ agents and administering literacy assessments across provinces.",
        "Used Excel and Google Sheets for data consolidation, producing weekly dashboards for project leads.",
        "Managed project timelines, risk logs, and milestone tracking in collaboration with national education stakeholders."
      ]
    },
    {
      company: "TymeDigital (TymeBank)",
      role: "Onboarding Specialist – Digital Banking Platform",
      period: "2019",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Supported nationwide rollout of digital banking services, enrolling over 2,000 users onto Tyme's smart Kiosk platform.",
        "Educated clients on app-based onboarding, biometric setup, and remote KYC processes.",
        "Provided Tier 1 support for customers navigating mobile banking, security queries, and UI bugs.",
        "Reported onboarding issues to the dev/QA team and contributed to platform UX improvements."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Professional Experience</h2>
            <div className="h-1 w-20 bg-capetown-blue mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-300"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={`${exp.company}-${exp.role}`}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-capetown-blue border-4 border-white"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12">
                    <div className={`bg-white p-6 rounded-lg shadow-md card-hover ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-capetown-blue mb-3">{exp.company}</h4>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar size={16} className="mr-2 text-gray-400" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline layout */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
