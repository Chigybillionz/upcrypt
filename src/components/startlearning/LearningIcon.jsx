export default function LearningIcon({ type = "rocket", tone = "indigo" }) {
  const tones = {
    indigo: "bg-indigo-100 text-indigo-600",
    blue: "bg-blue-100 text-blue-600",
    peach: "bg-orange-100 text-orange-700",
    white: "bg-white text-indigo-600",
  };

  return (
    <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${tones[tone]}`}>
      {type === "rocket" && (
        <span className="relative h-6 w-4 -rotate-45 rounded-t-full border-2 border-current">
          <span className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full border border-current" />
          <span className="absolute -bottom-2 left-0 h-2 w-0.5 rotate-45 bg-current" />
          <span className="absolute -bottom-1 right-0 h-2 w-0.5 -rotate-45 bg-current" />
        </span>
      )}
      {type === "briefcase" && (
        <span className="relative h-5 w-6 rounded-sm border-2 border-current">
          <span className="absolute -top-2 left-2 h-2 w-2 rounded-t border-2 border-current border-b-0" />
        </span>
      )}
      {type === "users" && (
        <span className="relative h-6 w-7">
          <span className="absolute left-2 top-0 h-2.5 w-2.5 rounded-full border-2 border-current" />
          <span className="absolute bottom-0 left-1 h-3 w-5 rounded-t-full border-2 border-current" />
          <span className="absolute right-0 top-2 h-2 w-2 rounded-full border-2 border-current" />
        </span>
      )}
      {type === "wallet" && (
        <span className="relative h-5 w-6 rounded-sm border-2 border-current">
          <span className="absolute right-1 top-1.5 h-2 w-2 rounded-full border-2 border-current" />
        </span>
      )}
      {type === "shield" && (
        <span className="h-6 w-5 rounded-b-xl rounded-t-sm border-2 border-current" />
      )}
      {type === "coin" && (
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-current text-xs font-bold">
          S
        </span>
      )}
      {type === "gavel" && (
        <span className="relative h-6 w-6">
          <span className="absolute left-1 top-1 h-2 w-5 -rotate-[25deg] rounded-sm border-2 border-current" />
          <span className="absolute bottom-0 left-3 h-5 w-1 rotate-45 bg-current" />
        </span>
      )}
    </span>
  );
}
