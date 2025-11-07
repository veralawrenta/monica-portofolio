import { projectLists } from "@/data/listTools";

export default function ProjectSection() {
  return (
    <section id="project" className="container mx-auto px-4 mt-20">
      <h2 className="text-center font-bold text-4xl mb-2 text-gray-200">
        Projects
      </h2>
      <p className="text-base/loose text-center opacity-60">
        Followings are the projects that I have implemented my coding
      </p>
      <div className="project-box mt-14 grid md:grid-cols-3 gap-4 rounded-md">
        {projectLists.map((project) => (
          <div key={project.id} className="p-4 bg-zinc-800 hover:bg-zinc-900 rounded-xl">
            <img src={project.image} alt={project.title} />
            <div>
              <h2 className="text-2xl text-gray-200 font-bold my-2 hover:text-violet-500">{project.title}</h2>
              <p className="text-base/relaxed mb-4 text-color-300 text-justify">{project.descriptions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
