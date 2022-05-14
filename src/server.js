import express from 'express'
import dotenv from 'dotenv'
import { fileURLToPath } from "url"
import path from "path"

dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.static(__dirname));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3000, () => console.log('Listening on port [:3000]'))