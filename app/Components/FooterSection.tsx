export default function FooterSection() {
  return (
    <section className="container mx-auto px-4 mt-20 flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/veralawrenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill text-2xl"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/veralawrenta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-box-fill text-2xl"></i>
        </a>

        <a
          href="https://www.instagram.com/monicalawrenta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill text-2xl"></i>
        </a>

        <a
          href="https://discord.com/users/monicalawrenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-discord-fill text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
