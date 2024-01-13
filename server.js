require('doenv').config();
const express = require('express');
const{connectTodb} = require('.db/dbConnection');
const app  = express();
 
app.use(express.json());
connectTodb();

app.use('/api/sms/v1',allRautes);

app.listen(process.env.PORT, () => {
    console.log('server running on port ${process.env.PORT}');
}); 


