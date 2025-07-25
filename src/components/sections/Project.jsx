import { ReviewOnScroll } from "../ReviewOnScroll"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"

export const Project = () => {
    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">SIWES TRACKER</h3>
                            <p className="mb-2">A web app built to help students track their industrial training progress. Users can log daily activities, view summaries, and stay organized throughout their SIWES journey. Built with a responsive and intuitive dashboard.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "CSS", "LocalStorage"].map((tech, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb- inline-block mt-">
                                        {tech}
                                    </span>
                            ))}
                            </div>
                            <div className="flex flex-col ">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View project 
                                </a>
                                <div className="flex justify-between items-center ">
                                    <a href="https://siwes-tracker-xlxt.vercel.app/" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a href="https://github.com/DanielBrownsky/siwes-tracker.git" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FaGithub /> Github
                                    </a>
                                </div>
                            </div>
                        </div><div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">CampusPlug</h3>
                        <p className="mb-2">CampusPlug is a web-based campus marketplace that connects students within Nigerian universities to buy and sell items seamlessly. From textbooks and gadgets to food and fashion, it offers a streamlined platform where students can explore listings, post products, and engage in safe, local peer-to-peer transactions — all within their school ecosystem.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Typescript", "TailwindCSS", "LocalStorage" ].map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  inline-block mt-4">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View project 
                                </a>
                                <div className="flex justify-between items-center ">
                                    <a href="https://campus-plug.vercel.app" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a href="https://github.com/DanielBrownsky/CampusPlug.git" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FaGithub /> Github
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">To-Do list app</h3>
                        <p className="mb-2">A task manager app designed for simplicity and productivity. Features include snooze functionality for overdue tasks, custom alerts, and animated task completion.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "CSS", "LocalStorage" ].map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  inline-block mt-4">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View project 
                                </a>
                                <div className="flex justify-between items-center ">
                                    <a href="https://DanielBrownsky.github.io/to-do-list" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a href="https://github.com/DanielBrownsky/to-do-list.git" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FaGithub /> Github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">DB-Gym-Fit – Interactive Workout Generator</h3>
                        <p className="mt-2">DB-Gym-Fit is a fully custom-built React application that generates personalized workout plans with zero reliance on external APIs. Designed with a bold, humorous tone and a clean user experience, it guides users through a 3-step process to craft the perfect workout based on training style, targeted muscle groups, and fitness goals.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Javascript", "TailwindCSS", "HTML/CSS"  ].map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  inline-block mt-6">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View project 
                                </a>
                                <div className="flex justify-between items-center ">
                                    <a href="https://db-gym-fit.vercel.app/" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a href="https://github.com/DanielBrownsky/DB-Gym-Fit.git" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FaGithub /> Github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">NASA APOD Viewer </h3>
                        <p className="mt-2">A sleek and interactive web app that fetches and displays NASA's Astronomy Picture of the Day using thier public API. Users can explore daily space images, read NASA's detailed descriptions, and even search for specific dates.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "javascript", "CSS", "NASA Open API"].map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  inline-block mt-6">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View project 
                                </a>
                                <div className="flex justify-between items-center ">
                                    <a href="https://nasa-apod-rho.vercel.app/" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a href="https://github.com/DanielBrownsky/nasa-apod.git" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                                        <FaGithub /> Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    )
}