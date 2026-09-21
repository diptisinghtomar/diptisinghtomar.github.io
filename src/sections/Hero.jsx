export default function Hero() {
  return (
    <section id="home" className="page-width flex min-h-[calc(100vh-82px)] flex-col justify-between py-[70px] lg:py-[105px] lg:pb-7">
      <div className="grid items-center gap-[55px] lg:grid-cols-[1.3fr_.7fr] lg:gap-[60px]">
        <div>
          <p className="text-[11px] tracking-[2px] text-[#b8b8b5]">CONTENT CREATOR &amp; SOCIAL MEDIA STRATEGIST</p>
          <h1 className="my-[30px] max-w-[1000px] font-display text-[58px] font-semibold leading-[.88] tracking-[-4px] sm:text-[12vw] lg:text-[clamp(66px,7.4vw,132px)] lg:tracking-[-6px]">I make content<br />people <span className="text-accent">stop</span> for.</h1>
          <p className="max-w-[720px] text-[15px] leading-[1.6] text-[#b8b8b5] lg:text-[17px]">Social media content, memes, strategy and copywriting made to feel native to the internet, not like an ad pretending to be content.</p>
          <div className="mt-[34px] flex flex-wrap gap-3"><a className="button bg-primary text-site hover:-translate-y-1" href="#work">View My Work <span>↓</span></a><a className="button hover:border-accent hover:text-accent" href="#contact">Let's Talk <span>↗</span></a></div>
        </div>
        <div className="relative flex h-[330px] items-center justify-center sm:h-[390px] lg:h-[500px]">
          <div className="absolute h-[235px] w-[235px] rounded-full border border-[#383b40] sm:h-[330px] sm:w-[330px] lg:h-[440px] lg:w-[440px]" /><div className="absolute h-[175px] w-[175px] rounded-full border border-[#2c2e32] sm:h-[235px] sm:w-[235px] lg:h-[310px] lg:w-[310px]" />
          <div className="relative flex h-[235px] w-[175px] rotate-[5deg] flex-col justify-between bg-accent p-[22px] text-site shadow-[25px_25px_0_#1a1c20] sm:h-[310px] sm:w-[230px]"><small className="text-[11px] font-bold">01</small><strong className="font-display text-[31px] font-bold leading-[.85] tracking-[-2px] sm:text-[40px]">MAKE<br />IT<br />FEEL<br />NATIVE.</strong></div>
          <span className="absolute right-0 top-[35px] border border-[#383b40] bg-site/85 px-3 py-2 text-[8px] tracking-[1.5px] sm:top-20 sm:text-[10px]">MEMES ↗</span><span className="absolute bottom-[45px] left-0 border border-[#383b40] bg-site/85 px-3 py-2 text-[8px] tracking-[1.5px] sm:bottom-[90px] sm:text-[10px]">TREND RESEARCH</span><span className="absolute bottom-0 right-5 border border-[#383b40] bg-site/85 px-3 py-2 text-[8px] tracking-[1.5px] sm:bottom-7 sm:text-[10px]">COPY + HOOKS</span>
        </div>
      </div>
      <div className="flex justify-between border-t border-subtle pt-4 text-[8px] tracking-[1.5px] text-[#858683] sm:text-[10px]"><span>BASED IN JAMSHEDPUR, INDIA</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}
