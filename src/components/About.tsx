import { siteData } from "../data";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-text">
        {siteData.about.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
