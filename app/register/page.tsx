"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, User, Plane, Award, FileText, CheckCircle } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    ivaoVid: "",
    division: "",
    currentRating: "",
    flightHours: "",
    experience: "",
    motivation: "",
    specializations: [] as string[],
    agreeTerms: false,
    agreePrivacy: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const handleSpecializationChange = (specialization: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        specializations: [...prev.specializations, specialization],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        specializations: prev.specializations.filter((s) => s !== specialization),
      }))
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <CardTitle className="text-white text-2xl">Application Submitted!</CardTitle>
            <CardDescription className="text-slate-300">
              Thank you for your interest in joining IVAO Special Operations. We'll review your application and contact
              you within 5-7 business days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                <h4 className="text-white font-semibold mb-2">What's Next?</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Application review by our recruitment team</li>
                  <li>• Background check of IVAO history</li>
                  <li>• Interview scheduling (if selected)</li>
                  <li>• Skills assessment flight</li>
                </ul>
              </div>
              <Link href="/" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Return to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">IVAO SpecOps</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/pilots" className="text-slate-300 hover:text-blue-400 transition-colors">
                Pilots
              </Link>
              <Link href="/fleet" className="text-slate-300 hover:text-blue-400 transition-colors">
                Fleet
              </Link>
              <Link href="/ivao" className="text-slate-300 hover:text-blue-400 transition-colors">
                IVAO
              </Link>
              <Link href="/register" className="text-white hover:text-blue-400 transition-colors">
                Join Us
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join <span className="text-blue-400">Special Operations</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Apply to become part of IVAO's most elite virtual aviation unit. We're looking for skilled, dedicated
              pilots ready for challenging missions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Personal Information</CardTitle>
                </div>
                <CardDescription className="text-slate-300">Basic information about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      className="bg-slate-900/50 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      className="bg-slate-900/50 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-slate-900/50 border-slate-600 text-white"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* IVAO Information */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">IVAO Information</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Your IVAO network details and current status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ivaoVid" className="text-white">
                      IVAO VID *
                    </Label>
                    <Input
                      id="ivaoVid"
                      value={formData.ivaoVid}
                      onChange={(e) => setFormData((prev) => ({ ...prev, ivaoVid: e.target.value }))}
                      placeholder="e.g., 1234567"
                      className="bg-slate-900/50 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="division" className="text-white">
                      IVAO Division *
                    </Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, division: value }))}>
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select your division" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="US">United States (US)</SelectItem>
                        <SelectItem value="EU">Europe (EU)</SelectItem>
                        <SelectItem value="AS">Asia (AS)</SelectItem>
                        <SelectItem value="SA">South America (SA)</SelectItem>
                        <SelectItem value="AF">Africa (AF)</SelectItem>
                        <SelectItem value="OC">Oceania (OC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentRating" className="text-white">
                      Current Pilot Rating *
                    </Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, currentRating: value }))}>
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select your rating" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="FS1">FS1 - Flight Student 1</SelectItem>
                        <SelectItem value="FS2">FS2 - Flight Student 2</SelectItem>
                        <SelectItem value="FS3">FS3 - Flight Student 3</SelectItem>
                        <SelectItem value="PP">PP - Private Pilot</SelectItem>
                        <SelectItem value="SPP">SPP - Senior Private Pilot</SelectItem>
                        <SelectItem value="CP">CP - Commercial Pilot</SelectItem>
                        <SelectItem value="ATP">ATP - Airline Transport Pilot</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="flightHours" className="text-white">
                      Total Flight Hours *
                    </Label>
                    <Input
                      id="flightHours"
                      type="number"
                      value={formData.flightHours}
                      onChange={(e) => setFormData((prev) => ({ ...prev, flightHours: e.target.value }))}
                      placeholder="e.g., 1500"
                      className="bg-slate-900/50 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience & Qualifications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Experience & Qualifications</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Tell us about your aviation experience and areas of expertise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white mb-3 block">Areas of Specialization</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Fighter Aircraft",
                      "Transport Operations",
                      "Helicopter Operations",
                      "Formation Flying",
                      "Air-to-Air Refueling",
                      "Night Operations",
                      "Instrument Flying",
                      "Military Procedures",
                      "Search & Rescue",
                      "Tactical Operations",
                      "Electronic Warfare",
                      "Reconnaissance",
                    ].map((specialization) => (
                      <div key={specialization} className="flex items-center space-x-2">
                        <Checkbox
                          id={specialization}
                          checked={formData.specializations.includes(specialization)}
                          onCheckedChange={(checked) => handleSpecializationChange(specialization, checked as boolean)}
                          className="border-slate-600"
                        />
                        <Label htmlFor={specialization} className="text-slate-300 text-sm">
                          {specialization}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="experience" className="text-white">
                    Previous Experience *
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                    placeholder="Describe your virtual aviation experience, previous squadrons, achievements, and relevant qualifications..."
                    className="bg-slate-900/50 border-slate-600 text-white min-h-[120px]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="motivation" className="text-white">
                    Why do you want to join Special Operations? *
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData((prev) => ({ ...prev, motivation: e.target.value }))}
                    placeholder="Tell us what motivates you to join our elite unit and what you hope to contribute..."
                    className="bg-slate-900/50 border-slate-600 text-white min-h-[120px]"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Terms & Conditions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))}
                    className="border-slate-600 mt-1"
                    required
                  />
                  <Label htmlFor="agreeTerms" className="text-slate-300 text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-400 hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and understand that membership in Special Operations requires commitment to training,
                    professionalism, and adherence to military-style procedures.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreePrivacy: checked as boolean }))
                    }
                    className="border-slate-600 mt-1"
                    required
                  />
                  <Label htmlFor="agreePrivacy" className="text-slate-300 text-sm">
                    I agree to the{" "}
                    <Link href="/privacy" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to the processing of my personal data for recruitment purposes.
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12"
                disabled={!formData.agreeTerms || !formData.agreePrivacy}
              >
                Submit Application
              </Button>
              <p className="text-slate-400 text-sm mt-4">
                Applications are reviewed within 5-7 business days. You'll receive an email confirmation shortly after
                submission.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
