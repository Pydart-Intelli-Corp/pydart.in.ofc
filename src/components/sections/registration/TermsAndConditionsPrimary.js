import Link from "next/link";

const TermsAndConditionsPrimary = () => {
return (
<section className="terms-and-conditions section-gap">
<div className="container">
<div className="row justify-content-center">
<div className="col-10">
<div className="terms-and-conditions-wrapper">
<div>
<h2>Terms &amp; Conditions</h2>
<p className="muted">Last updated: January 2026</p>
<p>
Welcome to PyDart Intelli Corp Pvt. Ltd. ("PyDart", "we", "us", or "our"). 
By accessing or using our website, engaging with our technology demonstrations, 
or expressing interest in our products and services, you agree to be bound by 
these Terms and Conditions. Please read them carefully.
</p>
<div className="note">
<strong>Important Notice:</strong> PyDart is currently in the prototype development 
stage. ALTRAS-1 and other products mentioned on this website are under development 
and not yet commercially available. Information provided is for demonstration and 
investment consideration purposes only.
</div>
</div>

<nav className="toc" aria-label="Table of contents">
<h2>Table of Contents</h2>
<ol>
<li>
<button
className="tj-scroll-btn"
data-target="#definitions"
>
About PyDart
</button>
</li>
<li>
<button className="tj-scroll-btn" data-target="#usage">
Website Usage
</button>
</li>
<li>
<button
className="tj-scroll-btn"
data-target="#intellectual-property"
>
Intellectual Property
</button>
</li>
<li>
<button className="tj-scroll-btn" data-target="#prototype">
Prototype Status &amp; Disclaimers
</button>
</li>
<li>
<button className="tj-scroll-btn" data-target="#partnerships">
Business Partnerships
</button>
</li>
<li>
<button className="tj-scroll-btn" data-target="#limitations">
Limitation of Liability
</button>
</li>
<li>
<button className="tj-scroll-btn" data-target="#governing-law">
Governing Law
</button>
</li>
</ol>
</nav>

<div id="definitions">
<h3>1. About PyDart</h3>
<p>
<strong>PyDart Intelli Corp Pvt. Ltd.</strong> is an AI and robotics embedded 
technology company based in Kochi, Kerala, India. We are currently developing 
innovative solutions across multiple industries, with our first product, ALTRAS-1 
(Robotic Patient Transfer System), focused on healthcare automation.
</p>
<p>
<strong>"Services"</strong> refers to our technology demonstrations, prototype 
showcases, research and development activities, and business partnership opportunities.
</p>
<p>
<strong>"User" or "You"</strong> refers to any individual or entity accessing our 
website, engaging with our content, or expressing interest in our technology solutions.
</p>
</div>

<div id="usage">
<h3>2. Website Usage</h3>
<p>By using this website, you agree to:</p>
<ul>
<li>
Use the website only for lawful purposes and in accordance with these Terms.
</li>
<li>
Not attempt to gain unauthorized access to any portion of the website, 
systems, or networks connected to our services.
</li>
<li>
Not interfere with or disrupt the operation of the website or servers.
</li>
<li>
Provide accurate information when submitting inquiries, contact forms, 
or partnership expressions of interest.
</li>
<li>
Respect all intellectual property rights associated with our content, 
designs, and technology demonstrations.
</li>
</ul>
</div>

<div id="intellectual-property">
<h3>3. Intellectual Property</h3>
<p>
All content on this website, including but not limited to text, graphics, logos, 
images, videos, software code, and technology demonstrations, is the property of 
PyDart Intelli Corp Pvt. Ltd. and is protected by Indian and international 
intellectual property laws.
</p>
<ul>
<li>
<strong>Trademarks:</strong> "PyDart", "ALTRAS-1", and associated logos are 
trademarks of PyDart Intelli Corp Pvt. Ltd.
</li>
<li>
<strong>Patents Pending:</strong> Our robotic systems and AI technologies may 
be subject to pending patent applications in India and other jurisdictions.
</li>
<li>
<strong>Confidentiality:</strong> Information about our technology, designs, 
and business strategies shared during partnership discussions is confidential 
and proprietary.
</li>
</ul>
<p>
You may not reproduce, distribute, modify, or create derivative works from any 
content on this website without our prior written permission.
</p>
</div>

<div id="prototype">
<h3>4. Prototype Status &amp; Disclaimers</h3>
<p>
<strong>IMPORTANT:</strong> PyDart is currently in the prototype development stage. 
The following disclaimers apply:
</p>
<ul>
<li>
<strong>No Commercial Availability:</strong> ALTRAS-1 and other products shown 
are prototypes under development and are not currently available for purchase 
or deployment.
</li>
<li>
<strong>Technical Specifications:</strong> All technical specifications, features, 
and capabilities mentioned are subject to change as development progresses.
</li>
<li>
<strong>No Performance Guarantees:</strong> Information provided about product 
capabilities is based on development goals and testing. Final product performance 
may vary.
</li>
<li>
<strong>Regulatory Approval:</strong> Our healthcare robotics solutions will 
require regulatory approvals before commercial deployment. We make no guarantees 
regarding approval timelines or outcomes.
</li>
<li>
<strong>Investment Risk:</strong> Any investment in PyDart involves significant 
risk. We are a startup in early development stages. Consult with financial advisors 
before making investment decisions.
</li>
</ul>
</div>

<div id="partnerships">
<h3>5. Business Partnerships</h3>
<p>
Inquiries about partnerships, investments, or business collaboration are welcome. 
However, please note:
</p>
<ul>
<li>
Submission of partnership inquiries does not create any binding agreement or obligation.
</li>
<li>
All partnership discussions are confidential and subject to separate non-disclosure 
agreements (NDAs) and formal partnership agreements.
</li>
<li>
Information shared on this website is for informational purposes only and does not 
constitute a solicitation or offer to sell securities.
</li>
<li>
We reserve the right to decline partnership opportunities at our sole discretion.
</li>
</ul>
</div>

<div id="limitations">
<h3>6. Limitation of Liability</h3>
<p>
To the fullest extent permitted by Indian law:
</p>
<ul>
<li>
PyDart Intelli Corp Pvt. Ltd. shall not be liable for any indirect, incidental, 
special, or consequential damages arising from your use of this website.
</li>
<li>
We make no warranties, express or implied, regarding the accuracy, completeness, 
or reliability of information on this website.
</li>
<li>
The website and all content are provided "as is" without warranty of any kind.
</li>
<li>
We are not responsible for any decisions made based on information provided on 
this website, including investment or business decisions.
</li>
</ul>
</div>

<div id="governing-law">
<h3>7. Governing Law &amp; Dispute Resolution</h3>
<p>
These Terms and Conditions shall be governed by and construed in accordance with 
the laws of India. The courts of Kochi, Kerala, India shall have exclusive jurisdiction 
over any disputes arising from these Terms.
</p>
<p>
In the event of any dispute, parties agree to first attempt resolution through 
good-faith negotiations before pursuing legal action.
</p>
</div>

<div id="contact">
<h3>8. Contact Information</h3>
<p>
For questions about these Terms and Conditions, please contact us:
</p>
<div className="contact-info">
<p><strong>PyDart Intelli Corp Pvt. Ltd.</strong></p>
<p>Kochi, Kerala, India</p>
<p>Email: <Link href="mailto:legal@pydart.com">legal@pydart.com</Link></p>
<p>Website: <Link href="/">www.pydart.com</Link></p>
</div>
</div>

<p className="muted">
<small>
These Terms &amp; Conditions are effective as of January 2026 and may be updated 
periodically. Continued use of the website after changes constitutes acceptance 
of the updated terms. This document does not constitute legal advice. Please 
consult with qualified legal professionals for specific legal guidance.
</small>
</p>
</div>
</div>
</div>
</div>
</section>
);
};

export default TermsAndConditionsPrimary;