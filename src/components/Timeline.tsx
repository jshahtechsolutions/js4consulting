import React, {useState} from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  interface careerPosition {
    title: string;
    date: string;
    location: string;
    description: string;
    details:string[]
  }

  const careerPositions: careerPosition[] = [
    {
      title :'Sr. Software Engineer',
      location: 'Social Security Administration, SSA, Woodlawn, MD',
      date: '2015 - present',
      description: 'Full-stack Web Development, PowerApps platform support and development, Automation and AI implementation',
      details:[
        'Office of Disability Policy Management Information (ODPMI) — collects and analyzes management information on the disability program, including the Policy Feedback System (PFS), Request for Program Consultation (RPC), and Disability Research File Reporting System (DRFRS).',
        'Designed and built Power Apps (Canvas Apps) on top of SharePoint Online document libraries and lists, replacing manual, paper-based processes for end users',
        'Built Power Automate cloud flows for approvals and notifications, reducing manual processing time across business workflows',
        'Integrated Power Automate with Copilot Studio via REST-based connectors to enable AI-driven workflow automation',
        'Built an AI-powered document processing system to classify and extract structured data from PDF documents using OCR and LLM-based classification, applying RAG and LangChain concepts, with a React frontend',
        'Participated in Azure cloud migration and modernization as part of the Cloud Migration Center of Excellence (CoE) team',
        'Implemented secure authentication and authorization using Azure AD and OAuth protocols',
        'Implemented CI/CD pipelines and infrastructure-as-code using Azure DevOps to automate build, test, and release across environments',
        'Converted legacy applications to modern platforms using Node.js, React, and ASP.NET Web API; designed RESTful backend microservices using Node.js and Express',
        'Participated in agile development of web application enhancements, including database design/modifications (SQL Server, Entity Framework), REST API development, and JavaScript framework integration (React, jQuery)',
        'Collaborated daily with team members and end clients through scrum meetings, bi-weekly code reviews, and POC development',
        'Ensured all software met government regulations and standards around data security and privacy',
        'Trained end users and staff on new systems; provided ongoing technical support and cross-department collaboration'
      ]
    },
    {
      title :'Software Consultant',
      location: 'Department of Labor Licensing and Regulation, DLLR, Baltimore, MD',
      date: '2014 - 2015',
      description: 'Asp.Net Web Development, MSSQL Database development',
      details:[
        'Gathered requirements and designed a client validation application (ClickOnce) for employer wage and contribution file generation',
        'Developed VB.NET applications with SQL stored procedures, SSIS packages, and SSRS reports; built interfaces for third-party API calls',
        'Replaced legacy systems with ASP.NET MVC, Entity Framework, and Web API-based SPAs using jQuery/AJAX',
        'Supported UAT and pilot testing; led migration of legacy applications across Windows server environments'
      ]
    },
    {
      title :'Sr. Software Engineer',
      location: 'RxNT, Annapolis, MD',
      date: '2013 - 2014',
      description: 'Twilio API integration, SPA Web Apps Development',
      details:[
        'Designed and implemented a Twilio API integration for patient appointment reminders',
        'Built a single-page application (MVC 4.0) for the WalGreens MedGap project with a responsive AngularJS UI, .NET Web API middle layer, and Entity Framework data layer '
      ]
    },
    {
      title :'Software Developer',
      location: 'Maryland State Motor Vehicle Administration, MVA, Glen Burnie, MD',
      date: '2009 - 2013',
      description: 'Legacy application conversion to modern development framework, WCF Service Development',
      details:[
        'Refactored C# code to reduce cyclomatic complexity; modified WCF services integrating Mainframe and POS systems',
        'Designed the architecture for converting a legacy VB COM system to WPF/WCF using the MVVM pattern',
        'Built .NET wrapper classes to interoperate with existing VB COM objects; hosted new WCF services in a Windows environment',
        'Modified SSRS reports and prepared technical specification, design, and security documentation'
      ]
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activePosition, setActivePosition] = useState<careerPosition | null>(null);

  const handleElementClick = (position: careerPosition) => {
    setActivePosition(position);
    setIsOpen(true);
  };
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {careerPositions.map((position) => (
            <VerticalTimelineElement
              key={position.title}
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              date={position.date}
              onTimelineElementClick={() => handleElementClick(position)}
            >
              <h3 className="vertical-timeline-element-title">{position.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{position.location}</h4>
              <p>{position.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        {isOpen && activePosition && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          {/* StopPropagation prevents clicking inside the article from closing it */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <h2>{activePosition.title}</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
            </header>
            <h3 className="modal-subtitle">{activePosition.location}</h3>
            <main className="modal-body prose">
               <ul className="underline-list">
                  {activePosition.details.map((item, index) => (
                    <li key={index} className="underline-list-item">
                      {item}
                    </li>
                  ))}
              </ul>
            </main>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Timeline;
