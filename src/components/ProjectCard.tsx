import { useState } from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card portfolio-project-card">
      <div className="project-meta">
        <span className="company">{project.category}</span>

        {project.status === "in-development" && (
          <span className="project-status">In Development</span>
        )}
      </div>

      {project.image && (
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      )}

      <h3>{project.title}</h3>
      <span className="project-type">{project.type}</span>

      <p>{project.description}</p>

      <div className="technology-tags">
        {project.technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="project-expand"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`details-${project.id}`}
      >
        {expanded ? "Show less −" : "Explore project +"}
      </button>

      <div id={`details-${project.id}`} hidden={!expanded}>
        <div className="project-details">
          {project.contribution && (
            <>
              <h4>Individual Contribution</h4>
              <p>{project.contribution}</p>
            </>
          )}

          <h4>Technical Highlights</h4>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          {project.video && (
            <video
              className="project-video"
              src={project.video}
              controls
              preload="none"
            />
          )}

          <div className="project-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source ↗
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}