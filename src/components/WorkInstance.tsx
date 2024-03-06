import improvingLogo from "../assets/improving.png";

const format = (theDate: Date) =>
  theDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

interface WorkInstanceProps {
  startDate: Date;
  endDate: Date;
  company: string;
  improving: boolean;
  imageName: string;
  children: any;
}

export const WorkInstance = ({
  startDate,
  endDate,
  company,
  improving,
  imageName,
  children,
}: WorkInstanceProps) => {
  const logo = "/src/assets/" + imageName;
  const imageSection = improving ? (
    <div className="flex flex-row">
      <img src={logo} />
      <img src={improvingLogo} />
    </div>
  ) : (
    <div>
      <img src={logo} />
    </div>
  );

  return (
    <>
      {imageSection}
      <div>
        <div className="">{company}</div>
        <div className="text-opacity-60">
          {format(startDate)} - {format(endDate)}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
