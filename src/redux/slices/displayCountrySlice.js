import { createSlice } from '@reduxjs/toolkit'
import initialCountry from '../../assets/initialCountry'

export const displayCountrySlice = createSlice(
    {
        name: 'displayCountry',
        initialState: {
            value: initialCountry
        },
        reducers: {
            setDisplayCountry: (state, action) => {
                state.value = action.payload
            },
            deleteDisplayCountry: (state) => {
                state.value = null
            }
        }
    }
)

export const { setDisplayCountry, deleteDisplayCountry } = displayCountrySlice.actions

export const selectDisplay = (state) => {
    // console.log('line 24', state.displayedCountry)
    return state.displayCountry.value
}

export default displayCountrySlice.reducer

// For the name in createSlice, name it the same thing you put at the "key" in the store *