import {
  alumni, awards, books, currentMembers, editorialRoles, galleryEras, grants,
  memberships, newsItems, profiles, publications, researchAreas, tools,
} from "./site-data";

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro ? <p className="section-intro">{intro}</p> : null}</div>;
}

function PersonImage({ name, image }: { name: string; image?: string }) {
  return image ? <img className="person-photo" src={image} alt={name} loading="lazy" /> : <span className="avatar">{name.split(" ").map((part) => part[0]).join("")}</span>;
}

export default function Home() {
  const newsYears = [...new Set(newsItems.map((item) => item.year))];

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Supratik Kar home"><img className="brand-logo" src="/cmm-logo.png" alt="" /><span><strong>Dr. Supratik Kar</strong><small>Scientist, Educator, Mentor.</small></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#tools">Tools</a><a href="#funding">Funding</a><a href="#people">CMM Lab</a><a href="#recognition">Recognition</a><a href="#news">News</a><a href="#gallery">Gallery</a>
        </nav>
        <a className="header-contact" href="#contact">Contact <span aria-hidden="true">↓</span></a>
        <details className="mobile-nav"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><div><a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#tools">Tools</a><a href="#funding">Funding</a><a href="#people">CMM Lab</a><a href="#recognition">Recognition</a><a href="#news">News</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div></details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="hero-kicker"><span></span> Medicinal chemistry · computational science · cheminformatics · CADD</p>
          <h1 id="hero-title">Making chemistry more <em>predictive</em>—and discovery more <em>responsible.</em></h1>
          <p className="hero-lede">Dr. Supratik Kar, tenured Associate Professor and Principal Investigator of the Chemometrics and Molecular Modeling Laboratory in the Department of Chemistry and Physics at Kean University, New Jersey, USA, develops interpretable computational models, open tools and research experiences that connect molecular insight to drug safety, environmental risk and new therapeutics.</p>
          <p className="hero-highlight"><strong>Internationally recognized QSAR expert</strong> and repeatedly listed among the world’s <strong>Top 2% Scientists</strong>, advancing transparent predictive chemistry across drug discovery, toxicology and environmental health.</p>
          <div className="hero-actions"><a className="button button-primary" href="#research">Explore the research <span aria-hidden="true">↓</span></a><ExternalLink className="button button-secondary" href="https://www.kean.edu/directory/supratik-kar">Kean profile</ExternalLink></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame"><img src="/profile.jpg" alt="Portrait of Dr. Supratik Kar" /><span className="portrait-index">PI · CMM</span></div>
          <div className="hero-credential"><strong>Principal Investigator, CMM Laboratory &amp; Associate Professor, Chemistry and Physics, Kean University</strong><small>New Jersey, USA</small></div>
          <div className="orbit orbit-one" aria-hidden="true"></div><div className="orbit orbit-two" aria-hidden="true"></div>
        </div>
        <div className="hero-stats" aria-label="Current research metrics">
          <div><strong>125</strong><span>Peer-reviewed<br />articles</span></div><div><strong>2</strong><span>International<br />textbooks</span></div><div><strong>3</strong><span>Edited<br />books</span></div><div><strong>30</strong><span>Published book<br />chapters</span></div>
          <div><strong>6</strong><span>Edited thematic<br />issues</span></div><div><strong>10,740</strong><span>Google Scholar<br />citations</span></div><div><strong>51</strong><span>Google Scholar<br />h-index</span></div><div><strong>$1.435M</strong><span>Funding<br />secured</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Research focus"><div>MEDICINAL CHEMISTRY <span>◆</span> CHEMOINFORMATICS <span>◆</span> CADD <span>◆</span> QSAR <span>◆</span> PREDICTIVE TOXICOLOGY <span>◆</span> MACHINE LEARNING <span>◆</span> MOLECULAR MODELING</div></section>

      <section className="section about" id="about">
        <SectionHeading eyebrow="01 · About" title="Scientist, Educator, Mentor." />
        <div className="about-layout">
          <div className="about-copy">
            <p className="lead">I lead the Chemometrics and Molecular Modeling Laboratory at Kean University, where computational chemistry is both a research engine and a training ground.</p>
            <p>My work integrates medicinal chemistry, chemometrics, cheminformatics and machine learning across computer-aided drug design, chemical risk assessment and toxicity modeling. The aim is consistent: build models that are mechanistically useful, transparent about their limits and accessible to the people who need them.</p>
            <p>Before joining Kean in 2022, I spent seven years as a Postdoctoral Research Associate at Jackson State University’s Interdisciplinary Center for Nanotoxicity and completed a European Union Marie-Curie research fellowship at the University of Gdańsk.</p>
            <div className="education-strip"><div><span>Ph.D.</span><strong>Pharmacy</strong><small>Jadavpur University</small></div><div><span>M.Pharm.</span><strong>Medicinal Chemistry</strong><small>Jadavpur University · Valedictorian</small></div><div><span>B.Pharm.</span><strong>Pharmacy</strong><small>Jadavpur University · Valedictorian</small></div></div>
          </div>
          <aside className="timeline" aria-label="Professional timeline">
            <div><span>September 1, 2026—now</span><strong>Associate Professor · Kean University</strong><p>Department of Chemistry and Physics; Principal Investigator, CMM Laboratory.</p></div>
            <div><span>September 2022—August 31, 2026</span><strong>Assistant Professor · Kean University</strong><p>Department of Chemistry and Physics; founded and led the CMM Laboratory.</p></div>
            <div><span>2015—2022</span><strong>Jackson State University</strong><p>Postdoctoral Research Associate, Interdisciplinary Center for Nanotoxicity.</p></div>
            <div><span>2013—2014</span><strong>University of Gdańsk</strong><p>Marie-Curie Visiting Research Fellow.</p></div>
          </aside>
        </div>
        <div className="profile-grid" aria-label="Professional profiles">{profiles.map((profile) => <ExternalLink href={profile.href} className="profile-link" key={profile.label}><span className="profile-code">{profile.code}</span><span><strong>{profile.label}</strong><small>{profile.detail}</small></span></ExternalLink>)}</div>
      </section>

      <section className="section research" id="research">
        <SectionHeading eyebrow="02 · Research" title="From molecules to decisions." intro="A connected program spanning therapeutic discovery, chemical safety, environmental health and model reliability." />
        <div className="research-path" aria-label="Research translation pathway"><div><span>01</span><strong>Molecules</strong><small>Structures · targets · materials</small></div><i>→</i><div><span>02</span><strong>Models</strong><small>QSAR · AI · simulation</small></div><i>→</i><div><span>03</span><strong>Evidence</strong><small>Validation · mechanism · uncertainty</small></div><i>→</i><div><span>04</span><strong>Decisions</strong><small>Safer chemicals · better leads</small></div></div>
        <div className="research-grid">{researchAreas.map((area) => <article className="research-card" key={area.number}><span className="card-number">{area.number}</span><h3>{area.title}</h3><div className="scheme-flow" aria-label={area.title + " workflow"}>{area.flow.map((step, index) => <span key={step}><b>{step}</b>{index < area.flow.length - 1 ? <i>→</i> : null}</span>)}</div><p>{area.text}</p><div className="tag-list">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="section publications" id="publications">
        <SectionHeading eyebrow="03 · Publications" title="A record built across fields." intro="Books, chapters and 125 peer-reviewed articles connecting foundational QSAR methods to current AI-enabled discovery." />
        <div className="publication-summary"><div className="publication-counts"><div><strong>125</strong><span>Peer-reviewed articles</span></div><div><strong>2</strong><span>Textbooks</span></div><div><strong>3</strong><span>Edited books</span></div><div><strong>30</strong><span>Published chapters</span></div><div><strong>6</strong><span>Thematic issues</span></div></div><p>Published across <em>Chemical Reviews</em>, <em>Scientific Reports</em>, <em>Green Chemistry</em>, <em>Journal of Hazardous Materials</em>, <em>Chemosphere</em>, <em>ACS Omega</em> and other international journals.</p></div>
        <div className="books-panel"><div className="books-intro"><p className="eyebrow">Bookshelf</p><h3>Five foundational and edited volumes</h3><p>Two widely used QSAR textbooks and three edited volumes spanning solar cells, drug discovery, and chem- and bioinformatics.</p></div><div className="book-list">{books.map((book, index) => <ExternalLink href={book.href} className="book-row" key={book.title}><span>{String(index + 1).padStart(2, "0")}</span><span><small>{book.kind}</small><strong>{book.title}</strong></span><time>{book.year}</time></ExternalLink>)}</div></div>
        <div className="selected-header"><div><p className="eyebrow">Selected recent publications</p><h3>Latest 25 papers</h3></div><div className="record-links"><ExternalLink href="https://scholar.google.com/citations?user=kzGUHjYAAAAJ&hl=en">Complete record on Google Scholar</ExternalLink><ExternalLink href="https://researchers.kean.edu/en/persons/supratik-kar/">142 outputs on Kean Research</ExternalLink></div></div>
        <div className="paper-list">{publications.map((paper, index) => <ExternalLink href={paper.href} className="paper-row" key={paper.title}><span><small>{String(index + 1).padStart(2, "0")} · {paper.journal}</small><strong>{paper.title}</strong></span><span className="paper-meta">{paper.meta}</span></ExternalLink>)}</div>
      </section>

      <section className="section tools" id="tools">
        <SectionHeading eyebrow="04 · Open tools & methods" title="Prediction you can interrogate." intro="Research outputs designed to show where a prediction comes from and when it should be trusted." />
        <div className="tools-grid">{tools.map((tool, index) => <article className="tool-card" key={tool.title}><div><span>{tool.state}</span><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{tool.title}</h3><p>{tool.text}</p><ExternalLink href={tool.href}>{tool.link}</ExternalLink></article>)}</div>
      </section>

      <section className="section funding" id="funding">
        <SectionHeading eyebrow="05 · Funding" title="Collaborative science, sustained support." intro="External and institutional awards supporting PFAS toxicology, chemical ecology, student research and computational discovery." />
        <div className="funding-layout"><div className="funding-summary"><aside className="funding-total"><span>External project value represented</span><strong>$1.38M</strong><p>Three federal collaborative awards across the U.S. EPA, NSF and USDA NIFA.</p><div className="funding-bar" aria-hidden="true"><span></span><span></span><span></span></div></aside><aside className="funding-overall"><span>Overall funding including internal projects</span><strong>$1.435M</strong><p>Federal collaborative awards and Kean University institutional support.</p></aside></div><div className="grant-list">{grants.map((grant) => <article key={grant.agency + grant.period}><time>{grant.period}</time><div><small>{grant.agency}</small><h3>{grant.title}</h3><p>{grant.detail}</p></div><strong>{grant.amount}</strong></article>)}</div></div>
      </section>

      <section className="section people" id="people">
        <SectionHeading eyebrow="06 · CMM Laboratory" title="Mentorship with an output." intro="Students participate in real computational research, communicate their work and build pathways into graduate study, health professions and scientific careers." />
        <div className="lab-banner"><img src="/cmm-logo.png" alt="Chemometrics and Molecular Modeling Laboratory logo" /><div><p className="eyebrow">Research group</p><h3>Chemometrics &amp; Molecular Modeling Laboratory</h3><p>Interpretable modeling, open science and mentored discovery at Kean University.</p></div></div>
        <div className="mentoring-metrics"><div><strong>30</strong><span>Undergraduate researchers mentored at Kean</span></div><div><strong>2</strong><span>Graduate researchers mentored at Kean</span></div><div><strong>21</strong><span>Student-involved research articles</span></div><div><strong>18×</strong><span>Kean students received first authorship</span></div></div>
        <div className="people-heading"><h3>Current student researchers</h3><span>Active CMM Laboratory group</span></div>
        <div className="people-grid">{currentMembers.map((person, index) => <article key={person.name}><PersonImage name={person.name} image={person.image} /><small>{String(index + 1).padStart(2, "0")} · {person.program}</small><h3>{person.name}</h3><p>{person.focus}</p></article>)}</div>
        <div className="people-heading alumni-heading"><h3>Alumni pathways &amp; achievements</h3><span>Research → next step</span></div>
        <div className="alumni-grid">{alumni.map((person) => <article key={person.name}><PersonImage name={person.name} image={person.image} /><div><h3>{person.name}</h3><ul>{person.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section recognition" id="recognition">
        <SectionHeading eyebrow="07 · Recognition & service" title="Scholarship that extends beyond publication." intro="Recognition for research, student mentorship and scientific service—alongside sustained editorial, peer-review and professional commitments." />
        <div className="recognition-layout">
          <div className="awards-list">{awards.map((award) => <article key={award.title + award.year}><time>{award.year}</time><div><h3>{award.title}</h3><p>{award.text}</p>{award.href ? <ExternalLink className="award-link" href={award.href}>Evidence and record</ExternalLink> : null}</div></article>)}</div>
          <aside className="service-panel"><p className="eyebrow">Scientific service</p><h3>Editorial &amp; reviewer roles</h3><ol className="role-list">{editorialRoles.map((item) => <li key={item.role + item.journal}><span className="role-title">{item.role}</span><strong className="role-journal">{item.journal}</strong>{item.detail ? <small className="role-detail">{item.detail}</small> : null}<time className="role-period">{item.period}</time></li>)}</ol><div className="review-totals"><div><strong>80+</strong><span>Journals served</span></div><div><strong>280+</strong><span>Manuscript reviews</span></div><div><strong>300+</strong><span>Editorial decisions</span></div></div><div className="service-group"><span>Grant &amp; government review</span><p>SERDP, ANR, Poland’s National Science Centre, Royal Society FLAIR and external peer review of Health Canada risk assessments.</p></div></aside>
        </div>
        <div className="membership-heading"><p className="eyebrow">Professional affiliations</p><h3>Memberships &amp; ambassador service</h3></div>
        <div className="membership-grid">{memberships.map((item) => <article key={item.title}><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="section news-section" id="news">
        <SectionHeading eyebrow="08 · News & media" title="Research in the news." intro="Selected institutional and regional coverage of research, recognition, funding and scientific mentorship, arranged by year." />
        <div className="news-years">
          {newsYears.map((year) => (
            <section className="news-year-group" aria-labelledby={`news-${year}`} key={year}>
              <div className="news-year-heading"><span id={`news-${year}`}>{year}</span><p>{newsItems.filter((item) => item.year === year).length} stories</p></div>
              <div className="news-grid">
                {newsItems.filter((item) => item.year === year).map((item) => (
                  <article className="news-card" key={item.href}>
                    <a className="news-image" href={item.href} target="_blank" rel="noreferrer"><img src={item.image} alt="" loading="lazy" /></a>
                    <div className="news-card-body">
                      <div className="news-meta"><span>{item.source}</span><time>{item.date}</time></div>
                      <h3><a href={item.href} target="_blank" rel="noreferrer">{item.title}</a></h3>
                      <ExternalLink className="news-link" href={item.href}>Read full story</ExternalLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <SectionHeading eyebrow="09 · Gallery" title="A research journey, era by era." intro="The complete photographic archive from the previous website, organized across Kean, the CMM Laboratory, Jackson State University, Gdańsk and Jadavpur University." />
        <div className="gallery-eras">{galleryEras.map((era) => <details className="gallery-era" key={era.prefix} open><summary><span><strong>{era.title}</strong><small>{era.period}</small></span><b>{era.count} photographs</b></summary><div className="era-grid">{Array.from({ length: era.count }, (_, index) => <figure key={era.prefix + index}><img src={`/gallery/wix/${era.prefix}-${String(index + 1).padStart(2, "0")}.webp`} alt={`${era.title}, photograph ${index + 1}`} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{era.title}</figcaption></figure>)}</div></details>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orbit" aria-hidden="true"></div><p className="eyebrow">10 · Contact</p><h2>Let&apos;s connect around <em>predictive science.</em></h2><p>For research collaborations, student mentorship, editorial work and invited talks, contact Dr. Kar at Kean University.</p>
        <div className="contact-actions"><a className="button button-light" href="mailto:skar@kean.edu">skar@kean.edu <span aria-hidden="true">↗</span></a><a className="button button-outline-light" href="tel:+19087373683">+1 908 737 3683 <span aria-hidden="true">↗</span></a></div>
        <div className="contact-meta"><span><small>Offices</small>C-234 · Science Building<br />STEM 502D · STEM Building</span><span><small>Department</small>Chemistry &amp; Physics</span><span><small>Institution</small>Kean University · Union, New Jersey, USA</span></div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/cmm-logo.png" alt="" /><span><strong>Dr. Supratik Kar</strong><small>Scientist, Educator, Mentor.</small></span></a><p>Medicinal chemistry · cheminformatics · CADD · molecular modeling · predictive toxicology</p><div><a href="#top">Back to top ↑</a><span>© 2026 Dr. Supratik Kar</span></div></footer>
    </main>
  );
}

