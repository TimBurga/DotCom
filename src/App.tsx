import "./App.css";
import { experiences } from "./assets/experiences.json";
import improvingLogo from "./assets/improving.png";

const format = (theDate: Date) =>
  theDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

function App() {
  return (
    <>
      {experiences.map((experience) => {
        const logo = "/src/assets/" + experience.imageName;
        const imageSection = experience.improving ? (
          <div className="flex flex-row">
            <img src={logo} />
            <img src={improvingLogo} />
          </div>
        ) : (
          <div>
            <img src={logo} />
          </div>
        );
        const start: Date = new Date(
          experience.startYear + "-" + experience.startMonth + "-1"
        );
        const end: Date = new Date(
          experience.endYear + "-" + experience.endMonth + "-1"
        );

        return (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            {imageSection}
            <div>
              <div className="">{experience.company}</div>
              <div className="text-opacity-20">
                {format(start)} - {format(end)}
              </div>
              <div>{experience.desc}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
