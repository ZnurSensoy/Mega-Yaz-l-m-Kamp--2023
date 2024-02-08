import Footer from "../Footer/Footer";
import Kop from "./KOP/Kop";
import Science from "./Science/Science";
import Spor from "./Spor/Spor";
import Traffic from "./Traffic/Traffic";
import "./Users.css";
const Users = () => {
  return (
    <div>
      <Kop />
      <Traffic />
      <Spor />
      <Science />
      <Footer />
    </div>
  );
};

export default Users;