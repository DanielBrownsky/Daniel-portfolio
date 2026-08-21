import { ReviewOnScroll } from "../ReviewOnScroll";

export const About = () => {
    const frontendSkills = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
    ];

    const backendSkills = [
        "Supabase",
        "PostgreSQL",
        "REST APIs",
        "Authentication",
        "Row Level Security",
    ];

    const toolsSkills = [
        "Git",
        "GitHub",
        "Vercel",
        "Vite",
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <ReviewOnScroll>
                <div className="max-w-4xl mx-auto px-4">

                    {/* About Heading */}
                    <h2 className="text-3xl font-bold mb-8 text-white">
                        About
                    </h2>

                    {/* Main Narrative */}
                    <div className="mb-12">
                        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
                            I'm a developer who learned by building real products. I started with frontend development, where I became interested in creating interfaces that people can actually use, but building larger applications pushed me to understand what happens behind the interface. How data flows, how authentication works, and how the different pieces of an application connect. That led me into full-stack development with React, Next.js, TypeScript, and Supabase. These days, I approach projects by understanding the problem first, then figuring out what needs to be built and which tools make sense for it.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-6 text-gray-200">
                            Skills
                        </h3>

                        <div className="space-y-6">
                            {/* Frontend */}
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-gray-400 uppercase tracking-wide">
                                    Frontend
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/5 text-blue-400 py-1.5 px-4 rounded-lg text-sm border border-blue-500/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend & Data */}
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-gray-400 uppercase tracking-wide">
                                    Backend & Data
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-cyan-500/5 text-cyan-400 py-1.5 px-4 rounded-lg text-sm border border-cyan-500/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Workflow */}
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-gray-400 uppercase tracking-wide">
                                    Tools & Workflow
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {toolsSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/5 text-blue-400 py-1.5 px-4 rounded-lg text-sm border border-blue-500/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Featured Work */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Education */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">
                                Education
                            </h3>

                            <div>
                                <h4 className="text-lg font-medium mb-1 text-white">
                                    B.Sc. Computer Science
                                </h4>

                                <p className="text-gray-300 mb-1">
                                    Olusegun Agagu University of Science and Technology
                                </p>

                                <p className="text-sm text-gray-400">
                                    2022 to 2026
                                </p>
                            </div>
                        </div>

                        {/* Featured Work */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">
                                Featured Work
                            </h3>

                            {/* Alumni Connect */}
                            <div className="mb-6">
                                <h4 className="text-lg font-medium mb-1 text-white">
                                    Alumni Connect
                                </h4>

                                <p className="text-sm text-gray-400 mb-2">
                                    Final Year Project
                                </p>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    A platform that helps students connect with alumni for mentorship, discover job opportunities, and stay connected with their university community. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.
                                </p>
                            </div>

                            {/* KampusPlug */}
                            <div>
                                <h4 className="text-lg font-medium mb-1 text-white">
                                    KampusPlug
                                </h4>

                                <p className="text-sm text-gray-400 mb-2">
                                    Collaborative Project
                                </p>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    A student marketplace that allows users to discover and explore products and services within their campus community. Worked on the frontend interface using Next.js, TypeScript, and Tailwind CSS as part of a collaborative team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};
