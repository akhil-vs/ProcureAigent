import React from "react";

const SecutiyPolicy = () => {
  return (
    <div className="policies container mx-auto p-4 md:px-32">
      <h1 className="text-xl text-center font-bold">ProcureAigent Security Policy</h1>
      Effective Date: 26/03/2025<br/>
      Last Updated: 26/03/2025
      <h3 className="font-bold">Introduction</h3>
      <p>At PROAINCE, the UK-based developer of the AI-powered B2B e-commerce platform ProcureAigent, we prioritize the security of your data and transactions. This Security Policy outlines the measures we implement to protect the confidentiality, integrity, and availability of the platform and its users' information. </p>
      <ul className="list-decimal list-inside space-y-2">
        <li>
          <span className="font-bold">Key Security Principles</span>
          <p className="pl-6 space-y-1 ">We are committed to:</p>
          <ul  className="list-decimal list-inside space-y-2">
            <li className="pl-6 space-y-1"><span className="font-bold">Confidentiality: </span>Ensuring that personal and business data is only accessible to authorized parties.</li>
            <li className="pl-6 space-y-1"><span className="font-bold">Integrity: </span>Protecting data from unauthorized modifications or deletions.</li>
            <li className="pl-6 space-y-1"><span className="font-bold">Availability: </span>Ensuring the platform is operational and accessible when needed.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Security Features</span>
          <ul  className="pl-6 space-y-1 [counter-reset:sublist]">
            <li className="before:content-['2.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
              <span className="font-bold">Data Encryption </span>
              <ul  className="list-disc list-inside space-y-2">
                <li  className="pl-6 space-y-1">
                  All data transmitted between users and the platform is secured using <span className="font-bold">TLS (Transport Layer Security)</span> encryption.
                </li>
                <li  className="pl-6 space-y-1">
                  Sensitive data stored in our systems is encrypted using industry-standard encryption algorithms.
                </li>
              </ul>
            </li>
            <li className="before:content-['2.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
              <span className="font-bold">Secure Authentication</span>
              <ul  className="list-disc list-inside space-y-2">
                <li  className="pl-6 space-y-1">
                  We employ robust authentication mechanisms, including:
                  <ul className="list-disc list-inside space-y-2">
                    <li  className="pl-6 space-y-1">Password complexity requirements.</li>
                    <li  className="pl-6 space-y-1">Multi-factor authentication (MFA) for enhanced security.</li>
                  </ul>
                </li>
                <li  className="pl-6 space-y-1">
                  User credentials are hashed and salted before storage to prevent unauthorized access.
                </li>
              </ul>
            </li>
            <li className="before:content-['2.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
                <span className="font-bold">Role-Based Access Control (RBAC)</span>
                <ul  className="list-disc list-inside space-y-2">
                  <li  className="pl-6 space-y-1">Access to platform resources is restricted based on roles (e.g., manufacturer, supplier, buyer) to minimize exposure to sensitive information.</li>
                </ul>
            </li>
            <li className="before:content-['2.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
                <span className="font-bold">Regular Monitoring and Auditing</span>
                <ul  className="list-disc list-inside space-y-2">
                  <li  className="pl-6 space-y-1">Continuous monitoring of system activities to detect and respond to anomalies or unauthorized activities.</li>
                  <li  className="pl-6 space-y-1">Regular security audits and penetration testing to identify and address vulnerabilities.</li>
                </ul>
            </li>
            <li className="before:content-['2.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
                <span className="font-bold">Secure Payments</span>
                <ul  className="list-disc list-inside space-y-2">
                  <li  className="pl-6 space-y-1">Payment transactions are processed through PCI DSS-compliant third-party payment gateways.</li>
                </ul>
            </li>
            <li className="before:content-['2.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
                <span className="font-bold">Backup and Recovery</span>
                <ul  className="list-disc list-inside space-y-2">
                  <li  className="pl-6 space-y-1">Automated daily backups of critical data to ensure recovery in case of data loss or system failure.</li>
                  <li  className="pl-6 space-y-1">Backup data is encrypted and stored in geographically redundant locations.</li>
                </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">User Responsibilities</span>
          <p className="pl-6 space-y-1 ">Users play a vital role in maintaining security. We encourage you to:</p>
          <ul  className="list-decimal list-inside space-y-2">
            <li  className="pl-6 space-y-1">
              Use strong, unique passwords and avoid sharing them with others.
            </li>
            <li  className="pl-6 space-y-1">
              Enable multi-factor authentication (MFA) for additional protection.
            </li>
            <li  className="pl-6 space-y-1">
              Regularly update your account details and notify us immediately of any unauthorized access.
            </li>
            <li  className="pl-6 space-y-1">
              Exercise caution when sharing sensitive information on the platform.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Incident Response</span>
          <ul  className="pl-6 space-y-1 [counter-reset:sublist]">
            <li className="before:content-['4.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
              <span className="font-bold">Reporting Security Incidents: </span>If you detect any suspicious activity or potential security breaches, please contact our security team immediately at procureaigent@proaince.com.
            </li>
            <li className="before:content-['4.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
              <span className="font-bold">Response Procedures: </span>In the event of a security incident, we will:
              <ul  className="list-disc list-inside space-y-2">
                <li  className="pl-6 space-y-1">Investigate and mitigate the incident promptly.</li>
                <li  className="pl-6 space-y-1">Notify affected users if their data is impacted.</li>
                <li  className="pl-6 space-y-1">Cooperate with legal and regulatory authorities as required.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Compliance Standards</span>
          <p className="pl-6 space-y-1 ">We adhere to the following industry standards and regulations to ensure a secure platform:</p>
          <ul  className="list-disc list-inside space-y-2">
            <li  className="pl-6 space-y-1">
              <span className="font-bold">General Data Protection Regulation (GDPR)</span> for user data protection
            </li>
            <li  className="pl-6 space-y-1">
              <span className="font-bold">PCI DSS</span> standards for secure payment processing.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Data Storage and Access</span>
          <ul  className="pl-6 space-y-1 [counter-reset:sublist]">
            <li className="before:content-['6.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
              <span className="font-bold">Secure Data Centers</span>
              <ul className="list-disc list-inside space-y-2">
                <li className="pl-6 space-y-1">ProcureAigent data is hosted on cloud infrastructure with robust physical and digital security measures.</li>
              </ul>
            </li>
            <li className="before:content-['6.'counter(sublist)] before:mr-2 before:font-bold [counter-increment:sublist]">
              <span className="font-bold">Limited Access</span>
              <ul  className="list-disc list-inside space-y-2">
                <li  className="pl-6 space-y-1">Only authorized personnel with a legitimate need have access to sensitive information.</li>
                <li  className="pl-6 space-y-1">Access is monitored and regularly reviewed.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Third-Party Integrations</span>
          <p className="pl-6 space-y-1 ">When using third-party services (e.g., analytics, payment gateways), we ensure that:</p>
          <ul  className="list-disc list-inside space-y-2">
            <li  className="pl-6 space-y-1">
              Partners comply with data protection and security standards.
            </li>
            <li  className="pl-6 space-y-1">
              Data shared with third parties is minimized and protected through secure integrations.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Updates to the Security Policy</span>
          <p className="pl-6 space-y-1 ">We continually update this Security Policy to reflect advancements in technology, evolving threats, and regulatory requirements. Users will be notified of significant changes through the platform.</p>
        </li>
        <li>
          <span className="font-medium">Contact Us</span>
          <p className="pl-6 space-y-1 ">If you have questions or concerns about our use of cookies, please contact us: procureaigent@proaince.com</p>
        </li>
      </ul>
      <p>By using ProcureAigent, you acknowledge and agree to the security measures described in this policy. Protecting your data and ensuring secure platform use is our shared responsibility.</p>
    </div>
  )
}

export default SecutiyPolicy;