// 引入createStore

import {createStore} from 'redux';
import reducer from '@/redux/reducer';

export default () => createStore(reducer)
