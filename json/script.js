const post={
    name:"dhiwagar",
    age:1,
    city:"america"
}
// convert to string
const str=JSON.stringify(post)
// parse json
const obj=JSON.parse(str)
console.log(obj.name);
