
let obj = {
    name: 'hang',
    age: 20,
    toJSON () {
        return {
            name: this.name
        }
    }
}

let a = JSON.stringify(obj,null,4)
console.log(a);