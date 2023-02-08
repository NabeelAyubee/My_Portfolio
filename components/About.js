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
    <div className="about-container">
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
        <span>I am Front end developer</span>
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
