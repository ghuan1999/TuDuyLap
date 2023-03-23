import {question} from 'readline-sync';

let w:number=Number(question("w = "));
let h:number=Number(question("h = "));
for(let i:number=1;i<=h;i++){
    let s:String="";
        for(let j:number=1; j<=w;j++){
            s+="* ";
        }
        console.log(s);
    }
    