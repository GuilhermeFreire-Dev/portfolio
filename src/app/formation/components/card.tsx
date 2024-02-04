type Formation = {
  image: string;
  name: string;
  institute: string;
  start_at: string;
  end_at: string;
};

export default function Card({ formation }: { formation: Formation }) {
  return (
    <div className="flex border border-neutral-300 rounded-lg p-4 my-4">
      <div
        className="w-1/5 sm:w-20 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${formation.image})` }}
      ></div>
      <div className="w-4/5 mx-4">
        <h3 className="text-base sm:text-lg font-semibold">{formation.name}</h3>
        <p className="text-sm sm:text-base my-1">{formation.institute}</p>
        <p className="text-xs">{`${formation.start_at} - ${formation.end_at}`}</p>
      </div>
    </div>
  );
}
