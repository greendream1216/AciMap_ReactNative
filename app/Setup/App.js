import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from './Redux'
import codePush from 'react-native-code-push'

export const store = createStore()

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(App)
