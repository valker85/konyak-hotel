import React from 'react';


// Components 
import 'animate.css'
import WOW from 'wowjs'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// Images
// import BookingImg from '../assets/img/booking/booking.png'


export default class Booking extends React.Component{
    constructor(props){
        super(props)

        this.handleDayChange = this.handleDayChange.bind(this)
        this.myStorage = window.localStorage

        this.state = {
            tab: 1,
            first_Day: undefined,
            last_Day: undefined,
            count_adults: 1,
            count_children: 0,
            // ///////////////////////// languages
            lang_en: {
                title: 'Find Hotel Deals',
                text: "To book a room simply choose the day and the desired room, and we'll let you know if it’s available.",
                info:{
                    check_in: 'Check in',
                    check_out: 'Check out',
                    adults: 'Adults',
                    children: 'Children',
                    promo: 'Promotional Code'
                },
                book_now:'book now',
                success: {
                    suc1: 'Thank you for filling out the form!',
                    suc2: 'Our operators will contact you shortly.'
                }
            },
            lang_ru: {
                title: 'Найти номер',
                text: 'Чтобы забронировать номер, просто выберите день и нужный номер, и мы сообщим Вам, если он доступен.',
                info:{
                    check_in: 'Дата заезда',
                    check_out: 'Дата выезда',
                    adults: 'Взрослые',
                    children: 'Дети',
                    promo: 'Промокод'
                },
                book_now:'Забронировать',
                success: {
                    suc1: 'Спасибо, что заполнили форму!',
                    suc2: 'Наши операторы свяжутся с вами в ближайшее время.'
                }
            },
            lang_am: {
                title: 'Սենյակների ամրագրում',
                text: 'Սենյակը ամրագրելու համար պարզապես ընտրեք օրը և անհրաժեշտ համարը, և մենք կտեղեկացնենք Ձեզ, եթե այն հասանելի է։',
                info:{
                    check_in: 'Ժամանման ամսաթիվ',
                    check_out: 'Մեկնման ամսաթիվ',
                    adults: 'Մեծահասակներ',
                    children: 'Երեխաներ',
                    promo: 'Պրոմոկոդ'
                },
                book_now:'ամրագրել',
                success: { 
                    suc1: 'Շնորհակալություն լրացնելու համար:',  
                    suc2: 'Մեր օպերատորները շուտով կկապվեն ձեզ հետ:' 
                }
            },
            lang: 'am',
            // ///////////////////////////////////
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

    tab_fun = (num) => {
        this.setState({
            tab: num
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

        let lang = JSON.parse(this.myStorage.getItem('lang'))
        
        this.setState({
            lang: lang
        })
    }


    render(){
        return(
            <div className='booking'>
            {
                this.state.tab === 1
                ?<div className='block'>
                    <h1>{ this.state[`lang_${this.state.lang}`].title }</h1>
                    <p>{ this.state[`lang_${this.state.lang}`].text }</p>

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
                :<div className='block we_will_contact'>
                    <p>{ this.state[`lang_${this.state.lang}`].success.suc1 }<br/>{ this.state[`lang_${this.state.lang}`].success.suc2 }</p>
                    {/* <button onClick={this.tab_fun.bind(null, 1)}>Back to booking</button> */}
                </div>
            }
                <div className='block'></div>
            </div>
        )
    }
}

// className='wow fadeInUp' data-wow-delay="0.5s"