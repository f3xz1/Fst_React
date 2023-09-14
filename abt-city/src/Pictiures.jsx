import baku1 from "./Baku1.jpg";
import baku2 from "./Baku2.jpg";

function Pictures() {
  return (
    <div className="PicturesConteiner">
      <img src={baku1} alt="baku1" />
      <img src={baku2} alt="baku2" />
    </div>
  );
}

export default Pictures;
