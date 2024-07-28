const Information = ({ name, country, status }) => {
  return (
    <div className="ml-[1.8vw]">
      <p className="text-[3vw] font-bold sm:text-[2vw]">Information</p>
      <div className="mt-[1vw] flex flex-col gap-[1.5vw]">
        <div>
          <p className="text-[1.2vw] font-bold">Original Name</p>
          <p className="text-[1vw]">{name}</p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Original Counntry</p>
          <p className="text-[1vw]">
            {Array.isArray(country)
              ? country.map((c) => c).join(", ")
              : country}
          </p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Status</p>
          <p className="text-[1vw]">{status}</p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Network</p>
          <p className="text-[1vw]">HBO</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
