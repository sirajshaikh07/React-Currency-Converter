
const studentMarks = {
  Albert: {
    age: 22,
    marks: 70,
    status: "pass",
    class: "10th",
  },
  Robert: {
    age: 18,
    marks: 15,
    status: "fail",
    class: "5th",
  },
  Emma: {
    age: 20,
    marks: 85,
    status: "pass",
    class: "12th",
  },
  Sophia: {
    age: 19,
    marks: 45,
    status: "fail",
    class: "11th",
  },
  Liam: {
    age: 21,
    marks: 60,
    status: "pass",
    class: "10th",
  },
  Noah: {
    age: 17,
    marks: 30,
    status: "fail",
    class: "9th",
  },
  Olivia: {
    age: 23,
    marks: 95,
    status: "pass",
    class: "12th",
  },
  Ava: {
    age: 16,
    marks: 75,
    status: "pass",
    class: "8th",
  },
  Isabella: {
    age: 19,
    marks: 50,
    status: "fail",
    class: "11th",
  },
  Mason: {
    age: 22,
    marks: 80,
    status: "pass",
    class: "10th",
  },
  Mia: {
    age: 20,
    marks: 35,
    status: "fail",
    class: "10th",
  },
  Elijah: {
    age: 21,
    marks: 90,
    status: "pass",
    class: "12th",
  },
  Jacob: {
    age: 18,
    marks: 65,
    status: "pass",
    class: "10th",
  },
  Charlotte: {
    age: 24,
    marks: 40,
    status: "fail",
    class: "12th",
  },
  Amelia: {
    age: 19,
    marks: 55,
    status: "fail",
    class: "11th",
  },
};


const names=Object.entries(studentMarks);
console.log(names)
Object.entries(studentMarks).map(([n,{a,marks:m,s,c}])=>
{
    console.log(m)
})
Object.entries(studentMarks).filter(([n1,{age,marks,...rest}])=>
{
    if(marks<30)
    {
        console.log(n1+" is fail")
    }
    else{
        console.log(n1+" is pass")
    }
})

 