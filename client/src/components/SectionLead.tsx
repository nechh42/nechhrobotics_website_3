/** Evidence Grid: section introductions use the numbered reference rail rather than centered headline blocks. */
import type { ReactNode } from "react";

type SectionLeadProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  dark?: boolean;
};

export function SectionLead({ number, eyebrow, title, copy, dark = false }: SectionLeadProps) {
  return (
    <div className={dark ? "section-lead on-dark" : "section-lead"}>
      <div className="section-rail"><span>{number}</span><i /></div>
      <div className="section-lead-content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
    </div>
  );
}
