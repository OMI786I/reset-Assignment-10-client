import { useLoaderData, useParams } from "react-router-dom";

const DetailsForAddSpot = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const detail = details && details.find((det) => det._id === id);

  console.log(detail);

  return (
    <div>
      <div className="flex  md:flex-row flex-col gap-4 mt-10">
        <img
          src={detail.photo}
          className=" md:max-w-[70%]  md:min-w-80 rounded-xl"
        ></img>

        <div>
          <h1 className="md:text-3xl text-2xl">{detail.spotName}</h1>
          <p className="text-gray-700 mt-3"> {detail.countryName}</p>

          <p className="mt-3">
            <span className="font-bold ">description: </span>{" "}
            {detail.description}
          </p>
          <p className="mt-3">
            <span className="font-bold ">Location: </span> {detail.location}
          </p>

          <div className="border-t-2 mt-4 pt-6 ">
            <div className="flex gap-16 ">
              <span className="text-gray-700:">Price:</span>{" "}
              <span className="font-bold">{detail.cost} usd </span>
            </div>
            <div className="flex gap-16 ">
              <span className="text-gray-700:">Season:</span>{" "}
              <span className="font-bold">{detail.season}</span>
            </div>
            <div className="flex gap-16">
              <span className="text-gray-700:">Time:</span>{" "}
              <span className="font-bold">{detail.time}</span>
            </div>
            <div className="flex gap-16 ">
              <span className="text-gray-700:">Visitors:</span>{" "}
              <span className="font-bold">{detail.visitor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsForAddSpot;
