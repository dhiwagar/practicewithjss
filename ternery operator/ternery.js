// let age=13;

// age>=18? console.log("you vote"):console.log("you note vote");

// let canvote=age>=14? true:false;
// console.log(canvote);
//  Multiple statement
const auth=true;
// console.log(auth);
// let redirect;

// if (auth) {
//     alert('welcome to the dashboard')
//     redirect='/dashboard';
    
// }
// else{
//     alert('Access denied')
//     redirect='/login'; 
// }
// const redirect=auth?(alert("welcome dashboard"),'/dasboard'):((alert("Access Denied"),'/dasboard'))

// console.log(redirect);
auth?console.log('welcome to dashboard'):null;
// console.log(auth);
auth && console.log('welcome to the dashboard');