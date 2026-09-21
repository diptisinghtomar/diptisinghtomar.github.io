import SectionLabel from "../components/SectionLabel";
import { stats } from "../data/stats";

export default function PlatformPerformance() {
  return <section className="border-y border-subtle bg-panel2"><div className="page-width py-[75px] lg:py-[100px]"><SectionLabel>03 / PLATFORM PERFORMANCE</SectionLabel><div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([value, label], index) => <div key={label} className={`border-subtle py-7 sm:pr-[30px] lg:border-r lg:py-0 ${index > 1 ? "border-t lg:border-t-0 lg:pt-0" : ""} ${index === 1 ? "lg:border-r-0" : ""}`}><strong className="font-display text-[clamp(40px,5vw,75px)] font-semibold leading-none tracking-[-3px]">{value}<span className="text-accent">+</span></strong><small className="mt-3 block text-[10px] tracking-[1.5px] text-[#8e8f8b]">{label}</small></div>)}</div></div></section>;
}
