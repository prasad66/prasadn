import React from 'react'
import Typewriter from "typewriter-effect";

const Typing = ({ text }) => {

    return (
        <Typewriter
            options={{
                strings: text,
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default Typing
