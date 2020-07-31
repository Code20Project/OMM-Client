// Dimensions, Window의 크기를 가져와 주는 API
const { Dimensions } = require('react-native');

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

module.exports = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield: {
    flexDirection: 'row',
  },
  text: {
    position: 'relative',
    top: 50,
  },
  textInput: {
    height: 30,
    width: windowWidth * 0.4,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 20,
  },

};
