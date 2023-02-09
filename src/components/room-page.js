import React from 'react';
import { withRouter } from 'react-router';

// Components 
import 'animate.css'
import WOW from 'wowjs'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Images
import SingleRoom from '../assets/img/room-page/single-room.svg'
import DoubleBed from '../assets/img/room-page/double-bed.svg'
import Balcony from '../assets/img/room-page/balcony.svg'
import TV from '../assets/img/room-page/tv.svg'
import MiniBar from '../assets/img/room-page/mini-bar.svg'
import HygieneKit from '../assets/img/room-page/hygiene-kit.svg'
import FreeWifi from '../assets/img/room-page/free-wifi.svg'
import Phone from '../assets/img/room-page/phone.svg'
import Safe from '../assets/img/room-page/safe.svg'
import Bath from '../assets/img/room-page/bath.svg'
import HairDryer from '../assets/img/room-page/hair-dryer.svg'
import Dinning from '../assets/img/room-page/dinning.svg'
import Sofa from '../assets/img/room-page/sofa.svg'
// import Iron from '../assets/img/room-page/iron.svg'

// Standard Twin
import GeneralImageST from '../assets/img/room-page/st/st-general-image.png'
import GeneralImage_mob_ST from '../assets/img/room-page/st/st-general-image_mob.png'

import ST_slide1 from '../assets/img/room-page/st/slide1.png'
import ST_slide2 from '../assets/img/room-page/st/slide2.png'
import ST_slide3 from '../assets/img/room-page/st/slide3.png'
import ST_slide4 from '../assets/img/room-page/st/slide4.png'

// Standard Double
import GeneralImageSD from '../assets/img/room-page/sd/sd-general-img.png'
import GeneralImage_mob_SD from '../assets/img/room-page/sd/sd-general-img_mob.png'

import SD_slide1 from '../assets/img/room-page/sd/slide1.png'
import SD_slide2 from '../assets/img/room-page/sd/slide2.png'
import SD_slide3 from '../assets/img/room-page/sd/slide3.png'
import SD_slide4 from '../assets/img/room-page/sd/slide4.png'

// Family
import GeneralImageF from '../assets/img/room-page/f/f-general-img.png'
import GeneralImage_mob_F from '../assets/img/room-page/f/f-general-img_mob.png'

import F_slide1 from '../assets/img/room-page/f/slide1.png'
import F_slide2 from '../assets/img/room-page/f/slide2.png'
import F_slide3 from '../assets/img/room-page/f/slide3.png'
import F_slide4 from '../assets/img/room-page/f/slide4.png'

// Deluxe
import GeneralImageD from '../assets/img/room-page/d/d-general-img.png'
import GeneralImage_mob_D from '../assets/img/room-page/d/d-general-img_mob.png'

import D_slide1 from '../assets/img/room-page/d/slide1.png'
import D_slide2 from '../assets/img/room-page/d/slide2.png'
import D_slide3 from '../assets/img/room-page/d/slide3.png'
import D_slide4 from '../assets/img/room-page/d/slide4.png'

// Premium Luxe
import GeneralImagePL from '../assets/img/room-page/pl/pl-general-img.png'
import GeneralImage_mob_PL from '../assets/img/room-page/pl/pl-general-img_mob.png'

import PL_slide1 from '../assets/img/room-page/pl/slide1.png'
import PL_slide2 from '../assets/img/room-page/pl/slide2.png'
import PL_slide3 from '../assets/img/room-page/pl/slide3.png'
import PL_slide4 from '../assets/img/room-page/pl/slide4.png'




