function AIFeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="ai-feature-card">
      <div className="ai-icon">{icon}</div>
      <div className="ai-feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AIFeatureCard;