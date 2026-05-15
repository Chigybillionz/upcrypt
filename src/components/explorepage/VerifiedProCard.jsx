export default function VerifiedProCard({ onNavigate }) {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white shadow-lg">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-4xl">🏆</span>
      </div>

      <h3 className="text-lg font-bold mb-2">Become a Verified Pro</h3>

      <p className="text-sm text-blue-50 mb-5 leading-relaxed">
        Unlock exclusive high-budget jobs and get prioritized in search results.
      </p>

      <button
        onClick={() => onNavigate?.("login")}
        className="w-full bg-white text-blue-600 font-bold py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm"
      >
        Upgrade Now
      </button>
    </div>
  );
}
