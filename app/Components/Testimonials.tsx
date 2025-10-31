import { testimonials } from "@/data/listTools"

export default function Testimonials() {
  return (
    <section className="max-w-auto mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold mb-4 text-center">Testimonials</h2>
      <p className="text-base/loose text-center opacity-60">See what people are saying about me</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}
          className="flex flex-col justity-between min-w-[280px] max-w-sm bg-zinc-800 border-zinc-400 rounded-xl p-6">
            <p className="text-zinc-100 text-justify italic mb-4 grow">{testimonial.message}</p>
            <p className="font-semibold text-violet-300 text-right mt-auto">{testimonial.name}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
