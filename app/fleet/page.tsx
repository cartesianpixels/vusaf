import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Plane, Zap, Users, Navigation } from "lucide-react"

const aircraft = [
  {
    id: 1,
    name: "F-16C Fighting Falcon",
    type: "Fighter",
    manufacturer: "General Dynamics",
    role: "Multi-role Fighter",
    crew: 1,
    maxSpeed: "Mach 2.0",
    range: "2,280 nm",
    ceiling: "50,000 ft",
    armament: "20mm cannon, missiles, bombs",
    avionics: "AN/APG-68 radar, advanced EW suite",
    capabilities: ["Air-to-Air Combat", "Ground Attack", "SEAD", "Reconnaissance"],
    status: "Active",
    quantity: 8,
  },
  {
    id: 2,
    name: "C-130J Super Hercules",
    type: "Transport",
    manufacturer: "Lockheed Martin",
    role: "Tactical Transport",
    crew: 3,
    maxSpeed: "417 mph",
    range: "2,835 nm",
    ceiling: "28,000 ft",
    payload: "42,000 lbs",
    avionics: "Glass cockpit, advanced navigation",
    capabilities: ["Cargo Transport", "Troop Transport", "Airdrop", "Medical Evacuation"],
    status: "Active",
    quantity: 4,
  },
  {
    id: 3,
    name: "AH-64D Apache",
    type: "Attack Helicopter",
    manufacturer: "Boeing",
    role: "Attack Helicopter",
    crew: 2,
    maxSpeed: "182 mph",
    range: "300 nm",
    ceiling: "21,000 ft",
    armament: "30mm chain gun, Hellfire missiles, rockets",
    avionics: "Longbow radar, FLIR, advanced targeting",
    capabilities: ["Close Air Support", "Anti-Tank", "Reconnaissance", "Escort"],
    status: "Active",
    quantity: 6,
  },
  {
    id: 4,
    name: "KC-135 Stratotanker",
    type: "Tanker",
    manufacturer: "Boeing",
    role: "Aerial Refueling",
    crew: 4,
    maxSpeed: "530 mph",
    range: "1,500 nm",
    ceiling: "50,000 ft",
    fuelCapacity: "200,000 lbs",
    avionics: "Advanced navigation, boom operator station",
    capabilities: ["Aerial Refueling", "Cargo Transport", "Strategic Mobility"],
    status: "Active",
    quantity: 2,
  },
  {
    id: 5,
    name: "MQ-9 Reaper",
    type: "UAV",
    manufacturer: "General Atomics",
    role: "Unmanned Combat Aircraft",
    crew: 0,
    maxSpeed: "300 mph",
    range: "1,150 nm",
    ceiling: "50,000 ft",
    endurance: "14 hours",
    avionics: "Multi-spectral targeting system, satellite comms",
    capabilities: ["ISR", "Precision Strike", "Electronic Warfare", "Long Endurance"],
    status: "Active",
    quantity: 3,
  },
  {
    id: 6,
    name: "V-22 Osprey",
    type: "Tiltrotor",
    manufacturer: "Bell Boeing",
    role: "Multi-mission Aircraft",
    crew: 4,
    maxSpeed: "351 mph",
    range: "879 nm",
    ceiling: "25,000 ft",
    payload: "24 troops or 20,000 lbs cargo",
    avionics: "Glass cockpit, advanced flight controls",
    capabilities: ["Troop Transport", "Cargo Transport", "Special Operations", "MEDEVAC"],
    status: "Active",
    quantity: 2,
  },
]

