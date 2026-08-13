import { ReviewOnScroll } from "../ReviewOnScroll"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"

export const Project = () => {
    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* SIWES TRACKER */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">SIWES TRACKER</h3>

                            <p className="mb-2">
                                A web app built to help students track their industrial
                                training progress. Users can log daily activities, view
                                summaries, and stay organized throughout their SIWES journey.
                                Built with a responsive and intuitive dashboard.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "CSS", "LocalStorage"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb- inline-block mt-"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://siwes-tracker-xlxt.vercel.app/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/siwes-tracker.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FaGithub /> Github
                                </a>
                            </div>
                        </div>


                        {/* KAMPUSPLUG */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">KampusPlug</h3>

                            <p className="mb-2">
                                KampusPlug is a web-based campus marketplace that connects
                                students within Nigerian universities to buy and sell items
                                seamlessly. From textbooks and gadgets to food and fashion,
                                it provides a streamlined platform where students can
                                explore listings, post products, and engage in local
                                peer-to-peer transactions within their school ecosystem.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm inline-block mt-4"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://www.kampusplug.com/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/Skywonda/kampusplug.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FaGithub /> Github
                                </a>
                            </div>
                        </div>


                        {/* ALUMNI CONNECT */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Alumni Connect</h3>

                            <p className="mb-2">
                                Alumni Connect is a platform designed to help students
                                connect with alumni for mentorship, discover job
                                opportunities, and stay connected with their university
                                community. It includes authentication, profiles,
                                mentorship requests, job postings, applications, and
                                real-time dashboard features.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm inline-block mt-4"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://alumni-connect-beta-five.vercel.app/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/Alumni-connect.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FaGithub /> Github
                                </a>
                            </div>
                        </div>


                        {/* TO-DO LIST */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">To-Do list app</h3>

                            <p className="mb-2">
                                A task manager app designed for simplicity and productivity.
                                Features include snooze functionality for overdue tasks,
                                custom alerts, and animated task completion.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "CSS", "LocalStorage"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm inline-block mt-4"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://DanielBrownsky.github.io/to-do-list"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/to-do-list.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FaGithub /> Github
                                </a>
                            </div>
                        </div>


                        {/* DB GYM FIT */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                DB-Gym-Fit – Interactive Workout Generator
                            </h3>

                            <p className="mt-2">
                                DB-Gym-Fit is a fully custom-built React application that
                                generates personalized workout plans with zero reliance on
                                external APIs. Designed with a bold, humorous tone and a clean
                                user experience, it guides users through a 3-step process to
                                craft the perfect workout based on training style, targeted
                                muscle groups, and fitness goals.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Javascript", "TailwindCSS", "HTML/CSS"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm inline-block mt-6"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://db-gym-fit.vercel.app/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/DB-Gym-Fit.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FaGithub /> Github
                                </a>
                            </div>
                        </div>


                        {/* NASA APOD */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                NASA APOD Viewer
                            </h3>

                            <p className="mt-2">
                                A sleek and interactive web app that fetches and displays
                                NASA's Astronomy Picture of the Day using their public API.
                                Users can explore daily space images, read NASA's detailed
                                descriptions, and even search for specific dates.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Javascript", "CSS", "NASA Open API"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm inline-block mt-6"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://nasa-apod-rho.vercel.app/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/nasa-apod.git"
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    <FaGithub /> Github
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    )
}