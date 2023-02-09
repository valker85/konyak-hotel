import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// Components


// Images
import Logo from '../../assets/img/logo.svg'
import ArrowBottom from '../../assets/img/arrow-bottom.svg'

import Am from '../../assets/img/am.svg'
import En from '../../assets/img/en.svg'
import Ru from '../../assets/img/ru.svg'



class Header extends React.Component{
    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            lang_classes:['allLangBlock'],
            menu_window_classes: ['menu_window'],
            burger_menu_classes: ['burger-menu', 'desktop'],
            burger_menu_classes_MOB: ['burger-menu', 'mob'],
            ///////////////////////////////////////////////
            lang: 'am',
            lang_en: {
                rooms:{
                    stan_twin: 'Standard Twin',
                    stan_double: 'Standard Double',
                    family: 'Family',
                    deluxe: 'Deluxe',
                    premium_luxe: 'Premium Luxe'
                },
                pages: {
                    rooms: 'Rooms',
                    booking: 'Booking',
                    restaurant: 'Restaurant',
                    events: 'Events',
                    about: 'About',
                    contact_us: 'Contact us'
                }
            },
            lang_ru: {
                rooms:{
                    stan_twin: 'Стандарт Твин',
                    stan_double: 'Стандарт двухместный',
                    family: 'Семейный',
                    deluxe: 'Полулюкс',
                    premium_luxe: 'Люкс'
                },
                pages: {
                    rooms: 'Комнаты',
                    booking: 'Бронирование',
                    restaurant: 'Ресторан',
                    events: 'Мероприятия',
                    about: 'О нас',
                    contact_us: 'Контакты'
                }
            },
            lang_am: {
                rooms:{
                    stan_twin: 'Ստանդարտ Թվին',
                    stan_double: 'Ստանդարտ Դաբլ',
                    family: 'Ընտանեկան',
                    deluxe: 'Կիսալյուքս',
                    premium_luxe: 'Լյուքս'
                },
                pages: {
                    rooms: 'Համարներ',
                    booking: 'Ամրագրում',
                    restaurant: 'Ռեստորան',
                    events: 'Միջոցառումներ',
                    about: 'Մեր մասին',
                    contact_us: 'Կապ մեզ հետ'
                }
            },
            active_valute: JSON.parse(this.myStorage.getItem('val')),
            lang_flag: En
        }


        this.lang_ref = React.createRef()
        this.valute_ref = React.createRef()
        this.burger_ref = React.createRef()
        this.header = React.createRef()

        this.valute_ref_MOB = React.createRef()
        this.burger_ref_MOB = React.createRef()
        
        this.lang_flag = false
        this.menu_flag = false
        this.mob_menu_open = false
    }



    open_lang = () => {
        let classes = this.state.lang_classes
        this.lang_flag = !this.lang_flag 

        this.lang_flag === true 
        ?   classes.push('active')
        :   classes.pop()

        this.setState({
            lang_classes: classes
        })
    }

    change_lang = (lang, open) =>{
        open === false ? open = false : open = true
        let url = this.props.location.pathname.split('/')

        url[1] = lang
        this.myStorage.setItem( 'lang', JSON.stringify(url[1]) )
        this.props.history.push( url.join('/') )

        if(lang === 'am'){
            this.setState({
                lang_flag: Am
            })
        } else if(lang === 'ru'){
            this.setState({
                lang_flag: Ru
            })
        } else{
            this.setState({
                lang_flag: En
            })
        }
        // this.lang_ref.current.innerHTML = lang


        if( open === true ){
            this.open_lang()
            window.location.reload()
        }
    }

    value_fun = (idx, valute, cdm) => {
        let lis = []

        if( JSON.parse(this.myStorage.getItem('val')) !== valute ){
            // Get only 'li' tag.
            for (let i = 0; i < this.valute_ref.current.childNodes.length; i++) {
                if(this.valute_ref.current.childNodes[i].tagName === 'LI'){
                    lis.push(this.valute_ref.current.childNodes[i])
                }
            }

            // Active valute.
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = ''

                if(i === idx){
                    lis[i].className = 'active'
                }
            }
            this.myStorage.setItem( 'val', JSON.stringify( valute ) )

            if( cdm === false){
                window.location.reload()
            }
        }

    }

    open_menu = (event) =>{
        let classes = this.state.menu_window_classes
        let burger_menu_classes_MOB = this.state.burger_menu_classes_MOB
        let burger_menu_classes = this.state.burger_menu_classes
        this.menu_flag = !this.menu_flag 
        this.mob_menu_open = false


        if(this.menu_flag === true ){
            classes.push('active')
            burger_menu_classes.push('active')
        } else {
            classes.pop()
            if(burger_menu_classes.length > 2) burger_menu_classes.pop()
            if(burger_menu_classes_MOB.length > 2) burger_menu_classes_MOB.pop()
        } 

        this.setState({
            menu_window_classes: classes,
            burger_menu_classes: burger_menu_classes,
            burger_menu_classes_MOB: burger_menu_classes_MOB
        })
    }

    open_menu_MOB = ( event ) =>{
        let classes = this.state.menu_window_classes
        let burger_menu_classes_MOB = this.state.burger_menu_classes_MOB
        this.menu_flag = !this.menu_flag 


        if(this.menu_flag === true ){
            classes.push('active')
            burger_menu_classes_MOB.push('active')

            this.mob_menu_open = true

        } else {
            classes.pop()
            burger_menu_classes_MOB.pop()
    
            this.mob_menu_open = false
        } 

        this.setState({
            menu_window_classes: classes,
            burger_menu_classes_MOB: burger_menu_classes_MOB
        })
    }

    value_fun_MOB = (idx, valute, cdm) => {
        let lis = []

        // Get only 'li' tag.
        for (let i = 0; i < this.valute_ref_MOB.current.childNodes.length; i++) {
            if(this.valute_ref_MOB.current.childNodes[i].tagName === 'LI'){
                lis.push(this.valute_ref_MOB.current.childNodes[i])
            }
        }

        // Active valute.
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = ''

            if(i === idx){
                lis[i].className = 'active'
            }
        }

        this.myStorage.setItem( 'val', JSON.stringify( valute ) )

        if( cdm === false){
            window.location.reload()
        }
    }

    componentDidMount(){
        let url = this.props.location.pathname.split('/')
    
        if( url[1] !== 'ru' && url[1] !== 'am' && url[1] !== 'en' ){
          url[1] = 'am'
          this.props.history.push( url.join('/') )
        }
    
        this.myStorage.setItem( 'lang', JSON.stringify(url[1]) )

        this.setState({
            lang: url[1]
        }, ()=>{ this.change_lang( this.state.lang, false ) } )


        if(JSON.parse(this.myStorage.getItem('val'))){

        } else{
            console.log( 'No valute' )
            this.value_fun(0, 'usd', true)
        }


    }



    render(){
        let head = this.header
        let flag = this.mob_menu_open
        let soc_wrapper = document.getElementById('soc_wrapper')

        window.onscroll = function showHeader(){
            head.current.classList.remove('header_fixed_mob')
            if(flag === false){
                if(window.pageYOffset > 260){
                    head.current.classList.remove('header_fixed_mob')
                    head.current.classList.add('header_fixed')
                } else{
                    head.current.classList.remove('header_fixed')
                
                }
            } else{
                head.current.classList.add('header_fixed_mob')
            }

            if(window.pageYOffset > 300){
                soc_wrapper.classList.remove( 'show' )
                soc_wrapper.classList.add( 'hide' )

            } else{
                soc_wrapper.classList.remove( 'hide' )
                soc_wrapper.classList.add( 'show' )
            }
        }


        return(
            <div onScroll={ ()=>{ console.log('Scroll') } } ref={this.header} className='header'>
                <div className='wrapper container160'>
                    <div className='languages'>
                        <p ref={this.lang_ref} onClick={this.open_lang}><img src={this.state.lang_flag} alt='lang'/></p>

                        <div className={this.state.lang_classes.join(' ')}>
                            <p onClick={this.change_lang.bind(null, 'am')}><img src={Am} alt='lang'/></p>
                            <p onClick={this.change_lang.bind(null, 'ru')}><img src={Ru} alt='lang'/></p>
                            <p onClick={this.change_lang.bind(null, 'en')}><img src={En} alt='lang'/></p>
                        </div>

                        <img onClick={this.open_lang} src={ArrowBottom} alt='arrow'/>
                    </div>

                    <div className='logo'>
                        <NavLink to={`/${this.state.lang}`}>
                            <img src={Logo} alt='logo'/>
                        </NavLink>
                    </div>

                    <div className='endblock'>
                        <ul ref={this.valute_ref}>
                            <li onClick={this.value_fun.bind(null, 0, 'usd', false)} className={ this.state.active_valute === 'usd' ? 'active' : null}>Usd</li><span>/</span>
                            <li onClick={this.value_fun.bind(null, 1, 'rub', false)} className={ this.state.active_valute === 'rub' ? 'active' : null}>Rub</li><span>/</span>
                            <li onClick={this.value_fun.bind(null, 2, 'amd', false)} className={ this.state.active_valute === 'amd' ? 'active' : null}>Amd</li>
                        </ul>

                        <div ref={this.burger_ref} onClick={this.open_menu} 
                            className={this.state.burger_menu_classes.join(' ')}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div ref={this.burger_ref_MOB} onClick={this.open_menu_MOB} 
                            className={this.state.burger_menu_classes_MOB.join(' ')}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className={this.state.menu_window_classes.join(' ')}>
                        <div className='content'>
                            <ul>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/rooms/standard-twin`}>{ this.state[`lang_${this.state.lang}`].rooms.stan_twin }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/rooms/standard-double`}>{ this.state[`lang_${this.state.lang}`].rooms.stan_double }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/rooms/family`}>{ this.state[`lang_${this.state.lang}`].rooms.family }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/rooms/deluxe`}>{ this.state[`lang_${this.state.lang}`].rooms.deluxe }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/rooms/premium-luxe`}>{ this.state[`lang_${this.state.lang}`].rooms.premium_luxe }</NavLink></li>
                            </ul>

                            <ul>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/rooms`}>{ this.state[`lang_${this.state.lang}`].pages.rooms }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/booking`}>{ this.state[`lang_${this.state.lang}`].pages.booking }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/restaurant`}>{ this.state[`lang_${this.state.lang}`].pages.restaurant }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/events`}>{ this.state[`lang_${this.state.lang}`].pages.events }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/about`}>{ this.state[`lang_${this.state.lang}`].pages.about }</NavLink></li>
                                <li onClick={this.open_menu}><NavLink to={`/${this.state.lang}/contact-us`}>{ this.state[`lang_${this.state.lang}`].pages.contact_us }</NavLink></li>
                            </ul>
                        </div>

                        <div className='menu_bottom_mob'>
                            <ul ref={this.valute_ref_MOB}>
                                <li onClick={this.value_fun_MOB.bind(null, 0, 'usd', false)} className={ this.state.active_valute === 'usd' ? 'active' : null}>Usd</li><span>/</span>
                                <li onClick={this.value_fun_MOB.bind(null, 1, 'rub', false)} className={ this.state.active_valute === 'rub' ? 'active' : null}>Rub</li><span>/</span>
                                <li onClick={this.value_fun_MOB.bind(null, 2, 'amd', false)} className={ this.state.active_valute === 'amd' ? 'active' : null}>Amd</li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}

export default withRouter(Header)