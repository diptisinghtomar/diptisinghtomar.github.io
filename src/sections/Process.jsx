import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/process";

export default function Process() {
  return <section className="section" id="process"><SectionLabel>06 / PROCESS</SectionLabel><SectionHeading className="mb-[55px] lg:mb-[75px]">From memes to<br /><span>strategy — this is how.</span></SectionHeading><div className="grid grid-cols-1 border-l border-t border-subtle sm:grid-cols-2 lg:grid-cols-3">{processSteps.map(([number, title, description]) => <article key={number} className="min-h-[200px] border-b border-r border-subtle p-7"><span className="text-[11px] text-[#aaa]">{number}</span><h3 className="mt-[45px] text-[19px]">{title}</h3><p className="mt-2 text-[13px] leading-[1.55] text-[#898a87]">{description}</p></article>)}</div></section>;
}
