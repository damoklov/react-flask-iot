import './App.css';
import React, {Component} from 'react';

class Home extends Component {

  render() {
    return (
        <>
        <div className="intro__wrapper">
            <img className="intro__wrapper__image"
                 src="https://www.nme.com/wp-content/uploads/2020/08/Xbox-Store-1.jpg"
                 alt="store"/>
            <div className="intro__text">
                <h1 className="intro__wrapper__title">
                Best store for gamers.
                </h1>
                <p className="intro__wrapper__subtitle">
                    Our store was rated as the best store in all
                    unreal rating systems.
                </p>
            </div>
        </div>
        <div className="intro__items">
            <div className="intro__feature">
                <img className="intro__feature__image"
                 src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/star-icon.png"
                 alt="star"/>
            <div className="intro__feature__text">
                <h1 className="intro__feature__title">
                Best prices
                </h1>
                <p className="intro__feature__subtitle">
                    We research market and pick most relative prices
                    for our products.
                </p>
            </div>
            </div>
            <div className="intro__feature">
                <img className="intro__feature__image"
                 src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/star-icon.png"
                 alt="star"/>
            <div className="intro__feature__text">
                <h1 className="intro__feature__title">
                Best quality
                </h1>
                <p className="intro__feature__subtitle">
                    We value our customers and sell only top quality products.
                </p>
            </div>
            </div>
            <div className="intro__feature">
                <img className="intro__feature__image"
                 src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/star-icon.png"
                 alt="star"/>
            <div className="intro__feature__text">
                <h1 className="intro__feature__title">
                Best clients
                </h1>
                <p className="intro__feature__subtitle">
                    Our customers love us and spend one hour in average
                    in our store.
                </p>
            </div>
            </div>
        </div>
        </>
    )
  }
}

export default Home;