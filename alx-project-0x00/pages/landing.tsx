import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button";


const LandingPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Villas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <h1 className="text-2xl font-bold mb-4">Reusable Buttons</h1>
        
        <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-sm">Small</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md">Medium</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">Large</button>

        </div>

      </div>
    </div>
  )
}

export default LandingPage
