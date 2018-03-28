import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Linking,
  Text,
  ScrollView,
  Image,
} from 'react-native'
// import {
//   Notifications,
// } from 'expo'

import Button from 'antd-mobile/lib/button'

export default class Results extends React.Component {

  onRecipeButtonClick = (recipe) => () => {
    Linking.openURL(recipe.url)

    // const noti = {
    //   title: 'howdy',
    //   body: 'ho',
    // }
    // Notifications.presentLocalNotificationAsync(noti)

    // Notifications.scheduleLocalNotificationAsync(noti, {
    //   time: (new Date()).getTime() + 3000,
    // })
  }

  render () {
    const { results } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.resultText}>
          {results.length} result{results.length === 1 ? '' : 's'}
        </Text>

        <ScrollView>
          {results.map((recipe) => (
            <View key={recipe.title} style={styles.resultRow}>
              <Image
                source={{ uri: recipe.image }}
                style={styles.image}
                resizeMode={'cover'}
              />
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{recipe.title}</Text>
                <Text style={styles.detailText}>
                  {recipe.servings} servings - {recipe.prepTime} - {recipe.dietLabel}
                </Text>
                <Button
                  onClick={this.onRecipeButtonClick(recipe)}
                  style={styles.button}
                >
                  COOK
                </Button>
              </View>
            </View>
          ))}
        </ScrollView>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  textContainer: {
    flex: 0.7,
    padding: 5,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '800',
  },
  detailText: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 5,
    backgroundColor: '#abcdef',
    width: 90,
    height: 40,
  },
  image: {
    flex: 0.3,
    // width: 120,
    height: 100,
  },
})
