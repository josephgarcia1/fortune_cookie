const intro_phrases = [
    "You eagerly crack open the cookie and your fortune is...",
    "As you break the cookie, the hidden message unfolds...",
    "The fortune cookie splits in half, revealing your destiny...",
    "You hold the cookie in your hands, anxious to discover its message...",
    "The crisp sound of the cookie breaking hints at what lies inside...",
    "With anticipation, you open the cookie and find your fortune...",
    "The cookie's shell gives way, uncovering the prophecy within...",
    "You carefully break the cookie, hoping for a glimpse into the future...",
    "The cookie cracks apart, revealing the secret it holds...",
    "You unwrap the cookie, curious about the wisdom it contains...",
    "As you snap the cookie in two, its revelation is unveiled...",
    "You split open the cookie, eager to read your fate...",
    "The fortune cookie shatters, granting you a glimpse of what's to come...",
    "With a gentle snap, the cookie reveals its hidden message...",
    "You crack the cookie, eager to unravel the mystery within...",
    "The fortune cookie breaks apart, leaving you with a glimpse into your future...",
    "As you open the cookie, a prophetic message is revealed...",
    "You pry open the cookie, expecting a profound insight...",
    "The cookie yields to your touch, exposing its mystical contents...",
    "The fortune cookie splits, bestowing upon you its divination...",
    "You hold the fortune cookie in your hands, ready to uncover its hidden prophecy...",
    "With a gentle twist, the cookie opens up to reveal your destined path...",
    "As you crack open the cookie, a message of fate emerges...",
    "The fortune cookie breaks into pieces, offering a glimpse into your future...",
    "With a sense of wonder, you open the cookie, awaiting its mystical revelation...",
    "The cookie's shell cracks, releasing the secrets of the universe...",
    "You split the cookie, and within it lies a glimpse into the unknown...",
    "The fortune cookie's fragile exterior gives way, unraveling your destiny...",
    "You break the cookie, unleashing the words that hold your future...",
    "With anticipation, you unfold the cookie's prophecy, eager to uncover its wisdom..."
    ];

const chineseZodiacSigns = [
  { sign: 'Rat', compatible: ['Dragon', 'Monkey', 'Ox'], incompatible: ['Horse', 'Rabbit'] },
  { sign: 'Ox', compatible: ['Snake', 'Rooster'], incompatible: ['Goat', 'Dog'] },
  { sign: 'Tiger', compatible: ['Horse', 'Dog'], incompatible: ['Monkey', 'Snake'] },
  { sign: 'Rabbit', compatible: ['Sheep', 'Dog', 'Pig'], incompatible: ['Rooster', 'Rat'] },
  { sign: 'Dragon', compatible: ['Rat', 'Monkey', 'Rooster'], incompatible: ['Dog'] },
  { sign: 'Snake', compatible: ['Rooster', 'Ox'], incompatible: ['Pig'] },
  { sign: 'Horse', compatible: ['Tiger', 'Dog'], incompatible: ['Rat', 'Ox'] },
  { sign: 'Goat', compatible: ['Rabbit', 'Pig', 'Horse'], incompatible: ['Ox'] },
  { sign: 'Monkey', compatible: ['Dragon', 'Rat'], incompatible: ['Tiger'] },
  { sign: 'Rooster', compatible: ['Ox', 'Dragon', 'Snake'], incompatible: ['Rabbit'] },
  { sign: 'Dog', compatible: ['Tiger', 'Rabbit', 'Horse'], incompatible: ['Dragon'] },
  { sign: 'Pig', compatible: ['Tiger', 'Rabbit', 'Sheep'], incompatible: ['Snake'] }
];

const goodFortunes = [
    "A great opportunity will come your way soon.",
    "Your hard work will pay off and lead to success.",
    "You will find joy and happiness in unexpected places.",
    "A new friendship will bring you much joy and laughter.",
    "Your creative ideas will be recognized and appreciated.",
    "Luck is on your side; expect a positive outcome.",
    "A long-held wish or dream will come true.",
    "Your kindness and generosity will be rewarded.",
    "New beginnings are on the horizon; embrace them.",
    "A pleasant surprise awaits you in the near future.",
    "Your talents and abilities will shine brightly.",
    "A prosperous and fulfilling journey lies ahead.",
    "Good fortune will follow you wherever you go.",
    "Your positive attitude will attract success.",
    "A loving relationship will bring you happiness.",
    "You will overcome obstacles and achieve your goals.",
    "Your determination will lead to triumph.",
    "Abundance and prosperity are on their way.",
    "Take a leap of faith; amazing things await you.",
    "You will receive recognition for your hard work.",
    "A period of harmony and peace is approaching.",
    "Your efforts will be acknowledged and rewarded.",
    "You have the power to create the life you desire.",
    "Positive changes are coming into your life.",
    "You are surrounded by love and support.",
  ];

