import { ReviewOnScroll } from "../ReviewOnScroll"

export const Home = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative pt-20 sm:pt-0 bg-black">
      <ReviewOnScroll>
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            
            {/* Left: Content Area */}
            <div className="md:w-3/5 w-full text-center md:text-left z-10">
              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 tracking-wide">
                Ayeku Daniel
              </h2>

              {/* Main Headline - Strongest Visual Weight */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                I build digital products that solve real problems.
              </h1>

              {/* Supporting Copy */}
              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl">
                I build modern web products across the frontend and backend, turning real-world problems into responsive, functional solutions people can actually use.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#project"
                  className="w-full sm:w-auto bg-blue-500 text-white py-3 px-8 rounded font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-center"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto border border-blue-500/50 text-blue-400 py-3 px-8 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-center"
                >
                  Let's Connect
                </a>
              </div>
            </div>

            {/* Right: Photograph Area */}
            <div className="md:w-2/5 w-full flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-96 lg:h-[30rem] rounded-2xl overflow-hidden border-2 border-blue-500/8 shadow-[0_0_12px_rgba(59,130,246,0.06)]">
                  <img
                    src="/hero-photo.jpeg"
                    alt="Ayeku Daniel"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Subtle glow behind photo */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/3 to-purple-500/3 blur-md -z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </ReviewOnScroll>
    </section>
  )
}
