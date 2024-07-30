const Information = ({ name, country, status, budget, revenue }) => {
  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };

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
          <p className="text-[1.2vw] font-bold">Budget</p>
          <p className="text-[1vw]">
            $ {budget ? formatNumber(budget) : "N/A"}
          </p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Status</p>
          <p className="text-[1vw]">
            $ {revenue ? formatNumber(revenue) : "N/A"}
          </p>
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
