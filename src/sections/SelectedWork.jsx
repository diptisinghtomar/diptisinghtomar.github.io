import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import MediaCard from "../components/MediaCard";
import { filters, workItems } from "../data/work";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visible = activeFilter === "all" ? workItems : workItems.filter((item) => item.category === activeFilter);
  return <section className="section" id="work"><SectionLabel>04 / SELECTED WORK</SectionLabel><div className="mb-[55px] grid gap-5 lg:mb-[70px] lg:grid-cols-[1fr_320px] lg:gap-[50px]"><SectionHeading>Things I've<br /><span>made on the internet.</span></SectionHeading><p className="self-end leading-[1.55] text-[#9d9e9a]">Actual examples of memes, campaign content and original posts.</p></div><div className="mb-[50px] flex gap-2 overflow-x-auto pb-1">{filters.map((filter) => <button type="button" key={filter.id} onClick={() => setActiveFilter(filter.id)} aria-pressed={activeFilter === filter.id} className={`focus-ring whitespace-nowrap rounded-full border px-4 py-2.5 text-[10px] tracking-[1px] ${activeFilter === filter.id ? "border-primary bg-primary text-site" : "border-[#33363a] bg-transparent"}`}>{filter.label}</button>)}</div><div className="grid grid-cols-1 items-start gap-[22px] lg:grid-cols-2">{visible.map((item) => <MediaCard key={item.id} item={item} />)}</div></section>;
}
