import data from "./Data";
import Ui from "./Ui";

const Mapping = () => {
  const hasil = data.map((dt) => {
    return <Ui data={dt} />;
  });

  return (
    <div class="container">
      <div class="row">{hasil}</div>
    </div>
  );
};

export default Mapping;
