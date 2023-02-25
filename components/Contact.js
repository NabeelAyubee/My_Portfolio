import {
  ArrowDown,
  Download,
  GitHubIcon,
  InstaIcon,
  LinkedinIcon,
  TwitterIcon,
  UpworkIcon,
} from "../lib/SvgIndex";

const Contact = () => {
  const styles = {
    height: "50px",
    width: "60px",
  };
  const ProfileData = [
    {
      key: 1,
      icon: <LinkedinIcon styles={styles} />,
      href: "https://www.linkedin.com/in/nabeel-ayubee-62aa431ab/",
    },
    {
      key: 2,
      icon: <GitHubIcon styles={styles} />,
      href: "https://github.com/NabeelAyubee",
    },
    {
      key: 3,
      icon: <TwitterIcon styles={styles} />,
      href: "https://twitter.com/AyubeeMd",
    },
    {
      key: 4,
      icon: <UpworkIcon styles={styles} />,
      href: "https://www.upwork.com/freelancers/~0186355af7877edae2",
    },
    {
      key: 5,
      icon: <InstaIcon styles={styles} />,
      href: "https://www.instagram.com/nabeel.ayubee/",
    },
  ];

  return (
    <div id="contact" className="contact-container">
      <div className="contact-message"> Want to Contact ? Sure You can do </div>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {ProfileData.map((i) => (
            <a key={i.key} href={i.href}>
              {i.icon}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
