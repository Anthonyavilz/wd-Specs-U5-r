import { configureStore } from '@reduxjs/toolkit'
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice'
import displayCountryReducer from '../redux/slices/displayCountrySlice'

export default configureStore({
    reducer: { 
        potentialCountries: potentialCountriesReducer,
        displayCountry: displayCountryReducer
    },
})

// you'll want the names in the "keys" (key: value) in the reducer object to match the names in the slices for readiabilty and data flow