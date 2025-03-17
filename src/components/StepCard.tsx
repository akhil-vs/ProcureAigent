function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StepCard;