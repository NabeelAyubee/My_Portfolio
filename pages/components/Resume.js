import { CardTile } from "./CardTile";

const data = [
  {
    key: 1,
    title: "WORK",
    section: [
      {
        id: 1,
        heading: "Software Engineer",
        subheading: "Trisys IT services Pvt Ltd",
        from: "2021",
        to: "Present",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting\
              industry. Lorem Ipsum has been the industry's standard dummy text\
              ever since the 1500s, when an unknown printer took a galley of\
              type and scrambled it to make a type specimen book. It has\
              survived not only five centuries, but also the leap into\
              electronic typesetting, remaining essentially unchanged. It was\
              popularised in the 1960s with the release of Letraset sheets\
              containing Lorem Ipsum passages, and more recently with desktop\
              publishing software like Aldus PageMaker including versions of\
              Lorem Ipsum.",
      },
    ],
  },
  {
    key: 2,
    title: "EDUCATION",
    section: [
      {
        id: 1,
        heading: "Bachelor of Technology",
        subheading: "Haldia Institute of Technology, Haldia",
        from: "2017",
        to: "2021",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting\
              industry. Lorem Ipsum has been the industry's standard dummy text\
              ever since the 1500s, when an unknown printer took a galley of\
              type and scrambled it to make a type specimen book. It has\
              survived not only five centuries, but also the leap into\
              electronic typesetting, remaining essentially unchanged. It was\
              popularised in the 1960s with the release of Letraset sheets\
              containing Lorem Ipsum passages, and more recently with desktop\
              publishing software like Aldus PageMaker including versions of\
              Lorem Ipsum.",
      },
      {
        id: 2,
        heading: "Higher Secondary School",
        subheading: "DAV Public School",
        from: "2014",
        to: "2016",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting\
              industry. Lorem Ipsum has been the industry's standard dummy text\
              ever since the 1500s, when an unknown printer took a galley of\
              type and scrambled it to make a type specimen book. It has\
              survived not only five centuries, but also the leap into\
              electronic typesetting, remaining essentially unchanged. It was\
              popularised in the 1960s with the release of Letraset sheets\
              containing Lorem Ipsum passages, and more recently with desktop\
              publishing software like Aldus PageMaker including versions of\
              Lorem Ipsum.",
      },
      {
        id: 3,
        heading: "Senior Secondary School",
        subheading: "DAV Public School",
        from: "2012",
        to: "2014",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting\
              industry. Lorem Ipsum has been the industry's standard dummy text\
              ever since the 1500s, when an unknown printer took a galley of\
              type and scrambled it to make a type specimen book. It has\
              survived not only five centuries, but also the leap into\
              electronic typesetting, remaining essentially unchanged. It was\
              popularised in the 1960s with the release of Letraset sheets\
              containing Lorem Ipsum passages, and more recently with desktop\
              publishing software like Aldus PageMaker including versions of\
              Lorem Ipsum.",
      },
    ],
  },
  {
    key: 3,
    title: "SKILLS",
    section: [
      {
        id: 1,
        description: <CardTile />,
      },
    ],
  },
];

export const Resume = () => {
  // Work Exp
  return (
    <>
      <div className="resume-container">
        {data.map((i, n) => {
          return (
            <div className="resume-content" key={i.key}>
              <div className="resume-title">{i.title}</div>
              <div className="resume-subcontainer">
                {i.section.map((j) => {
                  return (
                    <section key={j.id}>
                      {j?.heading && (
                        <h1 className="resume-heading"> {j.heading} </h1>
                      )}
                      {j?.subheading && (
                        <div className="resume-subheading">
                          <span>{j.subheading}</span>
                          <span>
                            {" "}
                            <b> • </b>{" "}
                          </span>
                          <span>
                            {" "}
                            {j.from} - {j.to}{" "}
                          </span>
                        </div>
                      )}
                      <div className="resume-text">{j.description}</div>
                    </section>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
