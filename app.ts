import express, {Application, Request, Response, NextFunction} from 'express';

const app : Application = express();

app.get('/' ,(req : Request, res : Response, next : NextFunction)=>{
    
    res.send('hello');
});

const add = (a:number, b:number): number =>{
    return a+b;
}

const port : number = 3000;
app.listen(port, ()=>{
    console.log(`app is listening at post ${port}`);
});