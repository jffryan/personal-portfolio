import React from "react";

const projectInfo = [
  {
    name: "Education Network of America",
    date: "Dec 2019 - Mar 2020",
    screenshotSRC: "./imgs/ena-homepage.jpg",
    tagline: "Web Developer and Content Specialist",
    desc:
      "Education Network of America provides technology, analytics, and other digital services for thousands of school districts, universities, hospitals, municipalities, and libraries across the country. Our three-person team worked extensively with the design and marketing teams to create a new site to keep up with ENA's continued growth. Using WordPress, I helped develop a custom theme that would enable non-developer members of the ENA team to update web pages as needed. Additionally, I used Photoshop and Illustrator to smooth gaps in the content creation process and integrate custom graphics and illustrations into the theme.",
    tools: props => (
      <React.Fragment>
        <i className="devicon-wordpress-plain project-icon"></i>
        <i className="devicon-html5-plain colored project-icon"></i>
        <i class="devicon-illustrator-plain colored project-icon"></i>
        <i class="devicon-photoshop-plain colored project-icon"></i>
        <i className="devicon-jquery-plain colored project-icon"></i>
        <i className="devicon-php-plain colored project-icon"></i>
      </React.Fragment>
    ),
    siteLink: "https://ena.com"
  },
  {
    name: "LandBridge USA",
    date: "Nov 2017 - Sep 2018",
    screenshotSRC: "./imgs/landbridge-homepage.jpg",
    tagline: "Head of Marketing and Business Development",
    desc:
      "LandBridge was a financial tech company for providing peer-to-peer loans to real estate developers. As head of marketing and business development, I created all site copy, branding, design, and content. The front-end site was built using Jquery, CSS, and HTML, with WordPress as the CMS. Using Google and Facebook Analytics integrations, I managed several social media ad campaigns and helped LandBridge generate several million dollars in investor capital.",
    tools: props => (
      <React.Fragment>
        <i className="devicon-html5-plain colored project-icon"></i>
        <i className="devicon-jquery-plain colored project-icon"></i>
        <i className="devicon-wordpress-plain project-icon"></i>
        <i className="devicon-php-plain colored project-icon"></i>
      </React.Fragment>
    ),
    siteLink: "https://landbridgeusa.com/"
  },
  {
    name: "Resource Air Charter",
    date: "June 2019 - Present",
    screenshotSRC: "./imgs/RAC-homepage.jpg",
    tagline: "Web Developer and Content Specialist",
    desc:
      'I was originally hired to design and develop a website for a local air charter company using HTML, CSS, Javascript, and PHP. When progress was delayed due to lack of site content, I helped guide the client through creating a customized "brand framework" to organize all marketing and important business details. I then wrote all code, design, and site text. The result increased pageviews, returning visitors, and median time on site, which all contributed to increased revenue from digital interactions.',
    tools: props => (
      <React.Fragment>
        <i className="devicon-html5-plain colored project-icon"></i>
        <i className="devicon-css3-plain colored project-icon"></i>
        <i className="devicon-javascript-plain colored project-icon"></i>
        <i className="devicon-bootstrap-plain colored project-icon"></i>
        <i className="devicon-php-plain colored project-icon"></i>
      </React.Fragment>
    ),
    gitLink: "https://github.com/jffryan/rac-work",
    siteLink: "http://resourceaircharter.com"
  },
  {
    name: "Conversations That Click",
    date: "June 2019 - Present",
    tagline: "Co-founder, Web Development & Digital Marketing",
    screenshotSRC: "./imgs/conversationsthatclick.jpg",
    desc:
      "Conversations that Click unites a group of freelancers specializing in web development and digital marketing. We help organizations in a wide variety of industries, including real estate, hospitality, and political activism. As co-founder, I am primarily responsible for managing client relations and deadlines. I also oversee web development, content strategy, and digital marketing including SEO and PPC campaigns.",
    tools: props => (
      <React.Fragment>
        <i className="devicon-html5-plain colored project-icon"></i>
        <i className="devicon-css3-plain colored project-icon"></i>
        <i className="devicon-javascript-plain colored project-icon"></i>
      </React.Fragment>
    ),
    gitLink: "https://github.com/jffryan/freelance-site",
    siteLink: "https://conversationsthatclick.com"
  },
  {
    name: "Lana Graves",
    date: "Oct 2019",
    screenshotSRC: "./imgs/LanaGravesHomepage.jpg",
    tagline: "Web Development, E-Commerce, and UI/UX Design",
    desc:
      "Site made for fictional music artist. Includes custom graphic design and React-based e-commerce integration.",
    tools: props => (
      <React.Fragment>
        <i class="devicon-react-original colored project-icon"></i>
        <i className="devicon-css3-plain colored project-icon"></i>
        <i className="devicon-photoshop-plain colored project-icon"></i>
      </React.Fragment>
    ),
    gitLink: "https://github.com/jffryan/lana-graves"
  },
  {
    name: "Halloween Game",
    date: "Oct 2019",
    screenshotSRC: "./imgs/halloweengame.jpg",
    tagline: "Personal Project",
    desc:
      "A just-for-fun Halloween card-matching game made using 3-D CSS animations and vanilla javascript. Let me know your high score!",
    tools: props => (
      <React.Fragment>
        <i className="devicon-html5-plain colored project-icon"></i>
        <i className="devicon-css3-plain colored project-icon"></i>
        <i className="devicon-javascript-plain colored project-icon"></i>
      </React.Fragment>
    ),
    gitLink: "https://github.com/jffryan/spooktober",
    siteLink: "https://spooktobercardgame.netlify.com/"
  }
];

export default projectInfo;
