export default function ExploreSidebar() {
  const categories = [
    { name: "Development", count: 1240, icon: "💻" },
    { name: "Design", count: 850, icon: "🎨" },
    { name: "Writing", count: 420, icon: "✍️" },
    { name: "Marketing", count: 310, icon: "📊" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 h-fit sticky top-4">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-2">
        Categories
      </h3>
      <div className="space-y-1">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
              index === 0
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="text-lg flex-shrink-0">{category.icon}</span>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-medium">{category.name}</p>
            </div>
            <span className="text-xs font-bold flex-shrink-0 ml-auto">
              {category.count.toLocaleString()}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
