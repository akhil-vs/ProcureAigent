
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="cta">
      <h2>Ready to Transform Your B2B Procurement?</h2>
      <p>Join thousands of businesses already using ProcureAigent to streamline their supply chain, reduce costs, and discover new opportunities.</p>
      <div className="hero-buttons">
        <Link to='/register' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-base font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Schedule a Demo</Link>
        <Link to='/register' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-base font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Free Trial</Link>
      </div>
    </section>
  );
}

export default CTA;