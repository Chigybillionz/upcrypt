export default function JobCard({ job, onNavigate }) {
  return (
    <div className="bg-white rounded-lg p-5 border border-gray-100 hover:shadow-md transition-all hover:border-gray-200">
      {/* Header with Badge and Budget */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 uppercase">
            {job.ecosystem}
          </span>
          <p className="text-xs text-gray-500">Posted {job.posted}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 font-medium">BUDGET</p>
          <p className="text-xl font-bold text-blue-600">{job.budget}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
        {job.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {job.description}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        <span className="text-yellow-400 text-sm">★</span>
        <span className="text-sm font-semibold text-gray-700">
          {job.rating} ({job.reviews} reviews)
        </span>
      </div>

      {/* Milestones & Protection */}
      <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <span>📋</span>
          <span>{job.milestones}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🔐</span>
          <span>{job.protection}</span>
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => onNavigate?.("login")}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
      >
        Apply Now
      </button>
    </div>
  );
}
