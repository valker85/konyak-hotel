import React from 'react';

// Components 
import 'animate.css'
import WOW from 'wowjs'


// Images
import Sec1Img1 from '../assets/img/about/sec1img1.png'
// import Sec1Img2 from '../assets/img/about/sec1img2.png'
import Mini from '../assets/img/about/mini1.png'

import Sec2Img from '../assets/img/about/sec2img.png'
import Sec4Img from '../assets/img/about/sec3img.png'
import Sec3Img from '../assets/img/about/sec4img.png'
import Sec5Img from '../assets/img/about/sec5img.png'


import Sec1Img1_MOB from '../assets/img/about/sec1img1_mob.png'

import Sec3Img_MOB from '../assets/img/about/sec4img_mob.png'
import Sec4Img_MOB from '../assets/img/about/sec3img_mob.png'
import Sec5Img_MOB from '../assets/img/about/sec5img_mob.png'





export default class About extends React.Component{
    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            lang_en: {
                title: 'About us',
                block1: [
                    "If you appreciate  classic and delightful atmosphere there is no doubt you’ll like the stay at our newly opened Hotel Konyak.",
                    "Being located quite close to the downtown Konyak hotel offers a cosy and peaceful corner for both business and leisure travellers.",
                    "Just a short 10-minute walk and you are already in the centre of Yerevan from where you have easy access to all essential locations."
                ],
                block2: [
                    'In modern and well furnished rooms there are all conditions needed for productive work and ideal leisure.',
                    'You can arrange board meetings and exclusive events at our restaurant on the rooftop, enjoying Armenian food and beverages.',
                    'If you visit us during the summer season you will have the opportunity to relax in our outdoor pool  and enjoy the evenings in “SkyLand” rooftop open-air restaurant-bar, especially the marvellous scene through the glass floor.'
                ],
                block3: [
                    'For the most curious guests we’ll organize a little degustation at our wine cellar, where barrels full of cognac and wine are aged. Sure you’ll be amazed with the taste of legendary Armenian brandy.',
                    'The hotel is located in the secluded and comfortable zone of the capital Yerevan, 600m from Republic Square and 150m from Tashir shopping centre.'
                ],
                we_offer:{
                    offers1: [
                        'Location close to downtown',
                        '40 rooms with the nice view to city',
                        'A restaurant and rooftop an open-air café-bar',
                        'Outdoor swimming pool'
                    ],
                    offers2: [
                        'Brandy and wine degustation at the cellar',
                        'Parking',
                        'Laundry service',
                        'Room service and minibar'
                    ],
                    offer_word: 'WE OFFER:'
                }
            },
            lang_ru: {
                title: 'О нас',
                block1: [
                    "Люди, которые ценят классический стиль их обязательно привлечет тонкая, непринужденная атмосфера недавно открывшегося отеля «Коньяк».",
                    "Идеально подходит для людей, путешествующих по работе, а также и для гостей, с целью посещения туристических достопримечательностей Армении.",
                    "Konyak Hotel - это очаровательный 4-звездочный отель в Ереване, который предлагает доступ к основным развлекательным и деловым центрам города. "
                ],
                block2: [
                    'В наших современных и удобных номерах Вы почувствуете себя как дома, а за окном каждого номера открывается величественный вид на гору Арарат.',
                    'Этот великолепный отель создан для тех. кто готов отведать вкусные и изысканные блюда армянской кухни и, конечно же, самый знаменитый коньяк в мире.',
                    'На территории отеля в теплое время года к вашим услугам работает бассейн. Идеальное место для отдыха, где можно позагорать в удобных шезлонгах, выпить коктейль и попробовать горячие и холодные блюда бара в ресторанной зоны лобби.'
                ],
                block3: [
                    'Konyak Hotel имеет собственный погреб, где гости могут прийти познакомиться с историей коньячного производства в Армении, узнать о стадиях изготовления армянского коньяка, а также насладиться красотой, неповторимым ароматом и вкусом различных сортов коньяков, вин из первичного источника.',
                    'Отель расположен в уединенной и комфортной зоне столицы Ереван, в 600 м от Площади Республики и 150 м от торгового центра Ташир.'
                ],
                we_offer:{
                    offers1: [
                        'Расположение недалеко от центра города',
                        '40 современных комфортабельных номеров с балконами, выходящими на город',
                        'Ресторан, бар и летнее кафе на крыше',
                        'Уличный бассейн'
                    ],
                    offers2: [
                        'Коньяк и дегустация вин в погребе рядом с отелем',
                        'Стоянка',
                        'Прачечная',
                        'Обслуживание номеров'
                    ],
                    offer_word: 'Мы предлагаем:'
                }
            },
            lang_am: {
                title: 'Մեր մասին',
                block1: [
                    "Դասականը և պրակտիկը գնահատող մարդկանց հաստատ կգրավի նորաբաց «Կոնյակ» հյուրանոցի նուրբ, չպարտադրող մթնոլորտը։",
                    "Գտնվելով քաղաքի փոքր կենտրոնին շատ մոտ՝ «Կոնյակ» հյուրանոցն առաջարկում է հարմարավետ խաղաղ անկյուն ինչպես գործնական այցերով, այնպես էլ հանգստի նպատակով Երևան ժամանած հյուրերի համար։",
                    "Ընդամենը 10 րոպե զբոսանք, և դուք արդեն քաղաքի ամենաբանուկ հատվածում եք՝ կենտրոնում։"
                ],
                block2: [
                    'Ժամանակակից և գեղեցիկ կահավորված համարներում կա ամեն բան արդյունավետ աշխատանքի և լիարժեք հանգստի համար։',
                    'Սրճարանի և ռեստորանի տարածքում կարող եք կազմակերպել հանդիպումներ և միջոցառումներ, համտեսել հայկական ճաշատեսակներ և խմիչքներ։',
                    'Ամռան սեզոնին մեզ այցելելիս դուք հնարավորություն կունենաք վայելել հանգիստը բացօթյա լողավազանի մոտ, իսկ երեկոյան հյուրանոցի SkyLand rooftop սրճարանից հիանալ լուսավոր Երևանով։'
                ],
                block3: [
                    'Ամանահետաքրքրասեր հյուրերին կգրավի մեր մառանը, որտեղ հնացվում են կոնյակով, գինով լի տակառները։ Առաջարկում ենք հենց տեղում համտեսել և գնահատել արևով լցված խմիչքները։',
                    'Հյուրանոցը տեղակայված է մայրաքաղաք Երևանի մեկուսացված և հարմարավետ հատվածում՝ 600մ մինչև  Հանրապետության հրապարակ և 150մ մինչև Տաշիր առևտրի կենտրոն։'
                ],
                we_offer:{
                    offers1: [
                        'Քաղաքի կենտրոնին մոտ տեղադիրք',
                        '40 ժամանակակից և հարմարավետ սենյակներ դեպի քաղաք բացվող պատշգամբերով',
                        'Ռեստորան, բար և բացօթյա սրճարան տանիքին',
                        'Բացօթյա լողավազան'
                    ],
                    offers2: [
                        'Կոնյակի և գինու համտես հյուրանոցին կից մառանում',
                        'Ավտոկայանատեղի',
                        'Լվացքատուն',
                        'Սենյակների սպասարկում '
                    ],
                    offer_word: 'Առաջարկում ենք՝'
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
            <div className='about'>
                <div className='container160'>
                    <div className='section1'>
                        <div className='content'>
                            <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].title }</h1>
                            <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>

