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

class Game extends React.Component {
  constructor(props){
      super(props);
      this.state={currentGameWindow:'Menu', mainGameImage:spoczynek_png, Score:0, currentKwiatyLotosu:0, isPressed:false, isGameActive:true};
      this.kwiatyLotosu = [kwiatyLotosu0,kwiatyLotosu1,kwiatyLotosu2,kwiatyLotosu3,kwiatyLotosu4,kwiatyLotosu5,kwiatyLotosu6];
  }

    StartGame = () =>{
        this.playAudio(gamingSound);
        let timeleft = 30;
        const myInterval = timeleft/6;
        const Timer = () => {
            timeleft = timeleft - myInterval;
                switch(true){
                    case timeleft >= 5*myInterval:
                        this.setState({currentKwiatyLotosu:1});
                        break;
                    case timeleft >= 3.99*myInterval:
                        this.setState({currentKwiatyLotosu:2});
                        break;
                    case timeleft >= 3*myInterval:
                        this.setState({currentKwiatyLotosu:3});
                        break;
                    case timeleft >= 1.99*myInterval:
                        this.setState({currentKwiatyLotosu:4});
                        break;
                    case timeleft >= 0.99*myInterval:
                        this.setState({currentKwiatyLotosu:5});
                        break;
                    case timeleft <= myInterval:
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
            }
        }else if(event.type === "keyup" && event.keyCode === 32 && this.state.isGameActive===true) {
            this.setState({isPressed:false,mainGameImage:spoczynek_png});
            document.removeEventListener("keyup", this.handleSpaceBarClick)
        }
    }

    handleClickFireButton = (event) =>{
        if(event.type === "mousedown" && this.state.isGameActive===true){
            this.setState({Score: this.state.Score + 100, mainGameImage: atak_png});
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
    }

    playAudio = (audio) =>{
        let sound = new Audio(audio);
        sound.play()
        .catch(err =>{
            console.log("DLACZEGO NIE RYPIECIE");
        });
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleSpaceBarClick)
        //this.playAudio(introSound);
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
                <img alt='głowny ekran gry' src={this.state.mainGameImage}/>
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
                <img alt='głowny ekran gry' src={this.state.mainGameImage} style={{opacity: 0}} />
            <GameOver Score={this.state.Score} restartGame={this.restartGame} playAudio={this.playAudio} />
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
