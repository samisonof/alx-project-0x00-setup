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
        <div className="space-y-4">
            <Button title="Small Button" size="small" shape="rounded-sm" />
            <Button title="Medium Button" size="medium" shape="rounded-md" />
            <Button title="Large Button" size="large" shape="rounded-full" />
            </div>

      </div>
    </div>
  )
}

export default LandingPage
