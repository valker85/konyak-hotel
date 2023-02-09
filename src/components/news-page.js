import React from 'react';
import { NavLink } from 'react-router-dom';

// Components 
import 'animate.css'
import WOW from 'wowjs'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, } from "react-share";

// Images
import InfoCard1 from '../assets/img/home/info-card1.png'
import InfoCard2 from '../assets/img/home/info-card2.png'
import InfoCard3 from '../assets/img/home/info-card3.png'
import InfoCard4 from '../assets/img/home/info-card4.png'

import PostImg from '../assets/img/news-page/post.png'
import PostImg_MOB from '../assets/img/news-page/post_mob.png'





export default class NewsPage extends React.Component{
    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            post:{
                name: 'Borjomi Palace',
                img: '',
                title: 'The Hotel has been awarded 4 stars and has all the necessary equipment to make you feel comfortable.',
                info: [
                    'We are pleased to welcome you to Borjomi Palace.',
                    'Excellent room service and morning wake up call is available for everyone. The Hotel has a broadband access in each room.',
                    'Brojomi Palace cares for its customers and offers a free parking service. Our reception staff is available 24/7 and you will not have to worry about your personal belongings. Each bathroom in our hotel is equiped with the hair drier and a bathrobe.',
                    'In every room you will find a minibar with a wide variety of  carefully chosen bavarages and a safe. Also, in the room you can find a telephone and a TV. You can also book a room with the balcony view.',
                    'Borjomi Palace has a non smoking rooms which you can request in advance. The Hotel offers a wide variety of massage oprtions, sauna and turkish "hamam". We also have a fitness area, where you can keep your exercise regime under control.',
                    'Borjomi Palace offers wide variety of beauty and medical treatmnets. All treatments must be booked in advance. You can also enjoy alcoholic and soft drinks in the bar area.',
                    'Borjomi Palace is looking forward to your stay with us!'
                ]
            },
            other_posts: [
                {src: InfoCard1, date: 'Sep 13, 2019', name:'Borjomi Palace',                        post_url:'event1'},
                {src: InfoCard2, date: 'Sep 13, 2019', name:'Spring Travel in Full Swing',           post_url:'event2'},
                {src: InfoCard3, date: 'Sep 13, 2019', name:'FAUCHON L’Hotel Kyoto Opens In Japan',  post_url:'event3'},
                {src: InfoCard4, date: 'Sep 13, 2019', name:'Hilton Alpharetta Atlanta Hotel Opens', post_url:'event4'}
            ],
            info_seconds: 0,
            // ////////////////////////////////////////////////////////
            lang_en: {
                share: 'Share on'
            },
            lang_ru: {
                share: 'Поделиться'
            },
            lang_am: {
                share: 'Կիսվել'
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
            <div className='news-page'>
                <div className='container160'>
                    <h1 className='wow fadeInUp'>{this.state.post.name}</h1>

                    <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>

                    <div className='img-wrapper mob'>
                        <img src={PostImg_MOB} alt='post'/>
                    </div>

                    <div className='img-wrapper desktop'>
                        <img src={PostImg} alt='post'/>
                    </div>
                
                    <div className='postInfo'>
                        <div className='block'>
                            <h2 className='wow fadeInUp'>{this.state.post.title}</h2>

                            <div className='wow fadeInUp' data-wow-delay="0.5s">
                            {
                                this.state.post.info.map((info, idx)=>{
                                    return(
                                        <p key={idx}>{info}</p>
                                    )
                                })
                            }
                            </div>

                            <div className='share'>
                                <h3>{ this.state[`lang_${this.state.lang}`].share }</h3>
                                <FacebookShareButton url={window.location.href} quote="link" className='fb'>
                                    <FacebookIcon size={32} round/>
                                </FacebookShareButton>

                                <TwitterShareButton url={window.location.href}  quote="link">
                                    <TwitterIcon size={32} round/>
                                </TwitterShareButton>
                            </div>
                        </div>

                        <div className='block'></div>
                    </div>
                
                    <div className='line'></div>

                    <div className='content mob'>
                        <Slider {...settings_mob}>
                        {
                            this.state.other_posts.map((post, idx)=>{
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

                    <div className='content desktop'>
                    {
                        this.state.other_posts.map((post, idx)=>{
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
                    
                </div>
            </div>
        )
    }
}