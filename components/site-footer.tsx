import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Independent Baptist Missions of Peru</p>
          <h2>Training and sending South American missionaries to the world.</h2>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>
            <Mail size={18} aria-hidden />
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\D/g, "")}`}>
            <Phone size={18} aria-hidden />
            {site.phone}
          </a>
        </div>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={`${link.href}-${link.label}`} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="copyright">Copyright © 2026 Historic Baptist Church. Rebuilt for IBM Peru.</p>
    </footer>
  );
}
