import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Globe,
  Plane,
  Users,
  Clock,
  MapPin,
  Wind,
  Cloud,
  ExternalLink,
  Activity,
  Radio,
  Navigation,
} from "lucide-react"

// Mock data for demonstration
const liveFlights = [
  {
    callsign: "SOG001",
    pilot: "John Mitchell",
    aircraft: "F-16C",
    departure: "EGLL",
    arrival: "LFPG",
    altitude: "FL350",
    speed: "450 kts",
    status: "En Route",
  },
  {
    callsign: "SOG002",
    pilot: "Sarah Chen",
    aircraft: "AH-64D",
    departure: "KJFK",
    arrival: "KBOS",
    altitude: "2500 ft",
    speed: "120 kts",
    status: "Approach",
  },
  {
    callsign: "SOG003",
    pilot: "Alex Rodriguez",
    aircraft: "C-130J",
    departure: "EDDF",
    arrival: "LIRF",
    altitude: "FL280",
    speed: "320 kts",
    status: "Cruise",
  },
]

const weatherData = [
  {
    icao: "EGLL",
    name: "London Heathrow",
    metar: "EGLL 121320Z 27008KT 9999 FEW035 SCT250 09/03 Q1023 NOSIG",
    conditions: "Few clouds at 3500ft",
  },
  {
    icao: "KJFK",
    name: "New York JFK",
    metar: "KJFK 121251Z 28012G18KT 10SM FEW250 08/M07 A3015 RMK AO2 SLP221",
    conditions: "Clear skies, gusty winds",
  },
  {
    icao: "EDDF",
    name: "Frankfurt",
    metar: "EDDF 121320Z 25015KT 9999 SCT040 BKN100 07/02 Q1021 NOSIG",
    conditions: "Scattered clouds at 4000ft",
  },
]

const ivaoStats = {
  totalPilots: 1247,
  totalControllers: 89,
  activeFlights: 156,
  onlineUsers: 1336,
}

