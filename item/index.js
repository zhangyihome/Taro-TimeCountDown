import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import {  Text } from '@tarojs/components'
import "./index.less";

class AtCountdownItem extends Taro.Component {
  formatNum (num) {
    return num <= 9 ? `0${num}` : `${num}`
  }

  render () {
    const { num, separator } = this.props

    return (
      <Text className='cuu-countdown__item'>
        {this.formatNum(num)}{separator}
      </Text>
    )
  }
}

AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
}

AtCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
}


export default AtCountdownItem