export default function FleetPage() {
  const fighterAircraft = aircraft.filter((a) => a.type === "Fighter" || a.type === "Attack Helicopter")
  const transportAircraft = aircraft.filter(
    (a) => a.type === "Transport" || a.type === "Tanker" || a.type === "Tiltrotor",
  )
  const specialAircraft = aircraft.filter((a) => a.type === "UAV")

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
              <Link href="/fleet" className="text-white hover:text-blue-400 transition-colors">
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
              Our <span className="text-blue-400">Fleet</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive fleet of military and specialized aircraft. Each platform is carefully selected
              for specific operational requirements and mission capabilities.
            </p>
          </div>

          {/* Fleet Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Plane className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{aircraft.reduce((sum, a) => sum + a.quantity, 0)}</div>
                <div className="text-slate-300">Total Aircraft</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {fighterAircraft.reduce((sum, a) => sum + a.quantity, 0)}
                </div>
                <div className="text-slate-300">Combat Aircraft</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {transportAircraft.reduce((sum, a) => sum + a.quantity, 0)}
                </div>
                <div className="text-slate-300">Support Aircraft</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-6">
                <Navigation className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{aircraft.length}</div>
                <div className="text-slate-300">Aircraft Types</div>
              </CardContent>
            </Card>
          </div>

          {/* Aircraft Categories */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
                All Aircraft
              </TabsTrigger>
              <TabsTrigger value="combat" className="data-[state=active]:bg-blue-600">
                Combat
              </TabsTrigger>
              <TabsTrigger value="transport" className="data-[state=active]:bg-blue-600">
                Transport
              </TabsTrigger>
              <TabsTrigger value="special" className="data-[state=active]:bg-blue-600">
                Special Ops
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {aircraft.map((plane) => (
                  <Card key={plane.id} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white text-xl">{plane.name}</CardTitle>
                          <CardDescription className="text-blue-400 font-semibold">{plane.role}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="bg-green-900/50 text-green-300 mb-2">
                            {plane.status}
                          </Badge>
                          <div className="text-sm text-slate-400">Qty: {plane.quantity}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Basic Specifications */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-400">Manufacturer:</span>
                            <div className="text-white">{plane.manufacturer}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Crew:</span>
                            <div className="text-white">{plane.crew}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Max Speed:</span>
                            <div className="text-white">{plane.maxSpeed}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Range:</span>
                            <div className="text-white">{plane.range}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Service Ceiling:</span>
                            <div className="text-white">{plane.ceiling}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Type:</span>
                            <div className="text-white">{plane.type}</div>
                          </div>
                        </div>

                        {/* Additional Specs */}
                        {plane.armament && (
                          <div>
                            <span className="text-slate-400 text-sm">Armament:</span>
                            <div className="text-white text-sm">{plane.armament}</div>
                          </div>
                        )}
                        {plane.payload && (
                          <div>
                            <span className="text-slate-400 text-sm">Payload:</span>
                            <div className="text-white text-sm">{plane.payload}</div>
                          </div>
                        )}
                        {plane.fuelCapacity && (
                          <div>
                            <span className="text-slate-400 text-sm">Fuel Capacity:</span>
                            <div className="text-white text-sm">{plane.fuelCapacity}</div>
                          </div>
                        )}
                        {plane.endurance && (
                          <div>
                            <span className="text-slate-400 text-sm">Endurance:</span>
                            <div className="text-white text-sm">{plane.endurance}</div>
                          </div>
                        )}

                        {/* Avionics */}
                        <div>
                          <span className="text-slate-400 text-sm">Avionics:</span>
                          <div className="text-white text-sm">{plane.avionics}</div>
                        </div>

                        {/* Capabilities */}
                        <div>
                          <span className="text-slate-400 text-sm">Capabilities:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {plane.capabilities.map((capability, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="combat" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {fighterAircraft.map((plane) => (
                  <Card key={plane.id} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white text-xl">{plane.name}</CardTitle>
                          <CardDescription className="text-red-400 font-semibold">{plane.role}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-red-900/50 text-red-300">
                          Combat Ready
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-400">Max Speed:</span>
                            <div className="text-white">{plane.maxSpeed}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Range:</span>
                            <div className="text-white">{plane.range}</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm">Primary Armament:</span>
                          <div className="text-white text-sm">{plane.armament}</div>
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm">Combat Capabilities:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {plane.capabilities.map((capability, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-red-600 text-red-300">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transport" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {transportAircraft.map((plane) => (
                  <Card key={plane.id} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white text-xl">{plane.name}</CardTitle>
                          <CardDescription className="text-green-400 font-semibold">{plane.role}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                          Support Role
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-400">Range:</span>
                            <div className="text-white">{plane.range}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Crew:</span>
                            <div className="text-white">{plane.crew}</div>
                          </div>
                        </div>
                        {plane.payload && (
                          <div>
                            <span className="text-slate-400 text-sm">Payload Capacity:</span>
                            <div className="text-white text-sm">{plane.payload}</div>
                          </div>
                        )}
                        {plane.fuelCapacity && (
                          <div>
                            <span className="text-slate-400 text-sm">Fuel Capacity:</span>
                            <div className="text-white text-sm">{plane.fuelCapacity}</div>
                          </div>
                        )}
                        <div>
                          <span className="text-slate-400 text-sm">Mission Capabilities:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {plane.capabilities.map((capability, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-green-600 text-green-300">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {specialAircraft.map((plane) => (
                  <Card key={plane.id} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white text-xl">{plane.name}</CardTitle>
                          <CardDescription className="text-purple-400 font-semibold">{plane.role}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                          Special Ops
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-400">Endurance:</span>
                            <div className="text-white">{plane.endurance}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Range:</span>
                            <div className="text-white">{plane.range}</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm">Advanced Systems:</span>
                          <div className="text-white text-sm">{plane.avionics}</div>
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm">Special Capabilities:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {plane.capabilities.map((capability, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs border-purple-600 text-purple-300"
                              >
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
