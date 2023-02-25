import { useRef } from "react";

const NavBar = ({ myRef }) => {
  const id = useRef();
  const options = [
    {
      key: 1,
      title: "About",
      location: "#about",
    },
    {
      key: 2,
      title: "Resume",
      location: "#resume",
    },
    {
      key: 3,
      title: "Portfolio",
      location: "#portfolio",
    },
    {
      key: 4,
      title: "Contact",
      location: "#contact",
    },
  ];

  return (
    <div className="navbar-conatiner flex p-5 list-none bg-gray-800 justify-center fixed w-screen z-50">
      {options.map((i) => (
        <a
          key={i.key}
          className="navbar-item text-gray-300 px-5 py-2 font-medium hover:text-white hover:bg-gray-700 rounded-md cursor-pointer"
          href={i?.location}
        >
          {i.title}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
