const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function CampaignMedia({ item }) {
  const external = item.url !== "#TODO";
  const content = item.type === "video" ? (
    <video className="block h-auto w-full" controls playsInline poster={item.poster ? asset(item.poster) : undefined}>
      <source src={asset(item.src)} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={asset(item.src)} alt={item.alt} className="block h-auto w-full" />
  );

  return (
    <a
      href={item.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block overflow-hidden border border-subtle bg-panel transition hover:-translate-y-1 hover:border-[#4a4d52]"
    >
      {content}
    </a>
  );
}
