const arr = [1, 1, 2, 3, 1, 4];
const afterRemoved = [];
for (const element of arr) {
    if(!afterRemoved.includes(element)){
        afterRemoved.push(element)
    }
}

console.log(afterRemoved);