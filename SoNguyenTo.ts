import { question } from "readline-sync";

let n:number=Number(question("n = "));
let conf:number=0;
for(let i:number=2; i<n; i++){
    if(n%i==0){
        conf=1;
        break;
    }
}
if(conf==0) console.log("Yes");
else console.log("No");