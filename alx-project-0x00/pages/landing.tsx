import React from "react"
import Card from "@/components/Card"

const LandingPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Villas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default LandingPage
