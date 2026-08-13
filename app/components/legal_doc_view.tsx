import type { LegalBlock, LegalDoc, LegalDocLanguageContent } from "../content/legal_types";

// This component renders LegalBlock.html via dangerouslySetInnerHTML.
// That is only safe because every string it ever receives comes from our
// own static source files under app/content/ (developer-authored legal
// text, checked into git) — never from a user, a form, an API response,
// or any other runtime source. If this component is ever reused for
// content that isn't 100% developer-authored static data, it needs a
// sanitizer first.

const metaLabels = {
  en: { version: "Version", lastUpdated: "Last Updated", developer: "Developer", application: "Application" },
  tr: { version: "Sürüm", lastUpdated: "Son Güncelleme", developer: "Geliştirici", application: "Uygulama" },
} as const;

function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "subtitle":
      return <h3 className="sub_title" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "paragraph":
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "table":
      return (
        <table className="legal_table">
          {block.headers && (
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {block.rows.map((row, rowIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "info":
      return <div className="info_box" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "warn":
      return (
        <div className="warn_box">
          <div className="warn_title">{block.title}</div>
          <p dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      );
  }
}

interface LegalDocViewProps {
  doc: LegalDoc;
  lang: "en" | "tr";
  content: LegalDocLanguageContent;
}

export function LegalDocView({ doc, lang, content }: LegalDocViewProps) {
  const labels = metaLabels[lang];

  return (
    <>
      <div className="doc_header">
        <div className="doc_title">
          {content.docTitleLine1}
          <br />
          <span>{content.docTitleLine2}</span>
        </div>
        <dl className="doc_meta">
          <dt>{labels.version}</dt>
          <dd>{doc.version}</dd>
          <dt>{labels.lastUpdated}</dt>
          <dd>{content.lastUpdated}</dd>
          <dt>{labels.developer}</dt>
          <dd>{doc.developer}</dd>
          <dt>{labels.application}</dt>
          <dd>{doc.application}</dd>
        </dl>
      </div>
      {content.sections.map((section) => {
        const isHeavy = section.blocks.some((block) => block.kind === "table" || block.kind === "list");
        return (
          <div className={`legal_section${isHeavy ? " legal_section_heavy" : ""}`} key={section.number}>
            <h2 className="section_title">
              <span className="section_num">{section.number}</span>
              {section.title}
            </h2>
            {section.blocks.map((block, blockIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <LegalBlockView key={blockIndex} block={block} />
            ))}
          </div>
        );
      })}
    </>
  );
}
