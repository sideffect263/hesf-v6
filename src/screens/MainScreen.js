import { 
  View,Button,  SafeAreaView,
  ScrollView, Image, Platform, useWindowDimensions, Dimensions,
  Text, StyleSheet, Pressable,
   Alert ,TouchableOpacity, Modal, Linking
   } from 'react-native'
import React,{useState} from 'react'
import ImagSlider from '../componets/ImagSlider';
import DataFilter from '../componets/DataFilter';
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import anyIcon from '../../assets/9b9/everything.png'
import boomIcon from '../../assets/9b9/boom-lift-icon.png'
import DataRange from '../componets/DataRange';
import vertical from '../../assets/9b9/vertical.png'
import horizontal from '../../assets/9b9/horizontal.png'
import forkliftIcon from '../../assets/9b9/forklift.png'
import teleBoom from '../../assets/9b9/boom-lift-tele.png'
import handEngine from '../../assets/9b9/hand-engine.png'
import electricEngine from '../../assets/9b9/electric-engine.png'
import gasEngine from '../../assets/9b9/gas-engine.png'
import asphalt from '../../assets/9b9/asphalt.png'
import soil from '../../assets/9b9/soil.png'
import uneven from '../../assets/9b9/uneven.png'
import level from '../../assets/9b9/level.png'
import toolBox from '../../assets/9b9/tool-box.png'
import logo from '../../assets/ofekLogo.png'
import reset from '../../assets/undo.png'
import engineType from '../../assets/9b9/engineType.png'
import groundNagle from '../../assets/9b9/groundNagle.png'
import groundType from '../../assets/9b9/groundType.png'
import workLocation from '../../assets/9b9/workLocation.png' 
import accesibilty_icon from '../../assets/data_selector/accesibilty_icon.png'
import filter_data_icon from '../../assets/data_selector/filter_data_icon.png'
import hight_icon from '../../assets/data_selector/hight_icon.png'
import horizontal_icon from '../../assets/data_selector/horizontal_icon.png'
import viechle_type from '../../assets/data_selector/viechle_type.jpg'
import image4069LE from '../../assets/kelim/4069LE.png'
import image10E from '../../assets/kelim/10E.png'
import image120AETJ from '../../assets/kelim/120AETJ.png'
import image1230ES from '../../assets/kelim/1230ES.png'
import image150AETJ from '../../assets/kelim/150AETJ.png'
import image170AETJ from '../../assets/kelim/170AETJ.png'
import image260MRT from '../../assets/kelim/260MRT.png'
import image460SJ from '../../assets/kelim/460SJ.png'
import image1350 from '../../assets/kelim/1350.png'
import imageGR15 from '../../assets/kelim/GR15.png'
import imageGR20 from '../../assets/kelim/GR20.png'
import imageGS1330 from '../../assets/kelim/GS1330.png'
import imageGS1930 from '../../assets/kelim/GS1930.png'
import imageGS2032 from '../../assets/kelim/GS2032.png'
import imageGS2632 from '../../assets/kelim/GS2632.png'
import imageGS3232 from '../../assets/kelim/GS3232.png'
import imageGS3246 from '../../assets/kelim/GS3246.png'
import imageGS3384RT from '../../assets/kelim/GS3384RT.png'
import imageGS4047 from '../../assets/kelim/GS4047.png'
import imageGS4069 from '../../assets/kelim/GS4069.png'
import imageGS4069RT from '../../assets/kelim/GS4069RT.png'
import imageGS5390RT from '../../assets/kelim/GS5390RT.png'
import imageGTZZ15J from '../../assets/kelim/GTZZ15J.png'
import imageS45 from '../../assets/kelim/S45.png'
import imageS65 from '../../assets/kelim/S65.png'
import imageS85 from '../../assets/kelim/S85.png'
import imageSX125 from '../../assets/kelim/SX125.png'
import imageZ30 from '../../assets/kelim/Z30.png'
import imageZ34D from '../../assets/kelim/Z34D.png'
import imageZ34E from '../../assets/kelim/Z34E.png'
import imageZ45D from '../../assets/kelim/Z45D.png'
import imageZ45E from '../../assets/kelim/Z45E.png'
import imageZ51 from '../../assets/kelim/Z51.png'
import imageZ60 from '../../assets/kelim/Z60.png'
import imageZ80 from '../../assets/kelim/Z80.png'


