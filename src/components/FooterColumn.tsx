import { Link } from "react-router-dom";

function FooterColumn({ title, links }: { title: string; links: { name: string; url: string }[] }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;