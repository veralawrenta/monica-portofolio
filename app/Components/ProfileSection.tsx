import { infoLists, listTools } from "@/data/listTools";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section id="aboutme" className="container mx-auto px-4 mt-20 scroll-auto">
      <h2 className="text-center mb-2 text-lg font-fraunces">Introduction</h2>
      <h3 className="text-center text-5xl font-fraunces">About Me</h3>

      <div className="flex w-full flex-col lg:flex-row gap-20 items-center my-14">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <img
            src="/image/profile.png"
            alt="profile"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-figtree text-justify">
            Hi! I am a Full-Stack Developer who transitioned from law to
            technology. What started as curiosity about how the web works grew
            into a passion for coding and creating impactful digital solutions.
            My legal background sharpened my analytical thinking and
            problem-solving skills, which now guide my approach to building
            efficient, user-focused, and maintainable products.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl">
            {infoLists.map(({icon, title, description},
              index) => (
                <li key={index} className="border border-zinc-500 rounded-xl p-5 cursor-pointer hover:border-violet-600 hover:translate-y-1 duration-500">
                  <img src={icon} alt= {title} className="w-6 mt-1"/>
                  <h4 className="my-2 mb-1 font-semibold text-violet-400 text-base">{title}</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="skills mt-20">
        <h2 className="text-center text-4xl/snug font-bold mb-4">
          Relevant Tools
        </h2>
        <div className="tools-box mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:border-violet-400 group"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-950"
              ></img>
              <div>
                <h4 className="font-bold">{tool.name}</h4>
                <p className="opacity-50">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
