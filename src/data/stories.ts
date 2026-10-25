import { Story } from '../types';

export const stories: Story[] = [
  {
    id: 'creation',
    title: 'In the Beginning',
    description: 'Experience the wonder of God creating the heavens and the earth in six glorious days.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🌍',
    color: 'from-blue-500 to-green-500',
    scenes: [
      {
        id: 0,
        background: 'void',
        dialogue: [
          { speaker: 'Narrator', text: 'In the beginning... there was nothing. Only darkness covered the deep waters.', background: 'void' },
          { speaker: 'Narrator', text: 'But the Spirit of God was hovering over the waters, waiting...', background: 'void' },
          { speaker: 'God', text: '"Let there be light!"', background: 'void', character: 'god', verse: 'Genesis 1:3' },
          { speaker: 'Narrator', text: 'And suddenly — LIGHT burst forth! Brilliant, beautiful light filled everything!', background: 'light-burst', character: 'god', emotion: 'glorious' },
          { speaker: 'God', text: '"This is good." And God separated the light from the darkness. He called the light "Day" and the darkness "Night."', verse: 'Genesis 1:4-5', character: 'god' },
          { speaker: 'Narrator', text: 'And there was evening, and there was morning — the first day.', background: 'first-day' },
          {
            speaker: 'Narrator',
            text: 'What do you think God felt when He created light for the very first time?',
            choices: [
              { text: '🎨 Joyful — like an artist starting a masterpiece!', nextScene: 1, response: 'Yes! God was filled with joy, creating something beautiful from nothing!' },
              { text: '💪 Powerful — showing His mighty strength!', nextScene: 1, response: 'Absolutely! God\'s power is beyond anything we can imagine!' },
              { text: '❤️ Loving — preparing a home for us!', nextScene: 1, response: 'What a beautiful thought! God was lovingly preparing a home for all He would create!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'sky-sea',
        dialogue: [
          { speaker: 'Narrator', text: 'Day Two came, and God looked at the waters below and the waters above.', background: 'sky-sea' },
          { speaker: 'God', text: '"Let there be a vast space between the waters. Let it separate the waters below from the waters above."', verse: 'Genesis 1:6', character: 'god' },
          { speaker: 'Narrator', text: 'And so God stretched out the sky — a magnificent dome of blue! He separated the waters of the clouds from the seas below.', background: 'sky-sea', character: 'narrator' },
          { speaker: 'Narrator', text: 'Imagine standing on the earth and looking up at that perfect blue sky for the very first time... no clouds, no pollution — just pure, perfect blue!', background: 'sky-sea' },
          { speaker: 'Narrator', text: 'Then God said, "Let the waters below the sky be gathered into one place, and let dry ground appear."', verse: 'Genesis 1:9', character: 'god' },
          { speaker: 'Narrator', text: 'Mountains rose from the sea! Valleys formed! Rivers carved their paths! The earth took shape!', background: 'mountains' },
          {
            speaker: 'Narrator',
            text: 'God called the dry ground "Earth" and the gathered waters "Seas." What would you want to see God create next?',
            choices: [
              { text: '🌱 Plants and trees!', nextScene: 2, response: 'Great choice! God made every kind of plant and tree!' },
              { text: '🐾 Animals!', nextScene: 2, response: 'Wonderful! God filled the earth with amazing creatures!' },
              { text: '✨ More light — like stars!', nextScene: 2, response: 'Beautiful thinking! God did make the stars too!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'garden',
        dialogue: [
          { speaker: 'Narrator', text: 'On the third day, God spoke again, and the earth exploded with LIFE!', background: 'garden' },
          { speaker: 'God', text: '"Let the land produce vegetation: seed-bearing plants and trees bearing fruit with seed in it."', verse: 'Genesis 1:11', character: 'god' },
          { speaker: 'Narrator', text: 'Flowers of every color bloomed! Great towering trees reached toward the sky! Lush green grass covered the land! Fruit trees heavy with delicious fruit appeared everywhere!', background: 'garden' },
          { speaker: 'Narrator', text: 'God saw all that He had made, and it was VERY GOOD.', verse: 'Genesis 1:12', character: 'god', emotion: 'pleased' },
          { speaker: 'Narrator', text: 'Then God said, "Let there be lights in the sky to separate day from night. Let them mark seasons and days and years."', verse: 'Genesis 1:14', character: 'god' },
          { speaker: 'Narrator', text: 'He made the great light to govern the day — the SUN! And the lesser light to govern the night — the MOON! And He made the STARS too!', background: 'stars' },
          { speaker: 'Narrator', text: 'How many stars do you think God made? The Bible says He determines the number of the stars and calls them each by name!', verse: 'Psalm 147:4' },
          {
            speaker: 'Narrator',
            text: 'Think about it — God knows EVERY star by name, just like He knows YOU by name! How does that make you feel?',
            choices: [
              { text: '🥰 Special and loved!', nextScene: 3, response: 'You ARE special and loved! The Creator of the universe knows your name!' },
              { text: '🤯 Amazed and humbled!', nextScene: 3, response: 'God\'s love is truly amazing — He who made the stars cares for each of us personally!' },
              { text: '🙏 Grateful!', nextScene: 3, response: 'What a grateful heart! We have so much to thank God for!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'ocean-creatures',
        dialogue: [
          { speaker: 'Narrator', text: 'On the fifth day, God looked at the seas and the sky and said:', background: 'ocean-creatures' },
          { speaker: 'God', text: '"Let the water teem with living creatures, and let birds fly above the earth across the sky!"', verse: 'Genesis 1:20', character: 'god' },
          { speaker: 'Narrator', text: 'Suddenly the oceans were ALIVE! Whales the size of buses! Dolphins jumping and playing! Colorful fish of every shape! And in the sky — eagles soaring, hummingbirds hovering, parrots flashing with color!', background: 'ocean-creatures' },
          { speaker: 'God', text: '"Be fruitful and multiply. Fill the waters and let the birds increase on the earth."', verse: 'Genesis 1:22', character: 'god', emotion: 'joyful' },
          { speaker: 'Narrator', text: 'Then on the sixth day, God made the land animals — lions and elephants, dogs and cats, butterflies and dinosaurs... every kind of creature!', background: 'animals' },
          { speaker: 'Narrator', text: 'But God wasn\'t finished yet. He had one more creation — the most special of all...', background: 'animals' },
          {
            speaker: 'Narrator',
            text: 'What do you think God\'s most special creation was?',
            choices: [
              { text: '👨👩👧👦 People — us!', nextScene: 4, response: 'Yes! God saved the best for last — He made PEOPLE in His own image!' },
              { text: '🦁 The lions — they\'re so majestic!', nextScene: 4, response: 'Lions are amazing! But God had something even more special planned...' },
              { text: '🤔 I\'m not sure...', nextScene: 4, response: 'Let me tell you — God saved His greatest creation for last: PEOPLE!' }
            ]
          }
        ]
      },
      {
        id: 4,
        background: 'eden',
        dialogue: [
          { speaker: 'God', text: '"Let Us make mankind in Our image, in Our likeness."', verse: 'Genesis 1:26', character: 'god', emotion: 'loving' },
          { speaker: 'Narrator', text: 'This was different from everything else God had made. God didn\'t just speak people into existence from afar — He formed them carefully, with intention and love.', background: 'eden' },
          { speaker: 'Narrator', text: 'God formed the first man, Adam, from the dust of the ground and breathed into his nostrils the breath of life. And Adam became a living being!', verse: 'Genesis 2:7' },
          { speaker: 'Narrator', text: 'Then God created Eve, a helper and partner for Adam. Together, they were the first humans — made in God\'s very own image!', background: 'eden' },
          { speaker: 'God', text: '"Be fruitful and multiply. Fill the earth and subdue it. I give you every seed-bearing plant and every tree that has fruit with seed. They will be yours for food."', verse: 'Genesis 1:28-29', character: 'god' },
          { speaker: 'Narrator', text: 'God placed them in the Garden of Eden — a perfect paradise with every beautiful tree and delicious fruit. Rivers of fresh water flowed through it. Everything was perfect.', background: 'eden' },
          { speaker: 'God', text: '"Look at everything I have made... it is VERY GOOD."', verse: 'Genesis 1:31', character: 'god', emotion: 'glorious' },
          {
            speaker: 'Narrator',
            text: 'God created everything — the light, the sky, the land, the plants, the animals, and finally YOU. You are fearfully and wonderfully made! What will you remember most about this story?',
            choices: [
              { text: '⭐ God made everything from nothing!', nextScene: 5, response: 'Yes! God spoke and worlds came into being! His power is limitless!' },
              { text: '❤️ God made people in His image!', nextScene: 5, response: 'That\'s amazing! You carry God\'s image — you reflect who He is!' },
              { text: '🌟 Everything God made was GOOD!', nextScene: 5, response: 'Yes! God looked at everything and called it very good — including you!' }
            ]
          }
        ]
      },
      {
        id: 5,
        background: 'eden',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'eden' },
          { speaker: 'Narrator', text: '✨ God created everything in six days — light, sky, land, plants, sun/moon/stars, sea creatures, birds, animals, and people.' },
          { speaker: 'Narrator', text: '✨ Everything God made was GOOD — and people were VERY GOOD!' },
          { speaker: 'Narrator', text: '✨ We are made in God\'s image — we reflect His love, creativity, and care.' },
          { speaker: 'Narrator', text: '✨ God knows every star by name — and He knows YOU by name too!' },
          { speaker: 'Narrator', text: '🙏 "The heavens declare the glory of God; the skies proclaim the work of His hands." — Psalm 19:1' },
          { speaker: 'Narrator', text: 'Thank you for exploring Creation with us! God\'s story continues... 📖✨' }
        ]
      }
    ]
  },
  {
    id: 'david-goliath',
    title: 'David & Goliath',
    description: 'The brave young shepherd who trusted God and defeated the giant warrior.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '⚔️',
    color: 'from-red-500 to-yellow-500',
    scenes: [
      {
        id: 0,
        background: 'battlefield',
        dialogue: [
          { speaker: 'Narrator', text: 'The Israelite army was terrified. For forty days, a giant warrior had been mocking them.', background: 'battlefield' },
          { speaker: 'Goliath', text: '"Why do you send out your army to fight me? I\'m a Philistine, and you are servants of Saul. Choose a man and have him come down to me!"', verse: '1 Samuel 17:8', character: 'goliath', emotion: 'mocking' },
          { speaker: 'Narrator', text: 'Goliath was over nine feet tall! He wore heavy bronze armor and carried a spear with an iron point weighing 15 pounds!', background: 'battlefield', character: 'goliath' },
          { speaker: 'Goliath', text: '"If he can fight me and kill me, we will become your subjects. But if I overcome him and kill him, you will become our subjects!"', verse: '1 Samuel 17:9', character: 'goliath', emotion: 'mocking' },
          { speaker: 'Narrator', text: 'King Saul and all the Israelites were terrified. No one dared to face this giant!', background: 'battlefield' },
          {
            speaker: 'Narrator',
            text: 'How do you think the Israelite soldiers felt hearing this giant every day?',
            choices: [
              { text: '😰 Terrified and hopeless!', nextScene: 1, response: 'They were paralyzed with fear! But God had a plan...' },
              { text: '😤 Angry but scared!', nextScene: 1, response: 'Yes! They were frustrated but felt too small to do anything about it.' },
              { text: '🙏 Praying for help!', nextScene: 1, response: 'Some were surely praying! And God was about to answer in an amazing way!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'hillside',
        dialogue: [
          { speaker: 'Narrator', text: 'Meanwhile, a young shepherd boy named David was tending his father\'s sheep. David wasn\'t a soldier — he was a teenager who played the harp and wrote songs to God!', background: 'hillside', character: 'david' },
          { speaker: 'Narrator', text: 'One day, David\'s father sent him to check on his older brothers at the battlefield. When David arrived, he heard the giant\'s taunts.', background: 'battlefield', character: 'david' },
          { speaker: 'David', text: '"Who is this uncircumcised Philistine that he should defy the armies of the living God?"', verse: '1 Samuel 17:26', character: 'david', emotion: 'determined' },
          { speaker: 'Narrator', text: 'While everyone else saw an unbeatable giant, David saw an opportunity for God to show His power!', background: 'battlefield', character: 'david' },
          {
            speaker: 'Narrator',
            text: 'What made David different from all the other soldiers?',
            choices: [
              { text: '💪 He was brave!', nextScene: 2, response: 'He was brave, but his bravery came from somewhere deeper...' },
              { text: '🙏 He trusted God completely!', nextScene: 2, response: 'YES! David\'s faith in God gave him courage no armor could provide!' },
              { text: '🎯 He was a skilled slinger!', nextScene: 2, response: 'He was skilled, but his real strength came from his relationship with God!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'battlefield',
        dialogue: [
          { speaker: 'Narrator', text: 'King Saul heard about David\'s willingness to fight and sent for him.', background: 'camp', character: 'david' },
          { speaker: 'David', text: '"Let no one lose heart on account of this Philistine. Your servant will go and fight him."', verse: '1 Samuel 17:32', character: 'david', emotion: 'confident' },
          { speaker: 'Saul', text: '"You are not able to go out against this Philistine and fight him; you are only a young man, and he has been a warrior from his youth."', verse: '1 Samuel 17:33', character: 'saul' },
          { speaker: 'David', text: '"Your servant has killed both lions and bears while protecting my father\'s sheep. The Lord who rescued me from the paw of the lion and the paw of the bear will rescue me from the hand of this Philistine!"', verse: '1 Samuel 17:34-37', character: 'david', emotion: 'faithful' },
          { speaker: 'Narrator', text: 'David had already fought lions and bears to protect his sheep! He knew God was with him in every battle.', background: 'camp', character: 'david' },
          { speaker: 'Saul', text: '"Go, and the Lord be with you."', verse: '1 Samuel 17:37', character: 'saul' },
          { speaker: 'Narrator', text: 'Saul tried to put his armor on David, but David took it off.', background: 'camp', character: 'david' },
          { speaker: 'David', text: '"I cannot go in these because I am not used to them. I go against the giant in the name of the Lord Almighty — the God of the armies of Israel, whom you have defied!"', verse: '1 Samuel 17:45', character: 'david', emotion: 'determined' },
          {
            speaker: 'Narrator',
            text: 'David chose five smooth stones from a stream. What was his real weapon?',
            choices: [
              { text: '🪨 His sling and stones!', nextScene: 3, response: 'The stones were the physical weapon, but his real weapon was his faith!' },
              { text: '🙏 His faith in God!', nextScene: 3, response: 'EXACTLY! David\'s faith in the living God was his greatest weapon!' },
              { text: '❤️ His love for God\'s people!', nextScene: 3, response: 'Yes! David loved God and His people — that love gave him courage!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'battlefield',
        dialogue: [
          { speaker: 'Narrator', text: 'David walked toward the giant with just his shepherd\'s staff, his sling, and five smooth stones.', background: 'battlefield', character: 'david' },
          { speaker: 'Goliath', text: '"Am I a dog, that you come to me with sticks?" And he cursed David by his gods.', verse: '1 Samuel 17:43', character: 'goliath', emotion: 'mocking' },
          { speaker: 'Narrator', text: 'The giant laughed at this young boy. But David wasn\'t afraid...', background: 'battlefield', character: 'david' },
          { speaker: 'David', text: '"You come against me with sword and spear and javelin, but I come against you in the name of the Lord Almighty, the God of the armies of Israel, whom you have defied. This day the Lord will deliver you into my hands... and the whole world will know that there is a God in Israel!"', verse: '1 Samuel 17:45-46', character: 'david', emotion: 'bold' },
          { speaker: 'Narrator', text: 'David ran toward the battle line. He reached into his bag, took out a stone, and slung it...', background: 'battlefield', character: 'david' },
          { speaker: 'Narrator', text: 'The stone struck Goliath on his forehead! The giant fell face down on the ground!', background: 'battlefield' },
          { speaker: 'Narrator', text: 'The Philistines fled! The Israelites won a great victory! All because one young boy trusted in God!', background: 'celebration' },
          {
            speaker: 'Narrator',
            text: 'What "giants" do you face in your life that you need to trust God about?',
            choices: [
              { text: '😟 Fear and worry', nextScene: 4, response: 'Remember — your God is bigger than any fear! Trust Him like David did!' },
              { text: '📚 Difficult challenges', nextScene: 4, response: 'God gives us strength for every challenge! "I can do all things through Christ who strengthens me!" — Philippians 4:13' },
              { text: '👥 Standing up for what\'s right', nextScene: 4, response: 'It takes courage to stand up for what\'s right, but God is always with you!' }
            ]
          }
        ]
      },
      {
        id: 4,
        background: 'celebration',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'celebration' },
          { speaker: 'Narrator', text: '⚔️ No challenge is too big when we trust in God!' },
          { speaker: 'Narrator', text: '🙏 David\'s faith came from his daily relationship with God — even while tending sheep!' },
          { speaker: 'Narrator', text: '💪 Our real strength doesn\'t come from armor or weapons, but from the Lord!' },
          { speaker: 'Narrator', text: '🌟 God can use anyone — young or old — to do mighty things!' },
          { speaker: 'Narrator', text: '🙏 "The Lord is my rock, my fortress and my deliverer." — Psalm 18:2 (written by David!)' },
          { speaker: 'Narrator', text: 'What giant will you face with faith today? Remember: your God is bigger! 🌟' }
        ]
      }
    ]
  },
  {
    id: 'noah',
    title: "Noah's Ark",
    description: 'When the whole world turned away from God, one man chose to obey — and saved all of creation.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🚢',
    color: 'from-cyan-500 to-blue-600',
    scenes: [
      {
        id: 0,
        background: 'corrupt-world',
        dialogue: [
          { speaker: 'Narrator', text: 'Many years after creation, the world had become very wicked. People had turned away from God and filled the earth with violence.', background: 'corrupt-world' },
          { speaker: 'Narrator', text: 'But God was grieved in His heart. He looked for someone — anyone — who still loved Him.', background: 'corrupt-world' },
          { speaker: 'Narrator', text: 'And He found one man: Noah. Noah was righteous and walked faithfully with God.', background: 'noah-field', character: 'noah', verse: 'Genesis 6:8-9' },
          { speaker: 'God', text: '"I am going to bring floodwaters on the earth to destroy all life under the heavens. But I will establish my covenant with you."', verse: 'Genesis 6:17-18', character: 'god' },
          {
            speaker: 'Narrator',
            text: 'God told Noah to build an enormous ark — a huge boat! Can you imagine someone telling you to build a giant boat when there was no rain in sight?',
            choices: [
              { text: '😂 I would think they were crazy!', nextScene: 1, response: 'That\'s exactly what people thought! But Noah trusted God anyway.' },
              { text: '🤔 It would be hard to obey!', nextScene: 1, response: 'Yes! It takes real faith to obey God when others think you\'re foolish.' },
              { text: '🙏 I would trust God like Noah!', nextScene: 1, response: 'Wonderful! Noah\'s faith is a great example for us all!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'building-ark',
        dialogue: [
          { speaker: 'Narrator', text: 'Noah obeyed God. He built the ark exactly as God told him — 450 feet long, 75 feet wide, and 45 feet high! That\'s as tall as a four-story building!', background: 'building-ark', character: 'noah' },
          { speaker: 'Narrator', text: 'It took Noah and his family many years to build. People probably laughed at him. "Building a boat on dry land? What a fool!"', background: 'building-ark' },
          { speaker: 'Narrator', text: 'But Noah kept building. He trusted God completely.', background: 'building-ark', character: 'noah', emotion: 'faithful' },
          { speaker: 'God', text: '"Go into the ark, you and your whole family, for I have found that you alone are righteous before me in this generation."', verse: 'Genesis 7:1', character: 'god' },
          { speaker: 'Narrator', text: 'Then something amazing happened! Animals began coming — two by two! Lions, elephants, giraffes, butterflies, birds of every kind!', background: 'animals-boarding', verse: 'Genesis 7:8-9' },
          {
            speaker: 'Narrator',
            text: 'Which animal would you be most excited to see walking into the ark?',
            choices: [
              { text: '🦁 The lions — so majestic!', nextScene: 2, response: 'Even the mighty lions trusted God and walked into the ark!' },
              { text: '🐘 The elephants — so big and gentle!', nextScene: 2, response: 'Imagine elephants carefully walking up a ramp into the ark!' },
              { text: '🦒 The giraffes — how did they fit?!', nextScene: 2, response: 'Great question! The ark was HUGE — God made room for every creature!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'flood',
        dialogue: [
          { speaker: 'Narrator', text: 'Noah, his wife, his three sons and their wives, and all the animals were safely inside the ark. Then God shut the door.', background: 'flood', verse: 'Genesis 7:16' },
          { speaker: 'Narrator', text: 'The rain began. It rained for forty days and forty nights! The waters rose and covered everything — even the highest mountains!', background: 'flood' },
          { speaker: 'Narrator', text: 'But inside the ark, Noah\'s family and all the animals were safe. God was protecting them.', background: 'ark-inside' },
          { speaker: 'Narrator', text: 'After many months, the waters finally began to go down. The ark came to rest on the mountains of Ararat.', background: 'mountain-top', verse: 'Genesis 8:4' },
          { speaker: 'Narrator', text: 'Noah sent out a dove, and it returned with an olive leaf! The earth was drying! They could leave!', background: 'dove-olive', character: 'noah', verse: 'Genesis 8:11' },
          {
            speaker: 'Narrator',
            text: 'Noah waited patiently on the ark for over a year! What does this teach us about trusting God?',
            choices: [
              { text: '⏰ God\'s timing is perfect!', nextScene: 3, response: 'Yes! God always knows the right time. We just need to be patient!' },
              { text: '🙏 We must obey even when it\'s hard!', nextScene: 3, response: 'Absolutely! Noah obeyed for the entire journey, and God brought him through!' },
              { text: '🛡️ God protects those who trust Him!', nextScene: 3, response: 'Yes! Just as the ark protected Noah, God protects us when we trust Him!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'rainbow',
        dialogue: [
          { speaker: 'Narrator', text: 'Noah and his family stepped out onto the new earth. The first thing Noah did was build an altar and worship God!', background: 'rainbow', character: 'noah', verse: 'Genesis 8:20' },
          { speaker: 'God', text: '"I establish my covenant with you: Never again will all life be destroyed by the waters of a flood."', verse: 'Genesis 9:11', character: 'god' },
          { speaker: 'God', text: '"I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth."', verse: 'Genesis 9:13', character: 'god', emotion: 'loving' },
          { speaker: 'Narrator', text: 'And God placed a beautiful rainbow across the sky — a promise that He would never again destroy the earth with a flood. A sign of His love and faithfulness!', background: 'rainbow' },
          {
            speaker: 'Narrator',
            text: 'Every time you see a rainbow, what will you remember?',
            choices: [
              { text: '🌈 God keeps His promises!', nextScene: 4, response: 'YES! God always keeps His promises — every single one!' },
              { text: '❤️ God loves us and cares for us!', nextScene: 4, response: 'Absolutely! The rainbow is God\'s love letter to the whole world!' },
              { text: '🙏 I can trust God completely!', nextScene: 4, response: 'If God can paint the sky with rainbows, you can trust Him with everything!' }
            ]
          }
        ]
      },
      {
        id: 4,
        background: 'rainbow',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'rainbow' },
          { speaker: 'Narrator', text: '🚢 Noah obeyed God even when it didn\'t make sense to others.' },
          { speaker: 'Narrator', text: '🙏 Faith means trusting God even when we can\'t see the full picture.' },
          { speaker: 'Narrator', text: '🌈 God made a covenant (promise) with Noah, marked by the rainbow.' },
          { speaker: 'Narrator', text: '💝 God always keeps His promises — we can trust Him completely!' },
          { speaker: 'Narrator', text: '🙏 "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." — Jeremiah 29:11' },
          { speaker: 'Narrator', text: 'Next time you see a rainbow, remember God\'s faithful promise! 🌈✨' }
        ]
      }
    ]
  },
  {
    id: 'lost-sheep',
    title: 'The Lost Sheep',
    description: 'Jesus tells a beautiful story about how much God loves each and every one of us.',
    category: 'parables',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🐑',
    color: 'from-green-400 to-emerald-600',
    scenes: [
      {
        id: 0,
        background: 'hillside',
        dialogue: [
          { speaker: 'Narrator', text: 'One day, Jesus was teaching a crowd of people. Tax collectors and sinners were gathering around to hear Him.', background: 'hillside', character: 'jesus' },
          { speaker: 'Narrator', text: 'The Pharisees — religious leaders who thought they were better than everyone — began to complain.', background: 'hillside' },
          { speaker: 'Pharisee', text: '"This man welcomes sinners and eats with them! How scandalous!"', character: 'pharisee', emotion: 'disapproving' },
          { speaker: 'Narrator', text: 'So Jesus told them a story — a parable — to help them understand God\'s heart.', background: 'hillside', character: 'jesus' },
          { speaker: 'Jesus', text: '"Suppose one of you has a hundred sheep and loses one of them. Doesn\'t he leave the ninety-nine in the open field and go after the lost sheep until he finds it?"', verse: 'Luke 15:4', character: 'jesus', emotion: 'teaching' },
          {
            speaker: 'Narrator',
            text: 'If you were the shepherd, would you leave 99 sheep to find just one?',
            choices: [
              { text: '🤔 That doesn\'t seem smart...', nextScene: 1, response: 'It might not seem smart to us, but that\'s how much each sheep matters to the shepherd!' },
              { text: '❤️ Yes — every sheep matters!', nextScene: 1, response: 'That\'s God\'s heart! Every single person matters to Him!' },
              { text: '🐑 The lost one might be scared!', nextScene: 1, response: 'Yes! And the loving shepherd would be so worried about that one lost sheep!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'wilderness',
        dialogue: [
          { speaker: 'Jesus', text: '"And when he finds it, he joyfully puts it on his shoulders and goes home."', verse: 'Luke 15:5', character: 'jesus', emotion: 'joyful' },
          { speaker: 'Narrator', text: 'Imagine the shepherd searching through thorny bushes, climbing rocky hills, calling out into the darkness...', background: 'wilderness', character: 'shepherd' },
          { speaker: 'Narrator', text: '"Where are you? Where are you?" He searches everywhere, not giving up until he finds that one lost sheep.', background: 'wilderness' },
          { speaker: 'Narrator', text: 'Finally — he hears a faint "baa!" The sheep is caught in a bush, scared and alone!', background: 'wilderness', character: 'shepherd', emotion: 'relieved' },
          { speaker: 'Narrator', text: 'The shepherd doesn\'t scold the sheep. He doesn\'t hit it. He gently lifts it onto his shoulders and carries it home!', background: 'shepherd-carrying' },
          {
            speaker: 'Narrator',
            text: 'How do you think the lost sheep felt when the shepherd found it?',
            choices: [
              { text: '🥰 So relieved and loved!', nextScene: 2, response: 'Yes! The sheep went from being lost and scared to being carried with love!' },
              { text: '😢 It probably cried!', nextScene: 2, response: 'Sheep do bleat when they\'re distressed! But now it was safe in the shepherd\'s arms.' },
              { text: '🏠 Happy to be going home!', nextScene: 2, response: 'The sheep was so happy to be found and carried back to the flock!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'celebration',
        dialogue: [
          { speaker: 'Jesus', text: '"When he reaches home, he calls together his friends and neighbors, saying: Rejoice with me; I have found my lost sheep!"', verse: 'Luke 15:6', character: 'jesus', emotion: 'joyful' },
          { speaker: 'Jesus', text: '"In the same way, I tell you, there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent."', verse: 'Luke 15:7', character: 'jesus', emotion: 'teaching' },
          { speaker: 'Narrator', text: 'Jesus was explaining something beautiful: God is like that shepherd. And each of us is like that sheep.', background: 'celebration' },
          { speaker: 'Narrator', text: 'When we wander away from God, He doesn\'t give up on us. He searches for us. He pursues us with love.', background: 'celebration' },
          { speaker: 'Narrator', text: 'And when we turn back to Him, all of heaven celebrates! There is JOY!', background: 'celebration' },
          {
            speaker: 'Jesus',
            text: 'Have you ever felt lost or alone? Remember — the Good Shepherd is always searching for you, always pursuing you with love.',
            choices: [
              { text: '🐑 I am that sheep!', nextScene: 3, response: 'Yes! You are precious to the Good Shepherd. He will never leave you!' },
              { text: '🙏 Thank you, Jesus!', nextScene: 3, response: 'Jesus loves you so much! He gave His life to bring you home!' },
              { text: '❤️ God\'s love amazes me!', nextScene: 3, response: 'It IS amazing! The Creator of the universe pursues each of us with love!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'celebration',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'celebration' },
          { speaker: 'Narrator', text: '🐑 Each person is precious to God — like one sheep to a shepherd.' },
          { speaker: 'Narrator', text: '🔍 God searches for us when we are lost. He never gives up!' },
          { speaker: 'Narrator', text: '🎉 Heaven celebrates when even one person turns to God!' },
          { speaker: 'Narrator', text: '❤️ Jesus is the Good Shepherd who lays down His life for His sheep. (John 10:11)' },
          { speaker: 'Narrator', text: '🙏 "The Lord is my shepherd, I lack nothing." — Psalm 23:1' },
          { speaker: 'Narrator', text: 'You are never lost beyond the Shepherd\'s reach! 🐑❤️✨' }
        ]
      }
    ]
  },
  {
    id: 'birth-of-jesus',
    title: 'The First Christmas',
    description: 'The miraculous story of God becoming a baby — the greatest gift ever given.',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '⭐',
    color: 'from-purple-500 to-pink-500',
    scenes: [
      {
        id: 0,
        background: 'nazareth',
        dialogue: [
          { speaker: 'Narrator', text: 'About 2,000 years ago, in a small town called Nazareth, lived a young woman named Mary. She was engaged to a carpenter named Joseph.', background: 'nazareth', character: 'mary' },
          { speaker: 'Narrator', text: 'One day, something incredible happened. An angel appeared to Mary!', background: 'nazareth', character: 'angel', emotion: 'glorious' },
          { speaker: 'Angel Gabriel', text: '"Greetings, you who are highly favored! The Lord is with you!"', verse: 'Luke 1:28', character: 'angel' },
          { speaker: 'Narrator', text: 'Mary was startled and confused. What did this mean?', background: 'nazareth', character: 'mary', emotion: 'surprised' },
          { speaker: 'Angel Gabriel', text: '"Do not be afraid, Mary. You will conceive and give birth to a son, and you are to call Him Jesus. He will be great and will be called the Son of the Most High."', verse: 'Luke 1:30-32', character: 'angel' },
          {
            speaker: 'Narrator',
            text: 'How do you think Mary felt hearing this impossible news?',
            choices: [
              { text: '😲 Shocked and amazed!', nextScene: 1, response: 'Mary was amazed! But she chose to trust God with this incredible news.' },
              { text: '😰 Scared but faithful!', nextScene: 1, response: 'Yes! It was frightening, but Mary\'s faith was stronger than her fear!' },
              { text: '🙏 Humble and willing!', nextScene: 1, response: 'Mary\'s heart was humble and ready to say yes to God!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'nazareth',
        dialogue: [
          { speaker: 'Mary', text: '"I am the Lord\'s servant. May your word to me be fulfilled."', verse: 'Luke 1:38', character: 'mary', emotion: 'faithful' },
          { speaker: 'Narrator', text: 'What incredible faith! Mary trusted God completely, even though this would be difficult and people might not understand.', background: 'nazareth', character: 'mary' },
          { speaker: 'Narrator', text: 'Then the angel appeared to Joseph too, telling him not to be afraid to marry Mary, for the child was conceived by the Holy Spirit.', background: 'nazareth', character: 'angel', verse: 'Matthew 1:20' },
          { speaker: 'Narrator', text: 'But then the Roman emperor made a decree: everyone must return to their hometown to be counted. Joseph had to travel to Bethlehem — Mary\'s new home was 90 miles away!', background: 'road-bethlehem' },
          { speaker: 'Narrator', text: 'And Mary went with him, even though she was about to have her baby...', background: 'road-bethlehem', character: 'mary' },
          {
            speaker: 'Narrator',
            text: 'The journey to Bethlehem was long and difficult. What does this teach us about following God?',
            choices: [
              { text: '🛤️ God\'s path isn\'t always easy!', nextScene: 2, response: 'True! But God is always with us on the journey, even through hard times.' },
              { text: '🙏 We must trust God\'s plan!', nextScene: 2, response: 'Yes! Even when things don\'t make sense, God has a beautiful plan!' },
              { text: '💪 Obedience takes courage!', nextScene: 2, response: 'It does! Mary and Joseph showed amazing courage in obeying God!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'stable',
        dialogue: [
          { speaker: 'Narrator', text: 'When they arrived in Bethlehem, every inn was full! There was no room for them anywhere!', background: 'bethlehem-full' },
          { speaker: 'Narrator', text: 'The only place they could find was a stable — where the animals lived.', background: 'stable' },
          { speaker: 'Narrator', text: 'And there, in a humble manger filled with hay, Mary gave birth to her firstborn son. She wrapped Him in cloths and laid Him in the manger.', background: 'stable', verse: 'Luke 2:7', character: 'mary' },
          { speaker: 'Narrator', text: 'The King of Kings, the Creator of the universe, was born in a stable among animals. God chose humility over luxury.', background: 'stable' },
          { speaker: 'Narrator', text: 'But this wasn\'t a secret! God made sure the right people knew...', background: 'stable' },
          { speaker: 'Narrator', text: 'Out in the fields, an angel appeared to humble shepherds watching their flocks at night!', background: 'fields-night', character: 'angel', emotion: 'glorious' },
          { speaker: 'Angel', text: '"Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; He is the Messiah, the Lord."', verse: 'Luke 2:10-11', character: 'angel' },
          {
            speaker: 'Narrator',
            text: 'Why do you think God chose to tell shepherds first — not kings or important people?',
            choices: [
              { text: '❤️ God loves everyone equally!', nextScene: 3, response: 'Yes! God shows no favoritism. He loves the humble shepherd as much as the king!' },
              { text: '🙏 God values humble hearts!', nextScene: 3, response: 'Beautiful! "God opposes the proud but shows favor to the humble." — James 4:6' },
              { text: '🌟 Jesus came for ALL people!', nextScene: 3, response: 'Exactly! Jesus came for everyone — rich or poor, important or ordinary!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'heavenly-host',
        dialogue: [
          { speaker: 'Narrator', text: 'Suddenly, a great company of the heavenly army appeared with the angel, praising God!', background: 'heavenly-host' },
          { speaker: 'Angels', text: '"Glory to God in the highest heaven, and on earth peace to those on whom His favor rests!"', verse: 'Luke 2:14', character: 'angels', emotion: 'glorious' },
          { speaker: 'Narrator', text: 'The sky was filled with angels singing! The shepherds hurried to Bethlehem and found Mary, Joseph, and the baby Jesus, just as the angel had said!', background: 'stable', verse: 'Luke 2:15-16' },
          { speaker: 'Narrator', text: 'Later, wise men from the East followed a special star to find the young child. They brought gifts of gold, frankincense, and myrrh — recognizing Him as King!', background: 'wise-men', verse: 'Matthew 2:11' },
          { speaker: 'Narrator', text: 'God had sent His greatest gift — His own Son — into the world. Not as a conquering king on a horse, but as a helpless baby in a manger.', background: 'stable' },
          { speaker: 'Jesus', text: '"For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life."', verse: 'John 3:16', character: 'jesus', emotion: 'loving' },
          {
            speaker: 'Narrator',
            text: 'What is the best gift you could give Jesus this Christmas — or any day?',
            choices: [
              { text: '❤️ My heart and my life!', nextScene: 4, response: 'That\'s the greatest gift! Jesus wants your whole heart!' },
              { text: '🙏 My trust and obedience!', nextScene: 4, response: 'Wonderful! Trusting and following Jesus is the best gift we can give!' },
              { text: '🌍 To share His love with others!', nextScene: 4, response: 'Beautiful! Sharing God\'s love is exactly what Jesus calls us to do!' }
            ]
          }
        ]
      },
      {
        id: 4,
        background: 'stable',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'stable' },
          { speaker: 'Narrator', text: '⭐ God sent His Son, Jesus, as the greatest gift to the world.' },
          { speaker: 'Narrator', text: '❤️ Mary and Joseph showed incredible faith and obedience to God.' },
          { speaker: 'Narrator', text: '🌟 Jesus was born in humility — showing that God values the heart, not status.' },
          { speaker: 'Narrator', text: '👼 Angels announced the good news to humble shepherds first.' },
          { speaker: 'Narrator', text: '🎁 "For unto us a child is born, unto us a son is given." — Isaiah 9:6' },
          { speaker: 'Narrator', text: 'Jesus came to bring us close to God. What a wonderful gift! ⭐🎁❤️' }
        ]
      }
    ]
  },
  {
    id: 'daniel-lions',
    title: "Daniel in the Lion's Den",
    description: 'When doing the right thing meant danger, Daniel chose to pray — and God delivered him miraculously.',
    category: 'old-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🦁',
    color: 'from-amber-500 to-orange-600',
    scenes: [
      {
        id: 0,
        background: 'palace',
        dialogue: [
          { speaker: 'Narrator', text: 'In the kingdom of Babylon, there was a man named Daniel who served King Darius. Daniel was so wise and faithful that the king planned to put him in charge of the whole kingdom!', background: 'palace', character: 'daniel' },
          { speaker: 'Narrator', text: 'But the other officials were jealous. They tried to find something wrong with Daniel, but they couldn\'t — he was trustworthy and honest in everything.', background: 'palace', character: 'daniel', verse: 'Daniel 6:4' },
          { speaker: 'Narrator', text: 'Finally, they said, "We will never find any grounds for accusation against this man Daniel unless it has something to do with the law of his God."', background: 'palace', verse: 'Daniel 6:5' },
          {
            speaker: 'Narrator',
            text: 'Daniel was faithful to God in everything — his work, his words, his actions. What does it mean to be faithful in everything?',
            choices: [
              { text: '🙏 Doing right even when no one watches!', nextScene: 1, response: 'Exactly! Daniel was the same person in private as in public!' },
              { text: '💪 Staying true to what you believe!', nextScene: 1, response: 'Yes! Daniel never compromised his faith, no matter the pressure!' },
              { text: '❤️ Loving God with all your heart!', nextScene: 1, response: 'That\'s the foundation! When we love God fully, faithfulness flows naturally!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'palace',
        dialogue: [
          { speaker: 'Narrator', text: 'The jealous officials went to King Darius with a sneaky plan.', background: 'palace' },
          { speaker: 'Officials', text: '"King, we all agree that you should issue a decree: For the next thirty days, anyone who prays to any god or human other than you shall be thrown into the lion\'s den!"', verse: 'Daniel 6:7', character: 'officials', emotion: 'scheming' },
          { speaker: 'Narrator', text: 'They knew Daniel prayed to God three times every day. This was a trap!', background: 'palace' },
          { speaker: 'King Darius', text: '"Let the decree be written!" And the king signed it into law.', verse: 'Daniel 6:9', character: 'darius' },
          { speaker: 'Narrator', text: 'But Daniel... what did Daniel do?', background: 'daniel-room', character: 'daniel' },
          { speaker: 'Narrator', text: 'When Daniel heard the law was signed, he went home, opened his windows toward Jerusalem, and prayed to God — just as he always did! Three times that day!', background: 'daniel-room', character: 'daniel', verse: 'Daniel 6:10' },
          {
            speaker: 'Narrator',
            text: 'Daniel knew the law, but he kept praying anyway. Why?',
            choices: [
              { text: '🙏 His love for God was stronger than fear!', nextScene: 2, response: 'Yes! Daniel\'s relationship with God was more important than any law!' },
              { text: '💪 He trusted God to protect him!', nextScene: 2, response: 'Absolutely! Daniel trusted God completely, even with his life!' },
              { text: '❤️ He refused to hide his faith!', nextScene: 2, response: 'Courage! Daniel chose to honor God openly, no matter the cost!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'lions-den',
        dialogue: [
          { speaker: 'Narrator', text: 'The men rushed to the king. "Daniel is breaking your decree! He prays to his God three times a day!"', background: 'palace' },
          { speaker: 'Narrator', text: 'The king was devastated. He tried all day to find a way to save Daniel, but the law of the Medes and Persians could not be changed.', background: 'palace', character: 'darius', emotion: 'distressed' },
          { speaker: 'King Darius', text: '"May your God, whom you serve continually, rescue you!"', verse: 'Daniel 6:16', character: 'darius' },
          { speaker: 'Narrator', text: 'Daniel was thrown into the lion\'s den. A stone was placed over the mouth of the den and sealed.', background: 'lions-den' },
          { speaker: 'Narrator', text: 'Inside, hungry lions paced around. Any moment, they could attack...', background: 'lions-den' },
          { speaker: 'Narrator', text: 'But Daniel wasn\'t afraid. He trusted his God.', background: 'lions-den', character: 'daniel', emotion: 'peaceful' },
          {
            speaker: 'Narrator',
            text: 'Imagine being in that dark den with lions. What would you do?',
            choices: [
              { text: '🙏 Pray like Daniel!', nextScene: 3, response: 'That\'s exactly what Daniel did! Prayer connects us to God\'s power!' },
              { text: '😰 I would be terrified!', nextScene: 3, response: 'It\'s natural to be scared! But remember — God is with us even in our darkest moments!' },
              { text: '🦁 Trust God to protect me!', nextScene: 3, response: 'Yes! Like Daniel, we can trust God in every situation!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'lions-den-peaceful',
        dialogue: [
          { speaker: 'Narrator', text: 'The king spent a sleepless night. At dawn, he rushed to the lion\'s den.', background: 'lions-den', character: 'darius' },
          { speaker: 'King Darius', text: '"Daniel, servant of the living God, has your God whom you serve continually been able to rescue you from the lions?"', verse: 'Daniel 6:20', character: 'darius', emotion: 'hopeful' },
          { speaker: 'Daniel', text: '"My God sent His angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in His sight."', verse: 'Daniel 6:22', character: 'daniel', emotion: 'peaceful' },
          { speaker: 'Narrator', text: 'The lions hadn\'t touched a single hair on Daniel\'s head! God had sent an angel to shut their mouths!', background: 'lions-den-peaceful', character: 'daniel' },
          { speaker: 'Narrator', text: 'The king was overjoyed! He had Daniel lifted out of the den, not a scratch on him!', background: 'celebration', verse: 'Daniel 6:23' },
          { speaker: 'King Darius', text: '"I decree that in every part of my kingdom, people must fear and reverence the God of Daniel. For He is the living God, He rescues and He saves, He performs signs and wonders."', verse: 'Daniel 6:26-27', character: 'darius', emotion: 'amazed' },
          {
            speaker: 'Narrator',
            text: 'What "lions" (difficult situations) have you faced where God was with you?',
            choices: [
              { text: '🙏 Times I was scared but God gave peace!', nextScene: 4, response: 'God\'s peace is real! He is with you in every difficult situation!' },
              { text: '💪 Times I stood up for my faith!', nextScene: 4, response: 'That takes courage like Daniel! God honors those who honor Him!' },
              { text: '❤️ I\'m still learning to trust God!', nextScene: 4, response: 'That\'s okay! Trust grows over time. God is patient with us!' }
            ]
          }
        ]
      },
      {
        id: 4,
        background: 'celebration',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'celebration' },
          { speaker: 'Narrator', text: '🦁 God can shut the mouths of any "lion" in our lives!' },
          { speaker: 'Narrator', text: '🙏 Faithfulness to God means staying true even when it\'s hard.' },
          { speaker: 'Narrator', text: '💪 Daniel\'s courage came from his daily habit of prayer.' },
          { speaker: 'Narrator', text: '🌟 God\'s deliverance can cause others to glorify Him!' },
          { speaker: 'Narrator', text: '🙏 "Be strong and courageous. Do not be afraid; do not be dismayed, for the Lord your God is with you wherever you go." — Joshua 1:9' },
          { speaker: 'Narrator', text: 'No lion is too fierce for your God! Stand firm in faith! 🦁🙏✨' }
        ]
      }
    ]
  },
  {
    id: 'feeding-5000',
    title: 'Feeding the 5,000',
    description: 'Jesus takes a boy\'s small lunch and multiplies it to feed thousands — showing nothing is too small for God.',
    category: 'new-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🍞',
    color: 'from-yellow-400 to-orange-500',
    scenes: [
      {
        id: 0,
        background: 'hillside-crowd',
        dialogue: [
          { speaker: 'Narrator', text: 'Jesus and His disciples had crossed the Sea of Galilee, and a huge crowd followed them. They wanted to see Jesus heal the sick and hear His teaching.', background: 'hillside-crowd', character: 'jesus' },
          { speaker: 'Narrator', text: 'As evening approached, the disciples realized a problem...', background: 'hillside-crowd' },
          { speaker: 'Philip', text: '"Two hundred denarii would not buy enough bread for each one to get even a bite! There are about 5,000 men here — plus women and children!"', verse: 'John 6:7', character: 'disciple' },
          { speaker: 'Andrew', text: '"Here is a boy with five small barley loaves and two small fish, but how far will they go among so many?"', verse: 'John 6:9', character: 'disciple' },
          {
            speaker: 'Narrator',
            text: 'A boy brought his small lunch — just 5 loaves and 2 fish. What would you do with your lunch if you saw thousands of hungry people?',
            choices: [
              { text: '🍞 Share what I have!', nextScene: 1, response: 'That\'s exactly what the boy did! His willingness to share changed everything!' },
              { text: '😟 It wouldn\'t be enough...', nextScene: 1, response: 'It seems like it wouldn\'t be enough, but with Jesus, even small things become big miracles!' },
              { text: '🙏 Pray for God to provide!', nextScene: 1, response: 'Yes! The boy gave what he had, and Jesus did the rest!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'hillside-crowd',
        dialogue: [
          { speaker: 'Jesus', text: '"Have the people sit down." There was plenty of grass in that place, so they all sat down.', verse: 'John 6:10', character: 'jesus', emotion: 'calm' },
          { speaker: 'Narrator', text: 'Jesus took the five loaves and two fish. He looked up to heaven and gave thanks to God.', background: 'hillside-crowd', character: 'jesus' },
          { speaker: 'Narrator', text: 'Then He began to break the bread... and it kept coming! More and more and more!', background: 'hillside-crowd', character: 'jesus', emotion: 'powerful' },
          { speaker: 'Narrator', text: 'The disciples passed out the food to the crowd. 5,000 men — plus women and children — that could be 15,000-20,000 people! And everyone ate until they were FULL!', background: 'hillside-crowd' },
          { speaker: 'Narrator', text: 'When they gathered the leftovers, they filled TWELVE baskets! More than they started with!', background: 'hillside-crowd', verse: 'John 6:13' },
          {
            speaker: 'Narrator',
            text: 'What does this miracle teach us about God?',
            choices: [
              { text: '✨ God can multiply anything we give Him!', nextScene: 2, response: 'Yes! When we give our small offerings to God, He can do immeasurably more!' },
              { text: '❤️ God cares about our needs!', nextScene: 2, response: 'Absolutely! God cares about EVERY need — even hunger!' },
              { text: '🙏 Nothing is too small for God!', nextScene: 2, response: 'That\'s right! A boy\'s lunch became a feast for thousands!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'hillside-crowd',
        dialogue: [
          { speaker: 'Jesus', text: '"I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty."', verse: 'John 6:35', character: 'jesus', emotion: 'loving' },
          { speaker: 'Narrator', text: 'Jesus wasn\'t just feeding their bodies — He was showing them that He is the true bread from heaven. He feeds our souls too!', background: 'hillside-crowd', character: 'jesus' },
          { speaker: 'Narrator', text: 'Just as the boy\'s small lunch was multiplied, when we give our small talents, time, and love to Jesus, He multiplies them beyond what we can imagine!', background: 'hillside-crowd' },
          {
            speaker: 'Narrator',
            text: 'What "five loaves and two fish" (small things) could you give to Jesus today?',
            choices: [
              { text: '🙏 My prayers and time with God!', nextScene: 3, response: 'Beautiful! Even a few minutes of prayer can change everything!' },
              { text: '❤️ My kindness to others!', nextScene: 3, response: 'Yes! Small acts of kindness, multiplied by God, can change the world!' },
              { text: '📖 My willingness to learn and grow!', nextScene: 3, response: 'Wonderful! God can use your teachable heart to do great things!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'hillside-crowd',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'hillside-crowd' },
          { speaker: 'Narrator', text: '🍞 Jesus multiplied 5 loaves and 2 fish to feed over 5,000 people!' },
          { speaker: 'Narrator', text: '✨ When we give what we have to God, He can multiply it beyond our imagination.' },
          { speaker: 'Narrator', text: '❤️ Jesus is the Bread of Life — He feeds both our bodies and our souls.' },
          { speaker: 'Narrator', text: '🙏 "Now to Him who is able to do immeasurably more than all we ask or imagine." — Ephesians 3:20' },
          { speaker: 'Narrator', text: 'Your small offering in God\'s hands can become something extraordinary! 🍞✨🙏' }
        ]
      }
    ]
  },
  {
    id: 'resurrection',
    title: 'He Is Risen!',
    description: 'The greatest victory in history — Jesus conquered death so we could have eternal life!',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '✝️',
    color: 'from-indigo-500 to-purple-600',
    scenes: [
      {
        id: 0,
        background: 'dark-sky',
        dialogue: [
          { speaker: 'Narrator', text: 'After Jesus was betrayed, arrested, and crucified, His body was placed in a tomb. A huge stone was rolled in front of the entrance, and guards were posted.', background: 'tomb-dark', verse: 'Matthew 27:60' },
          { speaker: 'Narrator', text: 'The disciples were devastated. They were hiding, afraid. Their hope was crushed. The one they thought would save Israel was dead.', background: 'dark-sky' },
          { speaker: 'Narrator', text: 'But Jesus had told them something they didn\'t fully understand...', background: 'dark-sky' },
          { speaker: 'Jesus', text: '"The Son of Man must suffer many things... and be killed, and on the third day be raised to life."', verse: 'Luke 9:22', character: 'jesus' },
          { speaker: 'Narrator', text: 'The religious leaders remembered this too. So they made the tomb as secure as possible.', background: 'tomb-dark', verse: 'Matthew 27:62-66' },
          {
            speaker: 'Narrator',
            text: 'The disciples must have felt so hopeless. Have you ever felt like God\'s promises weren\'t coming true?',
            choices: [
              { text: '😢 Yes, when things go wrong...', nextScene: 1, response: 'Even in our darkest moments, God is working! The tomb wasn\'t the end!' },
              { text: '🙏 I try to remember God is in control!', nextScene: 1, response: 'That\'s wisdom! God was working even when it looked like all was lost!' },
              { text: '💪 I trust God\'s timing!', nextScene: 1, response: 'Beautiful faith! God\'s timing is always perfect, even when we can\'t see it!' }
            ]
          }
        ]
      },
      {
        id: 1,
        background: 'dawn',
        dialogue: [
          { speaker: 'Narrator', text: 'Early on the first day of the week, while it was still dark, Mary Magdalene and the other Mary went to the tomb.', background: 'dawn', verse: 'Matthew 28:1' },
          { speaker: 'Narrator', text: 'Suddenly, there was a violent earthquake! An angel of the Lord came down from heaven, rolled back the stone, and sat on it!', background: 'earthquake', verse: 'Matthew 28:2' },
          { speaker: 'Narrator', text: 'His appearance was like lightning, and his clothes were white as snow! The guards were so afraid they shook and became like dead men!', background: 'earthquake' },
          { speaker: 'Angel', text: '"Do not be afraid, for I know that you are looking for Jesus, who was crucified. He is not here; He has risen, just as He said!"', verse: 'Matthew 28:5-6', character: 'angel', emotion: 'glorious' },
          { speaker: 'Angel', text: '"Come and see the place where He lay. Then go quickly and tell His disciples!"', verse: 'Matthew 28:6-7', character: 'angel' },
          {
            speaker: 'Narrator',
            text: 'The tomb was EMPTY! Jesus was ALIVE! How does this make you feel?',
            choices: [
              { text: '🎉 Overjoyed and amazed!', nextScene: 2, response: 'Yes! Death could not hold Him! He is risen indeed!' },
              { text: '🙏 Filled with hope and faith!', nextScene: 2, response: 'The resurrection is the foundation of our hope! Because He lives, we will live too!' },
              { text: '❤️ So grateful for God\'s love!', nextScene: 2, response: 'God\'s love is so great He conquered death itself for us!' }
            ]
          }
        ]
      },
      {
        id: 2,
        background: 'glorious-light',
        dialogue: [
          { speaker: 'Narrator', text: 'The women ran from the tomb with fear and great joy! Suddenly, Jesus met them!', background: 'glorious-light', character: 'jesus', verse: 'Matthew 28:9' },
          { speaker: 'Jesus', text: '"Greetings!" And they came to Him, clasped His feet, and worshiped Him.', character: 'jesus', emotion: 'loving' },
          { speaker: 'Jesus', text: '"Do not be afraid. Go and tell My brothers to go to Galilee; there they will see Me."', verse: 'Matthew 28:10', character: 'jesus' },
          { speaker: 'Narrator', text: 'Over the next forty days, Jesus appeared to His disciples many times. He ate with them, talked with them, and proved He was truly alive!', background: 'glorious-light', character: 'jesus', verse: 'Acts 1:3' },
          { speaker: 'Narrator', text: 'He gave them one final mission...', background: 'glorious-light', character: 'jesus' },
          { speaker: 'Jesus', text: '"Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."', verse: 'Matthew 28:19-20', character: 'jesus', emotion: 'glorious' },
          {
            speaker: 'Narrator',
            text: 'Jesus gave us a mission and a promise. What part excites you most?',
            choices: [
              { text: '🌍 Telling others about Jesus!', nextScene: 3, response: 'Yes! We are called to share the Good News with the whole world!' },
              { text: '🙏 "I am with you always!"', nextScene: 3, response: 'What an amazing promise! Jesus is ALWAYS with us — never alone!' },
              { text: '❤️ Being part of God\'s family!', nextScene: 3, response: 'We are all brothers and sisters in Christ! What a beautiful family!' }
            ]
          }
        ]
      },
      {
        id: 3,
        background: 'glorious-light',
        dialogue: [
          { speaker: 'Narrator', text: '📖 What We Learned:', background: 'glorious-light' },
          { speaker: 'Narrator', text: '✝️ Jesus died for our sins and rose again on the third day!' },
          { speaker: 'Narrator', text: '🏆 Death could not hold Him — He conquered the grave!' },
          { speaker: 'Narrator', text: '🌟 Because Jesus lives, we have eternal life and hope!' },
          { speaker: 'Narrator', text: '🙏 "I am the resurrection and the life. The one who believes in me will live, even though they die." — John 11:25' },
          { speaker: 'Narrator', text: '🌍 We have a mission: tell the world that Jesus is alive!' },
          { speaker: 'Narrator', text: '❤️ "And surely I am with you always, to the very end of the age." — Matthew 28:20' },
          { speaker: 'Narrator', text: 'He is RISEN! He is RISEN INDEED! 🎉✝️✨' }
        ]
      }
    ]
  }
];
