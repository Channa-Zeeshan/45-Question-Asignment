var personName = 'Nauman ali channa';
console.log(personName.toUpperCase());
console.log(personName.toString());
var titlecase = personName.split(' ').map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); }).join(' ');
console.log(titlecase);
