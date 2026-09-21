import { useState } from "react";

const links = [["about", "About"], ["services", "What I Do"], ["work", "Work"], ["featured", "Featured"], ["process", "Process"], ["contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <header className="sticky top-0 z-50 flex h-[82px] items-center justify-between border-b border-subtle bg-site/90 px-[22px] backdrop-blur-2xl lg:px-[42px]">
        <a href="#home" className="font-display text-[23px] font-bold tracking-[-1px]">DIPTI<span className="text-accent">.</span></a>
        <nav className="ml-auto mr-[38px] hidden gap-[30px] lg:flex" aria-label="Main navigation">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="text-[13px] text-[#c7c7c5] transition hover:text-accent">{label}</a>)}
        </nav>
        <a href="#contact" className="hidden text-[13px] font-semibold lg:block">Let's Work Together <span className="text-accent">↗</span></a>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="w-[38px] lg:hidden focus-ring">
          <span className="my-[7px] block h-px bg-white" /><span className="my-[7px] block h-px bg-white" />
        </button>
      </header>
      <nav className={`fixed inset-x-0 top-[82px] z-40 flex flex-col border-b border-subtle bg-site px-[22px] transition-transform duration-300 lg:hidden ${open ? "translate-y-0" : "-translate-y-[120%]"}`} aria-label="Mobile navigation">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close} className="border-b border-subtle py-[15px] font-display text-[30px] font-medium">{label}</a>)}
      </nav>
    </>
  );
}
