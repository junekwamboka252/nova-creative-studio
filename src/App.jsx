
import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Footer from "./components/Footer";

import useLocalStorage from "./hooks/useLocalStorage";

const initialProjects = [
  {
    id: 1,
    name: "Aura Skincare",
    category: "Branding",
    description: "A fresh and elegant visual identity for a modern skincare brand.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
  },
  {
    id: 2,
    name: "Flow Finance",
    category: "UI/UX Design",
    description: "A simple and intuitive financial experience for everyday users.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 3,
    name: "Forma Living",
    category: "Web Design",
    description: "A clean digital storefront for a contemporary furniture brand.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  },
  {
    id: 4,
    name: "Culture Lab",
    category: "Graphic Design",
    description: "Bold graphic concepts celebrating creativity and culture.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800",
  },
  {
    id: 5,
    name: "Green Earth",
    category: "Web Development",
    description: "A digital platform promoting sustainable living and awareness.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
  },
  {
    id: 6,
    name: "Urban Bites",
    category: "Branding",
    description: "A playful brand identity for a modern food business.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
  },
];

const categories = [
  "All",
  "Branding",
  "UI/UX Design",
  "Web Design",
  "Web Development",
  "Graphic Design",
];

function App() {
  const [projects, setProjects] = useLocalStorage(
    "nova-projects",
    initialProjects
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [newProject, ...previousProjects]);
    setShowForm(false);
    setSelectedCategory("All");
    setSearchTerm("");
    setMessage("Your project has been added successfully!");
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">OUR PORTFOLIO</p>
              <h2>Selected Work</h2>
            </div>

            <button
              className="add-project-button"
              onClick={() => {
                setShowForm(!showForm);
                setMessage("");
              }}
            >
              {showForm ? "Close form" : "+ Add Project"}
            </button>
          </div>

          {showForm && (
            <ProjectForm
              onAddProject={handleAddProject}
              onCancel={() => setShowForm(false)}
            />
          )}

          {message && <p className="success-message">{message}</p>}

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ProjectList projects={filteredProjects} />
        </section>

        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
