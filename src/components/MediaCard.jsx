const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function MediaCard({ item }) {
  return (
    <article className="overflow-hidden border border-subtle bg-panel transition duration-300 hover:-translate-y-1 hover:border-[#4a4d52]">
      {item.type === "video" ? (
        <div className="relative bg-[#050607]">
          <video className="block h-auto w-full" controls playsInline preload="metadata">
            <source src={asset(item.src)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="absolute left-4 top-4 bg-accent px-2.5 py-2 text-[9px] font-bold tracking-[1.5px] text-site">REEL / VIDEO</span>
        </div>
      ) : (
        <img src={asset(item.src)} alt={item.alt} className="block h-auto w-full" />
      )}
    </article>
  );
}
