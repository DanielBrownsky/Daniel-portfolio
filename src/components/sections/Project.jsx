import { ReviewOnScroll } from "../ReviewOnScroll"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"
import { projects } from "../../data/projects"

export const Project = () => {
    const featuredProjects = projects.filter(p => p.featured && p.id !== "kampusplug" && p.id !== "alumni-connect");
    const otherProjects = projects.filter(p => p.category === "other" && p.id !== "siwes-tracker");
    const secondaryProjects = projects.filter(p => p.category === "secondary" && p.id !== "nasa-apod");

    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--color-text-primary)' }}>
                        Projects
                    </h2>

                    {/* Featured Projects */}
                    <div className="space-y-8 mb-16">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className={`p-8 rounded-2xl border ${
                                    project.id === "kampusplug"
                                        ? "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/30"
                                        : "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/30"
                                } hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                            >
                                <div className="mb-4">
                                    <span className={`text-xs font-medium uppercase tracking-wide mb-2 block ${
                                        project.id === "kampusplug" ? "text-cyan-400" : "text-blue-400"
                                    }`}>
                                        {project.role}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="leading-relaxed mb-4 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`py-1.5 px-3 rounded-lg text-sm border font-medium ${
                                                project.id === "kampusplug"
                                                    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/10"
                                                    : "bg-blue-500/10 text-blue-400 border-blue-500/10"
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.highlights && project.highlights.length > 0 && (
                                    <div className="mb-6">
                                        <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                                            Engineering Highlights
                                        </p>
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                            {project.highlights.map((highlight, index) => (
                                                <span key={index}>
                                                    {highlight}
                                                    {index < project.highlights.length - 1 && (
                                                        <span className="ml-4" style={{ color: 'var(--color-text-muted)' }}>·</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-white py-2.5 px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 ${
                                            project.id === "kampusplug"
                                                ? "bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500/50"
                                                : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500/50"
                                        }`}
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white py-2.5 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                        Other Projects
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {otherProjects.map((project) => (
                            <div
                                key={project.id}
                                className="p-6 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                                style={{ border: '1px solid var(--color-border-subtle)' }}
                            >
                                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                                    {project.title}
                                </h3>

                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/5 text-blue-400 py-1 px-3 rounded-lg text-xs border border-blue-500/10 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.highlights && project.highlights.length > 0 && (
                                    <div className="mb-5">
                                        <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                                            Engineering Highlights
                                        </p>
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                            {project.highlights.map((highlight, index) => (
                                                <span key={index}>
                                                    {highlight}
                                                    {index < project.highlights.length - 1 && (
                                                        <span className="ml-4" style={{ color: 'var(--color-text-muted)' }}>·</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm transition-colors focus:outline-none rounded"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm transition-colors focus:outline-none rounded"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Secondary Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {secondaryProjects.map((project) => (
                            <div
                                key={project.id}
                                className="p-5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                                style={{ border: '1px solid var(--color-border-subtle)' }}
                            >
                                <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                                    {project.title}
                                </h3>

                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, index) => (
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
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm transition-colors focus:outline-none rounded"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm transition-colors focus:outline-none rounded"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    )
}
