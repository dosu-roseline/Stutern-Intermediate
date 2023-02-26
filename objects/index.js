// Question One

function InstagramPost(author, content, image, views, likes) {
  this.author = author;
  this.content = content;
  this.image = image;
  this.views = views;
  this.like = likes;
}

// Question Two

const post1 = new InstagramPost(
  'Stephanie Kelly',
  'Check out this amazing sunset!',
  'https://randomuser.me/api/portraits/women/88.jpg',
  1000,
  50
);
const post2 = new InstagramPost(
  'Albert Hudson',
  'Had a great time at the beach today!',
  'https://randomuser.me/api/portraits/men/42.jpg',
  700,
  200
);
console.log(post1);
console.log(post2);

// Question Three

// (3a)
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const person1 = new createPerson('Musa', 19, 'Lekki, Lagos State');
console.log(person1);

// (3b)

function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}

const jambScore1 = new createJambScores(70, 85, 82, 94);
console.log(jambScore1);

// Question Four
i.Object.assign();
Example;
const obj1 = { name: 'John', age: 30 };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { name: 'John', age: 30 }

// ii. Spread syntax
//Example
const obj1 = { name: 'John', age: 30 };
const obj2 = { ...obj1 };
console.log(obj2); // { name: 'John', age: 30 }

// iii. Object.create()
//Example
const obj1 = { name: 'John', age: 30 };
const obj2 = Object.create(obj1);
console.log(obj2.name); // "John"
console.log(obj2.age); // 30

// iv. JSON.parse() and JSON.stringify()
//Example
const obj1 = { name: 'John', age: 30 };
const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2); // { name: 'John', age: 30 }

// Question Five
const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
};

for (const party in presidentialCandidates) {
  const candidate = presidentialCandidates[party];
  console.log(`${candidate} is the presidential candidate of ${party}`);
}
