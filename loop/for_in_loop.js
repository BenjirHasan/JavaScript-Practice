// for...in loop
var study =
{
    firstCourse : "object oriented programming (java)",
    secondCourse : "Algorithom",
    thirdCourse : "Data Structure"
};

var student1 = Object.create(study);

student1.id = 123;
student1.fName = "Benjir";
student1.showEnrolledCourses = function()
{
    console.log(study);
}

for (let courses in student1)
{
    console.log(courses + "--->" + student1[courses]);
}

//for...of loop
var map = new Map(
    [
        ['key1', 'value1'],
        ['key2', 'value2'],
        ['key3', 'value3']
    ]
);

for (var [key, value] of map)
{
    console.log(`Key: ${key}, Value: ${value}`);
}

