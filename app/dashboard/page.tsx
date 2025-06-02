"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Shield, Clock, Award, Calendar, Bell, Settings, LogOut, Star, Target, TrendingUp } from "lucide-react"

// Mock user data - in real app this would come from authentication
const userData = {
  name: "Captain John Mitchell",
  vid: "1234567",
  division: "US",
  rank: "Squadron Leader",
  rating: "ATP",
  joinDate: "2020-03-15",
  totalHours: 2500,
  specializations: ["Fighter Jets", "Transport", "Tactical"],
  achievements: ["Top Gun Graduate", "Mission Commander", "Instructor Pilot"],
  status: "Active",
}

const upcomingMissions = [
  {
    id: 1,
    name: "Operation Steel Eagle",
    date: "2024-01-20",
    time: "19:00 UTC",
    type: "Combat Training",
    aircraft: "F-16C",
    role: "Flight Lead",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Cargo Run Alpha",
    date: "2024-01-22",
    time: "15:30 UTC",
    type: "Transport",
    aircraft: "C-130J",
    role: "Pilot",
    status: "Pending",
  },
  {
    id: 3,
    name: "Night Ops Training",
    date: "2024-01-25",
    time: "22:00 UTC",
    type: "Training",
    aircraft: "AH-64D",
    role: "Instructor",
    status: "Confirmed",
  },
]

const recentFlights = [
  {
    date: "2024-01-15",
    callsign: "SOG001",
    aircraft: "F-16C",
    route: "EGLL - LFPG",
    duration: "2h 15m",
    status: "Completed",
  },
  {
    date: "2024-01-12",
    callsign: "SOG003",
    aircraft: "C-130J",
    route: "KJFK - KBOS",
    duration: "1h 45m",
    status: "Completed",
  },
  {
    date: "2024-01-10",
    callsign: "SOG002",
    aircraft: "AH-64D",
    route: "EDDF - LIRF",
    duration: "3h 20m",
    status: "Completed",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <Settings className="h-4 w-4" />
              </Button>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 bg-blue-600">
              <AvatarFallback className="text-white text-xl font-bold">
                {userData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
              <div className="flex items-center space-x-4 text-slate-300">
                <span>{userData.rank}</span>
                <span>•</span>
                <span>VID: {userData.vid}</span>
                <span>•</span>
                <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                  {userData.status}
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{userData.totalHours.toLocaleString()}</div>
            <div className="text-slate-300">Total Flight Hours</div>
          </div>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="missions" className="data-[state=active]:bg-blue-600">
              Missions
            </TabsTrigger>
            <TabsTrigger value="flights" className="data-[state=active]:bg-blue-600">
              Flight Log
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600">
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Stats */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6 text-center">
                      <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">156</div>
                      <div className="text-slate-300">Hours This Month</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6 text-center">
                      <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-slate-300">Missions Completed</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6 text-center">
                      <TrendingUp className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-slate-300">Mission Success Rate</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Missions */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Upcoming Missions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingMissions.slice(0, 3).map((mission) => (
                        <div
                          key={mission.id}
                          className="flex items-center justify-between p-3 bg-slate-900/50 rounded border border-slate-600"
                        >
                          <div>
                            <div className="text-white font-semibold">{mission.name}</div>
                            <div className="text-slate-400 text-sm">
                              {mission.date} at {mission.time} • {mission.aircraft}
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className={
                              mission.status === "Confirmed"
                                ? "bg-green-900/50 text-green-300"
                                : "bg-yellow-900/50 text-yellow-300"
                            }
                          >
                            {mission.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Progress Tracking */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Monthly Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">Flight Hours</span>
                        <span className="text-white">156/200</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">Missions</span>
                        <span className="text-white">23/30</span>
                      </div>
                      <Progress value={77} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">Training</span>
                        <span className="text-white">8/10</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Achievements */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <div>
                          <div className="text-white text-sm">Mission Excellence</div>
                          <div className="text-slate-400 text-xs">Completed 20 missions with 100% success</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-blue-400" />
                        <div>
                          <div className="text-white text-sm">Formation Leader</div>
                          <div className="text-slate-400 text-xs">Led 5 successful formation flights</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-green-400" />
                        <div>
                          <div className="text-white text-sm">Night Ops Certified</div>
                          <div className="text-slate-400 text-xs">Completed advanced night operations training</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Missions Tab */}
          <TabsContent value="missions" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Mission Schedule</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">Request Mission</Button>
              </div>

              <div className="grid gap-4">
                {upcomingMissions.map((mission) => (
                  <Card key={mission.id} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                        <div>
                          <div className="text-white font-bold text-lg">{mission.name}</div>
                          <div className="text-slate-400 text-sm">{mission.type}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Date</div>
                          <div className="text-white">{mission.date}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Time</div>
                          <div className="text-white">{mission.time}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Aircraft</div>
                          <div className="text-white">{mission.aircraft}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Role</div>
                          <div className="text-white">{mission.role}</div>
                        </div>
                        <div>
                          <Badge
                            variant="secondary"
                            className={
                              mission.status === "Confirmed"
                                ? "bg-green-900/50 text-green-300"
                                : "bg-yellow-900/50 text-yellow-300"
                            }
                          >
                            {mission.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Flight Log Tab */}
          <TabsContent value="flights" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Flight Log</h2>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Export Log
                </Button>
              </div>

              <div className="grid gap-4">
                {recentFlights.map((flight, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                        <div>
                          <div className="text-white font-bold">{flight.callsign}</div>
                          <div className="text-slate-400 text-sm">{flight.date}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Aircraft</div>
                          <div className="text-white">{flight.aircraft}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Route</div>
                          <div className="text-white">{flight.route}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">Duration</div>
                          <div className="text-white">{flight.duration}</div>
                        </div>
                        <div>
                          <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                            {flight.status}
                          </Badge>
                        </div>
                        <div>
                          <Button variant="ghost" size="sm" className="text-blue-400 hover:text-white">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-slate-400 text-sm">Name</div>
                      <div className="text-white">{userData.name}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Rank</div>
                      <div className="text-white">{userData.rank}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">VID</div>
                      <div className="text-white">{userData.vid}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Division</div>
                      <div className="text-white">{userData.division}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Rating</div>
                      <div className="text-white">{userData.rating}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Join Date</div>
                      <div className="text-white">{new Date(userData.joinDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Specializations & Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-slate-400 text-sm mb-2">Specializations</div>
                    <div className="flex flex-wrap gap-2">
                      {userData.specializations.map((spec, index) => (
                        <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-2">Achievements</div>
                    <div className="flex flex-wrap gap-2">
                      {userData.achievements.map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-900/50 text-blue-300">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
