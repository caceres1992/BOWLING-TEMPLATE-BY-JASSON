import React from 'react'
import Reel from './Reel'

const Reels = ({ instragramreel }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
            <Reel instragramreel={instragramreel} key={1} image="https://www.sanantoniothingstodo.com/wp-content/uploads/2021/08/SantikosEntertainmentbowling.jpeg" />
            <Reel instragramreel={instragramreel} key={2} image="https://bowlbrighton.com/wp-content/uploads/2021/09/BowlingActionShot2.jpg" />
            <Reel instragramreel={instragramreel} key={3} image="https://www.greaterseattleonthecheap.com/wordpress/wp-content/uploads/2021/05/Depositphotos_367473916_l-2015-bowling-ball-and-bowling-shoes.jpg" />
            <Reel instragramreel={instragramreel} key={4} image="https://wavelandbowl.com/wp-content/uploads/sites/22/2018/09/waveland-bowl-chicago-illinois-Google-Search-2018-09-27-19-20-54-1024x652.png" />
            <Reel instragramreel={instragramreel} key={5} image="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/11/Brighton-Bowling-Alley.jpg" />
            <Reel instragramreel={instragramreel} key={6} image="https://arapahoebowl.com/wp-content/uploads/2022/03/button-1.jpg" />
        </div>
    )
}

export default Reels