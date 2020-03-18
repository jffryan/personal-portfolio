import React, { Component } from "react";
import { Link } from "react-router-dom";

import Project from "../components/Project";
import projectInfo from "../config/projectInfo";

export default class Projects extends Component {
  state = {
    showModal: false,
    currentProject: projectInfo[0]
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  viewProject = project => {
    this.setCurrentProject(project);
    this.toggleModal();
  };

  setCurrentProject = project => {
    this.setState({ currentProject: project });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const closeModal = () => {
      this.setState({ showModal: false });
    };

    return (
      <section className="projects">
        {/* Conditionally render project modal */}
        {this.state.showModal ? (
          <Project
            closeProject={closeModal}
            project={this.state.currentProject}
          />
        ) : null}

        {/* Static site project container */}
        <div className="container projects__container">
          <h1 className="projects__title">
            <span className="gradient-accent">Projects</span> Focused On Results
          </h1>
          <p className="projects__text">
            <span className="strike-through">
              "I build progressive web-apps that enable KPI and boost CTR and "
            </span>{" "}
          </p>
          <p className="projects__text-interior">
            Let's skip the buzzwords. Too many agencies hide behind obscure
            acronyms and confusing jargon so they can charge a monthly fee while
            doing nothing.
          </p>
          <p className="projects__text-interior">
            I believe web projects should be an investment. They should be
            machines that consistently give you back more than you put into
            them. They should focus on one simple metric above all others:
            generating results.
          </p>
          <p className="projects__text-interior">
            Click any of the projects below to see more information. Interested
            in working together?{" "}
            <Link to="/contact" className="btn hero__btn-primary">
              Let's Talk
            </Link>
          </p>

          {/* Projects automatically rendered from project config file */}
          <div className="projects__projects-grid">
            {projectInfo.map((project, i) => {
              return (
                <img
                  role="button"
                  src={project.screenshotSRC}
                  alt={project.name}
                  key={project.name}
                  className="projects__project-image"
                  onClick={() => this.viewProject(project)}
                  project={projectInfo[i]}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
