export default function DecorativeTicket({ position }) {
  return (
    <div
      className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${
        position === "left" ? "left-8 -rotate-12" : "right-8 rotate-12"
      }`}
    >
      <div className="bg-white rounded-2xl p-4 shadow-xl transform transition-transform hover:rotate-0 duration-300">
        <div className="w-24 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl mb-1">💼</div>
            <div className="text-xs font-bold text-indigo-600">Escrow</div>
            <div className="text-xs text-indigo-500">Milestone</div>
          </div>
        </div>
      </div>
    </div>
  );
}
