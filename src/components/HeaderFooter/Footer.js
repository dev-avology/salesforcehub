import React from "react";

const footerData = {
  logo: "/images/logo.svg",
  socialLinks: [
    { href: "#", icon: "/images/social1.svg", alt: "Facebook" },
    { href: "#", icon: "/images/social2.svg", alt: "Twitter" },
    { href: "#", icon: "/images/social3.svg", alt: "LinkedIn" },
    { href: "#", icon: "/images/social4.svg", alt: "Instagram" },
    { href: "#", icon: "/images/yicons.svg", alt: "YouTube" },
  ],
};


function Footer() {
  return (
    <>
      <section className="site-footer">
        <div className="container">
          <div className="grid gap">
            <div className="item">
              <div className="footer-logo">
                <img src={footerData.logo} alt="logo" />
              </div>
            </div>

            <div className="item">
              <div className="footer-icon">
                <ul>
                  {footerData.socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <img src={link.icon} alt={link.alt} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
