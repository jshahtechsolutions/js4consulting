import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import proflImg from '../assets/images/jcLinkProfl.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/*<img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
          <img src={proflImg} className="zoom" alt="thumbnail" width="100%"/>
        </div>
        <div className="content">
          <div className="social_icons">
            {/* <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
            <a href="https://www.linkedin.com/in/js4consulting/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jignesh Shah</h1>
          <p>Full Stack Builder</p>

          <div className="mobile_social_icons">
            {/* <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
            <a href="https://www.linkedin.com/in/js4consulting/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
