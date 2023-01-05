import express,{Application, Request, Response, NextFunction} from 'express';

const app:Application = express();
const PORT = 3001;

app.use("/",(req: Request, res: Response):  void=>{
    res.send("Online App");
})

app.post("/demo1",(req:Request, res: Response,  next: NextFunction ):void =>{
    try {
        var userAgent = req.headers['contexto']; 
    } catch (error ) {
        console.log("Error: "  ,error)
        next(error) 
    }
})

app.listen(PORT,():void =>{           
    console.log("Server is UP ", PORT);
})