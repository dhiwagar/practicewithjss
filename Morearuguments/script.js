// function registeruser(user) {
    
//     return user +'  is register';
// }

// // console.log(user);
// console.log(registeruser("john"));
// old method
// function registeruser(user) {
//      if (!user) {
//          user="bot"
//      }
//     return user +'  is register';
// }

// console.log(registeruser());
// function registeruser(user="bot") {
 
//     return user +'  is register';
// }

// console.log(registeruser());
// Rest params
// function sum(...number) {
//     let total=0; 
//     for (const num of number) {       
//         total+=num    
//     }
//     return  total;
// }
// console.log(sum(1,2,3,4,5,6,8,9));

function loginuser(user) {
    
    return `The user ${user.name} with the id of ${user.id} is logged in`;

}
 const user={
    id:1,
    name:"johan"
 }
 console.log(loginuser(user));