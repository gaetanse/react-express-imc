import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()

const fileUsers = "data/user.json"
const fileImcs = "data/imc.json"

app.use(express.json())
app.use(cors({origin:"*"}))

//get all users
function getUsers(){
    return new Promise(resolve => {
        fs.readFile(fileUsers, (err, data) => {
            if (err) throw err;
            let users = JSON.parse(data)
            resolve(users)
        });
    });
}

//get all imcs
function getImcs(){
    return new Promise(resolve => {
        fs.readFile(fileImcs, (err, data) => {
            if (err) throw err;
            let imcs = JSON.parse(data)
            resolve(imcs)
        });
    });
}

//get a user
async function getUser(id){
    const users = await getUsers()
    return new Promise(resolve => {
        for(let i=0;i<users.length;++i){
            if(id == users[i].id){
                resolve(users[i])
            }
        }
    });
}

//add a user
async function addUser(name, password, age, height, weight){

    const allData = await getUsers()
    const data = {
        "id": allData.length,
        "name": name,
        "password": password,
        "age": age,
        "height": height,
        "weight": weight
    }
    allData.push(data)

    return new Promise(resolve => {
        fs.writeFile(fileUsers, JSON.stringify(allData), (err) => {
            if (err){
                resolve(-1)
            }
            resolve(1)
        })
    });
}

//add a imc
async function addImc(imc, id, weight, date, numero){

    const allData = await getImcs()
    const data = {
        "imc": imc,
        "id": id,
        "weight": weight,
        "date": date,
        "numero": numero
    }
    allData.push(data)

    return new Promise(resolve => {
        fs.writeFile(fileImcs, JSON.stringify(allData), (err) => {
            if (err){
                resolve(-1)
            }
            resolve(1)
        })
    });
}

//route for add user
app.post('/addUser', async (req, res) => {
       const {name, password, age, height, weight} = req.body
       const error = await addUser(name, password, age, height, weight)
       if(error === 1){
        const allData = await getUsers()
        res.json({message: "ok - the user is add in server",id:allData.length-1})
       }
       else{
        res.json({message: "error - the user is not add in server"})
       }
})

//route for add user
app.post('/addImc', async (req, res) => {

       const {weight, todayDate, id} = req.body

       const user = await getUser(id)
       const imc = weight/(user.height*user.height)

        let numero = 0
        
        if(imc<18.5){
            numero = 0
        }
        else if(imc>=18.5 && imc<=25){
            numero = 1
        }
        else if(imc>25&& imc<=30){
            numero = 2
        }
        else if(imc>30 && imc<=35){
            numero = 3
        }
        else if(imc>35){
            numero = 4
        }

       const error = await addImc(imc,id,weight,todayDate,numero)
       if(error === 1){
        const allData = await getImcs()
        res.json({message: "ok - the imc is add",imc:allData[allData.length-1]})
       }
       else{
        res.json({message: "error - the imc is not add"})
       }
       
})

//route for login test
app.post('/getUsers', async (req, res) => {
    let isLogin = false
    const {name, password} = req.body
    const allData = await getUsers()
    allData.map((e)=>{
        if(e.name === name && e.password === password){
            res.json({message: "user found",id:e.id})
            isLogin = true
        }
    })
    if(!isLogin){
        res.json({message: "none user found"})
    }
})

//route for imcs by id
app.post('/getImcs', async (req, res) => {
    const imcsToSend = []
    let isFound = false
    const {id} = req.body
    const allData = await getImcs()
    allData.map((e)=>{
        if(id === e.id){
            imcsToSend.push(e)
            isFound = true
        }
    })
    if(!isFound){
        res.json({message: "none imc found"})
    }
    else{
        res.json({message: "imc found",imcs:imcsToSend})
    }
})

app.listen(666,() => {
    console.log("Server open at 666")
})