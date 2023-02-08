import { useRef } from "react";

export const NavBar = () => {
  const id = useRef();
  const options = [
    {
      title: "About",
    },
    {
      title: "Resume",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Contact",
    },
  ];
  
  return (
    <div
      ref={id}
      className="navbar-conatiner flex p-5 list-none bg-gray-800 justify-center fixed w-screen z-50"
    >
      {options.map((i) => (
        <li className="navbar-item text-gray-300 px-5 py-2 font-medium hover:text-white hover:bg-gray-700 rounded-md cursor-pointer">
          {i.title}
        </li>
      ))}
    </div>
  );
};
