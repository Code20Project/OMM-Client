const { Dimensions } = require('react-native');

const windowWidth = Dimensions.get('window').width;

module.exports = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: windowWidth,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    width: windowWidth,
  },
  button: {
    marginTop: 10,
    width: windowWidth * 0.5,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },

};