                            <div className='img-wrapper mob'>
                                <img src={Sec1Img1_MOB} alt='about us'/>
                            </div>

                            <div className='img-wrapper desktop'>
                                <img src={Sec1Img1} alt='about us'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section2'>
                    <div className='container160'>               
                        <div className='content'>                
                            <div className='block'>              
                                <div className='contain_block'>
                                    {
                                        this.state[`lang_${this.state.lang}`].block1.map((text, idx)=>{
                                            return <p className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</p>
                                        })
                                    }
                                    {/* <p className='wow fadeInUp' data-wow-delay="0.4s">If you appreciate  classic and delightful atmosphere there is no doubt you’ll like the stay at our newly opened Hotel Konyak.</p>
                                    <p className='wow fadeInUp' data-wow-delay="0.8s">Being located quite close to the downtown Konyak hotel offers a cosy and peaceful corner for both business and leisure travellers.</p>
                                    <p className='wow fadeInUp' data-wow-delay="1.2s">Just a short 10-minute walk and you are already in the centre of Yerevan from where you have easy access to all essential locations.</p> */}
                                </div>
                            </div>

                            <div className='block'>
                                <div className='img-wrapper'>
                                    <img src={Sec2Img} alt='about'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='section3'>
                    <div className='content'>
                        <div className='block'>
                            <div className='img-wrapper desktop'>
                                <img src={Sec4Img} alt='about'/>
                            </div>

