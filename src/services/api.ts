import type { Greeting } from '../types/types'

const apiBaseUrl = '/api'

export async function fetchGreeting(name?: string): Promise<Greeting> {
  const url = name ? `${apiBaseUrl}/hello?name=${name}` : `${apiBaseUrl}/hello`
  const response = await fetch(url)
  return await response.json()
}
