import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  { 
    id: 3,
    name: 'FORGOTTEN LORE', 
    image: '/images/forgottenlore.png', 
    type: '3D',
    description: '"Forgotten Lore", my Final Group Project at SAE Institute Germany.',
    additionalImages: ['/images/forgottenlore_2.png', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    originalPostUrl: 'https://example.com/project3',
    fullDescription: 'Forgotten Lore is an immersive 3D experience that blends ancient mythology with modern storytelling. This project showcases advanced lighting techniques, intricate environmental design, and character modeling. It was a collaborative effort that pushed the boundaries of our creative and technical skills.'
  },
  { 
    id: 1, 
    name: 'PROJECT BLASTZXNE 2', 
    image: '/images/blastzone2.png', 
    type: 'GRAPHIC',
    description: 'A vampire survival like with simple Geometry, 2 week Game Jam.',
    additionalImages: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    originalPostUrl: 'https://pixum.itch.io/blastzone2',
    fullDescription: 'Project Blastzxne 2 is a fast-paced, vampire-themed survival game created during a 2-week Game Jam. It features minimalist geometric graphics that belie its complex gameplay mechanics. This project demonstrates rapid prototyping skills and the ability to create engaging experiences with limited resources.'
  },
  { 
    id: 2, 
    name: 'PROJECT ERYTHEA', 
    image: '/placeholder.svg?height=300&width=400', 
    type: 'UI',
    description: 'A sleek user interface design for a space exploration game.',
    additionalImages: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    originalPostUrl: 'https://example.com/project2',
    fullDescription: 'Project Erythea showcases a futuristic UI design for a space exploration game. The interface balances form and function, providing players with intuitive controls and immersive visual feedback. This project highlights my skills in creating user-centric designs that enhance the overall gaming experience.'
  },
  { 
    id: 4, 
    name: 'OLD TV', 
    image: '/placeholder.svg?height=300&width=400', 
    type: '3D',
    description: 'A game ready Asset of an old TV in a Cabin.',
    additionalImages: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    originalPostUrl: 'https://example.com/project4',
    fullDescription: 'The Old TV is a meticulously crafted 3D asset designed for game environments. It captures the essence of vintage technology, complete with detailed textures and realistic materials. This project demonstrates attention to detail and the ability to create assets that add depth and authenticity to game worlds.'
  },
  { 
    id: 5, 
    name: 'UI DESIGN CONCEPT', 
    image: '/placeholder.svg?height=300&width=400', 
    type: 'UI',
    description: 'A modern and intuitive user interface design for a productivity app.',
    additionalImages: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    originalPostUrl: 'https://example.com/project5',
    fullDescription: 'This UI Design Concept for a productivity app combines aesthetics with functionality. The design focuses on clear information hierarchy, intuitive navigation, and visually pleasing elements that enhance user engagement. It showcases my ability to create interfaces that not only look good but also improve user productivity.'
  }
]

const ImageViewer = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
        <button
          onClick={onPrev}
          className="absolute left-4 text-white hover:text-yellow-400 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <img src={images[currentIndex]} alt={`Full size ${currentIndex + 1}`} className="max-h-full max-w-full object-contain" />
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-yellow-400 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
        aria-label="Close image viewer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

