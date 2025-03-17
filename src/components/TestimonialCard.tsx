function TestimonialCard({ content, author, title, initials }: { content: string; author: string; title: string; initials: string }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-content">{content}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{initials}</div>
        <div className="author-info">
          <h4>{author}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;