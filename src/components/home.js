import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import 'animate.css'
import WOW from 'wowjs'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Images
import ImgSec2 from '../assets/img/home/sec2img.png'
import Sec1Min2 from '../assets/img/home/sec2mini.png'

import ImgSec3 from '../assets/img/home/sec3img.png'
import ImgSec32 from '../assets/img/home/sec3img2.png'
import ImgSec33 from '../assets/img/home/sec3img3.png'
import ImgSec34 from '../assets/img/home/sec3img4.png'
import ImgSec35 from '../assets/img/home/sec3img5.png'


import sec4Slide from '../assets/img/home/sec4Slide.png'
import sec4Slide2 from '../assets/img/home/sec4Slide2.png'
import sec4Slide3 from '../assets/img/home/sec4Slide3.png'
import sec4Slide4 from '../assets/img/home/sec4Slide4.png'
import sec4Slide5 from '../assets/img/home/sec4Slide5.png'
import sec4Slide6 from '../assets/img/home/sec4Slide6.png'
import sec4Slide7 from '../assets/img/home/sec4Slide7.png'
import sec4Slide8 from '../assets/img/home/sec4Slide8.png'

import Sec5Mini from '../assets/img/home/sec5mini.png'
import Sec5Img from '../assets/img/home/sec5img.png'

import Sec6Slide1 from '../assets/img/home/sec6slide1.png'
import Sec6Slide2 from '../assets/img/home/sec6slide2.png'
import Sec6Slide3 from '../assets/img/home/sec6slide3.png'
import Sec6Slide4 from '../assets/img/home/sec6slide4.png'
import Sec6Slide5 from '../assets/img/home/sec6slide5.png'
import Sec6Slide6 from '../assets/img/home/sec6slide6.png'
import Sec6Slide7 from '../assets/img/home/sec6slide7.png'
import Sec6Slide8 from '../assets/img/home/sec6slide8.png'

import InfoCard1 from '../assets/img/home/info-card1.png'
import InfoCard2 from '../assets/img/home/info-card2.png'
import InfoCard3 from '../assets/img/home/info-card3.png'
import InfoCard4 from '../assets/img/home/info-card4.png'

import Section8Img from '../assets/img/home/section8img.png'

import Sec3img_mob1 from '../assets/img/home/sec3img_mob1.png'
import Sec3img_mob2 from '../assets/img/home/sec3img_mob2.png'
import Sec3img_mob3 from '../assets/img/home/sec3img_mob3.png'
import Sec3img_mob4 from '../assets/img/home/sec3img_mob4.png'
import Sec3img_mob5 from '../assets/img/home/sec3img_mob5.png'

import Sec5img_mob from '../assets/img/home/sec5img_mob.png'


