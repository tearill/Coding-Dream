import useStats from '../utils/useStats'
import Stats from './Stats'
import { useState } from 'react'

// useState 可以跨组件提供 state，替代 redux
export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries')
  // console.log(countries, '---')
  console.log('---')
  const [selectedCountry, setSelectedCountry] = useState('USA')
  if (loading) return <p>Loading...</p>
  if (error) return <p>404 Not Found</p>
  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => setSelectedCountry(e.target.value)}
        defaultValue={selectedCountry}>
        {
          countries.countries.map(country => (
            <option
              key={country.name}
              value={country.iso3}>
              {country.iso3}
            </option>
          ))
        }
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
    </div>
  )
}