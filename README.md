# Proedge

Insert and Fetch Data using node js Back-end &amp; Display records on react js front-end.

Built with:
* Node.js
* React.js

[![CircleCI](https://circleci.com/gh/cezerin/cezerin/tree/master.svg?style=svg)](https://circleci.com/gh/cezerin/cezerin/tree/master)





### frontend link (deployed on Netlify) - @<a href="https://mayank-proedge.netlify.app/">Frontend</a>

### backend link  (deployed on Heroku) -  @<a href="https://glacial-fjord-33512.herokuapp.com">backend</a>







## FrontEnd

React Snippets

```js
const [data,setData]=useState({
        name:""
    })
    

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
           
    }
 ```

Connecting the React Client to the Express API. 
On entering the value and pressing submit, a request should be sent to the backend and fetch the data 

```js


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
        // setPrint(res.data.message);
        console.log(res.data)
        document.getElementById('roll').innerHTML=res.data.input; 
        document.getElementById('status').innerHTML=res.data.message; 
         // setState((items)=>{
         //    console.log(...items);
         //    return [...items,print];
         // })    

           
    }
```

display the record in the form of table.
```js
<div className="centerDiv">
    
    
    
    <form onSubmit={(e)=>submit(e)}>
    <input id="name" type="text" onChange={(e)=>handle(e)}  />
    <button type="submit" >Submit</button>
    <table id="details">
   
  <tr>
    <th>Roll-Number</th>
    <th>Status</th>
  </tr>
  <tr>
    <td id="roll"></td>
    <td id="status"></td>
   
  </tr>
    </table>
    </form>
    
    </div>

```


## BackEnd

Access-Control-Allow-Origin

Configuring a new route in the Express API

```js

const PORT=process.env.PORT || 4000;
app.listen(PORT,function(){
	console.log("running on port 4000");
})

```


```js

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});
```






rollnumber is the value to be passed, and it will return pass or fail results. This external API only accepts 1 rollnumber per call.
```js


let roll=[{name:['5','20','25','32','37','38','40','47','49','50']}]

app.post("/api",function(req,res){
	var flag=0;
	for(let i=0;i<10;i++){
	let result=roll.find(rolls=>rolls.name[i]==req.body.name);
	if(result){
		flag=1;
		res.status(200).send({
			input:req.body.name,
			message:"Pass"
		})
		break;
	}
	}
	
	if(flag==0){
		res.status(200).send({
			input:req.body.name,
			message:"Fail"
		})
	}

})
```
## TESTCASES

![Capture234](https://user-images.githubusercontent.com/63230992/120931057-98621880-c70d-11eb-8a8f-614181911757.PNG)

