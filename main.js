var util = require('util');    
var fs = require('fs'); 

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.ToString = function(){
    return util.format('Age: %d, Name: %s', this.age, this.name);   
}

function Teacher(name, age, subject){
    this.name = name;
    this.age = age;
    this.subject = subject; 
}


function Student(name, age, subject){
    this.name = name;
    this.age = age;
    this.subject = subject; 
}


function Driver(name, age, subject){
    this.name = name;
    this.age = age;
    this.subject = subject; 
}

util.inherits(Teacher, Person);
util.inherits(Student, Person);
util.inherits(Driver, Person);

Teacher.prototype.ToString = function(){
    return util.format('Age: %d, Name: %s, Subject: %s', this.age, this.name, this.subject);   
}

Student.prototype.ToString = function(){
    return util.format('Age: %d, Name: %s, Subject: %s', this.age, this.name, this.subject);   
}

Driver.prototype.ToString = function(){
    return util.format('Age: %d, Name: %s, Subject: %s', this.age, this.name, this.subject);   
}


var teacher = new Teacher('Pavel', 40, 'Programming');
var teacher2 = new Teacher('Elon', 52, 'Programming');

var student = new Student('Maksin', 20, 'student');
var driver = new Driver('Denis', 37, 'Driver');

function WriteToFile(string, path){

    fs.writeFile(path, JSON.stringify(string, null, 2), function(err){
        if(err){
            console.log(err);
            return;
         }
        console.log('Object data recorded!');
    });

}

function ReadToFile(path){
    fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
            if(err){
                console.log(err);
                return;
            }
            var obj = JSON.parse(data);
            console.log(obj.name, obj.age, obj.subject);
            console.log("File read");
    });
}

function AppendToFile(objects, path){
    fs.appendFile(path, JSON.stringify(objects, null, 2), function(err){
        if(err){
            console.log(err);
            return; 
        }
        console.log('Object appended to file!');
    });
}

function JsonForm(objects){
    var result = JSON.stringify(objects, null, 2);  
    console.log(result);     
}


WriteToFile(teacher,'objects.txt');
ReadToFile('objects.txt');
AppendToFile(teacher2, 'objects.txt')

WriteToFile(student,'objects2.txt');
ReadToFile('objects2.txt');

WriteToFile(driver,'objects3.txt');
ReadToFile('objects3.txt');

JsonForm(teacher);
JsonForm(student);
JsonForm(driver);
