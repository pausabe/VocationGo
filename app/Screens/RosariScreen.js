import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, StyleSheet,
  TouchableOpacity, Platform, Image , BackAndroid, InteractionManager} from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import Hr from 'react-native-hr';
import GLOBAL from '../Globals/Globals';
import PREGARIES from '../Globals/PREGARIES';
import BottomBar from '../BottomBar/BottomBar'
import Icon from 'react-native-vector-icons/Ionicons'

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

export default class RosariScreen extends Component {
  /*static navigationOptions = {
    title: 'Rosari',
  };*/

  renderPlaceholder() {
    return (
      <View style={{flex:1, backgroundColor: 'rgb(230, 242, 255)'}}>
        <Image source={require('../img/bg/currentbg.png')} style={GLOBAL.backgroundImage}>
        </Image>
      </View>
    )
  }

  componentDidMount(){
    /*InteractionManager.runAfterInteractions(() => {
      this.setState({isReady: true});
    });*/

    let today = new Date();
    let day = today.getDate();
    var id = (day-1)%6;

    switch (id) {
      case 0:
        this.setState({preg1: PREGARIES.p1, preg2: PREGARIES.p2, preg3: PREGARIES.p3, preg4: PREGARIES.p4, preg5: PREGARIES.p5,})
        break;
      case 1:
        this.setState({preg1: PREGARIES.p6, preg2: PREGARIES.p7, preg3: PREGARIES.p8, preg4: PREGARIES.p9, preg5: PREGARIES.p10,})
        break;
      case 2:
        this.setState({preg1: PREGARIES.p11, preg2: PREGARIES.p12, preg3: PREGARIES.p13, preg4: PREGARIES.p14, preg5: PREGARIES.p15,})
        break;
      case 3:
        this.setState({preg1: PREGARIES.p16, preg2: PREGARIES.p17, preg3: PREGARIES.p18, preg4: PREGARIES.p19, preg5: PREGARIES.p20,})
        break;
      case 4:
        this.setState({preg1: PREGARIES.p21, preg2: PREGARIES.p22, preg3: PREGARIES.p23, preg4: PREGARIES.p24, preg5: PREGARIES.p25,})
        break;
      case 5:
        this.setState({preg1: PREGARIES.p26, preg2: PREGARIES.p27, preg3: PREGARIES.p28, preg4: PREGARIES.p29, preg5: PREGARIES.p30,})
        break;
      case 6:
        this.setState({preg1: PREGARIES.p31, preg2: PREGARIES.p32, preg3: PREGARIES.p33, preg4: PREGARIES.p17, preg5: PREGARIES.p13,})
        break;
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      preg1: "",
      preg2: "",
      preg3: "",
      preg4: "",
      preg5: "",
      press1: false,
      press2: false,
      press3: false,
      press4: false,
      press5: false,
      isReady: false
    }
  }

