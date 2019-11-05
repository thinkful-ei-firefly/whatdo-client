import React from 'react'

const SearchContext = React.createContext({
  city: 'Tucker',
  zipCode: '30084',
  weather: [],
  date: new Date(Date.now()),
  events: [],
  savedEvents: [],
  distance: 10,
  categories: '',
  music: false,
  attractions: false,
  bars: false,
  sports: false,
  performingArts: false,
  festivals: false,
  searchedTerms: {
    zipCode: '30084',
    distance: 10,
    date: new Date(Date.now()),
    music: false,
    attractions: false,
    bars: false,
    sports: false,
    performingArts: false,
    festivals: false,
  },
  apiSearch: () => {},
  getSavedEvents: () => {},
  saveEvent: () => {},
  removeEvent: () => {},
  setSearchTerm: () => {},
  setChecked: () => {},
  setZipCode: () => {},
  pageNum: 1,
  pageCount: 1,
  prevPage: () => {},
  nextPage: () => {},
  loading: false,
  toggleLoading: () => {},
  fetchError: false
})



export default SearchContext