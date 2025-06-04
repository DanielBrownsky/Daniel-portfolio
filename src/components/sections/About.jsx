import { ReviewOnScroll } from "../ReviewOnScroll"


export const About = () => {

    // const frontendSkills = [
    //     { name: "HTML", icon: "html5" },
    //     { name: "CSS", icon: "css3" },
    //     { name: "JavaScript", icon: "javascript" },
    //     { name: "React", icon: "react" },
    //     { name: "Tailwind CSS", icon: "tailwindcss" },
    //     { name: "Next.js", icon: "nextjs" },
    // ];
     const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
     ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a passionate software engineer with a focus on web development. I love creating beautiful and functional applications that make a difference. My journey in tech started with a curiosity for how things work, and it has evolved into a deep appreciation for the art of coding.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-4 ">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">B.sc. in Computer Science </h4>
                            <p className="text-gray-300 mb-1">Olusegun Agagu University of Science and Technology</p>
                            <p className="text-sm italic text-gray-400 mb-4">Expected Graduation: 2026</p>
                            <p className="leading-relaxed">Currently pursuing my degree in Computer Science with a focus on frontend development. Skilled in HTML, CSS, Javascript, React, and TailwindCSS, I enjoy building responsive user-friendly web applications.I actively apply classroom knownledge through personal projects, translating ideas into clean and intuitive digital experiences.</p>
                        </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4">Experience</h3>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Frontend Developer - SIWES Tracker</h4>
                                <p className="text-gray-300 mb-1">Personal Project</p>
                                <p className="text-sm italic text-gray-400 mb-4">April 2025 - present</p>
                                <p className="text-gray-300 leading-relaxed">Designed and developed a web application to track industrial training progress using React, pure CSS, and localStorage. Features include task logs, progress summaries, and a user-friendly dashboard interface optimized for mobile devices.</p>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-2">To-Do List App</h4>
                                
                                {/* <p className="text-sm italic text-gray-400 mb-4">January 2025 - present</p> */}
                                {/* <p className="text-gray-300 leading-relaxed">Created a personal portfolio website to showcase my projects and skills using React, Tailwind CSS, and Framer Motion. The site features smooth animations, responsive design, and a contact form for potential clients.</p> */}
                                <p className="mb-1 text-gray-300">Personal Project</p>
                                <p className="text-sm italic mb-4 text-gray-400">March 2025</p>
                                <p className="text-gray-300 leading-relaxed">Built a sleek and reponsive task manager with custom notifications, snooze features, and animated UI elements. 
                                    Developed with React and styled extirely using custom CSS, ensuring responsive design and smooth interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    )
}