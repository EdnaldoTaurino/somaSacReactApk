import { StyleSheet, Dimensions } from "react-native";
import {
  //lib response
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import {
  //lib response 2
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  //------------------------ login ------------------------------
  containerLogin: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    flexGrow:1,
    position: "absolute",
    width: moderateScale(300), // moderateScale deixou responsivo em telas maiores
    height: moderateScale(130), 
    top: '8%',
  },

  email: {
    fontSize: 18,
    color: "#0000006E",
    textAlign: "left",
    marginBottom: 10,
    marginRight: 292,
  },

  senha: {
    fontSize: 18,
    color: "#0000006E",
    textAlign: "left",
    marginRight: 292,
  },

  input: {
    backgroundColor: "#f5f5f5",
    width: 350,
    height: 55,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
  },

  passwordVisibilityButton: {
    position: "relative",
    left: 312,
    bottom: 60,
  },

  esqueceuSenha: {
    fontSize: 14,
    color: "#7a7a7a",
    textDecorationLine: "underline",
    marginLeft: 200,
  },

  containerForm: {
    marginTop: 180,
  },

  buttonContainer: {
    position: "fixed",
    top: 30,
    width: "100%",
    alignItems: "center",
    marginBottom: -85,
  },

  button: {
    backgroundColor: "orange",
    width: 280,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 20,
  },

  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },

  //------------------------ login ----------------------------

  //------------------------ HomeScreen, ContactScreen, Settings ----------------------------
  container2: {
    flex: 1,
  },

  containerSettings: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  msgContainer: {
    flex: 1,
    flexDirection: "column",
    top: 15,
  },

  notification: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "orange",
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "orange",
    textAlign: "center",
    textAlignVertical: "center",
    left: 210,
    bottom: 30,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 100,
  },

  textUsuario: {
    fontSize: 18,
    marginVertical: 10,
    color: "#000000",
    marginBottom: 300,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  textTabNav: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  //------------------------ HomeScreen, ContactScreen, Settings ----------------------------

  // ------------------------------------ settings screen -----------------------------------

  confirmModal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.4)", //fundo escuro
    justifyContent: "center",
    alignItems: "center",
  },

  confirmModalText: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffff",
    opacity: 0.98,
    borderRadius: 10,
    marginTop: 100,
    fontSize: 18,
  },

  confirmModalButtons: {
    flexDirection: "row",
    padding: 10,
    width: 150,
    height: 50,
  },

  OkModalButton: {
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    left: 50,
    width: 120,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "red",
  },

  cancelModalButton: {
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    right: 50,
    width: 120,
    height: 50,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "blue",
  },
  

  // ------------------------------------ settings screen -----------------------------------

  //-------------------------------------------------------------------------------- Tela new chat

  containerNewChat: {
    flex: 1,
    paddingHorizontal: responsiveWidth(1.5),
  },

  headerNewChat: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textNewChatTop: {
    marginBottom: moderateScale(30),
  },

  containerBody: {
    flex:1,
    //backgroundColor: "purple",
  },

  troncoContainer: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#DDD",
    borderWidth: scale(1),
    borderRadius: scale(5),
    width: "auto",
    height: moderateScale(50),
  },

  containerDddPara: {
    paddingTop: scale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dddContainer: {
    width: "auto",
    height: 50,
    flexGrow: 1,
    margin: 5,
    borderColor: "#92929231",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },

  inputNumber: {
    width: "auto",
    height: 50,
    flexGrow: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: "#92929231",
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },

  searchTemplateContainter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: windowHeight * 0.02,
    width: "auto",
    height: '10%',
    flexGrow: 1,
    margin: 5,
    elevation: 3,
    borderRadius: 8,
  },

  clearSelectionText: {
    fontSize: 18,
    color: "#000",
  },

  selectTemplate: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.08,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 8,
  },

  templatesContainter: {
    height:'42%',
    width: 'auto',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    top: "2%",
    elevation: 3,
    borderRadius: 8,
    padding: 2,
  },

  containerFooterNewChat: {
    height:80,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "black",
  },

  buttonIniciarChat: {
    backgroundColor: "#fb9124",
    width: windowWidth * 0.8,
    height: windowHeight * 0.08,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    bottom:'20%'
  },

  //------------------------------------------------------------------------------- Tela new chat

  // ------------------------------------------------------------------------------- Tela de chat conversando

  containerChat: {
    flex: 1,
    width: windowWidth * 0.99,
    backgroundColor: "white",
  },

  backButtonChat: {
    position: "absolute",
    zIndex: 2,
    top: "3.5%", //mudar para windowWidht * 0.0 valor se n ficar responsivo em outros telefones como está
    left: "1%", //mudar para windowWidht * 0.0 valor se n ficar responsivo em outros telefones como está
  },

  // userContainer: {
  //   backgroundColor: "#FB8F2491",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   zIndex: 0,
  //   borderWidth: 1,
  //   borderColor: "#FB8F2491",
  //   width: "106%",
  //   height: "10%",
  // },

  options: {
    position: "absolute", // retirar o "absolute" colocar em row todos os itens criando uma view e um stilo containerHeader para
    // colocar todos os itens em row e responsivo.
    zIndex: 6,
    width: 40,
    height: 40,
    left: "85%",
    bottom: windowHeight * 0.015,
  },

  containerBottom: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  chatContent: {
    //marginTop: "20%",
  },

  containerMsg: {
    alignSelf: "flex-end", // Alinhe para a direita
    backgroundColor: "#FB8F242D",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "orange",
    marginTop: "4%",
  },

  msg: {
    padding: 6,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  buttonTemplates: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fb9124",
    width: 300,
    height: 60,
    borderRadius: 12,
    marginBottom: 8,
    top: "4%",
  },

  text24h: {
    alignItems: "center",
    justifyContent: "center",
    color: "#7f7f7f",
    fontWeight: "bold",
    backgroundColor: "#F703034B",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "orange",
    width: 300,
    height: 55,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: "85%",
    backgroundColor: "white",
    windowHeight: "60%", // 60% da altura da tela
    alignSelf: "center",
    padding: 16,
    borderRadius: 16,
  },

  templateText: {
    fontSize: 15,
    padding: 6,
  },

  closeText: {
    fontSize: 18,
    padding: 16,
    marginTop: 30,
    textAlign: "center",
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    borderRadius: 10,
  },
  // ------------------------------------------------------------------------------- Tela de chat conversando

  //-------------------------------------------------------------------------------- SaveContact

  containerSaveContact: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "white",
    backgroundColor: "#E2E2E2",
  },

  containerText: {
    justifyContent: "flex-start",
    padding: 8,
    backgroundColor: "#F7FAFC",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.5,
    elevation: 10,
  },

  inputName: {
    width: 350,
  },

  inputText: {
    backgroundColor: "#f5f5f5",
    height: windowHeight * 0.058,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
  },

  dddPhone: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: "5%",
  },

  ddd: {
    backgroundColor: "#f5f5f5",
    width: windowWidth * 0.39,
    height: windowHeight * 0.06,
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#92929231",
    borderWidth: 1,
    borderRadius: 10,
  },

  inputPhone: {
    backgroundColor: "#f5f5f5",
    width: windowWidth * 0.39,
    height: windowHeight * 0.062,
    borderWidth: 1,
    borderColor: "#92929231",
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  cpf: {
    backgroundColor: "#f5f5f5",
    width: windowWidth * 0.39,
    height: windowHeight * 0.062,
    borderWidth: 1,
    borderColor: "#92929231",
    paddingHorizontal: 10,
    borderRadius: 10,
    top: "25%",
  },

  saveContactButton: {
    backgroundColor: "#fb9124",
    width: windowWidth * 0.8,
    height: windowHeight * 0.08,
    top: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  //-------------------------------------------------------------------------------- SaveContact

  //-------------------------------------------------------------------------------- TransferContact

  containerTransfer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  textTransfer: {
    flexDirection: "column",
  },

  titleTransfer: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "10%",
  },
  //-------------------------------------------------------------------------------- TransferContact

  //-------------------------------------------------------------------------------- FinishScreen

  containerFinish: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  titleFinish: {
    fontSize: 20,
    fontWeight: "bold",
    top: "30%",
  },

  buttonFinalizar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fb9124",
    width: "80%",
    height: "8%",
    borderRadius: 12,
    top: windowHeight * 0.7,
  },

  //-------------------------------------------------------------------------------- FinishScreen

  //-------------------------------------------------------------------------------- ContactScreen

  containerContact: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },

  textTopContact: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
    marginTop: "12%",
  },

  titleContact: {
    fontSize: 20,
    fontWeight: "bold",
  },

  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "4%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  contactName: {
    marginLeft: "2%",
    fontSize: 16,
  },

  //-------------------------------------------------------------------------------- ContactScreen

  // ------------------------------------------------------------------------------- Tela de chat conversando

  // HOME NOVO ------------------------

  loginscreen: {
    flex: 1,
    backgroundColor: "#EEF1FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: "100%",
  },
  loginheading: {
    fontSize: 26,
    marginBottom: 10,
  },
  logininputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logininput: {
    borderWidth: 1,
    width: "90%",
    padding: 8,
    borderRadius: 2,
  },
  loginbutton: {
    backgroundColor: "green",
    padding: 12,
    marginVertical: 10,
    width: "60%",
    borderRadius: "50%",
    elevation: 1,
  },
  loginbuttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  chatscreen: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 14,
    position: "relative",
  },
  chatheading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  chattopContainer: {
    backgroundColor: "#F7F7F7",
    height: 70,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    marginBottom: 15,
    elevation: 2,
  },
  chatheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatlistContainer: {
    paddingHorizontal: 1,
  },
  chatemptyContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  chatemptyText: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 30,
  },
  messagingscreen: {
    flex: 1,
  },
  messaginginputContainer: {
    width: "100%",
    minHeight: 100,
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
  messaginginput: {
    borderWidth: 1,
    padding: 15,
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
  },
  messagingbuttonContainer: {
    width: "30%",
    backgroundColor: "#fb9124",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  // modalbutton: {
  //     width: "40%",
  //     height: 45,
  //     backgroundColor: "green",
  //     borderRadius: 5,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     color: "#fff",
  // },
  // modalbuttonContainer: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     marginTop: 10,
  // },
  // modaltext: {
  //     color: "#fff",
  // },
  // modalContainer: {
  //     width: "100%",
  //     borderTopColor: "#ddd",
  //     borderTopWidth: 1,
  //     elevation: 1,
  //     height: 400,
  //     backgroundColor: "#fff",
  //     position: "absolute",
  //     bottom: 0,
  //     zIndex: 10,
  //     paddingVertical: 50,
  //     paddingHorizontal: 20,
  // },
  // modalinput: {
  //     borderWidth: 2,
  //     padding: 15,
  // },
  // modalsubheading: {
  //     fontSize: 20,
  //     fontWeight: "bold",
  //     marginBottom: 15,
  //     textAlign: "center",
  // },
  mmessageWrapper: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  mmessage: {
    maxWidth: "50%",
    backgroundColor: "#f5ccc2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
  mvatar: {
    marginRight: 5,
  },
  cchat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    height: 80,
    marginBottom: 10,
  },
  cavatar: {
    marginRight: 15,
  },
  cusername: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  cmessage: {
    fontSize: 12,
    opacity: 0.7,
    maxWidth: 310,
  },
  crightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingRight: 4,
  },
  ctime: {
    opacity: 0.5,
  },

  /////////////////////////////////////////////////////////////////////////

  // TESTE ----------------------

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 10,
  },
  header: {
    top: 10,
    height: 50,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    fontSize: 20,
  },
  footer: {
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 16,
  },
});

export { styles }; // só asism para outras paginas aceitarem o estilo do css sem isso não funciona.
