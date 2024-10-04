const TelegramBot = require('node-telegram-bot-api');

// Replace with your token from BotFather
const token = '8122561610:AAGpedqH6X1Qtwf4d0SKjhecPT1mkOZo7U8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Define a library of common essays/paragraphs
const essays = {
    cow: `The cow is a domestic animal. It is found all over the world. It has a large body with four legs, a tail, two ears, and two horns. Cows provide us with milk, which is a great source of nutrition. They are herbivores, feeding mainly on grass and other plants. In many cultures, cows are considered sacred animals. Farmers also use them for plowing fields in certain areas. The cow plays an essential role in agriculture and rural economies, and its milk products, like butter and cheese, are consumed globally.`,
    
    dog: `The dog is a loyal and faithful animal. It is a popular pet in many households around the world. Dogs are known for their keen sense of smell, sharp hearing, and agility. They are often called 'man's best friend' because of their companionship, loyalty, and assistance. Many people keep dogs for protection, as guide animals for the visually impaired, or for search and rescue missions. There are many breeds of dogs, each with unique characteristics and temperaments.`,
    
    tiger: `The tiger is one of the most powerful and majestic animals in the wild. It is a large carnivorous mammal with a striking orange coat with black stripes. Tigers are found mostly in forests and grasslands across Asia. They are solitary hunters and prefer to live alone. Due to poaching and habitat destruction, tigers are now endangered, and conservation efforts are in place to protect them from extinction.`,
    
    tree: `Trees are an essential part of our environment. They provide us with oxygen, absorb carbon dioxide, and help reduce pollution. Trees also provide shade, food, and shelter for animals and humans. Their roots help prevent soil erosion, and they play a vital role in maintaining the ecological balance of our planet. Deforestation, however, is a major threat to our environment, and it is important to plant more trees to maintain this balance.`,
    
    school: `A school is a place where students go to learn new things and acquire knowledge. It is a foundation for education, where teachers help shape the minds of young children. Schools teach a variety of subjects such as mathematics, science, literature, and social studies. They also promote personal growth, teamwork, and discipline. A good education is vital for success in life, and schools play a significant role in developing a student's character and future.`,
    
    environment: `The environment is everything around us, including air, water, plants, and animals. A clean and healthy environment is essential for the survival of all living beings. Unfortunately, human activities such as pollution, deforestation, and industrialization have caused significant damage to the environment. To preserve the environment for future generations, it is important to adopt sustainable practices, reduce waste, and protect natural resources.`,
    
    internet: `The internet is a vast network that connects millions of computers and devices worldwide. It has transformed the way we communicate, work, and entertain ourselves. With the internet, people can access information, send messages, shop online, and even work from home. However, the internet also has its drawbacks, including the spread of misinformation, cybercrime, and privacy concerns. Despite these challenges, the internet remains one of the most powerful tools of the modern era.`,
    
    technology: `Technology refers to the application of scientific knowledge for practical purposes. Over the years, technology has made tremendous advancements in fields like communication, medicine, transportation, and education. From smartphones and computers to space exploration and artificial intelligence, technology has transformed the way we live. While it has made our lives more convenient, it is important to use technology responsibly and be aware of its impact on society and the environment.`,
    
    health: `Health is the state of being physically, mentally, and socially well. It is one of the most important aspects of life because without good health, we cannot enjoy the things we love. To maintain good health, we should eat a balanced diet, exercise regularly, get enough sleep, and avoid harmful habits like smoking or excessive drinking. Mental health is just as important as physical health, and taking care of both can lead to a happier and more fulfilling life.`,
    
    pollution: `Pollution is the introduction of harmful substances into the environment. It affects the air we breathe, the water we drink, and the land we live on. Major types of pollution include air, water, soil, and noise pollution. Human activities like industrialization, deforestation, and the use of plastic contribute to pollution. To protect the planet, we must adopt eco-friendly habits such as recycling, conserving energy, and reducing waste. Governments and individuals alike need to take action to reduce pollution and preserve the Earth's natural beauty.`
};

// Listener for any message sent to the bot
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase(); // Convert text to lowercase for easy matching

    // Respond to '/start' with bot introduction
    if (text === '/start') {
        bot.sendMessage(chatId, "I am a bot made by Ahnaf Tahsin. AT WEB=at1123.github.io/a.tahsin");
    }
    // Respond with username and password for 'web pass'
    else if (text === 'web pass') {
        bot.sendMessage(chatId, "Username: 10\nPassword: 12023");
    }
    // Provide essays based on the user's keyword input
    else if (essays[text]) {
        bot.sendMessage(chatId, essays[text]);
    }
    // For any other message, echo back what the user said
    else {
        bot.sendMessage(chatId, `You said: ${msg.text}`);
    }
});

console.log('Bot is running...');
