const litleSize = 17;//14;
const normalSize = 20;//17;
const bigSize = 29;//28;

const litleTitleColor = 'rgb(0, 33, 64)';
const bigTitleColor = 'rgb(0, 27, 51)';
const textColor = 'rgb(0, 15, 28)';
const barColor = 'rgb(0, 52, 100)';
const statusBarColor = 'rgb(0, 40, 76)';
const buttonColor = 'rgb(0, 46, 89)';

const trackColor = barColor;
const thumbColor = 'rgb(0, 97, 186)';

module.exports = {
  titleApp: 'VocationGo',
  superWhite: 'rgb(235, 245, 254)',
  trackColor: trackColor,
  thumbColor: thumbColor,
  mapColor: 'rgb(0, 119, 230)',
  mapColorTransparent: 'rgba(0, 119, 230, 0.3)',
  barColor: barColor,
  statusBarColor: statusBarColor,
  normalTextSize: normalSize,
  buttonColor: buttonColor,
  itemsBarColor: 'white',
  heightBottomBar: 45,
  normalText: {
    textAlign: 'center',
    fontSize: normalSize,
    fontWeight: '300',
    color: textColor,
  },
  normalTextBlue: {
    textAlign: 'center',
    fontSize: normalSize,
    fontWeight: '300',
    color: 'rgb(51, 153, 255)',
  },
  justifyNormalText: {
    textAlign: 'justify',
    fontSize: normalSize,
    fontWeight: '300',
    color: textColor,
  },
  autoNormalText: {
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: normalSize,
    fontWeight: '300',
    color: textColor,
  },
  italicNormalText: {
    textAlign: 'center',
    fontSize: normalSize,
    fontStyle: 'italic',
    fontWeight: '300',
    color: textColor,
  },
  italicNormalTextBlue: {
    textAlign: 'center',
    fontSize: normalSize,
    fontStyle: 'italic',
    fontWeight: '300',
    color: 'rgb(51, 153, 255)',
  },
  italicRightNormalText: {
    textAlign: 'right',
    fontSize: litleSize,
    fontStyle: 'italic',
    fontWeight: '300',
    color: textColor,
  },
  boldNormalText: {
    flexWrap: 'wrap',
    color: litleTitleColor,
    fontSize: normalSize,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  litleTitle: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: litleTitleColor,
    fontSize: normalSize,
    fontWeight: '600',
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: bigSize,
    color: bigTitleColor,
    fontWeight: '600',
  },
  boldBigTitle: {
    textAlign: 'center',
    fontSize: bigSize,
    color: bigTitleColor,
    fontWeight: '800',
  },
  referencia: {
    color: textColor,
    flexWrap: 'wrap',
    color: 'black',
    fontSize: litleSize,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  square: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'rgba(250, 253, 255, 0.5)',
    //borderRadius: 5,
  },
  backgroundImage: {
   flex: 1,
   backgroundColor: 'transparent',
   width: null,
   height: null,
   //resizeMode: 'cover',
   padding: 10,
  },
};
