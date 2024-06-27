import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristSpot = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const countryName = form.get("countryName");
    const location = form.get("location");
    const cost = form.get("cost");
    const description = form.get("description");
    const season = form.get("season");
    const time = form.get("time");
    const visitor = form.get("visitor");
    const spotName = form.get("spotName");
    const addedData = {
      name,
      photo,
      countryName,
      location,
      description,
      cost,
      season,
      time,
      visitor,
      spotName,
    };
    console.log(addedData);

    fetch(
      `https://server-side-sand-three.vercel.app/addedSection/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `Updated Spot`,
            text: `updated successfully`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl underline">
        {" "}
        You can update tourist spot here
      </h1>
      <form className="card-body" onSubmit={handleUpdateSpot}>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Name </span>
          </label>
          <input
            name="name"
            type="text"
            placeholder=" Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tourist Spot Name </span>
          </label>
          <input
            name="spotName"
            type="text"
            placeholder=" Spot Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Country Name</span>
          </label>
          <input
            name="countryName"
            type="text"
            placeholder="Country Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Location</span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> description</span>
          </label>
          <input
            name="description"
            type="text"
            placeholder="description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Cost</span>
          </label>
          <input
            name="cost"
            type="number"
            placeholder="cost"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> seasonality</span>
          </label>
          <input
            name="season"
            type="text"
            placeholder="season"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> travel_time</span>
          </label>
          <input
            name="time"
            type="text"
            placeholder="travel time"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Visitors Per Year</span>
          </label>
          <input
            name="visitor"
            type="text"
            placeholder="visitor number"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="image"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning">update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTouristSpot;
