"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart, Palette, Megaphone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { MobileNav } from "./MobileNav";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 ${
        isScrolled ? "bg-[#0D0B21]/80 backdrop-blur-md" : "bg-[#0D0B21]"
      } transition-colors duration-300 py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between transition-colors duration-300">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold text-white">AI Tool</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-900/50 px-3 py-2 relative group">
                    Services
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#1A1A2E] rounded-lg shadow-lg">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital-marketing"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/50 focus:bg-purple-900/50"
                          >
                            <div className="flex items-center gap-2">
                              <BarChart className="h-4 w-4 text-purple-500" />
                              <div className="text-sm font-medium leading-none text-white">
                                Digital Marketing
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              SEO, PPC, and social media marketing strategies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/creative-media"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/50 focus:bg-purple-900/50"
                          >
                            <div className="flex items-center gap-2">
                              <Palette className="h-4 w-4 text-purple-500" />
                              <div className="text-sm font-medium leading-none text-white">
                                Creative Media
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Design, content creation, and multimedia
                              production
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/brand-promotion"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/50 focus:bg-purple-900/50"
                          >
                            <div className="flex items-center gap-2">
                              <Megaphone className="h-4 w-4 text-purple-500" />
                              <div className="text-sm font-medium leading-none text-white">
                                Brand Promotion
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Brand strategy, PR, and influencer marketing
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/case-studies"
              className="text-white hover:text-purple-400 relative group"
            >
              Case Studies
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="#pricing"
              className="text-white hover:text-purple-400 relative group"
            >
              Pricing
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white ml-2 transition-colors duration-300">
                Get in touch
              </Button>
            </Link>
          </div>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