const data = [//holds all the raw data
{
  name: '1230ES',
  vehicleType: 'במת יחיד',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '5.60',
  liftStrenght: '0.227',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'JLG',
  color:'#ff773d',
  image:image1230ES,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/1230ES.pdf',
},
{
  name: 'GR15',
  vehicleType: 'במת יחיד',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '6.50',
  liftStrenght: '0.227',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'Genie',
  color:'#86bbd8',
  image:imageGR15,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GR15.pdf',
},
{
  name: 'GR20',
  vehicleType: 'במת יחיד',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '8.00',
  liftStrenght: '0.159',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'Genie',
  color:'#86bbd8',
  image:imageGR20,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GR20.pdf',
},
{
  name: '10E',
  vehicleType: 'במת תורן אנכי',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '10.00',
  liftStrenght: '0.200',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'JLG',
  color:'#ff773d',
  image:image10E,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/TOUCAN__10E.pdf',
},

  {
    name: 'GS1330',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '5.90',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    image:imageGS1330,
    color:'#86bbd8',
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en/gs1330m_spec_2019-11-26.pdf',
  },
  {
    name: 'GS1930',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '7.80',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    image:imageGS1930,
    color:'#86bbd8',
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS1932.pdf'
  },
  {
    name: 'GS2032',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '8.00',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS2032,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS2032.pdf'
  },
  {
    name: 'GS2632',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '9.90',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS2632,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS2632.pdf'
  },
  {
    name: 'GS3246',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '11.70',
    liftStrenght: '0.318',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS3246,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS3246.pdf'
  },
  {
    name: 'GS4047',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '13.70',
    liftStrenght: '0.350',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS4047,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en-gb/gs-4047-product-specifications-2020.pdf?sfvrsn=30a86589_2'
  },
  {
    name: '4069LE',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image4069LE,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/4069LE.pdf'
  },
  {
    name: 'GS3232',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.70',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS3232,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/ko/gsspec_gs3232_gs3246_en-us-apac_lr.pdf?sfvrsn=a813c4f1_3'
  },
  {
    name: 'GS4069',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS4069,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/rough-terrain-scissor-lifts/en-sg/2022/2022-spec-sheet-gs2669rt_gs3369rt_gs4069rt-ansi-(sea).pdf?sfvrsn=912b1616_3'
  },
  
   {
    name: '260MRT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '9.90',
    liftStrenght: '0.560',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image260MRT,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/260MRT.pdf'
  },
  {
    name: 'GS3384RT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '12.00',
    liftStrenght: '0.450',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS3384RT,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS3384RT.pdf',
  },
  {
    name: 'GS4069RT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '14.00',
    liftStrenght: '0.363',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS4069RT,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en/2022/gsspec_gs2669_rt_gs3369_rt_gs4069_rt_en-us_na_lr.pdf?sfvrsn=e477c727_3',
  },
  {
    name: 'GS5390RT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '18.00',
    liftStrenght: '0.680',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS5390RT,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS5390RT.pdf',
  },
  {
    name: 'Z30',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.00',
    liftStrenght: '0.227',
    liftAccesibility: '6.30',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ30,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/articulated-boom-lift/en/2022/zboomspec_z30_20n_z30_20n_rj_en-us_na_lrec42dc61-4a3d-4937-a372-497615db2242.pdf?sfvrsn=6db84fd1_3'
  },
  {
    name: '120AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.90',
    liftStrenght: '0.200',
    liftAccesibility: '7.00',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:image120AETJ,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/120AETJ.pdf'
  },
  {
    name: 'Z34-E',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '12.50',
    liftStrenght: '0.215',
    liftAccesibility: '6.50',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ34E,
    pdfLink:"https://www.ofeklift.com/images/pdf/product_catalog/Z34-22N.pdf"
  },
  {
    name: '150AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '15.00',
    liftStrenght: '0.200',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:image150AETJ,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/150AETJ.pdf'
  },
  {
    name: 'Z45-E',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '15.90',
    liftStrenght: '0.227',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ45E,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z45-25J.pdf'
  },
  {
    name: '170AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '16.90',
    liftStrenght: '0.200',
    liftAccesibility: '9.40',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:image170AETJ,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/170AETJ.pdf'
  },
{
    name: 'Z34-D',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '12.50',
    liftStrenght: '0.227',
    liftAccesibility: '6.80',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',  
    image:imageZ34D,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z34-22N.pdf'
},
{
    name: 'Z45-D',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '16.00',
    liftStrenght: '0.227',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ45D,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z45-25J.pdf'
},
{
  name: 'GTZZ15J',
  vehicleType: 'זרוע מפרקית',
  engType: 'ממונע',
  workLocation: 'פתוח',
  workHeight: '16.70',
  liftStrenght: '0.25',
  liftAccesibility: '8.50',
  accessibility: 'הכל',
  groundType: 'הכל',
  groundLevel:'שטח מפולס ישר',
  brand:'Genie',
  color:'#86bbd8',
  image:imageGTZZ15J,
  pdfLink:'https://chinamotors.co.il/wp-content/uploads/2018/05/sinoboom-GTZZ15J-4p-14.5.pdf'
},
{
    name: 'Z51',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '17.60',
    liftStrenght: '0.227',
    liftAccesibility: '9.40',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ51,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/articulated-boom-lift/en-gb/2022/zboomspec_z51_30j_rt_en-gb_emear_lr.pdf?sfvrsn=220ec3c2_5'
},
{
    name: 'Z60',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '20.40',
    liftStrenght: '0.227',
    liftAccesibility: '11.00',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ60,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z60-34.pdf'
},
{
    name: 'Z80',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '25.80',
    liftStrenght: '0.227',
    liftAccesibility: '18.30',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ80,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z80-60.pdf'
},

{
    name: 'S45',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '15.70',
    liftStrenght: '0.227',
    liftAccesibility: '11.20',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageS45,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/S45.pdf'
},
{
    name: '460SJ',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '16.00',
    liftStrenght: '0.227',
    liftAccesibility: '10.20',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image460SJ,
    pdfLink:'https://www.jlg.com/-/media/jlg/current-materials-no-password/products/americas%20-%20ansi/engine-powered-boom-lifts/telescopic-booms/400-series/docs/400-series-telescopic-boom-spec-sheet.pdf'
},
{
    name: 'S65',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '22.00',
    liftStrenght: '0.227',
    liftAccesibility: '17.10',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageS65,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/telescopic-booms/en-au/s-65-xc-product-specifications-2019.pdf?sfvrsn=e39b3a6b_2'
},
{
    name: 'S85',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: 28.00,
    liftStrenght: 0.227,
    liftAccesibility: 23.30,
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageS85,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/S85.pdf'
},
{
    name: 'SX125',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: 40.00,
    liftStrenght: 0.3,
    liftAccesibility: 24.40,
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',  
    image:imageSX125,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/telescopic-booms/en-au/sx-125-xc-product-specifications-2019.pdf?sfvrsn=8ddf32d0_2'
},
{
    name: '1350SJP',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '43.00',
    liftStrenght: '0.227',
    liftAccesibility: '24.38',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image1350,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/1350SJP.pdf'
},

]


