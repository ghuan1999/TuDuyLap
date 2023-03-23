import {question} from 'readline-sync';

let h:number=Number(question("h = "));
for(let i:number=1; i<=h;i++){
    let s:String="";
    for(let j:number=1; j<=i; j++){
        s+="* ";
    }
    console.log(s);
}