import { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const detail = details && details.find((det) => det._id === id);

  console.log(detail);

  return (
    <div>
      {details ? (
        <div className="flex  md:flex-row flex-col gap-4 mt-10">
          <Toaster></Toaster>
          <img
            src={detail.image}
            className=" md:max-w-[70%]  md:min-w-80 rounded-xl"
          ></img>

          <div>
            <h1 className="md:text-3xl text-2xl">
              {detail.tourists_spot_name}
            </h1>
            <p className="text-gray-700 mt-3"> {detail.country_Name}</p>

            <p className="mt-3">
              <span className="font-bold ">description: </span>{" "}
              {detail.short_description}
            </p>
            <p className="mt-3">
              <span className="font-bold ">Location: </span> {detail.location}
            </p>

            <div className="border-t-2 mt-4 pt-6 ">
              <div className="flex gap-16 ">
                <span className="text-gray-700:">Price:</span>{" "}
                <span className="font-bold">{detail.average_cost}</span>
              </div>
              <div className="flex gap-16 ">
                <span className="text-gray-700:">Season:</span>{" "}
                <span className="font-bold">{detail.seasonality}</span>
              </div>
              <div className="flex gap-16">
                <span className="text-gray-700:">Time:</span>{" "}
                <span className="font-bold">{detail.travel_time}</span>
              </div>
              <div className="flex gap-16 ">
                <span className="text-gray-700:">Visitors:</span>{" "}
                <span className="font-bold">{detail.totalVisitorsPerYear}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      )}
    </div>
  );
};

export default Details;
