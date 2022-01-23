const quotes = [
    {
        quote:"행동 계획에는 위험과 대가가 따른다. 하지만 이는 나태하게 아무 행동도 취하지 않는데 따르는 장기간의 위험과 대가에 비하면 훨씬 작다.",
        author:"존 F. 케네디"
    },
    {
        quote:"여정은 목적지로 향하는 과정이지만, 그 자체로 보상이다.",
        author:"스티브 잡스"
    },
    {
        quote:"오늘 할 수 있는 일을 내일로 미루지 마라.",
        author:"벤자민 프랭클린"
    },
    {
        quote:"희망은 절대 당신을 버리지 않는다. 당신이 희망을 버릴 뿐이다.",
        author:"리처드가 브리크너"
    },
    {
        quote:"청춘은 다시 오지 않고 하루 해는 다시 밝기 어렵다. 좋은 시절에 부지런히 힘쓸지니 세월은 사람을 기다려주지 않는다."   ,
        author:"도연명"
    },
    {
        quote:"무슨 일이든 할 수 있다고 생각하는 사람이 해내는 법이다",
        author:"정주영"
    },
    {
        quote:"손이 타버릴듯 뜨거울지라도, 담고 싶은 태양이 있다면 죽어도 놓지 말 것",
        author:"이지영"
    }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
