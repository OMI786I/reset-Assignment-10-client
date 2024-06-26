import { useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>This is all tourist AllTouristSpot</div>;
};

export default AllTouristSpot;
