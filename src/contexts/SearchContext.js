import React from 'react'

const SearchContext = React.createContext({
  city: 'Tucker',
  zipCode: '30084',
  weather: [],
  date: new Date(Date.now()),
  events: []
})

export default SearchContext