const config_data =[//hold all the filters
{
  filter_name:"engType",
  filter_title:"הנעה",
  filterType:'dropdown',
  image:engineType,
  options:  [   
  { label: 'חשמלי', value: '2',image: electricEngine},
  { label: 'ממונע', value: '3',image:gasEngine },
  { label: 'הכל', value: '4',image:toolBox },
]
} , 
{
    filter_name:"accessibility",
    filter_title:"נגישות כלי",
    filterType:'dropdown',
    image:accesibilty_icon,
    options:  [          //הורדתי אופקית כי מי שיכחל אופקית יכול הכול
    { label: 'אנכית', value: 'vertical', image:vertical },
    { label: 'אופקית', value: 'horizontal', image:horizontal },
    { label: 'הכל', value: 'any', image:anyIcon },]
  },
 
  {
    filter_name:"vehicleType",
    filter_title:"סוג כלי",
    filterType:'dropdown',
    image:viechle_type,
    options:  [          
    { label: 'במת יחיד', value: '1',image:lifticon },
    { label: 'במת תורן אנכי', value: '3',image:lifticon },
    { label: 'במת מספריים', value: '2',image:lifticon },
    { label: 'במת מספריים עם מייצבים', value: '5' ,image:teleBoom},
    { label: 'זרוע מפרקית', value: '6',image:boomIcon },
    { label: 'זרוע טלסקופית ישרה', value: '7', image:teleBoom  },
    { label: 'הכל', value: '8', image:anyIcon},
  ]
  } ,
  {
    filter_name:"groundLevel",
    filter_title:"זווית הקרקע",
    filterType:'dropdown',
    image:groundNagle,

    options:  [          
    { label: 'שטח מפולס ישר', value: '1' ,image:level},
    { label: 'שטח משופע', value: '2',image:uneven },
    { label: 'הכל', value: '3' , image:toolBox},]
  } ,

  {
    filter_name:"groundType",
    filter_title:"סוג קרקע",
    filterType:'dropdown',
    image:groundType,

    options:  [   //מחקתי מהודק ואדמה כי אם כלי יכול מהודק ואדמה, הוא יכול הכל       
    { label: 'מהודק', value: '1',image:asphalt },
    { label: 'כורכר ואדמה', value: '2', image:soil },
    { label: 'הכל', value: '3', image:toolBox },]
  } ,

 
  {
    filter_name:"workLocation",
    filter_title:"מקום עבודה",
    filterType:'dropdown',
    image:workLocation,
    options:  [ 
    { label: 'סגור', value: 'closed',image:warehouseicon },
    { label: 'פתוח', value: 'open',image:farmicon },
    { label: 'הכל', value: 'any', image:anyIcon },
   ]
  } ,
  
  ]

  const config_data_range =[//hold all the filters of ranges
    {
      filter_name:"workHeight",
      filter_title:"גובה עבודה",
      filter_range_type:'מטר',
      filter_type:'range',
      options:  [
        0,42
      ]
    },
    {
      filter_name:"liftStrenght",
      filter_title:"כושר הרמה",
      filter_range_type:'טון',
      filter_type:'range',
      options:  [
     0.2,0.6,
      ]
    },
    {
      filter_name:"liftAccesibility",
      filter_title:"נגישות אופקית",
      filter_range_type:'מטר',
      filter_type:'range',
      options:  [
     5,24
      ]
    }
  ]

