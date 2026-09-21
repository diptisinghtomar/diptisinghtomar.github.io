import CampaignMedia from "./CampaignMedia";
import FeaturedBy from "./FeaturedBy";

export default function CampaignCard({ campaign }) {
  return (
    <article className="border-t border-subtle pt-8 lg:grid lg:grid-cols-[280px_1fr] lg:gap-[55px]">
      <div className="mb-8 lg:mb-0">
        <span className="text-[11px] tracking-[1px] text-[#aaa]">{campaign.number}</span>
        <h3 className="mt-5 font-display text-[clamp(34px,4vw,58px)] font-semibold leading-none tracking-[-2px]">{campaign.name}</h3>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[1.5px] text-accent">{campaign.type}</p>
        <p className="mt-4 max-w-[280px] text-[14px] leading-[1.6] text-[#a9aaa6]">{campaign.description}</p>
      </div>
      <div>
        <div className="grid items-start gap-[22px] md:grid-cols-2">
          {campaign.media.map((item) => <CampaignMedia key={item.id} item={item} />)}
        </div>
        {/* <FeaturedBy brands={campaign.featuredBy} /> */}
      </div>
    </article>
  );
}
