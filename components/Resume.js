import Link from "next/link";
import {
  Download,
  JavascriptLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
} from "../lib/SvgIndex";
import CardTile from "./CardTile";

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
        description: [
          "Developed web-based chat-bot UI with 100% reusable components for future use using ReactJS to provide a seamless communication interface for users.",
          "Collaborated with product owners to finalize project plans using functional requirements.",
          "Leverage the WebSocket API to enable real-time communication between the client and the server to ensures that the chatbot can provide instant feedback to the user's input.",
          "Created non-technical and technical documents of operations and workflow to enable non-coding team to function with minimal interruption.",
        ],
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
          "Graduated in Applied Electronics and Instrumentation Engineering stream.",
      },
      {
        id: 2,
        heading: "Higher Secondary School",
        subheading: "DAV Public School",
        from: "2014",
        to: "2016",
      },
      {
        id: 3,
        heading: "Senior Secondary School",
        subheading: "DAV Public School",
        from: "2012",
        to: "2014",
      },
    ],
  },
  {
    key: 3,
    title: "SKILLS",
    section: [
      {
        id: 1,
        description: (
          <CardTile
            skill="React JS"
            child={<ReactLogo style={{ marginRight: "10px" }} />}
          />
        ),
      },
      {
        id: 2,
        description: (
          <CardTile
            skill="Next JS"
            child={<NextLogo style={{ marginRight: "10px" }} />}
          />
        ),
      },
      {
        id: 3,
        description: (
          <CardTile
            skill="React Native"
            child={<ReactLogo style={{ marginRight: "10px" }} />}
          />
        ),
      },
      {
        id: 4,
        description: (
          <CardTile
            skill="Javascript"
            child={<JavascriptLogo style={{ marginRight: "10px" }} />}
          />
        ),
      },
      {
        id: 5,
        description: <CardTile child={<NodeLogo />} />,
      },
    ],
  },
];

export const Resume = () => {
  // Work Exp
  return (
    <>
      <a href="/resume.pdf" target="_blank">
        <div className="resume-download" href="/resume.pdf" target="_blank">
          <div className="download-slider">
            <p>Download</p>
          </div>
          <i className="download-icon">
            <Download />
          </i>
        </div>
      </a>
      <div id="resume" className="resume-container">
        {data.map((i, n) => {
          return (
            <div className="resume-content" key={i.key}>
              <div className="resume-title">{i.title}</div>
              <div
                className={
                  i.title === "SKILLS"
                    ? "resume-subcontainer-skills"
                    : "resume-subcontainer"
                }
              >
                {i.section.map((j) => {
                  return (
                    <section
                      className={
                        i.title === "SKILLS" ? "" : "resume-subsection"
                      }
                      key={j.id}
                    >
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
                      <div className="resume-text">
                        {!j.description?.map
                          ? j.description
                          : j.description.map((k) => (
                              <div key={k.id}>
                                <li> {k} </li>
                              </div>
                            ))}
                      </div>
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

export default Resume;
