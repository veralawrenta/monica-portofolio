export default function HeroSection() {
  return (
    <section className="home">
      <div className="container flex flex-col items-center justify-between max-auto gap-2 px-4">
        <img
          src="/image/profile.png"
          alt="profile"
          className="flex rounded-full w-45 items-center mx-auto h-45 mb-4 border-3 border-zinc-400 hover:border-white"
        />
        <h1 className="text-bold items-end text-center gap-2 text-xl sm:text-2xl md:text-3xl mb-3 font-fraunces">
          Hi! My name is
        </h1>
        <h2 className="text-center font-bold text-3xl sm:text-6xl lg:text-[66px] font-fraunces text-violet-600">
          Monica Lawrenta
        </h2>
        <h3 className="text-center text-2xl sm:text-4xl font-fraunces">
          FullStack Developer
        </h3>
        <p className="mx-auto mt-3 font-figtree rounded-2xl text-center leading-relaxed">
          Fresh bootcamp graduate exploring full-stack development and creating
          projects that make learning real.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 max-w-sm sm:max-w-md max-auto">
          <a
            href="/Resume_Monica.pdf"
            download={"Resume_Monica.pdf"}
            className="flex-1 w-54 px-10 py-3 border rounded-full border-violet-700 bg-violet-600 text-gray-100 font-semibold hover:bg-violet-500 items-center gap-2"
          >
            Download CV<i className="ri-download-line ml-2 ri-lg"></i>
          </a>
          <a
            href="#contact"
            className="flex-1 w-54 px-10 py-3 border rounded-full border-gray-400 bg-zinc-700 text-gray-100 font-semibold hover:bg-zinc-500 items-center gap-2"
          >
            Contact Me<i className="ri-mail-line ml-2 ri-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
