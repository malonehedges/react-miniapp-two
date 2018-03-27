import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'
import Button from 'antd-mobile/lib/button'
import Picker from 'antd-mobile/lib/picker'
import List from 'antd-mobile/lib/list'

export default class Search extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      dietPickerValue: [],
      servingPickerValue: [],
      prepTimePickerValue: [],
    }
  }

  onSearchClick = () => {
    const diet = this.state.dietPickerValue[0]
    const servings = this.state.servingPickerValue[0]
    const prepTime = this.state.prepTimePickerValue[0]

    this.props.handleSearchQuery({
      diet,
      servings,
      prepTime,
    })
  }

  render () {
    const { recipes } = this.props

    // Diet Restrictions

    const dietRestrictions = []
    for (let i = 0; i < recipes.length; i++) {
      const { dietLabel } = recipes[i]
      if (!dietRestrictions.includes(dietLabel)) {
        dietRestrictions.push(dietLabel)
      }
    }
    const dietRestrictionData = dietRestrictions.map(dr => ({
      label: dr,
      value: dr,
    }))
    dietRestrictionData.unshift({ label: '', value: 'nada' })

    // Serving Sizes

    const servingSizeData = [
      {
        label: '',
        value: 'nada',
      },
      {
        label: 'less than 4',
        value: 'lt4',
      },
      {
        label: '4-6',
        value: '4t6',
      },
      {
        label: '7-9',
        value: '7t9',
      },
      {
        label: 'more than 10',
        value: 'mtt',
      },
    ]

    // Prep Time

    const prepTimeData = [
      {
        label: '',
        value: 'nada',
      },
      {
        label: '30 minutes or less',
        value: 'lt30',
      },
      {
        label: 'less than 1 hour',
        value: 'lt1h',
      },
      {
        label: 'more than 1 hour',
        value: 'gt1h',
      },
    ]

    return (
      <View style={styles.container}>
        <List>
          <Picker
            data={dietRestrictionData}
            extra={' '}
            okText={'Ok'}
            dismissText={' '}
            value={this.state.dietPickerValue}
            onChange={val => this.setState({ dietPickerValue: val })}
            cols={1}
          >
            <List.Item arrow="horizontal">Diet Restriction</List.Item>
          </Picker>

          <Picker
            data={servingSizeData}
            extra={' '}
            okText={'Ok'}
            dismissText={' '}
            value={this.state.servingPickerValue}
            onChange={val => this.setState({ servingPickerValue: val })}
            cols={1}
          >
            <List.Item arrow="horizontal">Serving Size</List.Item>
          </Picker>

          <Picker
            data={prepTimeData}
            extra={' '}
            okText={'Ok'}
            dismissText={' '}
            value={this.state.prepTimePickerValue}
            onChange={val => this.setState({ prepTimePickerValue: val })}
            cols={1}
          >
            <List.Item arrow="horizontal">Preparation Time</List.Item>
          </Picker>
        </List>

        <Button
          onClick={this.onSearchClick}
          style={styles.button}
        >
          Search
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
})
