import { ReviewOnScroll } from "../ReviewOnScroll"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"

export const Project = () => {
    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-white">
                        Projects
                    </h2>

                    {/* Featured Projects */}
                    <div className="space-y-8 mb-16">

                        {/* Alumni Connect - Featured */}
                        <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            <div className="mb-4">
                                <span className="text-xs font-medium text-blue-400 uppercase tracking-wide mb-2 block">
                                    Final Year Project
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Alumni Connect
                                </h3>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
                                Alumni Connect connects students with alumni for mentorship, career opportunities, and continued university engagement. The platform includes role-based authentication, profiles, mentorship requests, job postings, applications, and real-time activity.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-lg text-sm border border-blue-500/10 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    Engineering Highlights
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                                    <span>Role-based authentication</span>
                                    <span className="text-gray-600">·</span>
                                    <span>PostgreSQL data modeling</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Row Level Security</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Real-time updates</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://alumni-connect-beta-five.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-500 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/Alumni-connect.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white py-2.5 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>

                        {/* KampusPlug - Featured */}
                        <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            <div className="mb-4">
                                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide mb-2 block">
                                    Collaborative Project
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    KampusPlug
                                </h3>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
                                KampusPlug is a campus marketplace built to help students across Nigerian universities buy and sell within their school communities. I contributed to the product as part of a collaborative team of developers and designers, working on a production-oriented Next.js application designed for real users.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {["Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-cyan-500/10 text-cyan-400 py-1.5 px-3 rounded-lg text-sm border border-cyan-500/10 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    Engineering Highlights
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                                    <span>Collaborative development</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Responsive UI</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Reusable components</span>
                                    <span className="text-gray-600">·</span>
                                    <span>TypeScript</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Product-focused development</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://www.kampusplug.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-cyan-500 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/Skywonda/kampusplug.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white py-2.5 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Other Projects */}
                    <h3 className="text-xl font-semibold mb-6 text-gray-200">
                        Other Projects
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                        {/* SIWES TRACKER */}
                        <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <h3 className="text-lg font-bold text-white mb-3">
                                SIWES Tracker
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Students track industrial training progress with daily activity logging and progress summaries.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {["React", "CSS", "LocalStorage"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/5 text-blue-400 py-1 px-3 rounded-lg text-xs border border-blue-500/10 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-5">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    Engineering Highlights
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                                    <span>LocalStorage persistence</span>
                                    <span className="text-gray-600">·</span>
                                    <span>State management</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Responsive dashboard</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://siwes-tracker-xlxt.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/siwes-tracker.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>

                        {/* DB-Gym-Fit */}
                        <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <h3 className="text-lg font-bold text-white mb-3">
                                DB-Gym-Fit
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Custom workout generator creating personalized routines based on training style and fitness goals.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {["React", "JavaScript", "TailwindCSS", "HTML/CSS"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/5 text-blue-400 py-1 px-3 rounded-lg text-xs border border-blue-500/10 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-5">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    Engineering Highlights
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                                    <span>Dynamic workout generation</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Custom filtering logic</span>
                                    <span className="text-gray-600">·</span>
                                    <span>Responsive UI</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://db-gym-fit.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/DB-Gym-Fit.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Secondary Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* NASA APOD Viewer */}
                        <div className="p-5 rounded-xl border border-white/5 hover:border-white/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <h3 className="text-base font-bold text-white mb-3">
                                NASA APOD Viewer
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Displays NASA's Astronomy Picture of the Day with search functionality and detailed descriptions.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {["React", "JavaScript", "CSS", "NASA API"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/5 text-blue-400 py-1 px-3 rounded-lg text-xs border border-blue-500/10 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://nasa-apod-rho.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/nasa-apod.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>

                        {/* To-Do List App */}
                        <div className="p-5 rounded-xl border border-white/5 hover:border-white/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <h3 className="text-base font-bold text-white mb-3">
                                To-Do List App
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Task manager with snooze functionality, custom alerts, and animated completion for productivity tracking.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {["React", "CSS", "LocalStorage"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/5 text-blue-400 py-1 px-3 rounded-lg text-xs border border-blue-500/10 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://DanielBrownsky.github.io/to-do-list"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>

                                <a
                                    href="https://github.com/DanielBrownsky/to-do-list.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    )
}