class RoomPage extends React.Component{
    constructor(props){
        super(props)

        this.handleDayChange = this.handleDayChange.bind(this)
        this.myStorage = window.localStorage

        this.state = {
            room:{
                url: '',      
                name: '',
                room_name: '',
                general_image: '',
                general_image_mob: '',
                texts:[''],
                room_additions1:[
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''}
                ],
                room_additions2:[
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''},
                    {ico: '', name: ''}
                ],
                slides:[ ]
            },
            first_Day: undefined,
            last_Day: undefined,
            count_adults: 1,
            count_children: 0,
            // /////////////////////////////////////////////////////
            lang: JSON.parse(this.myStorage.getItem('lang')),
            lang_en: {
                all_rooms: [
                    {          
                        url: 'standard-twin',      
                        name: 'Standard Twin',
                        room_name: 'stan_twin',
                        general_image: GeneralImageST,
                        general_image_mob: GeneralImage_mob_ST,
                        texts: [
                            'The standard Twin rooms are suitable for business visitors in a short term period. In cosy and compact rooms there are all conditions for enjoyable and effective stay. ',
                            'Two single beds, mini bar, in-room safe, wifi, room service and so on. French balconies make the rooms even brighter and highlight their modern interior.',
                            'All rooms are equipped with all required facilities.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Single room'},
                            {ico: DoubleBed,  name: '2 single beds'},
                            {ico: Balcony,    name: 'Balconies'},
                            {ico: TV,         name: 'TV and work desk'},
                            {ico: MiniBar,    name: 'Mini bar, coffee & tea'},
                            {ico: FreeWifi,  name: 'Free Wifi'},
                        ],
                        room_additions2:[
                            {ico: Phone,     name: 'Direct dial telephones'},
                            {ico: Safe,      name: 'In-room safe'},
                            {ico: Bath,      name: 'Bath/Shower cabin'},
                            {ico: HairDryer, name: 'Hair dryer and iron'},
                            {ico: HygieneKit, name: 'Hygiene kit'}
                        ],
                        slides:[ ST_slide1, ST_slide2, ST_slide3, ST_slide4 ]
                    },
        
                    {          
                        url: 'standard-double',      
                        name: 'Standard Double',
                        room_name: 'stan_double',
                        general_image: GeneralImageSD,
                        general_image_mob: GeneralImage_mob_SD,
                        texts: [
                            'Konyak Hotel offers classic and Elegant standard rooms furnished with double beds. The delicate colors of the suite will help you to concentrate on work and have a peaceful nap in the evening.',
                            'The first rays of the sun will wake you up in the morning, inviting you to enjoy a cup of warm coffee in the french balcony.',
                            'All rooms are equipped with all required facilities.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Single room'},
                            {ico: DoubleBed,  name: 'Double bed'},
                            {ico: Balcony,    name: 'Balcony'},
                            {ico: TV,         name: 'TV and work desk'},
                            {ico: MiniBar,    name: 'Mini bar, coffee & tea'},
                            {ico: FreeWifi,   name: 'Free Wifi'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Direct dial telephones'},
                            {ico: Safe,       name: 'In-room safe'},
                            {ico: Bath,       name: 'Bath/Shower cabin'},
                            {ico: HairDryer,  name: 'Hair dryer and iron'},
                            {ico: HygieneKit, name: 'Hygiene kit'}
                        ],
                        slides:[ SD_slide1, SD_slide2, SD_slide3, SD_slide4 ]
                    },
        
                    {          
                        url: 'family',      
                        name: 'Family',
                        room_name: 'family',
                        general_image: GeneralImageF,
                        general_image_mob: GeneralImage_mob_F,
                        texts: [
                            'For couples we offer family suites with double beds. Large, bright rooms are suitable both for calm night stays and informal friendly talks on the couch․',
                            'All rooms are equipped with all required facilities.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Single room'},
                            {ico: DoubleBed,  name: 'Double bed'},
                            {ico: Balcony,    name: 'Balconies'},
                            {ico: TV,         name: 'TV and work desk'},
                            {ico: MiniBar,    name: 'Mini bar, coffee & tea'},
                            {ico: Sofa,    name: 'Couch and armchairs'},
                        ],
                        room_additions2:[
                            {ico: FreeWifi,   name: 'Free Wifi'},
                            {ico: Phone,      name: 'Direct dial telephones'},
                            {ico: Safe,       name: 'In-room safe'},
                            {ico: Bath,       name: 'Bath/Shower cabin'},
                            {ico: HairDryer,  name: 'Hair dryer and iron'},
                            {ico: HygieneKit, name: 'Hygiene kit'}
                        ],
                        slides:[ F_slide1, F_slide2, F_slide3, F_slide4 ]
                    },
        
