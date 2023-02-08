import Image from "next/image";

const Info = [
  {
    label: "Location",
    text: "Bangalore",
  },
  {
    label: "Age",
    text: "25",
  },
  {
    label: "Nationality",
    text: "India",
  },
  {
    label: "Education",
    text: "Bachelor of Technology",
  },
  {
    label: "Employement",
    text: "Trisys IT Servicer Pvt. Ltd.",
  },
];

export const About = () => {
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
              <li>
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
