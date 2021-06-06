const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json())

app.use(cors(
{
	origin:"*",
	methods:"GET,PUT,PATCH,POST,DELETE,OPTIONS"
}));


var roll=[{name:['5','20','25','32','37','38','40','47','49','50']}]

const PORT=process.env.PORT || 4000;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept,Authorization"
//   );
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
//   next();
// });


app.post("/api",function(req,res){
	let flag=0;
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



app.listen(PORT,function(){
	console.log("running on port 4000");
})