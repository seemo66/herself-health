export default function Footer() {
  return (
    <header className="w-full z-[11] top-0 bg-pink flex items-center justify-center py-[45px]">
      <div className="w-full mx-auto flex items-center justify-center">
        <a href="/" aria-label="Herself Health home" className="flex items-center">
          <img src="/images/logo-white.svg" alt="Herself Health logo" className="h-auto w-auto" />
          <span className="sr-only">Herself Health</span>
        </a>
      </div>
    </header>
  );
}
