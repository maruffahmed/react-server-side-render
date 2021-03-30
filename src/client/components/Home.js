import React from 'react';

function Home(){
    return (
        <div>
            <h1>Welcome to the very first React SSR</h1>
            <button onClick={() => console.log("You clicked me")}>Click me</button>
            <br/>
            <button onClick={() => console.log("you clicked to the second button")}>Click me 2</button>
        </div>
    )
}

export default Home;