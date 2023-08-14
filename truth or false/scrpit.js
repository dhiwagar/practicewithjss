// const email="test@test.com";
// if (email) {
//    console.log("Email is here"); 
// }
// console.log(Boolean(email));
// truthy and falsy caveats
const children=0;
if (!isNaN(children)) {
   console.log(`You have ${children} child`);
}
else{
   console.log(`please enter number of children`);
}