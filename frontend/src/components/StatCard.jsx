// StatCard.jsx
const StatCard = ({ title, value, color }) => {
  return (
    <div
      className={`
        ${color}
        rounded-2xl p-6 text-white
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
      `}
    >
      <h3 className="text-sm uppercase tracking-wide opacity-90">
        {title}
      </h3>
      <p className="text-4xl font-extrabold mt-2">
        {value}
      </p>
    </div>
  );
};

export default StatCard;
