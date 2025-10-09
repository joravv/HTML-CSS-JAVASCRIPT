var programminglanguages=['html', 'c++', 'python']
console.log(programminglanguages);
console.log(programminglanguages[3]);
programminglanguages.push('html');
console.log(programminglanguages);
programminglanguages.pop();
console.log(programminglanguages);
programminglanguages.shift;
console.log(programminglanguages);
programminglanguages.unshift('php');
console.log(programminglanguages);
programminglanguages.splice('2', '1', 'skratch');
console.log(programminglanguages);

console.log(Math.floor(Math.random()*5));

var students =['jora', 'buna', 'rejana'];
var [s1, s2, s3]= students;
console.log(s1)