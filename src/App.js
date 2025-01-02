import React,{useState} from 'react'
import './App.css';

function App() {
  const[userChoice,setUserChoice]=useState(<div className="user"><h2>Rock Paper Scissors</h2>
    <img src="/rock.png" width="100" alt="rock" onClick={()=>{check('rock')}}/>
    <img src="/paper.png" width="100" alt="paper" onClick={()=>{check('paper')}}/>
    <img src="/scissor.png" width="100" alt="scissor" onClick={()=>{check('scissor')}}/></div>);

  const[computerChoice,setComputerChoice]=useState();

   const[res,setRes]=useState('');


  function check(value){
    let com;
    let num=Math.random()
    num*=100

    if(num<=33){
       com='rock'
    }
    else if(num>=34 && num<=66){
       com='paper'
    }
    else{
      com='scissor'
    }

    if(value==='rock' && com==='rock'){
         setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/rock.png" width="100" alt="rock"/></div>)
         setComputerChoice(<div className="computer"><h2>Computer has choose</h2><img src="/rock.png" width="100" alt="rock"/></div>)
         setRes('It is a Tie')
    }else if(value==='rock' && com==='paper'){
        setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/rock.png" width="100" alt="rock"/></div>)
        setComputerChoice(<div className="computer"><h2>Computer has choose</h2><img src="/paper.png" width="100" alt="paper"/></div>)
         setRes('Computer has won')
    }else if(value==='rock' && com==='scissor'){
         setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/rock.png" width="100" alt="rock"/></div>)
         setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/scissor.png" width="100" alt="scissor"/></div>)
         setRes('You have won')
    }

    if(value==='paper' && com==='rock'){
      setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/paper.png" width="100" alt="paper"/></div>)
      setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/rock.png" width="100" alt="rock"/></div>)
      setRes('You have won')
    }else if(value==='paper' && com==='paper'){
     setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/paper.png" width="100" alt="paper"/></div>)
     setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/paper.png" width="100" alt="paper"/></div>)
      setRes('It is a Tie')
    }else if(value==='paper' && com==='scissor'){
      setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/paper.png" width="100" alt="paper"/></div>)
      setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/scissor.png" width="100" alt="scissor"/></div>)
      setRes('Computer has won')
    }

    if(value==='scissor' && com==='rock'){
     setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/scissor.png" width="100" alt="scissor"/></div>)
     setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/rock.png" width="100" alt="rock"/></div>)
     setRes('Computer has won')
    }else if(value==='scissor' && com==='paper'){
     setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/scissor.png" width="100" alt="scissor"/></div>)
     setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/paper.png" width="100" alt="paper"/></div>)
     setRes('You have won')
    }else if(value==='scissor' && com==='scissor'){
     setUserChoice(<div className="user"><h2>You have choosen</h2><img src="/scissor.png" width="100" alt="scissor"/></div>)
     setComputerChoice(<div className="computer"><h2>Computer has choosen</h2><img src="/scissor.png" width="100" alt="scissor"/></div>)
     setRes('It is a Tie')
    }
  }
  return (
    <div className="container">
       <div className="display">
            {userChoice}
            {computerChoice}
          
       </div>
       <div className="result">
           <h2 style={{color:"#f05053"}}>{res}</h2>
           <button onClick={()=>window.location.reload()}>Restart Game</button>
       </div>      
    </div>
  );
}

export default App;
