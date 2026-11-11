function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.name}
        className="project-image"
      />

      <div className="project-details">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;