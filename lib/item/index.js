import Taros from '../taro'
import Nerv from "nervjs";

import AtComponent from "../common/component";

import PropTypes from 'prop-types'
import {  Text } from '@tarojs/components'
import "./index.less";

class ZyTimeCountdownItem extends AtComponent {
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

ZyTimeCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
}

ZyTimeCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
}


export default ZyTimeCountdownItem
