import FaqAccordion from './FaqAccordion';

export default function FaqSection() {
  return (
    <section className="bg-white px-[30px] py-[57px] pt-[15px] mx-auto md:py-[72px] md:text-center md:max-w-[834px]">
      <div className="mx-auto">
        <h2 className="text-[40px] text-[#9A0180] font-reckless mb-[16px] leading-[45px] md:mb-[20px] md:text-[60px] md:leading-[70px]">
          You Might Be Wondering…
        </h2>
        <p className="font-untitled font-bold text-[18px] text-black leading-6 mb-[16px] md:mb-[18px] md:text-[20px]">
          Frequently Asked Questions
        </p>
        <FaqAccordion />
        {/* <div className="px-[20px] py-[15px] border-[2px] border-[#9A0180] rounded-[10px] flex items-center gap-[14px]">
          <img
            src="/images/arrow-right.svg"
            alt="Arrow pointing right"
            className="w-[22px] h-[22px]"
          />

          <p className="font-untitled font-medium text-[20px] text-black leading-6">
            Is Herself Health a primary care provider?
          </p>
        </div> */}
      </div>
    </section>
  );
}
