import { siteData } from "../data";

const companyLinks = {
  Cartesi: "https://cartesi.io",
  Amdocs: "https://amdocs.com",
} as const;

function renderAboutText(about: string) {
  let cartesiLinked = false;

  return about.split("\n").map((para, paraIndex) => (
    <p key={paraIndex}>
      {para.split(/(Cartesi|Amdocs)/g).map((part, partIndex) => {
        if (part === "Cartesi") {
          if (cartesiLinked) return part;
          cartesiLinked = true;

          return (
            <a
              key={partIndex}
              href={companyLinks.Cartesi}
              className="about-company-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cartesi
            </a>
          );
        }

        if (part === "Amdocs") {
          return (
            <a
              key={partIndex}
              href={companyLinks.Amdocs}
              className="about-company-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amdocs
            </a>
          );
        }

        return part;
      })}
    </p>
  ));
}

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-text">{renderAboutText(siteData.about)}</div>
    </section>
  );
}
