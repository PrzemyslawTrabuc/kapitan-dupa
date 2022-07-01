import React from 'react';
import './Game.scss';
import MainMenu from './MainMenu'
import spoczynek_png from '../images/spoczynek.png';
import atak_png from '../images/atak.png';
import kwiatyLotosu0 from '../images/kwiatyLotosu0.png'
import kwiatyLotosu1 from '../images/kwiatyLotosu1.png'
import kwiatyLotosu2 from '../images/kwiatyLotosu2.png'
import kwiatyLotosu3 from '../images/kwiatyLotosu3.png'
import kwiatyLotosu4 from '../images/kwiatyLotosu4.png'
import kwiatyLotosu5 from '../images/kwiatyLotosu5.png'
import kwiatyLotosu6 from '../images/kwiatyLotosu6.png'
import GameBar from './GameBar';
import GameOver from './GameOver';
import introSound from '../sounds/intro.mp3';
import gamingSound from '../sounds/during-game.mp3';
import {ClicksContext} from "../contexts/ClicksContext";



class Game extends React.Component {
  constructor(props){
      super(props);
      this.state={currentGameWindow:'Menu', mainGameImage:spoczynek_png, Score:0, currentKwiatyLotosu:0, isPressed:false, isGameActive:true};
      this.kwiatyLotosu = [kwiatyLotosu0,kwiatyLotosu1,kwiatyLotosu2,kwiatyLotosu3,kwiatyLotosu4,kwiatyLotosu5,kwiatyLotosu6];
      this.sound = new Audio(introSound);
      this.numberOfClicks = 0;
  }

    StartGame = () =>{
        this.numberOfClicks = 0;
        this.setState({Score:0, currentKwiatyLotosu:0})
        this.playAudio(gamingSound);
        let timeLeft = 30;
        const myInterval = timeLeft/6;
        const Timer = () => {
            timeLeft = timeLeft - myInterval;
                // eslint-disable-next-line default-case
                switch(true){
                    case timeLeft >= 5*myInterval:
                        this.setState({currentKwiatyLotosu:1});
                        break;
                    case timeLeft >= 3.99*myInterval:
                        this.setState({currentKwiatyLotosu:2});
                        break;
                    case timeLeft >= 3*myInterval:
                        this.setState({currentKwiatyLotosu:3});
                        break;
                    case timeLeft >= 1.99*myInterval:
                        this.setState({currentKwiatyLotosu:4});
                        break;
                    case timeLeft >= 0.99*myInterval:
                        this.setState({currentKwiatyLotosu:5});
                        break;
                    case timeLeft <= myInterval:
                        clearInterval(interv);
                        this.setState({currentKwiatyLotosu:6,isGameActive:false});
                        setTimeout(() => this.setState({currentGameWindow:"GameOver"}), 3000);
                        break;
                }
        }
        let interv = setInterval(Timer, myInterval*1000);

    }

    handleSpaceBarClick = (event) =>{
        if(event.keyCode === 32 && event.type === "keydown" && this.state.isGameActive===true){
            if(this.state.isPressed===false) {
                document.addEventListener("keyup", this.handleSpaceBarClick)
                this.setState({isPressed:true, Score:this.state.Score+100, mainGameImage:atak_png})
                this.numberOfClicks++;
            }
        }else if(event.type === "keyup" && event.keyCode === 32 && this.state.isGameActive===true) {
            this.setState({isPressed:false,mainGameImage:spoczynek_png});
            document.removeEventListener("keyup", this.handleSpaceBarClick)
        }
    }

    handleClickFireButton = (event) =>{
        if(event.type === "mousedown" && this.state.isGameActive===true){
            this.setState({Score: this.state.Score + 100, mainGameImage: atak_png});
            this.numberOfClicks++;
        }else if(event.type === "mouseup" && this.state.isGameActive===true) {
            this.setState({mainGameImage:spoczynek_png});

        }else if(event.type==="touchstart" && this.state.isGameActive===true){
            this.setState({mainGameImage: atak_png});
        }
    }

    changeGameWindow = (windowToSet) => {
        this.setState({currentGameWindow: windowToSet});
    }

    restartGame = () =>{
        this.setState({currentGameWindow:'Menu', mainGameImage:spoczynek_png, Score:0, currentKwiatyLotosu:0, isPressed:false, isGameActive:true});
        this.numberOfClicks=0;
    }

    playAudio = (sound) => {
        this.sound.pause();
        this.sound = new Audio(sound);
        this.sound.play()
            .catch(() => {
                console.log("PAMIĘTAJCIE LUFĄ!, NIE KOLBĄ!");
            });
    }

    // uploadPlayerHighscore = async()=>{
    //     //  const response = firestore_data.post('',{
    //     //    "fields": {
    //     //         "Name":{
    //     //             stringValue: "test"
    //     //        },
    //     //         "Score":{
    //     //          integerValue: 9000000
    //     //     }
    //     //      }
    //     //  })
    // //     console.log(response);
    //     const response = await setDoc(doc(db,"test",'dupa'),{
    //     //const response = await addDoc(collection(db,"test"),{
    //          Name: 'test',
    //          Score: 69
    //     })
    //     console.log(response)
    // }

    componentDidMount() {
        document.addEventListener("keydown", this.handleSpaceBarClick)
        this.playAudio(introSound);
        //this.uploadPlayerHighscore();
    }

    render(){
    if(this.state.currentGameWindow === "Game" && this.state.isGameActive===true){
        return (
            <div id={"main_game_window"}>
                <img alt='głowny ekran gry' src={this.state.mainGameImage} />
                <GameBar
                    handleClickFireButton={this.handleClickFireButton}
                    Score={this.state.Score}
                    currentKwiatyLotosu={this.kwiatyLotosu[this.state.currentKwiatyLotosu]}
                    handleSpaceBarClick={this.handleSpaceBarClick}
                />
            </div>
        );
    }else if(this.state.currentGameWindow === "Game" && this.state.isGameActive===false){
        return (
            <div id={"main_game_window"}>
                <div id="game-over-alert">GAME OVER</div>
                <img alt='głowny ekran gry' className='darken' src={this.state.mainGameImage}/>
                <GameBar
                    handleClickFireButton={this.handleClickFireButton}
                    Score={this.state.Score}
                    currentKwiatyLotosu={this.kwiatyLotosu[this.state.currentKwiatyLotosu]}
                    handleSpaceBarClick={this.handleSpaceBarClick}
                />
            </div>
        );
    }
    else if(this.state.currentGameWindow === "GameOver" && this.state.isGameActive===false){
        return(
            <div id={"main_game_window"}>
                <img alt='główny ekran gry' src={this.state.mainGameImage} style={{opacity: 0}} />
                <ClicksContext.Provider value={this.numberOfClicks - 2137}>
            <GameOver Score={this.state.Score} restartGame={this.restartGame} playAudio={this.playAudio} />
                </ClicksContext.Provider>
            <GameBar
            handleClickFireButton={this.handleClickFireButton}
            Score={this.state.Score}
            currentKwiatyLotosu={this.kwiatyLotosu[this.state.currentKwiatyLotosu]}
            handleSpaceBarClick={this.handleSpaceBarClick}
            />

            </div>

        )
    }
    else{
        return (
            <MainMenu changeGameWindow={this.changeGameWindow} StartGame={this.StartGame} playAudio={this.playAudio} />
        );
    }

}
}

export default Game;
