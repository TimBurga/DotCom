import "./App.css";
import { experiences } from "./assets/experiences.json";
import improvingLogo from "/logos/improving.png";

const format = (theDate: Date) =>
  theDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

function App() {
  return (
    <>
      <header
        className="
            flex
            row-gap-5
            flex-row flex-wrap
            items-center
            mb-5
            md:mb-2
            border-b-2 border-opacity-50 border-gray-400
          "
      >
        <div className="initials-container mr-5 text-base leading-none pb-3 pt-3 text-white bg-blue-800 font-medium px-3">
          <div className="initial text-center text-3xl font-bold pb-1">T</div>
          <div className="initial text-center text-3xl font-bold initial">
            B
          </div>
        </div>
        <h1 className="print:text-6xl lg:text-6xl md:text-5xl mr-auto text-3xl font-semibold text-gray-750 pb-px">
          Tim Burga
        </h1>

        <h2
          id="industry-title"
          className="print:text-3xl text-blue-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px"
        >
          <code
            className="print:text-3xl text-blue-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px"
            role="heading"
            aria-label="Full Stack Developer"
          >
            Senior Full Stack Developer
          </code>
        </h2>
      </header>

      <section className="mb-10 first:mt-0" id="contact">
        <ul className="print:flex-row flex flex-wrap flex-col sm:flex-row justify-between gap-2 list-inside pr-7">
          <li className="mt-1.5 text-gray-700 text-md">
            <a
              href="mailto:timburga@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-envelope mx-1 text-blue-900"></i>
              timburga@gmail.com
            </a>
          </li>

          <li className="mt-1.5  text-gray-700 text-md">
            <a href="https://www.timburga.com">
              <i className="fa fa-globe mx-1 text-blue-900"></i>
              www.timburga.com
            </a>
          </li>

          <li className="mt-1.5  text-gray-700 text-md">
            <a
              href="https://www.linkedin.com/in/timburga/"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mx-1 text-blue-900"></i>
              linkedin.com/timburga
              <span
                className="
                    inline-block
                    text-gray-550
                    print:text-black
                    font-normal
                    group-hover:text-gray-700
                    transition
                    duration-100
                    ease-in
                  "
              >
                ↗
              </span>
            </a>
          </li>

          <li className="mt-1.5 text-gray-700 text-md">
            <a
              href="https://www.github.com/TimBurga"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mx-1 text-blue-900"></i>
              github.com/TimBurga
              <span
                className="
                    inline-block
                    text-gray-550
                    print:text-black
                    font-normal
                    group-hover:text-gray-700
                    transition
                    duration-100
                    ease-in
                  "
              >
                ↗
              </span>
            </a>
          </li>
        </ul>
      </section>

      <div className="grid grid-cols-3 gap-10">
        <section className="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0">
          <section className="mt-8 first:mt-0" id="profile">
            <h2 className="mb-2 font-bold tracking-widest text-sm-2 text-blue-700 ">
              OVERVIEW
            </h2>

            <section className="mb-0 grid grid-cols-1 ">
              <p className="mt-2.1 ml-1.5 text-sm text-gray-700 ">
                "Tim is a highly experienced senior-level developer with strong
                OO design skills in C#/.NET. He possesses proven ability to
                design and build frameworks and infrastructure components for
                business-critical systems. He demonstrates personal standards of
                productivity and quality that provide a benchmark for others to
                emulate."
              </p>
            </section>
          </section>

          <section className="col-span-3 mt-6 first:mt-0" id="experience">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-blue-700">
              EXPERIENCE
            </h2>

            {experiences.map((experience) => {
              const start: Date = new Date(
                experience.startYear + "-" + experience.startMonth + "-1"
              );
              const end: Date = experience.endYear ? new Date(
                experience.endYear + "-" + experience.endMonth + "-1" : null
              );

              const logo = "/logos/" + experience.imageName;

              const remoteLabel = experience.remote ? (
                <li className="px-1 my-2 text-xs text-center text-gray-750 bg-gray-200">
                  Remote
                </li>
              ) : (
                <></>
              );

              const contractLabel = experience.contract ? (
                <li className="px-1 text-xs text-center text-gray-750 bg-gray-200">
                  Contract
                </li>
              ) : (
                <></>
              );

              const improving = experience.improving ? (
                <div className="flex justify-center">
                  <img src={improvingLogo} width="50" />
                </div>
              ) : (
                <></>
              );

              return (
                <section className="my-6 border-b-2">
                  <div className="flex flex-col sm:flex-row justify-center">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center">
                        <img src={logo} width="110" />
                      </div>
                      <div className="text-center flex-grow-0 text-sm text-gray-700 mt-2">
                        {format(start)} –
                      </div>
                      <div className="text-center flex-grow-0 text-sm text-gray-700 mb-2">
                        {if (end) {format(end)}}
                      </div>
                      {improving}
                      <ul className="flex flex-row justify-center">
                        {remoteLabel}
                        {contractLabel}
                      </ul>
                    </div>

                    <div className="flex flex-col mb-4 mx-2">
                      <header className="font-bold text-gray-700">
                        {experience.title}
                      </header>
                      <p className="text-sm text-gray-700 ">
                        {experience.desc}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section className="print:col-span-1 col-span-3 md:col-span-1">
          <section className="col-span-1 mt-8 first:mt-0" id="skills">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-blue-700">
              SKILLS
            </h2>

            <section className="mb-4">
              <header>
                <h3 className="text-lg font-semibold text-gray-700">
                  Back End
                </h3>
              </header>
              <div className="my-2">
                <ul className="flex flex-wrap gap-1">
                  {[
                    "C#",
                    ".Net Core",
                    "ASP.NET",
                    "Entity Framework",
                    "SQL Server",
                    "RabbitMQ",
                    "REST APIs",
                  ]
                    .sort()
                    .map((skill) => {
                      return (
                        <li className="px-1 text-xs text-gray-750 bg-gray-200">
                          {skill}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </section>

            <section className="mb-4">
              <header>
                <h3 className="text-lg font-semibold text-gray-700">
                  Front End
                </h3>
              </header>
              <div className="my-2">
                <ul className="flex flex-wrap gap-1">
                  {[
                    "React",
                    "Angular",
                    "Vue",
                    "TypeScript",
                    "Javascript",
                    "Bootstrap",
                  ]
                    .sort()
                    .map((skill) => {
                      return (
                        <li className="px-1 text-xs text-gray-750 bg-gray-200">
                          {skill}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </section>

            <section className="mb-4">
              <header>
                <h3 className="text-lg font-semibold text-gray-700">
                  Ops/Process
                </h3>
              </header>
              <div className="my-2">
                <ul className="flex flex-wrap gap-1">
                  {[
                    "Docker",
                    "Microservices",
                    "Git",
                    "Agile",
                    "Scrum",
                    "Kanban",
                  ]
                    .sort()
                    .map((skill) => {
                      return (
                        <li className="px-1 text-xs text-gray-750 bg-gray-200">
                          {skill}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </section>

            <section className="mb-4">
              <header>
                <h3 className="text-lg font-semibold text-gray-700">
                  Methodology
                </h3>
              </header>
              <div className="my-2">
                <ul className="flex flex-wrap gap-1">
                  {["OOD", "OOP", "SOLID", "TDD"].sort().map((skill) => {
                    return (
                      <li className="px-1 text-xs text-gray-750 bg-gray-200">
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </section>
          <section className="col-span-3 mt-6 first:mt-0" id="certifications">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-blue-700">
              CERTIFICATIONS
            </h2>

            <section className="mb-4.5">
              <ul id="work-description-bullets" className="">
                <li className="mt-2.1 ml-1.5 text-sm text-gray-700">
                  <span className="-ml-2 select-none text-gray-600">›</span>
                  Microsoft Certified Solutions Developer (2013)
                </li>
              </ul>
            </section>
          </section>

          <section className="col-span-3 mt-8 first:mt-0" id="education">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-blue-700">
              EDUCATION
            </h2>

            <section className="mb-4.5">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 ">
                  Louisiana Tech University
                </h3>
                <p className=" text-sm text-gray-650">Ruston, LA</p>
              </header>
              <p className="mt-2.1 text-sm text-gray-800 ">
                Bachelor’s of Science in Computer Information Systems
              </p>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
