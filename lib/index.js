import Taros from "./taro";
import Nerv from "nervjs";
import AtComponent from "./common/component";

import PropTypes from "prop-types";
import { View } from "@tarojs/components";
import classNames from "classnames";
import ZyTimeCountdownItem from "./item";
import "./index.less";

const toSeconds = (day, hours, minutes, seconds) =>
  day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

export default class ZyTimeCountdown extends AtComponent {
  constructor() {
    super(...arguments);
    const { day, hours, minutes, seconds } = this.props;
    this.seconds = toSeconds(day, hours, minutes, seconds);
    this.state = {
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    };
    this.timer = null;
  }

  setTimer() {
    if (!this.timer) this.countdonwn();
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  countdonwn() {
    let [day, hours, minutes, seconds] = [0, 0, 0, 0];

    if (this.seconds > 0) {
      day = Math.floor(this.seconds / (60 * 60 * 24));
      hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
      minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
      seconds =
        Math.floor(this.seconds) -
        day * 24 * 60 * 60 -
        hours * 60 * 60 -
        minutes * 60;
    }

    this.setState({
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    });
    this.seconds--;

    if (this.seconds < 0) {
      this.clearTimer();
      this.props.onTimeUp();
      return;
    }

    this.timer = setTimeout(() => {
      this.countdonwn();
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;

    const { day, hours, minutes, seconds } = nextProps;
    this.seconds = toSeconds(day, hours, minutes, seconds);
    this.clearTimer();
    this.setTimer();
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  componentDidHide() {
    this.clearTimer();
  }

  componentDidShow() {
    this.setTimer();
  }

  render() {
    const {
      className,
      customStyle,
      format,
      isShowDay,
      isShowHours,
    } = this.props;
    const { _day, _hours, _minutes, _seconds } = this.state;

    return (
      <View
        className={classNames(
          {
            "countdown": true,
          },
          className
        )}
        style={customStyle}
      >
        {isShowDay && <ZyTimeCountdownItem num={_day} separator={format.day} />}
        {(isShowDay||isShowHours) && (
          <ZyTimeCountdownItem num={_hours} separator={format.hours} />
        )}
        <ZyTimeCountdownItem num={_minutes} separator={format.minutes} />
        <ZyTimeCountdownItem num={_seconds} separator={format.seconds} />
      </View>
    );
  }
}

ZyTimeCountdown.defaultProps = {
  customStyle: "",
  className: "",
  isShowDay: false,
  isShowHours: false,
  format: {
    day: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒"
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  onTimeUp() {}
};

ZyTimeCountdown.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isShowDay: PropTypes.bool,
  isShowHours: PropTypes.bool,
  format: PropTypes.object,
  day: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onTimeUp: PropTypes.func
};
