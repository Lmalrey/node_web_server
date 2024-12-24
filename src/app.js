const {envs}=require('./config/env')
const {startServer}=require('./servidor/server')

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