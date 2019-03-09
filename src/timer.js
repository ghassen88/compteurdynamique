import React from "react";








class Timer extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      secondes: 0,
      minutes: 0,
      hours: 0,
      isOn: false,
     
    
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  
  startTimer() {
    this.setState({
      isOn: true,
      secondes: (this.state.secondes),
      minutes: (this.state.minutes),
     hours: (this.state.hours),




    })
 
    this.timer = setInterval(() =>{if(this.state.secondes <5)
      {this.setState(()=>{
      return {secondes: this.state.secondes + 1};
      
    
    })} 
    else if(this.state.secondes ===5){
    this.setState(()=>{
    return {minutes: this.state.minutes + 1 ,secondes:this.state.secondes=0};
    
  
  })}
  if(this.state.minutes ===5){
    this.setState(()=>{
    return {hours: this.state.hours + 1 ,minutes:this.state.hours=0};
    
  
  })}
  
  
  }, 1000);
    
  
  
  
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({secondes: 0,minutes:0,hours:0, isOn: false})
  }
  render() {
    
     
    
    return(
      <div>
        <div class="card text-center">
  <div class="card-header">
  Timer
  </div>
  <div class="card-body">
    <h5 class="card-title">Time of tunisia</h5>
    <p class="card-text">{this.state.hours}: {this.state.minutes}:{this.state.secondes}</p>
  
  </div>
  <div class="card-footer text-muted">
   
  </div>
</div>






        
        <h3>timer:{this.state.hours}: {this.state.minutes}:{this.state.secondes}</h3>
        <button onClick={this.startTimer}>start</button> 
        <button onClick={this.stopTimer}>stop</button> 
        <button onClick={this.resetTimer}>reset</button> 
      </div>
    )
  }
}
export default Timer;