const { string} = require('joi');
const mongose = require('mongose');

const stockSchema = new mongose.Schema({
    fristName: { require true,type:string},
    lastName: { require true,type:string},
    email: { require true,type:string},
    phoneNumber: { require true,type:string},
    grnder: { require true,type:string},
    nayionalId{require true,type:string},
    role: {
       enum:{
        value: ["HR","MANAGER","IT_ADMIN","EMPLOYE"],
        mesage:"{value} is not a valid role",
    }
},
creaDate: true,
type: Date,
defaut: new Date() 
},
updateTime { require true,type:Date},
});
module.export = mongose.model('stock','stockSchema')
