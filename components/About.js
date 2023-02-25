import Image from "next/image";

const Info = [
  {
    id: 1,
    label: "Location",
    text: "Bangalore",
  },
  {
    id: 2,
    label: "Age",
    text: "25",
  },
  {
    id: 3,
    label: "Nationality",
    text: "India",
  },
  {
    id: 4,
    label: "Education",
    text: "Bachelor of Technology",
  },
  {
    id: 5,
    label: "Employement",
    text: "Trisys IT Servicer Pvt. Ltd.",
  },
];

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="profile-container">
        <Image
          src="/profile_pic.jpeg"
          alt="Nabeel Profile"
          width="200"
          height="200"
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className="about-section">
        <h1>About Me</h1>
        <span>
          Hello and welcome to my React JS frontend developer portfolio! I am a
          highly skilled and experienced React JS developer with 2 years of
          experience in creating user-friendly and engaging web applications. My
          passion for coding and my attention to detail has helped me to excel
          in the field of web development.
          <br />
          <br />
          Throughout my career, I have worked on a wide variety of projects
          ranging from small-scale web applications to large-scale enterprise
          systems. My expertise lies in developing responsive and dynamic user
          interfaces, implementing complex business logic, and integrating with
          backend APIs to create seamless user experiences. I am well-versed in
          using a range of tools and technologies such as Redux, React Router,
          and Webpack to build scalable and maintainable React applications. I
          am also experienced in using testing frameworks such as Jest and
          Enzyme to ensure the quality of my code. In this portfolio, you will
          find a selection of my work which showcases my skills and expertise as
          a React JS developer.
          <br />
          <br />I hope that you will find my projects to be engaging and
          informative, and I look forward to the opportunity to discuss how I
          can contribute to your team.
        </span>
        <ul className="list-section">
          {Info.map((i) => {
            return (
              <li key={i.key}>
                <label>{i.label} :</label>
                <span> {i.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
