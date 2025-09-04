export default function Header() {
  return (
    <header
      className="fixed w-full z-[11] top-0 bg-white flex items-center justify-center py-[24px] 
    shadow-[0_3px_6px_0_#0000001A,0_11px_11px_0_#00000017,0_25px_15px_0_#0000000D,0_45px_18px_0_#00000003,0_70px_20px_0_#00000000]"
      role="banner"
    >
      <div className="w-full mx-auto flex items-center justify-center lg:justify-start lg:ml-[100px]">
        <a href="/" aria-label="Herself Health home" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-pink.svg`}
            alt="Herself Health logo"
            className="h-auto w-auto"
          />
          <span className="sr-only">Herself Health</span>
        </a>
      </div>
    </header>
  );
}
