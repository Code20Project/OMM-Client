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
    marginTop: 10,
  },
  text: {
    width: '25%',
  },
  textInput: {
    height: 30,
    width: windowWidth * 0.4,
    borderColor: '#488888',
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 5,
    paddingLeft: 10,
  },
  checkPassword: {
    height: 30,
    width: windowWidth * 0.4,
    borderColor: 'red',
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 5,
    paddingLeft: 10,
  },

  radios: {
    flexDirection: 'row',
    marginTop: 5,
  },
  radioText: {
    marginTop: 5,
  },
  button: {
    marginTop: 30,
    width: '50%',
  },
  img: {
    width: 25,
    height: 35,
  },
  imgView: {
    height: 30,
    width: windowWidth * 0.4,
    marginLeft: 20,
    paddingLeft: 10,
  },
};
