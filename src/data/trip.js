export const trip = {
  destination: 'Lisbon',
  startDate: '12 May 2027',
  travellers: 2,
  notes: 'Pack comfortable shoes for the hills.',
}

export const days = [
  {
    number: 1,
    stops: [
      { id: 'belem-tower', time: '09:00', name: 'Belém Tower', booked: true },
      { id: 'time-out-market', time: '13:00', name: 'Time Out Market', booked: false },
    ],
  },
  {
    number: 2,
    stops: [
      { id: 'alfama-walk', time: '10:00', name: 'Alfama walking tour', booked: true },
    ],
  },
  { number: 3, stops: [] },
]