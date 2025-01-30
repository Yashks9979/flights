const express=require('express');
const app=express();
const {ServerConfig, Logger}=require('./config/index')
const {PORT}=require('./config');
const apiRoutes=require('./routes/index');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());


app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,()=>{
    console.log(`successfully started the server on port:${ServerConfig.PORT}`);
    Logger.info("successfully started server",{});

})