import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  updateRoomUser: ['roomKey', 'user'],
  initializeChat: null,
  fetchRoomSuccess: ['roomKey'],
  fetchRoomError: null,
  registerRoom: null,
  fetchMessageSuccess: ['messages'],
  fetchMessageError: null,
  messageSent: ['roomKey', 'rid', 'text'],
  fetchRoomData: ['roomKey']
})

export const ChatTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  loading: true,
  messages: [],
  roomKey: null,
  rooms: []
})

export const updateRoomUser = (state, { roomKey, user }) => {
  var updated = false
  const updatedItems = state.rooms.map(item => {
    if (item.key === roomKey) {
      updated = true
      return { ...item, user: user }
    }
    return item
  })

  if (updated) {
    return state.merge({ rooms: updatedItems })
  } else {
    return state.merge({ rooms: [...state.rooms, { user, roomKey }] })
  }
}

export const fetchRoomSuccess = (state, { roomKey }) => {
  return state.merge({
    loading: false,
    roomKey: roomKey
  })
}

export const fetchRoomError = (state) => {
  return state.merge({ loading: false })
}

export const registerRoom = (state, { roomKey }) => {
  return state.merge({ roomKey })
}

export const fetchMessageSuccess = (state, { messages }) => {
  return state.merge({
    loading: false,
    messages: messages
  })
}

export const fetchMessageError = (state) => {
  return state.merge({ loading: false })
}

export const reducer = createReducer(INITIAL_STATE, {
  'FETCH_ROOM_SUCCESS': fetchRoomSuccess,
  'FETCH_ROOM_ERROR': fetchRoomError,
  'REGISTER_ROOM': registerRoom,
  'FETCH_MESSAGE_SUCCESS': fetchMessageSuccess,
  'FETCH_MESSAGE_ERROR': fetchMessageError,
  'UPDATE_ROOM_USER': updateRoomUser
})
