import Link from "next/link";
import {
  ArrowDown,
  Download,
  GitHubIcon,
  InstaIcon,
  LinkedinIcon,
  TwitterIcon,
  UpworkIcon,
} from "./svgindex";

const styles = {
  height: "50px",
  width: "60px",
};
const ProfileData = [
  {
    icon: <LinkedinIcon styles={styles} />,
    href: "https://www.linkedin.com/in/nabeel-ayubee-62aa431ab/",
  },
  {
    icon: <GitHubIcon styles={styles} />,
    href: "https://github.com/NabeelAyubee",
  },
  {
    icon: <TwitterIcon styles={styles} />,
    href: "https://twitter.com/AyubeeMd",
  },
  {
    icon: <UpworkIcon styles={styles} />,
    href: "https://www.upwork.com/freelancers/~0186355af7877edae2",
  },
  {
    icon: <InstaIcon styles={styles} />,
    href: "https://www.instagram.com/nabeel.ayubee/",
  },
];

export const Welcome = () => {
  return (
    <div className="cover-container relative">
      <div className="card-container">
        <h1 className="card-title">Hi! I am Md Nabeel Ayubee. </h1>
        <p className="card-text">
          I'm a India based <b>Front End Software Engineer</b>, currently
          working at CRM Domain, FSM Domain helping build a modern,
          mobile-first, responsive design with building 100% reusable
          components.
        </p>
        <br />
        <p className="card-sub-text">
          In my free time time, love to learn new skills, watch movies and
          cooking.
        </p>

        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {ProfileData.map((i) => (
            <a href={i.href}>{i.icon}</a>
          ))}
        </ul>
      </div>
      <div
        className="absolute"
        style={{
          bottom: "20px",
          left: "50%",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <ArrowDown styles={{ fill: "black", height: "30px", width: "30px" }} />
      </div>
    </div>
  );
};
