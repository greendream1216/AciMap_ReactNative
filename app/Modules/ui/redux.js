import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  sendToast: ['title', 'message', 'image', 'toasttype'],
  setChatToast: ['roomKey', 'text'],
  setClass: ['className'],
  toggleModal: ['component'],
  toggleCodepushModal: ['visible'],
  updateCodepushStatus: ['status'],
  updateCodepushPerc: ['perc']
}, { prefix: 'ui.' })

export const UiTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  toast: null,
  className: null,
  codepush: {
    status: null,
    downloadPerc: 0,
    modalVisible: false
  },
  modal: {
    visible: false,
    component: null
  }
})

export const toggleCodepushModal = (state, { visible }) => {
  return state.merge({
    ...state,
    codepush: {
      ...state.codepush,
      modalVisible: visible
    }
  })
}

export const updateCodePushPerc = (state, { perc }) => {
  return state.merge({
    ...state,
    codepush: {
      ...state.codepush,
      downloadPerc: perc
    }
  })
}

export const updateCodePushStatus = (state, { status }) => {
  return state.merge({
    ...state,
    codepush: {
      ...state.codepush,
      status: status
    }
  })
}

export const toggleModal = (state, { component }) => {
  if (state.modal.visible === false) {
    return state.merge({
      ...state,
      modal: {
        ...state.modal,
        visible: true,
        component: component
      }
    })
  } else if (state.modal.visible === true) {
    return state.merge({
      ...state,
      modal: {
        ...state.modal,
        visible: false,
        component: null
      }
    })
  }
  return state
}

export const setChatToast = (state, { roomKey, text }) => {
  return state.merge({
    toast: { roomKey, text }
  })
}

export const sendToast = (state, { title, message, image, toasttype }) => {
  return state.merge({
    toast: { title, message, image, toasttype }
  })
}

export const userLogout = (state) => {
  return INITIAL_STATE
}

export const setClass = (state, { className }) => {
  return state.merge({ className })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MODAL]: toggleModal,
  [Types.TOGGLE_CODEPUSH_MODAL]: toggleCodepushModal,
  [Types.UPDATE_CODEPUSH_STATUS]: updateCodePushStatus,
  [Types.UPDATE_CODEPUSH_PERC]: updateCodePushPerc,
  'auth.USER_LOGOUT': userLogout
})
