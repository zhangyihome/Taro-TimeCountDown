import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import {  Text } from '@tarojs/components'
import "./index.less";

class ZyCountdownItem extends Taro.Component {
  formatNum (num) {
    return num <= 9 ? `0${num}` : `${num}`
  }

  render () {
    const { num, separator } = this.props

    return (
      <Text className='countdown-item'>
        {this.formatNum(num)}{separator}
      </Text>
    )
  }
}

ZyCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
}

ZyCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
}


export default ZyCountdownItem
