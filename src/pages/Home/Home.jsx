import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Home = () => {
  console.log(useContext(AuthContext));

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-10">I am from Home</h2>
    </div>
  );
};

export default Home;