                            <div className='img-wrapper mob'>
                                <img src={Sec4Img_MOB} alt='about'/>
                            </div>
                        </div>
                        
                        <div className='block'>
                            <div className='contain_block'>
                                {
                                    this.state[`lang_${this.state.lang}`].block2.map((text, idx)=>{
                                        return <p className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</p>
                                    })
                                }
                                {/* <p className='wow fadeInUp' data-wow-delay="0.4s">In modern and well furnished rooms there are all conditions needed for productive work and ideal leisure.</p>
                                <p className='wow fadeInUp' data-wow-delay="0.8s">You can arrange board meetings and exclusive events at our restaurant on the rooftop, enjoying Armenian food and beverages.</p>
                                <p className='wow fadeInUp' data-wow-delay="1.2s">If you visit us during the summer season you will have the opportunity to relax in our outdoor pool  and enjoy the evenings in “SkyLand” rooftop open-air restaurant-bar, especially the marvellous scene through the glass floor.</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section4'>
                    <div className='content'>
                        <div className='block'>
                            <div className='contain_block'>
                                {
                                    this.state[`lang_${this.state.lang}`].block3.map((text, idx)=>{
                                        return <p className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</p>
                                    })
                                }
                                {/* <p className='wow fadeInUp' data-wow-delay="0.4s">For the most curious guests we’ll organize a little degustation at our wine cellar, where barrels full of cognac and wine are aged.<br/>Sure you’ll be amazed with the taste of legendary Armenian brandy. </p>
                                <p className='wow fadeInUp' data-wow-delay="0.8s">We aim to make your stay really joyful and memorable, so you can take with you a bright and lovely impression about Armenia.</p> */}
                            </div>
                        </div>

                        <div className='block'>
                            <div className='img-wrapper desktop'>
                                <img src={Sec3Img} alt='about'/>
                            </div>
                            <div className='img-wrapper mob'>
                                <img src={Sec3Img_MOB} alt='about'/>
                            </div>
                            <div className='img-wrapper-mini'>
                                <img src={Mini} alt='about'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container160'>
                    <div className='section5'>

                        {/* <h3>We offer:</h3> */}
                        <h3>{ this.state[`lang_${this.state.lang}`].we_offer.offer_word }</h3>

                        <div className='offers_container'>
                            <ul>
                                {
                                    this.state[`lang_${this.state.lang}`].we_offer.offers1.map((text, idx)=>{
                                        return <li className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</li>
                                    })
                                }
                                {/* <li className='wow fadeInUp' data-wow-delay="0.4s">Location close to downtown</li>
                                <li className='wow fadeInUp' data-wow-delay="0.8s">40 rooms with the nice view to city</li>
                                <li className='wow fadeInUp' data-wow-delay="1.2s">A restaurant and rooftop an open-air café-bar</li>
                                <li className='wow fadeInUp' data-wow-delay="1.6s">Outdoor swimming pool</li> */}
                            </ul>

                            <ul>
                                {
                                    this.state[`lang_${this.state.lang}`].we_offer.offers2.map((text, idx)=>{
                                        return <li className='wow fadeInUp' data-wow-delay="0.6s" key={idx}>{text}</li>
                                    })
                                }
                                {/* <li className='wow fadeInUp' data-wow-delay="0.4s">Brandy and wine degustation at the cellar</li>
                                <li className='wow fadeInUp' data-wow-delay="0.8s">Parking</li>
                                <li className='wow fadeInUp' data-wow-delay="1.2s">Laundry service</li>
                                <li className='wow fadeInUp' data-wow-delay="1.6s">Room service and minibar</li> */}
                            </ul>
                        </div>
                        
                        <div className='img-wrapper mob'>
                            <img src={Sec5Img_MOB} alt='about'/>
                        </div>

                        <div className='img-wrapper desktop'>
                            <img src={Sec5Img} alt='about'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}