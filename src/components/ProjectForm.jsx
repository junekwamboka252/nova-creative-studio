function ProjectForm({ onAddProject, onCancel }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newProject = {
      id: Date.now(),
      name: formData.get("name").trim(),
      category: formData.get("category"),
      description: formData.get("description").trim(),
      image: formData.get("image").trim(),
    };

    if (
      !newProject.name ||
      !newProject.category ||
      !newProject.description ||
      !newProject.image
    ) {
      return;
    }

    onAddProject(newProject);
    event.target.reset();
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add a new project</h2>

      <label htmlFor="name">Project name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="category">Category</label>
      <select id="category" name="category" required defaultValue="">
        <option value="" disabled>
          Select a category
        </option>
        <option value="Branding">Branding</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Web Design">Web Design</option>
        <option value="Web Development">Web Development</option>
        <option value="Graphic Design">Graphic Design</option>
      </select>

      <label htmlFor="description">Project description</label>
      <textarea id="description" name="description" required />

      <label htmlFor="image">Image URL</label>
      <input id="image" name="image" type="url" required />

      <div className="form-actions">
        <button type="submit">Add project</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;