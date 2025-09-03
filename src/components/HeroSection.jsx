export default function HeroSection() {
  return (
    <div className="bg-tan relative">
      {/* Hero Image */}
      <div className="relative w-full">
        <picture>
          {/* Desktop source with a media query */}
          <source srcSet="/images/hero-desktop.jpg" media="(min-width: 768px)" />
          {/* Mobile source (default) */}
          <img
            src="/images/hero-mobile.jpg"
            alt="A smiling older woman with a young girl on her back in a park."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* Text and Button Section */}
      <div className="relative pt-[25px] pb-[39px] px-[30px] lg:px-[100px] md:p-12 md:absolute md:inset-0 md:flex md:items-center md:justify-start z-10">
        <div className="md:w-[55%] lg:w-[45%] md:max-w-7xl md:pr-8">
          <h1 className="font-reckless text-[40px] text-[#9A0180] text-4xl leading-tight mb-4 md:text-2xl xl:text-5xl">
            Finally, Healthcare That Understands You.
          </h1>
          <h2 className="font-untitled text-[24px] text-darkPink text-lg font-medium mb-6 xl:text-[30px]">
            For women navigating the changes and challenges of 50-65.
          </h2>
          <p className="font-untitled text-text text-[18px] mb-6 md:text-base">
            You've spent decades caring for everyone else. Now it's time for healthcare that truly
            understands you. Our Women's Health Membership recognizes that your needs are
            unique—from hormone changes and sleep disruptions to managing stress and maintaining
            your vitality.
          </p>
          <p className="font-untitled text-text text-[18px] font-bold mb-8 md:text-base lg:text-lg">
            Ready to join our waitlist? Experience healthcare designed around your life, not
            squeezed into someone else's schedule.
          </p>
          <button className="w-[285px] h-[67px] bg-[#8755F1] text-white font-untitled text-[22px] py-3 px-8 rounded-lg shadow-lg hover:bg-[#7c4dcf] transition-colors duration-300">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
