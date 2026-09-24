import express from express()
import cors from cors()

const app = express()
app.use(cors()) // Middleware = usa o front end
app.use(express.json) // faz ele entender o json


app.get("/", (req, res) =>{

})

const PORTA = 3000
app.listen(PORTA, () => {})