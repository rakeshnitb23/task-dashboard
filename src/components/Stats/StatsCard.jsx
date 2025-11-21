function StatsCard({ icon: Icon, label, value, helper }) {
  return (
    <div className="card stats-card">
      <div className="stats-icon">
        <Icon size={18} />
      </div>
      <div>
        <p className="eyebrow">{label}</p>
        <h3>{value}</h3>
        <p className="muted">{helper}</p>
      </div>
    </div>
  );
}

export default StatsCard;
