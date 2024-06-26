import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const data = useLoaderData();
  console.log(data);
  const filtered = data && data.filter((u) => u.email === user.email);
  console.log(filtered);
  return <div>This is my list</div>;
};

export default MyList;
