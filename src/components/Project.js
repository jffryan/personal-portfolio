import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.projectContainer = React.createRef();
  }

  stopEvent = () => {
    return 1 + 1;
  };

  render() {
    const { project } = this.props;
    return (
      <div className="project" ref={this.projectContainer}>
        <article className="project__content">
          <div className="project__header">
            <h2>{project.name}</h2>
            <span className="close-btn" onClick={this.props.closeProject}>
              &times;
            </span>
          </div>
          <div className="project__body">
            <img src={project.screenshotSRC} alt={project.name} />
            <div className="project__body-content">
              <h3>{project.tagline}</h3>
              <h5>{project.date}</h5>
              <p>{project.desc}</p>
              <div className="project__view">
                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hero__btn-primary"
                  >
                    View Source on Github{" "}
                    <i aria-hidden="true" className="devicon-github-plain"></i>
                  </a>
                )}
                {project.siteLink && (
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hero__btn-primary"
                  >
                    View Site
                  </a>
                )}
              </div>
              <h3>Tools Used</h3>
              <div className="project__tools">
                {project.tools && <project.tools />}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Project;
