import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import navigationLinks from "@/assets/navigation";
import { ModeToggle } from "../ui/mode-toggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <div className="w-full p-2 flex items-center sticky top-0 z-50 bg-white/80 dark:bg-slate-950 backdrop-blur-md">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navigationLinks} />
          <ModeToggle />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex w-full items-center justify-between">
              <NavbarLogo />
              <div className="flex items-center gap-2">
                <ModeToggle />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navigationLinks.map((item, idx) => (
              <span
                key={`mobile-link-${idx}`}
                onClick={() => {
                  const el = document.getElementById(item.path);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                {item.label}
              </span>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
