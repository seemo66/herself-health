import WaitingListForm from './WaitingListForm';

export default function WaitingListSection() {
  return (
    <section id="waiting-list" className="bg-white">
      <div className="mx-auto bg-pink py-[34px] px-[30px] md:text-center">
        <h2 className="text-[40px] text-white font-reckless mb-[16px] leading-[45px] md:mb-[20px] md:text-[50px]">
          Launching in late 2025
        </h2>
        <h3 className="font-untitled font-medium text-[20px] text-white leading-6 mb-[16px] md:mb-[18px] md:text-[30px]">
          Care you can count on—right in your neighborhood or from the comfort of home.{' '}
        </h3>
      </div>
      <div className="relative">
        <div className="w-full">
          <picture>
            {/* Desktop source with a media query */}
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/waitlist-desktop.webp`}
              media="(min-width: 768px)"
            />
            {/* Mobile source (default) */}
            <img
              src={`${process.env.PUBLIC_URL}/images/waitlist-mobile.webp`}
              alt="A woman wearing glasses stands in front of a closed door, looking directly at the camera"
              className="block w-full md:min-h-[694px] object-cover"
            />
          </picture>
        </div>
        <div className="w-full bg-white py-[34px] px-[30px] md:absolute md:left-[0px] md:top-1/2 md:-translate-y-1/2 md:px-[83px] md:py-[61px] md:border-[2px] border-[#9A0180] rounded-[10px] md:max-w-[822px] lg:left-[146px]">
          <h2 className="font-reckless font-medium text-[40px] text-[#9A0180] mb-[16px] md:mb-[18px] md:text-[50px]">
            Join Our Waitlist
          </h2>
          <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[16px] lg:text-[20px]">
            Add your information below and we’ll add you to the waitlist.
          </p>
          <WaitingListForm />
        </div>
      </div>
    </section>
  );
}
