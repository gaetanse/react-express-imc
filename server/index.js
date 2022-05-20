import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()

const fileUsers = "data/user.json"

app.use(express.json())
app.use(cors({origin:"*"}))

//get all users
function getUsers(){
    fs.readFile(fileUsers, (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data)
        console.log(users)
        return users
    });
}

//add a user
function addUser(name, password, age, height, weight){
    //console.log(getUsers())
    const data = {
        "id": getSizeUsers(),
        "name": name,
        "password": password,
        "age": age,
        "height": height,
        "weight": weight
    }
    console.log(data)
    fs.writeFile(fileUsers, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    //console.log(getUsers())
}

//get size of users
function getSizeUsers(){
    fs.readFile(fileUsers, (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data)
        //console.log(users)
        return users.length
    });
}

app.post('/user', (req, res) => {
       const {name, password, age, height, weight} = req.body
       addUser(name, password, age, height, weight)
       res.json({message: true})
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