import { gql } from "@apollo/client";

//  query YOUTUBE
const fetchWeatherQueries = gql`
  query myQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
    ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        temperature
        time
        weathercode
        winddirection
        windspeed
        is_day
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        relativehumidity_2m
        snow_depth
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
        rain
        snowfall
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        relativehumidity_2m
        snow_depth
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`

// const fetchWeatherQueries = gql`
//   query myQuery(
//       $current_weather: String
//       $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,v_index_clear_sky_max"
//       $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
//       $latitude: String!
//       $longitude: String!
//       $timezone: String!
//     ) {
//     myQuery(
//       current_weather: $current_weather
//       daily: $daily
//       hourly: $hourly
//       latitude: $latitude
//       longitude: $longitude
//       timezone: $timezone
//     ) {
//       latitude
//       longitude
//       timezone
//       timezone_abbreviation
//       utc_offset_seconds
//       elevation
//       generationtime_ms
//       current_weather {
//         temperature
//         time
//         weathercode
//         winddirection
//         windspeed
//       }
//       hourly {
//         apparent_temperature
//         precipitation_probability
//         precipitation
//         rain
//         relativehumidity_2m
//         showers
//         snow_depth
//         snowfall
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//         windgusts_10m
//       }
//       daily {
//         apparent_temperature_max
//         apparent_temperature_min
//         sunrise
//         sunset
//         temperature_2m_max
//         temperature_2m_min
//         time
//         uv_index_clear_sky_max
//         uv_index_max
//         weathercode
//       }
//       daily_units {
//         apparent_temperature_max
//         apparent_temperature_min
//         sunset
//         sunrise
//         temperature_2m_max
//         temperature_2m_min
//         uv_index_clear_sky_max
//         time
//         uv_index_max
//         weathercode
//       }
//     }
//   }
// `

// my QUERY
// const fetchWeatherQueries = gql`
//   query MyQuery   {
//     myQuery(
//       current_weather: ""
//       daily: ""
//       hourly: ""
//       latitude: ""
//       longitude: ""
//       timezone: ""
//     ) {
//       elevation
//       generationtime_ms
//       latitude
//       longitude
//       timezone
//       timezone_abbreviation
//       utc_offset_seconds
//       current_weather {
//         is_day
//         temperature
//         time
//         weathercode
//         winddirection
//         windspeed
//       }
//       daily {
//         apparent_temperature_max
//         apparent_temperature_min
//         sunrise
//         sunset
//         temperature_2m_max
//         temperature_2m_min
//         time
//         uv_index_clear_sky_max
//         uv_index_max
//         weathercode
//       }
//       daily_units {
//         apparent_temperature_max
//         apparent_temperature_min
//         sunrise
//         sunset
//         temperature_2m_max
//         temperature_2m_min
//         time
//         uv_index_clear_sky_max
//         uv_index_max
//         weathercode
//       }
//       hourly {
//         apparent_temperature
//         precipitation
//         precipitation_probability
//         rain
//         relativehumidity_2m
//         showers
//         snow_depth
//         snowfall
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//         windgusts_10m
//       }
//       hourly_units {
//         apparent_temperature
//         precipitation
//         precipitation_probability
//         rain
//         relativehumidity_2m
//         showers
//         snow_depth
//         snowfall
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//         windgusts_10m
//       }
//     }
//   }
// `


export default fetchWeatherQueries
