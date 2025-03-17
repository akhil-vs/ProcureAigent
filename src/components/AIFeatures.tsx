import AIFeatureCard from "./AIFeatureCard";

function AIFeatures() {
  const aiFeaturesList = [
    {
      icon: "🔮",
      title: "Predictive Sourcing",
      description: "Anticipates buyer needs based on historical data and market trends to suggest suppliers with available inventory during high-demand periods."
    },
    {
      icon: "📈",
      title: "Supplier Performance Monitoring",
      description: "Tracks on-time delivery rates, quality metrics, and responsiveness with AI-based risk flagging and rating systems."
    },
    {
      icon: "🔄",
      title: "Automated Inventory Forecasting",
      description: "Uses machine learning to predict optimal inventory levels based on seasonal demand, lead times, and market conditions."
    },
    {
      icon: "🧠",
      title: "Intelligent Document Processing",
      description: "Extract and analyze key information from contracts, invoices, and technical specifications using natural language processing."
    },
    {
      icon: "🔍",
      title: "Anomaly Detection",
      description: "Identifies unusual patterns in pricing, quality, or delivery times to flag potential issues before they impact your business."
    },
    {
      icon: "💡",
      title: "Smart Recommendations",
      description: "Suggests alternative materials, suppliers, and logistics options to optimize costs and reduce environmental impact."
    }
  ];

  return (
    <section className="ai-features" id='features'>
      <h2>Advanced AI Features</h2>
      <div className="ai-feature-grid">
        {aiFeaturesList.map((feature, index) => (
          <AIFeatureCard 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </section>
  );
}

export default AIFeatures;