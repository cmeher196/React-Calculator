import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    
    constructor(props){
        super(props);
        this.inputDot=this.inputDot.bind(this);
        this.clearDisplay=this.clearDisplay.bind(this);
        this.showPercent=this.showPercent.bind(this);
        this.changeSign=this.changeSign.bind(this);
        this.showSin = this.showSin.bind(this);
        this.showCos = this.showCos.bind(this);
        this.showTan = this .showTan.bind(this);
        this.showLog = this.showLog.bind(this);
        this.showFac = this.showFac.bind(this);
        this.eValue = this.eValue.bind(this);
        this.piValue = this.piValue.bind(this);
        this.showSqa = this.showSqa.bind(this);
        this.showAbs = this.showAbs.bind(this);
        this.showLn = this.showLn.bind(this);
        this.showLast = this .showLast.bind(this);

        
    }

    state = {
		displayValue: '0',
		waitingForOperator: false ,
		operator: null,
		value: null
	}




 clearDisplay(){
	this.setState({
		displayValue:'0'
	})
 }

 showLast(digit)
 {
	const { displayValue ,waitingForOperator}=this.state
         var previous ;
         if(waitingForOperator)
	{   
		this.setState({
			previous : displayValue ,
			waitingForOperator: false
		})
	}else
		{
		this.setState({
			previous : displayValue ,
			
		})
	}
   this.setState({
   	  displayValue : previous ,
   	})
		
 }
	  


 

 inputDigit(digit)
 {
	const { displayValue ,waitingForOperator}=this.state
    
	if(waitingForOperator)
	{   
		this.setState({
			displayValue : String(digit),
			waitingForOperator: false
		})
	}else
		{
		this.setState({
			
			displayValue : displayValue == '0' ? String(digit) : displayValue+digit
		})
	}
 }

 inputDot(){
	const { displayValue , waitingForOperator}=this.state
	if(waitingForOperator)
	{
		this.setState({
			displayValue: '.',
			waitingForOperator: false
		})
	}

	else if (displayValue.indexOf('.')== -1)
	{
		this.setState({
			displayValue : displayValue + '.'
		})	
	}
  	
 }
 changeSign(){
	const {displayValue}=this.state
	this.setState({
		displayValue : displayValue.substr(0,1)== '-' ? displayValue.substr(1) : '-'+displayValue
	})
 }
 showAbs(){
 	const {displayValue}=this.state
 	this.setState({
		displayValue : displayValue.substr(0,1)== '-' ? displayValue.substr(1) : displayValue
	})

 }

 showSqa(){
 	const {displayValue}=this.state
 	this.setState({
		displayValue : displayValue * displayValue
	})

 }

 showPercent()
 {
	const{displayValue}=this.state
	const value = parseFloat(displayValue)
	this.setState({
		displayValue : value/100
	})
 }
 
 
 showSin()
{
	const{displayValue}= this.state
	const value = parseFloat(displayValue)
	 var n = (value/180)*Math.PI ;
		this.setState({
		displayValue : (n  - (Math.pow(n,3))/6 + (Math.pow(n,5))/120  - (Math.pow(n,7))/5040).toPrecision(3),
	})
}
 showCos()
 {
	const{displayValue}= this.state
	const value = parseFloat(displayValue)
	 var n = (value/180)*Math.PI;
	 
	 this.setState({
		displayValue : (1 - (Math.pow(n,2)/2) + (Math.pow(n,4)/24) - (Math.pow(n,6)/720 )).toPrecision(3),
 	})
 }
 showTan()
 {
	const{displayValue}= this.state
	const value = parseFloat(displayValue)
	 var n = (value/180)*Math.PI;
	 
	 this.setState({
		displayValue : (n + Math.pow(n,3)/3  + (2*Math.pow(n,5))/15 + (17*Math.pow(n,7))/315 ).toPrecision(3),
	})
 }

	
 
 showFac(){
 	const{displayValue}=this.state
 	const value = parseFloat(displayValue)
 		function computeFactorialOfN(n) {
  			var output=1;
  				for(var i=1; i<=n; i++){
    				output*=i;
  				} return output;
		}
		this.setState({
 		displayValue :computeFactorialOfN(value) ,
 	})

 }

