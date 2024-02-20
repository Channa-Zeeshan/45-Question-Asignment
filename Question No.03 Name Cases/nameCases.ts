let personName:string='Nauman ali channa'
console.log(personName.toUpperCase());
console.log(personName.toString());
let titlecase=personName.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ')

console.log(titlecase);
