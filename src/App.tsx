import React from 'react';
import './App.css';


function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png" alt="logo"/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a href={'#1'}>Profile</a>
                </div>
                <div>
                    <a href={'#2'}>Messages</a>
                </div>
                <div>
                    <a href={'#3'}>News</a>
                </div>
                <div>
                    <a href={'#4'}>Music</a>
                </div>
                <div>
                    <a href={'#5'}>Setting</a>
                </div>


            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27oZW3GPaCyGG172TNgXUjfyJxSq-ETp2AA&usqp=CAU"
                        alt="img"/>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="ava"/>
                </div>
                

            </div>
        </div>
    )
}


export default App;
