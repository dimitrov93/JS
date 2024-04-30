import { CityResponse } from './cities'

export type CountryInput = {
  name: string
  countryCode: string
}

export type CountryResponse = {
  id: string
  name: string
  countryCode: string
  cities: CityResponse[]
}
