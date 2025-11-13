import { sections } from './terms-of-use-data';

export default function TermsOfUse() {
  return (
    <div className={`flex flex-col`}>
      <section className="legal-section">
        <section>
          <h1>Terms of Use - EEA</h1>
          <p>Please carefully read the following Terms of Use</p>
        </section>

        {sections &&
          sections.map((section, index) => (
            <section key={index}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
      </section>
    </div>
  );
}
