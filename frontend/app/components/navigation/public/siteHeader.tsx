import MainNav from './mainNav';
import MobileNav from './mobileNav';

export default function SiteHeader() {
  return (
    <header className="w-full  border-b">
      <div className="container flex h-14 items-center">
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
}