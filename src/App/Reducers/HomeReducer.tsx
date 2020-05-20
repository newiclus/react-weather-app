import { ActionType } from 'redux-promise-middleware'

const initialState = {
  error: null,
  pending: false,
  city: {},
}

const CITY_PENDING = `CITY_${ActionType.Pending}`
const CITY_FULFILLED = `CITY_${ActionType.Fulfilled}`
const CITY_REJECTED = `CITY_${ActionType.Rejected}`

const HomeReducer = (state = initialState, action:any) => {
  switch(action.type) {
    case CITY_PENDING: {
      return {
        ...state,
        pending: true,
      }
    }

    case CITY_FULFILLED: {
      return {
        ...state,
        pending: false,
        city: action.payload,
      }
    }

    case CITY_REJECTED: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    }

    default: return state
  }
}

export default HomeReducer
