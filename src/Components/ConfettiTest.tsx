import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles: any = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
}

export default class ConfettiTest extends React.Component<any, any>{
    private animationInstance: any;
    constructor(props: any) {
        super(props);
        this.animationInstance = null;
    }

    makeShot= (particleRatio: any, opts: any) =>{
        this.animationInstance && this.animationInstance({
            ...opts,
            origin: {y : 0.7},
            particleCount: Math.floor(200* particleRatio)
        })
    }

    fire = () =>{
        this.makeShot(0.25,{
            spread: 26,
            startVelocity: 55
        })
    }

    handlerFire = () =>{
        this.fire()
    }

    getInstance = (instance: any) =>{
        this.animationInstance = instance
    }

    render() {
        return(
            <div style={{display:'flex', alignSelf:'center', height: '100vh', justifyContent:'center'}}>
            <button onClick={this.handlerFire}>
                Fire
            </button>
                <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles}/>
            </div>
        )
    }
}
