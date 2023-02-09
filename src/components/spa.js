import React from 'react';

// Components 
import 'animate.css'
import WOW from 'wowjs'


// Images
import GeneralImg from '../assets/img/spa/general-image.png'
import Mini1 from '../assets/img/spa/mini1.png'
import Mini2 from '../assets/img/spa/mini2.png'
import SpaImg from '../assets/img/spa/spa-img.png'


export default class News extends React.Component{
    constructor(props){
        super(props)

        this.state = {

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
    }

    render(){
        return(
            <div className='spa'>
                <div className='container160'>
                    <div className='section1'>
                        <h1 className='wow fadeInUp'>Spa</h1>

                        <div className='img-wrapper'>
                            <img src={GeneralImg} alt='spa'/>
                        </div>
                    </div>
                
                    <div className='section2'>
                        <p className='wow fadeInUp'>There are a great many types of SPA events, and there are both comprehensive programs and SPA procedures only, for example, for hands or for face.</p>
                    
                        <div className='content'>
                            <div className='block'>
                                <h3 className='wow fadeInUp' data-wow-delay="0.5s">Today, the most popular SPA-programs include:</h3>
                                <h2 className='wow fadeInUp' data-wow-delay="1s">SPA-procedures for hair</h2>
                                <p className='wow fadeInUp' data-wow-delay="1.5s">In the “recruitment”, specialists usually refer to such procedures as hot wrapping to give hair elasticity and strength, mineralization - to restore dyed and bleached hair, lamination using various algae extracts , tightening the structure of the hair and making curls smoother. There are other services, including restoration, nutrition, moisturizing, peeling and cleansing of the scalp, masks that stimulate growth, etc.</p>
                            </div>

                            <div className='block'>
                                <div className='img-wrapper'>
                                    <img className='wow fadeInUp' data-wow-delay="0.5s" src={Mini1} alt='mini'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section3'>
                    <div className='content'>
                        <div className='block'>
                            <div className='img-wrapper'>
                                <img src={SpaImg} alt='spa'/>
                            </div>

                            <div className='img-wrapper mini'>
                                <img className='wow fadeInUp' data-wow-delay="0.5s" src={Mini2} alt='mini'/>
                            </div>
                        </div>

                        <div className='block'>
                            <h2 className='wow fadeInUp'>SPA procedures for the face</h2>
                            <p className='wow fadeInUp' data-wow-delay="0.5s">To get rid of traces of fatigue and lack of sleep, remove the first wrinkles, make the skin more elastic - SPA methods for the face “cope” with all these goals. In the salons you will be offered scrubs and peels, vitamin and clay masks, massages and hardware procedures. To consolidate the result, it is worth paying attention to lotions, creams and cosmetics based on marine minerals.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// className='wow fadeInUp' data-wow-delay="0.5s"