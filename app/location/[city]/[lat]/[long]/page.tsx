import { getClient } from "@/apollo-client"
import CalloutCard from "@/components/CalloutCard"
import HumidityChart from "@/components/HumidityChart"
import InformationPanel from "@/components/InformationPanel"
import RainChart from "@/components/RainChart"
import StatCard from "@/components/StatCard"
import TempChart from "@/components/TempChart"
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries"
import cleanData from "@/lib/cleanData"
import getBasePath from "@/lib/getBasePath"
import Image from "next/image"

export const revalidate = 60

type Props = {
  params: {
    city: string,
    lat: string,
    long: string,
  }
}

async function weatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient()
  const { data } = await client.query({
    query: fetchWeatherQueries,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT'
    }
  })
  const results: Root = data.myQuery

  // const dataToSend = cleanData(results, city)

  // const url = getBasePath()

  // const res = await fetch(`${url}/api/getWeatherSummary`, {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     weatherData: dataToSend
  //   })
  // })

  // const GPTdata = await res.json()
  // const { content } = GPTdata
  // console.log(content)

  return (
    <>
    
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Information Panel */}
      <InformationPanel
        city={city}
        results={results}
        long={long}
        lat={lat}
        />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at: {' '}
              { new Date(results.current_weather.time).toLocaleString()} ({results.timezone}) 
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard 
              message='Coming soon, there will be a weather summary here!'/>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2 ">
            <StatCard 
              title="Maximum Temperature" 
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="orange"
              />
            <StatCard 
              title="Minimum Temperature" 
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="cyan"
              />
          <div>
            <StatCard
              title="UV Index"
              metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
              color="rose"
              />
            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CalloutCard
              message={"The UV is high today, be sure to wear SPF!"}
                warning
              />
            )}
          </div>
          <div className="flex space-x-3 ">
            <StatCard
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)}km/h`}
                color="green"
                />
            <StatCard
                title="UV Index"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
                />
            </div>
          </div>
        </div>
        <hr className="mb-5"/>
        <div className="space-y-3">
          {/* TempChart */}
          <TempChart results={results} />
          {/* RainChart */}
          <RainChart results={results} />
          {/* HumidityChart */}
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
    <footer className='bg-sky-500 text-xl text-center p-5 text-black'>
    Developed by Julian Safadi
    <div className='flex justify-center items-center gap-2 mt-2'>
      <a href='https://github.com/JMSafadi' target='_blank'>
        <Image src='/github.png' width={20} height={20} alt='github'/>
      </a>
      <a href='https://www.linkedin.com/in/juliansafadi' target='_blank'>
        <Image src='/LinkedIn_icon.svg.png' width={20} height={20} alt='linkedin'/>
      </a>
    </div>
    </footer>
    </>
  )
}

export default weatherPage
