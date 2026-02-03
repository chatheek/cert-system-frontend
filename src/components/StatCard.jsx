const colorMap = {
  primary: 'text-[#7C3AED]',
  warning: 'text-[#F59E0B]',
  purple: 'text-[#7C3AED]',
  success: 'text-emerald-600',
  danger: 'text-rose-600',
};

const StatCard = ({ label, value, color = 'primary' }) => {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white px-6 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${colorMap[color] || colorMap.primary}`}>
        {value}
      </p>
    </div>
  );
};

export default StatCard;
