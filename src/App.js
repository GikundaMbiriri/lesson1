import logo from './logo.svg';
import pic from './pic.jpg';
import {useState,useEffect,useRef} from 'react';
import './App.css';


function App() {
 
const [index,setIndex]=useState(0);
const [score,setScore]=useState(0);
const [answer,setAnswer]=useState(0);
const [click,setClick]=useState(false)
const maswali=[
{"question":"How often have you been bothered by feeling nervous, anxious or on edge over the last two weeks?"
,"choices":[{"answer":"Not at all","score":0},{"answer":"several days","score":1},{"answer":"more than half the days","score":2},{"answer":"nearly every day","score":3}]

},
{"question":"How often have you been bothered by not being able to stop or control worrying over the last two weeks?"
,"choices":[{"answer":"Not at all","score":0},{"answer":"several days","score":1},{"answer":"more than half the days","score":2},{"answer":"nearly every day","score":3}]

},
{"question":"How often have you been bothered by worrying too much about different things over the last two weeks?"
,"choices":[{"answer":"Not at all","score":0},{"answer":"several days","score":1},{"answer":"more than half the days","score":2},{"answer":"nearly every day","score":3}]

},
{"question":"How often have you been bothered by having trouble relaxing over the last two weeks?"
,"choices":[{"answer":"Not at all","score":0},{"answer":"several days","score":1},{"answer":"more than half the days","score":2},{"answer":"nearly every day","score":3}]

},
{"question":"How often have you been bothered by being so restless that it is hard to sit still over the last two weeks?"
,"choices":[{"answer":"Not at all","score":0},{"answer":"several days","score":1},{"answer":"more than half the days","score":2},{"answer":"nearly every day","score":3}]

},
{"question":"How often have you been bothered by becoming easily annoyed or irritable over the last two weeks?"
,"choices":[{"answer":"Not at all","score":0},{"answer":"several days","score":1},{"answer":"more than half the days","score":2},{"answer":"nearly every day","score":3}]

},

];
const inputEl = useRef(null);
useEffect(()=>{

},[index])
function handleChange(e){
var valu=parseInt(e.target.value);
setAnswer(valu);


}
function handleSubmit(e){
  e.preventDefault();
  setScore(score+answer)
  setIndex(index+1);
 setClick(false)


}
  return (
    <>
    {answer}
    <div className="qform">
      {maswali.length>=index+1?<div className="iform">
        <h5 className="juu">{maswali[index].question}</h5>
        <form onSubmit={handleSubmit}>
        {maswali[index].choices.map((choice)=><div className="form-check yy" key={choice.score}>
  <input className="form-check-input" type="radio" name="exampleRadios" id="myID" onClick={(e)=>handleChange(e)} value={choice.score} checked={null}  />
  <label className="form-check-label" htmlFor="exampleRadios1">
    {choice.answer}
  </label>
</div>)}
<button type="submit" className="btn btn-success yu" >Submit</button>

</form>
</div>:<div><h1>Your score is {score}</h1>
{score<6?<h3>You are okay</h3>:score<12?<h3>this is mid level</h3>:<h3>you are depressed</h3>}

</div>}
</div>
    </>

  
 
  );
}

export default App;
