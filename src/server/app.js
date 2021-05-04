import express from 'express';
import bodyParser from 'body-parser';


const PORT = process.env.SERVER_PORT? process.env.SERVER_PORT: 3003;
const app = express();
const api = new express.Router();
api.use(bodyParser.json());

app.use('/api', api);
api.post("/logger/", (req, res, next) => {
   
    if (req.body) {
        console.log(req.body); //write to server file
        res.status(500).send('Unsuccessful attempt to load page');
    } else {
        next();
    }
} )

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

