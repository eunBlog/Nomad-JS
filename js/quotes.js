const quotes = [
  {
    quote: "떠나간 프라이탁은 돌아 오지 않는다.",
    author: "프라이탁",
  },
  {
    quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다..",
    author: "아인슈타인",
  },
  {
    quote:
      "우리는 매력적이고, 참신하고, 자발적으로 태어나며 사회에 참여할 수 있을 때까지 교양을 갖추어야 한다",
    author: "마틴",
  },
  {
    quote: "기운과 끈기는 모든 것을 이겨낸다.",
    author: "프랭클린",
  },
  {
    quote:
      "게으름 피울 수 있을 만큼 똑똑하지 못한 것을 포부가 높기 때문이라고 변명할 수 없다.",
    author: "에드가",
  },
  {
    quote:
      "준비 여부에 관계 없이, 열망을 실현하기 위한 명확한 계획을 세우고 즉시 착수하여 그 계획을 실행에 옮겨라",
    author: "나플레온",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
