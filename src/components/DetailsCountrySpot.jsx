import { useLoaderData } from "react-router-dom";

const DetailsCountrySpot = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      {data ? (
        <div className="flex  md:flex-row flex-col gap-4 mt-10">
          <img
            src={data.image}
            className=" md:max-w-[70%]  md:min-w-80 rounded-xl"
          ></img>

          <div>
            <h1 className="md:text-3xl text-2xl">{data.tourists_spot_name}</h1>
            <p className="text-gray-700 mt-3"> {data.country_Name}</p>

            <p className="mt-3">
              <span className="font-bold ">description: </span>{" "}
              {data.short_description}
            </p>
            <p className="mt-3">
              <span className="font-bold ">Location: </span> {data.location}
            </p>

            <div className="border-t-2 mt-4 pt-6 ">
              <div className="flex gap-16 ">
                <span className="text-gray-700:">Price:</span>{" "}
                <span className="font-bold">{data.average_cost}</span>
              </div>
              <div className="flex gap-16 ">
                <span className="text-gray-700:">Season:</span>{" "}
                <span className="font-bold">{data.seasonality}</span>
              </div>
              <div className="flex gap-16">
                <span className="text-gray-700:">Time:</span>{" "}
                <span className="font-bold">{data.travel_time}</span>
              </div>
              <div className="flex gap-16 ">
                <span className="text-gray-700:">Visitors:</span>{" "}
                <span className="font-bold">{data.totalVisitorsPerYear}</span>
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

export default DetailsCountrySpot;
