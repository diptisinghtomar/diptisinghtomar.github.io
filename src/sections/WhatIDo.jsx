import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/services";

export default function WhatIDo() {
  return <section className="section" id="services"><SectionLabel>02 / WHAT I DO</SectionLabel><div className="mb-[55px] grid gap-5 lg:mb-[70px] lg:grid-cols-[1fr_320px] lg:gap-[50px]"><SectionHeading>Content with a<br /><span>reason to exist.</span></SectionHeading><p className="self-end leading-[1.55] text-[#9d9e9a]">From a single hook to an entire social presence.</p></div><div className="grid grid-cols-1 border-l border-t border-subtle sm:grid-cols-2 lg:grid-cols-3">{services.map(([number, title, description]) => <article key={number} className="min-h-[220px] border-b border-r border-subtle p-[30px] transition hover:bg-panel2 lg:min-h-[250px]"><span className="text-[11px] tracking-[1px] text-[#aaa]">{number}</span><h3 className="mt-[55px] text-[21px]">{title}</h3><p className="mt-3 text-[13px] leading-[1.55] text-[#898a87]">{description}</p></article>)}</div></section>;
}
