import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Metrics, Colors } from '../Themes/'
import ACMap from '../Containers/ACMap'
import RiderWidget from '../Components/RiderWidget'
import DriverWidget from '../Components/DriverWidget'

class HomeScreen extends Component {
  render () {
    const { navigation } = this.props.navigation
    return (
      <View style={{ flex: 1, paddingBottom: '10%', backgroundColor: Colors.acnavy }}>
        <ACMap navigation={navigation} />
        <View style={{position: 'absolute', bottom: 0, alignItems: 'center', width: Metrics.screenWidth}}>
          { this.props.className === 'driver' ? <DriverWidget /> : <RiderWidget /> }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.obj || null,
  className: state.ui.className
})

export default connect(mapStateToProps, null)(HomeScreen)
