import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import { tools } from "../data/tools";

export default function Tools() {
  return <section className="border-y border-subtle bg-panel2"><div className="page-width grid gap-[60px] py-[75px] lg:grid-cols-2 lg:gap-[100px] lg:py-[110px]"><div><SectionLabel>07 / TOOLS</SectionLabel><SectionHeading>The tools behind<br /><span>the content.</span></SectionHeading></div><div className="border-t border-subtle">{tools.map(([category, list]) => <div key={category} className="border-b border-subtle py-[22px]"><small className="text-[9px] tracking-[1.5px] text-[#858682]">{category}</small><p className="mt-2 text-[#d0d0cc]">{list}</p></div>)}</div></div></section>;
}
