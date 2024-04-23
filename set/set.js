// basic set object with adding values
var set = new Set();
set.add(10);
set.add(20);
set.add(30).add(40).add(50);  //add() value
console.log(set);
//console.log(set.delete(40));  //delete() value
//console.log(set);
//set.clear();  //clear all values()
//console.log(set);

var getEntry = set.entries();
console.log(getEntry.next().value);
console.log(getEntry.next().value);
console.log(getEntry.next().value);
console.log(getEntry.next().value);
console.log(getEntry.next().value);

var set = ['Apple', 'Banana', 'Orange'];
console.log(set);
 var x = set.entries();
 for(let entry of x)
 {
    console.log(entry);
 }

// set operations using subset() method
var setA = new Set([10, 20, 30]);
var setB = new Set([40, 50, 20, 10, 60, 30]);   // set 3 different set of variable
var setC = new Set([10, 30, 50, 40]);

Set.prototype.subStet = function(setD)  // in function. take set D which is not a subset of this set
{
    if (this.size > setD.size)
    {
        return false;  // if given sets are greater than set D, it returns false, otherwise return true go to else condition
    }
    else
    {
        for (let prop of this)
        {
            if (!setD.has(prop))  //if any of the element of this is not present in the otherset then return false
            {
                return false
            }
        }
        return true;
    }
}
console.log(setA.subStet(setB));
console.log(setA.subStet(setC));
console.log(setC.subStet(setB));