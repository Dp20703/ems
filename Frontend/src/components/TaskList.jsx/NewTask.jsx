const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full bg-blue-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm px-3 py-1 rounded bg-red-600">
          {data?.Category}
        </h3>
        <h4 className="text-sm">{data?.Date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data?.Title}</h2>
      <p className="mt-2 text-sm">{data?.Description}</p>
      <div className="mt-5">
        <button className="rounded bg-zinc-900 py-2 px-2 text-sm">
          Accepte Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
