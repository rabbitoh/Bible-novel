import { Story } from '../types';

// ═══════════════════════════════════════
// GENESIS through ESTHER
// ═══════════════════════════════════════

export const ot1Stories: Story[] = [
  // ─── GENESIS ───
  {
    id: 'genesis-creation',
    title: 'Genesis: In the Beginning',
    description: 'God creates everything from nothing — light, sky, land, stars, animals, and finally people made in His image.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🌍', color: 'from-blue-500 to-green-500',
    scenes: [
      { id: 0, background: 'void', dialogue: [
        { speaker: 'Narrator', text: 'Before anything existed — no stars, no earth, no light — there was only God. And God decided to create.', background: 'void' },
        { speaker: 'God', text: '"Let there be light!" And light exploded into existence. God separated it from the darkness, calling them Day and Night.', verse: 'Genesis 1:3-5', character: 'god' },
        { speaker: 'Narrator', text: 'Over six days, God built a magnificent world: the sky, oceans, land, plants, sun, moon, stars, fish, birds, and animals. Each day He looked at His work and said, "This is good."', background: 'eden' },
        { speaker: 'God', text: '"Let Us make mankind in Our image." He formed Adam from dust and breathed life into him. Then He made Eve from Adam\'s side — a partner, an equal, a reflection of God\'s love.', verse: 'Genesis 1:26-27, 2:22', character: 'god', emotion: 'loving' },
        { speaker: 'Narrator', text: 'On the seventh day, God rested — not because He was tired, but to savor what He had made. He blessed that day and set it apart.', background: 'eden', verse: 'Genesis 2:2-3' },
        { speaker: 'Narrator', text: '📖 Genesis means "beginnings." This book tells us where everything came from — and who we belong to. You are not an accident. You were made on purpose, by a God who loves you. 🌍✨', background: 'eden' }
      ]}
    ]
  },
  {
    id: 'genesis-fall',
    title: 'Genesis: The First Choice',
    description: 'Adam and Eve had everything — except one tree. Their choice changed the world, but God promised a rescue.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🍎', color: 'from-red-500 to-green-600',
    scenes: [
      { id: 0, background: 'eden', dialogue: [
        { speaker: 'Narrator', text: 'In the Garden of Eden, Adam and Eve had everything they could want — except access to one tree: the tree of the knowledge of good and evil.', background: 'eden' },
        { speaker: 'God', text: '"You may eat from any tree except that one. If you eat from it, you will certainly die."', verse: 'Genesis 2:16-17', character: 'god' },
        { speaker: 'Narrator', text: 'A serpent — crafty and deceptive — approached Eve. "Did God really say that?" he whispered. "You won\'t die. God is holding out on you. Eat, and you\'ll be like Him."', background: 'garden-dark', character: 'serpent', verse: 'Genesis 3:1-5' },
        { speaker: 'Narrator', text: 'Eve looked at the fruit. It was beautiful. She wanted wisdom. She ate it — and gave some to Adam. He ate too. Immediately, shame flooded them. They hid.', background: 'garden-dark', verse: 'Genesis 3:6-7' },
        { speaker: 'God', text: '"Where are you?" God called — not because He didn\'t know, but because He wanted them to come back to Him.', verse: 'Genesis 3:9', character: 'god' },
        { speaker: 'Narrator', text: 'Sin entered the world through one act of disobedience. But even in that moment, God made a promise: a Rescuer would come, born of a woman, who would crush the serpent\'s power forever.', background: 'light-burst', verse: 'Genesis 3:15' },
        { speaker: 'Narrator', text: '📖 The whole rest of the Bible is the story of God keeping that promise. Jesus is that Rescuer. The story of the Fall is really the beginning of the story of Redemption. 🍎➡️✝️', background: 'light-burst' }
      ]}
    ]
  },
  {
    id: 'genesis-cain-abel',
    title: 'Genesis: Cain & Abel',
    description: 'The first murder — jealousy spirals into tragedy, but God warns: "Sin is crouching at your door."',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🩸', color: 'from-red-700 to-gray-700',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Narrator', text: 'Adam and Eve\'s sons, Cain and Abel, brought offerings to God. Abel brought the best of his flock. Cain brought some of his crops — but his heart wasn\'t fully in it.', background: 'field' },
        { speaker: 'Narrator', text: 'God looked with favor on Abel\'s offering but not Cain\'s. Cain burned with jealousy.', background: 'field', verse: 'Genesis 4:3-5' },
        { speaker: 'God', text: '"Why are you angry? If you do what is right, will you not be accepted? But sin is crouching at your door; it desires to have you, but you must rule over it."', verse: 'Genesis 4:6-7', character: 'god' },
        { speaker: 'Narrator', text: 'God warned Cain. He gave him a chance. But Cain invited his brother to the field... and killed him.', background: 'field', verse: 'Genesis 4:8' },
        { speaker: 'God', text: '"Where is your brother Abel?" "Am I my brother\'s keeper?"', verse: 'Genesis 4:9', character: 'god' },
        { speaker: 'Narrator', text: '📖 God still asks us: "Where is your brother?" Sin crouches at every door. But God gives us the power to overcome it. We ARE our brother\'s keeper. 🩸', background: 'field' }
      ]}
    ]
  },
  {
    id: 'genesis-noah',
    title: 'Genesis: Noah\'s Ark',
    description: 'When the whole world turned wicked, one man walked with God. God saved him, his family, and every kind of animal.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🚢', color: 'from-cyan-500 to-blue-600',
    scenes: [
      { id: 0, background: 'corrupt-world', dialogue: [
        { speaker: 'Narrator', text: 'Humanity had become so corrupt that God was grieved He had made them. But one man — Noah — found favor with God. He walked faithfully in a world that had forgotten Him.', background: 'noah-field', verse: 'Genesis 6:5-8' },
        { speaker: 'God', text: '"Build an enormous ark. I am sending a flood to wash the earth clean. But I will keep My promise to you. Bring your family and two of every kind of animal."', verse: 'Genesis 6:13-20', character: 'god' },
        { speaker: 'Narrator', text: 'Noah obeyed — even though it had never rained. People mocked him. But he kept building. And when the ark was finished, the animals came. Two by two.', background: 'building-ark', verse: 'Genesis 7:7-9' },
        { speaker: 'Narrator', text: 'The rain fell for 40 days and nights. The waters covered the mountains. But inside the ark, God kept them safe. When the waters receded, Noah stepped onto a new earth.', background: 'flood', verse: 'Genesis 7:11-12, 8:15-18' },
        { speaker: 'God', text: '"I place My rainbow in the clouds as a sign of My covenant: never again will I destroy the earth with a flood."', verse: 'Genesis 9:12-13', character: 'god', emotion: 'loving' },
        { speaker: 'Narrator', text: '📖 Noah teaches us that faithfulness matters — even when you\'re the only one. God remembers those who walk with Him. And the rainbow? It\'s His love letter to the sky. 🌈🚢', background: 'rainbow' }
      ]}
    ]
  },
  {
    id: 'genesis-babel',
    title: 'Genesis: The Tower of Babel',
    description: 'People tried to build their way to heaven. God confused their languages to humble them — and scattered them across the earth.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🏗️', color: 'from-stone-500 to-amber-600',
    scenes: [
      { id: 0, background: 'building-ark', dialogue: [
        { speaker: 'Narrator', text: 'After the flood, people settled together and said: "Let\'s build a tower that reaches to the sky! Let\'s make a name for ourselves!"', background: 'building-ark', verse: 'Genesis 11:4' },
        { speaker: 'Narrator', text: 'Their motive was pride — not worship. They wanted to be their own gods, to reach heaven on their own terms.', background: 'building-ark' },
        { speaker: 'God', text: '"If they can do this as one people with one language, nothing they plan will be impossible for them. Let Us go down and confuse their language."', verse: 'Genesis 11:6-7', character: 'god' },
        { speaker: 'Narrator', text: 'Suddenly, they couldn\'t understand each other! The building stopped. The people scattered across the earth. The city was called Babel — meaning "confusion."', background: 'building-ark', verse: 'Genesis 11:8-9' },
        { speaker: 'Narrator', text: '📖 We can\'t build our way to God. But centuries later, God came DOWN to us — in Jesus. We don\'t reach up; He reaches down. 🏗️➡️✝️', background: 'building-ark' }
      ]}
    ]
  },
  {
    id: 'genesis-abraham',
    title: 'Genesis: Abraham\'s Faith',
    description: 'God called an old man to leave everything and follow Him. Abraham believed — and it changed history.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '⭐', color: 'from-amber-500 to-yellow-600',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'God', text: '"Leave your country, your people, your father\'s household. Go to a land I will show you. I will make you a great nation, and through you, all peoples on earth will be blessed."', verse: 'Genesis 12:1-3', character: 'god' },
        { speaker: 'Narrator', text: 'Abram was 75 years old. He had no map, no guarantee — just God\'s word. And he went.', background: 'desert', verse: 'Genesis 12:4' },
        { speaker: 'Narrator', text: 'Years passed. Abram still had no son. God took him outside:', background: 'desert' },
        { speaker: 'God', text: '"Look at the stars. Can you count them? That\'s how many descendants you will have."', verse: 'Genesis 15:5', character: 'god' },
        { speaker: 'Narrator', text: 'Abram believed God. And God counted that faith as righteousness. Later, God changed his name to Abraham — "father of many nations." At 100 years old, Isaac was born — the impossible child.', background: 'stars', verse: 'Genesis 15:6, 17:5, 21:1-3' },
        { speaker: 'Narrator', text: '📖 Abraham is the father of faith. His story teaches us: God\'s promises are bigger than our circumstances. What looks impossible to us is possible to God. ⭐🙏', background: 'stars' }
      ]}
    ]
  },
  {
    id: 'genesis-joseph',
    title: 'Genesis: Joseph\'s Journey',
    description: 'Sold by his brothers, enslaved, imprisoned — yet Joseph trusted God, and God turned his pain into a plan to save nations.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '👘', color: 'from-purple-500 to-amber-400',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Narrator', text: 'Jacob had twelve sons, but he loved Joseph most — giving him a beautiful coat of many colors. His brothers were consumed with jealousy.', background: 'field', verse: 'Genesis 37:3-4' },
        { speaker: 'Narrator', text: 'They threw Joseph into a pit, then sold him to traders for twenty pieces of silver. They dipped his coat in goat\'s blood and told their father a wild animal had killed him.', background: 'field', verse: 'Genesis 37:23-35' },
        { speaker: 'Narrator', text: 'In Egypt, Joseph served faithfully — even in slavery, even in prison where he was falsely accused. God was with him through it all.', background: 'palace', verse: 'Genesis 39:21' },
        { speaker: 'Narrator', text: 'Pharaoh had disturbing dreams no one could interpret. Joseph, empowered by God, explained them: seven years of plenty followed by seven years of famine.', background: 'palace', verse: 'Genesis 41:25-36' },
        { speaker: 'Narrator', text: 'Pharaoh made Joseph second-in-command over all Egypt! When famine struck, Joseph\'s brothers came begging for food. They didn\'t recognize him.', background: 'palace', verse: 'Genesis 42:6-8' },
        { speaker: 'Joseph', text: '"Don\'t be afraid. You meant it for evil, but God meant it for good — to accomplish what is now being done, the saving of many lives."', verse: 'Genesis 50:20', character: 'joseph', emotion: 'forgiving' },
        { speaker: 'Narrator', text: '📖 Joseph\'s story is one of the most powerful in Scripture. It teaches us: what the enemy means for harm, God can redeem for good. Your pain is not wasted in God\'s hands. 👘❤️', background: 'celebration' }
      ]}
    ]
  },

  // ─── EXODUS ───
  {
    id: 'exodus-moses',
    title: 'Exodus: Moses & the Burning Bush',
    description: 'God spoke from a bush that burned but was not consumed, calling a reluctant shepherd to free His enslaved people.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🔥', color: 'from-orange-500 to-red-600',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'Four hundred years after Joseph, the Israelites were slaves in Egypt. They cried out to God. He heard them.', background: 'desert', verse: 'Exodus 2:23-25' },
        { speaker: 'Narrator', text: 'Moses, an Israelite raised as Egyptian royalty, had fled to the desert after killing a man. One day, tending sheep, he saw a bush on fire — but it wasn\'t burning up!', background: 'desert', character: 'moses', verse: 'Exodus 3:1-2' },
        { speaker: 'God', text: '"Moses! Take off your sandals — this is holy ground. I am the God of Abraham, Isaac, and Jacob. I have seen my people\'s suffering. I am sending you to Pharaoh to bring them out."', verse: 'Exodus 3:4-10', character: 'god' },
        { speaker: 'Moses', text: '"Who am I? I\'m nobody. What if they don\'t believe me? I can\'t speak well..."', verse: 'Exodus 3:11, 4:1, 10', character: 'moses', emotion: 'afraid' },
        { speaker: 'God', text: '"Who made your mouth? Is it not I? Go — I will be with you. I AM WHO I AM. Tell them: I AM has sent me."', verse: 'Exodus 3:14, 4:11-12', character: 'god', emotion: 'powerful' },
        { speaker: 'Narrator', text: '📖 God doesn\'t call the qualified — He qualifies the called. Every excuse Moses made, God had an answer. When God says "I will be with you," that\'s all you need. 🔥🙏', background: 'burning-bush' }
      ]}
    ]
  },
  {
    id: 'exodus-plagues',
    title: 'Exodus: Ten Plagues & Passover',
    description: 'God sent ten devastating plagues on Egypt — but His people were protected by the blood of a lamb.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🩸', color: 'from-red-600 to-amber-500',
    scenes: [
      { id: 0, background: 'egypt', dialogue: [
        { speaker: 'Narrator', text: 'Moses demanded: "Let my people go!" Pharaoh refused — again and again. So God sent ten plagues: water to blood, frogs, gnats, flies, diseased livestock, boils, hail, locusts, darkness...', background: 'egypt', verse: 'Exodus 7-10' },
        { speaker: 'Narrator', text: 'But Pharaoh\'s heart remained hardened. One final plague remained — the worst of all.', background: 'egypt' },
        { speaker: 'God', text: '"Each family must take a lamb without defect, slaughter it, and paint its blood on the doorposts and lintel of their homes. When I see the blood, I will pass over you. No plague will touch you."', verse: 'Exodus 12:3-7, 13', character: 'god' },
        { speaker: 'Narrator', text: 'That night, the angel of death swept through Egypt. Every firstborn died — except behind doors marked with blood. The Israelites were spared.', background: 'egypt', verse: 'Exodus 12:29-30' },
        { speaker: 'Narrator', text: 'Pharaoh finally cried: "GO!" And the Israelites left Egypt — laden with gold the Egyptians gave them, free at last.', background: 'egypt', verse: 'Exodus 12:31-36' },
        { speaker: 'Narrator', text: '📖 The Passover lamb points directly to Jesus — "the Lamb of God who takes away the sin of the world" (John 1:29). His blood marks our doorposts. Death passes over us. 🩸✝️', background: 'egypt' }
      ]}
    ]
  },
  {
    id: 'exodus-red-sea',
    title: 'Exodus: Parting the Red Sea',
    description: 'Trapped between Pharaoh\'s army and the sea, Israel watched God split the waters in two and walk them through on dry ground.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🌊', color: 'from-blue-600 to-cyan-500',
    scenes: [
      { id: 0, background: 'red-sea', dialogue: [
        { speaker: 'Narrator', text: 'The Israelites were free — but Pharaoh changed his mind. His chariots thundered behind them. Ahead: the Red Sea. They were trapped.', background: 'red-sea', verse: 'Exodus 14:9-10' },
        { speaker: 'People', text: '"Was there no room for graves in Egypt that you brought us here to die?!"', verse: 'Exodus 14:11-12', character: 'people', emotion: 'terrified' },
        { speaker: 'Moses', text: '"Do not be afraid! Stand firm and watch the Lord fight for you today. The Lord will fight for you; you need only to be still."', verse: 'Exodus 14:13-14', character: 'moses', emotion: 'faithful' },
        { speaker: 'Narrator', text: 'God told Moses to raise his staff. A powerful east wind blew all night — and the sea DIVIDED. Walls of water on each side, dry ground between them!', background: 'red-sea', verse: 'Exodus 14:21-22' },
        { speaker: 'Narrator', text: 'Israel walked through. The Egyptian army followed — but God jammed their chariot wheels. Then the waters crashed back. Not one enemy survived.', background: 'red-sea', verse: 'Exodus 14:23-28' },
        { speaker: 'Narrator', text: '📖 When you feel trapped — between the problem in front of you and the pressure behind you — remember: God parts seas. "The Lord will fight for you; you need only to be still." 🌊🙏', background: 'sky-sea' }
      ]}
    ]
  },
  {
    id: 'exodus-commandments',
    title: 'Exodus: The Ten Commandments',
    description: 'At Mount Sinai, amid thunder and fire, God gave His people ten words that would shape morality for all of history.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '📜', color: 'from-gray-500 to-slate-600',
    scenes: [
      { id: 0, background: 'mountain-sinai', dialogue: [
        { speaker: 'Narrator', text: 'At Mount Sinai, the mountain shook with thunder, lightning, fire, and smoke. A trumpet blast grew louder and louder. The people trembled.', background: 'mountain-sinai', verse: 'Exodus 19:16-18' },
        { speaker: 'God', text: '"I am the Lord your God, who brought you out of Egypt. 1. No other gods before Me. 2. No idols. 3. Don\'t misuse My name. 4. Keep the Sabbath holy. 5. Honor your parents. 6. Don\'t murder. 7. Don\'t commit adultery. 8. Don\'t steal. 9. Don\'t lie. 10. Don\'t covet."', verse: 'Exodus 20:1-17', character: 'god' },
        { speaker: 'Narrator', text: 'Moses went up the mountain and received stone tablets written by God\'s own finger. Meanwhile, the people panicked and made a golden calf to worship!', background: 'mountain-sinai', verse: 'Exodus 31:18, 32:1-6' },
        { speaker: 'Narrator', text: 'Even in their failure, God showed mercy when Moses interceded. He is a God of justice AND compassion.', background: 'mountain-sinai', verse: 'Exodus 34:6-7' },
        { speaker: 'Narrator', text: '📖 Jesus said all the commandments hang on two things: Love God with everything, and love your neighbor as yourself. God\'s rules aren\'t chains — they\'re a compass. 📜❤️', background: 'mountain-sinai' }
      ]}
    ]
  },
  {
    id: 'exodus-tabernacle',
    title: 'Exodus: The Tabernacle',
    description: 'God gave Moses blueprints for a portable sanctuary — a place where He would dwell among His people.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '⛺', color: 'from-amber-500 to-red-500',
    scenes: [
      { id: 0, background: 'mountain-sinai', dialogue: [
        { speaker: 'God', text: '"Have them make a sanctuary for Me, and I will dwell among them. Make it exactly like the pattern I show you."', verse: 'Exodus 25:8-9', character: 'god' },
        { speaker: 'Narrator', text: 'God gave Moses incredibly detailed plans: a courtyard, an altar, a golden lampstand, a table for sacred bread, an altar of incense, and the Most Holy Place — where God\'s presence rested above the Ark of the Covenant.', background: 'mountain-sinai', verse: 'Exodus 25-27' },
        { speaker: 'Narrator', text: 'The materials were precious: gold, silver, bronze, fine linen, acacia wood, gemstones. The people gave so generously Moses had to tell them to STOP!', background: 'mountain-sinai', verse: 'Exodus 36:5-6' },
        { speaker: 'Narrator', text: 'When the tabernacle was finished, the glory of the Lord filled it like a cloud. No one could enter.', background: 'glorious-light', verse: 'Exodus 40:34-35' },
        { speaker: 'Narrator', text: '📖 The tabernacle was God dwelling among His people. In Jesus, "the Word became flesh and dwelt (tabernacled) among us" (John 1:14). Now through the Holy Spirit, God dwells in US. ⛺➡️❤️', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── LEVITICUS ───
  {
    id: 'leviticus-holiness',
    title: 'Leviticus: Be Holy, For I Am Holy',
    description: 'God taught Israel that approaching Him requires purity — pointing forward to Jesus, our perfect sacrifice.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🕯️', color: 'from-amber-400 to-orange-500',
    scenes: [
      { id: 0, background: 'mountain-sinai', dialogue: [
        { speaker: 'Narrator', text: 'Leviticus is all about holiness — how a sinful people can live in the presence of a holy God. God gave detailed laws about sacrifices, purity, festivals, and daily living.', background: 'mountain-sinai' },
        { speaker: 'God', text: '"Speak to the whole assembly of Israel: Be holy, because I the Lord your God am holy."', verse: 'Leviticus 19:2', character: 'god' },
        { speaker: 'Narrator', text: 'Once a year, on the Day of Atonement (Yom Kippur), the high priest entered the Most Holy Place with blood to make atonement for the sins of the entire nation.', background: 'mountain-sinai', verse: 'Leviticus 16' },
        { speaker: 'God', text: '"Love your neighbor as yourself. I am the Lord."', verse: 'Leviticus 19:18', character: 'god' },
        { speaker: 'Narrator', text: '📖 Leviticus shows us that sin is serious — it requires blood. But Jesus offered Himself once for all. "We have been made holy through the sacrifice of Christ" (Hebrews 10:10). The sacrifices pointed to Him. 🕯️✝️', background: 'mountain-sinai' }
      ]}
    ]
  },

  // ─── NUMBERS ───
  {
    id: 'numbers-bronze-serpent',
    title: 'Numbers: The Bronze Serpent',
    description: 'In the wilderness, grumbling Israelites were bitten by snakes. One look at a bronze serpent on a pole brought healing.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🐍', color: 'from-amber-500 to-green-600',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'Israel wandered the wilderness for 40 years because of their disobedience. Along the way, they kept grumbling: "We hate this miserable food! Why did you bring us here to die?"', background: 'desert', verse: 'Numbers 21:5' },
        { speaker: 'Narrator', text: 'God sent venomous snakes among them. Many died. The people cried out in repentance.', background: 'desert', verse: 'Numbers 21:6' },
        { speaker: 'God', text: '"Make a bronze serpent and put it on a pole. Anyone who is bitten can look at it and live."', verse: 'Numbers 21:8', character: 'god' },
        { speaker: 'Narrator', text: 'It seems strange — just look and live? But it was an act of faith. They had to trust God\'s method, not their own.', background: 'desert', verse: 'Numbers 21:9' },
        { speaker: 'Narrator', text: '📖 Jesus said: "As Moses lifted up the serpent in the wilderness, so the Son of Man must be lifted up, that everyone who believes may have eternal life" (John 3:14-15). Look to Jesus and live! 🐍➡️✝️', background: 'desert' }
      ]}
    ]
  },

  // ─── DEUTERONOMY ───
  {
    id: 'deuteronomy-choose-life',
    title: 'Deuteronomy: Choose Life',
    description: 'Moses\' final speech to Israel before they enter the Promised Land — a passionate call to love and obey God.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '📢', color: 'from-amber-400 to-red-500',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'After 40 years in the wilderness, Moses stood before the new generation of Israelites on the edge of the Promised Land. This was his farewell speech.', background: 'desert' },
        { speaker: 'Moses', text: '"Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart, with all your soul, and with all your strength."', verse: 'Deuteronomy 6:4-5', character: 'moses', emotion: 'passionate' },
        { speaker: 'Moses', text: '"I set before you life and death, blessing and cursing. Therefore choose life, that you and your descendants may live!"', verse: 'Deuteronomy 30:19', character: 'moses' },
        { speaker: 'Narrator', text: 'Moses would not enter the Promised Land himself — because of one moment of disobedience. But he passed the torch to Joshua.', background: 'desert', verse: 'Deuteronomy 34:1-5' },
        { speaker: 'Narrator', text: '📖 Deuteronomy means "second law" — a restatement of God\'s covenant for a new generation. The core message: Love God completely. Choose life. Teach your children. Every generation must make this choice. 📢❤️', background: 'desert' }
      ]}
    ]
  },

  // ─── JOSHUA ───
  {
    id: 'joshua-jericho',
    title: 'Joshua: The Battle of Jericho',
    description: 'God gave Joshua the strangest battle plan ever — march, be silent, shout — and the walls collapsed!',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🏰', color: 'from-stone-600 to-amber-500',
    scenes: [
      { id: 0, background: 'battlefield', dialogue: [
        { speaker: 'God', text: '"Be strong and courageous! I have given Jericho into your hands. March around the city once daily for six days. On the seventh day, march seven times. Then shout — and the wall will fall."', verse: 'Joshua 1:9, 6:2-5', character: 'god' },
        { speaker: 'Narrator', text: 'No battering rams. No siege towers. Just walking and silence. For six days, the army marched in complete quiet around the massive walls.', background: 'battlefield', verse: 'Joshua 6:10-14' },
        { speaker: 'Narrator', text: 'On day seven, they marched seven times. Joshua commanded: "SHOUT! For the Lord has given you the city!"', background: 'battlefield', verse: 'Joshua 6:16' },
        { speaker: 'Narrator', text: 'The people shouted — and the walls of Jericho COLLAPSED flat! Every single wall fell. God fought for them!', background: 'celebration', verse: 'Joshua 6:20' },
        { speaker: 'Narrator', text: '📖 Some battles require weapons. Others require obedience and faith. God\'s methods may seem strange, but they always work. "Be strong and courageous!" 🏰💥', background: 'celebration' }
      ]}
    ]
  },

  // ─── JUDGES ───
  {
    id: 'judges-gideon',
    title: 'Judges: Gideon\'s 300',
    description: 'God whittled Gideon\'s army from 32,000 down to 300 — so no one could claim the glory but Him.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🫗', color: 'from-amber-500 to-green-500',
    scenes: [
      { id: 0, background: 'battlefield', dialogue: [
        { speaker: 'Narrator', text: 'Israel had sinned, and the Midianites oppressed them. Gideon was hiding, threshing wheat in a winepress, when an angel appeared.', background: 'battlefield', character: 'gideon', verse: 'Judges 6:11-12' },
        { speaker: 'Angel', text: '"The Lord is with you, mighty warrior!" Gideon asked for signs — fleece with dew, then fleece without dew. God patiently confirmed His call.', verse: 'Judges 6:12, 6:36-40', character: 'angel' },
        { speaker: 'Narrator', text: 'Gideon gathered 32,000 men. But God said: "That\'s too many. If they win, they\'ll claim the credit." So 22,000 went home. 10,000 remained.', background: 'battlefield', verse: 'Judges 7:2-3' },
        { speaker: 'God', text: '"Still too many. Take them to the water." God kept only the 300 who lapped water from their hands like dogs — alert and ready.', verse: 'Judges 7:4-7', character: 'god' },
        { speaker: 'Narrator', text: '300 men against a vast Midianite army! That night, they surrounded the camp with trumpets, empty jars, and torches. They blew trumpets, smashed jars, and shouted: "A sword for the Lord and for Gideon!"', background: 'battlefield', verse: 'Judges 7:16-20' },
        { speaker: 'Narrator', text: 'The enemy army panicked, turned on each other, and fled! God won the victory with 300 men.', background: 'celebration', verse: 'Judges 7:21-22' },
        { speaker: 'Narrator', text: '📖 God doesn\'t need your numbers — He needs your faithfulness. "My grace is sufficient for you, for My power is made perfect in weakness." — 2 Corinthians 12:9 🫗💪', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'judges-samson',
    title: 'Judges: Samson\'s Final Act',
    description: 'The strongest man alive had a fatal weakness. But in his final moment, he called on God one last time.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '💪', color: 'from-red-500 to-stone-600',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'Samson was supernaturally strong — he killed a lion barehanded, defeated 1,000 men with a donkey\'s jawbone, and ripped city gates off their hinges. His strength came from his Nazirite vow to God.', background: 'battlefield', verse: 'Judges 14:6, 15:15, 16:3' },
        { speaker: 'Narrator', text: 'But Samson had a weakness: he was drawn to women who didn\'t honor God. Delilah, a Philistine woman, was paid to discover his secret.', background: 'palace', character: 'samson', verse: 'Judges 16:4-6' },
        { speaker: 'Narrator', text: 'She nagged him day after day until he finally told her: his strength was in his uncut hair — his Nazirite vow. She cut it while he slept. God\'s power left him.', background: 'palace', verse: 'Judges 16:16-20' },
        { speaker: 'Narrator', text: 'The Philistines blinded him, enslaved him, and mocked him in their temple. But one thing they didn\'t know: his hair was growing back.', background: 'palace', verse: 'Judges 16:21-22' },
        { speaker: 'Samson', text: '"Lord God, remember me. Strengthen me just once more. Let me pay the Philistines back for my two eyes." He pushed the pillars — and the temple collapsed on everyone. He killed more in his death than in his life.', verse: 'Judges 16:28-30', character: 'samson', emotion: 'desperate' },
        { speaker: 'Narrator', text: '📖 Samson is a warning AND a hope. Sin has consequences — but God\'s grace reaches even to our lowest moments. "If we are faithless, He remains faithful." — 2 Timothy 2:13 💪🙏', background: 'palace' }
      ]}
    ]
  },

  // ─── RUTH ───
  {
    id: 'ruth-naomi',
    title: 'Ruth: "Your God Will Be My God"',
    description: 'A Moabite widow clung to her mother-in-law, found unexpected love, and became an ancestor of King David — and Jesus.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'all', icon: '🌾', color: 'from-amber-400 to-rose-500',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Narrator', text: 'Naomi lost everything in a foreign land — her husband and both sons. She decided to return to Bethlehem and told her daughters-in-law to go home.', background: 'field', character: 'naomi', verse: 'Ruth 1:5' },
        { speaker: 'Narrator', text: 'Orpah kissed her goodbye. But Ruth clung to Naomi.', background: 'field', character: 'ruth' },
        { speaker: 'Ruth', text: '"Don\'t urge me to leave you. Where you go I will go. Where you stay I will stay. Your people will be my people, and your God will be my God. Where you die, I will die — and there I will be buried."', verse: 'Ruth 1:16-17', character: 'ruth', emotion: 'loving' },
        { speaker: 'Narrator', text: 'In Bethlehem, Ruth gleaned grain in the fields to survive. She happened upon the field of Boaz — a wealthy, kind man who was a relative.', background: 'field', verse: 'Ruth 2:3, 20' },
        { speaker: 'Narrator', text: 'Boaz noticed Ruth\'s loyalty and character. He acted as kinsman-redeemer — marrying her, protecting Naomi, and preserving the family line.', background: 'field', verse: 'Ruth 4:9-13' },
        { speaker: 'Narrator', text: '📖 Ruth and Boaz had a son, Obed, whose son was Jesse, whose son was DAVID. From David\'s line came JESUS. A foreign widow\'s faithfulness became part of the greatest story ever told. 🌾❤️✝️', background: 'celebration' }
      ]}
    ]
  },

  // ─── 1 SAMUEL ───
  {
    id: 'samuel-called',
    title: '1 Samuel: "Speak, Lord"',
    description: 'A young boy heard God\'s voice in the night and learned to say: "Speak, for your servant is listening."',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '👂', color: 'from-indigo-400 to-blue-500',
    scenes: [
      { id: 0, background: 'daniel-room', dialogue: [
        { speaker: 'Narrator', text: 'Young Samuel served in the tabernacle under the priest Eli. In those days, people rarely heard from God. The word of the Lord was rare.', background: 'daniel-room', verse: '1 Samuel 3:1' },
        { speaker: 'Narrator', text: 'One night, Samuel heard his name called. He ran to Eli: "Here I am!" Eli said: "I didn\'t call you. Go back to bed."', background: 'daniel-room', verse: '1 Samuel 3:4-5' },
        { speaker: 'Narrator', text: 'It happened again. And again. Finally, Eli realized: it was God calling the boy.', background: 'daniel-room', verse: '1 Samuel 3:6-8' },
        { speaker: 'Eli', text: '"Go and lie down. If He calls you, say: Speak, Lord, for your servant is listening."', verse: '1 Samuel 3:9', character: 'eli' },
        { speaker: 'Narrator', text: 'Samuel did. And God spoke to him — giving him his first prophetic message. Samuel grew, and all Israel recognized him as a prophet of the Lord.', background: 'daniel-room', verse: '1 Samuel 3:10-21' },
        { speaker: 'Narrator', text: '📖 God still speaks. The question isn\'t whether God is talking — it\'s whether we\'re listening. "Speak, Lord, for your servant is listening." 👂🙏', background: 'daniel-room' }
      ]}
    ]
  },
  {
    id: 'samuel-david-goliath',
    title: '1 Samuel: David & Goliath',
    description: 'A teenager with a sling and five stones faced a nine-foot giant — and won, because his God was bigger.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '⚔️', color: 'from-red-500 to-yellow-500',
    scenes: [
      { id: 0, background: 'battlefield', dialogue: [
        { speaker: 'Narrator', text: 'The Philistines and Israelites faced each other in a valley. The Philistines had a secret weapon: Goliath, a warrior over nine feet tall, covered in bronze armor.', background: 'battlefield', verse: '1 Samuel 17:4-7' },
        { speaker: 'Goliath', text: '"Send me your best fighter! If he kills me, we\'ll be your slaves. If I kill him, you\'ll be ours!" For 40 days, no one dared face him.', verse: '1 Samuel 17:8-10, 16', character: 'goliath', emotion: 'mocking' },
        { speaker: 'Narrator', text: 'David, a young shepherd delivering bread to his brothers, heard the giant\'s taunts. While Israel trembled, David was outraged.', background: 'battlefield', character: 'david', verse: '1 Samuel 17:23-26' },
        { speaker: 'David', text: '"You come with sword and spear. I come in the name of the Lord Almighty! Today the Lord will deliver you into my hands, and the whole world will know there is a God in Israel!"', verse: '1 Samuel 17:45-46', character: 'david', emotion: 'bold' },
        { speaker: 'Narrator', text: 'One stone. One sling. One faith-filled teenager. Goliath fell face-down. Israel won!', background: 'battlefield', verse: '1 Samuel 17:49-50' },
        { speaker: 'Narrator', text: '📖 Your giants — fear, anxiety, impossible situations — are no match for a God who fights for you. Faith is the stone. God is the slinger. ⚔️🙏', background: 'celebration' }
      ]}
    ]
  },

  // ─── 2 SAMUEL ───
  {
    id: '2samuel-david-bathsheba',
    title: '2 Samuel: David\'s Greatest Failure',
    description: 'The man after God\'s own heart committed adultery and murder — but his repentance shows us the path back to God.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '😔', color: 'from-gray-600 to-red-700',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'King David — Israel\'s greatest king — was supposed to be at war. Instead, he was on his palace roof. From there, he saw Bathsheba bathing. He wanted her.', background: 'palace', verse: '2 Samuel 11:1-4' },
        { speaker: 'Narrator', text: 'He committed adultery with her. When she became pregnant, he tried to cover it up. When that failed, he had her husband Uriah killed in battle.', background: 'palace', verse: '2 Samuel 11:5-27' },
        { speaker: 'Narrator', text: 'God sent the prophet Nathan with a story: a rich man stole a poor man\'s only lamb. David was furious: "That man deserves to die!" Nathan replied: "YOU are that man."', background: 'palace', verse: '2 Samuel 12:1-7' },
        { speaker: 'Narrator', text: 'David didn\'t make excuses. He broke:', background: 'palace' },
        { speaker: 'David', text: '"I have sinned against the Lord." He wrote Psalm 51: "Create in me a pure heart, O God. Don\'t cast me from Your presence. Restore to me the joy of Your salvation."', verse: '2 Samuel 12:13, Psalm 51:10-12', character: 'david', emotion: 'broken' },
        { speaker: 'Narrator', text: '📖 David fell terribly — but he repented honestly. God forgave him. The consequence remained, but the relationship was restored. There is no sin beyond the reach of genuine repentance. 😔➡️🙏', background: 'palace' }
      ]}
    ]
  },

  // ─── 1 KINGS ───
  {
    id: '1kings-solomon',
    title: '1 Kings: Solomon\'s Wisdom',
    description: 'A young king asked God for wisdom instead of wealth — and God gave him both, plus honor beyond measure.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🧠', color: 'from-yellow-400 to-amber-500',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'Solomon became king after his father David. He was young and overwhelmed. One night, God appeared to him in a dream.', background: 'palace', verse: '1 Kings 3:5' },
        { speaker: 'God', text: '"Ask for whatever you want me to give you."', character: 'god', emotion: 'generous' },
        { speaker: 'Solomon', text: '"You showed great kindness to my father David. Now You have made me king over a great people. Give me a discerning heart to govern Your people and to distinguish between right and wrong."', verse: '1 Kings 3:6-9', character: 'solomon', emotion: 'humble' },
        { speaker: 'God', text: '"Since you asked for wisdom and not for long life, wealth, or the death of your enemies, I will give you what you asked AND what you didn\'t ask — riches and honor like no other king."', verse: '1 Kings 3:11-13', character: 'god', emotion: 'pleased' },
        { speaker: 'Narrator', text: 'Two women came with a dispute: both claimed the same baby. Solomon said: "Cut the baby in half and give each woman a piece." The real mother begged: "Give her the baby — just don\'t kill it!" Solomon knew.', background: 'palace', verse: '1 Kings 3:16-27' },
        { speaker: 'Narrator', text: '📖 "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault." — James 1:5. Seek God\'s wisdom first — everything else follows. 🧠✨', background: 'palace' }
      ]}
    ]
  },
  {
    id: '1kings-elijah',
    title: '1 Kings: Elijah on Mount Carmel',
    description: 'One prophet against 450 false prophets. Fire from heaven settled the question: Who is God?',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '⚡', color: 'from-orange-500 to-yellow-400',
    scenes: [
      { id: 0, background: 'mountain-sinai', dialogue: [
        { speaker: 'Narrator', text: 'Israel had turned to worshiping Baal under King Ahab and Queen Jezebel. The prophet Elijah challenged them:', background: 'mountain-sinai', character: 'elijah', verse: '1 Kings 18:17-18' },
        { speaker: 'Elijah', text: '"How long will you waver between two opinions? If the Lord is God, follow Him. If Baal is God, follow him!"', verse: '1 Kings 18:21', character: 'elijah', emotion: 'bold' },
        { speaker: 'Narrator', text: 'The contest: two altars, two bulls, no fire. The God who answers by fire — He is God. 450 prophets of Baal screamed and cut themselves all day. Nothing.', background: 'mountain-sinai', verse: '1 Kings 18:25-29' },
        { speaker: 'Narrator', text: 'Elijah rebuilt the altar, dug a trench around it, placed the offering, and then — drenched everything with water THREE times until it ran in the trench.', background: 'mountain-sinai', verse: '1 Kings 18:30-35' },
        { speaker: 'Elijah', text: '"Lord, God of Abraham, Isaac, and Israel, let it be known today that You are God in Israel and that I am Your servant."', verse: '1 Kings 18:36-37', character: 'elijah', emotion: 'praying' },
        { speaker: 'Narrator', text: 'FIRE FELL from heaven! It consumed the offering, the wood, the stones, the soil — even the water in the trench! The people fell on their faces: "The Lord — He is God!"', background: 'glorious-light', verse: '1 Kings 18:38-39' },
        { speaker: 'Narrator', text: '📖 Stop wavering. Choose who you will serve. The God of Elijah is still the God of fire. He still answers. ⚡🔥', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── 2 KINGS ───
  {
    id: '2kings-elisha',
    title: '2 Kings: Elisha\'s Miracles',
    description: 'The prophet Elisha healed, provided, and revealed God\'s power — showing that the God of Elijah lives on.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🪄', color: 'from-blue-400 to-green-500',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Narrator', text: 'Elisha succeeded Elijah as God\'s prophet. God worked incredible miracles through him:', background: 'field' },
        { speaker: 'Narrator', text: 'He healed the toxic water supply by throwing in salt. He multiplied a widow\'s oil until she could sell it and pay her debts. He raised a dead child back to life.', background: 'field', verse: '2 Kings 2:19-22, 4:1-7, 4:32-35' },
        { speaker: 'Narrator', text: 'He fed 100 men with just 20 loaves of bread. He told a foreign commander, Naaman, to dip in the Jordan seven times — and his leprosy was healed!', background: 'field', verse: '2 Kings 4:42-44, 5:1-14' },
        { speaker: 'Narrator', text: 'When enemy armies surrounded the city, Elisha prayed: "Open his eyes, Lord!" And his servant saw the mountains FULL of horses and chariots of fire surrounding them.', background: 'field', verse: '2 Kings 6:15-17' },
        { speaker: 'Narrator', text: '📖 The spiritual realm is real. When you feel surrounded, remember: those who are with us are MORE than those against us. "Open our eyes, Lord!" 🪄👁️', background: 'field' }
      ]}
    ]
  },

  // ─── EZRA & NEHEMIAH ───
  {
    id: 'nehemiah-walls',
    title: 'Nehemiah: Rebuilding the Walls',
    description: 'A cupbearer became a governor, rallied a broken people, and rebuilt Jerusalem\'s walls in just 52 days.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🧱', color: 'from-stone-500 to-amber-600',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'Jerusalem\'s walls lay in ruins. The exiles who returned were mocked and oppressed. Nehemiah, a cupbearer to the Persian king, heard the news and wept.', background: 'palace', verse: 'Nehemiah 1:1-4' },
        { speaker: 'Narrator', text: 'He fasted and prayed for days. Then, with trembling, he asked the king for permission to go rebuild. The king said yes!', background: 'palace', verse: 'Nehemiah 1:4-11, 2:4-6' },
        { speaker: 'Narrator', text: 'Nehemiah inspected the walls at night. Then he rallied the people: "You see the trouble we\'re in. Come, let\'s rebuild!" They set to work — each family assigned a section.', background: 'palace', verse: 'Nehemiah 2:11-18' },
        { speaker: 'Narrator', text: 'Enemies mocked and threatened. So the workers built with a tool in one hand and a weapon in the other!', background: 'battlefield', verse: 'Nehemiah 4:16-18' },
        { speaker: 'Narrator', text: '52 days later, the walls were finished. The enemies were disheartened — they realized God had been at work.', background: 'celebration', verse: 'Nehemiah 6:15-16' },
        { speaker: 'Narrator', text: '📖 Nehemiah shows us: pray, plan, and work. "The God of heaven will give us success." Build with a trowel in one hand and a sword in the other. 🧱🙏⚔️', background: 'celebration' }
      ]}
    ]
  },

  // ─── ESTHER ───
  {
    id: 'esther-for-such-a-time',
    title: 'Esther: "For Such a Time as This"',
    description: 'An orphan became queen — and risked her life to save her people from genocide.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '👑', color: 'from-purple-500 to-pink-500',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'In the Persian empire, a wicked official named Haman convinced King Xerxes to sign a decree: all Jews would be destroyed.', background: 'palace', verse: 'Esther 3:8-13' },
        { speaker: 'Narrator', text: 'Mordecai, Esther\'s cousin who had raised her, sent her a desperate message. Esther had become queen — but approaching the king uninvited meant death.', background: 'palace', character: 'mordecai', verse: 'Esther 4:10-11' },
        { speaker: 'Mordecai', text: '"Who knows whether you have come to the kingdom for such a time as this?"', verse: 'Esther 4:14', character: 'mordecai' },
        { speaker: 'Esther', text: '"Go, gather all the Jews in Susa and fast for me. Don\'t eat or drink for three days. I\'ll do the same. Then I will go to the king — even though it is against the law. If I perish, I perish."', verse: 'Esther 4:16', character: 'esther', emotion: 'brave' },
        { speaker: 'Narrator', text: 'Esther approached the king. He extended the golden scepter — she was accepted! Through wisdom and courage, she exposed Haman\'s plot. Her people were saved!', background: 'celebration', verse: 'Esther 5:1-2, 7:1-10' },
        { speaker: 'Narrator', text: '📖 God is never mentioned in Esther — but His fingerprints are everywhere. He places you exactly where you need to be. You are here "for such a time as this." 👑🙏', background: 'celebration' }
      ]}
    ]
  }
];
