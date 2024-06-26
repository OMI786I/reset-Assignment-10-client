const Newsletter = () => {
  return (
    <div className="flex justify-center my-10 bg-yellow-500 p-5">
      <div>
        <h1 className="text-2xl">
          <span className="font-bold text-3xl">Subscribe</span> to Newsletter
        </h1>
        <input
          type="text"
          placeholder="email here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn mt-3"> Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
