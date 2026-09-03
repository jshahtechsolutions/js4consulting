import React from 'react';
import qualData from '../assets/data/education.json';
import '../assets/styles/Education.scss';

const Education: React.FC = () => {
  return (
    <div id="education" className="items-container">
        <h2>Education & Credentials</h2>
        <section id="educationsection" className="education-section">
            <div className="education-grid">
                {/* 🎓 Education Column */}
                <div className="qual-column">
                {/*<h3>Education</h3>*/}
                <div className="timeline">
                    {qualData.education.map((edu) => (
                    <div key={edu.id} className="timeline-item">
                        <span className="date-tag">{edu.duration}</span>
                        <h4>{edu.degree}</h4>
                        <h5>{edu.institution}</h5>
                    </div>
                    ))}
                </div>
                </div>

                {/* 📜 Certifications Column */}
                <div className="qual-column">
                {/*<h3>Certifications</h3>*/}
                <div className="cert-list">
                    {qualData.certifications.map((cert) => (
                    <div key={cert.id} className="cert-card">
                        <div className="cert-info">
                        <h4>{cert.title}</h4>
                        <h5>Issued by {cert.issuer} • {cert.date}</h5>
                        </div>
                        {cert.credentialUrl && (
                        <a href={cert.credentialUrl} className="view-cert-btn" target="_blank" rel="noreferrer">
                            Verify ↗
                        </a>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    </div>

  );
};

export default Education;