const badFortunes = [
    "Beware of hasty decisions, they may lead to regret.",
    "Trouble may be brewing in your personal relationships. Take time to address the issues.",
    "Financial challenges may be on the horizon. Be prepared and exercise caution in your expenses.",
    "Your current path may lead to disappointment. Consider exploring new opportunities.",
    "Miscommunication could lead to misunderstandings. Be clear and patient in your interactions.",
    "Don't ignore your health. Take care of your well-being to avoid potential problems.",
    "A setback may be imminent. Stay resilient and learn from the experience.",
    "Be cautious of new ventures. Thoroughly evaluate risks before proceeding.",
    "A relationship may be heading for rough waters. Open communication and understanding are crucial.",
    "Avoid unnecessary conflicts and strive for harmony in your interactions.",
    "Financial instability may cause stress. Create a budget and seek professional advice if needed.",
    "Be wary of deceitful individuals. Trust your instincts and protect yourself.",
    "A mistake from the past may resurface. Take responsibility and work towards resolution.",
    "Challenges may arise in your career. Stay focused and adaptable to overcome obstacles.",
    "Avoid impulsive actions that may lead to regret. Think carefully before making decisions.",
    "Your current approach may not yield the desired results. Consider alternative strategies.",
    "Be cautious of overextending yourself. Pace your efforts and prioritize self-care.",
    "A friendship may be strained. Invest time and effort in nurturing the relationship.",
    "Financial losses may occur. Take measures to safeguard your assets.",
    "Avoid taking shortcuts. Uphold integrity and follow the right path.",
    "A missed opportunity may bring regret. Stay alert and seize chances when they arise.",
    "Expect delays and obstacles in your plans. Patience and persistence will be key.",
    "Don't ignore warning signs. Address potential problems proactively.",
    "Your current approach may lead to failure. Consider adjusting your strategy.",
    "Be mindful of your words and actions. They may have unintended consequences.",
    "A conflict may arise. Seek peaceful resolutions and find common ground."
];

const getRndElement = (array) => {//return random element of array
    const rnd_index = Math.floor(Math.random() * (array.length));
    return array[rnd_index];
};

const getLuckyNumbers = () => {//generate 6 unique numbers from 1 to 59
    const random_numbers = [];
    const min = 1;
    const max = 60;

    while (random_numbers.length < 6) {
        const random_number = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!random_numbers.includes(random_number)) {
            random_numbers.push(random_number);
        }
    }

    return random_numbers;
};

const final_message = {
    _intro_phrases: getRndElement(intro_phrases),
    _zodiac_sign: getRndElement(chineseZodiacSigns),
    _good_fortune: getRndElement(goodFortunes),
    _bad_fortune: getRndElement(badFortunes),
    _lucky_numbers: getLuckyNumbers(),

    get finalMessage() {
        return this._intro_phrases + '\n' + 
            "Your Fortune Cookie's Chinese Zodiac Sign: " + this._zodiac_sign.sign + '\n' + 
            "Compatible Sign(s): " + this._zodiac_sign.compatible.join(', ') + '\n' + 
            "Incompatible Sign(s): " + this._zodiac_sign.incompatible.join(', ') + '\n' +
            "Your fortune if you are compatible with your Fortune Cookie's Sign: " + this._good_fortune + '\n' +
            "Your fortune if you are incompatible with your Fortune Cookie's Sign: " + this._bad_fortune + '\n' +
            "Lucky Numbers: " + this._lucky_numbers.join(', ');
    }
};

console.log(final_message.finalMessage);

//added chinese zodiac signs array objects
//added good fortunes
//added bad fortunes
//added final message get function for the object
//redid random element generator function 