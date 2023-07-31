import { Linking, View, Text,Image,StyleSheet ,TouchableOpacity, Pressable,SafeAreaView,
  ScrollView,FlatList,Dimensions,} from 'react-native'
import React,{useState} from 'react'
import Modal from "react-native-modal";
import download_pdf from '../../assets/download_pdf.png'






var itemIndex = 0;


//start of main
const ImagSlider = ({data}) => {

  const [itemModel, setItemModel] = useState();

  const Item = ({item}) => (
    
    <View style={styles.itemBox}>

  <TouchableOpacity 
  onPress={()=>imgPressed(item)}
  >


    <View style={
      {
        flex:1,
        backgroundColor: item.color, 
        marginVertical:'0.4%',    
        flexDirection:'row',
        justifyContent:'space-around',
        
        
  
      }
    }>
  
<View style={styles.itemImage}>
                <Image
                  style={styles.mainImage}
                  source={item.image}
                  />
                  <Text style={{
                    fontSize:Dimensions.get('window').width>815?20:10,
                    borderWidth:1,
                    backgroundColor: item.color,
                    textAlign:'center',
                    alignSelf:'stretch',
                    justifyContent:'center',
                    alignItems:'center',
                    textAlignVertical:'center',
                    borderRadius:7,
                    borderColor:'white',
                    margin:'1%',
                  }}>{item.name}</Text>
    </View>


                  </View>


   
    </TouchableOpacity>
    </View>
  );
  
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] =  useState('');
  const [modalImage, setModaImage] =  useState('');
  const [modalPdfLink, setModalPdfLink] =  useState('');
  
const imgPressed=(item)=>{

  setModaImage(item.image)
  setModalTitle(item.name);
  setModalData(item);
  setModalVisible(true);
  console.log('name')
  console.log(modalImage);
  // console.log(data);
 // console.log(data[key.index].name);


}

  function logoPressed() { 
    console.log('pdf pressed');
    console.log(modalData.pdfLink);
    Linking.openURL(modalData.pdfLink);
  }

  const imageClossed = () => {

    console.log('imageClossed');
  }


  return (
  
    <View style={styles.dfual}>
      {
        //when an item pressed this shows up
      }
      
      <Modal
        animationType='fade'
        isVisible={modalVisible}
        onBackdropPress={()=> setModalVisible(false)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
          <View style={styles.modalView}>
          <View style={styles.itemView}>
            <View style={styles.itemDataCard}>
            <Text style={styles.modalTextTitle}>{modalData.name}</Text>
            <Text style={styles.modalText}>{modalData.vehicleType}</Text>

            </View>

            <View style={styles.itemImageView}>
              <TouchableOpacity onPress={logoPressed} style={styles.imagePressed}>
            <Image
                style={styles.modalImageS}
                source={download_pdf}
                />
                </TouchableOpacity>
                </View>
                </View>

               

            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
      </Modal>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
    
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data}
        renderItem={({item}) =>
         <Item item={item}
          />}
          numColumns={Dimensions.get('window').width>815?4:1}
        keyExtractor={item => item.name}
      />
     </SafeAreaView>
      </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({

  textStyle:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
  },
  container:{
    flex:1,
    flexDirection:'column',
  },
  companyLink:{
    flex:1,
  },

  imagePressed:{
    flex:1,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',
  },

  scrollContainer:{
    flexDirection:'column',
    flex:1,
  },
  safeContainer:{
    flexDirection:'column',
    flex:1,
    backgroundColor:'#ededef',
  },
  itemDataCard:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    marginVertical:'4%',
  },
  itemImage:{
    ...Dimensions.get('window').width>815?{flex:2}:{flex:2},
    ...Dimensions.get('window').width>815?{height:Dimensions.get('window').height/3}:{height:Dimensions.get('window').height/6},

    borderRadius:10,
    borderWidth:1,
    borderStyle:'dashed',
    backgroundColor:'white',
    justifyContent:'center',
  },
  itemText:{
    
  },
  itemImageView:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'center',
    width:'25%',
    height:'25%',

  },
  


  itemView:{
    flex:5,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
  },

    dfual:{
      flex:1,
      display:'flex',
    },

    modalImageS:{
      flex:1,
      resizeMode:'contain',
      alignSelf:'stretch',
      borderWidth:1,
    },
    centeredView: {
      flex: 1,
      alignSelf:'strech',
      borderWidth:10,

    },
   
   modalView: {
    backgroundColor: '#fbe787',
    borderWidth:3,
    flexDirection:"column",
    borderRadius: 20,
    alignItems: 'center',
    padding: '1%',
    shadowColor: '#c1dae0',
    alignSelf:'center',
    height:'50%',   
    width:'20%',
    flexDirection:'column',
    borderColor:'#605835',
    },
    container: {
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        }
    },
    mainImage: {
      flex:1,
      resizeMode:'contain',
      
    },

    itemBox:{
    //  margin:'0.5%',
     flex:1,
     borderColor:'black',
     margin:'0.15%',
     backgroundColor:'white',
    },

    item: {
      flex:1,
      backgroundColor: '#86bbd8', 
      marginVertical:'0.4%',    
      flexDirection:'row',
      justifyContent:'space-around',
      borderWidth:2,
      borderColor:'white',
    },
    modalTextTitle:{
      fontSize:20,
      margin:'5%',
      fontWeight:'bold',
      color:'black',
      textDecorationLine:'underline',
    },
    modalText:{
      fontSize:15,
      color:'black',
      textAlign:'center',
    },
    buttonx: {
      borderRadius: 10,
      marginTop:'12%',
      padding: 5,
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#605835',
    },
    

    
  });

export default ImagSlider