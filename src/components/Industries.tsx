import IndustryCard from "./IndustryCard";

function Industries() {
  const industriesList = [
    {
      title: "Manufacturing",
      description: "Raw materials, components, machinery, and equipment for streamlined production processes."
    },
    {
      title: "Automotive",
      description: "OEM parts, batteries, assembly components, and specialized automotive supplies."
    },
    {
      title: "Aerospace",
      description: "Precision-machined parts, avionics, composites, and specialized aerospace materials."
    },
    {
      title: "Ship Building",
      description: "Structural materials, propulsion systems, electronics, and marine-grade components."
    },
    {
      title: "Machinery Manufacturing",
      description: "Industrial equipment, precision tools, control systems, and automation solutions."
    },
    {
      title: "Medical Equipment",
      description: "Devices, surgical tools, diagnostic equipment, and healthcare technology."
    },
    {
      title: "Electronics",
      description: "Semiconductors, PCBs, components, and advanced electronic manufacturing supplies."
    }
  ];

  return (
    <section className="industries" id='industries'>
      <h2>Industries We Serve</h2>
      <div className="industry-grid">
        {industriesList.map((industry, index) => (
          <IndustryCard 
            key={index} 
            title={industry.title} 
            description={industry.description} 
          />
        ))}
      </div>
    </section>
  );
}

export default Industries;