import React from 'react';


// Components 
import 'animate.css'
import WOW from 'wowjs'


// Images
import RestaurantImg from '../assets/img/restaurant/restaurant.png'
// import Mini from '../assets/img/restaurant/mini.png'
import Sec2Img from '../assets/img/restaurant/sec2img.png'
import Sec3Img from '../assets/img/restaurant/sec3img.png'

import Restaurant_MOB from '../assets/img/restaurant/restaurant_mob.png'
import Sec2Img_MOB from '../assets/img/restaurant/sec2img_mob.png'
import Sec3Img_MOB from '../assets/img/restaurant/sec3img_mob.png'



export default class Restaurant extends React.Component{
    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            lang_en: {
                rest: 'Restaurant',
                block1: [
                    'Don’t forget to visit our welcoming restaurant on the 8-th floor. The wide variety of suggested dishes from European an Armenian cuisines from our menu definitely will impress you.',
                    'Gathering recipes from all regions of Armenia our chefs modify them and try to represent these dishes from a new angle.',
                    'New tastes and scents will be revealed to you if you treat yourself with a glass of wine or brandy right from our cellar.'
                ],
                block2: {
                    text: 'New tastes and scents will be revealed to you if you treat yourself with a glass of wine or brandy right from our cellar. For cocktail lovers we’ll prepare a unique signature cocktail and invite them to enjoy the glorious view of Yerevan from the luxury outdoor terrace.',
                    dots:[
                        'Located on the 8th floor',
                        'Magnificent view on Mount Ararat and over the city',
                        'Restaurant and “Skyland” rooftop cafe-bar ',
                        'Armenian and European cuisine',
                        'International and Armenian national dishes',
                        'Alcoholic and non-alcoholic beverages'
                    ],
                    breakfast: 'Breakfast Hours',
                    days: 'Monday-Sunday: 8 am-11 am'
                }
            },
            lang_ru: {
                rest: 'Ресторан',
                block1: [
                    'Останавливаясь у нас, не забудьте посетить ресторан на 8 этаже, где разнообразие изысканных блюд европейской и армянской кухни удовлетворит даже самых капризных гостей.',
                    'Ресторан отеля представляет собой восхитительное кулинарное сочетание армянской кухни всех регионов.',
                    'Представляет широкий выбор блюд на обед и ужин, приготовленных из самых свежих ингредиентов. Для гостей желающих перекусить, мы предлагаем различные варианты салатов и легких закусок.'
                ],
                block2: {
                    text: 'Элегантный интерьер, высокий профессионализм и изысканная обстановка поможет Вам расслабиться, любуясь панорамным видом на город, открывающийся из террасы с высоты 8 этажа.',
                    dots:[
                        'Расположен на 8 этаже',
                        'Великолепный вид на гору Арарат и город',
                        'Ресторан и Летнее кафе "Skyland" на крыше',
                        'Армянская и Европейская кухня',
                        'Современные и традиционные армянские блюда',
                        'Алкогольные и безалкогольные напитки'
                    ],
                    breakfast: 'Часы завтрака',
                    days: 'Понедельник-воскресенье: с 08:00 до 11:00.'
                }
            },
            lang_am: {
                rest: 'Ռեստորան',
                block1: [
                    'Մեզ մոտ հանգրվանելիս չմոռանաք այցելել 8-րդ հարկում գտնվող ռեստորանը, որտեղ մատուցվող եվրոպական և հայկական խոհանոցների համեղ ուտեստների բազմազանությունը կգոհացնի անգամ ամենաքմահաճ հյուրերին:',
                    'Հավաքելով բաղադրատոմսեր Հայաստանի տարբեր տարածաշրջաններից՝ մեր փորձառու և ստեղծագործ խոհարարները փորձել են նորովի մատուցել սիրված ավանդական ճաշատեսակները՝ Ձեր դատին հանձնելով երկրի համերի և բույրերի հարուստ գամման։'
                ],
                block2: {
                    text: 'Վայելքը լիարժեք կլինի, եթե այս ամենին հավելենք մի բաժակ անուշահամ գինի կամ կոնյակ՝ հնացված հենց մեր մառանում։ Իսկ կոկտեյլների սիրահարներին կառաջարկենք փորձել յուրօրինակ հեղինակային կոկտեյլներ և կտուրից հիանալ դեպի քաղաքն ու Արարատ լեռը բացվող սքանչելի տեսարանով։',
                    dots:[
                        'Գտնվում է 8-րդ հարկում',
                        'Դեպի քաղաք և պատմական Արարատ լեռ բացվող հրաշալի տեսարան',
                        'Ռեստորան և “Skyland” բացօթյա սրճարան տանիքին',
                        'Հայկական և եվրոպական խոհանոց',
                        'Ժամանակակից և հայկական ավանդական ուտեստներ',
                        'Ալկոհոլային և ոչ ալկոհոլային խմիչքներ'
                    ],
                    breakfast: 'Նախաճաշի ժամեր',
                    days: 'Երկուշաբթի-Կիրակի՝ 08։00-11։00'
                }
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
            <div className='restaurant'>
                <div className='container160'>
                    <div className='section1'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rest }</h1>
                        <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>

                        <div className='img-wrapper mob'>
                            <img src={Restaurant_MOB} alt='restaurant'/>
                        </div>

                        <div className='img-wrapper desktop'>
                            <img src={RestaurantImg} alt='restaurant'/>
                        </div>
                    </div>
                
                    <div className='section2'>

                        <div className='content'>
                            <div className='block'>
                                <div className='contain_block'>
                                    {
                                        this.state[`lang_${this.state.lang}`].block1.map( (text, idx) => {
                                            return <p className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</p>
                                        })
                                    }
                                </div>
                            </div>

                            <div className='block'>
                                <div className='img-wrapper mob'>
                                    <img src={Sec2Img_MOB} alt='restaurant'/>
                                </div>

                                <div className='img-wrapper desktop'>
                                    <img src={Sec2Img} alt='restaurant'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section3'>

                    <div className='content'>
                        <div className='block'>
                            <div className={ this.state.lang === 'am' ? 'contain_block am' : 'contain_block' }>
                                <p className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].block2.text }</p>

                                <ul>
                                    { 
                                        this.state[`lang_${this.state.lang}`].block2.dots.map( (text, idx) => {
                                            return <li className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>
                                                <h6 className={ this.state.lang === 'am' ? 'am' : null }>{ text }</h6>
                                            </li>
                                        }) 
                                        
                                    }
                                </ul>

                                <h4>
                                    { this.state[`lang_${this.state.lang}`].block2.breakfast }<b>{ this.state[`lang_${this.state.lang}`].block2.days }</b>
                                </h4>
                            </div>
                        </div>

                        <div className='block'>
                            <div className='img-wrapper mob'>
                                <img src={Sec3Img_MOB} alt='restaurant'/>
                            </div>

                            <div className='img-wrapper desktop'>
                                <img src={Sec3Img} alt='restaurant'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}