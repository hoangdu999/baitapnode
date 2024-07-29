const express = require('express');
const app = express();
const connectDB = require('./configs/database');

const router = require('./routers');
//HTTP method: GET, POST...

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

//images public
app.use(express.static('./uploads'));

const fs = require("fs");
app.get("/file", async (req, res)=>{
    try {
        await fs.writeFileSync('./data.txt', "hello anh chij em");
        await fs.appendFileSync('./data.txt', "\ntoi code nodejs");
        const data = await fs.readFileSync("./data.txt");
        await fs.unlinkSync("./my-data.txt");
        res.send(data.toString());
    } catch (error) {
        console.log("LOI::::");
        console.log(error);
    }
})

connectDB();
router(app);

app.listen(5000, () => {
  console.log('server run at port 5000');
});
