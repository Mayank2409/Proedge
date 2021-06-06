import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {
    
    const [data,setData]=useState({
        name:"",roll:""
    })
    
    const [state,setState]=useState([])
    

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)

    }


    function submit(e){
        e.preventDefault();
        var OPTIONS = {
            url: "https://glacial-fjord-33512.herokuapp.com/api/",
            method: "POST",
            data:{name:data.name},
            headers: {
              "content-type": "application/json",
            },
          }

        axios(OPTIONS).then(res=>detail(res))
        .catch(err=>console.log(err));
    
    }


    
    function detail(res){
        
        console.log(res.data)
        
        let result={
          inp:res.data.input,
          mes:res.data.message
        }
        setState(prev=>[...prev,result]);
         

           
    }
    


    
  return (
    <>
    <div className="centerDiv">
    
    
    
    <form onSubmit={(e)=>submit(e)}>
    <input id="name" type="text" onChange={(e)=>handle(e)}  />
    <button type="submit" >Submit</button>
    
   {
    state.length > 0
                &&
                <table id="details">
                    <tr>
                      <th>Roll-Number</th>
                      <th>Status</th>
                    </tr>
                    {
                        state.map((val,i)=>{
                            return (<tr key={i}>
                            <td >{val.inp}</td>
                            <td >{val.mes}</td>
                            </tr>);
                          })
                    }
                </table>
    
   }
 
  
    
    </form>
    
    </div>
    </>
  );
}





export default App;