  render() {
    //const { params } = this.props.navigation.state;

    /*if (!this.state.isReady && Platform.OS==='android' && params.type === "Rosari") {
      return this.renderPlaceholder();
    }*/

    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/currentbg.png')} style={GLOBAL.backgroundImage}>
          <ScrollView automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false} >
            <View style={GLOBAL.square}>
              {this.rosari(this.props.title)}
            </View>
          </ScrollView>
        </Image>
        <BottomBar />
      </View>
    )
  }

  rosari(type){
    var today = new Date();
    switch (today.getDay()) {
      case 0: //diumenge
      case 3: //dimecres
        misteris = 'GLÒRIA';
        audio = 'gloria';
        titol1 = "La Resurrecció del Senyor";
        referencia1 = "Jn 20, 1-18; Mc 16, 1-8;";
        text1 = "La resurrecció de Crist és el missatge central de la predicació cristiana. Si Crist no hagués ressuscitat, vana és la nostra fe, afirma sant Pau (cf. 1Co 15,14). Es tracta d'una realitat que transcendeix l'ordre de les coses creades i que apunta cap a una singular i definitiva intervenció de Déu en la nostra història. La resurrecció de Crist és la font de la nostra esperança, de la fe i de la caritat cristiana.\n\nDemanem a Maria per tots els homes, perquè trobem en la resurrecció de Crist un motiu per a la fe, l'esperança i la caritat.";
        titol2 = "L'Ascensió de Jesús al cel";
        referencia2 = "Mc 16, 19; Lc 24, 50-53; Ac 1, 9-14";
        text2 = "Jesús puja al cel, al costat del Pare, portant la carn de la seva humanitat, de la nostra humanitat. D'aquesta manera, la història dels homes passa a formar part del misteri de Déu. Déu ha volgut fer-nos sants, ens ha cridat a la santedat, perquè Ell és sant.\n\nDemanem a Maria per tots els batejats, perquè responguin amb fidelitat, cadascun des de la seva vocació específica i forma de vida, a la comuna crida a la santedat que Déu ha volgut fer a tots els homes.";
        titol3 = "La vinguda de l'Esperit Sant";
        referencia3 = "Ac 2, 1-13";
        text3 = "Després de la Ascensió de Jesús, és l'Esperit Sant el que guia l'Església, el qui anima la seva activitat i fa estendre l'Evangeli, la bona notícia de la salvació, a tots els homes.\n\nDemanem a Maria pel Papa, els bisbes i els preveres perquè, escoltant la veu d’Esperit, guiïn a l'Església en la realització de la seva missió i facin present Crist entre els homes. Demanem-li també que concedeixi abundants vocacions sacerdotals a la seva Església.";
        titol4 = "L'Assumpció de la Maria al cel";
        referencia4 = "";
        text4 = "Maria és portada en cos i ànima al cel. La qui ha estat escollida per ser mare del nostre Salvador és acollida en el si del misteri de Déu, mostrant-nos així la destinació a la qual la humanitat sencera és convidada. Maria, que va respondre afirmativament a la missió que el Pare va voler encomanar-li, és model i mestra de tota vocació.\n\nDemanem a Maria per les mares, perquè visquin la seva maternitat com un do de Déu i com una particular vocació, educant integralment als seus fills i forjant a casa nous cristians compromesos amb la causa de l'evangeli.";
        titol5 = "La Coronació de Maria com a reina de cels i terra";
        referencia5 = "";
        text5 = "Maria, mare i model de l'Església, és la primera creient, la Mare de Déu, qui habita ja en el si del misteri trinitari. Tota vocació i tota forma de vida a l'Església troba un model fidedigne i una permanent intercessora en la figura de Maria.\n\nDemanem a Maria que protegeixi i tingui cura de totes les vocacions, especialment dels sacerdots. Que per la seva intercessió, siguin fidels al do de la vocació rebuda i duguin a terme amb generositat la seva missió.";
        break;
      case 1: //dilluns
      case 6: //dissabte
        misteris = 'GOIG';
        audio = 'goig';
        titol1 = "L'encarnació del Fill de Déu";
        referencia1 = "Lc 1, 26-38";
        text1 = "De la mateixa manera que Déu irromp en la vida de Maria a través de la mediació de l'àngel Gabriel per manifestar-li la vocació a la qual ha estat cridada, a nosaltres ens continua cridant per encomanar-nos una missió en el si de l'Església i en el món a través de diverses mediacions. Hem de restar atents per a descobrir la crida que Déu ens fa a servir-lo de diverses maneres en el nostre dia a dia.\n\nDemanem a Maria per tots aquells que estan discernint la seva vocació, aquells que es pregunten per la voluntat del Pare per a les seves vides, perquè estiguin atents a les mediacions que Déu posa en el seu camí per a descobrir la seva vocació.";
        titol2 = "Maria visita la seva cosina Elisabet";
        referencia2 = "Lc 1, 39-56";
        text2 = "En el silenci del camí cap a la casa de la seva cosina Elisabet, Maria medita sobre el do rebut. En l'ajuda donada a la seva cosina, en el servei desinteressat a qui ho necessita, es troba el sentit de tota vocació. La crida es tradueix sempre en actituds i gestos d'amor i en servei cap als altres, especialment els qui més ho necessiten.\n\nDemanem a Maria pels que viuen la seva vocació donant la seva vida en benefici dels altres. Demanem especialment pels laics que, a través de les seves ocupacions ordinàries, de les diferents professions que exerceixen i de les formes de vida que adopten, fan present l'obra de la creació i de la salvació enmig del món.";
        titol3 = "El Naixement de Jesús";
        referencia3 = "Mt 1, 18-25; Lc 2, 1-7";
        text3 = "En el misteri de Betlem, a la nuesa i la humilitat d’un pessebre, es fan presents la gràcia i la misericòrdia de Déu com a do per a tota la humanitat. Davant d'aquest gest d'amor, només cal el silenci de Maria i Josep i el reconeixement de la grandesa de Déu per part dels pastors que vénen a adorar el Nen.\n\nDemanem a Maria per l'Església, per tal que sigui fidel a la seva vocació de transmetre l’evangeli de la salvació a tots els homes.";
        titol4 = "La Presentació de Jesús al Temple";
        referencia4 = "Lc 2, 22-40";
        text4 = "Josep i Maria, fidels a la tradició jueva de presentar el fill primogènit a Déu, van al temple a realitzar la seva ofrena. D'aquesta manera, ens ensenyen una actitud cristiana fonamental: la de presentar i oferir contínuament la pròpia vida, amb les seves aspiracions i il·lusions, els seus goigs i preocupacions, a Déu, el nostre Pare, font i origen de la pròpia existència.\n\nDemanem a Maria pels consagrats i consagrades que s'esforcen constantment per presentar la seva pròpia vida a Déu, per oferir-se en constant oblació al Pare i als germans; per tal que siguin testimoni d'aquesta actitud cristiana de l'oferiment existencial davant de tots els homes.";
        titol5 = "Jesús és perdut i trobat al Temple";
        referencia5 = "Lc 2, 41-52";
        text5 = "El gest de Jesús està carregat d'una forta connotació simbòlica: enmig dels mestres i doctors de la Llei, comença a explicar-los les Escriptures, en el temple, el lloc de la presència de Déu. Els sacerdots també han de meditar la Paraula de Déu per oferir- nos una paraula actual i rellevant que orienti la nostra vida cristiana a través de la predicació i la guia de la comunitat eclesial.\n\nDemanem a Maria pels sacerdots perquè, atents a la Paraula, sàpiguen transmetre a tots els fidels la bona notícia de la salvació. Demanem-li a la nostra Mare, Maria, que els protegeixi i els faci perseverar amb fidelitat al do de la vocació rebuda.";
        break;
      case 2: //dimarts
      case 5: //divendres
        misteris = 'DOLOR';
        audio = 'dolor';
        titol1 = "Oració de Jesús a l'hort de Getsemaní";
        referencia1 = "Mc 14, 32-42; Mt 26, 36-46; Lc 22, 39-46";
        text1 = "Tot i l'angoixa i la tristesa, Jesús persevera en la pregària confiada al Pare, mostrant-nos en un moment tan singular l'essència de l'oració cristiana: posar-se en mans del Pare per complir la seva voluntat. Respondre a la crida que Déu ens fa a cada un de nosaltres comporta una gran dosi de confiança en Aquell que ens crida.\n\nDemanem a Maria per tots nosaltres, perquè se'ns concedeixi el do de la pregària, de l'encontre confiat amb Ell, i puguem respondre així a la crida particular que Ell ens fa.";
        titol2 = "Jesús és assotat a la columna";
        referencia2 = "Mc 15,15";
        text2 = "La fidelitat a la missió encomanada comporta en ocasions la incomprensió i el sofriment injust. La perplexitat que ens suscita la injustícia comesa contra Jesús augmenta en contemplar les desgràcies de les quals, al llarg de la història, han estat víctimes tants homes i dones. En els nostres dies, la injustícia i el sofriment segueixen fent acte de presència entre nosaltres.\n\nDemanem a Maria pels laics, perquè, sent fidels a la seva vocació específica, sàpiguen donar una resposta a la injustícia i el sofriment humà que es fa present en el nostre món, mostrant així als homes el cor misericordiós i compassiu del Pare.";
        titol3 = "La coronació d'espines";
        referencia3 = "Mc 15, 16-20; Mt 27, 27-31; Lc 23, 11;";
        text3 = "Entre befes i burles es revela paradoxalment la identitat de Crist: Ell és rei dels jueus, perquè és la Paraula encarnada, el centre i origen de la història. La reialesa de Crist no es manifesta en el poder i l'opressió, sinó en el servei humil i compassiu.\n\nDemanem a Maria pel Papa, els bisbes i els preveres, perquè guiïn a la comunitat cristiana amb humilitat i esperit de servei i, d'aquesta manera, vetllin per la vocació de cada un dels batejats.";
        titol4 = "Jesús amb la creu al coll, camí del Calvari";
        referencia4 = "Mc 15, 21-24; Mt 27, 32-38;";
        text4 = "En el camí cap al Calvari, Jesús contempla el mal i el sofriment present en la història de la humanitat des de la seva existència sofrent per assumir-lo i redimir- lo en el sacrifici de la creu.\n\nDemanem a Maria pels qui desgasten la seva vida en terres de missió, siguin sacerdots, religiosos o laics, perquè anunciïn constantment la bona notícia de la salvació que Jesús ens ha portat i enderroquin, en proclamar l'evangeli, els murs de la injustícia i l'opressió.";
        titol5 = "La crucifixió i mort del Senyor";
        referencia5 = "Mc 15, 33-41; Mt 27, 45-56;"
        text5 = "Davant el misteri de la creu, només queda el silenci. El que aquí s’esdevé no és simplement una mort injusta, sinó el misteri de la redempció humana. Davant el misteri, les úniques actituds possibles són la fe i el silenci agraït.\n\nDemanem a Maria pels religiosos, especialment pels de vida contemplativa, per tal que al viure amb plenitud la vocació a la qual han estat cridats, ens mostrin a tots els batejats la manera de ser partícips dels misteris de la nostra fe.";
        break;
      case 4: //dijous
        misteris = 'LLUM';
        audio = 'llum';
        titol1 = "El Baptisme de Jesús en el Jordà";
        referencia1 = "Mc 1, 9-11; Mt 3, 13-17; Lc 3, 21-22";
        text1 = "Tu ets el meu Fill, el meu estimat, en qui m'he complagut (Mc 1, 11b). Aquestes paraules que se senten des cel referint-se a Jesús en el moment del baptisme al Jordà, ens són repetides a cada batejat des del mateix moment en què, pel baptisme cristià, passem a formar part de l'Església, de la comunitat dels fills de Déu. Pel baptisme som cridats a la santedat, a formar part del misteri d'amor que és Déu, Pare, Fill i Esperit Sant.\n\nDemanem a Maria per tots els batejats perquè, fidels a la crida a la santedat suscitada en el seu baptisme, traduïm la santedat de la qual ja vam participar en gestos concrets de caritat i fraternitat.";
        titol2 = "Jesús a les noces de Canà";
        referencia2 = "Jn 2, 1-11";
        text2 = "En el miracle de les noces de Canà, Jesús es mostra a si mateix com a font permanent de pau i vida. Jesús és l'únic que sadolla la nostra set d'alegria i felicitat, que ens dóna a beure 'vi nou'. En aquest gest, Jesús anticipa el lliurament del seu cos i de la seva sang, lliurament que rememorem en cada Eucaristia.\n\nDemanem a Maria pels matrimonis perquè, en simbolitzar l'íntima unió existent entre Crist i la seva Església, perseverin en el seu compromís d'unitat i constitueixin en les seves llars autèntiques esglésies domèstiques.";
        titol3 = "L'anunci del Regne de Déu i invitació a la conversió";
        referencia3 = "Mc 1, 15";
        text3 = "En el seu peregrinar pels pobles de Galilea, a curar els malalts i expulsar els dimonis, Jesús proclama l'arribada del Regne de Déu. Per acollir-lo, cal convertir- se, deixar-se transformar el cor per Déu, trastocar la nostra escala de valors. La nostra vocació cristiana comporta una obertura fonamental a la conversió, a deixar que els valors del Regne de Déu facin niu en el nostre cor.\n\nDemanem a Maria pels laics perquè, en l'exercici de les seves tasques ordinàries, s’esforcin per fer visible el Regne de Déu entre els homes i construeixin una societat cada vegada més d'acord amb els valors del Regne.";
        titol4 = "La Transfiguració del Senyor";
        referencia4 = "Mt 17, 1-9; Mc 9, 2-13; Lc 9, 28-36";
        text4 = "Aquest és el meu Fill estimat, en qui m'he complagut, escolteu-lo. Enmig de l'activitat apostòlica, Jesús mostra als seus deixebles més propers la seva identitat més profunda: la seva condició de Fill de Déu. Conèixer el Crist és un do, una experiència de gràcia. La iniciativa radica en el seu ésser diví i no pot ser forçada per la voluntat humana.\n\nDemanem a Maria pels religiosos perquè siguin testimonis de la vida plena en Déu entre els cristians i la humanitat sencera; perquè les seves vides siguin signe eloqüent que Déu és el bé màxim i suprem al qual pot aspirar el cor humà.";
        titol5 = "La institució de l'Eucaristia";
        referencia5 = "Lc 22, 14-22; 1Co 11, 24-25;"
        text5 = "Cada vegada que celebrem l'Eucaristia, actualitzem la salvació volguda pel Pare i duta a terme per Crist en el seu Misteri Pasqual. Ell mateix ens va manar celebrar aquest misteri. Davant el misteri només pot haver-hi la veneració i la participació joiosa, conscients que en ell radiquen la font i el sentit de la nostra existència.\n\nDemanem a Maria pels sacerdots, perquè en presidir la celebració de l'Eucaristia representant Crist i la seva Església, trobin en ella el fonament del seu ministeri i visquin la seva vocació amb un profund sentit eucarístic.";
        break;
    }

    const lletanies =
    "Senyor, tingueu pietat\nR. Senyor, tingueu pietat\nCrist, tingueu pietat\nR. Crist, tingueu pietat\nSenyor, tingueu pietat\nR. Senyor, tingueu pietat\n\nCrist, oïu-nos\nR. Crist, oïu-nos\nCrist, escolteu-nos\nR. Crist, escolteu-nos\n\nDéu, Pare celestial\nR. Tingueu pietat de nosaltres.\nDéu, Fill redemptor del món\nR. Tingueu pietat de nosaltres.\nDéu, Esperit Sant\nR. Tingueu pietat de nosaltres.\nTrinitat Santa, un sol Déu\nR. Tingueu pietat de nosaltres.\n\nSanta Maria\nSanta Mare de Déu\nSanta Verge de les Verges\nMare del Crist\nMare de l’Església\nMare de la divina gràcia\nMare puríssima\nMare castíssima\nMare virginal\nMare sense corrupció\nMare immaculada\nMare amable\nMare admirable\nMare del bon consell\nMare del Creador\nMare del Salvador\nVerge prudentíssima\nVerge venerable\nVerge predicable\nVerge potent\nVerge clement\nVerge fidel\nMirall de justícia\nSeu de la saviesa\nCausa de la nostra alegria\nVas espiritual\nVas honorable\nVas insigne de devoció\nRosa mística\nTorre de David\nTorre de marfil\nCasa daurada\nArca de l’aliança\nPorta del cel\nEstel del matí\nSalut dels malalts\nRefugi dels pecadors\nConsoladora dels afligits\nAuxili dels cristians\nReina dels àngels\nReina dels patriarques\nReina dels profetes\nReina dels apòstols\nReina dels màrtirs\nReina dels confessors\nReina de les verges\nReina de tots els sants\nReina concebuda sens pecat original\nReina al cel assumpta\nReina del sacratíssim Rosari\nReina de les famílies\nReina de la pau\n\nAnyell de Déu que lleveu el pecat del món.\nR. Perdoneu-nos, Senyor.\nAnyell de Déu que lleveu el pecat del món.\nR. Escolteu-nos, Senyor.\nAnyell de Déu que lleveu el pecat del món.\nR. Tingueu pietat de nosaltres.\n\nPregueu per nosaltres, santa Mare de Déu.\nR. Perquè siguem dignes de les promeses de nostre Senyor Jesucrist."

    const oraFi = "Concediu, Senyor Déu, als vostres servents que frueixin de salut perpètua en l’ànima i en el cos; i per la gloriosa intercessió de la benaurada sempre Verge Maria, siguin ara alliberats de tristesa, i gaudeixin després l’alegria eterna del cel. Us ho demanem per Crist, Senyor nostre. Amén."
    const gloriaString = "Glòria al Pare i al Fill i a l'Esperit Sant. Com era al principi, ara i sempre i pels segles dels segles. Amén.";

    if(type==='Rosari'){
      return(
        <View>
          <Text style={GLOBAL.bigTitle}>MISTERIS DE {misteris}</Text>
          <Text style={GLOBAL.referencia}>Rosari resat pels seminaristes de Catalunya</Text>
          <View style={styles.misteriContainer}>
            <TouchableOpacity onPress={this.comentariPressed.bind(this,1)}>
              <View style={styles.titolMisteri}>
                <Text style={GLOBAL.litleTitle}>1. {titol1}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 20, justifyContent: 'center'}}>
                    <Text style={GLOBAL.referencia}>{referencia1}</Text>
                  </View>
                  <View style={{flex: 1, paddingRight: 10, justifyContent: 'center'}}>
                    {this.state.press1 ?
                      <Icon
                        name="ios-arrow-down"
                        size={25}
                        color="#424242"
                      />
                      :
                      <Icon
                        name="ios-arrow-forward-outline"
                        size={25}
                        iconStyle={{padding: 50}}
                        color="#424242"
                      />
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.descripcioMisteri}>
              {this.state.press1 ?
                <View>
                  <Text style={GLOBAL.normalText} selectable={true}>{text1}</Text>
                  <Text />
                  <Hr lineColor='#CFD8DC' />
                  <Text />
                </View>
                : null
              }
              <Text style={GLOBAL.italicNormalText} selectable={true}>{this.state.preg1}</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={`${audio}1.mp3`}
                        colorThumb={GLOBAL.thumbColor}
                        colorTrack={GLOBAL.trackColor}/>
            </View>
          </View>

          <Hr lineColor='rgba(166, 183, 191, 0.9)' />

          <View style={styles.misteriContainer}>
            <TouchableOpacity onPress={this.comentariPressed.bind(this,2)}>
              <View style={styles.titolMisteri}>
                <Text style={GLOBAL.litleTitle}>2. {titol2}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 20, justifyContent: 'center'}}>
                    <Text style={GLOBAL.referencia}>{referencia2}</Text>
                  </View>
                  <View style={{flex: 1, paddingRight: 10, justifyContent: 'center'}}>
                    {this.state.press2 ?
                      <Icon
                        name="ios-arrow-down"
                        size={25}
                        color="#424242"
                      />
                      :
                      <Icon
                        name="ios-arrow-forward-outline"
                        size={25}
                        iconStyle={{padding: 50}}
                        color="#424242"
                      />
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.descripcioMisteri}>
              {this.state.press2 ?
                <View>
                  <Text style={GLOBAL.normalText} selectable={true}>{text2}</Text>
                  <Text />
                  <Hr lineColor='#CFD8DC' />
                  <Text />
                </View>
                : null
              }
              <Text style={GLOBAL.italicNormalText} selectable={true}>{this.state.preg2}</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={`${audio}2.mp3`}
                        colorThumb={GLOBAL.thumbColor}
                        colorTrack={GLOBAL.trackColor}/>
            </View>
          </View>

          <Hr lineColor='rgba(166, 183, 191, 0.9)' />

          <View style={styles.misteriContainer}>
            <TouchableOpacity onPress={this.comentariPressed.bind(this,3)}>
              <View style={styles.titolMisteri}>
                <Text style={GLOBAL.litleTitle}>3. {titol3}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 20, justifyContent: 'center'}}>
                    <Text style={GLOBAL.referencia}>{referencia3}</Text>
                  </View>
                  <View style={{flex: 1, paddingRight: 10, justifyContent: 'center'}}>
                    {this.state.press3 ?
                      <Icon
                        name="ios-arrow-down"
                        size={25}
                        color="#424242"
                      />
                      :
                      <Icon
                        name="ios-arrow-forward-outline"
                        size={25}
                        iconStyle={{padding: 50}}
                        color="#424242"
                      />
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.descripcioMisteri}>
              {this.state.press3 ?
                <View>
                  <Text style={GLOBAL.normalText} selectable={true}>{text3}</Text>
                  <Text />
                  <Hr lineColor='#CFD8DC' />
                  <Text />
                </View>
                : null
              }
              <Text style={GLOBAL.italicNormalText} selectable={true}>{this.state.preg3}</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={`${audio}3.mp3`}
                        colorThumb={GLOBAL.thumbColor}
                        colorTrack={GLOBAL.trackColor}/>
            </View>
          </View>

          <Hr lineColor='rgba(166, 183, 191, 0.9)' />

          <View style={styles.misteriContainer}>
            <TouchableOpacity onPress={this.comentariPressed.bind(this,4)}>
              <View style={styles.titolMisteri}>
                <Text style={GLOBAL.litleTitle}>4. {titol4}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 20, justifyContent: 'center'}}>
                    <Text style={GLOBAL.referencia}>{referencia4}</Text>
                  </View>
                  <View style={{flex: 1, paddingRight: 10, justifyContent: 'center'}}>
                    {this.state.press4 ?
                      <Icon
                        name="ios-arrow-down"
                        size={25}
                        color="#424242"
                      />
                      :
                      <Icon
                        name="ios-arrow-forward-outline"
                        size={25}
                        iconStyle={{padding: 50}}
                        color="#424242"
                      />
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.descripcioMisteri}>
              {this.state.press4 ?
                <View>
                  <Text style={GLOBAL.normalText} selectable={true}>{text4}</Text>
                  <Text />
                  <Hr lineColor='#CFD8DC' />
                  <Text />
                </View>
                : null
              }
              <Text style={GLOBAL.italicNormalText} selectable={true}>{this.state.preg4}</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={`${audio}4.mp3`}
                        colorThumb={GLOBAL.thumbColor}
                        colorTrack={GLOBAL.trackColor}/>
            </View>
          </View>

          <Hr lineColor='rgba(166, 183, 191, 0.9)' />

          <View style={styles.misteriContainer}>
            <TouchableOpacity onPress={this.comentariPressed.bind(this,5)}>
              <View style={styles.titolMisteri}>
                <Text style={GLOBAL.litleTitle}>5. {titol5}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 20, justifyContent: 'center'}}>
                    <Text style={GLOBAL.referencia}>{referencia5}</Text>
                  </View>
                  <View style={{flex: 1, paddingRight: 10, justifyContent: 'center'}}>
                    {this.state.press5 ?
                      <Icon
                        name="ios-arrow-down"
                        size={25}
                        color="#424242"
                      />
                      :
                      <Icon
                        name="ios-arrow-forward-outline"
                        size={25}
                        iconStyle={{padding: 50}}
                        color="#424242"
                      />
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.descripcioMisteri}>
              {this.state.press5 ?
                <View>
                  <Text style={GLOBAL.normalText} selectable={true}>{text5}</Text>
                  <Text />
                  <Hr lineColor='#CFD8DC' />
                  <Text />
                </View>
                : null
              }
              <Text style={GLOBAL.italicNormalText} selectable={true}>{this.state.preg5}</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={`${audio}5.mp3`}
                        colorThumb={GLOBAL.thumbColor}
                        colorTrack={GLOBAL.trackColor}/>
            </View>
          </View>

          <Text style={GLOBAL.litleTitle}>Lletanies</Text>
          <Text style={GLOBAL.normalText}>{lletanies}</Text>
          <Text />
          <View style={styles.audioContainer}>
            <AudioBar soundName={`${audio}Lletanies.mp3`}
                      colorThumb={GLOBAL.thumbColor}
                      colorTrack={GLOBAL.trackColor}/>
          </View>
          <Text />
          <Text />
          <Hr lineColor='#CFD8DC' />
          <Text />
          <Text style={GLOBAL.litleTitle}>Oració</Text>
          <Text style={GLOBAL.normalText}>{oraFi}</Text>
          <Text />
        </View>
      )
    }
    else{//misteri
      return(
        <View>
          <Text style={GLOBAL.bigTitle}>1r MISTERI DE {misteris}</Text>
          <Text style={GLOBAL.referencia}>Rosari resat pels seminaristes de Catalunya</Text>
          <View style={styles.misteriContainer}>
            <View style={styles.titolMisteri}>
              <Text style={GLOBAL.litleTitle}>{titol1}</Text>
              <Text style={GLOBAL.referencia}>{referencia1}</Text>
            </View>
            <View style={styles.descripcioMisteri}>
              <Text style={GLOBAL.normalText} selectable={true}>{text1}</Text>
              <Text />
              <Hr lineColor='#CFD8DC' />
              <Text />
              <Text style={GLOBAL.italicNormalText} selectable={true}>{this.state.preg1}</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={`${audio}1.mp3`}
                        colorThumb={GLOBAL.thumbColor}
                        colorTrack={GLOBAL.trackColor}/>
            </View>
          </View>
        </View>
      )
    }
  }

  comentariPressed(numMisteri){
    switch (numMisteri) {
      case 1:
        this.setState({press1: !this.state.press1});
        break;
      case 2:
        this.setState({press2: !this.state.press2});
        break;
      case 3:
        this.setState({press3: !this.state.press3});
        break;
      case 4:
        this.setState({press4: !this.state.press4});
        break;
      case 5:
        this.setState({press5: !this.state.press5});
        break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: paddingBar()
  },
  audioContainer:{
    height: 30,
    //borderRadius: 10,
    //borderWidth: 2,
    //borderColor: 'rgba(192, 164, 153, 0.5)',
    //backgroundColor: 'rgba(96, 83, 79, 0.22)',
  },
  misteriContainer: {
    flex:1,
    paddingVertical: 15,
  },
  titolMisteri: {
    flexDirection: 'column',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 52, 100, 0.1)',//'rgba(66,73,109,0.2)',
    borderRadius: 5,
    //borderWidth: 2,
    //borderColor: 'rgba(0, 52, 100,)'//'rgba(66,73,109,0.4)',
  },
  descripcioMisteri: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
