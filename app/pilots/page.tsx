import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, Users, Search, Star, Award, Clock } from "lucide-react"

const pilots = [
  {
    id: 1,
    name: "Captain John Mitchell",
    rank: "Squadron Leader",
    vid: "1234567",
    division: "US",
    rating: "ATP",
    hours: 2500,
    specializations: ["Fighter Jets", "Transport", "Tactical"],
    achievements: ["Top Gun Graduate", "Mission Commander", "Instructor Pilot"],
    status: "Active",
    joinDate: "2020-03-15",
  },
  {
    id: 2,
    name: "Major Sarah Chen",
    rank: "Flight Commander",
    vid: "2345678",
    division: "AS",
    rating: "ATP",
    hours: 3200,
    specializations: ["Helicopters", "Search & Rescue", "Night Ops"],
    achievements: ["Rescue Specialist", "Night Vision Certified", "Team Leader"],
    status: "Active",
    joinDate: "2019-08-22",
  },
  {
    id: 3,
    name: "Lieutenant Alex Rodriguez",
    rank: "Pilot Officer",
    vid: "3456789",
    division: "EU",
    rating: "CPL",
    hours: 1800,
    specializations: ["Reconnaissance", "Stealth Ops", "Electronic Warfare"],
    achievements: ["Stealth Certified", "EW Specialist", "Recon Expert"],
    status: "Active",
    joinDate: "2021-01-10",
  },
  {
    id: 4,
    name: "Commander Maria Santos",
    rank: "Wing Commander",
    vid: "4567890",
    division: "SA",
    rating: "ATP",
    hours: 4100,
    specializations: ["Strategic Bombing", "Formation Flying", "Leadership"],
    achievements: ["Formation Leader", "Strategic Ops", "Command Certified"],
    status: "Active",
    joinDate: "2018-11-05",
  },
  {
    id: 5,
    name: "Captain David Kim",
    rank: "Squadron Leader",
    vid: "5678901",
    division: "AS",
    rating: "ATP",
    hours: 2800,
    specializations: ["Air-to-Air Combat", "Interceptor", "Training"],
    achievements: ["Combat Ace", "Interceptor Specialist", "Flight Instructor"],
    status: "Active",
    joinDate: "2020-07-18",
  },
  {
    id: 6,
    name: "Major Emma Thompson",
    rank: "Flight Commander",
    vid: "6789012",
    division: "EU",
    rating: "ATP",
    hours: 3500,
    specializations: ["Cargo Operations", "Heavy Lift", "Logistics"],
    achievements: ["Logistics Expert", "Heavy Lift Certified", "Operations Manager"],
    status: "Active",
    joinDate: "2019-04-12",
  },
]

export default function PilotsPage() {
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
              <Link href="/pilots" className="text-white hover:text-blue-400 transition-colors">
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

      {/* Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Elite Pilots</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the highly skilled aviators who make up our special operations unit. Each pilot brings unique
              expertise and dedication to virtual aviation excellence.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search pilots by name, rank, or specialization..."
                className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{pilots.length}</div>
                <div className="text-slate-300">Active Pilots</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-slate-300">Wing Commanders</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">18,400</div>
                <div className="text-slate-300">Total Flight Hours</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-slate-300">Specializations</div>
              </CardContent>
            </Card>
          </div>

          {/* Pilots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilots.map((pilot) => (
              <Card
                key={pilot.id}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-lg">{pilot.name}</CardTitle>
                      <CardDescription className="text-blue-400 font-semibold">{pilot.rank}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                      {pilot.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Basic Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">VID:</span>
                        <div className="text-white font-mono">{pilot.vid}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Division:</span>
                        <div className="text-white">{pilot.division}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Rating:</span>
                        <div className="text-white">{pilot.rating}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Hours:</span>
                        <div className="text-white">{pilot.hours.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <span className="text-slate-400 text-sm">Specializations:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {pilot.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <span className="text-slate-400 text-sm">Achievements:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {pilot.achievements.slice(0, 2).map((achievement, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-blue-900/50 text-blue-300">
                            {achievement}
                          </Badge>
                        ))}
                        {pilot.achievements.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            +{pilot.achievements.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Join Date */}
                    <div className="text-xs text-slate-400 pt-2 border-t border-slate-700">
                      Joined: {new Date(pilot.joinDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Elite Team?</h3>
            <p className="text-slate-300 mb-6">
              We're always looking for skilled pilots to join our special operations unit.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
