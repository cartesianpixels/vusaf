import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Shield, Globe, ArrowRight, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">IVAO SpecOps</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
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

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-blue-900/50 text-blue-300 border-blue-400">
              Elite Virtual Aviation Unit
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              IVAO Special
              <span className="text-blue-400"> Operations</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join the most elite virtual aviation unit in IVAO. Precision flying, tactical operations, and professional
              excellence in virtual skies worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pilots">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Meet Our Pilots
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-slate-300">Active Pilots</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25</div>
              <div className="text-slate-300">Aircraft Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
              <div className="text-slate-300">Flight Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Elite Pilots</CardTitle>
                <CardDescription className="text-slate-300">
                  Join a community of highly skilled virtual pilots with extensive IVAO experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Plane className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Advanced Fleet</CardTitle>
                <CardDescription className="text-slate-300">
                  Access to military and civilian aircraft with detailed specifications and capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">IVAO Integration</CardTitle>
                <CardDescription className="text-slate-300">
                  Real-time flight tracking, weather data, and seamless IVAO network integration
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Operations */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Operation Thunder Strike",
                date: "2024-01-15",
                location: "EGLL - KJFK",
                participants: 12,
                status: "Completed",
              },
              {
                title: "Arctic Rescue Mission",
                date: "2024-01-10",
                location: "BIKF - BGBW",
                participants: 8,
                status: "Completed",
              },
              {
                title: "Desert Storm Exercise",
                date: "2024-01-05",
                location: "OMDB - OERK",
                participants: 15,
                status: "Completed",
              },
            ].map((operation, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{operation.title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                      {operation.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4" />
                      {operation.location}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Users className="h-4 w-4" />
                      {operation.participants} pilots
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join the Elite?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Take your virtual aviation skills to the next level. Apply now to become part of IVAO's most prestigious
            special operations unit.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">IVAO SpecOps</span>
              </div>
              <p className="text-slate-400">Elite virtual aviation operations within the IVAO network.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/pilots" className="block text-slate-400 hover:text-blue-400">
                  Pilots
                </Link>
                <Link href="/fleet" className="block text-slate-400 hover:text-blue-400">
                  Fleet
                </Link>
                <Link href="/ivao" className="block text-slate-400 hover:text-blue-400">
                  IVAO
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Join Us</h3>
              <div className="space-y-2">
                <Link href="/register" className="block text-slate-400 hover:text-blue-400">
                  Apply Now
                </Link>
                <Link href="/login" className="block text-slate-400 hover:text-blue-400">
                  Member Login
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-slate-400">
                Email: ops@ivaospecops.org
                <br />
                Discord: IVAO SpecOps
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 IVAO Special Operations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