                    {          
                        url: 'deluxe',      
                        name: 'Deluxe',
                        room_name: 'deluxe',
                        general_image: GeneralImageD,
                        general_image_mob: GeneralImage_mob_D,
                        texts: [
                            'Hotel Konyak offers spacious and bright junior suites with a king size bed square to those for whom comfort is a number one criteria',
                            'In the large room there is a separate zone with comfortable sofas  where you can either work or take your rest. And what about the view from the balcony, looking right at biblical Mount Ararat, is priceless.',
                            'All rooms are equipped with all required facilities.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Single room'},
                            {ico: DoubleBed,  name: 'King-size bed'},
                            {ico: Balcony,    name: 'Balcony with view on Mount Ararat '},
                            {ico: TV,         name: 'TV and work desk'},
                            {ico: MiniBar,    name: 'Mini bar, coffee & tea'},
                            {ico: Sofa,       name: 'Sofa and armchairs'}
                        ],
                        room_additions2:[
                            {ico: FreeWifi,   name: 'Free Wifi'},
                            {ico: Phone,      name: 'Direct dial telephones'},
                            {ico: Safe,       name: 'In-room safe'},
                            {ico: Bath,       name: 'Bath/Shower cabin'},
                            {ico: HairDryer,  name: 'Hair dryer and iron'},
                            {ico: HygieneKit, name: 'Hygiene kit'}
                        ],
                        slides:[ D_slide1, D_slide2, D_slide3, D_slide4 ]
                    },
        
                    {          
                        url: 'premium-luxe',      
                        name: 'Premium Luxe',
                        room_name: 'prem_luxe',
                        general_image: GeneralImagePL,
                        general_image_mob: GeneralImage_mob_PL,
                        texts: [
                            'Konyak Hotel Yerevan also has 2 Premium Luxe broad suites designed for those who prefer wide spaces. ',
                            'The Premium Luxe suite includes a separate bedroom with king-size bed,  a meeting room, and the magnificent city view from the balcony. This room will be an excellent option for a family holiday or for the long term stay visitors.',
                            'All rooms are equipped with all required facilities.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: '51 sq.m. : 2 rooms'},
                            {ico: DoubleBed,  name: 'King-size bed'},
                            {ico: Dinning,    name: 'Dinning room'},
                            {ico: Balcony,    name: 'Balcony with view on Mount Ararat '},
                            {ico: TV,         name: 'TV and work desk'},
                            {ico: MiniBar,    name: 'Mini bar, coffee & tea'},
                            {ico: Sofa,       name: 'Sofa and armchairs'}
                        ],
                        room_additions2:[
                            {ico: FreeWifi,   name: 'Free Wifi'},
                            {ico: Phone,      name: 'Direct dial telephones'},
                            {ico: Safe,       name: 'In-room safe'},
                            {ico: Bath,       name: 'Bath/Shower cabin'},
                            {ico: HairDryer,  name: 'Hair dryer and iron'},
                            {ico: HygieneKit, name: 'Hygiene kit'}
                        ],
                        slides:[ PL_slide1, PL_slide2, PL_slide3, PL_slide4 ]
                    }
                ],
                from: 'from',
                per_night: 'per night',
                info:{
                    check_in: 'Check in',
                    check_out: 'Check out',
                    adults: 'Adults',
                    children: 'Children',
                    promo: 'Promotional Code'
                },
                book_now:'book now',
            },
            lang_ru: {
                all_rooms: [
                    {          
                        url: 'standard-twin',      
                        name: 'Стандарт Твин',
                        room_name: 'stan_twin',
                        general_image: GeneralImageST,
                        general_image_mob: GeneralImage_mob_ST,
                        texts: [
                            'Предлагаемые гостиницей "Коньяк" номера "Стандарт Твин" подходят для гостей, находящихся в непродолжительной деловой поездке. В классическом, комфортабельном номере созданы все условия для приятного и эффективного отдыха.',
                            'Две односпальные кровати, мини-бар, сейф, Wi-Fi и многое другое. А французские балконы делают комнаты светлее, подчеркивая их современный интерьер.',
                            'В комнатах есть все необходимые удобства.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Одна комната'},
                            {ico: DoubleBed,  name: '2 односпальные кровати'},
                            {ico: Balcony,    name: 'Балкон'},
                            {ico: TV,         name: 'Телевизор и письменный стол'},
                            {ico: MiniBar,    name: 'Минибар, чай и кофе'},
                            {ico: FreeWifi,   name: 'Бесплатный вай-фай'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Прямой телефон'},
                            {ico: Safe,       name: 'Сейф'},
                            {ico: Bath,       name: 'Душевая кабина'},
                            {ico: HairDryer,  name: 'Фен и утюг'},
                            {ico: HygieneKit, name: 'Предметы гигиены'}
                        ],
                        slides:[ ST_slide1, ST_slide2, ST_slide3, ST_slide4 ]
                    },
        
                    {          
                        url: 'standard-double',      
                        name: 'Стандарт двухместный',
                        room_name: 'stan_double',
                        general_image: GeneralImageSD,
                        general_image_mob: GeneralImage_mob_SD,
                        texts: [
                            'Гостиница «Коньяк» предлагает элегантные, комфортабельные одноместные номера «Стандарт двухместный» с одной двуспальной или двумя односпальными кроватями. Спокойные и умеренные оттенки интерьеров помогут сосредоточиться на работе и спокойно выспаться вечером.',
                            'Лучи солнца, льющиеся с французского балкона утром, станут лучшим началом нового дня.',
                            'В комнатах есть все необходимые удобства.'
                        ],                     
                        room_additions1:[
                            {ico: SingleRoom, name: 'Одноместный номер'},
                            {ico: DoubleBed,  name: 'Двуспальная кровать'},
                            {ico: Balcony,    name: 'Балкон'},
                            {ico: TV,         name: 'Телевизор и письменный стол'},
                            {ico: MiniBar,    name: 'Минибар, чай и кофе'},
                            {ico: FreeWifi,   name: 'Бесплатный вай-фай'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Прямой телефон'},
                            {ico: Safe,       name: 'Сейф'},
                            {ico: Bath,       name: 'Душевая кабина'},
                            {ico: HairDryer,  name: 'Фен и утюг'},
                            {ico: HygieneKit, name: 'Предметы гигиены '}
                        ],
                        slides:[ SD_slide1, SD_slide2, SD_slide3, SD_slide4 ]
                    },
        
                    {          
                        url: 'family',      
                        name: 'Семейный',
                        room_name: 'family',
                        general_image: GeneralImageF,
                        general_image_mob: GeneralImage_mob_F,
                        texts: [
                            'Предлагаем «Семейные» номера для пар и семейных пар. Светлые номера подходят как для тихого ночлега, так и для задушевных бесед за чашкой кофе.',
                            'В комнатах есть все необходимые удобства.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Одноместный номер'},
                            {ico: DoubleBed,  name: 'Двуспальная кровать'},
                            {ico: Balcony,    name: 'Балкон'},
                            {ico: TV,         name: 'Телевизор и письменный стол'},
                            {ico: MiniBar,    name: 'Минибар, чай и кофе'},
                            {ico: Sofa,       name: 'Диван и кресла'}
                        ],
                        room_additions2:[
                            {ico: FreeWifi,   name: 'Бесплатный вай-фай'},
                            {ico: Phone,      name: 'Прямой телефон'},
                            {ico: Safe,       name: 'Сейф'},
                            {ico: Bath,       name: 'Ванная'},
                            {ico: HairDryer,  name: 'Фен и утюг'},
                            {ico: HygieneKit, name: 'Предметы гигиены'}
                        ],
                        slides:[ F_slide1, F_slide2, F_slide3, F_slide4 ]
                    },
        
                    {          
                        url: 'deluxe',      
                        name: 'Полулюкс',
                        room_name: 'deluxe',
                        general_image: GeneralImageD,
                        general_image_mob: GeneralImage_mob_D,
                        texts: [
                            'Гостиница «Коньяк» предлагает номера полулюкс для тех, кто действительно ценит комфорт.',
                            'В отеле 16 элегантных и просторных номеров с кроватью размера «king-size» и отдельной зоной с диванами, которая подходит как для работы, так и для отдыха. Вид с балкона на библейскую гору Арарат стоит всего.',
                            'В комнатах есть все необходимые удобства.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Одноместный номер'},
                            {ico: DoubleBed,  name: 'Двуспальная кровать'},
                            {ico: Balcony,    name: 'Балкон с видом на гору Арарат'},
                            {ico: TV,         name: 'Телевизор и письменный стол'},
                            {ico: MiniBar,    name: 'Мини-бар, чай и кофе'},
                            {ico: FreeWifi,   name: 'Бесплатный вай-фай'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Прямой телефон'},
                            {ico: Sofa,       name: 'Диван и кресла'},
                            {ico: Safe,       name: 'Сейф'},
                            {ico: Bath,       name: 'Душевая кабина'},
                            {ico: HairDryer,  name: 'Фен и утюг'},
                            {ico: HygieneKit, name: 'Предметы гигиены'}
                        ],
                        slides:[ D_slide1, D_slide2, D_slide3, D_slide4 ]
                    },
        
                    {          
                        url: 'premium-luxe',      
                        name: 'Люкс',
                        room_name: 'prem_luxe',
                        general_image: GeneralImagePL,
                        general_image_mob: GeneralImage_mob_PL,
                        texts: [
                            'Элегантные номера «Люкс» гостиницы «Коньяк» в Ереване предназначены для тех гостей, которые предпочитают более просторные номера.',
                            'В номерах «Люкс» есть отдельная гостиная, спальня, большая двуспальная кровать (King size), впечатляющий вид на город с панорамных балконов. Этот номер - отличный вариант для любителей семейного отдыха или длительного проживания в Ереване.',
                            'В комнатах есть все необходимые удобства.'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: '50 м.кв., две комнаты'},
                            {ico: DoubleBed,  name: 'Двуспальная кровать'},
                            {ico: Balcony,    name: 'Балкон с видом на гору Арарат'},
                            {ico: TV,         name: 'Телевизор и письменный стол'},
                            {ico: MiniBar,    name: 'Мини-бар, чай и кофе'},
                            {ico: FreeWifi,   name: 'Бесплатное подключение к Wi-Fi'}
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Прямой телефон'},
                            {ico: Sofa,       name: 'Диван и кресла'},
                            {ico: Safe,       name: 'Сейф'},
                            {ico: Bath,       name: 'Душевая кабина'},
                            {ico: HairDryer,  name: 'Фен и утюг'},
                            {ico: HygieneKit, name: 'Предметы гигиены'}
                        ],
                        slides:[ PL_slide1, PL_slide2, PL_slide3, PL_slide4 ]
                    }
                ],
                from: 'от',
                per_night: 'за ночь',
                info:{
                    check_in: 'Дата заезда',
                    check_out: 'Дата выезда',
                    adults: 'Взрослые',
                    children: 'Дети',
                    promo: 'Промокод'
                },
                book_now:'Забронировать',
            },
            lang_am: {
                all_rooms: [
                    {          
                        url: 'standard-twin',      
                        name: 'Ստանդարտ Թվին',
                        room_name: 'stan_twin',
                        general_image: GeneralImageST,
                        general_image_mob: GeneralImage_mob_ST,
                        texts: [
                            '«Կոնյակ» հյուրանոցի առաջարկած «Ստանդարտ Թվին» սենյակները հարմար են գործնական կարճատև այցերով ժամանած հյուրերի համար։ Դասական և հարմարավետ սենյակում կան բոլոր պայմանները հաճելի և արդյունավետ հանգրվանի համար։',
                            'Երկու մեկտեղանոց մահճակալ, մինի բար, չհրկիզվող պահարան, wifi կապ և շատ ավելին։ Իսկ ֆրանսիական պատշգամբները համարները դարձնում են ավելի լուսավոր և ընդգծում  նրանց ժամանակակից ինտերիերը։',
                            'Համարներն ապահովված են բոլոր անհրաժեշտ հարմարություններով։'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Մեկ սենյականոց '},
                            {ico: DoubleBed,  name: '2 մեկտեղանոց մահճակալ'},
                            {ico: Balcony,    name: 'Պատշգամբ'},
                            {ico: TV,         name: 'Հեռուստացույց և գրասեղան'},
                            {ico: MiniBar,    name: 'Մինիբար, թեյ և սուրճ '},
                            {ico: FreeWifi,   name: 'Անվճար Wifi'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Ուղիղ հեռախոսակապ'},
                            {ico: Safe,       name: 'Չհրկիզվող պահարան'},
                            {ico: Bath,       name: 'Լոգախցիկ'},
                            {ico: HairDryer,  name: 'Վարսահարդարիչ և արդուկ'},
                            {ico: HygieneKit, name: 'Հիգիենայի պարագաներ'}
                        ],
                        slides:[ ST_slide1, ST_slide2, ST_slide3, ST_slide4 ]
                    },
        
                    {          
                        url: 'standard-double',      
                        name: 'Ստանդարտ Դաբլ',
                        room_name: 'stan_double',
                        general_image: GeneralImageSD,
                        general_image_mob: GeneralImage_mob_SD,
                        texts: [
                            '«Կոնյակ» հյուրանոցն առաջարկում է էլեգանտ և հարմարավետ «Ստանդարտ Դաբլ» մեկսենյականոց համարները՝ մեկ երկտեղանոց կամ երկու մեկտեղանոց մահճակալներով։',
                            'Սենյակների մեղմ չպարտադրող գույները կօգնեն կենտրոնանալ աշխատանքի վրա, իսկ երեկոյան ունենալ խաղաղ, հանգիստ քուն։ Ֆրանսիական պատշգամբից ներս թափվող արևի շողերն առավոտյան կդառնան նոր բացվող օրվա լավագույն սկիզբը։',
                            'Համարներն ապահովված են բոլոր անհրաժեշտ հարմարություններով։'
                        ],                     
                        room_additions1:[
                            {ico: SingleRoom, name: 'Մեկսենյականոց'},
                            {ico: DoubleBed,  name: 'Երկտեղանոց մահճակալ'},
                            {ico: Balcony,    name: 'Պատշգամբ'},
                            {ico: TV,         name: 'Հեռուստացույց և գրասեղան'},
                            {ico: MiniBar,    name: 'Մինիբար, թեյ և սուրճ'},
                            {ico: FreeWifi,   name: 'Անվճար Wifi'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Ուղիղ հեռախոսակապ '},
                            {ico: Safe,       name: 'Չհրկիզվող պահարան'},
                            {ico: Bath,       name: 'Լոգախցիկ'},
                            {ico: HairDryer,  name: 'Վարսահարդարիչ և արդուկ'},
                            {ico: HygieneKit, name: 'Հիգիենայի պարագաներ'}
                        ],
                        slides:[ SD_slide1, SD_slide2, SD_slide3, SD_slide4 ]
                    },
        
                    {          
                        url: 'family',      
                        name: 'Ընտանեկան',
                        room_name: 'family',
                        general_image: GeneralImageF,
                        general_image_mob: GeneralImage_mob_F,
                        texts: [
                            'Ամուսինների և զույգերի համար առաջարկում ենք «Ընտանեկան» համարները։ Լուսավոր սենյակները համար են ինչպես հանգիստ գիշերակացի, այնպես էլ մի բաժակ սուրճի շուրջ մտերմիկ զրույցների համար։',
                            'Համարներն ապահովված են բոլոր անհրաժեշտ հարմարություններով։'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Մեկսենյականոց'},
                            {ico: DoubleBed,  name: 'Երկտեղանոց մահճակալ'},
                            {ico: Balcony,    name: 'Պատշգամբ'},
                            {ico: TV,         name: 'Հեռուստացույց և գրասեղան'},
                            {ico: MiniBar,    name: 'Մինիբար, թեյ և սուրճ '},
                            {ico: Sofa,       name: 'Բազմոց և բազկաթոռներ'}
                        ],
                        room_additions2:[
                            {ico: FreeWifi,   name: 'Անվճար Wifi'},
                            {ico: Phone,      name: 'Ուղիղ հեռախոսակապ '},
                            {ico: Safe,       name: 'Չհրկիզվող պահարան'},
                            {ico: Bath,       name: 'Լոգարան'},
                            {ico: HairDryer,  name: 'Վարսահարդարիչ և արդուկ'},
                            {ico: HygieneKit, name: 'Հիգիենայի պարագաներ'}
                        ],
                        slides:[ F_slide1, F_slide2, F_slide3, F_slide4 ]
                    },
        
                    {          
                        url: 'deluxe',      
                        name: 'Կիսալյուքս',
                        room_name: 'deluxe',
                        general_image: GeneralImageD,
                        general_image_mob: GeneralImage_mob_D,
                        texts: [
                            '«Կոնյակ» հյուրանոցն առաջարկում է «Կիսալյուքս» համարներ հարմարավետությունը իսկապես գնահատողների համար։',
                            'Հյուրանոցի 16 նրբաճաշակ և ընդարձակ համարներում առկա է երկտեղանոց մահճակալ (king size bed) և բազմոցներով անաձնացված գոտի, որը հարմար է թե՛ աշխատանքի, թե՛ հանգստի համար։ Պատշգամբից դեպի բիբլիական Արարատը բացվող տեսարանն էլ ամեն ինչ արժե։',
                            'Համարներն ապահովված են բոլոր անհրաժեշտ հարմարություններով։'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: 'Մեկսենյականոց'},
                            {ico: DoubleBed,  name: 'Երկտեղանոց մահճակալ'},
                            {ico: Balcony,    name: 'Արարատ լեռանը նայող պատշգամբ'},
                            {ico: TV,         name: 'Հեռուստացույց և գրասեղան'},
                            {ico: MiniBar,    name: 'Մինի բար, թեյ և սուրճ '},
                            {ico: FreeWifi,   name: 'Անվճար Wifi'},
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Ուղիղ հեռախոսակապ '},
                            {ico: Sofa,       name: 'Բազմոց և բազկաթոռներ'},
                            {ico: Safe,       name: 'Չհրկիզվող պահարան'},
                            {ico: Bath,       name: 'Լոգախցիկ'},
                            {ico: HairDryer,  name: 'Վարսահարդարիչ և արդուկ'},
                            {ico: HygieneKit, name: 'Հիգիենայի պարագաներ'}
                        ],
                        slides:[ D_slide1, D_slide2, D_slide3, D_slide4 ]
                    },
        
                    {          
                        url: 'premium-luxe',      
                        name: 'Լյուքս',
                        room_name: 'prem_luxe',
                        general_image: GeneralImagePL,
                        general_image_mob: GeneralImage_mob_PL,
                        texts: [
                            'Երևանի «Կոնյակ» հյուրանոցի էլեգանտ «Լյուքս» համարները նախատեսված են այն հյուրերի համար, որոնք նախընտրում են ավելի ընդարձակ սենյակներ։',
                            '«Լյուքս» համարներում կա առանձնացված հյուրասենյակ և ննջասենյակ, մեծ երկտեղանոց մահճակալ (King) և պանորամային պատշգամբներից դեպի քաղաք բացվող տպավորիչ տեսարան։ Այս համարը հիանալի տարբերակ է ընտանեկան հանգստի սիրահարների կամ Երևանում երկար ժամանակով հանգրվանողների համար։',
                            'Համարներն ապահովված են բոլոր անհրաժեշտ հարմարություններով։'
                        ],
                        room_additions1:[
                            {ico: SingleRoom, name: '50քմ տարածք՝ երկու սենյակ'},
                            {ico: DoubleBed,  name: 'Երկտեղանոց մահճակալ'},
                            {ico: Balcony,    name: 'Արարատ լեռանը նայող պատշգամբ'},
                            {ico: TV,         name: 'Հեռուստացույց և գրասեղան'},
                            {ico: MiniBar,    name: 'Մինի բար, թեյ և սուրճ'},
                            {ico: FreeWifi,   name: 'Անվճար Wifi կապ'}
                        ],
                        room_additions2:[
                            {ico: Phone,      name: 'Ուղիղ հեռախոսակապ '},
                            {ico: Sofa,       name: 'Բազմոց և բազկաթոռներ'},
                            {ico: Safe,       name: 'Չհրկիզվող պահարան'},
                            {ico: Bath,       name: 'Լոգախցիկ'},
                            {ico: HairDryer,  name: 'Վարսահարդարիչ և արդուկ'},
                            {ico: HygieneKit, name: 'Հիգիենայի պարագաներ'}
                        ],
                        slides:[ PL_slide1, PL_slide2, PL_slide3, PL_slide4 ]
                    }
                ],
                from: 'սկսած',
                per_night: 'մեկ գիշերվա համար',
                info:{
                    check_in: 'Ժամանման ամսաթիվ',
                    check_out: 'Մեկնման ամսաթիվ',
                    adults: 'Մեծահասակներ',
                    children: 'Երեխաներ',
                    promo: 'Պրոմոկոդ'
                },
                book_now:'ամրագրել',
            },
            // /////////////////////////////////////////////////////
            rub: {
                valute: '₽',
                rooms:{
                    stan_twin: '4,580',
                    stan_double: '4,580',
                    family: '5,840',
                    deluxe: '7,260',
                    prem_luxe: '9,730'
                }
            },
            amd: {
                valute: '֏',
                rooms:{
                    stan_twin: '27,500',
                    stan_double: '27,500',
                    family: '35,000',
                    deluxe: '43,500',
                    prem_luxe: '58,500'
                }
            },
            usd: {
                valute: '$',
                rooms:{
                    stan_twin: '61',
                    stan_double: '61',
                    family: '78',
                    deluxe: '97',
                    prem_luxe: '130'
                }
            },
            valute: JSON.parse(this.myStorage.getItem('val')),
            checkinDay: '',
            checkinDay: ''
        }
    }



    count_adults_fun = (what) =>{
        let count = this.state.count_adults

        what === '-'
        ? --count
        : ++count

        this.setState({ 
            count_adults: count
        })
    }

    count_children_fun = (what) =>{
        let count = this.state.count_children

        what === '-'
        ? --count
        : ++count

        this.setState({ 
            count_children: count
        })
    }

    firstDayFun = (day) =>{

        let fd = new Date(day).toLocaleDateString().split(".")
        let newdate = fd[1] + '/' + fd[0] + '/' + fd[2]
        
        this.setState({ 
            first_Day: day,
            checkinDay: newdate
        })
    }

    lastDayFun = (day) =>{

        let fd = new Date(day).toLocaleDateString().split(".")
        let newdate = fd[1] + '/' + fd[0] + '/' + fd[2]
 
        this.setState({ 
            last_Day: day, 
            checkoutDay: newdate 
        }) 
    } 
 
    handleDayChange(idx, day) {
        idx === 1 
        ? this.firstDayFun(day)
        : this.lastDayFun(day)
    }

    componentWillReceiveProps( nextProps ){
        let url = nextProps.location.pathname.split('/')
        const room_url = url[url.length - 1]
        let true_url = false
        let all_rooms = this.state[`lang_${this.state.lang}`].all_rooms
        let my_room;

        for (let i = 0; i < all_rooms.length; i++) {
            if( all_rooms[i].url === room_url ){
                my_room = all_rooms[i]
                true_url = true
                break;
            }
        }

        if( true_url === false ){
            this.props.history.push(`/${this.state.lang}/rooms`)
        } else{
            this.setState({
                room: my_room
            })
        }

        this.setState({
            valute: JSON.parse(this.myStorage.getItem('val'))
        })
    }

    componentDidMount(){
        new WOW.WOW().init(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       false,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null // optional scroll container selector, otherwise use window
            }
        )

        let url = this.props.location.pathname.split('/')
        const room_url = url[url.length - 1]
        let true_url = false
        let all_rooms = this.state[`lang_${this.state.lang}`].all_rooms
        let my_room;
        
        for (let i = 0; i < all_rooms.length; i++) {
            if( all_rooms[i].url === room_url ){
                my_room = all_rooms[i]
                true_url = true
                break;
            }
        }

        if( true_url === false ){
            this.props.history.push(`/${this.state.lang}/rooms`)
        } else{
            this.setState({
                room: my_room
            })
        }

    }



    render(){

        const settings = {
            autoplay:true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendDots: dots => (
                <div>
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div></div>
            )
        }

        const settings_mob = {
            // autoplay:true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1.08,
            slidesToScroll: 1,
            appendDots: dots => (
                <div>
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div></div>
            )
        }


        return(
            <div className='room'>
                <div className='section1'>
                    <div className='container160'>
                        <div className='info'>
                            <h1 className='wow fadeInUp'>{this.state.room.name}</h1>
                            <h4 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].from } {this.state[`${this.state.valute}`].rooms[`${this.state.room.room_name}`]} {this.state[`${this.state.valute}`].valute} /</h4>
                            <p className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].per_night }</p>
                        </div>
                    </div>

                    <div className='img-wrapper mob'>
                        <img src={ this.state.room.general_image_mob } alt='room'/>
                    </div>

                    <div className='img-wrapper desktop'>
                        <img src={ this.state.room.general_image } alt='room'/>
                    </div>
                </div>

                <div className='section2'>
                    <div className='room-page_content container160'>
                        <div className='block'>
                            <div className='contain_block'>
                                <div className='text_block'>
                                    {
                                        this.state.room.texts.map( (text, idx) => {
                                            return <p className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{ text }</p>
                                        })
                                    }
                                </div>
                            
                                <div className='room_additions'>
                                    <ul>
                                    {
                                        this.state.room.room_additions1.map((addit, idx)=>{
                                            return(
                                                <li key={idx}>
                                                    <div className='ico-wrapper'>
                                                        <img src={addit.ico} alt='addition ico'/>
                                                    </div>
                                                    {addit.name}
                                                </li>
                                            )
                                        })
                                    } 
                                    </ul>

                                    <ul>
                                    {
                                        this.state.room.room_additions2.map((addit, idx)=>{
                                            return(
                                                <li key={idx}>
                                                    <div className='ico-wrapper'>
                                                        <img src={addit.ico} alt='addition ico'/>
                                                    </div>
                                                    {addit.name}
                                                </li>
                                            )
                                        })
                                    } 
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='block'>
                            <div className='counter_block'>
                                <div className='day_pick_wrapper'>
                                    <h4>{ this.state[`lang_${this.state.lang}`].info.check_in }</h4>

                                    <div className='day_pick_block'>
                                        <DayPickerInput onDayChange={this.handleDayChange.bind(null, 1)}/>
                                    </div>
                                </div>

                                <div className='day_pick_wrapper'>
                                    <h4>{ this.state[`lang_${this.state.lang}`].info.check_out }</h4>

                                    <div className='day_pick_block'>
                                        <DayPickerInput onDayChange={this.handleDayChange.bind(null, 2)} />
                                    </div>
                                </div>

                                <div className='counters'>
                                    <div className='counter adults'>
                                        <h4>{ this.state[`lang_${this.state.lang}`].info.adults }</h4>

                                        <div className='count_wrapper'>
                                            <button 
                                                onClick={this.count_adults_fun.bind(null, '-')} 
                                                disabled={this.state.count_adults <= 1}
                                            >
                                                -
                                            </button>
                                            <h3>{this.state.count_adults}</h3>
                                            <button onClick={this.count_adults_fun.bind(null, '+')} >+</button>
                                        </div>
                                    </div>

                                    <div className='counter children'>
                                        <h4>{ this.state[`lang_${this.state.lang}`].info.children }</h4>

                                        <div className='count_wrapper'>
                                            <button 
                                                onClick={this.count_children_fun.bind(null, '-')} 
                                                disabled={this.state.count_children <= 0}
                                            >
                                                -
                                            </button>
                                            <h3>{this.state.count_children}</h3>
                                            <button onClick={this.count_children_fun.bind(null, '+')}>+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='promo'>
                                    <h4>{ this.state[`lang_${this.state.lang}`].info.promo }</h4>
                                    <input name='promo'/>
                                </div>

                                <button 
                                    className='book_now'
                                    type='button'
                                >                                
                                    <a href={`https://reservation.asiwebres.com/v3/RoomAvailability.aspx?id=403259f867c1432aa80dfb0bf572e617&lang=en&Curr=29&Operation=date&txtcheckindate=${this.state.checkinDay}&txtcheckoutdate=${this.state.checkoutDay}&txtadult=${this.state.count_adults}&txtChildren=${this.state.count_children}`}>
                                        { this.state[`lang_${this.state.lang}`].book_now }
                                    </a>
                                </button>
                            </div>        
                        </div>
                    </div>
                </div>

                <div className='section3'>
                    <div className='room-page_content'>
                        <Slider {...settings_mob} className='mob'>
                            {
                                this.state.room.slides.map( (slide, idx) => {
                                    return (
                                        <div key={idx}>
                                            <img src={slide} alt='slide'/>
                                        </div>
                                    )
                                })
                            }
                        </Slider>

                        <Slider {...settings} className='desktop'>
                            {
                                this.state.room.slides.map( (slide, idx) => {
                                    return (
                                        <div key={idx}>
                                            <img src={slide} alt='slide'/>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default withRouter(RoomPage)