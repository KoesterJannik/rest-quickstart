import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col space-y-4 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.to
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full">
              <Link to="/register" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}