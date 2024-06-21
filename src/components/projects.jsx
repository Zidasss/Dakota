import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Repeat this block for each project */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="project-image.jpg" alt="Project" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-700 mb-4">Short description of the project.</p>
            <a href="project-link" className="text-blue-500 hover:underline">View Project</a>
          </div>
          {/* End of project block */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