export default class Home extends React.Component{
    constructor(props) {
        super(props)

        this.handleDayChange = this.handleDayChange.bind(this)
        this.myStorage = window.localStorage

        this.state = {
            first_Day: undefined,
            last_Day: undefined,
            count_adults: 1,
            count_children: 0,
            tab_img: ImgSec3,
            /////////////////////////////  Languages  /////////////////////////////
            lang_en: {
                welcome: 'welcome to',
                konyak_hotel: 'hotel konyak',
                in_yereven: 'in yerevan',
                info:{
                    check_in: 'Check in',
                    check_out: 'Check out',
                    adults: 'Adults',
                    children: 'Children',
                    promo: 'Promotional Code'
                },
                book_now:'book now',
                about: 'About us',
                about_texts:[
                    'Being located quite close to the downtown Konyak hotel offers a cosy and peaceful corner for both business and leisure travellers. Just a short 10-minute walk and you are already in the centre of Yerevan from where you have easy access to all essential locations.',
                    'In modern and well furnished rooms there are all conditions needed for productive work and ideal leisure.',
                    'You can arrange board meetings and exclusive events at our restaurant on the rooftop, enjoying Armenian food and beverages.',
                    'If you visit us during the summer season you will have the opportunity to relax in our outdoor pool  and enjoy the evenings in “SkyLand” rooftop open-air restaurant-bar, especially the marvellous scene through the glass floor.',
                    'For the most curious guests we’ll organize a little degustation at our wine cellar, where barrels full of cognac and wine are aged. Sure you’ll be amazed with the taste of legendary Armenian brandy. '
                ],
                rooms: 'rooms & suites',
                rooms_text: 'The elegant and modern hotel offers 40 suites (Premium luxe, Deluxe and  Standard guest rooms) with all the required facilities to make you stay comfortable and pleasant.',
                rooms_names:[
                    'Standard Twin',
                    'Standard Double',
                    'Family',
                    'Deluxe',
                    'Premium Luxe'
                ],
                welcome_rest: 'welcome to',
                rest_and_bars: 'restaurant & bar',
                swimming_pool: <h1 className='wow fadeInUp' data-wow-delay="0.5s">outdoor <br/> swimming pool</h1>,
                swimming_text: "Outdoor swimming pool is what you need for full relaxation and a nice sunbathe. What if we add some exclusive cocktails? Gorgeous, isn't it?",
                more: 'more',
                gallary: 'photo galary',
                hotel_events: 'hotel events',
                contact_us: <h1 className='wow fadeInUp'>IF YOU HAVE<br/> ANY QUESTIONS<br/> FEEL FREE<br/> TO  CONTACT US</h1>,
                contact_btn: 'Contact us'
            },
            lang_ru: {
                welcome: 'Добро пожаловать в',
                konyak_hotel: 'Коньяк отель',
                in_yereven: 'в Ереване',
                info:{
                    check_in: 'Дата заезда',
                    check_out: 'Дата выезда',
                    adults: 'Взрослые',
                    children: 'Дети',
                    promo: 'Промокод'
                },
                book_now:'Забронировать',
                about: 'О нас',
                about_texts:[
                    'Konyak Hotel - это очаровательный 4-звездочный отель в Ереване, который предлагает доступ к основным развлекательным и деловым центрам города. Идеально подходит для людей, путешествующих по работе, а также и для гостей, с целью посещения туристических достопримечательностей Армении.',
                    'Всего 10 минут ходьбы, и вы уже в центре Еревана, откуда у вас будет легкий доступ ко всем основным местам.',
                    'В наших современных и удобных номерах Вы почувствуете себя как дома, а за окном каждого номера открывается величественный вид на гору Арарат.',
                    'Вы можете организовать эксклюзивные мероприятия в нашем ресторане SkyLand, который находится на последнем этаже отеля, наслаждаясь армянскими блюдами и напитками.',
                    'Для самых любопытных гостей мы организуем небольшую дегустацию в нашем винном погребе, где выдерживаются бочки с коньяком и вином. Уверены, вы будете поражены вкусом легендарного армянского коньяка.'
                ],
                rooms: 'Комнаты',
                rooms_text: '40 прекрасно обставленных номеров в отеле всегда готовы принять вас и ваших родственников. Светлые номера класса «Стандарт», «Премиум Люкс» и «Делюкс» оснащены всеми необходимыми удобствами для приятного отдыха.',
                rooms_names:[
                    'Стандарт Твин',
                    'Стандарт двухместный',
                    'Семейный',
                    'Полулюкс',
                    'Люкс'
                ],
                welcome_rest: 'Добро пожаловать в',
                rest_and_bars: 'ресторан & бар',
                swimming_pool: <h1 className='wow fadeInUp' data-wow-delay="0.5s">Открытый бассейн</h1>,
                swimming_text: 'Открытый бассейн идеально подходит для отдыха в жаркую погоду и принятия солнечных ванн, а коктейли в баре только дополнят ваше пребывание.',
                gallary: 'Фотогалерея',
                more: 'Подробнее',
                hotel_events: 'Мероприятия',
                contact_us: <h1 className='wow fadeInUp' >ЕСЛИ У ВАС <br/> ЕСТЬ ВОПРОСЫ <br/> НЕ СТЕСНЯЙТЕСЬ <br/> ОБРАЩАТЬСЯ <br/> К НАМ</h1>,
                contact_btn: 'Связаться с нами'
            },
            lang_am: {
                welcome: 'Բարի գալուստ',
                konyak_hotel: 'Կոնյակ հյուրանոց',
                in_yereven: 'ԵրԵՎանում',
                info:{
                    check_in: 'Ժամանման ամսաթիվ',
                    check_out: 'Մեկնման ամսաթիվ',
                    adults: 'Մեծահասակներ',
                    children: 'Երեխաներ',
                    promo: 'Պրոմոկոդ'
                },
                book_now:'ամրագրել',
                about: 'Մեր մասին',
                about_texts:[
                    'Գտնվելով քաղաքի փոքր կենտրոնին շատ մոտ՝ Կոնյակ հյուրանոցն առաջարկում է հարմարավետ խաղաղ անկյուն ինչպես գործնական այցերով, այնպես էլ հանգստի նպատակով Երևան ժամանած հյուրերի համար։ Ընդամենը 10 րոպե զբոսանք, և դուք արդեն քաղաքի ամենաբանուկ հատվածում եք՝ կենտրոնում:',
                    'Ժամանակակից և գեղեցիկ կահավորված համարներում կա ամեն բան արդյունավետ աշխատանքի և լիարժեք հանգստի համար։',
                    'Սրճարանի և ռեստորանի տարածքում կարող եք կազմակերպել հանդիպումներ և միջոցառումներ, համտեսել հայկական ճաշատեսակներ և խմիչքներ։',
                    'Ամռան սեզոնին մեզ այցելելիս դուք հնարավորություն կունենաք վայելել հանգիստը բացօթյա լողավազանի մոտ, իսկ երեկոյան հյուրանոցի rooftop սրճարանից հիանալ լուսավոր Երևանով։',
                    'Ամանահետաքրքրասեր հյուրերին կգրավի մեր մառանը, որտեղ հնացվում են կոնյակով, գինով լի տակառները։ Առաջարկում ենք հենց տեղում համտեսել և գնահատել արևով լցված խմիչքների համը։'
                ],
                rooms: 'Համարներ',
                rooms_text: 'Հյուրանոցում առկա 40 գեղեցիկ և հարմար կահավորված համարները մշտապես պատրաստ են հյուրեր ընդունելու։ «Ստանդարտ» «Պրեմիում լյուքս» և «Դելյուքս» դասի լուսավոր սենյակներն ապահովված են բոլոր անհրաժեշտ հարմարություններով հանգրվանումը հաճելի դարձնելու համար։',  
                rooms_names:[
                    'Ստանդարտ Թվին',
                    'Ստանդարտ Դաբլ',
                    'Ընտանեկան',
                    'Կիսալյուքս',
                    'Լյուքս'
                ],
                welcome_rest: 'Բարի գալուստ',
                rest_and_bars: 'ՌԵՍՏՈՐԱՆ & ԲԱՐ',
                swimming_pool: <h1 className='wow fadeInUp' data-wow-delay="0.5s">Բացօթյա լողավազան</h1>,
                swimming_text: 'Բացօթյա լողավազանի տարածքն իդեալական է  տաք եղանակին լիցքաթափվելու և արևային լոգանք ընդունելու համար, իսկ bar-ում պատրաստված կոկտեյլները միայն կլրացնեն Ձեր հանգիստը։',
                gallary: 'Նկարներ',
                more: 'Ավելին',
                hotel_events: 'Միջոցառումներ',
                contact_us: <h1 className='wow fadeInUp'>ԵԹԵ ՁԵԶ <br/> ՀԵՏԱՔՐՔՐՈՒՄ Է <br/> ԻՆՉ-ՈՐ ՀԱՐՑ <br/> ԱՊԱ ԿԱՊՎԵՔ <br/> ՄԵԶ ՀԵՏ</h1>,
                contact_btn: 'Կապ մեզ հետ'
            },
            lang: 'am',
            checkinDay: '',
            checkinDay: ''
        }


        this.tab_ref = React.createRef()
        this.tab_ref_mob = React.createRef()

        this.tab_images = [ImgSec3, ImgSec32, ImgSec33, ImgSec34, ImgSec35]
        this.section6_slides = [
            {src: Sec6Slide3, width: '25vw', className: ''}, //31.25vw
            {src: Sec6Slide2, width: '25vw', className: 'pos2'}, //22.084vw
            {src: Sec6Slide1, width: '25vw', className: ''}, //28.438vw
            {src: Sec6Slide4, width: '25vw', className: 'pos1'}, //20.834vw
            {src: Sec6Slide5, width: '25vw', className: ''}, //20.834vw
            {src: Sec6Slide6, width: '25vw', className: 'pos2'}, //20.834vw
            {src: Sec6Slide7, width: '25vw', className: ''}, //20.834vw
            {src: Sec6Slide8, width: '25vw', className: 'pos1'} //20.834vw

        ]
        this.posts = [
            {src: InfoCard1, date: 'Sep 13, 2019', name: 'Borjomi Palace',                        post_url: 'event1'},
            {src: InfoCard2, date: 'Sep 13, 2019', name: 'Spring Travel in Full Swing',           post_url: 'event2'},
            {src: InfoCard3, date: 'Sep 13, 2019', name: 'FAUCHON L’Hotel Kyoto Opens In Japan',  post_url: 'event3'}, 
            {src: InfoCard4, date: 'Sep 13, 2019', name: 'Hilton Alpharetta Atlanta Hotel Opens', post_url: 'event4'} 
        ]
        this.mob_rooms = [ Sec3img_mob1, Sec3img_mob2, Sec3img_mob3, Sec3img_mob4, Sec3img_mob5]
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

    book_now_fun = () =>{

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

    tab_fun = (idx, mob = false) =>{
        if( mob === true ){
            let lis = this.tab_ref_mob.current.childNodes
        
            for (let i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active')
            }
    
            lis[idx].classList.add('active')
    
        } else{

            let lis = this.tab_ref.current.childNodes
        
            for (let i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active')
            }
    
            lis[idx].classList.add('active')
    
            this.setState({
                tab_img: this.tab_images[idx]
            })
        }
    }

    goRoom = (idx) => {
        let rooms_links = [
            `/${this.state.lang}/rooms/standard-twin`,
            `/${this.state.lang}/rooms/standard-double`,
            `/${this.state.lang}/rooms/family`,
            `/${this.state.lang}/rooms/deluxe`,
            `/${this.state.lang}/rooms/premium-luxe`
        ]
    
        this.props.history.push(rooms_links[idx])
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
        const { first_Day, last_Day } = this.state

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

        // ///////////////////////////////////////////// //

        const second_slide_settings = {
            autoplay:true,
            autoplaySpeed: 2000,
            className: "slider variable-width",
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            appendDots: dots => (
                <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px"
                }}
                >
                <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: (i) => {
                return(
                    <div
                        style={{
                            width: "30px"
                        }}
                    >
                        <h4><span>{i+1}</span><span className='slash'>/</span>{this.section6_slides.length}</h4>
                    </div>
                )
            }
        }
        
        const second_slide_settings_mob = {
            // autoplay:true,
            autoplaySpeed: 2000,
            className: "slider variable-width",
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            appendDots: dots => (
                <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px"
                }}
                >
                <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: (i) => {
                return(
                    <div
                        style={{
                            width: "fit-content"
                        }}
                    >
                        <h4><span>{i+1}</span><span className='slash'>/</span>{this.section6_slides.length}</h4>
                    </div>
                )
            }
        }


        return(
            <div className='home'>
                
                <div className='section1'>
                    <div className='container160 wrapper'>
                        <p>{ this.state[`lang_${this.state.lang}`].welcome }</p>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].konyak_hotel } <br/>{ this.state[`lang_${this.state.lang}`].in_yereven }</h1>
                    </div>    

