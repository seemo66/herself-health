export default function ServicesSection() {
  return (
    <section className="bg-white px-[30px] py-[40px] flex flex-col gap-[40px] lg:flex-row-reverse lg:gap-[54px] lg:py-[74px] lg:items-center lg:justify-center">
      <picture className="block aspect-[1.34] md:aspect-auto">
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/services-desktop.webp`}
          media="(min-width: 768px)"
        />
        <img
          className="w-full h-full object-cover rounded-[10px] lg:max-w-[643px]"
          src={`${process.env.PUBLIC_URL}/images/services-mobile.webp`}
          alt="A nurse assists an older woman as they both focus on a tablet, likely reviewing medical information or resources."
        />
      </picture>
      <div className="lg:max-w-[605px]">
        <h2 className="text-[40px] text-[#9A0180] font-reckless leading-[100%] mb-[16px] lg:text-[60px]">
          Care that Covers What Matters
        </h2>
        <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[16px] lg:text-[20px]">
          From longer visits to 24/7 support, your membership is designed to deliver care that works
          for you.
        </p>
        <ul className="list-disc pl-7 font-untitled font-normal text-[18px] text-black leading-6 space-y-2">
          <li>Same-day or next-day appointments</li>
          <li>On-site mammograms and DEXA scans (coming late 2025)</li>
          <li>Mental health services</li>
          <li>24/7 access to a nurse or doctor</li>
          <li>Support for menopause, hormones, energy, and more</li>
          <li>A care team who listens and follows through</li>
        </ul>
      </div>
    </section>
  );
}
