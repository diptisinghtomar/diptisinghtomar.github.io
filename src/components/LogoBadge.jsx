import { useState } from "react";

const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function LogoBadge({ name, src }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="absolute right-3 top-3 z-10 flex h-12 w-[74px] items-center justify-center border border-site/35 bg-[#f5f4ef] p-2 lg:right-4 lg:top-4 lg:h-14 lg:w-[86px]">
      {!missing ? <img src={asset(src)} alt={`${name} logo`} onError={() => setMissing(true)} className="max-h-full max-w-full object-contain" /> : <span className="text-center text-[7px] leading-tight text-accent">{name} LOGO</span>}
    </div>
  );
}
