import React from "react";
import data from "../data";

export default function Background() {

    const [selectedImage, setSelectedImage] = React.useState("./images/eastern-island.jpeg")
    const [unselectedImage, setUnselectedImage] = React.useState("./images/eastern-island.jpeg")
    const [slideNumber, setSlideNumber] = React.useState(1)
    const [addZero, setAddZero] = React.useState(0)
    const [dataIndex, setDataIndex] = React.useState(9)
    const [transitionRunning, setTransitionRunning] = React.useState(false)
    const [progress, setProgress] = React.useState(20)

    function updateMainCard() {
        var child = document.getElementsByClassName("card-1")[0].children
        var child2 = document.getElementsByClassName("card-10")[0].children
        var grandchild = child[0].children
        var grandchild2 = child2[0].children
        var backgroundImage = grandchild[0].src
        var backgroundImage2 = grandchild2[0].src
        setUnselectedImage(() => backgroundImage2)
        setSelectedImage(() => backgroundImage)
        document.getElementsByClassName('background-black')[0].classList.remove("makeBackgroundBlack");
        void document.getElementsByClassName('background-black')[0].offsetWidth;
        document.getElementsByClassName('background-black')[0].classList.add("makeBackgroundBlack");
    }

    function moveCardsForward() {
        document.getElementsByClassName("card-1")[0].classList.replace("card-1", "card-11")
        document.getElementsByClassName("card-2")[0].classList.replace("card-2", "card-1")
        document.getElementsByClassName("card-3")[0].classList.replace("card-3", "card-2")
        document.getElementsByClassName("card-4")[0].classList.replace("card-4", "card-3")
        document.getElementsByClassName("card-5")[0].classList.replace("card-5", "card-4")
        document.getElementsByClassName("card-6")[0].classList.replace("card-6", "card-5")
        document.getElementsByClassName("card-7")[0].classList.replace("card-7", "card-6")
        document.getElementsByClassName("card-8")[0].classList.replace("card-8", "card-7")
        document.getElementsByClassName("card-9")[0].classList.replace("card-9", "card-8")
        document.getElementsByClassName("card-10")[0].classList.replace("card-10", "card-9")
        document.getElementsByClassName("card-11")[0].classList.replace("card-11", "card-10")
    }

    function moveCardsBackward() {
        document.getElementsByClassName("card-1")[0].classList.replace("card-1", "card-2")
        document.getElementsByClassName("card-2")[0].classList.replace("card-2", "card-3")
        document.getElementsByClassName("card-3")[0].classList.replace("card-3", "card-4")
        document.getElementsByClassName("card-4")[0].classList.replace("card-4", "card-5")
        document.getElementsByClassName("card-5")[0].classList.replace("card-5", "card-6")
        document.getElementsByClassName("card-6")[0].classList.replace("card-6", "card-7")
        document.getElementsByClassName("card-7")[0].classList.replace("card-7", "card-8")
        document.getElementsByClassName("card-8")[0].classList.replace("card-8", "card-9")
        document.getElementsByClassName("card-9")[0].classList.replace("card-9", "card-10")
        document.getElementsByClassName("card-10")[0].classList.replace("card-10", "card-11")
        document.getElementsByClassName("card-11")[0].classList.replace("card-11", "card-1")
        console.log("clicked")
    }

    function makeWordsFall() {
        document.getElementsByClassName("card-fake-line")[0].classList.remove("dropWords")
        void document.getElementsByClassName("card-fake-line")[0].offsetWidth
        document.getElementsByClassName("card-fake-line")[0].classList.add("dropWords")
        document.getElementsByClassName("card-fake-subtitle")[0].classList.remove("dropWords")
        void document.getElementsByClassName("card-fake-subtitle")[0].offsetWidth
        document.getElementsByClassName("card-fake-subtitle")[0].classList.add("dropWords")
        document.getElementsByClassName("card-fake-title")[0].classList.remove("dropWords")
        void document.getElementsByClassName("card-fake-title")[0].offsetWidth
        document.getElementsByClassName("card-fake-title")[0].classList.add("dropWords")
        document.getElementsByClassName("card-fake")[0].classList.remove("makeCardBackground")
        void document.getElementsByClassName("card-fake")[0].offsetWidth
        document.getElementsByClassName("card-fake")[0].classList.add("makeCardBackground")
    }

    function popMainText() {
        document.getElementsByClassName('card-selected-line')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-selected-line')[0].offsetWidth;
        document.getElementsByClassName('card-selected-line')[0].classList.add("moveTextUp");
        document.getElementsByClassName('card-selected-subtitle')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-selected-subtitle')[0].offsetWidth;
        document.getElementsByClassName('card-selected-subtitle')[0].classList.add("moveTextUp");
        document.getElementsByClassName('card-selected-title')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-selected-title')[0].offsetWidth;
        document.getElementsByClassName('card-selected-title')[0].classList.add("moveTextUp");
        document.getElementsByClassName('card-selected-title2')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-selected-title2')[0].offsetWidth;
        document.getElementsByClassName('card-selected-title2')[0].classList.add("moveTextUp");
        document.getElementsByClassName('card-description')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-description')[0].offsetWidth;
        document.getElementsByClassName('card-description')[0].classList.add("moveTextUp");
        document.getElementsByClassName('card-map-border')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-map-border')[0].offsetWidth;
        document.getElementsByClassName('card-map-border')[0].classList.add("moveTextUp");
        document.getElementsByClassName('card-bookmark')[0].classList.remove("moveTextUp");
        void document.getElementsByClassName('card-bookmark')[0].offsetWidth;
        document.getElementsByClassName('card-bookmark')[0].classList.add("moveTextUp");
    }

    function updateSlideNumber() {
        setSlideNumber((num) => {
            if (num < 10) {
                num = num + 1
            } else {
                num = 1
            }
            return num
        })
        setAddZero(() => slideNumber === 9 ? undefined : 0)
    }

    function timer() {
        document.getElementsByClassName('timer')[0].classList.remove("timerAnimation");
        void document.getElementsByClassName('timer')[0].offsetWidth;
        document.getElementsByClassName('timer')[0].classList.add("timerAnimation");
    }

    function changeMainInfo() {
        setTimeout(() => {
            setDataIndex((item) => {
                if (item < 9) {
                    item = item + 1
                } else {
                    item = 0
                }
                return item
            })
          }, "1300")
    }

    function updateProgressBar() {
        setProgress(num => {
            if (num <= 90) {
                num = num + 10
            } else {
                num = 10
            }
            return num
        })
        document.getElementsByClassName("progress-bar-current")[0].style.width = `${progress}%`
    }

    function clickHandler() {
        if(transitionRunning === false) {
            setTransitionRunning(true)
            updateMainCard()
            moveCardsForward()
            makeWordsFall()
            popMainText()
            updateSlideNumber()
            timer()
            changeMainInfo()
            updateProgressBar()
            setTimeout(() => {
                setTransitionRunning(false)
              }, "2300")
        }
    }

    return (
        <div className="background">
            <div className="timer"></div>
            <div className="background-black" />
            <img src={unselectedImage} className="background-img" />
            <span className="card-selected-line-container">
                <span className="card-selected-line">_</span>
            </span>
            <span className="card-selected-subtitle-container">
                <span className="card-selected-subtitle">{data[dataIndex].subtitle}</span>
            </span>
            <span className="card-selected-title-container">
                <span className="card-selected-title">{data[dataIndex].title}</span>
            </span>
            <span className="card-selected-title2-container">
                <span className="card-selected-title2">{data[dataIndex].title2}</span>
            </span>
            <span className="card-description-container">
                <span className="card-description">{data[dataIndex].description}</span>
            </span>
            <a className="card-map-container" href={data[dataIndex].maps} target="_blank" rel="noreferrer">
                <img src="./images/bookmark.png" className="card-bookmark" />
                <div className="card-map-border">
                    <div className="card-map">Discover Location</div>
                </div>
            </a>
            <div className="card-fake">
                <div className="card-fake-container">
                    <img className="card-fake-img" src={selectedImage}></img>
                    <span className="card-fake-title">Solaire of<br />Astora</span>
                    <span className="card-fake-subtitle">Dark Souls</span>
                    <span className="card-fake-line">_</span>
                </div>
            </div>
            <img src="./images/next-button.png" className="next-button" onClick={() => { clickHandler()}} />
            {/* <img src="./images/next-button.png" className="previous-button" onClick={moveCardsBackward} /> */}
            <div className="progress-bar">
                <div className="progress-bar-container">
                    <div className="progress-bar-current" />
                </div>
            </div>
            <div className="slide-number">{addZero}{slideNumber}</div>
        </div>
    )
}