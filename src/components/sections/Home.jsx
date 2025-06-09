import { useState } from "react"
import { ReviewOnScroll } from "../ReviewOnScroll"
import { FaGithub } from "react-icons/fa";


export const Home = () =>{

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <ReviewOnScroll>
                <div className="text-center z-10 px-4 ">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent leading-right">
                        Hi, I'm Daniel Brownsky
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 mx-auto">
                        I'm a frontend developer passionate about building responsive and user-focused web applications.
                        I work with technologies like HTML, CSS, JavaScript, React, and TailwindCSS to create clean, accessible, and efficient interfaces.
                        I’m currently looking for internship opportunities where I can grow, contribute, and collaborate with experienced teams.
                        I'm also open to working on exciting projects and building with other developers in the tech community.


                        <br /> 
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                    <div className="flex flex-row justify-center gap-4 w-full sm:w-auto">
                        <a
                        href="#project"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)] text-center scroll-smooth"
                        >
                        View project
                        </a>

                        <a
                        href="https://github.com/DanielBrownsky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-gray-500/50 text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white/10 text-center"
                        >
                        <FaGithub size={20} />
                        GitHub
                        </a>
                    </div>

                    <a
                        href="#contact"
                        className="mt-4 sm:mt-0 border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.2)] hover:bg-blue-500/10 text-center sm:ml-4"
                    >
                        Contact me
                    </a>
                    </div>

                </div>
            </ReviewOnScroll>
        </section>
    )

}
