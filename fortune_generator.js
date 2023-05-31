
const getRndIndex = (array_length) =>{ //returns random index
    return Math.floor(Math.random() * (array_length));
}

const intro_phrases = [// generate intro prases
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



const getRndPhrase = (phrases_array) => {
    return phrases_array[getRndIndex(phrases_array.length)];
};

const final_message = {
    intro_phrases: getRndPhrase(intro_phrases)
};

console.log(final_message.intro_phrases);