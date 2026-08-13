import { ReviewOnScroll } from "../ReviewOnScroll";

export const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
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
                <div className="max-w-3xl mx-auto px-4">

                    {/* About Heading */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    {/* About Introduction */}
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I'm a frontend developer focused on building modern,
                            responsive, and user-centered web applications. I work
                            primarily with React and Next.js, using TypeScript and
                            Tailwind CSS to create scalable and intuitive interfaces.
                            I've also worked with Supabase, PostgreSQL, APIs,
                            authentication, and database security while building
                            real-world applications.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            I enjoy turning ideas into functional products, solving
                            problems through code, and continuously improving my skills
                            by building and exploring new technologies.
                        </p>

                        {/* Skills */}
                        <div className="flex flex-col gap-6 mt-8">

                            {/* Frontend */}
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4">
                                    Frontend
                                </h3>

                                <div className="flex flex-wrap gap-4">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-lg hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend & Database */}
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4">
                                    Backend & Database
                                </h3>

                                <div className="flex flex-wrap gap-4">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-lg hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Platforms */}
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4">
                                    Tools & Platforms
                                </h3>

                                <div className="flex flex-wrap gap-4">
                                    {toolsSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-lg hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                        {/* Education */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>

                            <div>
                                <h4 className="text-lg font-semibold mb-2">
                                    B.Sc. in Computer Science
                                </h4>

                                <p className="text-gray-300 mb-1">
                                    Olusegun Agagu University of Science and Technology
                                </p>

                                <p className="text-sm italic text-gray-400 mb-4">
                                    2023 - 2026
                                </p>

                                <p className="text-gray-300 leading-relaxed">
                                    Completed my degree in Computer Science with a focus
                                    on software development and frontend engineering.
                                    I apply my academic knowledge through practical
                                    projects, building responsive web applications and
                                    exploring modern technologies to solve real-world
                                    problems.
                                </p>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Experience
                            </h3>

                            {/* Alumni Connect */}
                            <div>
                                <h4 className="text-lg font-semibold mb-2">
                                    Frontend Developer - Alumni Connect
                                </h4>

                                <p className="text-gray-300 mb-1">
                                    Final Year Project
                                </p>

                                <p className="text-sm italic text-gray-400 mb-4">
                                    2026
                                </p>

                                <p className="text-gray-300 leading-relaxed">
                                    Designed and developed a full-featured platform that
                                    helps students connect with alumni for mentorship,
                                    discover job opportunities, and stay connected with
                                    their university community. Built with Next.js,
                                    TypeScript, Tailwind CSS, and Supabase.
                                </p>
                            </div>

                            {/* KampusPlug */}
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-2">
                                    Frontend Developer - KampusPlug
                                </h4>

                                <p className="text-gray-300 mb-1">
                                    Personal Project
                                </p>

                                <p className="text-sm italic text-gray-400 mb-4">
                                    2026
                                </p>

                                <p className="text-gray-300 leading-relaxed">
                                    Built a student marketplace that allows users to
                                    discover and explore products and services within
                                    their campus community. Developed the interface
                                    using Next.js, TypeScript, and Tailwind CSS with a
                                    focus on responsive design and user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};