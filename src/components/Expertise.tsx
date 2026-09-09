import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import {ReactOriginalIcon, AzureOriginalIcon, DockerOriginalIcon, KubernetesOriginalIcon, DotnetcoreOriginalIcon, PythonOriginalIcon  } from '@devicon/react';
import powerPlatformLogo from '../assets/images/Power Platform/PowerPlatform_scalable.svg';
import powerAutoLogo from '../assets/images/Power Platform/PowerAutomate_scalable.svg';
import powerAppsLogo from '../assets/images/Power Platform/PowerApps_scalable.svg';
import openAILogo from '../assets/images/openai-icon.svg';
import azOpenAILogo from '../assets/images/azure-openai.svg';
import langchainLogo from '../assets/images/langchain.svg';
const fullStackDevelopment = [
    "React",
    "TypeScript",
    "JavaScript / jQuery",
    "HTML5",
    "CSS3",
    ".Net Core",
    "Azure",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelCloud = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Azure",
    "Linux",
    "Bicep"
];

const labelAI = [
    "OpenAI",
    "Azure OpenAI",
    "LangChain",
    "LangGraph",
    "Vector Database",
    "Streamlit",
];

const labelPowerPlatform = [
    "Canvas Apps",
    "Dataverse",
    "Power Automate",
    "Sharepoint Integration"
];

function Expertise() {
    return (
    <div id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <div className="skillIcons">
                        <ReactOriginalIcon size={52} />&nbsp;
                        <DotnetcoreOriginalIcon size={52} />&nbsp;
                        <PythonOriginalIcon size={52} />&nbsp;
                    </div>
                    <h3>Full Stack Web Development</h3>
                    <ul>
                        <li>
                            Proficient with web application development with React, ASP.Net Core, Python, jQuery.
                        </li>
                        <li>Full support with database development and integration for Microsoft SQL, PostgreSQL.</li>
                        <li>Rigorous testing with Unit testing and integration testing.</li>
                    </ul>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {fullStackDevelopment.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skillIcons">
                        {/* <FontAwesomeIcon icon={faMicrosoft} size="3x"/> */}
                        <AzureOriginalIcon size={52} />&nbsp;
                        <DockerOriginalIcon size={52} />&nbsp;
                        <KubernetesOriginalIcon size={52} />&nbsp;
                        {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    </div>
                    <h3>DevOps & Automation</h3>
                    <ul>
                        <li>Strong hands on Azure Deployments using CI/CD developments, Git Actions, Infrastructure as a code (Bicep).</li>
                        <li>Exposure with automated deployment scripts and execution.</li>
                    </ul>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelCloud.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <div className="skillIcons">
                        <img
                        src={powerPlatformLogo}
                        alt="Microsoft Power Platform"
                        style={{ width: '50px', height: '50px' }}
                        />&nbsp;<img
                        src={powerAutoLogo}
                        alt="Microsoft Power Automate"
                        style={{ width: '50px', height: '50px' }}
                        />&nbsp;<img
                        src={powerAppsLogo}
                        alt="Microsoft Power Apps"
                        style={{ width: '50px', height: '50px' }}
                        />
                    </div>
                    <h3>Power Platform</h3>
                    <ul>
                        <li>Canvas apps with SharPoint and Dataverse Development.</li>
                        <li>Integration of automation flow using agentic workflows with Copilot studio.</li>
                    </ul>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelPowerPlatform.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skillIcons">
                    {/* <FontAwesomeIcon icon={faPython} size="3x"/> */}
                        <img
                            src={openAILogo}
                            alt="Microsoft Power Platform"
                            style={{ width: '50px', height: '50px' }}
                        />&nbsp;
                        <img src={azOpenAILogo}
                            style={{ width: '50px', height: '50px' }}
                        />&nbsp;
                        <img src={langchainLogo}
                            style={{ width: '50px', height: '50px' }}
                        />
                    </div>
                    <h3>GenAI Development</h3>
                    <ul>
                        <li>Document extration devleopment with Azure AI services.</li>
                        <li>Integrate AI-Automation with Python and .Net libraries</li>
                    </ul><div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelAI.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
