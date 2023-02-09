import Home from './components/home.js'
import Rooms from './components/rooms.js'
import RoomPage from './components/room-page.js'
import Restaurant from './components/restaurant.js'
import News from './components/news.js'
import NewsPage from './components/news-page.js'
// import Spa from './components/spa'
import About from './components/about.js'
import ContactUs from './components/contact-us.js'
import Booking from './components/booking.js'


const routes = [
    {
        path: '/:lang',
        component: Home,
        exact: true
    },
    {
        path: '/:lang/rooms',
        component: Rooms,
        exact: true
    },
    {
        path: '/:lang/rooms/:room',
        component: RoomPage,
        exact: true
    },
    {
        path: '/:lang/restaurant',
        component: Restaurant,
        exact: false
    },
    {
        path: '/:lang/events',
        component: News,
        exact: true
    },
    {
        path: '/:lang/events/:event',
        component: NewsPage,
        exact: true
    },
    {
        path: '/:lang/about',
        component: About,
        exact: false
    },
    {
        path: '/:lang/contact-us',
        component: ContactUs,
        exact: false
    },
    {
        path: '/:lang/booking',
        component: Booking,
        exact: false
    }
    // {
    //     path: '/spa',
    //     component: Spa,
    //     exact: false
    // },
]

export default routes