export type Language = 'cs' | 'uk' | 'en';

export const translations = {
  cs: {
    nav: {
      howItWorks: 'Jak to funguje',
      whatToEdit: 'Co můžete upravit',
      demo: 'Demo',
      pricing: 'Cena',
      faq: 'FAQ',
      login: 'Přihlásit se',
      tryFree: 'Vyzkoušet zdarma'
    },
    hero: {
      badge: 'Nyní dostupné pro ČR',
      title1: 'Stylový web pro váš salon.',
      title2: 'Bez vývojáře.',
      subtitle: 'Získejte hotový web s jednoduchou administrací. Spravujte si fotky, služby a ceny sami. Rychlý start pro beauty podnikání.',
      btnFree: 'Vyzkoušet zdarma',
      btnDemo: 'Zobrazit demo',
      check1: '14 dní zdarma',
      check2: 'Poté 300 Kč / měsíc'
    },
    benefits: {
      b1Title: 'Rychlý start',
      b1Desc: 'Váš web je připravený téměř okamžitě po registraci. Žádné dlouhé čekání na programátory.',
      b2Title: 'Jednoduchá správa',
      b2Desc: 'Měňte si texty, fotky a ceník sami v přehledné administraci. Zvládne to opravdu každý.',
      b3Title: 'Nízký vstupní náklad',
      b3Desc: 'Začněte s 14denní zkušební dobou zdarma. Poté platíte pouze transparentních 300 Kč měsíčně.'
    },
    features: {
      title: 'Mějte svůj web plně pod kontrolou',
      subtitle: 'Nepotřebujete vývojáře na každou změnu. Vše důležité si upravíte sami na pár kliknutí.',
      f1Title: 'Hlavní fotky a galerii',
      f1Desc: 'Nahrávejte ukázky své práce',
      f2Title: 'Služby a ceník',
      f2Desc: 'Aktualizujte nabídku a ceny kdykoliv',
      f3Title: 'Pořadí sekcí',
      f3Desc: 'Přizpůsobte si rozložení stránky',
      f4Title: 'Vzhled a barvy',
      f4Desc: 'Slaďte web se svou značkou'
    },
    howItWorks: {
      title: 'Jak to funguje?',
      subtitle: 'Od nápadu k hotovému webu za méně než hodinu.',
      s1Title: 'Vyberete si šablonu',
      s1Desc: 'Zaregistrujte se a vyberte si design, který sedí vašemu salonu.',
      s2Title: 'Doplníte obsah',
      s2Desc: 'Vložte své logo, fotky, služby, ceny a kontaktní údaje.',
      s3Title: 'Web je hotový',
      s3Desc: 'Jedním kliknutím web zveřejníte pro své klienty.'
    },
    demo: {
      title: 'Podívejte se, jak může vypadat váš web',
      subtitle: 'Vyzkoušejte si živé demo. Čistý design, který prodává vaše služby.',
      btnLive: 'Zobrazit živé demo'
    },
    audience: {
      title: 'Navrženo přímo pro beauty byznys',
      subtitle: 'Náš systém je ušitý na míru potřebám malých beauty podnikání. Žádné zbytečné funkce, jen to, co opravdu potřebujete.',
      items: ['Salony krásy', 'Nehtová studia', 'Lash & brow studia', 'Kosmetická studia', 'Kadeřnictví', 'Masážní salony']
    },
    comparison: {
      title: 'Proč je to výhodnější?',
      subtitle: 'Porovnání s klasickým vývojem webu na zakázku.',
      tradTitle: 'Běžný web na zakázku',
      tradItems: [
        'Vysoká pořizovací cena (desítky tisíc)',
        'Čekání týdny až měsíce na spuštění',
        'Závislost na vývojáři při každé změně',
        'Složité redakční systémy (WordPress)',
        'Nutnost řešit hosting a údržbu zvlášť'
      ],
      salonTitle: 'SalonWeb',
      salonItems: [
        'Nulové vstupní náklady (14 dní zdarma)',
        'Web hotový a spuštěný za pár minut',
        'Vše si upravíte sami bez programátora',
        'Extrémně jednoduchá administrace',
        'Hosting a údržba v ceně (300 Kč/měsíc)'
      ]
    },
    pricing: {
      title: 'Jednoduchá a férová cena',
      subtitle: 'Žádné skryté poplatky. Platíte jednu jasnou částku za všechno.',
      badge: 'Prvních 14 dní zcela zdarma',
      price: '300',
      period: 'Kč / měsíc',
      items: [
        'Hotový moderní web',
        'Jednoduchá administrace',
        'Samostatná úprava obsahu',
        'Hosting a technický provoz',
        'Optimalizace pro mobily',
        'Základní SEO nastavení'
      ],
      btn: 'Začít 14denní zkušební dobu',
      disclaimer: 'Předplatné můžete během 14 dnů jednoduše zrušit a nepokračovat.'
    },
    vip: {
      title: 'Potřebujete individuální řešení?',
      subtitle: 'Pokud hledáte unikátní design na míru, rádi vám ho vytvoříme.',
      btn: 'Kontaktujte nás'
    },
    faq: {
      title: 'Časté dotazy',
      q1: 'Musím rozumět webům nebo technickým věcem?',
      a1: 'Vůbec ne. Náš systém je navržený tak, aby ho zvládl ovládat každý. Nepotřebujete znát žádný kód.',
      q2: 'Můžu si texty, ceny a fotky měnit sám/sama?',
      a2: 'Ano, to je hlavní výhoda našeho řešení. Kdykoliv se přihlásíte do administrace a jednoduše upravíte ceník nebo přidáte novou fotku.',
      q3: 'Co je v ceně 300 Kč měsíčně?',
      a3: 'Cena zahrnuje pronájem hotového webu, přístup do administrace, bezpečný hosting a pravidelné technické aktualizace.',
      q4: 'Co se stane po 14 dnech zdarma?',
      a4: 'Před koncem zkušební doby vás upozorníme. Pokud předplatné nezrušíte, začne se vám strhávat 300 Kč měsíčně.',
      q5: 'Je web vhodný i pro mobil?',
      a5: 'Ano, všechny naše šablony jsou plně responzivní a vypadají skvěle na počítači, tabletu i mobilu.',
      q6: 'Jak rychle můžu začít?',
      a6: 'Prakticky okamžitě. Po registraci si vyberete vzhled a můžete začít plnit web svým obsahem.'
    },
    finalCta: {
      title: 'Vyzkoušejte hotový web pro beauty podnikání zdarma',
      subtitle: 'Začněte bez velkých nákladů a spravujte si vše sami.',
      btn: 'Vyzkoušet 14 dní zdarma'
    },
    footer: {
      desc: 'Hotové weby s jednoduchou administrací pro salony krásy a beauty studia.',
      product: 'Produkt',
      support: 'Podpora',
      contact: 'Kontakt',
      terms: 'Obchodní podmínky',
      privacy: 'Ochrana osobních údajů',
      rights: 'Všechna práva vyhrazena.',
      madeFor: 'Vytvořeno pro beauty byznys.'
    }
  },
  uk: {
    nav: {
      howItWorks: 'Як це працює',
      whatToEdit: 'Що можна змінити',
      demo: 'Демо',
      pricing: 'Ціна',
      faq: 'FAQ',
      login: 'Увійти',
      tryFree: 'Спробувати безкоштовно'
    },
    hero: {
      badge: 'Тепер доступно',
      title1: 'Стильний сайт для вашого салону.',
      title2: 'Без розробника.',
      subtitle: 'Отримайте готовий сайт із простою адмінкою. Керуйте фото, послугами та цінами самостійно. Швидкий старт для beauty-бізнесу.',
      btnFree: 'Спробувати безкоштовно',
      btnDemo: 'Переглянути демо',
      check1: '14 днів безкоштовно',
      check2: 'Потім 300 Kč / місяць'
    },
    benefits: {
      b1Title: 'Швидкий старт',
      b1Desc: 'Ваш сайт готовий майже одразу після реєстрації. Жодного довгого очікування на програмістів.',
      b2Title: 'Просте керування',
      b2Desc: 'Змінюйте тексти, фото та прайс самостійно у зручній адмінці. Це зможе кожен.',
      b3Title: 'Низький поріг входу',
      b3Desc: 'Почніть з 14 днів безкоштовно. Потім платіть лише 300 Kč на місяць без прихованих платежів.'
    },
    features: {
      title: 'Тримайте свій сайт під повним контролем',
      subtitle: 'Вам не потрібен розробник для кожної зміни. Усе найважливіше ви редагуєте самі у кілька кліків.',
      f1Title: 'Головні фото та галерея',
      f1Desc: 'Завантажуйте приклади своїх робіт',
      f2Title: 'Послуги та ціни',
      f2Desc: 'Оновлюйте прайс та послуги будь-коли',
      f3Title: 'Порядок секцій',
      f3Desc: 'Налаштовуйте структуру сторінки',
      f4Title: 'Вигляд та кольори',
      f4Desc: 'Адаптуйте дизайн під ваш бренд'
    },
    howItWorks: {
      title: 'Як це працює?',
      subtitle: 'Від ідеї до готового сайту менш ніж за годину.',
      s1Title: 'Виберіть шаблон',
      s1Desc: 'Зареєструйтесь та оберіть дизайн, який підходить вашому салону.',
      s2Title: 'Додайте контент',
      s2Desc: 'Вставте свій логотип, фото, послуги, ціни та контакти.',
      s3Title: 'Сайт готовий',
      s3Desc: 'Опублікуйте сайт для своїх клієнтів одним кліком.'
    },
    demo: {
      title: 'Подивіться, як може виглядати ваш сайт',
      subtitle: 'Спробуйте живе демо. Чистий дизайн, який продає ваші послуги.',
      btnLive: 'Переглянути живе демо'
    },
    audience: {
      title: 'Створено спеціально для beauty-бізнесу',
      subtitle: 'Наша система адаптована під потреби малого beauty-бізнесу. Жодних зайвих функцій, лише те, що вам дійсно потрібно.',
      items: ['Салони краси', 'Студії манікюру', 'Lash & brow студії', 'Косметологічні студії', 'Перукарні', 'Масажні салони']
    },
    comparison: {
      title: 'Чому це вигідніше?',
      subtitle: 'Порівняння зі звичайним сайтом на замовлення.',
      tradTitle: 'Звичайний сайт на замовлення',
      tradItems: [
        'Висока стартова ціна (десятки тисяч)',
        'Очікування тижнями або місяцями',
        'Залежність від розробника при змінах',
        'Складні системи управління (WordPress)',
        'Окрема оплата за хостинг та підтримку'
      ],
      salonTitle: 'SalonWeb',
      salonItems: [
        'Нульові стартові витрати (14 днів безкоштовно)',
        'Сайт готовий та запущений за кілька хвилин',
        'Усе редагуєте самі без програміста',
        'Надзвичайно проста адмінка',
        'Хостинг та підтримка у ціні (300 Kč/місяць)'
      ]
    },
    pricing: {
      title: 'Проста та чесна ціна',
      subtitle: 'Жодних прихованих платежів. Ви платите одну фіксовану суму за все.',
      badge: 'Перші 14 днів абсолютно безкоштовно',
      price: '300',
      period: 'Kč / місяць',
      items: [
        'Готовий сучасний сайт',
        'Проста адмінка',
        'Самостійне редагування контенту',
        'Хостинг та технічна підтримка',
        'Оптимізація для мобільних',
        'Базові SEO налаштування'
      ],
      btn: 'Почати 14 днів безкоштовно',
      disclaimer: 'Ви можете легко скасувати підписку протягом 14 днів та не продовжувати її.'
    },
    vip: {
      title: 'Потрібне індивідуальне рішення?',
      subtitle: 'Якщо ви шукаєте унікальний дизайн на замовлення, ми з радістю його створимо.',
      btn: 'Зв\'яжіться з нами'
    },
    faq: {
      title: 'Часті питання',
      q1: 'Чи потрібно мені розбиратися в сайтах або програмуванні?',
      a1: 'Зовсім ні. Наша система створена так, щоб нею міг керувати кожен. Вам не потрібно знати код.',
      q2: 'Чи можу я сама змінювати тексти, ціни та фото?',
      a2: 'Так, це головна перевага нашого рішення. Ви можете будь-коли зайти в адмінку і легко оновити прайс або додати нове фото.',
      q3: 'Що входить у вартість 300 Kč на місяць?',
      a3: 'Ціна включає оренду готового сайту, доступ до адмінки, безпечний хостинг та регулярні технічні оновлення.',
      q4: 'Що станеться після 14 днів безкоштовно?',
      a4: 'Перед закінченням тестового періоду ми вас попередимо. Якщо ви не скасуєте підписку, почне списуватися 300 Kč на місяць.',
      q5: 'Чи адаптований сайт для мобільних телефонів?',
      a5: 'Так, усі наші шаблони повністю адаптивні і чудово виглядають на комп\'ютері, планшеті та мобільному.',
      q6: 'Як швидко я можу почати?',
      a6: 'Практично одразу. Після реєстрації ви обираєте дизайн і можете наповнювати сайт своїм контентом.'
    },
    finalCta: {
      title: 'Спробуйте готовий сайт для beauty-бізнесу безкоштовно',
      subtitle: 'Почніть без великих витрат і керуйте всім самостійно.',
      btn: 'Спробувати 14 днів безкоштовно'
    },
    footer: {
      desc: 'Готові сайти з простою адмінкою для салонів краси та beauty-студій.',
      product: 'Продукт',
      support: 'Підтримка',
      contact: 'Контакти',
      terms: 'Умови використання',
      privacy: 'Політика конфіденційності',
      rights: 'Всі права захищені.',
      madeFor: 'Створено для beauty-бізнесу.'
    }
  },
  en: {
    nav: {
      howItWorks: 'How it works',
      whatToEdit: 'What you can edit',
      demo: 'Demo',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Log in',
      tryFree: 'Try for free'
    },
    hero: {
      badge: 'Now available',
      title1: 'Stylish website for your salon.',
      title2: 'Without a developer.',
      subtitle: 'Get a ready-made website with a simple admin panel. Manage photos, services, and prices yourself. Quick start for beauty businesses.',
      btnFree: 'Try for free',
      btnDemo: 'View demo',
      check1: '14 days free',
      check2: 'Then 300 CZK / month'
    },
    benefits: {
      b1Title: 'Quick start',
      b1Desc: 'Your website is ready almost immediately after registration. No long waiting for developers.',
      b2Title: 'Easy management',
      b2Desc: 'Change texts, photos, and prices yourself in a clear admin panel. Anyone can do it.',
      b3Title: 'Low entry cost',
      b3Desc: 'Start with a 14-day free trial. Then pay only a transparent 300 CZK per month.'
    },
    features: {
      title: 'Keep your website fully under control',
      subtitle: 'You don\'t need a developer for every change. Edit everything important yourself in a few clicks.',
      f1Title: 'Main photos and gallery',
      f1Desc: 'Upload examples of your work',
      f2Title: 'Services and pricing',
      f2Desc: 'Update your offer and prices anytime',
      f3Title: 'Section order',
      f3Desc: 'Customize the page layout',
      f4Title: 'Appearance and colors',
      f4Desc: 'Match the website to your brand'
    },
    howItWorks: {
      title: 'How it works?',
      subtitle: 'From an idea to a finished website in less than an hour.',
      s1Title: 'Choose a template',
      s1Desc: 'Register and select a design that fits your salon.',
      s2Title: 'Add content',
      s2Desc: 'Insert your logo, photos, services, prices, and contact details.',
      s3Title: 'Website is ready',
      s3Desc: 'Publish the website for your clients with one click.'
    },
    demo: {
      title: 'See how your website could look',
      subtitle: 'Try the live demo. Clean design that sells your services.',
      btnLive: 'View live demo'
    },
    audience: {
      title: 'Designed specifically for the beauty business',
      subtitle: 'Our system is tailored to the needs of small beauty businesses. No unnecessary features, just what you really need.',
      items: ['Beauty salons', 'Nail studios', 'Lash & brow studios', 'Cosmetic studios', 'Hair salons', 'Massage salons']
    },
    comparison: {
      title: 'Why is it better?',
      subtitle: 'Comparison with traditional custom website development.',
      tradTitle: 'Traditional custom website',
      tradItems: [
        'High initial cost (tens of thousands)',
        'Waiting weeks or months to launch',
        'Dependency on a developer for every change',
        'Complex content management systems (WordPress)',
        'Need to solve hosting and maintenance separately'
      ],
      salonTitle: 'SalonWeb',
      salonItems: [
        'Zero initial costs (14 days free)',
        'Website ready and launched in minutes',
        'Edit everything yourself without a programmer',
        'Extremely simple administration',
        'Hosting and maintenance included (300 CZK/month)'
      ]
    },
    pricing: {
      title: 'Simple and fair pricing',
      subtitle: 'No hidden fees. You pay one clear amount for everything.',
      badge: 'First 14 days completely free',
      price: '300',
      period: 'CZK / month',
      items: [
        'Ready-made modern website',
        'Simple administration',
        'Independent content editing',
        'Hosting and technical operation',
        'Mobile optimization',
        'Basic SEO setup'
      ],
      btn: 'Start 14-day free trial',
      disclaimer: 'You can easily cancel your subscription within 14 days and choose not to continue.'
    },
    vip: {
      title: 'Need a custom solution?',
      subtitle: 'If you are looking for a unique custom design, we will be happy to create it for you.',
      btn: 'Contact us'
    },
    faq: {
      title: 'Frequently asked questions',
      q1: 'Do I need to understand websites or technical things?',
      a1: 'Not at all. Our system is designed so that anyone can use it. You don\'t need to know any code.',
      q2: 'Can I change texts, prices, and photos myself?',
      a2: 'Yes, that is the main advantage of our solution. You can log into the administration anytime and easily update the price list or add a new photo.',
      q3: 'What is included in the 300 CZK per month?',
      a3: 'The price includes renting the ready-made website, access to the administration, secure hosting, and regular technical updates.',
      q4: 'What happens after 14 days free?',
      a4: 'We will notify you before the end of the trial period. If you do not cancel the subscription, you will be charged 300 CZK per month.',
      q5: 'Is the website suitable for mobile?',
      a5: 'Yes, all our templates are fully responsive and look great on a computer, tablet, and mobile.',
      q6: 'How fast can I start?',
      a6: 'Practically immediately. After registration, you choose the appearance and can start filling the website with your content.'
    },
    finalCta: {
      title: 'Try a ready-made website for beauty businesses for free',
      subtitle: 'Start without high costs and manage everything yourself.',
      btn: 'Try 14 days free'
    },
    footer: {
      desc: 'Ready-made websites with simple administration for beauty salons and studios.',
      product: 'Product',
      support: 'Support',
      contact: 'Contact',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
      madeFor: 'Created for the beauty business.'
    }
  }
};

// Image dictionary to easily swap localized images based on language
export const localizedImages = {
  cs: {
    heroMockup: '/site.png',
    adminMockup: '/adminka2.png',
    editorMockups: ['/adminka3.png', '/adminka4.png', '/adminka5.png'],
    audience: 'https://picsum.photos/seed/audience-cs/1000/1000',
  },
  uk: {
    heroMockup: '/site.png',
    adminMockup: '/adminka.png',
    editorMockups: ['/adminka.png', '/adminka2.png', '/site.png'],
    audience: 'https://picsum.photos/seed/audience-uk/1000/1000',
  },
  en: {
    heroMockup: '/site.png',
    adminMockup: '/adminka.png',
    editorMockups: ['/site.png', '/adminka3.png', '/adminka.png'],
    audience: 'https://picsum.photos/seed/audience-en/1000/1000',
  }
};
