import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()

const fileUsers = "data/user.json"

app.use(express.json())
app.use(cors({origin:"*"}))

//get all users
function getUsers(){
    return new Promise(resolve => {
        fs.readFile(fileUsers, (err, data) => {
            if (err) throw err;
            let users = JSON.parse(data)
            //console.log(users)
            //return users
            resolve(users)
        });
    });
}

//get a user
async function getUser(id){
    const users = await getUsers()
    for(let i=0;i<users.length;++i){
        if(id == users[i].id){
            return users[i]
        }
    }
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

//route for add user
app.post('/addUser', async (req, res) => {
       const {name, password, age, height, weight} = req.body
       const error = await addUser(name, password, age, height, weight)
       if(error === 1){
        const allData = await getUsers()
        res.json({message: "ok - the user is add in server",id:allData.length})
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
       console.log(imc)
       /*const error = await addUser(name, password, age, height, weight)
       if(error === 1){
        const allData = await getUsers()
        res.json({message: "ok - the user is add in server",id:allData.length})
       }
       else{
        res.json({message: "error - the user is not add in server"})
       }*/
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

app.listen(666,() => {
    console.log("server open at 666")
})