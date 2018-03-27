import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Linking,
  Text,
} from 'react-native'

import Button from 'antd-mobile/lib/button'
import List from 'antd-mobile/lib/list'

export default class Results extends React.Component {

  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     dietPickerValue: [],
  //     servingPickerValue: [],
  //     prepTimePickerValue: [],
  //   }
  // }

  render () {
    const { results } = this.props

    const url = 'https://images.unsplash.com/photo-1510776632413-f3e527a8dc42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5703227ec13ae76e69fda1ad27da26f&auto=format&fit=crop&w=2850&q=80'

    // Linking.openURL(recipe.url)

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.resultText}>
          {results.length} result{results.length === 1 ? '' : 's'}
        </Text>
        {results.map((recipe) => (
          <View key={recipe.title} style={styles.resultRow}>
            <Text>{recipe.title}</Text>
          </View>
        ))}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    margin: 20,
  },
  resultRow: {
    height: 200,
  },
})
