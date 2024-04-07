"use client";

export default function About() {
  const handleDownload = () => {
    const pdfUrl = "/Tigstu-resume.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <section
      id="about"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p class="mb-4">
          Experienced front-end-oriented full-stack developer with over 3+ years
          focused on React.js, HTML, CSS, and JavaScript. Skilled in ES5, ES6,
          TypeScript, and well-versed in developer tools such as Chrome
          Developer Tools, Postman, and debugging tools. Specialized in React.js
          and Vue.js development, CSS frameworks (Bootstrap,Tailwind CSS,
          Material UI ), hands-on experience with Node.js , Next.js, MongoDB and
          postgreSQL, Cloud Computing services (AWS), Unit testing with Jest,
          React Testing library and Collaboration using Git and GitHub. Utilized
          Visual Studio Code.
          <p class="mb-4">
            Familiar with Agile Scrum methodologies and extensively used
            collaboration tools like Trello, Slack, Jira/Confluence, and more.
            Demonstrates strong problem-solving skills, excellent communication,
            and a team-oriented approach.
          </p>
        </p>
      </div>

      <div className="pt-8">
        <div class="relative inline-flex  group">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <div
            title="Get quote now"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
            onClick={handleDownload}
          >
            Download my resume
          </div>
        </div>
      </div>
    </section>
  );
}
