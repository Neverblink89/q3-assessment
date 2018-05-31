import {
  TOGGLE_READ,
  TOGGLE_STARRED,
  FETCH_MESSAGES_PENDING,
  FETCH_MESSAGES_FAILED,
  FETCH_MESSAGES_SUCCESS,
  CHECK_SELECTED,
  CHECK_ALL,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  ADD_LABEL,
  REMOVE_LABEL,
  REMOVE_MESSAGE
} from '../actions/messages'


let initialState = []



export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_MESSAGES_PENDING:
      return state
    case FETCH_MESSAGES_SUCCESS:
      return [...action.payload.data]
    case FETCH_MESSAGES_FAILED:
      return action.payload
    case TOGGLE_STARRED:
      return state.map(item =>
        item.id === action.payload.id ?
        Object.assign({}, item, {
          starred: !item.starred
        }) : item)

    case TOGGLE_READ:
      return state.map(item =>
        item.id === action.payload.id ?
        Object.assign({}, item, {
          read: item.read = false
        }) : item)
    case CHECK_SELECTED:
    return state.map(item =>
      item.id === action.payload.id ?
      Object.assign({}, item, {
        selected: !item.selected
      }) : item)

    case CHECK_ALL:
     state.map(item => item.selected = true)
      return [...state]
    case MARK_AS_READ:
      state.map((item) => {
        if (item.selected === true) {
          return item.read = true
        }
      })
      return [...state]
    case MARK_AS_UNREAD:
      state.map((item) => {
        if (item.selected === true) {
          return item.read = false
        }
      })
      return [...state]
    case ADD_LABEL:
      let stateClone= [...state]
      stateClone.map((item) => item.selected === true ? item.labels.push(action.payload): item)
      return stateClone
    case REMOVE_MESSAGE:
      return state.filter((item) => item.selected === true ? item : null)
    default:
      return state
  }
}
