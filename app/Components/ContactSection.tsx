"use client";
import React, { useState } from "react";

interface ContactFromState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection () {
  const [formState, setFormState] = useState<ContactFromState>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
    ...formState, [name]: value
  })
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log ('Form submitted:', formState);
  const response = await fetch ('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formState)
  })
  const result = await response.json ();
  console.log (result);
}

  return (
    <section id="contact" className="w-full px-[12] py-10 scroll-mt-20 ">
      <h2 className="text-center font-extrabold mb-2 text-4xl text-gray-100 text-bold">
        Let's Connect!
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-3 opacity-60 mb-12">
        Feel free to leave your inquiry below!
      </p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            required
            value={formState.name}
            onChange={handleInputChange}
            className="flex-1 p-3 outline-none border border-zinc-300 rounded-md bg-zinc-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
            value={formState.email}
            onChange={handleInputChange}
            className="flex-1 p-3 outline-none border border-zinc-300 rounded-md bg-zinc-800"
          />
          <textarea
            name="message"
            placeholder="Enter your message..."
            required
            value={formState.message}
            onChange={handleInputChange}
            className="w-full p-4 outline-none border border-zinc-300 rounded-md bg-zinc-800 mb-6"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 border-2 rounded-2xl border-zinc-300 bg-violet-700 font-bold hover:bg-violet-500 duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
