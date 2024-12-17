import express from 'express';
const app = express();
const PORT = 8080;

app.use(express.json()) //this is to parse the json as the body is not parsed to json by default

app.get('/tshirt', (req, res) => { //request is the incoming data and response is what we want to send back to the client
    res.status(200).send({
        tshirt: "👕",
        size: "large"
    })
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body; //json is not parsed in the body by default

    if (!logo) { //checking if we have a logo and if not sending an error message
        res.status(418).send({message: "We need a logo!"})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`
    })
});