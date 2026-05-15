export default function ResourceIcon({ tone = "indigo", type = "document" }) {
  const tones = {
    indigo: "bg-indigo-100 text-indigo-600",
    blue: "bg-blue-100 text-blue-600",
    amber: "bg-orange-100 text-amber-700",
    red: "bg-red-50 text-red-600",
  };

  return (
    <span className={`flex h-14 w-14 items-center justify-center rounded-lg ${tones[tone]}`}>
      {type === "wallet" && (
        <span className="relative h-5 w-6 rounded-sm border-2 border-current">
          <span className="absolute right-1 top-1.5 h-2 w-2 rounded-full border-2 border-current" />
        </span>
      )}
      {type === "shield" && (
        <span className="h-6 w-5 rounded-b-xl rounded-t-sm border-2 border-current" />
      )}
      {type === "cash" && (
        <span className="relative h-5 w-7 border-2 border-current">
          <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-current" />
        </span>
      )}
      {type === "receipt" && (
        <span className="relative h-6 w-5 border-2 border-current">
          <span className="absolute left-1 top-1 h-0.5 w-2 bg-current" />
          <span className="absolute left-1 top-2.5 h-0.5 w-3 bg-current" />
          <span className="absolute left-1 top-4 h-0.5 w-2 bg-current" />
        </span>
      )}
      {type === "document" && (
        <span className="relative h-6 w-5 rounded-sm border-2 border-current">
          <span className="absolute left-1 top-2 h-0.5 w-2.5 bg-current" />
          <span className="absolute left-1 top-4 h-0.5 w-2 bg-current" />
        </span>
      )}
      {type === "cap" && (
        <span className="relative h-4 w-7 rotate-[-25deg] border-2 border-current">
          <span className="absolute left-2 top-3 h-3 w-3 rotate-[25deg] border-b-2 border-current" />
        </span>
      )}
      {type === "nodes" && (
        <span className="relative h-7 w-7">
          <span className="absolute left-0 top-0 h-2 w-2 rounded-full border-2 border-current" />
          <span className="absolute right-0 top-3 h-2 w-2 rounded-full border-2 border-current" />
          <span className="absolute bottom-0 left-1 h-2 w-2 rounded-full border-2 border-current" />
          <span className="absolute left-2 top-1 h-0.5 w-4 rotate-45 bg-current" />
          <span className="absolute left-2 top-5 h-0.5 w-4 -rotate-12 bg-current" />
        </span>
      )}
    </span>
  );
}