export default function IVAOPage() {
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
              <Link href="/ivao" className="text-white hover:text-blue-400 transition-colors">
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
              <span className="text-blue-400">IVAO</span> Integration
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time data, flight tracking, and comprehensive IVAO network integration. Stay connected with the
              global virtual aviation community.
            </p>
          </div>

          {/* IVAO Network Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{ivaoStats.totalPilots.toLocaleString()}</div>
                <div className="text-slate-300">Online Pilots</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Radio className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{ivaoStats.totalControllers}</div>
                <div className="text-slate-300">Controllers</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Plane className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{ivaoStats.activeFlights}</div>
                <div className="text-slate-300">Active Flights</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Activity className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{ivaoStats.onlineUsers.toLocaleString()}</div>
                <div className="text-slate-300">Total Online</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
              <TabsTrigger value="flights" className="data-[state=active]:bg-blue-600">
                Live Flights
              </TabsTrigger>
              <TabsTrigger value="weather" className="data-[state=active]:bg-blue-600">
                Weather
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-blue-600">
                Resources
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-blue-600">
                Tools
              </TabsTrigger>
            </TabsList>

            {/* Live Flights Tab */}
            <TabsContent value="flights" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Special Operations Live Flights</h2>
                  <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                    <Activity className="h-3 w-3 mr-1" />
                    Live Data
                  </Badge>
                </div>

                <div className="grid gap-4">
                  {liveFlights.map((flight, index) => (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                          <div>
                            <div className="text-white font-bold text-lg">{flight.callsign}</div>
                            <div className="text-slate-400 text-sm">{flight.pilot}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-sm">Aircraft</div>
                            <div className="text-white">{flight.aircraft}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-sm">Route</div>
                            <div className="text-white">
                              {flight.departure} → {flight.arrival}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-sm">Altitude</div>
                            <div className="text-white">{flight.altitude}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-sm">Speed</div>
                            <div className="text-white">{flight.speed}</div>
                          </div>
                          <div>
                            <Badge
                              variant="secondary"
                              className={
                                flight.status === "En Route"
                                  ? "bg-blue-900/50 text-blue-300"
                                  : flight.status === "Approach"
                                    ? "bg-yellow-900/50 text-yellow-300"
                                    : "bg-green-900/50 text-green-300"
                              }
                            >
                              {flight.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Full Flight Tracker
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Weather Tab */}
            <TabsContent value="weather" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Real-Time Weather Data</h2>
                  <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                    <Cloud className="h-3 w-3 mr-1" />
                    METAR Data
                  </Badge>
                </div>

                <div className="grid gap-6">
                  {weatherData.map((weather, index) => (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-white">{weather.name}</CardTitle>
                            <CardDescription className="text-blue-400 font-mono text-lg">
                              {weather.icao}
                            </CardDescription>
                          </div>
                          <Wind className="h-8 w-8 text-slate-400" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="text-slate-400 text-sm mb-1">METAR</div>
                            <div className="text-white font-mono text-sm bg-slate-900/50 p-3 rounded border border-slate-600">
                              {weather.metar}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-sm mb-1">Conditions</div>
                            <div className="text-white">{weather.conditions}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Advanced Weather Tools
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">IVAO Resources & Links</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <Globe className="h-8 w-8 text-blue-400 mb-2" />
                      <CardTitle className="text-white">IVAO Official Website</CardTitle>
                      <CardDescription className="text-slate-300">
                        Main IVAO portal with news, events, and network information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit IVAO.aero
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <Users className="h-8 w-8 text-green-400 mb-2" />
                      <CardTitle className="text-white">Pilot Training Center</CardTitle>
                      <CardDescription className="text-slate-300">
                        Access training materials, exams, and certification programs
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Training Portal
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <MapPin className="h-8 w-8 text-yellow-400 mb-2" />
                      <CardTitle className="text-white">Flight Planning</CardTitle>
                      <CardDescription className="text-slate-300">
                        Professional flight planning tools and route optimization
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Flight Planner
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <Radio className="h-8 w-8 text-purple-400 mb-2" />
                      <CardTitle className="text-white">ATC Resources</CardTitle>
                      <CardDescription className="text-slate-300">
                        Air traffic control procedures, charts, and documentation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        ATC Center
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <Navigation className="h-8 w-8 text-red-400 mb-2" />
                      <CardTitle className="text-white">Charts & Navigation</CardTitle>
                      <CardDescription className="text-slate-300">
                        Approach charts, SIDs, STARs, and navigation aids
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Chart Library
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <Clock className="h-8 w-8 text-orange-400 mb-2" />
                      <CardTitle className="text-white">Events Calendar</CardTitle>
                      <CardDescription className="text-slate-300">
                        Upcoming IVAO events, fly-ins, and special operations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Events
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Aviation Tools & Utilities</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Flight Tracker</CardTitle>
                      <CardDescription className="text-slate-300">
                        Real-time tracking of all IVAO flights with detailed information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                          <div className="text-center text-slate-300">
                            Interactive flight map would be embedded here
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Open Full Tracker</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">METAR/TAF Decoder</CardTitle>
                      <CardDescription className="text-slate-300">
                        Decode weather reports and forecasts for flight planning
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                          <div className="text-center text-slate-300">Weather decoder tool interface</div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Open Decoder</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Route Planner</CardTitle>
                      <CardDescription className="text-slate-300">
                        Plan optimal routes with waypoints, airways, and fuel calculations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                          <div className="text-center text-slate-300">Route planning interface</div>
                        </div>
                        <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Plan Route</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Performance Calculator</CardTitle>
                      <CardDescription className="text-slate-300">
                        Calculate takeoff, landing, and cruise performance data
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                          <div className="text-center text-slate-300">Performance calculation tools</div>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Calculate Performance</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Links Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Quick Access</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                IVAO Pilot Center
              </Button>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Network Statistics
              </Button>
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Download Software
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Community Forums
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
