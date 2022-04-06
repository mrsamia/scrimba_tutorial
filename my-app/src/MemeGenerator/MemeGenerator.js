import React from 'react';
import Header from './Header';
import Form from './Form';
import memesData from "./memesData";

function MemeGenerator(props) {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    return (
        <div>
            <Header />
            <Form />
            <div>
                <button className='bttn' onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className='pt-5'>
                <img src={meme.randomImage} width="920px" />
            </div>
        </div>
    );
}

export default MemeGenerator;