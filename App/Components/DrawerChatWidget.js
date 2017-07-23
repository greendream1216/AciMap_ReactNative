import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native'
import { Fonts, Colors } from '../Themes/'
import ChatActions from '../Redux/ChatRedux'
import _ from 'lodash'

class DrawerChatWidget extends Component {
  _selectChat (roomKey) {
    this.props.setActiveChatRoom(roomKey)
    this.props.navigation.navigate('ChatScreen')
  }

  componentDidUpdate () {
    // console.tron.display({
    //   name: 'DrawerChatWidget componentDidUpdate with this.props.rooms:',
    //   value: this.props.rooms
    // })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Chats:</Text>
        {this.props.rooms.map(room => {
          if (!room.user) {
            return
          }
          return (
            <TouchableOpacity
              key={room.roomKey}
              onPress={() => this._selectChat(room.roomKey)}
              style={styles.chatButton}>
              <View style={styles.chatImageContainer}>
                <Image source={{ uri: room.user.photo }} style={styles.userImage} />
              </View>
              <Text style={styles.userText}>{room.user.name}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 30
  },
  text: {
    fontFamily: Fonts.type.base,
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    paddingVertical: 4
  },
  userText: {
    fontFamily: Fonts.type.base,
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    paddingLeft: 15
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  chatButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  chatImageContainer: {
    width: 44,
    height: 40,
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => ({
  roomKey: state.chat.roomKey,
  rooms: _.values(state.chat.rooms)
})

const mapDispatchToProps = (dispatch) => ({
  setActiveChatRoom: (roomKey) => dispatch(ChatActions.setActiveChatRoom(roomKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerChatWidget)
