import SectionHeading from "../../components/SectionHeading";
import SectionLabel from "../../components/SectionLabel";
import CampaignCard from "./CampaignCard";
import { campaigns } from "../../data/campaigns";

export default function CampaignExperience() {
  return (
    <section className="section" id="work">
      <SectionLabel>04 / CAMPAIGN EXPERIENCE</SectionLabel>
      <div className="mb-[70px] grid gap-5 lg:grid-cols-[1fr_320px] lg:gap-[50px]">
        <SectionHeading>Campaign<br /><span>Experience.</span></SectionHeading>
        <p className="self-end leading-[1.55] text-[#9d9e9a]">Campaigns and social content created to feel native to the conversation.</p>
      </div>
      <div className="space-y-[75px]">
        {campaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} />)}
      </div>
    </section>
  );
}
