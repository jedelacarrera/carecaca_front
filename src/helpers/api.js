const BASE_URL = 'http://10.0.0.180:8000'
// const BASE_URL = 'https://jedelacarrera-hqdgpb4czhszfijd.socketxp.com'
// const BASE_URL = 'https://jedelacarrera-78pz5xy5a926yfa0.socketxp.com'
export async function getTable(tableName) {
  const url = `${BASE_URL}/game/${tableName}`
  return await fetch(url).then(response => response.json())
}

export async function login(tableName, username) {
  const url = `${BASE_URL}/game/${tableName}/login/${username}`
  return await fetch(url).then(response => response.json())
}

export async function startTable(tableName) {
  const url = `${BASE_URL}/game/${tableName}/start`
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

export async function playCards(tableName, username, cards, origin) {
  const url = `${BASE_URL}/game/${tableName}/play/${username}`
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      origin,
      cards,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

export async function takePlayedCards(tableName, username) {
  const url = `${BASE_URL}/game/${tableName}/take_played_cards/${username}`
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

export async function playCardsOrTakePlayedCards(
  tableName,
  username,
  cards,
  origin,
) {
  const url = `${BASE_URL}/game/${tableName}/play_cards_or_take_played_cards/${username}`
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      origin,
      cards,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}
