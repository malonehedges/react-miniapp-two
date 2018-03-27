import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native'

const Page = {
  Home: 'home',
  Search: 'search',
  Results: 'results',
}

import Home from './Home'
import Search from './Search'
import Results from './Results'

export default class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      page: Page.Results,
      recipes: require('../assets/recipes.json').recipes,
      results: [],
    }
  }

  onHomeButtonClicked = () => {
    this.setState({
      page: 'search'
    })
  }

  handleSearchQuery = ({ diet, servings, prepTime }) => {
    const results = []
    for (let i = 0; i < this.state.recipes.length; i++) {
      const recipe = this.state.recipes[i]
      let add = true

      if (diet && diet !== 'nada') {
        if (diet !== recipe.dietLabel) {
          add = false
        }
      }

      if (servings && servings !== 'nada') {
        if (servings === 'lt4' && recipe.servings >= 4) {
          add = false
        }

        if (servings === '4t6' && (recipe.servings < 4 || recipe.servings > 6)) {
          add = false
        }

        if (servings === '7t9' && (recipe.servings < 7 || recipe.servings > 9)) {
          add = false
        }

        if (servings === 'mtt' && recipe.servings < 10) {
          add = false
        }
      }

      if (prepTime && prepTime !== 'nada') {
        const [firstVal, firstUnit] = recipe.prepTime.split(' ')
        const firstValNum = parseInt(firstVal)

        const approxMinutes = firstUnit[0] === 'h' ? 60 : firstValNum

        if (prepTime === 'lt30' && approxMinutes > 30) {
          add = false
        }

        if (prepTime === 'lt1h' && approxMinutes >= 60) {
          add = false
        }

        if (prepTime === 'gt1h' && approxMinutes < 60) {
          add = false
        }
      }

      if (add) {
        results.push(recipe)
      }
    }

    this.setState({
      results,
      page: Page.Results,
    })
  }

  render() {
    if (this.state.page === Page.Home) {
      return (
        <Home onHomeButtonClicked={this.onHomeButtonClicked} />
      )
    } else if (this.state.page === Page.Search) {
      return (
        <Search
          handleSearchQuery={this.handleSearchQuery}
          recipes={this.state.recipes}
        />
      )
    } else if (this.state.page === Page.Results) {
      // should be this.state.results
      return (
        <Results results={[this.state.recipes[0]]} />
      )
    }
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
})
