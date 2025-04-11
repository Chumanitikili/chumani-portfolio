
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
        "Executed customer success strategies with 20% engagement improvement through data-driven initiatives.",
        "Designed API integrations and webhook systems for real-time customer notifications.",
        "Optimized feature prioritization through customer feedback analysis and usage metrics."
      ]
    },
    {
      company: "Hewlett Packard Enterprise (HPE)",
      role: "Business Analyst",
      period: "Aug 2023 – Jan 2024",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Managed enterprise client subscription data pipelines and KPI reporting.",
        "Implemented customer health scoring models for predictive account management.",
        "Collaborated with engineering teams on feature development based on user analytics."
      ]
    },
    {
      company: "Vox Telecom (Frogfoot Fibre)",
      role: "NOC Consultant (Tier 2)",
      period: "Apr 2021 – Aug 2023",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Resolved Layer 2/3 infrastructure outages and provided tier 2 technical troubleshooting.",
        "Created automated fault-tracking systems, reducing resolution time by 25%.",
        "Produced technical documentation and delivered root cause analysis for major incidents."
      ]
    },
    {
      company: "BMI Investments",
      role: "NOC Technician (Tier 1)",
      period: "Jan 2021 – Apr 2021",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Diagnosed connectivity issues across switching/routing networks.",
        "Configured workstations for new deployments.",
        "Supported server monitoring and infrastructure alerts."
      ]
    },
    {
      company: "Entsika Education & Training Authority",
      role: "Program Coordinator",
      period: "Jan 2020 – Dec 2020",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Oversaw field logistics, onboarding 20+ agents for literacy assessments.",
        "Produced weekly dashboards for project leads using Excel and Google Sheets.",
        "Managed project timelines and milestone tracking with education stakeholders."
      ]
    },
    {
      company: "Bathu Footwear",
      role: "Retail Data Capturer (Part-Time)",
      period: "Jan 2019 – Dec 2020",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Captured sales data across regional stores using inventory software.",
        "Maintained SKU records and sales analytics for inventory optimization.",
        "Collaborated with IT to troubleshoot POS integration issues."
      ]
    },
    {
      company: "TymeDigital (TymeBank)",
      role: "Onboarding Specialist",
      period: "Jan 2018 – Dec 2018",
      location: "Cape Town, South Africa",
      responsibilities: [
        "Enrolled over 2,000 users onto Tyme's smart Kiosk banking platform.",
        "Educated clients on app-based onboarding and biometric setup.",
        "Provided Tier 1 support for mobile banking and security queries."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 dark:bg-black/90 py-20 transition-colors font-matrix">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">PROFESSIONAL EXPERIENCE</h2>
            <div className="h-1 w-20 bg-capetown-blue dark:bg-matrix-green mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">Key roles that demonstrate my expertise in cloud technologies, automation, and technical product management.</p>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.role}`}
                className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md dark:shadow-[0_0_15px_rgba(0,255,0,0.05)] card-hover border border-gray-200 dark:border-matrix-green/20"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-capetown-blue dark:text-matrix-green mb-2">{exp.company}</h4>
                  </div>
                  
                  <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-capetown-blue dark:text-matrix-green mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
