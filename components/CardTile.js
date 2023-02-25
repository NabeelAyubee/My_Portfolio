import Image from "next/image";

const CardTile = ({ skill, child }) => {
  return (
    <div className="card-tile">
      {child}
      <div className="tile-title"> {skill} </div>
    </div>
  );
};

export default CardTile;
