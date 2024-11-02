let person={

name:"siraj",
age:24,
email:"siraj@gmail.com"

}


const events={
    target:{
        name:"name",
        value:"Rahul"
    }
}



const handleEvent=(e)=>{

    const{name,value}=e.target;
    person={

        ...person,
        [name]:value
        
    }

}

handleEvent(events)
console.log(person)

