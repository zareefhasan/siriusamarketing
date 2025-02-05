"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu, Sparkles, BarChart, Palette, Megaphone } from 'lucide-react'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-[#0D0B21] border-purple-800/20">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">AI Tool</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-purple-800/20">
              <AccordionTrigger className="text-white hover:text-purple-400">Services</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    href="/services/digital-marketing"
                    className="flex items-center gap-2 py-2 text-gray-400 hover:text-purple-400"
                  >
                    <BarChart className="h-4 w-4" />
                    Digital Marketing
                  </Link>
                  <Link
                    href="/services/creative-media"
                    className="flex items-center gap-2 py-2 text-gray-400 hover:text-purple-400"
                  >
                    <Palette className="h-4 w-4" />
                    Creative Media
                  </Link>
                  <Link
                    href="/services/brand-promotion"
                    className="flex items-center gap-2 py-2 text-gray-400 hover:text-purple-400"
                  >
                    <Megaphone className="h-4 w-4" />
                    Brand Promotion
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link href="#features" className="text-white hover:text-purple-400 py-2">
            Features
          </Link>
          <Link href="#pricing" className="text-white hover:text-purple-400 py-2">
            Pricing
          </Link>
          <Link href="/blog" className="text-white hover:text-purple-400 py-2">
            Blog
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-400 py-2">
            Contact
          </Link>
          <Link href="/contact">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Get in touch
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

