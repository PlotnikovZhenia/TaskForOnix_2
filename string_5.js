let example_string_1="Я иду с мечем судия";
let example_string_2="A иду с мечем судия";//спеціальна помилка для перевірки
let example_string_3="blb";
let palindrom=function(example_string) {
let new_array=example_string.toLowerCase().split(' ').join('').split('');
let not_reverse_string=new_array.join('');
let reverse_string=new_array.reverse().join('');
let result=not_reverse_string.localeCompare(reverse_string);
if(result===0){
    console.log("Так, це паліндром !")
}else {
    console.log("Ні, це не є паліндромом !")
}
}
palindrom(example_string_1);
palindrom(example_string_2);
palindrom(example_string_3);