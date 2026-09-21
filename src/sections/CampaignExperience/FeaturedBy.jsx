const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function FeaturedBy({ brands }) {
  return (
    <div className="mt-8 border-t border-subtle pt-5">
      <p className="mb-4 text-[10px] tracking-[1.5px] text-[#858682]">FEATURED BY</p>
      <div className="flex flex-wrap gap-3">
        {brands.map((brand) => {
          const external = brand.url !== "#TODO";
          return (
            <a
              key={brand.name}
              href={brand.url}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={`${brand.name} featured this campaign`}
              className="flex h-14 w-[86px] items-center justify-center border border-subtle bg-[#f5f4ef] p-2 transition hover:border-accent"
            >
              <img src={asset(brand.logo)} alt={`${brand.name} logo`} className="max-h-full max-w-full object-contain" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
