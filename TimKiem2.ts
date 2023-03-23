import { question } from "readline-sync";

let m:number=Number(question("m = "));
let n:number=Number(question("n = "));
for(let i:number=m;i<=n;i++){
    if(i%6==0 && n-i<6){
        console.log(i);
        break;
    }
}