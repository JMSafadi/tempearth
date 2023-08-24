// import { NextResponse } from "next/server"
// import openai from '@/openai'

// export async function POST(request: Request) {
//   // Weatherdata in the body of the POST req
//   const { weatherData } = await request.json()

//   const response = await openai.createChatCompletion({
//     model: "babbage-002",
//     temperature: 0.8,
//     n: 1,
//     stream: false,
//     message: [
//       {
//         role: 'system',
//         content: `Pretend you're a weather news presenter presenting LIVE on television. Be energetic and full of charisma. Introduce your self as Tempearth headquarters. State and city you are providing a summary for. Then give a summart of todays weather only. Make it easy for the viewer to understand and know that to do to prepare for those weather conditions such as wear SPF if the UV is high etc. use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from the Tempearth Application team at the new offices and not the user.`
//       },
//       {
//         role: 'user',
//         content: `Hi there, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(weatherData)}`
//       }
//     ]
//   })
//   const { data } = response
//   console.log('DATA IS:', data)
//   return NextResponse.json(data.choices[0].message)
// }
