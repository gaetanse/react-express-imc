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
            console.log(users)
            //return users
            resolve(users)
        });
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

app.post('/user', async (req, res) => {
       const {name, password, age, height, weight} = req.body
       const error = await addUser(name, password, age, height, weight)
       if(error === 1){
        res.json({message: "ok - the user is add in server"})
       }
       else{
        res.json({message: "error - the user is not add in server"})
       }
})

app.get('/users', (req, res) => {

    data.map((e,i)=>{
        res.json({message: "user found"})
    })
    res.json({message: "none user found"})
})

app.listen(666,() => {

    getUsers()

    console.log("server open at 666")
})