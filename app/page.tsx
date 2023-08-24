"use client"
import { getClient } from "@/apollo-client"
import CityPicker from "@/components/CityPicker"
import { ApolloProvider } from "@apollo/client"
import { Card, Divider, Subtitle, Text } from "@tremor/react"
import Image from "next/image"
import logo from '../public/temperath.png'
import github from '../public/github.png'
import linkedin from '../public/LinkedIn_icon.svg.png'

const client = getClient()

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
        <Card className="max-w-4xl mx-auto">
          <Image className="mx-auto mb-8" width={200} height={200} src={logo} alt='logo'/>
          {/* <Subtitle className="text-xl text-center">Built by Julian Safadi</Subtitle> */}
          <Subtitle className="text-xl text-center">
            Discover the world through the lens of weather with Tempearth. Our platform grants you instant access to the weather conditions of any corner of the planet.
          </Subtitle>
          <Subtitle className="text-xl text-center">
            Welcome to Tempearth: Your compass in the world of weather!
          </Subtitle>
          <Divider className="my-10"></Divider>
          <Card className="
          bg-gradient-to-br from-[#394F68] to-[#183B7E]
          ">
            {/* CityPicker Component */}
            <CityPicker/>
          </Card>
        </Card>
      </div>
      <footer className='fixed bg-sky-500 text-xl text-center p-5 text-black bottom-0 w-full'>
        Developed by Julian Safadi
        <div className='flex justify-center items-center gap-2 mt-2'>
          <a href='https://github.com/JMSafadi' target='_blank'>
            <Image src={github} width={20} height={20} alt='github'/>
          </a>
          <a href='https://www.linkedin.com/in/juliansafadi' target='_blank'>
            <Image src={linkedin} width={20} height={20} alt='linkedin'/>
          </a>
        </div>
      </footer>
    </ApolloProvider>
  )
}