                    <div className='sign_up'>
                        {/* <form> */}
                        <div className='container160 flex'>
                            <div className='first_day'>
                                <p>{ this.state[`lang_${this.state.lang}`].info.check_in }</p>

                                <div className='day_pick_block'>
                                    <p>{!first_Day}</p>

                                    <DayPickerInput onDayChange={this.handleDayChange.bind(null, 1)}/>
                                </div>
                            </div>

                            <div className='last_day'>
                                <p>{ this.state[`lang_${this.state.lang}`].info.check_out }</p>

                                <div className='day_pick_block'>
                                    <p >{!last_Day}</p>
                                    <DayPickerInput onDayChange={this.handleDayChange.bind(null, 2)} />
                                </div>
                            </div>

                            <div className='counter'>
                                <p>{ this.state[`lang_${this.state.lang}`].info.adults }</p>
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

                            <div className='counter'>
                                <p>{ this.state[`lang_${this.state.lang}`].info.children }</p>
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

                            <div className='promo'>
                                <p>{ this.state[`lang_${this.state.lang}`].info.promo }</p>
                                <input name='promo' />
                            </div>

                            <button 
                                className='book_now'
                                type='button'
                                onClick={this.book_now_fun}
                            >
                                <a href={`https://reservation.asiwebres.com/v3/RoomAvailability.aspx?id=403259f867c1432aa80dfb0bf572e617&lang=en&Curr=29&Operation=date&txtcheckindate=${this.state.checkinDay}&txtcheckoutdate=${this.state.checkoutDay}&txtadult=${this.state.count_adults}&txtChildren=${this.state.count_children}`}>
                                    { this.state[`lang_${this.state.lang}`].book_now }
                                </a>
                            </button>
                        
