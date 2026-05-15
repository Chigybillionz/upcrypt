export default function TrendingSkills() {
  const skills = [
    { name: "Soroban Contracts", change: "+24%" },
    { name: "Zero-Knowledge Proofs", change: "+18%" },
    { name: "Subgraphs (The Graph)", change: "+12%" },
    { name: "Solana Program Library", change: "+9%" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-lg">⚡</span>
        <h3 className="font-bold text-gray-900">Trending Skills</h3>
      </div>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2.5 hover:bg-gray-50 rounded transition-colors"
          >
            <p className="text-sm text-gray-700 font-medium">{skill.name}</p>
            <span className="text-xs font-bold text-green-600">
              {skill.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
