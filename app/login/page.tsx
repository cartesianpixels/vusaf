"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Globe, Lock, User, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"ivao" | "manual">("ivao")
  const [formData, setFormData] = useState({
    vid: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleIVAOLogin = () => {
    setIsLoading(true)
    // In a real implementation, this would redirect to IVAO OAuth
    // For demo purposes, we'll simulate the OAuth flow
    setTimeout(() => {
      // Simulate OAuth redirect
      window.location.href = "/dashboard"
    }, 2000)
  }

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login validation
    setTimeout(() => {
      if (formData.vid && formData.password) {
        window.location.href = "/dashboard"
      } else {
        setError("Please enter both VID and password")
        setIsLoading(false)
      }
    }, 1000)
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
              <Link href="/register" className="text-slate-300 hover:text-blue-400 transition-colors">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <section className="py-16 px-4 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Member <span className="text-blue-400">Login</span>
            </h1>
            <p className="text-slate-300">Access your Special Operations member dashboard</p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-center">Choose Login Method</CardTitle>
              <CardDescription className="text-slate-300 text-center">
                Login with your IVAO account or member credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Login Method Selection */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={loginMethod === "ivao" ? "default" : "outline"}
                  onClick={() => setLoginMethod("ivao")}
                  className={
                    loginMethod === "ivao" ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-slate-300"
                  }
                >
                  <Globe className="h-4 w-4 mr-2" />
                  IVAO OAuth
                </Button>
                <Button
                  variant={loginMethod === "manual" ? "default" : "outline"}
                  onClick={() => setLoginMethod("manual")}
                  className={
                    loginMethod === "manual" ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-slate-300"
                  }
                >
                  <User className="h-4 w-4 mr-2" />
                  Manual Login
                </Button>
              </div>

              {error && (
                <Alert className="border-red-600 bg-red-900/20">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-300">{error}</AlertDescription>
                </Alert>
              )}

              {loginMethod === "ivao" ? (
                <div className="space-y-4">
                  <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                    <div className="flex items-center space-x-3 mb-3">
                      <Globe className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-semibold">IVAO OAuth Login</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                      Login securely using your IVAO account. This will automatically fetch your VID and division
                      information.
                    </p>
                    <ul className="text-slate-400 text-xs space-y-1">
                      <li>• Secure OAuth 2.0 authentication</li>
                      <li>• Automatic profile synchronization</li>
                      <li>• No password required</li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleIVAOLogin}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Redirecting to IVAO...
                      </>
                    ) : (
                      <>
                        <Globe className="h-4 w-4 mr-2" />
                        Login with IVAO
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleManualLogin} className="space-y-4">
                  <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                    <div className="flex items-center space-x-3 mb-3">
                      <Lock className="h-5 w-5 text-yellow-400" />
                      <span className="text-white font-semibold">Manual Login</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      For members who prefer to login with their VID and password.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="vid" className="text-white">
                      IVAO VID
                    </Label>
                    <Input
                      id="vid"
                      type="text"
                      value={formData.vid}
                      onChange={(e) => setFormData((prev) => ({ ...prev, vid: e.target.value }))}
                      placeholder="Enter your IVAO VID"
                      className="bg-slate-900/50 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter your password"
                      className="bg-slate-900/50 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Login
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="text-center space-y-2">
                <Link href="/forgot-password" className="text-blue-400 hover:underline text-sm">
                  Forgot your password?
                </Link>
                <div className="text-slate-400 text-sm">
                  Not a member yet?{" "}
                  <Link href="/register" className="text-blue-400 hover:underline">
                    Apply to join
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 bg-slate-800/30 p-4 rounded border border-slate-700">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-400 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold text-sm">Secure Login</h4>
                <p className="text-slate-400 text-xs mt-1">
                  Your login is protected by industry-standard encryption. We recommend using IVAO OAuth for the most
                  secure experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
