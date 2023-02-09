import React from 'react';
import { NavLink } from 'react-router-dom';


// Components 
import 'animate.css'
import WOW from 'wowjs'


// Images
import GeneralImg from '../assets/img/news/general_img.png'

import InfoCard1 from '../assets/img/home/info-card1.png'
import InfoCard2 from '../assets/img/home/info-card2.png'
import InfoCard3 from '../assets/img/home/info-card3.png'
import InfoCard4 from '../assets/img/home/info-card4.png'

import GeneralImg_MOB from '../assets/img/news/general_img_mob.png'



export default class News extends React.Component{
    constructor(props){
        super(props)

        this.myStorage = window.localStorage

        this.state = {
            posts: [
                {src: InfoCard1, date: 'Sep 13, 2019', name:'Borjomi Palace',                        post_url: 'event1'},
                {src: InfoCard2, date: 'Sep 13, 2019', name:'Spring Travel in Full Swing',           post_url: 'event2'},
                {src: InfoCard3, date: 'Sep 13, 2019', name:'FAUCHON L’Hotel Kyoto Opens In Japan',  post_url: 'event3'},
                {src: InfoCard4, date: 'Sep 13, 2019', name:'Hilton Alpharetta Atlanta Hotel Opens', post_url: 'event4'}
            ],
            more:0,
            event_url: 'event5',
            lang: 'am',
            // /////////////////////////////// languages
            lang_en: {
                events: 'Events',
                more: 'More'
            },
            lang_ru: {
                events: 'Мероприятия',
                more: 'Еще'
            },
            lang_am: {
                events: 'Միջոցառումներ',
                more: 'Ավելին'
            }
        }
        
    }

    more_fun = () =>{
        let posts = this.state.posts

        let new_posts = [
            {src: InfoCard1, date: 'Sep 13, 2019', name:'Borjomi Palace', post_url:'event1'},
            {src: InfoCard2, date: 'Sep 13, 2019', name:'Spring Travel in Full Swing', post_url:'event2'},
            {src: InfoCard3, date: 'Sep 13, 2019', name:'FAUCHON L’Hotel Kyoto Opens In Japan', post_url:'event3'},
            {src: InfoCard4, date: 'Sep 13, 2019', name:'Hilton Alpharetta Atlanta Hotel Opens', post_url:'event4'}
        ]

        let update_posts = posts.concat(new_posts)

        this.setState({
            posts: update_posts
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
            <div className='news'>
                <div className='container160'>
                    <div className='section1'>
                        <h1 className='wow fadeInUp'>{ this.state[`lang_${this.state.lang}`].events }</h1>

                        <span className='wow fadeInUp mini-line' data-wow-delay="0s"></span>
                        
                        <div className='img-wrapper mob'>
                            <img src={GeneralImg_MOB} alt='news'/>
                        </div>

                        <div className='img-wrapper desktop'>
                            <img src={GeneralImg} alt='news'/>
                        </div>
                        
                        <div className='info'>
                            <div className='block'>
                                <h4 className='wow fadeInUp'>Sep 13, 2019</h4>
                                <h3 className='wow fadeInUp' data-wow-delay="0.5s">Quarantine meals: The 2020 food trend no-one predicted</h3>

                                <p className='wow fadeInUp' data-wow-delay="0.8s">Seacuterie, anyone? Monk fruit syrup reductions, or CBD-infused macaroni? Indeed, the only trend that made it from this list of "foods to watch" compiled by our colleagues late last year is the alternative flours - but that is only because the supermarket shelves were stripped of the regular kind.</p>

                                <NavLink to={`/${JSON.parse(this.myStorage.getItem('lang'))}/events/${this.state.event_url}`}>Read more</NavLink>
                            </div>

                            <div className='block'></div>
                        </div>
                    </div>

                    <div className='section2'>
                        <div className='content'>
                        {
                            this.state.posts.map((post, idx)=>{
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

                        <div className='more-wrapper'>
                            <p className='more' onClick={this.more_fun}>{ this.state[`lang_${this.state.lang}`].more }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}