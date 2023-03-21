// Code your solutions in this file
const names =["Guadalupe", "Ollie", "Aki"]


function writeCards(names,event = 'graduation'){
    let message= [];
    for(let i= 0;i < names.length;i++){
        message.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        
    }
    return message;
};
function countDown(num){
   while(num>=0){
    
    console.log(num--);
   }

}
countDown(10);
