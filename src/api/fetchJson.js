export async function fetchJson(url, { signal } = {}) {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  return response.json()
}
