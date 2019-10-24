const express = require('express');
//for validation of schema we will use Joi class
const Joi = require('joi');
const app = express();

app.use(express.json());

let courses = [
{id:1, name:'course1'},
{id:2, name:'course2'},
{id:3, name:'course3'},
{id:4, name:'course4'}
];

app.get('/', (req, res) =>{
res.send('Hello Sudheer');

});
app.get('/api/courses', (req, res)=>{
res.send(courses);
});

app.get('/api/courses/:id', (req, res)=>{
let course = courses.find(c => c.id === parseInt(req.params.id));
if(!course){
    res.status(404).send('course not found');
}else{
    res.send(course.name);
}
});

app.post('/api/courses', (req, res)=>{
 //object distruction 
 let {error} = validateCourse(req.body);
 if(error){
     res.status(400).send(error.details[0].message);
     return;
 }
    let course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res)=>{
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('course not found');
        return;
    }

  //  let result = validateCourse(req.body);
   //object distruction 
    let {error} = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name=req.body.name;
    res.send(course);

});

app.delete('/api/courses/:id', (req, res)=>{
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('course not found');
        return;
    }

    // delete the course 
    let index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);

});


let validateCourse = (course)=>{
    let schema ={
        name:Joi.string().min(3).required()
    };
    
    let result = Joi.validate(course, schema);
    return result;
}



const port = process.env.port || 3000;
app.listen(port, () =>{
console.log(`listining at port ${port}`);
});