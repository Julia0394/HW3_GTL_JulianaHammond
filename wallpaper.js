import React from 'react'
import './sample-wallpaper.css'

function Wallpaper(props) {
    return (
        <article class = "wallpaper">
        <img src = {props.pic} alt = "Wallpaper #1"></img>
        </article>
    )
}

export default Wallpaper;
