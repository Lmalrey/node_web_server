import {envs} from './config/env.js'
//const {envs}=require('./config/env')

import {startServer} from './servidor/server.js'
//const {startServer}=require('./servidor/server')

const main=()=>{
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}


//funcion agnostica autoconvocada
//agnostica porque no tiene nombre
//Autoejecutada porque la ejeutamos con los parentesis
(async()=>{
    main()
})()