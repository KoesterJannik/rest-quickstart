import { Link, useLocation } from 'react-router';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function MainNav() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <div className="flex flex-1 items-center justify-between">
      <nav className="mr-4 hidden gap-6 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              location.pathname === item.to
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex">
        <Button asChild>
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}