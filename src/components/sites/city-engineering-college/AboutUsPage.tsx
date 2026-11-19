"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  PhoneCall,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import {
  departments,
  highlights,
  navigation,
  programs,
  topLinks,
  type NavItem,
} from "./navigation";
import styles from "./AboutUsPage.module.css";

const assetBase = "/sites/city-engineering-college";
const applicationUrl = "https://cityengineeringcollege.ac.in/admissions/application-form/";

type SmartLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props}>{children}</Link>;
  }

  return <a href={href} {...props}>{children}</a>;
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const hasChildren = Boolean(item.children?.length);

  return (
    <li className={styles.navItem}>
      <SmartLink
        href={item.href}
        className={`${styles.navLink} ${item.href === "/about-us/" ? styles.activeLink : ""}`}
      >
        {item.label}
        {hasChildren ? <span className={styles.navCaret} aria-hidden="true" /> : null}
      </SmartLink>
      {hasChildren ? (
        <ul className={styles.dropdown}>
          {item.children?.map((child) => (
            <DesktopDropdownItem key={`${item.label}-${child.label}`} item={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function DesktopDropdownItem({ item }: { item: NavItem }) {
  const hasChildren = Boolean(item.children?.length);

  return (
    <li className={styles.dropdownItem}>
      <SmartLink href={item.href} className={styles.dropdownLink}>
        {item.label}
        {hasChildren ? <span className={styles.dropdownCaret} aria-hidden="true" /> : null}
      </SmartLink>
      {hasChildren ? (
        <ul className={`${styles.dropdown} ${styles.nestedDropdown}`}>
          {item.children?.map((child) => (
            <DesktopDropdownItem key={`${item.label}-${child.label}`} item={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <li className={styles.mobileNavItem}>
      <div className={styles.mobileNavRow}>
        <SmartLink href={item.href} className={styles.mobileNavLink}>
          {item.label}
        </SmartLink>
        {hasChildren ? (
          <button
            type="button"
            className={styles.mobileToggle}
            aria-label={`${open ? "Close" : "Open"} ${item.label} submenu`}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <ChevronDown size={18} className={open ? styles.chevronOpen : undefined} />
          </button>
        ) : null}
      </div>
      {hasChildren && open ? (
        <ul className={styles.mobileSubmenu}>
          {item.children?.map((child) => (
            <MobileNavItem key={`${item.label}-${child.label}`} item={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function AboutUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openHighlight, setOpenHighlight] = useState<number | null>(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setSidebarOpen(false);
      }
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.site}>
      <div className={styles.headerStack}>
        <div className={styles.topHeader}>
          <div className={styles.fluidContainer}>
            <div className={styles.topLinks}>
              {topLinks.map((link) => (
                <SmartLink key={link.label} href={link.href}>
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>

        <nav className={styles.navbar} aria-label="Main navigation">
          <div className={styles.fluidContainer}>
            <div className={styles.navInner}>
              <SmartLink href="/" className={styles.logoLink}>
                <Image
                  src={`${assetBase}/logo-140x45-1.png`}
                  alt="City Engineering College"
                  width={140}
                  height={45}
                  className={styles.logo}
                  priority
                />
              </SmartLink>

              <ul className={styles.desktopNav}>
                {navigation.map((item) => (
                  <DesktopNavItem key={item.label} item={item} />
                ))}
              </ul>

              <div className={styles.navActions}>
                <button
                  type="button"
                  className={styles.sidebarButton}
                  aria-label="Open college information panel"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Image
                    src={`${assetBase}/menu.svg`}
                    alt=""
                    width={28}
                    height={28}
                  />
                </button>
                <button
                  type="button"
                  className={styles.toggler}
                  aria-label="Open navigation menu"
                  aria-expanded={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className={styles.burgerBar} />
                  <span className={styles.burgerBar} />
                  <span className={styles.burgerBar} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <section className={styles.hero}>
        <Image
          src={`${assetBase}/inner-page-shape1.png`}
          alt=""
          width={308}
          height={169}
          className={styles.heroShape}
        />
        <div className={styles.fluidContainer}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.breadcrumbs}>
              <SmartLink href="https://cityengineeringcollege.ac.in/">Home</SmartLink>
              <span> » </span>
              <span aria-current="page">About Us</span>
            </p>
          </div>
        </div>
      </section>

      <main className={styles.pageWrapper}>
        <section className={styles.intro} aria-labelledby="welcome-heading">
          <div className={styles.spacer50} />
          <div className={styles.contentContainer}>
            <div className={styles.introGrid}>
              <div>
                <Image
                  src={`${assetBase}/400x700.jpg`}
                  alt=""
                  width={400}
                  height={700}
                  className={styles.introImage}
                  priority
                />
              </div>
              <div className={styles.introContent}>
                <h2 id="welcome-heading" className={styles.introHeading}>
                  Welcome To City Engineering College, Bengaluru
                </h2>
                <div className={styles.spacer30} />
                <p className={styles.introText}>
                  <strong>City Engineering College (CEC)</strong>, established under Jayanagar Education Society by Dr K.R Paramahamsa, Chairman in the year 2001. CEC is one of the most sought colleges by students from across the country for Engineering and Management Education. The college believe in providing a high-quality education to the prospective professionals of the country for which necessary quality bench marks have been put in place, in the areas of faculty recruitment, training and development, teaching and learning process, student’s grooming, external academic audits and feedback system for academic enhancement.
                </p>
                <div className={styles.spacer20} />
                <p className={styles.locationText}>
                  Centrally located in Vasantha Vallabha Nagar, Bengaluru and near to Doddakallasandra Metro Station, ISKCON and Forum Mall. with lush green campus spanning 12 acres of land.
                </p>
                <div className={styles.spacer20} />
                <h3 className={styles.affiliationHeading}>Affiliation and Accreditation </h3>
                <Image
                  src={`${assetBase}/city-engineering-naac-1024x256.png`}
                  alt=""
                  width={640}
                  height={160}
                  className={styles.accreditationImage}
                />
                <p className={styles.introText}>
                  City Engineering College is affiliated to Visvesvaraya Technological University (VTU), Approved by AICTE, Recognized by Govt of Karnataka and accredited by NAAC. The college is also included under 2(f) of the UGC Act, 1956.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlights} aria-labelledby="highlights-heading">
          <div className={styles.contentContainer}>
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightsContent}>
                <h2 id="highlights-heading" className={styles.sectionHeading}>
                  Key Highlights
                </h2>
                <div className={styles.accordion}>
                  {highlights.map((item, index) => {
                    const open = openHighlight === index;

                    return (
                      <div key={item.title} className={styles.accordionItem}>
                        <button
                          type="button"
                          className={`${styles.accordionButton} ${open ? styles.accordionButtonOpen : ""}`}
                          aria-expanded={open}
                          aria-controls={`highlight-panel-${index}`}
                          onClick={() => setOpenHighlight(open ? null : index)}
                        >
                          {item.title}
                        </button>
                        {open ? (
                          <div id={`highlight-panel-${index}`} className={styles.accordionBody}>
                            {item.body}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.highlightsImageWrap}>
                <Image
                  src={`${assetBase}/front-view-smiley-man-holding-book-scaled.jpg`}
                  alt="image"
                  width={1706}
                  height={2560}
                  className={styles.highlightsImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mapSection} aria-labelledby="map-heading">
          <div className={styles.mapFrameWrap}>
            <iframe
              title="City Engineering College campus map"
              className={styles.mapFrame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.27843512827!2d77.54834637507507!3d12.889809287418064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3eecdc883cc1%3A0x1d44e022ac75925a!2sCity%20Engineering%20College!5e0!3m2!1sen!2sin!4v1717647879510!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mapGrid}>
              <div />
              <div className={styles.mapContent}>
                <h2 id="map-heading" className={styles.mapHeading}>
                  Get The Direction Of Our Campus
                </h2>
                <div className={styles.mapDetails}>
                  <SmartLink
                    href="https://cityengineeringcollege.ac.in/contact/"
                    className={styles.mapLink}
                    aria-label="Get directions to the campus"
                  >
                    <ArrowUpRight size={30} aria-hidden="true" />
                  </SmartLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.enquiry} aria-labelledby="enquiry-heading">
          <div className={styles.contentContainer}>
            <div className={styles.enquiryGrid}>
              <div className={styles.enquiryImages}>
                <h2 id="enquiry-heading" className={styles.enquiryHeading}>
                  We Are A University Of Excellence!
                </h2>
                <div className={styles.imageRow}>
                  <Image
                    src={`${assetBase}/alumni1.jpg`}
                    alt="image"
                    width={300}
                    height={435}
                    className={styles.smallImage}
                  />
                  <Image
                    src={`${assetBase}/cec-_0000s_0002_IMG_0554.jpg`}
                    alt="image"
                    width={1920}
                    height={1080}
                    className={styles.wideImage}
                  />
                </div>
              </div>
              <div className={styles.enquiryContent}>
                <p>
                  City Engineering College, affiliated with VTU, is centrally located in Bangalore and boasts 19 years of growth with state-of-the-art infrastructure. Known for academic excellence and a welcoming atmosphere, it offers diverse programs and a vibrant community.
                </p>
                <p>
                  The college prioritizes quality education with rigorous faculty standards, student development, and continuous academic enhancements, fostering creativity and learning.
                </p>
                <SmartLink href={applicationUrl} className={styles.applyLink}>
                  Apply now for this Academic Year
                  <ArrowUpRight size={20} aria-hidden="true" />
                </SmartLink>
                <Image
                  src={`${assetBase}/cec-favi-200x200-1.png`}
                  alt=""
                  width={200}
                  height={200}
                  className={styles.enquiryShape}
                />
                <div className={styles.contactBox}>
                  <a href="tel:+919880411361" className={styles.contactIcon}>
                    <PhoneCall size={22} aria-hidden="true" />
                  </a>
                  <div className={styles.contactContent}>
                    <h3>
                      Call <a href="tel:+919880411361">+91 9880411361</a>
                    </h3>
                    <p>For any kind of admission enquiry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contentContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerWidget}>
              <h2>City Engineering College</h2>
              <p>
                <strong>Address:</strong>
                <br />
                Doddakallasandra, Off Kanakapura Road,
                <br />
                Next to Gokulam Apartment,
                <br />
                Bangalore – 560 062
              </p>
              <p>
                Approved by AICTE, New Delhi and
                <br />
                Affilated to Visvesvaraya Technological
                <br />
                University, Belagavi.
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href="tel:9880411361">9880411361</a>, <a href="tel:9880411363">9880411363</a>
                <br />
                <a href="tel:9880411364">9880411364</a>, <a href="tel:7349032929">7349032929</a>
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:principal@cityengineeringcollege.ac.in">principal@cityengineeringcollege.ac.in</a>
                <br />
                <a href="mailto:info@cityengineeringcollege.ac.in">info@cityengineeringcollege.ac.in</a>{" "}
                <a href="mailto:admissions@cityengineeringcollege.ac.in">admissions@cityengineeringcollege.ac.in</a>
              </p>
            </div>
            <div className={styles.footerWidget}>
              <h2>Programs</h2>
              <ul className={styles.footerList}>
                {programs.map((item) => (
                  <li key={item.label}>
                    <SmartLink href={item.href}>{item.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footerWidget}>
              <h2>Department</h2>
              <ul className={styles.footerList}>
                {departments.map((item) => (
                  <li key={item.label}>
                    <SmartLink href={item.href}>{item.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <div className={styles.contentContainer}>
          <p>
            © 2026 City Engineering College | Powered by{" "}
            <a href="https://webtoro.com/" target="_blank" rel="noopener">WT</a> |{" "}
            <a href="https://webgeneric.com/" target="_blank" rel="noopener">WG</a>
          </p>
        </div>
      </div>

      {showBackToTop ? (
        <button
          type="button"
          className={styles.backToTop}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpRight size={20} aria-hidden="true" />
        </button>
      ) : null}

      {mobileMenuOpen || sidebarOpen ? (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Close panel"
          onClick={() => {
            setMobileMenuOpen(false);
            setSidebarOpen(false);
          }}
        />
      ) : null}

      {mobileMenuOpen ? (
        <aside className={styles.mobilePanel} aria-label="Mobile navigation">
          <div className={styles.panelHeader}>
            <SmartLink href="/" className={styles.logoLink}>
              <Image
                src={`${assetBase}/logo-140x45-1.png`}
                alt="City Engineering College"
                width={140}
                height={45}
              />
            </SmartLink>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close navigation menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <ul className={styles.mobileNav}>
            {navigation.map((item) => (
              <MobileNavItem key={item.label} item={item} />
            ))}
          </ul>
        </aside>
      ) : null}

      {sidebarOpen ? (
        <aside className={styles.sidePanel} aria-label="College information">
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close college information panel"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} aria-hidden="true" />
          </button>
          <div
            className={styles.joinBox}
            style={{ backgroundImage: `url(${assetBase}/young-indian-student-smiling-university-campus-1-scaled.jpg)` }}
          >
            <h2>Join City Engineering College</h2>
            <SmartLink href={applicationUrl} className={styles.applyButton}>
              Apply Now
              <ArrowUpRight size={18} aria-hidden="true" />
            </SmartLink>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
