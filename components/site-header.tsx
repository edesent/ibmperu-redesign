"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { aboutLinks, primaryLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerLinks = primaryLinks.filter(
    (link) => link.href !== "/language-information" && link.href !== "/how-our-missionaries-are-supported",
  );
  const links = [...aboutLinks, ...headerLinks];

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="IBM Peru home">
        <Image src="/images/ibm-logo.png" alt="" width={220} height={94} priority />
        <span>{site.shortName}</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="nav-group">
          <button type="button">About</button>
          <div className="nav-panel">
            {aboutLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {headerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.href === "/scripture-work" ? "Scriptures" : link.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a className="button button-donate" href={site.donateUrl}>
          Donate
          <ExternalLink size={16} aria-hidden />
        </a>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={site.donateUrl} onClick={() => setOpen(false)}>
            Donate
          </a>
        </nav>
      ) : null}
    </header>
  );
}
