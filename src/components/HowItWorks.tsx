import StepCard from "./StepCard";

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up as a buyer or supplier and complete your business profile with your industry, needs, and requirements."
    },
    {
      number: 2,
      title: "AI Matching",
      description: "Our AI analyzes your profile and connects you with ideal business partners based on compatibility and your specific requirements."
    },
    {
      number: 3,
      title: "Submit RFQs",
      description: "Create detailed requests for quotes using our intelligent templates and send them to multiple qualified suppliers."
    },
    {
      number: 4,
      title: "Review & Select",
      description: "Compare responses, negotiate terms with AI assistance, and select the best offer for your business needs."
    }
  ];

  return (
    <section className="how-it-works" id="pricing">
      <h2>How ProcureAgent Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <StepCard 
            key={index} 
            number={step.number} 
            title={step.title} 
            description={step.description} 
          />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;