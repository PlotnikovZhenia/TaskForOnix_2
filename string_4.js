let arrayAboutJS=['I', 'know', 'javascript', '!'];
let array2=['she', 'is', 'a', 'good', 'girl'];
let createString=function(user_array) {
user_string=user_array.join(" ");
let correct_string=""+user_string.charAt(0).toUpperCase();
for (let i=1; i<user_string.length; i++) {
    if(user_string[i-1]===" ") {
        correct_string+=user_string[i].toUpperCase();
    }else {
        correct_string+=user_string[i];

    }
}
console.log(correct_string);
};
createString(arrayAboutJS);
createString(array2);