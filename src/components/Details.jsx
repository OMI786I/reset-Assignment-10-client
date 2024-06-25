import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const detail = details && details.find((det) => det._id === id);

  console.log(detail);

  return <div>This is details</div>;
};

export default Details;
