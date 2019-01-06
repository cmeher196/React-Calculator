import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


class Calculator extends React.Component{
	state = {
		displayValue: '0',
		waitingForOperator: false ,
		operator: null,
		value: null
	}
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

 Absolute(){
 	const {displayValue}=this.state
 	this.setState({
		displayValue : displayValue.substr(0,1)== '-' ? displayValue.substr(1) : displayValue
	})

 }
Square(){
 	const {displayValue}=this.state
 	this.setState({
		displayValue : displayValue * displayValue
	})

 }
clearDisplay(){
	this.setState({
		displayValue='0'
	})
}
inputDigit(digit)
{
	const { displayValue ,waitingForOperator}=this.state

	if(waitingForOperator)
	{
		this.setState({
			displayValue = String(digit),
			waitingForOperator: false
		})
	}else
		{
		this.setState({
			displayValue = displayValue == '0' ? String(digit) : displayValue+digit
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
			displayValue = displayValue + '.'
		})	
	}
	
}
changeSign(){
	const {displayValue}=this.state
	this.setState({
		displayValue=displayValue.substr(0,1)== '-' ? displayValue.substr(1) : '-'+displayValue
	})
}
Percent()
{
	const{displayValue}=this.state
	const value = parseFloat(displayValue)
	this.setState({
		displayValue=displayValue(value/100)
	})
}
Sin()
{
	const{displayValue}= this.state
	const value = parseFloat(displayValue)
	 var n = (value/180)*Math.PI ;
		this.setState({
		displayValue : (n  - (Math.pow(n,3))/6 + (Math.pow(n,5))/120  - (Math.pow(n,7))/5040).toPrecision(3),
	})
}
Cos()
 {
	const{displayValue}= this.state
	const value = parseFloat(displayValue)
	 var n = (value/180)*Math.PI;
	 
	 this.setState({
		displayValue : (1 - (Math.pow(n,2)/2) + (Math.pow(n,4)/24) - (Math.pow(n,6)/720 )).toPrecision(3),
 	})
 }
Tan()
 {
	const{displayValue}= this.state
	const value = parseFloat(displayValue)
	 var n = (value/180)*Math.PI;
	 
	 this.setState({
		displayValue : (n + Math.pow(n,3)/3  + (2*Math.pow(n,5))/15 + (17*Math.pow(n,7))/315 ).toPrecision(3),
	})
 }
 	
 
Fac(){
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
Ln(){

	const{displayValue}=this.state
	const value = parseFloat(displayValue)
	this.setState({
		displayValue : (Math.log(value)).toPrecision(3), 
	})
}
Log(){
	const{displayValue} = this.state
	const value = parseFloat(displayValue)
	this.setState({
		displayValue : (Math.log(value)/Math.log(10)).toPrecision(3), 
	})

}
 squareRoot(){
	 const {displayValue}=this.state
	 this.setState({
		displayValue : Math.Sqrt(displayValue)
	})
 }
 
 e(){
	const{displayValue}= this.state
	this.setState({
	displayValue : 2.718281,
    })

 }

 pi(){
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
		'+':(prevValue,nextValue) ==> prevValue+nextValue,
		'-':(prevValue,nextValue) ==> prevValue-nextValue,
		'*':(prevValue,nextValue) ==> prevValue*nextValue,
		'/':(prevValue,nextValue) ==> prevValue/nextValue,
		'=':(prevValue,nextValue) ==> nextValue,
		'^' : (prevValue,nextValue) => Math.pow(prevValue,nextValue),

	}
	
	//const operatedValue = operations[operator](prevValue,nextValue)
	if(value=null)
	{
		this.setState({
			value:nextValue
		})
	}else if(operator)
	{
		const currentValue = value || 0
		const newValue = operations[operator](currentValue,inputValue)

		this.setState({
			value:operatedValue;
			displayValue:String(operatedValue)
		})
	}
	this.setState({
		waitingForOperator : true,
		operator:nextoperator,

	})
}

render(){
	const{displayValue}=this.state //copied
}

return(
	 <div className="Calculator">
	 	<div className="Calculator-display">displayValue</div>
	 		<div className="Calculator-keypad">
	 			<div className="inputKeys">
	 			<div className="functionKeys">
	 			<button className="Calculator-key clear-key" onClick={()==> this.clearDisplay}>AC</button>
	 			<button className="Calculator-key sign-key" onClick={()==> this.changeSign>+/-</button>
	 			<button className="Calculator-key percent-key" onClick={()==> this.Percent>%</button>
	 		    <button className="Calculator-key abs" onClick = {()==> this.Absolute > |x| </button>
	 		    <button className="Calculator-key sin" onClick = {()==> this.Sin > sin </button>
	 		    <button className="Calculator-key cos" onClick = {()==> this.Cos > cos </button>
	 		    <button className="Calculator-key tan" onClick = {()==> this.Tan > tan </button>
	 		    <button className="Calculator-key log" onClick = {()==> this.Log > log </button>
	 		    <button className="Calculator-key ln" onClick = {()==> this.Ln > ln </button>
	 		    <button className="Calculator-key sq" onClick = {()==> this.Square > sq </button>
	 		    <button className="Calculator-key log" onClick = {()==> this.Log > log </button>
	 		    <button className="Calculator-key Cancel" onClick = {()==> this.showLast > C </button>
	 		    <button className="Calculator-key e" onClick = {()==> this.e > e </button>
	 		    <button className="Calculator-key pi" onClick = {()==> this.pi > pi </button>
	 		    <button className="Calculator-key fac" onClick = {()==> this.Factorial > ! </button>
			    <button className="Calculator-key sqrt" onClick = {()==> this.squareRoot > ! </button>

	 </div>
	 <div className="digitKeys">
	 	<button className="Calculator-key key-0" onClick={() this.inputDigit(0)}>0</button>
	 	<button className="Calculator-key key-dot" onClick={() this.inputDigit()}>.</button>
	 	<button className="Calculator-key key-1" onClick={() this.inputDigit(1)}>1</button>
	 	<button className="Calculator-key key-2" onClick={() this.inputDigit(2)}>2</button>
	 	<button className="Calculator-key key-3" onClick={() this.inputDigit(3)}>3</button>
	 	<button className="Calculator-key key-4" onClick={() this.inputDigit(4)}>4</button>
	 	<button className="Calculator-key key-5" onClick={() this.inputDigit(5)}>5</button>
	 	<button className="Calculator-key key-6" onClick={() this.inputDigit(6)}>6</button>
	 	<button className="Calculator-key key-7" onClick={() this.inputDigit(7)}>7</button>
	 	<button className="Calculator-key key-8" onClick={() this.inputDigit(8)}>8</button>
	 	<button className="Calculator-key key-9" onClick={() this.inputDigit(9)}>9</button>
	 </div>
	 <div className="functionKeys">
	 	<button className="Calculator-key key-add" onClick={()this.performOperation('+')}>+</button>	
	 	<button className="Calculator-key key-sub" onClick={()this.performOperation('-')}>-</button>	
		<button className="Calculator-key key-mul" onClick={()this.performOperation('*')}>*</button>	
		<button className="Calculator-key key-div" onClick={()this.performOperation('/')}>/</button>
		<button className="Calculator-key key-equal" onClick={()this.performOperation('=')}>=</button>	
		button className="Calculator-key key-pow" onClick={()this.performOperation('^')}>/</button>
		
	</div>
	 )

	 	
