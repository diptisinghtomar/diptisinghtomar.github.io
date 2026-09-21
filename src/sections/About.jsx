import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";

const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function About() {
  return <section className="section" id="about"><SectionLabel>01 / ABOUT</SectionLabel><div className="grid gap-[55px] lg:grid-cols-[1.15fr_.85fr] lg:gap-[100px]"><div><SectionHeading>Chemistry student<br />by degree, <span>meme creator<br />by choice.</span></SectionHeading><p className="mt-6 max-w-[720px] text-[19px] leading-[1.65] text-[#d5d5d0]">I've spent the last few years learning how the internet works building social accounts, creating memes, writing content, following trends and experimenting with what makes people stop scrolling.</p><p className="mt-6 max-w-[720px] text-base leading-[1.65] text-[#a9aaa6]">My strongest areas are X/Twitter content, trend driven writing, memes, content strategy and short-form content.</p><p className="mt-6 max-w-[720px] text-base leading-[1.65] text-[#a9aaa6]">I like content that feels native to the platform, understands the audience and doesn't scream <strong className="text-primary">“THIS IS AN AD.”</strong></p></div><div className="flex flex-col justify-center"><div className="relative h-[500px] border border-subtle bg-[#15171a] sm:h-[560px]"><img src={asset("profile.jpeg")} alt="Dipti Singh" className="h-full w-full object-cover" /></div><div className="mt-3 text-[10px] tracking-[1.5px] text-[#767773]">DIPTI SINGH / CONTENT CREATOR</div></div></div></section>;
}
