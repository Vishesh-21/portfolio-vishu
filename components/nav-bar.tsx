import Link from "next/link";
import { Home, FileBracesCorner, Github, Linkedin } from "lucide-react";
import { ToggleModeButton } from "./toggle-theme";

export const NavBar = () => {
  const navItems = [
    {
      title: "Home",
      href: "#home",
      Icon: Home,
    },
    {
      title: "Projects",
      href: "#projects",
      Icon: FileBracesCorner,
    },
    {
      title: "GitHub",
      href: "https://github.com",
      Icon: Github,
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com",
      Icon: Linkedin,
    },
  ];

  return (
    <header className="sticky top-0 left-0 z-50 w-full">
      <div className="flex justify-end px-4 py-5 backdrop-blur-md md:px-2">
        <nav className="border-border bg-background/70 relative flex max-w-fit items-center gap-2 rounded-full border p-1 shadow-lg overflow-hidden">
          {/* glow line  */}
          <div className="absolute top-0 left-0 h-px w-1/2 bg-linear-to-r from-transparent dark:via-foreground/40 to-transparent"></div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-1">
            {navItems.map(({ title, href, Icon }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <span className="bg-border mx-1 h-6 w-px" />

          {/* Theme Toggle */}
          <ToggleModeButton />
        </nav>
      </div>
    </header>
  );
};
