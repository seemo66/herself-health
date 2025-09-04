export default function Services() {
  return (
    <section className="bg-tan px-[30px] py-[57px] md:py-[72px] md:text-center">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[40px] text-[#9A0180] font-reckless mb-[16px] leading-[45px] md:mb-[20px] md:text-[60px] md:leading-[70px]">
          One Membership.
          <br /> No Surprise Bills.
        </h2>
        <p className="font-untitled font-bold text-[18px] text-black leading-6 mb-[16px] md:mb-[18px] md:text-[20px]">
          $65/month or $700/year. No copays. No surprise bills. Just care that works for your life.
        </p>
        <p className="font-untitled font-regular text-[18px] text-black leading-6 mb-[16px] md:mb-[18px] md:text-[20px]">
          Your membership gives you full access to Herself Health as your primary care provider—no
          add-ons, no hidden fees, and no insurance games. Just consistent, connected care that
          includes longer visits, fast access when you need it, and real support for everything from
          menopause to mental health.
        </p>
        <p className="font-untitled font-regular text-[18px] text-black leading-6 mb-[16px] md:mb-[18px] md:text-[20px]">
          We bill monthly, or we bill annually at a discount. That’s it. The way care should be:
          clear, dependable, and designed to support your whole life—not just one part of it.
        </p>
        <p className="font-untitled font-regular text-[18px] mb-[38px] text-black leading-6 md:text-[20px]">
          We’ll let you know as soon as membership is available in your area.{' '}
        </p>
        <button
          className="w-[285px] h-[67px] bg-[#8755F1] text-white font-untitled text-[22px] py-3 px-8 rounded-lg shadow-lg hover:bg-[#7c4dcf] transition-colors duration-300"
          onClick={() => {
            document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}
