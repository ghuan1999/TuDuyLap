import {question} from 'readline-sync';

let n:number=Number(question("n = "));
for(let i:number=1;i<=n;i++){
    if(n%i==0) console.log(i);
}
