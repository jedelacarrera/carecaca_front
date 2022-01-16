const RED_SUITS = ['diamond', 'heart']
const SUITS = ['diamond', 'heart', 'spade', 'club']

export function cardColor(suit) {
  if (RED_SUITS.includes(suit)) {
    return 'red'
  }
  return 'black'
}

export function cardIcon(suit) {
  if (SUITS.includes(suit)) {
    return 'mdi-cards-' + suit
  }
  return 'mdi-cards-outline'
}

export function getLastCard(cards) {
  if (cards.length === 0) {
    return {
      rank: '-',
      suit: '-',
      amount: 0,
    }
  }
  let amount = 0
  for (let i = cards.length - 1; i >= 0; i--) {
    if (cards[i].rank === cards[cards.length - 1].rank) {
      amount += 1
    } else {
      break
    }
  }
  return {
    rank: cards[cards.length - 1].rank,
    suit: cards[cards.length - 1].suit,
    amount,
  }
}
