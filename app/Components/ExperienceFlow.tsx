import { experiences } from "@/data/workSchema";

export default function ExperienceTree() {
  return (
    <section id="experience" className="containerw-full py-16 px-[12%] mt-20">
      <h2 className="text-4xl font-extrabold mb-14 text-center">
        Professional Experience
      </h2>

      <div className="relative border-l-2 border-violet-700">
      <div className="absolute -top-1 left-[-7px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-violet-700"></div>
        {experiences.map((job, index) => (
          <div key={index} className="mb-10 ml-6 relative border-2 border-zinc-300 hover:border-violet-700 rounded-xl">
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-violet-500 rounded-full -left-[9px] border-2 border-white shadow-md"></div>

            <div className="text-zinc-100 p-2 mx-2 rounded-2xl transition w-[92%]">
              <h3 className="text-xl font-bold text-zinc-100">
                {job.role}
              </h3>
              <p className="text-violet-400 font-semibold text-lg">{job.company}</p>
              <span className="text-sm text-gray-400">{job.period}</span>

              <p className="mt-3 list-disc list-inside text-zinc-400 text-justify space-y-1">
                {job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
