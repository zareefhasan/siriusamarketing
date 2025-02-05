"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { subscribe } from "@/app/actions/subscribe";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      className="bg-purple-600 hover:bg-purple-700 rounded-full shrink-0"
      disabled={pending}
    >
      {pending ? (
        <span className="animate-spin">↻</span>
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </Button>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-2 sm:mb-4">
          {/* Newsletter Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-light mb-4">
              Stay in touch with the herd and receive up to date insights,
              strategies and news.
            </h3>
            <form
              action={async (formData) => {
                const result = await subscribe(formData);
                if (result.error) {
                  toast.error(result.error);
                } else if (result.success) {
                  toast.success(result.success);
                }
              }}
              className="flex gap-2 max-w-md"
            >
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#1A1A2E] border-purple-800/20"
                required
              />
              <SubscribeButton />
            </form>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm text-gray-400 mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-purple-400"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/creative-media"
                  className="hover:text-purple-400"
                >
                  Creative Media
                </Link>
              </li>
              <li>
                <Link
                  href="/services/brand-promotion"
                  className="hover:text-purple-400"
                >
                  Brand Promotion
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm text-gray-400 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-purple-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm text-gray-400 mb-4">
              Don&apos;t be a stranger
            </h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-purple-400">UK –</span>
                <a
                  href="mailto:hello@aitool.com"
                  className="hover:text-purple-400"
                >
                  hello@aitool.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-400">US –</span>
                <a
                  href="mailto:hi@aitool.com"
                  className="hover:text-purple-400"
                >
                  hi@aitool.com
                </a>
              </p>
              <Button
                variant="outline"
                className="mt-4 border-purple-800/20 hover:bg-purple-900/50"
              >
                We&apos;re Hiring
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 pb-0 border-t border-purple-800/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-6">
            <p className="text-sm text-gray-400">
              © 2025 AI Tool. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-purple-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-purple-400"
            >
              Terms and Conditions
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-0">
            {[
              {
                name: "facebook",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                ),
              },
              {
                name: "linkedin",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                ),
              },
              {
                name: "instagram",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ),
              },
              {
                name: "twitter",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                ),
              },
            ].map((social) => (
              <Link
                key={social.name}
                href={`https://${social.name}.com`}
                className="w-8 h-8 rounded-full bg-[#0D0B21] flex items-center justify-center hover:bg-purple-900/50 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <Link
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="icon"
          className="fixed bottom-8 sm:bottom-4 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </Link>
    </footer>
  );
}