                        </div>
                        {/* </form>     */}
                    </div>
                </div>
            
                <div className='section2'>
                    <div className='container160 flex'>
                        <div className='block'>
                            <div className='bi'>
                                <img src={ImgSec2} alt='hotel img'/>
                            </div>

                            <div className='mini-image'>
                                <img className='wow fadeInUp' src={Sec1Min2} alt='hotel img'/>
                            </div>
                        </div>

                        <div className='block'>
                            <div className='contain_block'>
                                <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].about }</h1>

                                <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>

                                {
                                    this.state[`lang_${this.state.lang}`].about_texts.map((text, idx)=>{
                                        return <p className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className='section3'>
                        <div className='tabs'>
              
                            <div className='tab-header'>
                                <div className='contain_block'>
                                    <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].rooms }</h1>
                                    <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>
                                    <p className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rooms_text }</p>

                                    <div className="tabs-wrapper">
                                        <ul ref={this.tab_ref_mob} className='mob'>
                                            {
                                                this.state[`lang_${this.state.lang}`].rooms_names.map((name, idx)=>{
                                                    return( 
                                                        <li onClick={this.tab_fun.bind(null, idx, true)} className={idx === 0 ? 'active' : null} key={idx}>
                                                            { name }
                                                            <div className='mob_tab'>
                                                                <img src={ this.mob_rooms[idx] } alt='room'/>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <ul ref={this.tab_ref} className='desktop'>
                                            {
                                                this.state[`lang_${this.state.lang}`].rooms_names.map((name, idx)=>{
                                                    return <li key={idx} onClick={this.goRoom.bind(null, idx)} onMouseEnter={this.tab_fun.bind(null, idx)} className={idx === 0 ? 'active' : null}>{name}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='image'>
                                <img src={this.state.tab_img} alt='room' />
                            </div>
                        </div>
                </div>
            
                <div className='section4'>
                    <div className='container160'>
                        <h2 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].welcome_rest }</h2>
                        <h1 className='wow fadeInUp' data-wow-delay="0.5s">{ this.state[`lang_${this.state.lang}`].rest_and_bars }</h1>
                        
                        <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>
                    </div>    
                    <Slider {...settings} className='desktop'>
                        <div>
                            <img src={sec4Slide} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide2} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide3} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide4} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide5} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide6} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide7} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide8} alt='slide'/>
                        </div>
                    </Slider>

                    <Slider {...settings_mob} className='mob'>
                        <div>
                            <img src={sec4Slide} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide2} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide2} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide} alt='slide'/>
                        </div>
                        <div>
                            <img src={sec4Slide2} alt='slide'/>
                        </div>
                    </Slider>
                </div>
            
                <div className='section5'>
                    <div className='container160 flex'>
                        <div className='block'>
                            <div className='contain_block'>
                                <h1 className='wow fadeInUp'></h1>
                                { this.state[`lang_${this.state.lang}`].swimming_pool }

                                <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>

                                <p className='wow fadeInUp' data-wow-delay="1s">{ this.state[`lang_${this.state.lang}`].swimming_text }</p>
                                
                                <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/about`}>{ this.state[`lang_${this.state.lang}`].more } <span>›</span></NavLink>
                            </div>
                        </div>

                        <div className='block'>
                            <div className='img-wrapper desktop'>
                                <img src={Sec5Img} alt='yard'/>
                            </div>

                            <div className='img-wrapper mob'>
                                <img src={Sec5img_mob} alt='yard'/>
                            </div>
                            

                            <img 
                                className='wow fadeInUp mini-image' 
                                data-wow-delay="0.5s" 
                                src={Sec5Mini} 
                                alt='mini-img'
                            />
                        </div>
                    </div>
                </div>
            
                <div className='section6'>
                    <div className='container160'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].gallary }</h1>
                        <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>
                    </div>

                    <Slider {...second_slide_settings} className='desktop'>
                    {
                        this.section6_slides.map((slide, idx)=>{
                            return(
                                <div key={idx} style={{ width: slide.width }}>
                                    <div className='img-wrapper'>
                                        <img className={slide.className} src={slide.src} alt='slide'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Slider>

                    <Slider {...second_slide_settings_mob} className='mob'>
                    {
                        this.section6_slides.map((slide, idx)=>{
                            return(
                                <div key={idx} style={{ width: '72vw' }}>
                                    <div className='img-wrapper'>
                                        <img className={slide.className} src={slide.src} alt='slide'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Slider>

                </div>
            
                <div className='section7'>
                    <div className='container160'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].hotel_events }</h1>
                        <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>

                        <div className='content desktop'>
                        {
                            this.posts.map((post, idx)=>{
                                return(
                                    <div className='info' key={idx}>
                                        <img src={post.src} alt='info'/>
                                        <h4>{post.date}</h4>
                                        <h2>{post.name}</h2>
                                        <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/events/${post.post_url}`}>Read more</NavLink>
                                    </div>
                                )
                            })
                        }
                        </div>

                        <div className='content mob'>
                            <Slider {...settings_mob}>
                            {
                                this.posts.map((post, idx)=>{
                                    return(
                                        <div className='info' key={idx}>
                                            <img src={post.src} alt='info'/>
                                            <h4>{post.date}</h4>
                                            <h2>{post.name}</h2>
                                            <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/events/${post.post_url}`}>Read more</NavLink>
                                        </div>
                                    )
                                })
                            }
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className='section8'>
                    <div className='container160'>
                        <div className='content'>
                            <div className='block'>
                                <div className='img-wrapper'>
                                    <img src={Section8Img} alt='yard'/>
                                </div>
                            </div>

                            <div className='block'>
                                <div className='contain_block'>
                                    { this.state[`lang_${this.state.lang}`].contact_us }

                                    <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/contact-us`}>{ this.state[`lang_${this.state.lang}`].contact_btn }</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
} 