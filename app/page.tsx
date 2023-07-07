"use client"
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">TEMPEARTH</Text>
        <Subtitle className="text-xl text-center">Built by Julian Safadi</Subtitle>
        <Subtitle className="text-xl text-center">And powered by OpenIA, Next.js 13.3, Tailwind Css, Tremor 2.0 + More!</Subtitle>
        <Divider className="my-10"></Divider>
        <Card className="
        bg-gradient-to-br from-[#394F68] to-[#183B7E]
        ">
          {/* CityPicker Component */}
          <CityPicker/>
        </Card>
      </Card>

    </div>
  )
}