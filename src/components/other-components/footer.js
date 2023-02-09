import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// Components


// Images
import Logo from '../../assets/img/footer_logo.png'
import Certificate from '../../assets/img/footer/certificate.png'
import Cards from '../../assets/img/footer/payment_cards.svg'

import FB from '../../assets/img/footer/fb.svg'
import Instagram from '../../assets/img/footer/insta.svg'
import TripAdvisor from '../../assets/img/footer/TripAdvisor.svg'



class Footer extends React.Component{

    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state={
            lang_en: {
                rooms:{
                    stan_twin: 'Standard Twin',
                    stan_double: 'Standard Double',
                    family: 'Family',
                    deluxe: 'Deluxe',
                    premium_luxe: 'Premium Luxe'
                },
                adress: 'Armenia, Yerevan, Rostomi 24',
                pages: {
                    rooms: 'Rooms',
                    booking: 'Booking',
                    restaurant: 'Restaurant',
                    events: 'Events',
                    about: 'About',
                    contact_us: 'Contact us'
                },
                rights: 'All Rights Reserved',
                weflex:'Design and development'
            },
            lang_ru: {
                rooms:{
                    stan_twin: 'Стандарт Твин',
                    stan_double: 'Стандарт двухместный',
                    family: 'Семейный',
                    deluxe: 'Полулюкс',
                    premium_luxe: 'Люкс'
                },
                adress: 'Армения, Ереван Ул.Ростоми 24',
                pages: {
                    rooms: 'Комнаты',
                    booking: 'Бронирование',
                    restaurant: 'Ресторан',
                    events: 'Мероприятия',
                    about: 'О нас',
                    contact_us: 'Контакты'
                },
                rights: 'Все права защищены',
                weflex:'Дизайн и разработка'
            },
            lang_am: {
                rooms:{
                    stan_twin: 'Ստանդարտ Թվին',
                    stan_double: 'Ստանդարտ Դաբլ',
                    family: 'Ընտանեկան',
                    deluxe: 'Կիսալյուքս',
                    premium_luxe: 'Լյուքս'
                },
                adress: 'ՀՀ, Երեվան, Ռոստոմի 24',
                pages: {
                    rooms: 'Համարներ',
                    booking: 'Ամրագրում',
                    restaurant: 'Ռեստորան',
                    events: 'Միջոցառումներ',
                    about: 'Մեր մասին',
                    contact_us: 'Կապ մեզ հետ'
                },
                rights: 'Բոլոր իրավունքները պաշտպանված են',
                weflex:'Դիզայնը և ծրագրավորումը'
            },
            lang: 'am'
        }

