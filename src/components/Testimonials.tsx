import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonialsList = [
    {
      content: "ProcureAigent reduced our sourcing time by 67% and helped us discover suppliers we wouldn't have found through traditional channels. The AI recommendations have significantly improved our margins.",
      author: "John Daniels",
      title: "Procurement Director, AutoTech Industries",
      initials: "JD"
    },
    {
      content: "As a small supplier, ProcureAigent has been game-changing for our business. We've connected with major manufacturers that previously wouldn't have considered us, and our sales have grown 43% year-over-year.",
      author: "Sarah Martinez",
      title: "CEO, Precision Components Co.",
      initials: "SM"
    },
    {
      content: "The analytics and predictive tools have transformed our inventory management. We've reduced stockouts by 82% while decreasing carrying costs by nearly 30%. The platform paid for itself within the first quarter.",
      author: "Robert Kim",
      title: "Supply Chain Manager, MedTech Solutions",
      initials: "RK"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonialsList.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            content={testimonial.content} 
            author={testimonial.author} 
            title={testimonial.title} 
            initials={testimonial.initials} 
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;