let chacge_stringOnArray=function(string) {
    let arr=[];
    for(let i=0; i<string.length;i++) {
        arr[i]=string[i];
    }
    return arr;
}
let user_word=prompt("Your word")
console.log(chacge_stringOnArray(user_word));