        this.soc_wrapper = React.createRef()
    }



    componentDidMount(){
        let lang = JSON.parse(this.myStorage.getItem('lang'))
        
        this.setState({
            lang: lang
        })
    }



    render(){

        return(
            <div className='footer'>

                <div className='social_and_bn'>
                    <div className='wrapper'>
                        <div className='soc_wrapper'>
                            <a href='https://www.facebook.com/konyakhotel' target='_blank' rel="noreferrer">
                                <img src={FB} alt='Facebook'/>
                            </a>
                        </div>

                        <div className='soc_wrapper'>
                            <a href='https://www.instagram.com/konyak_hotel/?hl=ru' target='_blank' rel="noreferrer">
                                <img src={Instagram} alt='Instagram'/>
                            </a>
                        </div>

                        <div className='soc_wrapper'>
                            <a href='https://www.tripadvisor.ru/Hotel_Review-g293932-d19240013-Reviews-Konyak_Hotel-Yerevan.html' target='_blank' rel="noreferrer">
                                <img src={TripAdvisor} alt='TripAdvisor'/>
                            </a>
                        </div>
                        
                        {/* ///////////////////////////////////////////////////////// */}

                        <div ref={ this.soc_wrapper } id='soc_wrapper' className='mob_icons_wrapper'>
                            <div className='soc_wrapper mob'>
                                <a href='https://www.facebook.com/konyakhotel' target='_blank' rel="noreferrer">
                                    <img src={FB} alt='Facebook'/>
                                </a>
                            </div>

                            <div className='soc_wrapper mob'>
                                <a href='https://www.instagram.com/konyak_hotel/?hl=ru' target='_blank' rel="noreferrer">
                                    <img src={Instagram} alt='Instagram'/>
                                </a>
                            </div>

                            <div className='soc_wrapper mob'>
                                <a href='https://www.tripadvisor.ru/' target='_blank' rel="noreferrer">
                                    <img src={TripAdvisor} alt='TripAdvisor'/>
                                </a>
                            </div>
                        </div>

                        {
                            this.props.location.pathname.split('/')[2] !== 'booking'
                            ? <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/booking`} className='book_now'>book<br/>now</NavLink>
                            : null
                        }
                    </div>
                </div>

                <div className='container160 flex'>
                    <div className='block'>
                        <ul className='first_ul'>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/standard-twin`}>{ this.state[`lang_${this.state.lang}`].rooms.stan_twin }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/standard-double`}>{ this.state[`lang_${this.state.lang}`].rooms.stan_double }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/family`}>{ this.state[`lang_${this.state.lang}`].rooms.family }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/deluxe`}>{ this.state[`lang_${this.state.lang}`].rooms.deluxe }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms/premium-luxe`}>{ this.state[`lang_${this.state.lang}`].rooms.premium_luxe }</NavLink></li>
                        </ul>
                    </div>

                    <div className='block'>
                        <ul className='second_ul'>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/rooms`}>{ this.state[`lang_${this.state.lang}`].pages.rooms }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/booking`}>{ this.state[`lang_${this.state.lang}`].pages.booking }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/restaurant`}>{ this.state[`lang_${this.state.lang}`].pages.restaurant }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/events`}>{ this.state[`lang_${this.state.lang}`].pages.events }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/about`}>{ this.state[`lang_${this.state.lang}`].pages.about }</NavLink></li>
                            <li><NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/contact-us`}>{ this.state[`lang_${this.state.lang}`].pages.contact_us }</NavLink></li>
                        </ul>
                    </div>

                    <div className='block logo'>
                        <img src={Logo} alt='logo'/>
                    </div>

                    <div className='social_wrapper mob'>
                        <div className='soc_wrapper'>
                            <a href='https://www.facebook.com/konyakhotel' target='_blank' rel="noreferrer">
                                <img src={FB} alt='Facebook'/>
                            </a>
                        </div>

                        <div className='soc_wrapper'>
                            <a href='https://www.instagram.com/konyak_hotel/?hl=ru' target='_blank' rel="noreferrer">
                                <img src={Instagram} alt='Instagram'/>
                            </a>
                        </div>

                        <div className='soc_wrapper'>
                            <a href='https://www.tripadvisor.ru/' target='_blank' rel="noreferrer">
                                <img src={TripAdvisor} alt='TripAdvisor'/>
                            </a>
                        </div>
                    </div>

                    <div className='block'>
                        <ul className='info'>
                            <li>{ this.state[`lang_${this.state.lang}`].adress }</li>
                            <li>+374 (60) 44-27-77</li>
                            <li>info@konyakhotel.am</li>
                        </ul>
                    </div>
                </div>

                <div className='footer_bottom desktop'>
                    <div className='container160 bottomFlex'>
                        <p className='info'>© Konyak Hotel 2021. { this.state[`lang_${this.state.lang}`].rights }</p>
                        
                        <div className='certificate'>
                            <img src={Certificate} alt='certificate'/>
                        </div>

                        <div className='right'>
                            <img src={Cards} alt='payment_cards'/>
                            <p>{ this.state[`lang_${this.state.lang}`].weflex } <a href='https://weflex.am/' target='_blank' rel="noreferrer">WeFlex</a></p>
                        </div>
                    </div>
                </div>
            
                <div className='footer_bottom mob'>
                    <div className='container160 bottomFlex'>
                        
                        <div className='certificate'>
                            <img src={Certificate} alt='certificate'/>
                        </div>

                        <img className='cards' src={Cards} alt='payment_cards'/>

                        <p className='info'>© Konyak Hotel 2021. All Rights Reserved</p>

                        <p className='dev_by'>Design and development <a href='https://weflex.am/' target='_blank' rel="noreferrer">WeFlex</a></p>

                    </div>
                </div>
            
            </div>
        )
    }
}

export default withRouter(Footer)