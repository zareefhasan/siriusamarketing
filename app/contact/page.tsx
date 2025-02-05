"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useState } from "react"

export default function ContactPage() {
  const [phone, setPhone] = useState("+44")

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-purple-800/20 bg-[#1A1A2E]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-purple-800/20 bg-purple-900/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-purple-800/20 bg-purple-900/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <PhoneInput
                    country={"gb"}
                    value={phone}
                    onChange={setPhone}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      border: "1px solid rgba(124, 58, 237, 0.2)",
                      color: "white",
                    }}
                    dropdownStyle={{
                      backgroundColor: "#1A1A2E",
                      color: "white",
                    }}
                    buttonStyle={{
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      borderColor: "rgba(124, 58, 237, 0.2)",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[100px] border-purple-800/20 bg-purple-900/10 text-white"
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-purple-800/20 bg-[#1A1A2E]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-500" />
                  <p>123 AI Street, Tech City, TC 12345</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-500" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-500" />
                  <p>contact@aitool.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-800/20 bg-[#1A1A2E]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492404069!3d40.75889083441755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1706104000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

