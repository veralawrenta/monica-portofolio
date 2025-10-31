'use client'
import { listTools } from "@/data/listTools";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="about-me  py-10">
      <div className="w-2/3 mx-auto p-7 box-border bg-zinc-900 rounded-4xl" data-aos="fade-up" data-aos-duration="1000">
        <p className="text-justify">
          Hello! I am a
          <span className=" text-violet-500 hover:text-violet-700 font-bold text-lg mx-1">
            Full-Stack Developer
          </span>
          who transitioned from a background in law to pursue a career in
          technology. What began as curiosity about how the web works evolved
          into a deep passion for coding and creating thoughtful digital
          solutions. My experience in law strengthened my analytical thinking,
          precision, and problem-solving with qualities that now guide my
          approach to development. I enjoy building efficient, user-focused
          solutions and take pride in writing clean, maintainable code that
          brings ideas to life.
        </p>
      </div>

      <div className="skills mt-32">
        <h2 className="text-center text-4xl/snug font-bold mb-4">
          Tools I Use
        </h2>
        <div className="tools-box mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
          
      <div>
          
      </div>
    </section>
  );
}
