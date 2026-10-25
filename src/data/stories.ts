import { Story } from '../types';

export const stories: Story[] = [
  // ═══════════════════════════════════════
  // OLD TESTAMENT — CREATION & BEGINNINGS
  // ═══════════════════════════════════════
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
      { id: 0, background: 'void', dialogue: [
        { speaker: 'Narrator', text: 'In the beginning... there was nothing. Only darkness covered the deep waters.', background: 'void' },
        { speaker: 'Narrator', text: 'But the Spirit of God was hovering over the waters, waiting...', background: 'void' },
        { speaker: 'God', text: '"Let there be light!"', background: 'void', character: 'god', verse: 'Genesis 1:3' },
        { speaker: 'Narrator', text: 'And suddenly — LIGHT burst forth! Brilliant, beautiful light filled everything!', background: 'light-burst', character: 'god' },
        { speaker: 'God', text: '"This is good." And God separated the light from the darkness. He called the light "Day" and the darkness "Night."', verse: 'Genesis 1:4-5', character: 'god' },
        { speaker: 'Narrator', text: 'And there was evening, and there was morning — the first day.', background: 'first-day' },
        { speaker: 'Narrator', text: 'What do you think God felt when He created light for the very first time?',
          choices: [
            { text: '🎨 Joyful — like an artist starting a masterpiece!', nextScene: 1, response: 'Yes! God was filled with joy, creating something beautiful from nothing!' },
            { text: '💪 Powerful — showing His mighty strength!', nextScene: 1, response: 'Absolutely! God\'s power is beyond anything we can imagine!' },
            { text: '❤️ Loving — preparing a home for us!', nextScene: 1, response: 'What a beautiful thought! God was lovingly preparing a home for all He would create!' }
          ]
        }
      ]},
      { id: 1, background: 'sky-sea', dialogue: [
        { speaker: 'Narrator', text: 'Day Two: God stretched out the sky — a magnificent dome of blue! He separated the waters of the clouds from the seas below.', background: 'sky-sea' },
        { speaker: 'God', text: '"Let the waters below the sky be gathered into one place, and let dry ground appear."', verse: 'Genesis 1:9', character: 'god' },
        { speaker: 'Narrator', text: 'Mountains rose from the sea! Valleys formed! Rivers carved their paths! The earth took shape!', background: 'mountains' },
        { speaker: 'Narrator', text: 'Day Three: God spoke, and the earth exploded with LIFE! Flowers of every color bloomed! Great towering trees reached toward the sky!', background: 'garden', verse: 'Genesis 1:11' },
        { speaker: 'Narrator', text: 'Then God made the SUN, the MOON, and the STARS! He determines the number of the stars and calls them each by name!', background: 'stars', verse: 'Psalm 147:4' },
        { speaker: 'Narrator', text: 'What would you want to see God create next?',
          choices: [
            { text: '🐋 Sea creatures and birds!', nextScene: 2, response: 'Great choice! God filled the seas and sky with amazing creatures!' },
            { text: '🦁 Land animals!', nextScene: 2, response: 'Wonderful! God made every kind of animal!' },
            { text: '👨👩👧👦 People!', nextScene: 2, response: 'Yes! God saved the best for last!' }
          ]
        }
      ]},
      { id: 2, background: 'eden', dialogue: [
        { speaker: 'Narrator', text: 'Days Four and Five: God filled the seas with whales, dolphins, and fish. He filled the sky with eagles, hummingbirds, and every kind of bird!', background: 'ocean-creatures', verse: 'Genesis 1:20' },
        { speaker: 'Narrator', text: 'Day Six: God made the land animals — lions, elephants, dogs, butterflies... every kind of creature!', background: 'animals' },
        { speaker: 'God', text: '"Let Us make mankind in Our image, in Our likeness."', verse: 'Genesis 1:26', character: 'god', emotion: 'loving' },
        { speaker: 'Narrator', text: 'God formed Adam from the dust and breathed life into him. Then He created Eve. Together, they were made in God\'s very own image!', background: 'eden', verse: 'Genesis 2:7' },
        { speaker: 'God', text: '"Look at everything I have made... it is VERY GOOD."', verse: 'Genesis 1:31', character: 'god', emotion: 'glorious' },
        { speaker: 'Narrator', text: '📖 What We Learned: God created everything in six days. You are made in God\'s image — fearfully and wonderfully made! 🌟', background: 'eden' }
      ]}
    ]
  },
  {
    id: 'fall',
    title: 'Adam, Eve & the Fall',
    description: 'The first choice that changed everything — and God\'s promise of a rescue plan.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🍎',
    color: 'from-red-500 to-green-600',
    scenes: [
      { id: 0, background: 'eden', dialogue: [
        { speaker: 'Narrator', text: 'God placed Adam and Eve in the Garden of Eden — a perfect paradise. Every beautiful tree and delicious fruit was theirs to enjoy.', background: 'eden' },
        { speaker: 'God', text: '"You may freely eat of every tree of the garden, but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die."', verse: 'Genesis 2:16-17', character: 'god' },
        { speaker: 'Narrator', text: 'One command. Just one. God gave them freedom to enjoy everything — except one tree. Why? Because love requires a choice.', background: 'eden' },
        { speaker: 'Narrator', text: 'Why do you think God gave them a choice?',
          choices: [
            { text: '❤️ Because real love must be chosen!', nextScene: 1, response: 'Exactly! God didn\'t want robots — He wanted children who freely chose to love Him!' },
            { text: '🙏 To show they trusted Him!', nextScene: 1, response: 'Yes! Obedience shows trust, and trust deepens our relationship with God!' },
            { text: '🤔 I\'m not sure...', nextScene: 1, response: 'God gave them choice because love isn\'t love unless it\'s freely given!' }
          ]
        }
      ]},
      { id: 1, background: 'garden-dark', dialogue: [
        { speaker: 'Narrator', text: 'One day, the serpent — the most cunning of all animals — came to Eve.', background: 'garden-dark', character: 'serpent' },
        { speaker: 'Serpent', text: '"Did God really say you must not eat from any tree in the garden?"', verse: 'Genesis 3:1', character: 'serpent', emotion: 'sly' },
        { speaker: 'Eve', text: '"We may eat fruit from the trees, but God did say we must not eat from the tree in the middle of the garden, or we will die."', verse: 'Genesis 3:2-3', character: 'eve' },
        { speaker: 'Serpent', text: '"You will not surely die. For God knows that when you eat from it your eyes will be opened, and you will be like God."', verse: 'Genesis 3:4-5', character: 'serpent', emotion: 'tempting' },
        { speaker: 'Narrator', text: 'The first lie ever told. The serpent twisted God\'s words and made disobedience sound attractive.', background: 'garden-dark' },
        { speaker: 'Narrator', text: 'What do you think Eve should have done?',
          choices: [
            { text: '🙏 Remembered God\'s clear command!', nextScene: 2, response: 'Yes! When we know God\'s Word, lies can\'t trick us!' },
            { text: '🚫 Walked away from the serpent!', nextScene: 2, response: 'Great wisdom! Sometimes the best thing is to remove ourselves from temptation!' },
            { text: '📖 Asked God directly!', nextScene: 2, response: 'That\'s always wise! When in doubt, go straight to God!' }
          ]
        }
      ]},
      { id: 2, background: 'garden-dark', dialogue: [
        { speaker: 'Narrator', text: 'Eve saw that the fruit looked good and pleasing to the eye. She wanted to be wise like God. She ate it... and gave some to Adam. He ate it too.', background: 'garden-dark', verse: 'Genesis 3:6' },
        { speaker: 'Narrator', text: 'Immediately, their eyes were opened — but not in the way the serpent promised. They felt shame. They realized they were naked. They hid from God.', background: 'garden-dark' },
        { speaker: 'God', text: '"Where are you?"', verse: 'Genesis 3:9', character: 'god' },
        { speaker: 'Narrator', text: 'God wasn\'t asking because He didn\'t know. He was giving them a chance to come clean.', background: 'garden-dark' },
        { speaker: 'Narrator', text: 'Though sin entered the world, God immediately made a plan to rescue humanity. He promised a Savior would come — one who would crush the power of evil!', background: 'light-burst', verse: 'Genesis 3:15' },
        { speaker: 'Narrator', text: '📖 What We Learned: Sin entered through one choice, but God\'s love and rescue plan began immediately. Jesus is that promised Savior! ✝️', background: 'light-burst' }
      ]}
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
      { id: 0, background: 'corrupt-world', dialogue: [
        { speaker: 'Narrator', text: 'Many years later, the world had become very wicked. But God found one man who walked faithfully with Him: Noah.', background: 'noah-field', character: 'noah', verse: 'Genesis 6:8-9' },
        { speaker: 'God', text: '"Build an ark. I am going to bring floodwaters, but I will establish my covenant with you."', verse: 'Genesis 6:17-18', character: 'god' },
        { speaker: 'Narrator', text: 'Noah obeyed. He built an enormous ark — 450 feet long! People laughed, but Noah kept building. Animals came two by two!', background: 'building-ark', verse: 'Genesis 7:8-9' },
        { speaker: 'Narrator', text: 'It rained for 40 days and 40 nights. But inside the ark, everyone was safe. God shut the door Himself.', background: 'flood', verse: 'Genesis 7:16' },
        { speaker: 'Narrator', text: 'When the waters finally receded, God placed a rainbow in the sky — His promise to never destroy the earth again.', background: 'rainbow', verse: 'Genesis 9:13' },
        { speaker: 'Narrator', text: '📖 What We Learned: God keeps His promises. The rainbow reminds us of His faithfulness! Next time you see one, remember God\'s love! 🌈', background: 'rainbow' }
      ]}
    ]
  },
  {
    id: 'babel',
    title: 'The Tower of Babel',
    description: 'When people tried to reach heaven on their own, God confused their languages to humble them.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🏗️',
    color: 'from-stone-500 to-amber-600',
    scenes: [
      { id: 0, background: 'building-ark', dialogue: [
        { speaker: 'Narrator', text: 'After the flood, people settled in the plain of Shinar. Instead of spreading across the earth as God commanded, they had a different idea.', background: 'building-ark' },
        { speaker: 'People', text: '"Come, let us build ourselves a city, and a tower with its top in the sky, so that we may make a name for ourselves!"', verse: 'Genesis 11:4', character: 'people' },
        { speaker: 'Narrator', text: 'They wanted to reach heaven by their own power. They wanted fame. They wanted to be their own gods.', background: 'building-ark' },
        { speaker: 'Narrator', text: 'Why is trying to reach God on our own terms a problem?',
          choices: [
            { text: '🙏 Because God already showed us the way!', nextScene: 1, response: 'Yes! We don\'t need to build our way to God — He came down to us!' },
            { text: '❤️ Because it\'s about pride, not love!', nextScene: 1, response: 'Exactly! God wants our hearts, not our monuments!' },
            { text: '🤔 I never thought about it that way!', nextScene: 1, response: 'God\'s ways are higher than our ways. He invites us to come to Him humbly!' }
          ]
        }
      ]},
      { id: 1, background: 'building-ark', dialogue: [
        { speaker: 'Narrator', text: 'God came down and saw the tower. He confused their languages so they couldn\'t understand each other. The building stopped.', background: 'building-ark', verse: 'Genesis 11:7-8' },
        { speaker: 'Narrator', text: 'The people scattered across the earth. The city was called Babel — which means "confusion."', background: 'building-ark' },
        { speaker: 'Narrator', text: '📖 What We Learned: We can\'t reach God by our own efforts. But God reached down to us through Jesus! "For it is by grace you have been saved." — Ephesians 2:8 ✝️', background: 'building-ark' }
      ]}
    ]
  },
  {
    id: 'abraham',
    title: "Abraham's Faith",
    description: 'God called one man to leave everything and follow Him — and through him, all nations would be blessed.',
    category: 'old-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '⭐',
    color: 'from-amber-500 to-yellow-600',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'God', text: '"Go from your country, your people and your father\'s household to the land I will show you. I will make you into a great nation, and I will bless you."', verse: 'Genesis 12:1-2', character: 'god' },
        { speaker: 'Narrator', text: 'Abram (later Abraham) was 75 years old. God asked him to leave everything familiar and go to a land he had never seen. Just by faith.', background: 'desert', character: 'abraham' },
        { speaker: 'Narrator', text: 'God took Abraham outside and said:', background: 'desert' },
        { speaker: 'God', text: '"Look up at the sky and count the stars — if indeed you can count them. So shall your offspring be."', verse: 'Genesis 15:5', character: 'god' },
        { speaker: 'Narrator', text: 'Abraham believed God, and it was credited to him as righteousness.', background: 'stars', verse: 'Genesis 15:6' },
        { speaker: 'Narrator', text: 'Even when Abraham and Sarah were too old to have children, God kept His promise. Isaac was born — the child of miracle!', background: 'desert', verse: 'Genesis 21:1-3' },
        { speaker: 'Narrator', text: '📖 What We Learned: "Abraham believed God, and it was credited to him as righteousness." Faith means trusting God even when we can\'t see the full picture. — Romans 4:3 ⭐', background: 'stars' }
      ]}
    ]
  },
  {
    id: 'moses-bush',
    title: 'Moses & the Burning Bush',
    description: 'God spoke from a bush that burned but was not consumed, calling a reluctant shepherd to free His people.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🔥',
    color: 'from-orange-500 to-red-600',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'The Israelites were slaves in Egypt for 400 years. They cried out to God for help.', background: 'desert' },
        { speaker: 'Narrator', text: 'Moses, an Israelite raised in Pharaoh\'s palace, had fled to the desert. One day, while tending sheep, he saw something incredible.', background: 'desert', character: 'moses' },
        { speaker: 'Narrator', text: 'A bush was on fire — but it wasn\'t burning up! The flames danced and flickered, but the bush remained completely intact!', background: 'burning-bush', verse: 'Exodus 3:2' },
        { speaker: 'God', text: '"Moses! Moses! Do not come any closer. Take off your sandals, for the place where you are standing is holy ground."', verse: 'Exodus 3:4-5', character: 'god' },
        { speaker: 'God', text: '"I have seen the suffering of my people. Come, I am sending you to Pharaoh to bring my people out of Egypt."', verse: 'Exodus 3:9-10', character: 'god' },
        { speaker: 'Moses', text: '"Who am I that I should go? I am nobody important..."', verse: 'Exodus 3:11', character: 'moses', emotion: 'afraid' },
        { speaker: 'God', text: '"I will be with you. I AM WHO I AM. Tell them: I AM has sent me to you."', verse: 'Exodus 3:12-14', character: 'god', emotion: 'powerful' },
        { speaker: 'Narrator', text: '📖 What We Learned: God doesn\'t call the qualified — He qualifies the called! When God says "I am with you," that\'s all the credential we need! 🔥', background: 'burning-bush' }
      ]}
    ]
  },
  {
    id: 'exodus',
    title: 'The Exodus',
    description: 'Ten plagues, a Passover, and the parting of the Red Sea — God delivers His people with mighty power!',
    category: 'old-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🌊',
    color: 'from-blue-600 to-cyan-500',
    scenes: [
      { id: 0, background: 'egypt', dialogue: [
        { speaker: 'Narrator', text: 'Moses went to Pharaoh and said, "Let my people go!" But Pharaoh\'s heart was hardened. So God sent ten plagues upon Egypt.', background: 'egypt' },
        { speaker: 'Narrator', text: 'Water turned to blood. Frogs everywhere. Gnats, flies, diseased livestock, boils, hail, locusts, and three days of total darkness!', background: 'egypt' },
        { speaker: 'Narrator', text: 'But the final plague was the most terrible. God said every firstborn in Egypt would die — unless the people marked their doorposts with the blood of a lamb.', background: 'egypt', verse: 'Exodus 12:13' },
        { speaker: 'God', text: '"When I see the blood, I will pass over you. This shall be a memorial — the Passover."', verse: 'Exodus 12:13-14', character: 'god' },
        { speaker: 'Narrator', text: 'The Israelites obeyed. The angel of death passed over their homes. But in every Egyptian home, tragedy struck. Finally, Pharaoh said: GO!', background: 'egypt' },
        { speaker: 'Narrator', text: 'What does the Passover lamb remind us of?',
          choices: [
            { text: '✝️ Jesus, the Lamb of God!', nextScene: 1, response: 'Yes! John the Baptist called Jesus "the Lamb of God who takes away the sin of the world!" — John 1:29' },
            { text: '🩸 The blood that saves us!', nextScene: 1, response: 'Exactly! Just as the lamb\'s blood saved the Israelites, Jesus\' sacrifice saves us!' },
            { text: '❤️ God\'s protection and love!', nextScene: 1, response: 'Beautiful! God always provides a way of salvation for His people!' }
          ]
        }
      ]},
      { id: 1, background: 'red-sea', dialogue: [
        { speaker: 'Narrator', text: 'The Israelites left Egypt, but soon Pharaoh changed his mind and chased them with his army! The Israelites were trapped at the Red Sea!', background: 'red-sea' },
        { speaker: 'People', text: '"Was it because there were no graves in Egypt that you brought us to the desert to die?!"', verse: 'Exodus 14:11', character: 'people', emotion: 'terrified' },
        { speaker: 'Moses', text: '"Do not be afraid. Stand firm and you will see the deliverance the Lord will bring today. The Lord will fight for you; you need only to be still."', verse: 'Exodus 14:13-14', character: 'moses', emotion: 'faithful' },
        { speaker: 'Narrator', text: 'God told Moses to stretch out his staff over the sea. A strong wind blew, and the waters DIVIDED! A wall of water on each side, with dry ground in the middle!', background: 'red-sea', verse: 'Exodus 14:21-22' },
        { speaker: 'Narrator', text: 'The Israelites walked through on dry ground! When the Egyptian army followed, God caused their chariot wheels to fall off. Then the waters crashed back down!', background: 'red-sea' },
        { speaker: 'Narrator', text: '📖 What We Learned: God fights for us! When we face impossible situations, "The Lord will fight for you; you need only to be still." — Exodus 14:14 🌊', background: 'red-sea' }
      ]}
    ]
  },
  {
    id: 'ten-commandments',
    title: 'The Ten Commandments',
    description: 'God wrote His law on stone tablets at Mount Sinai — a guide for loving God and loving others.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '📜',
    color: 'from-gray-500 to-slate-600',
    scenes: [
      { id: 0, background: 'mountain-sinai', dialogue: [
        { speaker: 'Narrator', text: 'At Mount Sinai, the mountain shook with thunder and lightning. Fire and smoke covered the top. A trumpet blast sounded louder and louder!', background: 'mountain-sinai', verse: 'Exodus 19:16-18' },
        { speaker: 'Narrator', text: 'God spoke to all the people and gave them Ten Commandments — His guide for how to live:', background: 'mountain-sinai' },
        { speaker: 'God', text: '1. "I am the Lord your God. You shall have no other gods before me.\n2. Do not make idols.\n3. Do not misuse My name.\n4. Remember the Sabbath day.\n5. Honor your father and mother.\n6. Do not murder.\n7. Do not commit adultery.\n8. Do not steal.\n9. Do not lie.\n10. Do not covet."', verse: 'Exodus 20:1-17', character: 'god' },
        { speaker: 'Narrator', text: 'Jesus later said these commandments can be summed up in two:', background: 'mountain-sinai' },
        { speaker: 'Jesus', text: '"Love the Lord your God with all your heart, soul, and mind. And love your neighbor as yourself. All the Law hangs on these two commandments."', verse: 'Matthew 22:37-40', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 What We Learned: God\'s commands aren\'t restrictions — they\'re protection! They show us how to love God and love others. "Your word is a lamp for my feet, a light on my path." — Psalm 119:105 📜', background: 'mountain-sinai' }
      ]}
    ]
  },
  {
    id: 'joshua-jericho',
    title: 'The Battle of Jericho',
    description: 'God gave Joshua a strange battle plan — march, be silent, shout — and the walls came tumbling down!',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🏰',
    color: 'from-stone-600 to-amber-500',
    scenes: [
      { id: 0, background: 'battlefield', dialogue: [
        { speaker: 'Narrator', text: 'After Moses died, God appointed Joshua to lead Israel into the Promised Land. The first city in their path was Jericho — a mighty fortress with huge walls.', background: 'battlefield', character: 'joshua' },
        { speaker: 'God', text: '"See, I have delivered Jericho into your hands. March around the city once a day for six days. On the seventh day, march around seven times. Then shout, and the wall will collapse."', verse: 'Joshua 6:2-5', character: 'god' },
        { speaker: 'Narrator', text: 'What a strange battle plan! No weapons, no siege towers — just walking and shouting! But Joshua obeyed.', background: 'battlefield' },
        { speaker: 'Narrator', text: 'For six days, the army marched around the city in complete silence. On the seventh day, they marched seven times...', background: 'battlefield' },
        { speaker: 'Joshua', text: '"Shout! For the Lord has given you the city!"', verse: 'Joshua 6:16', character: 'joshua', emotion: 'bold' },
        { speaker: 'Narrator', text: 'The people shouted — and the walls of Jericho COLLAPSED! Every single wall fell flat! God fought for them!', background: 'celebration', verse: 'Joshua 6:20' },
        { speaker: 'Narrator', text: '📖 What We Learned: "Be strong and courageous! Do not be afraid... for the Lord your God will be with you wherever you go." — Joshua 1:9 God\'s ways may seem strange, but they always work! 🏰💥', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'ruth',
    title: 'Ruth & Naomi',
    description: 'A story of loyalty, love, and God\'s providence — a Moabite woman becomes part of Jesus\' family tree!',
    category: 'old-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🌾',
    color: 'from-amber-400 to-rose-500',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Narrator', text: 'Naomi lost everything — her husband and both sons. She decided to return to Bethlehem and told her daughters-in-law to go back to their families.', background: 'field' },
        { speaker: 'Naomi', text: '"Go back, my daughters. Why would you come with me? My life is too bitter."', verse: 'Ruth 1:11-13', character: 'naomi', emotion: 'sad' },
        { speaker: 'Narrator', text: 'Orpah left. But Ruth clung to Naomi...', background: 'field', character: 'ruth' },
        { speaker: 'Ruth', text: '"Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried."', verse: 'Ruth 1:16-17', character: 'ruth', emotion: 'loving' },
        { speaker: 'Narrator', text: 'In Bethlehem, Ruth gleaned grain in the fields to provide for Naomi. She ended up in the field of Boaz — a kind, wealthy relative.', background: 'field', verse: 'Ruth 2:3' },
        { speaker: 'Narrator', text: 'Boaz noticed Ruth\'s kindness and faithfulness. He became their kinsman-redeemer, marrying Ruth and protecting the family.', background: 'field', verse: 'Ruth 4:9-10' },
        { speaker: 'Narrator', text: '📖 What We Learned: Ruth and Boaz had a son named Obed, whose son was Jesse, whose son was DAVID — and from David\'s line came JESUS! God weaves every act of faithfulness into His grand plan! 🌾❤️', background: 'field' }
      ]}
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
      { id: 0, background: 'battlefield', dialogue: [
        { speaker: 'Narrator', text: 'The Israelite army was terrified. For forty days, a giant named Goliath — over nine feet tall — mocked them.', background: 'battlefield', character: 'goliath', verse: '1 Samuel 17:4' },
        { speaker: 'Narrator', text: 'A young shepherd boy named David arrived at the battlefield. While everyone saw an unbeatable giant, David saw an opportunity for God to show His power!', background: 'battlefield', character: 'david' },
        { speaker: 'David', text: '"You come against me with sword and spear, but I come against you in the name of the Lord Almighty! This day the Lord will deliver you into my hands, and the whole world will know there is a God in Israel!"', verse: '1 Samuel 17:45-46', character: 'david', emotion: 'bold' },
        { speaker: 'Narrator', text: 'David chose five smooth stones. He slung one — it struck Goliath on the forehead! The giant fell!', background: 'battlefield', verse: '1 Samuel 17:49' },
        { speaker: 'Narrator', text: '📖 What We Learned: No challenge is too big when we trust in God! "The Lord is my rock, my fortress and my deliverer." — Psalm 18:2 ⚔️', background: 'celebration' }
      ]}
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
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'Daniel was so faithful that jealous officials tricked the king into making a law: no praying to anyone but the king for 30 days — or face the lions!', background: 'palace', character: 'daniel', verse: 'Daniel 6:7' },
        { speaker: 'Narrator', text: 'What did Daniel do? He went home, opened his windows, and prayed to God — just as he always did! Three times that day!', background: 'daniel-room', verse: 'Daniel 6:10' },
        { speaker: 'Narrator', text: 'Daniel was thrown into the lions\' den. But God sent an angel who shut the mouths of the lions! Not a scratch on Daniel!', background: 'lions-den-peaceful', verse: 'Daniel 6:22', character: 'daniel' },
        { speaker: 'King Darius', text: '"Your God is the living God! He rescues and He saves, He performs signs and wonders!"', verse: 'Daniel 6:26-27', character: 'darius', emotion: 'amazed' },
        { speaker: 'Narrator', text: '📖 What We Learned: "Be strong and courageous. Do not be afraid, for the Lord your God is with you wherever you go." — Joshua 1:9 No lion is too fierce for your God! 🦁🙏', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'jonah',
    title: 'Jonah & the Great Fish',
    description: 'You can\'t run from God\'s calling — but His mercy reaches even the most unlikely people.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🐋',
    color: 'from-blue-500 to-teal-500',
    scenes: [
      { id: 0, background: 'ocean-creatures', dialogue: [
        { speaker: 'God', text: '"Go to the great city of Nineveh and preach against it, because their wickedness has come up before me."', verse: 'Jonah 1:1-2', character: 'god' },
        { speaker: 'Narrator', text: 'Jonah didn\'t want to go! Nineveh was Israel\'s enemy. So he booked a ship going the OPPOSITE direction!', background: 'ocean-creatures', character: 'jonah' },
        { speaker: 'Narrator', text: 'A great storm arose. The sailors threw lots — it pointed to Jonah. He said, "Throw me overboard! This storm is because of me."', background: 'ocean-creatures', verse: 'Jonah 1:12' },
        { speaker: 'Narrator', text: 'They threw Jonah into the sea. And God provided a huge fish that swallowed him! Jonah was in the fish for three days and three nights.', background: 'ocean-creatures', verse: 'Jonah 1:17' },
        { speaker: 'Jonah', text: '"In my distress I called to the Lord, and He answered me. From deep in the realm of the dead I called for help, and You heard my cry."', verse: 'Jonah 2:2', character: 'jonah', emotion: 'praying' },
        { speaker: 'Narrator', text: 'The fish spit Jonah out. This time he went to Nineveh. He preached, and the whole city repented! God showed mercy!', background: 'celebration', verse: 'Jonah 3:10' },
        { speaker: 'Narrator', text: '📖 What We Learned: You can\'t run from God, but His mercy is bigger than our mistakes. God loves ALL people — even our enemies! 🐋❤️', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'esther',
    title: 'Queen Esther',
    description: 'A young woman risked her life to save her people — "for such a time as this."',
    category: 'old-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '👑',
    color: 'from-purple-500 to-pink-500',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'In the Persian empire, a wicked man named Haman convinced the king to destroy all the Jews. A death decree was signed!', background: 'palace' },
        { speaker: 'Narrator', text: 'Mordecai sent a message to his cousin Esther, who had become queen: "Who knows whether you have come to the kingdom for such a time as this?"', background: 'palace', character: 'mordecai', verse: 'Esther 4:14' },
        { speaker: 'Narrator', text: 'Esther faced a choice: approaching the king without being summoned meant death. But her people would die without help.', background: 'palace', character: 'esther' },
        { speaker: 'Esther', text: '"Go, gather together all the Jews in Susa and fast for me. When this is done, I will go to the king, even though it is against the law. And if I perish, I perish."', verse: 'Esther 4:16', character: 'esther', emotion: 'brave' },
        { speaker: 'Narrator', text: 'Esther approached the king. He extended his golden scepter — she was accepted! She revealed Haman\'s evil plan, and her people were saved!', background: 'celebration', verse: 'Esther 5:2' },
        { speaker: 'Narrator', text: '📖 What We Learned: God places each of us exactly where we need to be. "For such a time as this" — you are here for a purpose! 👑🙏', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'psalms',
    title: 'The Psalms: Songs of the Heart',
    description: 'David\'s songs of praise, lament, and trust — God invites us to bring Him our honest hearts.',
    category: 'old-testament',
    difficulty: 'easy',
    ageGroup: 'all',
    icon: '🎵',
    color: 'from-violet-500 to-indigo-500',
    scenes: [
      { id: 0, background: 'stars', dialogue: [
        { speaker: 'Narrator', text: 'The book of Psalms is a collection of 150 songs and prayers. Many were written by David — a shepherd, king, and "man after God\'s own heart."', background: 'stars' },
        { speaker: 'David', text: '"The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, He leads me beside quiet waters, He refreshes my soul."', verse: 'Psalm 23:1-3', character: 'david', emotion: 'peaceful' },
        { speaker: 'David', text: '"Even though I walk through the darkest valley, I will fear no evil, for You are with me; Your rod and Your staff, they comfort me."', verse: 'Psalm 23:4', character: 'david' },
        { speaker: 'David', text: '"The heavens declare the glory of God; the skies proclaim the work of His hands."', verse: 'Psalm 19:1', character: 'david', emotion: 'worshipful' },
        { speaker: 'David', text: '"Create in me a pure heart, O God, and renew a steadfast spirit within me."', verse: 'Psalm 51:10', character: 'david', emotion: 'praying' },
        { speaker: 'David', text: '"I praise You because I am fearfully and wonderfully made; Your works are wonderful, I know that full well."', verse: 'Psalm 139:14', character: 'david', emotion: 'joyful' },
        { speaker: 'Narrator', text: '📖 What We Learned: God wants ALL of our emotions — joy, sadness, anger, gratitude. The Psalms teach us to bring our whole hearts to God. He is always listening! 🎵❤️', background: 'stars' }
      ]}
    ]
  },
  {
    id: 'isaiah',
    title: "Isaiah's Prophecy",
    description: 'Hundreds of years before Jesus, Isaiah predicted the coming Savior with stunning detail.',
    category: 'old-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🔮',
    color: 'from-indigo-500 to-blue-600',
    scenes: [
      { id: 0, background: 'scroll', dialogue: [
        { speaker: 'Narrator', text: 'The prophet Isaiah lived about 700 years before Jesus. God gave him visions of a coming Savior — with incredible detail.', background: 'scroll' },
        { speaker: 'Isaiah', text: '"Therefore the Lord Himself will give you a sign: The virgin will conceive and give birth to a son, and will call him Immanuel." (Immanuel means "God with us")', verse: 'Isaiah 7:14', character: 'isaiah' },
        { speaker: 'Isaiah', text: '"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."', verse: 'Isaiah 9:6', character: 'isaiah', emotion: 'prophetic' },
        { speaker: 'Isaiah', text: '"He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was on Him, and by His wounds we are healed."', verse: 'Isaiah 53:5', character: 'isaiah', emotion: 'solemn' },
        { speaker: 'Isaiah', text: '"All we like sheep have gone astray, each of us has turned to our own way; and the Lord has laid on Him the iniquity of us all."', verse: 'Isaiah 53:6', character: 'isaiah' },
        { speaker: 'Narrator', text: '📖 What We Learned: Isaiah\'s prophecies were fulfilled in Jesus — born of a virgin, called Wonderful Counselor and Prince of Peace, pierced for our sins. God keeps every promise! 🔮✝️', background: 'scroll' }
      ]}
    ]
  },

  // ═══════════════════════════════════════
  // NEW TESTAMENT — JESUS' LIFE & TEACHINGS
  // ═══════════════════════════════════════
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
      { id: 0, background: 'nazareth', dialogue: [
        { speaker: 'Narrator', text: 'In the small town of Nazareth, an angel appeared to a young woman named Mary.', background: 'nazareth', character: 'angel' },
        { speaker: 'Angel Gabriel', text: '"Do not be afraid, Mary. You will conceive and give birth to a son, and you are to call Him Jesus. He will be called the Son of the Most High."', verse: 'Luke 1:30-32', character: 'angel' },
        { speaker: 'Mary', text: '"I am the Lord\'s servant. May your word to me be fulfilled."', verse: 'Luke 1:38', character: 'mary', emotion: 'faithful' },
        { speaker: 'Narrator', text: 'Mary and Joseph traveled to Bethlehem. No room at the inn — Jesus was born in a stable and laid in a manger.', background: 'stable', verse: 'Luke 2:7' },
        { speaker: 'Angel', text: '"Do not be afraid. Today in the town of David a Savior has been born to you; He is the Messiah, the Lord."', verse: 'Luke 2:10-11', character: 'angel' },
        { speaker: 'Angels', text: '"Glory to God in the highest heaven, and on earth peace to those on whom His favor rests!"', verse: 'Luke 2:14', character: 'angels', emotion: 'glorious' },
        { speaker: 'Narrator', text: '📖 What We Learned: "For God so loved the world that He gave His one and only Son." — John 3:16 Jesus came for everyone — the greatest gift ever! ⭐🎁', background: 'stable' }
      ]}
    ]
  },
  {
    id: 'jesus-baptism',
    title: 'Jesus\' Baptism & Temptation',
    description: 'Jesus began His ministry with baptism in the Jordan and 40 days of testing in the wilderness.',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🕊️',
    color: 'from-sky-400 to-blue-500',
    scenes: [
      { id: 0, background: 'jordan-river', dialogue: [
        { speaker: 'Narrator', text: 'Jesus came to John the Baptist at the Jordan River to be baptized. John said, "I need to be baptized by YOU!"', background: 'jordan-river', character: 'john', verse: 'Matthew 3:14' },
        { speaker: 'Jesus', text: '"Let it be so now; it is proper for us to do this to fulfill all righteousness."', verse: 'Matthew 3:15', character: 'jesus' },
        { speaker: 'Narrator', text: 'As Jesus came up from the water, heaven opened! The Spirit of God descended like a dove, and a voice from heaven said:', background: 'jordan-river', character: 'god', verse: 'Matthew 3:16-17' },
        { speaker: 'God', text: '"This is My Son, whom I love; with Him I am well pleased."', verse: 'Matthew 3:17', character: 'god', emotion: 'loving' },
        { speaker: 'Narrator', text: 'Then the Spirit led Jesus into the wilderness for 40 days. The devil tempted Him three times:', background: 'wilderness' },
        { speaker: 'Narrator', text: '"Turn stones to bread!" — Jesus: "Man shall not live on bread alone, but on every word of God." (Deut 8:3)\n"Throw yourself down — angels will catch you!" — Jesus: "Do not put the Lord your God to the test." (Deut 6:16)\n"Bow down and worship me!" — Jesus: "Worship the Lord your God, and serve Him only." (Deut 6:13)', character: 'jesus', verse: 'Matthew 4:1-11', emotion: 'strong' },
        { speaker: 'Narrator', text: '📖 What We Learned: Jesus defeated temptation with Scripture! When we face temptation, God\'s Word is our greatest weapon. "This is My Son, whom I love" — God says the same about you! 🕊️', background: 'wilderness' }
      ]}
    ]
  },
  {
    id: 'sermon-mount',
    title: 'The Sermon on the Mount',
    description: 'Jesus\' greatest teaching — the Beatitudes, the Lord\'s Prayer, and how to truly live.',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🏔️',
    color: 'from-emerald-400 to-teal-500',
    scenes: [
      { id: 0, background: 'hillside', dialogue: [
        { speaker: 'Narrator', text: 'Jesus went up on a mountainside and sat down. His disciples gathered around. And He began to teach...', background: 'hillside', character: 'jesus' },
        { speaker: 'Jesus', text: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven.\nBlessed are those who mourn, for they will be comforted.\nBlessed are the meek, for they will inherit the earth.\nBlessed are those who hunger and thirst for righteousness, for they will be filled.\nBlessed are the merciful, for they will be shown mercy.\nBlessed are the pure in heart, for they will see God.\nBlessed are the peacemakers, for they will be called children of God."', verse: 'Matthew 5:3-9', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Jesus', text: '"You are the light of the world. A town built on a hill cannot be hidden. Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."', verse: 'Matthew 5:14-16', character: 'jesus' },
        { speaker: 'Jesus', text: '"You have heard that it was said, \'Love your neighbor and hate your enemy.\' But I tell you, love your enemies and pray for those who persecute you."', verse: 'Matthew 5:43-44', character: 'jesus', emotion: 'loving' },
        { speaker: 'Jesus', text: '"This, then, is how you should pray: Our Father in heaven, hallowed be Your name, Your kingdom come, Your will be done, on earth as it is in heaven. Give us today our daily bread. Forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one."', verse: 'Matthew 6:9-13', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 What We Learned: Jesus turned the world\'s values upside down. The meek, the merciful, the pure in heart — these are the truly blessed! And He taught us how to pray. 🏔️🙏', background: 'hillside' }
      ]}
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
      { id: 0, background: 'hillside', dialogue: [
        { speaker: 'Jesus', text: '"Suppose one of you has a hundred sheep and loses one of them. Doesn\'t he leave the ninety-nine and go after the lost sheep until he finds it?"', verse: 'Luke 15:4', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Narrator', text: 'The shepherd searches through thorns and rocks, calling into the darkness. Finally — he finds the sheep, scared and alone!', background: 'wilderness', character: 'shepherd' },
        { speaker: 'Jesus', text: '"When he finds it, he joyfully puts it on his shoulders and goes home. He calls his friends and says: Rejoice with me! I have found my lost sheep!"', verse: 'Luke 15:5-6', character: 'jesus', emotion: 'joyful' },
        { speaker: 'Jesus', text: '"In the same way, there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons."', verse: 'Luke 15:7', character: 'jesus' },
        { speaker: 'Narrator', text: '📖 What We Learned: God is like that shepherd. When we wander, He searches for us. He never gives up! "The Lord is my shepherd, I lack nothing." — Psalm 23:1 🐑❤️', background: 'hillside' }
      ]}
    ]
  },
  {
    id: 'prodigal-son',
    title: 'The Prodigal Son',
    description: 'The most beautiful story of a father\'s unconditional love — a picture of God\'s heart for us.',
    category: 'parables',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🏠',
    color: 'from-rose-400 to-amber-400',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Jesus', text: '"There was a man who had two sons. The younger one said: Father, give me my share of the estate. So he divided his property between them."', verse: 'Luke 15:11-12', character: 'jesus' },
        { speaker: 'Narrator', text: 'The younger son took his money and went to a far country. He wasted everything on wild living. Then a severe famine came, and he was starving.', background: 'far-country' },
        { speaker: 'Narrator', text: 'He was so hungry he wanted to eat the pig food! Finally, he came to his senses...', background: 'far-country' },
        { speaker: 'Son', text: '"How many of my father\'s hired servants have food to spare, and here I am starving! I will set out and go back to my father and say: Father, I have sinned against heaven and against you. I am no longer worthy to be called your son."', verse: 'Luke 15:17-19', character: 'son', emotion: 'ashamed' },
        { speaker: 'Narrator', text: 'But while he was still a long way off, his father saw him and was filled with compassion. He RAN to his son, threw his arms around him, and kissed him!', background: 'field', verse: 'Luke 15:20', character: 'father' },
        { speaker: 'Father', text: '"Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet. Bring the fattened calf and kill it. Let\'s have a feast! For this son of mine was dead and is alive again; he was lost and is found!"', verse: 'Luke 15:22-24', character: 'father', emotion: 'joyful' },
        { speaker: 'Narrator', text: '📖 What We Learned: That father is God. No matter how far we\'ve wandered, He is watching the road, waiting for us to come home. And when we do — HEAVEN CELEBRATES! 🏠❤️', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'good-samaritan',
    title: 'The Good Samaritan',
    description: 'Jesus redefines "neighbor" — love knows no boundaries.',
    category: 'parables',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🤝',
    color: 'from-green-500 to-blue-500',
    scenes: [
      { id: 0, background: 'road', dialogue: [
        { speaker: 'Narrator', text: 'A lawyer asked Jesus, "Who is my neighbor?" Jesus responded with a story:', background: 'road', character: 'jesus' },
        { speaker: 'Jesus', text: '"A man was going down from Jerusalem to Jericho when he fell into the hands of robbers. They stripped him, beat him, and went away, leaving him half dead."', verse: 'Luke 10:30', character: 'jesus' },
        { speaker: 'Narrator', text: 'A priest came by — saw the man — and crossed to the other side. Then a Levite (religious leader) did the same.', background: 'road' },
        { speaker: 'Narrator', text: 'But a Samaritan — someone Jews despised — came upon the man. What did he do?', background: 'road' },
        { speaker: 'Jesus', text: '"He took pity on him. He went to him and bandaged his wounds. He put him on his own donkey, brought him to an inn, and took care of him. The next day he gave the innkeeper money and said: Take care of him. I will repay any extra expense when I return."', verse: 'Luke 10:33-35', character: 'jesus', emotion: 'compassionate' },
        { speaker: 'Jesus', text: '"Which of these three was a neighbor to the man? Go and do likewise."', verse: 'Luke 10:36-37', character: 'jesus' },
        { speaker: 'Narrator', text: '📖 What We Learned: Your "neighbor" is anyone in need — regardless of who they are. "Love your neighbor as yourself." — Mark 12:31 🤝❤️', background: 'road' }
      ]}
    ]
  },
  {
    id: 'feeding-5000',
    title: 'Feeding the 5,000',
    description: 'Jesus takes a boy\'s small lunch and multiplies it to feed thousands.',
    category: 'new-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🍞',
    color: 'from-yellow-400 to-orange-500',
    scenes: [
      { id: 0, background: 'hillside-crowd', dialogue: [
        { speaker: 'Narrator', text: 'A huge crowd followed Jesus. It was getting late and everyone was hungry. The disciples panicked — 5,000 men plus women and children!', background: 'hillside-crowd' },
        { speaker: 'Andrew', text: '"Here is a boy with five small barley loaves and two small fish, but how far will they go among so many?"', verse: 'John 6:9', character: 'disciple' },
        { speaker: 'Narrator', text: 'Jesus took the five loaves and two fish, looked up to heaven, gave thanks, and began to break the bread... and it kept coming!', background: 'hillside-crowd', character: 'jesus', verse: 'John 6:11' },
        { speaker: 'Narrator', text: 'Everyone ate until they were FULL! They gathered twelve baskets of leftovers — more than they started with!', background: 'hillside-crowd', verse: 'John 6:13' },
        { speaker: 'Jesus', text: '"I am the bread of life. Whoever comes to me will never go hungry."', verse: 'John 6:35', character: 'jesus', emotion: 'loving' },
        { speaker: 'Narrator', text: '📖 What We Learned: When we give what we have to God — no matter how small — He multiplies it beyond our imagination! "Now to Him who is able to do immeasurably more." — Ephesians 3:20 🍞✨', background: 'hillside-crowd' }
      ]}
    ]
  },
  {
    id: 'calms-storm',
    title: 'Jesus Calms the Storm',
    description: 'When the disciples were terrified on the sea, Jesus showed His power over nature itself.',
    category: 'new-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '⛈️',
    color: 'from-slate-600 to-blue-700',
    scenes: [
      { id: 0, background: 'flood', dialogue: [
        { speaker: 'Narrator', text: 'Jesus and His disciples were crossing the Sea of Galilee. Jesus was so tired He fell asleep in the boat.', background: 'flood', character: 'jesus' },
        { speaker: 'Narrator', text: 'A furious squall came up. Waves broke over the boat. The disciples were terrified — experienced fishermen who thought they were going to die!', background: 'flood' },
        { speaker: 'Disciples', text: '"Master, Master, we\'re going to drown!"', verse: 'Luke 8:24', character: 'disciple', emotion: 'terrified' },
        { speaker: 'Narrator', text: 'They woke Jesus. He got up, rebuked the wind and the waves...', background: 'flood' },
        { speaker: 'Jesus', text: '"Quiet! Be still!"', verse: 'Mark 4:39', character: 'jesus', emotion: 'powerful' },
        { speaker: 'Narrator', text: 'Immediately, the wind died down and it was completely calm. The disciples were amazed!', background: 'sky-sea', verse: 'Mark 4:39' },
        { speaker: 'Jesus', text: '"Why are you so afraid? Do you still have no faith?"', verse: 'Mark 4:40', character: 'jesus' },
        { speaker: 'Narrator', text: '📖 What We Learned: Jesus has power over nature itself! When storms come in our lives, He is in the boat with us. "Peace! Be still!" can be spoken over any storm. ⛈️➡️☀️', background: 'sky-sea' }
      ]}
    ]
  },
  {
    id: 'lazarus',
    title: 'Lazarus — Raised from the Dead',
    description: 'Jesus wept at the tomb of His friend — then called him back to life!',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🪦',
    color: 'from-gray-600 to-emerald-500',
    scenes: [
      { id: 0, background: 'tomb-dark', dialogue: [
        { speaker: 'Narrator', text: 'Jesus\' dear friend Lazarus became very sick. His sisters Mary and Martha sent for Jesus. But Jesus waited two days before going.', background: 'tomb-dark' },
        { speaker: 'Jesus', text: '"This sickness will not end in death. It is for God\'s glory so that God\'s Son may be glorified through it."', verse: 'John 11:4', character: 'jesus' },
        { speaker: 'Narrator', text: 'By the time Jesus arrived, Lazarus had been dead four days. Martha said:', background: 'tomb-dark', character: 'martha' },
        { speaker: 'Martha', text: '"Lord, if you had been here, my brother would not have died. But I know that even now God will give you whatever you ask."', verse: 'John 11:21-22', character: 'martha', emotion: 'sad' },
        { speaker: 'Jesus', text: '"I am the resurrection and the life. The one who believes in me will live, even though they die. Do you believe this?"', verse: 'John 11:25-26', character: 'jesus', emotion: 'loving' },
        { speaker: 'Narrator', text: 'Jesus saw Mary weeping, and the others crying. He was deeply moved. And Jesus WEPT.', background: 'tomb-dark', verse: 'John 11:35' },
        { speaker: 'Narrator', text: 'Then Jesus stood before the tomb and called out:', background: 'tomb-dark', character: 'jesus' },
        { speaker: 'Jesus', text: '"Lazarus, come out!"', verse: 'John 11:43', character: 'jesus', emotion: 'powerful' },
        { speaker: 'Narrator', text: 'Lazarus walked out of the tomb — ALIVE! Wrapped in burial cloths but breathing! Death had no power when Jesus spoke!', background: 'glorious-light', verse: 'John 11:44' },
        { speaker: 'Narrator', text: '📖 What We Learned: Jesus has power over DEATH itself! "I am the resurrection and the life." Because He lives, we too will live! 🪦➡️✨', background: 'glorious-light' }
      ]}
    ]
  },
  {
    id: 'last-supper',
    title: 'The Last Supper',
    description: 'Jesus\' final meal with His disciples — washing feet, sharing bread, and giving a new command.',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🍷',
    color: 'from-red-700 to-purple-700',
    scenes: [
      { id: 0, background: 'stable', dialogue: [
        { speaker: 'Narrator', text: 'On the night before Jesus was crucified, He gathered with His disciples for the Passover meal.', background: 'stable' },
        { speaker: 'Narrator', text: 'Jesus got up, wrapped a towel around His waist, and began to WASH the disciples\' feet — the job of the lowest servant!', background: 'stable', character: 'jesus', verse: 'John 13:4-5' },
        { speaker: 'Peter', text: '"You shall never wash my feet!"', character: 'peter', emotion: 'shocked' },
        { speaker: 'Jesus', text: '"Unless I wash you, you have no part with me... I have set you an example that you should do as I have done for you."', verse: 'John 13:8-15', character: 'jesus', emotion: 'loving' },
        { speaker: 'Narrator', text: 'Then Jesus took bread, gave thanks, broke it, and said:', background: 'stable', character: 'jesus' },
        { speaker: 'Jesus', text: '"This is my body given for you; do this in remembrance of me." And the cup: "This cup is the new covenant in my blood, which is poured out for you."', verse: 'Luke 22:19-20', character: 'jesus' },
        { speaker: 'Jesus', text: '"A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples."', verse: 'John 13:34-35', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 What We Learned: Jesus showed us that true greatness is serving others. His body was broken and His blood was poured out — for US. 🍷❤️', background: 'stable' }
      ]}
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
      { id: 0, background: 'dawn', dialogue: [
        { speaker: 'Narrator', text: 'Jesus was crucified and placed in a tomb. The disciples were devastated. But on the third day...', background: 'tomb-dark' },
        { speaker: 'Narrator', text: 'Early morning — an earthquake! An angel rolled away the stone! The guards were terrified!', background: 'earthquake', verse: 'Matthew 28:2' },
        { speaker: 'Angel', text: '"Do not be afraid. He is not here; He has risen, just as He said! Come and see the place where He lay."', verse: 'Matthew 28:5-6', character: 'angel', emotion: 'glorious' },
        { speaker: 'Narrator', text: 'The tomb was EMPTY! Jesus was ALIVE! He appeared to the women, to the disciples, to over 500 people at once!', background: 'glorious-light', verse: '1 Corinthians 15:6' },
        { speaker: 'Jesus', text: '"All authority in heaven and on earth has been given to me. Go and make disciples of all nations... And surely I am with you always, to the very end of the age."', verse: 'Matthew 28:18-20', character: 'jesus', emotion: 'glorious' },
        { speaker: 'Narrator', text: '📖 What We Learned: Death could not hold Him! Because Jesus lives, we have eternal life! "I am the resurrection and the life." — John 11:25 ✝️🎉 He is RISEN!', background: 'glorious-light' }
      ]}
    ]
  },
  {
    id: 'pentecost',
    title: 'Pentecost — The Holy Spirit Comes',
    description: 'Fire from heaven, many languages, and the birth of the Church!',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🔥',
    color: 'from-red-500 to-orange-400',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Narrator', text: 'Before Jesus ascended to heaven, He told His disciples: "Wait in Jerusalem for the gift my Father promised — you will be baptized with the Holy Spirit."', background: 'glorious-light', character: 'jesus', verse: 'Acts 1:4-5' },
        { speaker: 'Narrator', text: 'The disciples gathered together — about 120 people — praying and waiting. Then suddenly...', background: 'glorious-light' },
        { speaker: 'Narrator', text: 'A sound like a mighty rushing wind filled the house! Tongues of fire rested on each of them! They were all filled with the Holy Spirit and began to speak in other languages!', background: 'glorious-light', verse: 'Acts 2:2-4' },
        { speaker: 'Narrator', text: 'Jews from every nation were in Jerusalem for the festival. Each one heard the disciples speaking in their OWN language! They were amazed!', background: 'celebration', verse: 'Acts 2:6' },
        { speaker: 'Peter', text: '"Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit!"', verse: 'Acts 2:38', character: 'peter', emotion: 'bold' },
        { speaker: 'Narrator', text: 'That day, about 3,000 people believed and were added to the church! The Church was born!', background: 'celebration', verse: 'Acts 2:41' },
        { speaker: 'Narrator', text: '📖 What We Learned: The Holy Spirit empowers us to be witnesses for Jesus! "You will receive power when the Holy Spirit comes on you." — Acts 1:8 🔥⛪', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'paul-conversion',
    title: 'Paul\'s Conversion',
    description: 'The church\'s worst enemy became its greatest missionary — transformed by an encounter with Jesus.',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '💡',
    color: 'from-yellow-400 to-red-500',
    scenes: [
      { id: 0, background: 'road', dialogue: [
        { speaker: 'Narrator', text: 'Saul was a religious leader who persecuted Christians. He approved of their arrest and even their deaths.', background: 'road', character: 'saul' },
        { speaker: 'Narrator', text: 'He was traveling to Damascus to arrest more believers when suddenly a bright light from heaven flashed around him!', background: 'glorious-light', verse: 'Acts 9:3' },
        { speaker: 'Narrator', text: 'He fell to the ground and heard a voice:', background: 'glorious-light' },
        { speaker: 'Jesus', text: '"Saul, Saul, why do you persecute me?"', verse: 'Acts 9:4', character: 'jesus', emotion: 'powerful' },
        { speaker: 'Saul', text: '"Who are you, Lord?"', character: 'saul', emotion: 'shocked' },
        { speaker: 'Jesus', text: '"I am Jesus, whom you are persecuting. Now get up and go into the city, and you will be told what you must do."', verse: 'Acts 9:5-6', character: 'jesus' },
        { speaker: 'Narrator', text: 'Saul was blind for three days. A believer named Ananias prayed for him, and something like scales fell from his eyes. He could see again!', background: 'glorious-light', verse: 'Acts 9:18' },
        { speaker: 'Narrator', text: 'Saul — now called Paul — became the greatest missionary the world has ever known! He wrote most of the New Testament letters!', background: 'celebration' },
        { speaker: 'Narrator', text: '📖 What We Learned: No one is beyond God\'s reach! "If anyone is in Christ, the new creation has come: The old has gone, the new is here!" — 2 Corinthians 5:17 💡✝️', background: 'celebration' }
      ]}
    ]
  },

  // ═══════════════════════════════════════
  // MORE PARABLES
  // ═══════════════════════════════════════
  {
    id: 'sower',
    title: 'The Parable of the Sower',
    description: 'Jesus explains how different hearts receive God\'s Word — which kind of soil are you?',
    category: 'parables',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🌱',
    color: 'from-green-500 to-amber-500',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Jesus', text: '"A farmer went out to sow his seed. Some fell on the path, and birds ate it. Some fell on rocky places — it sprang up quickly but withered in the sun. Some fell among thorns, which choked it. But some fell on good soil — and produced a crop a hundred, sixty, or thirty times what was sown!"', verse: 'Matthew 13:3-8', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Jesus', text: '"The seed is the word of God. The path = those who hear but don\'t understand. Rocky = those who receive it with joy but fall away in trouble. Thorns = those choked by worry and wealth. Good soil = those who hear, understand, and produce a crop!"', verse: 'Matthew 13:18-23', character: 'jesus' },
        { speaker: 'Narrator', text: '📖 What We Learned: Ask God to make your heart good soil! Let His Word take deep root and produce fruit in your life! 🌱🌾', background: 'field' }
      ]}
    ]
  },
  {
    id: 'mustard-seed',
    title: 'The Mustard Seed',
    description: 'Faith as small as a mustard seed can move mountains!',
    category: 'parables',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🌿',
    color: 'from-lime-400 to-green-600',
    scenes: [
      { id: 0, background: 'garden', dialogue: [
        { speaker: 'Jesus', text: '"The kingdom of heaven is like a mustard seed, which a man took and planted in his field. Though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants and becomes a tree, so that the birds come and perch in its branches."', verse: 'Matthew 13:31-32', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Jesus', text: '"Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, \'Move from here to there,\' and it will move. Nothing will be impossible for you."', verse: 'Matthew 17:20', character: 'jesus', emotion: 'powerful' },
        { speaker: 'Narrator', text: '📖 What We Learned: It\'s not the SIZE of your faith that matters — it\'s the GOD you have faith in! Even the tiniest trust in a limitless God can do impossible things! 🌿✨', background: 'garden' }
      ]}
    ]
  },
  {
    id: 'wise-builders',
    title: 'The Wise & Foolish Builders',
    description: 'Two houses, two foundations — Jesus\' words are the rock that holds us steady.',
    category: 'parables',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🏠',
    color: 'from-amber-400 to-stone-500',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Jesus', text: '"Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew against that house; yet it did not fall, because it had its foundation on the rock."', verse: 'Matthew 7:24-25', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Jesus', text: '"But everyone who hears these words and does NOT put them into practice is like a foolish man who built his house on sand. The rain came, the streams rose, the winds blew — and that house fell with a great crash."', verse: 'Matthew 7:26-27', character: 'jesus' },
        { speaker: 'Narrator', text: '📖 What We Learned: Building your life on Jesus\' words = unshakeable! No storm can destroy a life built on the Rock! "The Lord is my rock and my fortress." — Psalm 18:2 🏠🪨', background: 'field' }
      ]}
    ]
  },
  {
    id: 'talents',
    title: 'The Parable of the Talents',
    description: 'God gives each of us gifts — what will we do with what He\'s entrusted to us?',
    category: 'parables',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '💰',
    color: 'from-yellow-500 to-amber-600',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Jesus', text: '"A man going on a journey called his servants and entrusted his wealth to them. To one he gave five bags of gold, to another two, and to another one — each according to his ability."', verse: 'Matthew 25:14-15', character: 'jesus' },
        { speaker: 'Narrator', text: 'The one with five invested and earned five more. The one with two earned two more. But the one with one buried it in the ground out of fear.', background: 'palace' },
        { speaker: 'Master', text: '"Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master\'s happiness!"', verse: 'Matthew 25:21-23', character: 'master', emotion: 'joyful' },
        { speaker: 'Narrator', text: 'The fearful servant was rebuked for doing nothing with what he was given.', background: 'palace' },
        { speaker: 'Narrator', text: '📖 What We Learned: God gives each of us unique gifts and abilities. He expects us to USE them for His glory! "Well done, good and faithful servant!" — let\'s hear those words! 💰🙏', background: 'celebration' }
      ]}
    ]
  },

  // ═══════════════════════════════════════
  // KEY TEACHINGS & LETTERS
  // ═══════════════════════════════════════
  {
    id: 'love-chapter',
    title: '1 Corinthians 13 — Love',
    description: 'The greatest chapter on love ever written — what true, God-shaped love looks like.',
    category: 'new-testament',
    difficulty: 'easy',
    ageGroup: 'all',
    icon: '❤️',
    color: 'from-rose-400 to-red-500',
    scenes: [
      { id: 0, background: 'celebration', dialogue: [
        { speaker: 'Narrator', text: 'The apostle Paul wrote the most beautiful description of love ever recorded:', background: 'celebration' },
        { speaker: 'Paul', text: '"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs."', verse: '1 Corinthians 13:4-5', character: 'paul', emotion: 'teaching' },
        { speaker: 'Paul', text: '"Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."', verse: '1 Corinthians 13:6-7', character: 'paul' },
        { speaker: 'Paul', text: '"Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away."', verse: '1 Corinthians 13:8', character: 'paul' },
        { speaker: 'Paul', text: '"And now these three remain: faith, hope, and love. But the greatest of these is love."', verse: '1 Corinthians 13:13', character: 'paul', emotion: 'inspired' },
        { speaker: 'Narrator', text: '📖 What We Learned: Try replacing "love" with your name: "[Your name] is patient, [your name] is kind..." Let God shape your love to be more like His! ❤️', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'armor-of-god',
    title: 'The Armor of God',
    description: 'Paul describes the spiritual armor we need to stand firm against evil.',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '🛡️',
    color: 'from-slate-500 to-indigo-600',
    scenes: [
      { id: 0, background: 'battlefield', dialogue: [
        { speaker: 'Paul', text: '"Put on the full armor of God, so that you can take your stand against the devil\'s schemes. For our struggle is not against flesh and blood, but against spiritual forces of evil."', verse: 'Ephesians 6:11-12', character: 'paul', emotion: 'teaching' },
        { speaker: 'Paul', text: '"Stand firm with the Belt of Truth, the Breastplate of Righteousness, and your feet fitted with the readiness of the Gospel of Peace.\nTake up the Shield of Faith, the Helmet of Salvation, and the Sword of the Spirit — which is the Word of God.\nAnd pray in the Spirit on all occasions."', verse: 'Ephesians 6:14-18', character: 'paul' },
        { speaker: 'Narrator', text: '📖 What We Learned: We are in a spiritual battle, but God has equipped us completely! Truth, righteousness, peace, faith, salvation, and God\'s Word — we have everything we need! 🛡️⚔️', background: 'battlefield' }
      ]}
    ]
  },
  {
    id: 'fruit-of-spirit',
    title: 'Fruit of the Spirit',
    description: 'When the Holy Spirit lives in us, beautiful fruit grows — love, joy, peace, and more!',
    category: 'new-testament',
    difficulty: 'easy',
    ageGroup: 'kids',
    icon: '🍇',
    color: 'from-purple-400 to-green-500',
    scenes: [
      { id: 0, background: 'garden', dialogue: [
        { speaker: 'Paul', text: '"The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Against such things there is no law."', verse: 'Galatians 5:22-23', character: 'paul', emotion: 'teaching' },
        { speaker: 'Narrator', text: 'Notice — it says FRUIT (singular), not fruits. This is ONE harvest with nine flavors, all growing together when we let the Holy Spirit work in us!', background: 'garden' },
        { speaker: 'Narrator', text: 'You can\'t produce this fruit by trying harder. It grows naturally when we stay connected to Jesus — like branches connected to a vine!', background: 'garden', verse: 'John 15:5' },
        { speaker: 'Narrator', text: '📖 What We Learned: "I am the vine; you are the branches. If you remain in me, you will bear much fruit." — John 15:5 Stay connected to Jesus and watch the fruit grow! 🍇🌿', background: 'garden' }
      ]}
    ]
  },
  {
    id: 'revelation',
    title: 'Revelation — A New Heaven & Earth',
    description: 'The Bible\'s final vision: God makes everything new, and we live with Him forever!',
    category: 'new-testament',
    difficulty: 'medium',
    ageGroup: 'all',
    icon: '👑',
    color: 'from-amber-400 to-indigo-600',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Narrator', text: 'The last book of the Bible — Revelation — gives us a vision of the end of all things. John saw the final victory:', background: 'glorious-light' },
        { speaker: 'John', text: '"Then I saw a new heaven and a new earth... I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband."', verse: 'Revelation 21:1-2', character: 'john' },
        { speaker: 'God', text: '"Look! God\'s dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God."', verse: 'Revelation 21:3', character: 'god', emotion: 'glorious' },
        { speaker: 'God', text: '"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away."', verse: 'Revelation 21:4', character: 'god', emotion: 'loving' },
        { speaker: 'God', text: '"I am making everything new!... It is done. I am the Alpha and the Omega, the Beginning and the End."', verse: 'Revelation 21:5-6', character: 'god' },
        { speaker: 'Jesus', text: '"Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done."', verse: 'Revelation 22:12', character: 'jesus', emotion: 'glorious' },
        { speaker: 'Narrator', text: '📖 The Bible ends with this promise: "He who testifies to these things says, \'Yes, I am coming soon.\' Amen. Come, Lord Jesus! The grace of the Lord Jesus be with God\'s people. Amen." — Revelation 22:20-21 👑✨', background: 'glorious-light' }
      ]}
    ]
  }
];
