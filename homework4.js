
let text = "One: 'Hi Mary.' Two: 'Oh, hi.'\n" +
    "One: 'How are you doing?'\n" +
    "Two: 'I'm doing alright. How about you?'\n" +
    "    One: 'Not too bad. The weather is great isn't it?'\n" +
    "    Two: 'Yes. It's absolutely beautiful today.'\n" +
    "One: 'I wish it was like this more frequently.'\n" +
    "Two: 'Me too.'\n" +
    "One: 'So where are you going now?'\n" +
    "Two: 'I'm going to meet a friend of mine at the department store.'\n" +
    "One: 'Going to do a little shopping?'\n" +
    "Two: 'Yeah, I have to buy some presents for my parents.'\n" +
    "One: 'What's the occasion?'\n" +
    "    Two: 'It's their anniversary.'\n" +
    "One: 'That's great. Well, you better get going. You don't want to be late.'\n" +
    "Two: 'I'll see you next time.'\n" +
    "One: 'Sure. Bye.'";
const regular = new RegExp("('.+?'|\"\\w\")", "g");
const regular2 = /'|'\B/g;
const regular3 = /"\w+"/g;
// const regular4 = /"\w'/g;
let test = regular.test(text);
let test2 = text.match(regular);
let test3 = text.replace(regular2, "\"");
let test4 = test3.replace(regular3,"\"\w\'");

console.log(test3);

console.log(test);
console.log(test2);
console.log(test4);