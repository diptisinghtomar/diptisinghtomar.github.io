import SectionLabel from "../components/SectionLabel";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import FeaturedBrandSelector from "../components/FeaturedBrandSelector";
import FeaturedMediaCard from "../components/FeaturedMediaCard";
import { featuredBrands } from "../data/featured";

export default function Featured() {
  const [activeBrand, setActiveBrand] = useState(featuredBrands[0].id);
  const selectedBrand = featuredBrands.find((brand) => brand.id === activeBrand) ?? featuredBrands[0];

  return (
    <section className="bg-accent px-[22px] py-[100px] text-site lg:px-[max(42px,calc((100vw-1500px)/2+42px))] lg:py-[150px]" id="featured">
      <SectionLabel>05 / FEATURED / REPOSTED BY</SectionLabel>
      <div className="mb-[55px] grid gap-5 lg:mb-[70px] lg:grid-cols-[1fr_420px] lg:gap-[50px]">
        <SectionHeading>Featured /<br /><span className="!text-[#596f00]">Reposted By</span></SectionHeading>
        <p className="self-end leading-[1.55] text-[#344000]">Content featured or reposted by Tumblr, ScoopWhoop, RVCJ, theindianmemes, DesiCorporates &amp; BoreCure.</p>
      </div>
      <FeaturedBrandSelector brands={featuredBrands} activeBrand={activeBrand} onSelect={setActiveBrand} />
      <div className="mt-[55px] border-t border-site/25 pt-[28px]">
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold">{selectedBrand.name}</h3>
          <span className="text-[10px] tracking-[1.5px] text-[#344000]">{selectedBrand.posts.length} FEATURED {selectedBrand.posts.length === 1 ? "POST" : "POSTS"}</span>
        </div>
        <div className="grid items-start gap-[22px] lg:grid-cols-2">
          {selectedBrand.posts.map((post) => <FeaturedMediaCard key={post.id} post={post} />)}
        </div>
      </div>
      <div className="mt-[45px] border-t border-site/25 pt-4 text-[11px] text-[#344000]" />
    </section>
  );
}
