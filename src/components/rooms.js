import React from 'react';


// Components 
import 'animate.css'
import WOW from 'wowjs'


// Images
import Room1 from '../assets/img/rooms/room1.png'
import Room2 from '../assets/img/rooms/room2.png'
import Room3 from '../assets/img/rooms/room3.png'
import Room4 from '../assets/img/rooms/room4.png'
import Room5 from '../assets/img/rooms/room5.png'

import Safe from '../assets/img/rooms/safe.svg'
import TV from '../assets/img/rooms/tv.svg'
import Bath from '../assets/img/rooms/bath.svg'
import { NavLink } from 'react-router-dom';




export default class Rooms extends React.Component{

    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            lang_en: {
                title: <h1 className='wow fadeInUp'>Konyak hotel offers 40 bright,<br/> comfortable and modern rooms with<br/> an impressive view from the balcony.</h1>,
                text: 'The city guests who highly appreciate comfort liked the night stays in these rooms.',
                rooms:{
                    stan_twin: { name:'Standard Twin', text:'The standard Twin rooms are suitable for business visitors in a short term period. In cosy and compact rooms there are all conditions for enjoyable and effective stay.'},
                    stan_double: { name:'Standard Double', text:'Konyak Hotel offers classic and Elegant standard rooms furnished with double beds. The delicate colors of the suite will help you to concentrate on work and have a peaceful nap in the evening.'},
                    family: { name:'Family', text:'For couples we offer family suites with double beds. Large, bright rooms are suitable both for calm night stays and informal friendly talks on the couch․'},
                    deluxe: { name:'Deluxe', text:'Hotel Konyak offers spacious and bright junior suites with a king size bed square to those for whom comfort is a number one criteria.'},
                    premium_luxe: { name:'Premium Luxe', text: 'Konyak Hotel Yerevan also has 2 Premium Luxe broad suites designed for those who prefer wide spaces.'}
                },
                room_text: '',
                more: 'more',
            },
            lang_ru: {
                title: <h1>Konyak Hotel насчитывает 40 современных,<br/> светлых и комфортабельных номеров с<br/> впечатляющим видом на город из панорамных окон.</h1>,
                text: 'Проведенные дни в этих номерах приходятся по душе всем гостям города, которые высоко ценят комфорт.',
                rooms:{
                    stan_twin: { name:'Стандарт Твин', text: 'Предлагаемые гостиницей "Коньяк" номера "Стандарт Твин" подходят для гостей, находящихся в непродолжительной деловой поездке.'},
                    stan_double: { name:'Стандарт двухместный', text: 'Гостиница «Коньяк» предлагает элегантные, комфортабельные одноместные номера «Стандарт двухместный» с одной двуспальной или двумя односпальными кроватями.'},
                    family: { name:'Семейный', text: 'Предлагаем «Семейные» номера для пар и семейных пар. Светлые номера подходят как для тихого ночлега, так и для задушевных бесед за чашкой кофе.'},
                    deluxe: { name:'Полулюкс', text: 'Гостиница «Коньяк» предлагает номера полулюкс для тех, кто действительно ценит комфорт.'},
                    premium_luxe: { name:'Люкс', text: 'Элегантные номера «Люкс» гостиницы «Коньяк» в Ереване предназначены для тех гостей, которые предпочитают более просторные номера.'}
                },
                room_text: '',
                more: 'Подробнее',
            },
            lang_am: {
                title: <h1>Ժամանակակից, լուսավոր և հարմարավետ<br/> 40 համարներ՝ պանորամային պատուհաններից<br/> դեպի քաղաք բացվող տպավորիչ տեսարանով։</h1>,
                text: 'Գիշերակացն այս համարներում սիրվել է քաղաքի հյուրերի կողմից, ովքեր բարձր են գնահատում հարմարավետությունը։',
                rooms:{
                    stan_twin: { name: 'Ստանդարտ Թվին', text: '«Կոնյակ» հյուրանոցի առաջարկած «Ստանդարտ Թվին» սենյակները հարմար են գործնական կարճատև այցերով ժամանած հյուրերի համար։'},
                    stan_double: { name: 'Ստանդարտ Դաբլ', text: '«Կոնյակ» հյուրանոցն առաջարկում է էլեգանտ և հարմարավետ «Ստանդարտ Դաբլ» մեկսենյականոց համարները՝ մեկ երկտեղանոց կամ երկու մեկտեղանոց մահճակալներով։'},
                    family: { name: 'Ընտանեկան', text: 'Ամուսինների և զույգերի համար առաջարկում ենք «Ընտանեկան» համարները։ Լուսավոր սենյակները համար են ինչպես հանգիստ գիշերակացի, այնպես էլ մի բաժակ սուրճի շուրջ մտերմիկ զրույցների համար։'},
                    deluxe: { name: 'Կիսալյուքս', text: '«Կոնյակ» հյուրանոցն առաջարկում է «Կիսալյուքս» համարներ հարմարավետությունը իսկապես գնահատողների համար։'},
                    premium_luxe: { name: 'Լյուքս', text: 'Երևանի «Կոնյակ» հյուրանոցի էլեգանտ «Լյուքս» համարները նախատեսված են այն հյուրերի համար, որոնք նախընտրում են ավելի ընդարձակ սենյակներ։'}
                },
                room_text: '',
                more: 'Ավելին',
            },
            lang: 'am'
        }


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

        let lang = JSON.parse(this.myStorage.getItem('lang'))
        
        this.setState({
            lang: lang
        })
    }



    render(){
        return(
            <div className='rooms'>
                <div className='section1'>
                    <div className='container160'>
                        { this.state[`lang_${this.state.lang}`].title }
                        <p className='wow fadeInUp' data-wow-delay="0.8s">{ this.state[`lang_${this.state.lang}`].text }</p>
                    </div>
                </div>
            
                <div className='rooms-offers'>
                    <div className='block'>
                        <div className='img-wrapper'>
                            <img src={Room1} alt='room'/>
                        </div>
                    </div>

                    <div className='block content'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rooms.stan_twin.name }</h1>
                        <div className='line'></div>
                        
                        <div className='icons'>
                            <img src={Bath} alt='bath'/>
                            <img src={TV} alt='tv'/>
                            <img src={Safe} alt='safe'/>
                        </div>

                        <p className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rooms.stan_twin.text }</p>

                        <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/standard-twin`}>{ this.state[`lang_${this.state.lang}`].more } <span>›</span></NavLink>
                    </div>

                    <div className='block content'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rooms.stan_double.name }</h1>
                        <div className='line'></div>
                        
                        <div className='icons'>
                            <img src={Bath} alt='bath'/>
                            <img src={TV} alt='tv'/>
                            <img src={Safe} alt='safe'/>
                        </div>
                        
                        <p className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rooms.stan_double.text }</p>

                        <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/standard-double`}>{ this.state[`lang_${this.state.lang}`].more } <span>›</span></NavLink>
                    </div>

                    <div className='block'>
                        <div className='img-wrapper'>
                            <img src={Room2} alt='room'/>
                        </div>
                    </div>

                    <div className='block'>
                        <div className='img-wrapper'>
                            <img src={Room3} alt='room'/>
                        </div>
                    </div>

                    <div className='block content'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rooms.family.name }</h1>
                        <div className='line'></div>
                        
                        <div className='icons'>
                            <img src={Bath} alt='bath'/>
                            <img src={TV} alt='tv'/>
                            <img src={Safe} alt='safe'/>
                        </div>

                        <p className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rooms.family.text }</p>

                        <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/family`}>{ this.state[`lang_${this.state.lang}`].more } <span>›</span></NavLink>
                    </div>

                    <div className='block content'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rooms.deluxe.name }</h1>
                        <div className='line'></div>
                        
                        <div className='icons'>
                            <img src={Bath} alt='bath'/>
                            <img src={TV} alt='tv'/>
                            <img src={Safe} alt='safe'/>
                        </div>

                        <p className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rooms.deluxe.text }</p>

                        <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/deluxe`}>{ this.state[`lang_${this.state.lang}`].more } <span>›</span></NavLink>
                    </div>

                    <div className='block'>
                        <div className='img-wrapper'>
                            <img src={Room4} alt='room'/>
                        </div>
                    </div>

                    <div className='block'>
                        <div className='img-wrapper'>
                            <img src={Room5} alt='room'/>
                        </div>
                    </div>

                    <div className='block content'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rooms.premium_luxe.name }</h1>
                        <div className='line'></div>
                        
                        <div className='icons'>
                            <img src={Bath} alt='bath'/>
                            <img src={TV} alt='tv'/>
                            <img src={Safe} alt='safe'/>
                        </div>

                        <p className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rooms.premium_luxe.text }</p>

                        <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/premium-luxe`}>{ this.state[`lang_${this.state.lang}`].more } <span>›</span></NavLink>
                    </div>
                </div>
            
                <div className='padding'></div>
            </div>
        )
    }
}