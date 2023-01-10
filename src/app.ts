import express,{Application, Request, Response, NextFunction} from 'express';

const app:Application = express();
const PORT =  process.env.PORT || 3001;

app.use(express.json())


app.get("/",(req: Request,res:Response): void => {
res.send("Hi, It's online.")

});
app.post("/demo1",(req:Request<PayloadMotor>, res: Response, next: NextFunction):void =>{
    try {
        const {body} = req;
        const contexto: undefined | string = req.headers['contexto']?.toString(); 
        if(!contexto){
            throw new Error("Header contexto invalido");
        }

        console.log(body);
        res.send(body)
    } catch (error: Error | any ) {
        console.log("Error: "  ,error)
       //next(error)
       res.status(500).json({
        status:500,
        message:error.message
    })
    }
})

app.listen(PORT,():void =>{           
    console.log("Server is UP ", PORT);
})