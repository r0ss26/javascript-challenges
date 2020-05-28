let me = {};
me.age = 26;
me.current_location = 'Sydney';
console.log(`current location: ${me.current_location}. age: ${me.age}`);
me.hobbies = ['coding', 'reading'];
delete me.age;
me.age = 26;

me.hobbies.forEach(hobby => {
  console.log(hobby);
})

me.hobbies.push('exercising');
me.hobbies.shift();
me.mother = {};
me.mother.name = 'Janet';
me.mother.age = '55';
me.mother.location = 'Canberra';

me.printDetails = function() {
  console.log(this === me)
  console.log(`My age is ${this.age}. My current location is ${this.current_location}. My hobbies are ${this.hobbies.join(', ')}.`);
}

me.printDetails();

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

delete sydney_campus.state;

console.log(`${coder_academy.sydney.street}, ${coder_academy.sydney.state}`)

