let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");
console.log(btn);

const quotes=[
    {
        quote:'“Be yourself; everyone else is already taken.”',
        person:'Oscar Wilde'
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        person:'Bernard M. Baruch'
    },
    {
        quote:'“Be the change that you wish to see in the world.”',
        person:'Mahatma Gandhi'
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        person:' Robert Frost'
    },
    {
        quote:'“To live is the rarest thing in the world. Most people exist, that is all.”',
        person:'Oscar Wilde'
    },
    {
        quote:'“It is better to be hated for what you are than to be loved for what you are not.”',
        person:'Andre Gide, Autumn Leaves'
    },
    {
        quote:'“Never put off till tomorrow what may be done day after tomorrow just as well.”',
        person:'Mark Twain'
    },
    {
        quote:'“If you judge people, you have no time to love them.”',
        person:'Mother Teresa'
    },
    {
        quote:"“If you can't explain it to a six year old, you don't understand it yourself.”",
        person:'Albert Einstein'
    },
    {
        quote:'“Everything you can imagine is real.”',
        person:'Pablo Picasso'
    },
    {
        quote:"“We don't see things as they are, we see them as we are.”",
        person:'Anaïs Nin'
    }
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});