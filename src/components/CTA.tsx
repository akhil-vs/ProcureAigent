
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="cta">
      <h2>Ready to Transform Your B2B Procurement?</h2>
      <p>Join thousands of businesses already using ProcureAgent to streamline their supply chain, reduce costs, and discover new opportunities.</p>
      <div className="hero-buttons">
        <Link to='/register' className="btn btn-outline">Schedule a Demo</Link>
        <Link to='/register' className="btn btn-primary">Start Free Trial</Link>
      </div>
    </section>
  );
}

export default CTA;