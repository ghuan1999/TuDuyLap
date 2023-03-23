import { question } from "readline-sync";

let m:number=Number(question("m = "));
let conf:number=0;
for(let i:number=1; i<=m; i++){
    for(let j:number=2; j<i; j++){
        if(i%j==0){
            conf=1;
            break;
        }
    }
    if(conf==0) console.log(i);
    conf=0;
}