const MainScreen = (navigation, route, state) => {

  const {height, width} = useWindowDimensions();
  const [filterdData, setFilterdData] = useState(data);
  const [toolFilters,  setToolFilters] = useState({});
  const [config, setConfig] = useState(config_data);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log('refreshing')
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  console.log("app start")
  console.log(data.length)


  
  const filterData = (filter_name, value) => {//create the filters
    console.log('filter before', toolFilters)
    setToolFilters({...toolFilters, [filter_name]: value});
    if(value === 'הכל')
      setToolFilters({...toolFilters, [filter_name]: undefined});

      console.log('filter after', toolFilters)

}
const logoPressed=()=>{//logo pressed
  console.log('logo pressed')
  Linking.openURL('https://www.ofeklift.com/')
}
const resetFilters=()=>{//reset all filters

  setToolFilters({});
  console.log('reset filters',toolFilters)
  setFilterdData([...data]);
  console.log('reset filters',filterdData)
  console.log('reset filters',data)
  console.log('reset filters',toolFilters)


}

 
const filterImgs=()=>{//filter  data btn has been pressed
console.log('filter items',toolFilters);
  const filteredData = data.filter((item) => {
    let isMatch = true;
    for (const key in toolFilters) {
      if(key==='workHeight'||key==='liftStrenght'||key==='liftAccesibility' )
      {//ragne type filter
        console.log('range filter')
        console.log('hey')
        console.log(item[key])
        console.log(toolFilters[key][0])
        if (item[key] < toolFilters[key][0]||item[key]===undefined) {
          isMatch = false;
        }
      }else{//dropdown type filter
        console.log('dropdown filter')
        if(item[key]==='הכל'){
          console.log('הכל')
        }
        else 
        if ((toolFilters[key] !== item[key]&&  toolFilters[key] !== undefined)) {
          isMatch = false;
        }
      }
     
    }
    return isMatch;
  });
  setFilterdData([...filteredData]);
}



  return (
    <View style={styles.container}>

      <View style={styles.left}>
          
        <View style={styles.imageslider}>
     <ImagSlider data={filterdData}/>
     </View>

     </View>
     <View style={styles.right}>
      <View style={
        {...Platform.select({
            ios:{

            },
            android:{
            },
            web:{
              width:'100%',
            },
            default:{},
          }),
        }}>
          <Pressable style={styles.logobar} onPress={logoPressed}>
            <Image source={logo} style={styles.logo} />
          </Pressable>
      <View style={styles.datafilter}>
        {
          config_data.map((item,i)=>{
            return <>
            <DataFilter filterData={filterData} name={item.filter_title} type={item.filter_name} image={item.image} options={item.options}/>
            </>
          }
          )
        }

        
      </View>
      <View style={styles.dataRange}>
        {
        config_data_range.map((item,i)=>{
          return <>
          <DataRange filterData={filterData} name={item.filter_title} ratioType={item.filter_range_type}  type={item.filter_name} options={item.options}/>
                    </>
        }
        )
      }
        </View>

        <View style={styles.btns}>
         <View style={styles.infos}>
          <Text style={styles.infotext}>מספר דגמים: {filterdData.length}</Text>
          </View>

        <Pressable  style={styles.fliterData}>
          <Image source={filter_data_icon } style={styles.filterimg} />
          <View style={styles.filterTextView}>
          <Text style={styles.filterbtntext} onPress={filterImgs}>סנן</Text>
          </View>
    </Pressable>


    <Pressable  style={styles.resetdata} onPress={resetFilters}>
          <Image source={reset}  style={styles.resetimg} />
    </Pressable>

    </View>
      </View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  logobar:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ededef',
    paddingVertical:10,
  },

  logo:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  infos:{
    flex:2,
    backgroundColor:'#f6ae2d',
  },
  infotext:{
    textAlign:'center',
    textAlignVertical:'center',
    
  },
  btns:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f6ae2d',
    borderWidth:1,

  },
  resetdata:{
    flex:2,
    backgroundColor:'#f6ae2d',
    
    borderLeftWidth:1,
    height:'100%',
  },
  filterTextView:{
    flex:4,
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight:10,
  },
  filterimg:{
    flex:1,
    resizeMode:'contain',
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'white',
    alignItems:'center',
  },
  resetimg:{
    flex:1,
    resizeMode:'contain',
  },
  fliterData:{
   // ...Dimensions.get('window').width>815?{backgroundColor:'black '}: {backgroundColor:'red'},

   //...height>500?{backgroundColor:'black '}: {backgroundColor:'red'},
   //...{height}>500?{backgroundColor:'black '}: {backgroundColor:'red'}, 
   flex:6,
   height: '100%',
   borderLeftWidth:1,
   flexDirection:'row',
   alignItems:'stretch',
   alignContent:'stretch',
    justifyContent:'center',

  },
  dataRange:{
    ...Dimensions.get('window').width>815?{flex:7}:{flex:5},
    backgroundColor:'#ededef'

  },
  filterbtntext:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:20,
    fontWeight:'bold',
  },
 
  datafilter:{
    
    ...Platform.select({
      ios:{
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
      },
      android:{
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
      },
      web:{
        ...Dimensions.get('window').width>815?{flex:8}:{flex:9},
        borderColor:'black',
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr ',
        // make the rows heiger
        gridAutoRows:'minmax(100px)',
        

      },
      default:{
      },
    }),
     
    },
  left:{
    ...Platform.select({
      ios:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
      },
      android:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
      },
      web:{
        ...Dimensions.get('window').width>815?{flex:6}:{flex:2.5},
      flexDirection:'row',  
      alignItems:'stretch',
      width:'100%',
      height:'95%',
    },
      default:{},

    }),
    

  },
  right:{
    ...Platform.select({
      ios:{
        flex:2,
      },
      android:{ 
         flex:2,

      },
      web:{
        
        ...Dimensions.get('window').width>815?{flex:4}:{flex:6},

      backgroundColor:'#ededef',
      flexDirection:'row',  
      justifyContent:'center',
      width:'100%',
      height:'95%',
      paddingRight:15,
      },
      default:{},
    }),
    
  },
  imageslider:{
    ...Platform.select({
      ios:{
        borderWidth:10,
        alignContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      },
      android:{
        borderWidth:10,
        alignContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      },
      web:{      
      flex:10, 
      // make the rows heiger
      
      },
      default:{},
    }),
    
  },

  container: {
      flexDirection:'row',

      ...Platform.select({
        ios:{
          flexDirection:'colum',
          backgroundColor:'#86bbd8',
        },
        android:{
          backgroundColor:'#86bbd8',
        },
        web:{
          backgroundColor: '#ededef',
          alignItems:'center',
          paddingLeft:15,

        },
        default:{
          flexDirection:'row',
          justifyContent:'space-around',

        },
      }),
      flex: 1,
      
    },
    text:{
    },
  });
  
export default MainScreen