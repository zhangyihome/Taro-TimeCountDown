import TaroH5 from '@tarojs/taro-h5';
import Taro from '@tarojs/taro';

let Taros;
if (process.env.TARO_ENV === 'h5') {
	Taros=TaroH5;
} else {
	Taros=Taro;
}
export default Taros
