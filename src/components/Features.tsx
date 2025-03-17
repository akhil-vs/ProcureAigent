/* eslint-disable no-undef */
import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featuresList = [
    {
      icon: "🔍",
      title: "AI-Powered Matching",
      description: "Our machine learning algorithms analyze your requirements and instantly connect you with the perfect suppliers for your specific industry needs."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Access pricing trends, demand forecasts, and supplier performance ratings to make data-driven procurement decisions."
    },
    {
      icon: "📝",
      title: "Intelligent RFQ Management",
      description: "Create and submit RFQs to multiple vetted suppliers with automated compliance checks and proposal tracking."
    },
    {
      icon: "🔄",
      title: "Supply Chain Optimization",
      description: "Track shipments, manage inventory, and predict delivery timelines with AI-driven supply chain tools."
    },
    {
      icon: "💬",
      title: "Dynamic Negotiation Assistant",
      description: "Our AI chatbot assists in negotiating pricing, lead times, and payment terms based on industry standards."
    },
    {
      icon: "🔐",
      title: "Compliance Verification",
      description: "Automatically verify supplier certifications for compliance with industry standards like ISO, FDA, and AS9100."
    }
  ];
  
  return (
    <section className="features" id="services">
      
      {featuresList.map((feature, index) => (
        <FeatureCard 
          key={index} 
          icon={feature.icon} 
          title={feature.title} 
          description={feature.description} 
        />
      ))}
    </section>
  );
}

export default Features;