const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function FeaturedBrandSelector({ brands, activeBrand, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" role="tablist" aria-label="Featured platforms">
      {brands.map((brand) => {
        const active = activeBrand === brand.id;
        return (
          <button
            key={brand.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(brand.id)}
            className={`focus-ring flex min-h-[122px] flex-col items-center justify-center gap-4 border p-4 text-center transition ${active ? "border-site bg-site text-primary" : "border-site/35 bg-transparent text-site hover:bg-site/10"}`}
          >
            <span className="flex h-12 w-full items-center justify-center bg-[#f5f4ef] p-2">
              <img src={asset(brand.logo)} alt={`${brand.name} logo`} className="max-h-full max-w-full object-contain" />
            </span>
            <span className="text-[10px] font-semibold tracking-[1.2px]">{brand.name.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
