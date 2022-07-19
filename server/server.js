const express=require('express');
const app=express();
const PORT=process.env.PORT || 5000;
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"))

//get db connection
//get driver connection
const dbo=require("./db/conn");

app.listen(PORT,()=>{
    dbo.connectToServer(function(err){
        if(err) console.error(err);
    });
    console.log(`Server is running @ PORT ${PORT}`)
})