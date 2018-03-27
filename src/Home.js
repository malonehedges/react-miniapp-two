import React from 'react'
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native'
import Button from 'antd-mobile/lib/button'

export default class HomePageView extends React.Component {

  render () {
    return (
      <ImageBackground
        source={require('../assets/kitchen.png')}
        style={styles.container}
      >
        <Button onClick={this.props.onHomeButtonClicked}>Start Cooking</Button>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
