import { createStore } from 'redux'; // Redux에서 Store를 만들고 reducer를 합치는 함수를 불러오고

import reducers from './reducers';

export default createStore(reducers);
