import { IFAQItem } from "../interfaces/IFAQItem";
import quest1 from "../assets/images/faq-images/Imagene-for-quest-one.png";
import quest4 from "../assets/images/faq-images/Imagene-for-quest-four.png";
import quest6 from "../assets/images/faq-images/Imagene-for-quest-six.png";
import quest7 from "../assets/images/faq-images/Imagene-for-quest-seven.png";
import quest10 from "../assets/images/faq-images/Imagene-for-quest-ten.png";

const faqItems: IFAQItem[] = [
    {
        question: "Что это за проект?",
        answer: "Это pay-to-earn кликер с возможностью заработка наших токенов!",
        imageUrl: quest1,
    },
    {
        question: "Что такое Web3?",
        answer: "Это децентрализованный интернет, где пользователи контролируют данные и используют блокчейн и криптовалюты.",
        imageUrl: "",
    },
    {
        question: "Что такое Metamask?",
        answer: "Это криптокошелек, позволяющий безопасно взаимодействовать с блокчейн-приложениями и хранить криптовалюту Ethereum и токены на его основе.",
        imageUrl: "",
    },
    {
        question: "Как создать кошелек Metamask?",
        answer: `
                1) Установите Metamask с сайта metamask.io 
                2) Запустите Metamask 
                3) Создайте кошелек .`,
        imageUrl: quest4,
    },
    {
        question: "Что такое Polygon?",
        answer: "Это децентрализованная платформа для Ethereum, созданная для улучшения масштабируемости и снижения транзакционных издержек.",
        imageUrl: "",
    },
    {
        question: "Как зарегистрироваться на сайте?",
        answer: "",
        imageUrl: "",
    },
    {
        question: "Как вывести токены?",
        answer: "",
        imageUrl: "",
    },
    {
        question: "Нужно ли мне что-то вкладывать?",
        answer: "Нет не нужно! Единственное, что необходимо, это подключить кошелек Metamask.",
        imageUrl: "",
    },
    {
        question: "Это финансовая пирамида?",
        answer: "Нет это не финансовая пирамида! Мы никому не обещаем прибыль, пока наш токен не появится на бирже.",
        imageUrl: quest6,
    },
    {
        question: "Как заработать на этом?",
        answer: "Мы не выдаем деньги, мы выдаем токены, ценность которых определяется на бирже DEX",
        imageUrl: quest7,
    },
    {
        question: "Что такое DEX?",
        answer: "Это тип децентрализованной биржи, который позволяет пользователям напрямую обменивать криптовалюты без участия посредников. Наши токены используют DEX биржу Uniswap.",
        imageUrl: "",
    },
    {
        question: "Что такое Uniswap?",
        answer: `Это платформа, которая позволяет людям обменивать криптовалюты напрямую между собой, без участия посредников. Это работает через специальные программы, называемые смарт-контрактами, которые автоматически выполняют обмен. В Uniswap используется механизм автоматизированного маркет-мейкера (AMM), где пользователи предоставляют ликвидность в "пулы" (резервуары криптовалют) и зарабатывают на комиссиях за сделки.`,
        imageUrl: "",
    },
    {
        question: "Как я могу помочь проекту?",
        answer: `
            1)	Подписаться на нас в социальных сетях.
            2)	Инвестировать в наш проект.
            3)	Пригласить друзей.
            4)	Выставить большее количество токенов на бирже, что будет поднимать их ликвидность.
            `,
        imageUrl: quest10,
    },
];

export { faqItems };