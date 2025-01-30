const express=require('express');

const {PORT}=require('./config');

const app=express();
  const {ServerConfig, Logger}=require('./config/index')
const apiRoutes=require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`successfully started the server on port:${ServerConfig.PORT}`);
    Logger.info("successfully started server",{});

})