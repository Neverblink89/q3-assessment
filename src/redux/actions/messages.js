import axios from 'axios'

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED'
export const FETCH_MESSAGES_PENDING = 'FETCH_MESSAGES_PENDING'
export const TOGGLE_STARRED = 'TOGGLE_STARRED'
export const TOGGLE_READ = 'TOGGLE_READ'
export const MARK_AS_READ = 'MARK_AS_READ'
export const MARK_AS_UNREAD = 'MARK_AS_UNREAD'
export const CHECK_SELECTED = 'CHECK_SELECTED'
export const CHECK_ALL = 'CHECK_ALL'
export const ADD_LABEL = 'ADD_LABEL'
export const REMOVE_LABEL = 'REMOVE_LABEL'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'


export const fetchMessages = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_MESSAGES_PENDING
      })
      let messages = await axios.get('http://localhost:8082/api/messages')
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: messages
      })
    } catch (err) {
      dispatch({
        type: FETCH_MESSAGES_FAILED,
        payload: err
      })
    }
  }
}

export const toggleStarred = messageId => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH TOGGLE_STARRED\n----")
    dispatch({
      type: TOGGLE_STARRED,
      payload: messageId
    })
  }
}

export const toggleRead = message => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH TOGGLE_READ\n----")
    dispatch({
      type: TOGGLE_READ,
      payload: message
    })
  }
}
export const checkSelected = message => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH CHECK_SELECTED\n----")
    dispatch({
      type: CHECK_SELECTED,
      payload: message
    })
  }
}
export const checkAll = allMessages => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH CHECK_ALL\n----")
    dispatch({
      type: CHECK_ALL,
      payload: allMessages
    })
  }
}

export const markAsRead = allMessages => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH MARK_AS_READ\n----")
    dispatch({
      type: MARK_AS_READ,
      payload: allMessages
    })
  }
}

export const markAsUnread = allMessages => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH MARK_AS_UNREAD\n----")
    dispatch({
      type: MARK_AS_UNREAD,
      payload: allMessages
    })
  }
}

export const addLabel = (label) => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH ADD_LABEL\n----")
    dispatch({
      type:ADD_LABEL,
      payload: label
    })
  }
}

export const removeLabel = (label) => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH REMOVE_LABEL\n----")
    dispatch({
      type:REMOVE_LABEL,
      payload: label
    })
  }
}

export const removeMessage = (message) => {
  return dispatch => {
    console.log("----\nCALLED DISPATCH REMOVE_MESSAGE\n----")
    dispatch({
      type:REMOVE_MESSAGE,
      payload: message
    })
  }
}
