import { question } from "readline-sync";

let n:number=Number(question("n = "));
let S:number=0;
for(let i:number=1; i<=n; i++){
    S+=(1/i);   
}
console.log(S);