function IndustryCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="industry-card">
      <h3 className="text-aigent">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default IndustryCard;