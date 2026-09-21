import LogoBadge from "./LogoBadge";

const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function FeaturedCard({ item }) {
  const external = item.url !== "#TODO";
  return (
    <a href={item.url} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group block overflow-hidden border border-site bg-site text-primary">
      <div className="relative bg-[#050607]">
        <img src={asset(item.media)} alt={item.alt} className="block h-auto w-full" />
        <LogoBadge name={item.name} src={item.logo} />
      </div>
      <div className="p-[22px]">
        <span className="text-[9px] tracking-[1.5px] text-[#9fa19c]">{item.name.toUpperCase()}</span>
        <h3 className="mt-2 font-display text-lg">Featured content</h3>
        <p className="text-[#8d8f8a]">{item.description}</p>
      </div>
    </a>
  );
}
