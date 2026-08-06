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
  }

  const careerPositions: careerPosition[] = [
    {
      title :'Sr. Software Engineer',
      location: 'Social Security Administration, SSA, Woodlawn, MD',
      date: '2015 - present',
      description: 'Full-stack Web Development, PowerApps platform support and development, Automation and AI implementation'
    },{
      title :'Software Consultant',
      location: 'Department of Labor Licensing and Regulation, DLLR, Baltimore, MD',
      date: '2014 - 2015',
      description: 'Asp.Net Web Development, MSSQL Database development'
    },{
      title :'Sr. Software Engineer',
      location: 'RxNT, Annapolis, MD',
      date: '2013 - 2014',
      description: 'Twilio API integration, SPA Web Apps Development'
    },{
      title :'Software Developer',
      location: 'Maryland State Motor Vehicle Administration, MVA, Glen Burnie, MD',
      date: '2009 - 2013',
      description: 'Legacy application conversion to modern development framework, WCF Service Development'
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
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2015"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">.Net software Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Department of Labor Licensing and Regulation, DLLR, Baltimore, MD</h4>
            <p>
              Asp.Net Web Development, MSSQL Database development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013- - 2014"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sr. Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">RxNT, Annapolis, MD</h4>
            <p>
              Twilio API integration, SPA Web Apps Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - 2013"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Maryland State Motor Vehicle Administration, MVA, Glen Burnie, MD </h4>
            <p>
              Legacy application conversion to modern development framework, WCF Service Development
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
