import toast, { Toaster } from "react-hot-toast";

const AddTouristSpot = () => {
  const handleSubmitSpot = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");

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
      email,

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

    fetch("http://localhost:5000/addedSection", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(addedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("You have successfully added ");
        }
      });
  };

  return (
    <div>
      <Toaster></Toaster>
      <form className="card-body" onSubmit={handleSubmitSpot}>
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
            type="text"
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning">Register</button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpot;