const ProjectView = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  if (!project) return null;

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
  };

  const closeImageViewer = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.additionalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.additionalImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-yellow-400">{project.name}</h2>
            <button onClick={onClose} className="text-yellow-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-white mb-4">{project.fullDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {project.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.name} detail ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => openImageViewer(index)}
              />
            ))}
          </div>
          <a
            href={project.originalPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-yellow-400 transition-colors"
          >
            View Original Post
          </a>
        </div>
      </div>
      <AnimatePresence>
        {currentImageIndex !== null && (
          <ImageViewer
            images={project.additionalImages}
            currentIndex={currentImageIndex}
            onClose={closeImageViewer}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectCarousel = ({ projects, openProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].name}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-8 cursor-pointer"
            onClick={() => openProject(projects[currentIndex])}
          >
            <h2 className="text-4xl font-bold mb-2 text-white">{projects[currentIndex].name}</h2>
            <p className="text-xl mb-4 text-white">{projects[currentIndex].description}</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400 transition-colors">
              View Project
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        onClick={prevProject}
        aria-label="Previous project"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        onClick={nextProject}
        aria-label="Next project"
      >
        <ChevronRight className="h-12 w-12" />
      </button>
    </div>
  );
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('ALL')

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.type === filter);

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex flex-col">
      <header className="border-b border-yellow-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/prisma_logo_transparent_yellow.png" alt="Logo" className="h-12 w-12 mr-4" />
            {currentPage !== 'home' && <h1 className="text-3xl font-bold">Dylan Weber</h1>}
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><button onClick={() => setCurrentPage('home')} className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white' : ''}`}>Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}>About</button></li>
              <li><button onClick={() => setCurrentPage('connect')} className={`hover:text-white transition-colors ${currentPage === 'connect' ? 'text-white' : ''}`}>Connect</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            {currentPage === 'home' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                  <h2 className="text-5xl font-bold mb-4">I'm <span className="text-white">Dylan Weber</span></h2>
                  <p className="text-2xl mb-8">3D Artist and Graphic Designer</p>
                </div>
                <ProjectCarousel projects={projects} openProject={openProject} />
                <div className="mt-12">
                  <div className="flex justify-center space-x-4 mb-8">
                    <button onClick={() => setFilter('ALL')} className={`${filter === 'ALL' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'} px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors`}>All</button>
                    <button onClick={() => setFilter('3D')} className={`${filter === '3D' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'} px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors`}>3D</button>
                    <button onClick={() => setFilter('GRAPHIC')} className={`${filter === 'GRAPHIC' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'} px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors`}>Graphic</button>
                    <button onClick={() => setFilter('UI')} className={`${filter === 'UI' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'} px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors`}>UI</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                      <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer" onClick={() => openProject(project)}>
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                          <p className="text-gray-400">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'about' && (
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <img src="/images/prisma_logo_transparent_yellow.png" alt="Dylan Weber" className="h-auto w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-4xl font-bold mb-8"><span className="text-white">About</span> Me</h2>
                    <p className="text-xl mb-6">
                      I'm a passionate 3D Artist and Game Developer with a keen eye for detail and a love for creating immersive digital experiences. With a background in both art and technology, I bring a unique perspective to every project I undertake.
                    </p>
                    <p className="text-xl mb-6">
                      My journey in the world of 3D art and game development began at SAE Institute Germany, where I honed my skills and developed a deep understanding of the creative process. Since then, I've worked on a variety of projects, from concept art to fully realized game environments.
                    </p>
                    <p className="text-xl">
                      I'm always excited to take on new challenges and push the boundaries of what's possible in digital art and game development. Whether it's creating stunning visual effects, designing intuitive user interfaces, or bringing characters to life, I'm committed to delivering high-quality work that exceeds expectations.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'connect' && (
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
                      <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! I will get back to you soon.'); }}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                          <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white" required />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                          <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white" required />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white" required></textarea>
                        </div>
                        <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">Send Message</button>
                      </form>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-xl mb-6">
                      I'm always open to new opportunities, collaborations, or just a friendly chat about 3D art and game development. Feel free to reach out to me through any of the following platforms:
                    </p>
                    <div className="flex flex-col space-y-4">
                      <a href="https://github.com/Dylanweba" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/dylanweb/" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                      </a>
                      <a href="https://www.artstation.com/dylanweber" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-400 hover:text-white transition-colors">
                        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <title>ArtStation</title>
                          <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
                        </svg>
                        ArtStation
                      </a>
                      <a href="https://www.behance.net/dylanweber" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                        </svg>
                        Behance
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-12 border-t border-yellow-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://github.com/Dylanweba" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/dylanweb/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.artstation.com/dylanweber" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-colors">
              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <title>ArtStation</title>
                <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
              </svg>
            </a>
            <a href="https://www.behance.net/dylanweber" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm">&copy; 2024 Dylan Weber. All rights reserved.</p>
          {currentPage !== 'connect' && (
            <button onClick={() => setCurrentPage('connect')} className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400 transition-colors">
              Connect
            </button>
          )}
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectView project={selectedProject} onClose={closeProject} />
        )}
      </AnimatePresence>
    </div>
  )
}