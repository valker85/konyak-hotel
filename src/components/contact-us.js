import React from 'react';


// Components 
import 'animate.css'
import WOW from 'wowjs'


// Images


export default class ContactUs extends React.Component{
    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            lang_en: {
                title:<h1 className='wow fadeInUp'>let’s travel together.<br/> contact us.</h1>,
                info:{
                    adress: 'Address',
                    email: 'Email',
                    phone: 'Phone'
                },
                form:{
                    name: 'name',
                    phone: 'phone',
                    email: 'email',
                    message: 'message'
                },
                adress: 'Armenia, Yerevan, Rostomi 24',
                placeholders:{
                    name: 'Write your name',
                    phone: 'Write your phone number',
                    email: 'Write your email address',
                    message: 'Write your message'
                },
                send: 'Send'
            },
            lang_ru: {
                title:<h1 className='wow fadeInUp'>Давайте путешествовать вместе.<br/> Свяжитесь с нами.</h1>,
                info:{
                    adress: 'Адрес',
                    email: 'Эл. почта',
                    phone: 'Телефон'
                },
                form:{
                    name: 'Имя',
                    phone: 'Телефон',
                    email: 'Эл. почта',
                    message: 'Сообщение'
                },
                adress: 'Армения, Ереван Ул.Ростоми 24',
                placeholders:{
                    name: 'Введите имя',
                    phone: 'Введите номер телефона',
                    email: 'Введите адрес эл. почты',
                    message: 'Введите ваше сообщение'
                },
                send: 'Отправить'
            },
            lang_am: {
                title:<h1 className='wow fadeInUp'>Ճամփորդենք միասին։<br/> Կապվեք մեզ հետ։</h1>,
                info:{
                    adress: 'Հասցե',
                    email: 'Էլ. փոստ',
                    phone: 'Հեռ․'
                },
                adress: 'ՀՀ, Երեվան, Ռոստոմի 24',
                form:{
                    name: 'Անուն',
                    phone: 'Հեռախոսահամար',
                    email: 'Էլ. փոստ',
                    message: 'Հաղորդագրություն'
                },
                placeholders:{
                    name: 'Գրե՛ք Ձեր անունը',
                    phone: 'Գրե՛ք Ձեր հեռախոսահամարը',
                    email: 'Գրե՛ք Ձեր էլ․ փոստի հասցեն',
                    message: 'Գրե՛ք Ձեր հաղորդագրությունը'
                },
                send: 'Ուղարկել'
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
            <div className='contact-us'>
                <div className='container160'>
                    <div className='content'>
                        <div className='block'>
                            { this.state[`lang_${this.state.lang}`].title }

                            <div className='uls'>
                                <ul>
                                    <li className='wow fadeInUp' data-wow-delay="0.3s">{ this.state[`lang_${this.state.lang}`].info.adress }</li>
                                    <li className='wow fadeInUp' data-wow-delay="0.6s">{ this.state[`lang_${this.state.lang}`].info.phone }</li>
                                    <li className='wow fadeInUp' data-wow-delay="0.9s">{ this.state[`lang_${this.state.lang}`].info.email }</li>
                                </ul>

                                <ul>
                                    <li className='wow fadeInUp' data-wow-delay="0.3s">{ this.state[`lang_${this.state.lang}`].adress }</li>
                                    <li className='wow fadeInUp' data-wow-delay="0.6s">+374 (60) 44-27-77, +374 (60) 44-17-77</li>
                                    <li className='wow fadeInUp' data-wow-delay="0.9s">Info@konyakhotel.am</li>
                                </ul>
                            </div>
                        </div>

                        <div className='block'>
                            <div className='contact_wrapper'>
                                <div className='inp'>
                                    <h3>{ this.state[`lang_${this.state.lang}`].form.name }*</h3>
                                    <input placeholder={ this.state[`lang_${this.state.lang}`].placeholders.name }/>
                                </div>

                                <div className='inp'>
                                    <h3>{ this.state[`lang_${this.state.lang}`].form.phone }*</h3>
                                    <input placeholder={ this.state[`lang_${this.state.lang}`].placeholders.phone }/>
                                </div>

                                <div className='inp'>
                                    <h3>{ this.state[`lang_${this.state.lang}`].form.email }*</h3>
                                    <input placeholder={ this.state[`lang_${this.state.lang}`].placeholders.email }/>
                                </div>

                                <div className='inp'>
                                    <h3>{ this.state[`lang_${this.state.lang}`].form.message }*</h3>
                                    <textarea placeholder={ this.state[`lang_${this.state.lang}`].placeholders.message }/>
                                </div>

                                <button>{ this.state[`lang_${this.state.lang}`].send }</button>

                                {/* <p>By clicking on the button "SEND" you confirm that you read and agree to the <span>Privacy Policy</span></p> */}
                            </div>
                        </div>
                    </div>
                
                    <div className='map'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8714050096455!2d44.516322615643425!3d40.1674167786878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc6063a9aa11%3A0xbea3faf044422788!2zMjkgUm9zdG9tIFN0LCBZZXJldmFuIDAwNzAsINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1617185793761!5m2!1sru!2s" 
                            width="100%" 
                            height="425" 
                            style={{border: '4px solid #FFFFFF'}} 
                            allowFullScreen="" 
                            title='konyak hotel'
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        )
    }
}