showLn(){

	const{displayValue}=this.state
	const value = parseFloat(displayValue)
	this.setState({
		displayValue : (Math.log(value)).toPrecision(3), 
	})
}
showLog(){
	const{displayValue} = this.state
	const value = parseFloat(displayValue)
	this.setState({
		displayValue : (Math.log(value)/Math.log(10)).toPrecision(3), 
	})

}
 
 eValue(){
	const{displayValue}= this.state
	this.setState({
	displayValue : 2.718281,
    })

 }

 piValue(){
	const{displayValue}= this.state
	this.setState({
	displayValue : Math.PI ,
 })
 }

 performOperation(nextoperator)
 {
	const { displayValue ,operator,value}= this.state
	const nextValue = parseFloat(displayValue)
	const operations = {
		'+':(prevValue,nextValue) => prevValue+nextValue,
		'-':(prevValue,nextValue) => prevValue-nextValue,
		'*':(prevValue,nextValue) => prevValue*nextValue,
		'/':(prevValue,nextValue) => prevValue/nextValue,
		'=':(prevValue,nextValue) => nextValue,
    	'^' : (prevValue,nextValue) => Math.pow(prevValue,nextValue),
    	
	}
	
	//const operatedValue = operations[operator](prevValue,nextValue)
	if(value==null)
	{
		this.setState({
			value:nextValue
		})
	}
    else if(operator)
	{
        
		const currentValue = value || 0
		const newValue = operations[operator](currentValue,nextValue)

		this.setState({
			value:newValue,
			displayValue:String(newValue)
		})
	}
	this.setState({
		waitingForOperator : true,
		operator:nextoperator,

	})
 }

    
  render() {
      
      const{displayValue}=this.state
      
      var butn={
        backgroundColor:"#707070",
        color : "#000"
     };
     var butn1 = {
        backgroundColor:"#707070",
     };
     var butn2 = {
         backgroundColor : "#FFA500"
     };
     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Calculator</h1>
        </header>
        <center>
		<div className="layout">
			<div className="display">
                <input type="text" id="text" value={this.state.displayValue} />
			</div>
			<div className="numpad">
				<table cellspacing="10" cellpadding="5">
				<tr>
					
					<td><button style={butn} onClick = {this.showPercent}>%</button></td>
					<td><button style={butn} onClick={this.changeSign}>+/-</button></td>
					<td><button style= {butn} onClick={()=>this.performOperation('/')}>/</button></td>
					<td><button style={butn2} onClick ={this.clearDisplay}>AC</button></td>
				</tr>
				<tr>
				     <td> <button style = {butn} onClick = {this.showSqa}> sq </button></td>
				     <td> <button style = {butn} onClick = {this.showAbs}> |x| </button></td>
				     <td> <button style = {butn} onClick = {this.showLog}> log</button></td>
				     <td> <button style = {butn} onClick = {this.showLast}>C</button></td>
				</tr>
				<tr>
				    <td><button style={butn} onClick = {this.showSin}>sin</button></td>
				    <td><button style={butn} onClick = {this.showCos}>cos</button></td>
				    <td><button style={butn} onClick = {this.showTan}>tan</button></td>
				    <td><button style={butn} onClick = {this.showLn}>ln</button></td>
				</tr>
				<tr>
				    <td><button style={butn} onClick = {this.eValue }>e</button></td>
				    <td><button style={butn} onClick = {this.piValue}>pi</button></td>
				    <td><button style={butn} onClick = {this.showFac}>!</button></td>
				    <td><button style={butn} onClick = {() =>this.performOperation('^')}>^</button></td>
				</tr>
				<tr>
					<td><button style={butn1} onClick={()=>this.inputDigit(7)}>7</button></td>
					<td><button style={butn1} onClick={()=>this.inputDigit(8)}>8</button></td>
					<td><button style={butn1} onClick={()=>this.inputDigit(9)}>9</button></td>
					<td><button style={{backgroundColor : "#FFA500"}} onClick={()=>this.performOperation('*')}>x</button></td>
				</tr>
				<tr>
					<td><button style={butn1} onClick={()=> this.inputDigit(4)}>4</button></td>
					<td><button style={butn1} onClick={() => this.inputDigit(5)}>5</button></td>
					<td><button style={butn1} onClick={()=> this.inputDigit(6)}>6</button></td>
					<td><button style={{backgroundColor : "#FFA500"}} onClick={() => this.performOperation('-')}>-</button></td>
				</tr>
				<tr>
					<td><button style={butn1} onClick={()=> this.inputDigit(3)}>3</button></td>
					<td><button style={butn1} onClick={()=> this.inputDigit(2)}>2</button></td>
					<td><button style={butn1} onClick={()=> this.inputDigit(1)}>1</button></td>
					<td><button style={{backgroundColor : "#FFA500"}} onClick={() =>this.performOperation('+')}>+</button></td>
				</tr>
				<tr>
					<td><button style={{backgroundColor: "grey" ,width : "50"}} onClick={() => this.inputDigit(0)}>0</button></td>
					<td><button style={butn1} onClick={this.inputDot}>.</button></td>
					<td><button onClick={() =>this.performOperation('=')}>=</button></td>
					
				</tr>
				</table>
			</div>
		</div>
	 </center>

      </div>
     );
    }
}

export default App;

 

		



