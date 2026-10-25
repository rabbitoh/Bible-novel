import { Story } from '../types';

// ═══════════════════════════════════════
// JOB through MALACHI (Poetry, Prophets)
// ═══════════════════════════════════════

export const ot2Stories: Story[] = [
  // ─── JOB ───
  {
    id: 'job-suffering',
    title: 'Job: Why Do We Suffer?',
    description: 'Job lost everything — children, wealth, health. His friends blamed him. But God answered from a whirlwind.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🌪️', color: 'from-gray-600 to-amber-500',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'Job was the most righteous man alive — blameless, wealthy, with ten children. Then, in one devastating day, he lost everything: his livestock, his servants, and all ten children.', background: 'desert', verse: 'Job 1:1-19' },
        { speaker: 'Narrator', text: 'Then his health was destroyed — painful sores covered his body. His wife said: "Curse God and die!" His friends insisted he must have sinned.', background: 'desert', verse: 'Job 2:7-10, 4:7-9' },
        { speaker: 'Job', text: '"The Lord gave, and the Lord has taken away. Blessed be the name of the Lord." ... "Though He slay me, yet will I hope in Him." ... "I know that my Redeemer lives!"', verse: 'Job 1:21, 13:15, 19:25', character: 'job', emotion: 'suffering' },
        { speaker: 'Narrator', text: 'After chapters of debate, God finally answered — not from a temple, but from a whirlwind:', background: 'desert' },
        { speaker: 'God', text: '"Where were you when I laid the earth\'s foundation? Can you bind the chains of the Pleiades? Can you send lightning bolts? Do you give the horse his strength?"', verse: 'Job 38:4, 31, 39:19', character: 'god', emotion: 'powerful' },
        { speaker: 'Job', text: '"My ears had heard of You but now my eyes have seen You. Therefore I despise myself and repent in dust and ashes."', verse: 'Job 42:5-6', character: 'job', emotion: 'humble' },
        { speaker: 'Narrator', text: 'God restored Job\'s fortunes twofold. He lived to see four more generations.', background: 'celebration', verse: 'Job 42:10-17' },
        { speaker: 'Narrator', text: '📖 Job teaches us: suffering isn\'t always punishment. We may never understand WHY — but we can trust WHO God is. He is sovereign, and He is with us in the fire. 🌪️🙏', background: 'celebration' }
      ]}
    ]
  },

  // ─── PSALMS ───
  {
    id: 'psalms-songs',
    title: 'Psalms: Songs of the Heart',
    description: '150 songs and prayers covering every human emotion — joy, grief, anger, praise. God invites our honesty.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'all', icon: '🎵', color: 'from-violet-500 to-indigo-500',
    scenes: [
      { id: 0, background: 'stars', dialogue: [
        { speaker: 'Narrator', text: 'The book of Psalms is Israel\'s hymnbook — 150 songs and prayers written over centuries. They cover EVERY emotion: joy, grief, anger, confusion, praise, doubt.', background: 'stars' },
        { speaker: 'David', text: '"The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, leads me beside quiet waters, refreshes my soul."', verse: 'Psalm 23:1-3', character: 'david', emotion: 'peaceful' },
        { speaker: 'David', text: '"Even though I walk through the darkest valley, I will fear no evil, for You are with me."', verse: 'Psalm 23:4', character: 'david' },
        { speaker: 'David', text: '"The heavens declare the glory of God; the skies proclaim the work of His hands."', verse: 'Psalm 19:1', character: 'david', emotion: 'worshipful' },
        { speaker: 'David', text: '"Create in me a pure heart, O God, and renew a steadfast spirit within me."', verse: 'Psalm 51:10', character: 'david', emotion: 'praying' },
        { speaker: 'David', text: '"I praise You because I am fearfully and wonderfully made; Your works are wonderful."', verse: 'Psalm 139:14', character: 'david', emotion: 'joyful' },
        { speaker: 'David', text: '"The Lord is close to the brokenhearted and saves those who are crushed in spirit."', verse: 'Psalm 34:18', character: 'david' },
        { speaker: 'Narrator', text: '📖 The Psalms teach us: bring ALL your emotions to God. He can handle your anger, your doubt, your grief, your joy. He is close to the brokenhearted. There\'s a psalm for every season. 🎵❤️', background: 'stars' }
      ]}
    ]
  },

  // ─── PROVERBS ───
  {
    id: 'proverbs-wisdom',
    title: 'Proverbs: Wisdom\'s Call',
    description: 'Practical wisdom for daily living — from a father to his son. "The fear of the Lord is the beginning of wisdom."',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'all', icon: '🦉', color: 'from-amber-500 to-stone-500',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'Proverbs is a collection of wise sayings — mostly from Solomon, the wisest man who ever lived. It\'s practical wisdom for everyday life.', background: 'palace' },
        { speaker: 'Solomon', text: '"The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding."', verse: 'Proverbs 9:10', character: 'solomon' },
        { speaker: 'Solomon', text: '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight."', verse: 'Proverbs 3:5-6', character: 'solomon', emotion: 'teaching' },
        { speaker: 'Solomon', text: '"A gentle answer turns away wrath, but a harsh word stirs up anger." ... "Pride goes before destruction, a haughty spirit before a fall." ... "Above all else, guard your heart, for everything you do flows from it."', verse: 'Proverbs 15:1, 16:18, 4:23', character: 'solomon' },
        { speaker: 'Narrator', text: '📖 Proverbs isn\'t promises — it\'s principles. It\'s the accumulated wisdom of a life lived with God at the center. "Guard your heart, for everything you do flows from it." 🦉📖', background: 'palace' }
      ]}
    ]
  },

  // ─── ECCLESIASTES ───
  {
    id: 'ecclesiastes-meaning',
    title: 'Ecclesiastes: The Search for Meaning',
    description: 'A king tried everything — pleasure, wealth, wisdom — and found it all meaningless without God.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🌅', color: 'from-orange-400 to-purple-500',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'The Teacher (likely Solomon) had everything: wealth, pleasure, wisdom, power. He tried it all searching for meaning.', background: 'palace' },
        { speaker: 'Teacher', text: '"Meaningless! Meaningless! Everything is meaningless!" ... I tried laughter, wine, great projects, acquiring wealth — but it was all chasing the wind.', verse: 'Ecclesiastes 1:2, 2:1-11', character: 'solomon', emotion: 'contemplative' },
        { speaker: 'Teacher', text: '"There is a time for everything: a time to be born, a time to die, a time to plant, a time to uproot, a time to weep, a time to laugh, a time to mourn, a time to dance..."', verse: 'Ecclesiastes 3:1-4', character: 'solomon' },
        { speaker: 'Teacher', text: '"Now all has been heard; here is the conclusion of the matter: Fear God and keep His commandments, for this is the duty of all mankind."', verse: 'Ecclesiastes 12:13', character: 'solomon', emotion: 'wise' },
        { speaker: 'Narrator', text: '📖 Everything apart from God is chasing the wind. But a life centered on Him — with gratitude for each moment — THAT is meaning. "Fear God and keep His commandments." 🌅', background: 'palace' }
      ]}
    ]
  },

  // ─── SONG OF SOLOMON ───
  {
    id: 'song-love',
    title: 'Song of Solomon: The Beauty of Love',
    description: 'A passionate love poem celebrating romantic love — a picture of God\'s passionate love for His people.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🌹', color: 'from-rose-500 to-pink-400',
    scenes: [
      { id: 0, background: 'garden', dialogue: [
        { speaker: 'Narrator', text: 'The Song of Solomon is a beautiful love poem between a bride and bridegroom. It celebrates the joy and passion of romantic love — God\'s gift to humanity.', background: 'garden' },
        { speaker: 'Bridegroom', text: '"How beautiful you are, my darling! Oh, how beautiful! Your eyes are doves." ... "Arise, come, my darling; my beautiful one, come with me."', verse: 'Song of Solomon 1:15, 2:10', character: 'solomon', emotion: 'loving' },
        { speaker: 'Bride', text: '"I am my beloved\'s and my beloved is mine." ... "Place me like a seal over your heart, like a seal on your arm; for love is as strong as death."', verse: 'Song of Solomon 6:3, 8:6', character: 'eve' },
        { speaker: 'Narrator', text: '📖 This book celebrates romantic love as God\'s good gift. But it also pictures something deeper: the passionate love between Christ and His Church. "Christ loved the church and gave Himself up for her" (Ephesians 5:25). 🌹❤️', background: 'garden' }
      ]}
    ]
  },

  // ─── ISAIAH ───
  {
    id: 'isaiah-prophecy',
    title: 'Isaiah: The Coming Savior',
    description: '700 years before Jesus, Isaiah predicted His birth, suffering, and glory with stunning precision.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🔮', color: 'from-indigo-500 to-blue-600',
    scenes: [
      { id: 0, background: 'scroll', dialogue: [
        { speaker: 'Isaiah', text: '"The virgin will conceive and give birth to a son, and will call him Immanuel" — God with us.', verse: 'Isaiah 7:14', character: 'isaiah' },
        { speaker: 'Isaiah', text: '"To us a child is born, a son is given. He will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."', verse: 'Isaiah 9:6', character: 'isaiah', emotion: 'prophetic' },
        { speaker: 'Isaiah', text: '"He was pierced for our transgressions, crushed for our iniquities. The punishment that brought us peace was on Him, and by His wounds we are healed. All we like sheep have gone astray — the Lord has laid on Him the iniquity of us all."', verse: 'Isaiah 53:5-6', character: 'isaiah', emotion: 'solemn' },
        { speaker: 'Isaiah', text: '"Though the mountains be shaken and the hills be removed, yet My unfailing love for you will not be shaken nor My covenant of peace be removed," says the Lord.', verse: 'Isaiah 54:10', character: 'isaiah', emotion: 'loving' },
        { speaker: 'Narrator', text: '📖 Isaiah wrote 700 years before Jesus — yet described His birth, ministry, suffering, and death with breathtaking accuracy. Every detail was fulfilled. God keeps every promise. 🔮✝️', background: 'scroll' }
      ]}
    ]
  },

  // ─── JEREMIAH ───
  {
    id: 'jeremiah-new-covenant',
    title: 'Jeremiah: The New Covenant',
    description: 'The "weeping prophet" warned of judgment but also promised a new covenant — God\'s law written on hearts.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '😢', color: 'from-blue-600 to-gray-600',
    scenes: [
      { id: 0, background: 'corrupt-world', dialogue: [
        { speaker: 'Narrator', text: 'Jeremiah prophesied for 40 years as Judah spiraled toward destruction. He warned, wept, and was rejected — earning the title "the weeping prophet."', background: 'corrupt-world' },
        { speaker: 'God', text: '"Before I formed you in the womb I knew you, before you were born I set you apart as a prophet to the nations."', verse: 'Jeremiah 1:5', character: 'god' },
        { speaker: 'God', text: '"The days are coming when I will make a new covenant with Israel. I will put My law in their minds and write it on their hearts. I will be their God, and they will be My people."', verse: 'Jeremiah 31:31-33', character: 'god', emotion: 'loving' },
        { speaker: 'God', text: '"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."', verse: 'Jeremiah 29:11', character: 'god' },
        { speaker: 'Narrator', text: '📖 Jeremiah\'s "new covenant" was fulfilled in Jesus: "This cup is the new covenant in My blood" (Luke 22:20). God\'s law is no longer on stone — it\'s written on our hearts by the Holy Spirit. 😢❤️', background: 'corrupt-world' }
      ]}
    ]
  },

  // ─── LAMENTATIONS ───
  {
    id: 'lamentations-grief',
    title: 'Lamentations: Weeping Over Jerusalem',
    description: 'Jeremiah\'s raw, honest grief over Jerusalem\'s destruction — showing God makes room for our tears.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '💧', color: 'from-gray-500 to-blue-600',
    scenes: [
      { id: 0, background: 'corrupt-world', dialogue: [
        { speaker: 'Narrator', text: 'Jerusalem had fallen. The temple was destroyed. Jeremiah sat among the ruins and wept.', background: 'corrupt-world' },
        { speaker: 'Jeremiah', text: '"How deserted lies the city, once so full of people! She who was great among the nations has become a slave."', verse: 'Lamentations 1:1', character: 'jeremiah', emotion: 'weeping' },
        { speaker: 'Jeremiah', text: '"Because of the Lord\'s great love we are not consumed, for His compassions never fail. They are new every morning; great is Your faithfulness."', verse: 'Lamentations 3:22-23', character: 'jeremiah', emotion: 'hopeful' },
        { speaker: 'Jeremiah', text: '"The Lord is good to those whose hope is in Him, to the one who seeks Him. It is good to wait quietly for the salvation of the Lord."', verse: 'Lamentations 3:25-26', character: 'jeremiah' },
        { speaker: 'Narrator', text: '📖 Lamentations teaches us: it\'s okay to grieve. God doesn\'t ask us to pretend. But even in our deepest pain, His mercies are new every morning. 💧🌅', background: 'corrupt-world' }
      ]}
    ]
  },

  // ─── EZEKIEL ───
  {
    id: 'ezekiel-dry-bones',
    title: 'Ezekiel: Valley of Dry Bones',
    description: 'A valley full of dead bones came to life — a vision of God restoring what seems hopelessly dead.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🦴', color: 'from-stone-500 to-green-500',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'The Spirit of God carried Ezekiel to a valley full of bones — very dry, very dead. Israel felt just as hopeless in exile.', background: 'desert', verse: 'Ezekiel 37:1-2' },
        { speaker: 'God', text: '"Son of man, can these bones live?"', verse: 'Ezekiel 37:3', character: 'god' },
        { speaker: 'Ezekiel', text: '"Sovereign Lord, You alone know."', character: 'ezekiel' },
        { speaker: 'God', text: '"Prophesy to these bones: Dry bones, hear the word of the Lord!"', verse: 'Ezekiel 37:4-5', character: 'god' },
        { speaker: 'Narrator', text: 'Ezekiel prophesied. Bones came together. Tendons appeared. Flesh covered them. But there was no breath.', background: 'desert', verse: 'Ezekiel 37:6-8' },
        { speaker: 'God', text: '"Prophesy to the breath: Come from the four winds and breathe into these slain, that they may live."', verse: 'Ezekiel 37:9', character: 'god' },
        { speaker: 'Narrator', text: 'Breath entered them. They stood up — a vast army, alive! God said: "These bones are the people of Israel. I will open their graves and bring them home."', background: 'celebration', verse: 'Ezekiel 37:11-14' },
        { speaker: 'Narrator', text: '📖 No situation is too dead for God. Whatever feels hopeless in your life — speak God\'s word over it. His breath brings life to dry bones. 🦴➡️🌿', background: 'celebration' }
      ]}
    ]
  },

  // ─── DANIEL ───
  {
    id: 'daniel-lions',
    title: 'Daniel: The Lion\'s Den',
    description: 'When prayer was outlawed, Daniel kept praying. God shut the mouths of lions and opened the eyes of a kingdom.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🦁', color: 'from-amber-500 to-orange-600',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'Daniel was so excellent that King Darius planned to put him over the whole empire. Jealous officials tricked the king into signing a law: no praying to anyone but the king for 30 days.', background: 'palace', verse: 'Daniel 6:1-9' },
        { speaker: 'Narrator', text: 'Daniel went home, opened his windows toward Jerusalem, and prayed — just as he always did, three times a day.', background: 'daniel-room', verse: 'Daniel 6:10' },
        { speaker: 'Narrator', text: 'He was thrown into the lions\' den. The king said: "May your God, whom you serve continually, rescue you!"', background: 'lions-den', verse: 'Daniel 6:16', character: 'darius' },
        { speaker: 'Narrator', text: 'At dawn, the king rushed to the den. Daniel answered: "My God sent His angel and shut the mouths of the lions. Not a scratch on me!"', background: 'lions-den-peaceful', verse: 'Daniel 6:21-22', character: 'daniel' },
        { speaker: 'Narrator', text: '📖 Faithfulness in small things prepares us for big tests. Daniel prayed three times a day for years — that habit saved his life. "Our God is able to deliver." 🦁🙏', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'daniel-furnace',
    title: 'Daniel: The Fiery Furnace',
    description: 'Three friends refused to bow to an idol — even if it meant death. A fourth figure appeared in the flames.',
    category: 'old-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🔥', color: 'from-red-500 to-orange-500',
    scenes: [
      { id: 0, background: 'palace', dialogue: [
        { speaker: 'Narrator', text: 'King Nebuchadnezzar made a golden statue 90 feet tall and commanded: bow or burn. Shadrach, Meshach, and Abednego refused.', background: 'palace', verse: 'Daniel 3:1-12' },
        { speaker: 'Three Friends', text: '"Our God is able to deliver us. But even if He does not, we will not serve your gods or worship the golden image."', verse: 'Daniel 3:17-18', character: 'daniel', emotion: 'bold' },
        { speaker: 'Narrator', text: 'The king was furious. He heated the furnace seven times hotter than normal. The three men were thrown in — bound.', background: 'burning-bush', verse: 'Daniel 3:19-20' },
        { speaker: 'Narrator', text: 'The king leapt to his feet: "Weren\'t there three men? I see FOUR — walking in the fire, unbound, unharmed! The fourth looks like a son of the gods!"', background: 'burning-bush', verse: 'Daniel 3:24-25' },
        { speaker: 'Narrator', text: 'They walked out — not even smelling like smoke!', background: 'celebration', verse: 'Daniel 3:27' },
        { speaker: 'Narrator', text: '📖 "Even if He does not" — THAT is faith. Not faith that God WILL rescue us, but faith that God IS worthy whether He does or not. And He IS with us in the fire. 🔥🙏', background: 'celebration' }
      ]}
    ]
  },

  // ─── MINOR PROPHETS (combined for efficiency) ───
  {
    id: 'minor-prophets-1',
    title: 'Hosea, Amos & Micah: Love, Justice & Mercy',
    description: 'Three prophets with one message: God demands justice, loves mercy, and calls us to walk humbly with Him.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '⚖️', color: 'from-teal-500 to-emerald-600',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Narrator', text: 'HOSEA: God told the prophet to marry an unfaithful woman — a living picture of God\'s love for unfaithful Israel. Despite her betrayal, Hosea bought her back and loved her.', background: 'field', verse: 'Hosea 1-3' },
        { speaker: 'God', text: '"I will heal their waywardness and love them freely, for My anger has turned away from them."', verse: 'Hosea 14:4', character: 'god', emotion: 'loving' },
        { speaker: 'Narrator', text: 'AMOS, a simple shepherd, thundered against injustice: "Let justice roll on like a river, righteousness like a never-failing stream!"', background: 'field', verse: 'Amos 5:24' },
        { speaker: 'Narrator', text: 'MICAH asked: "What does the Lord require of you?" And answered: "To act justly, to love mercy, and to walk humbly with your God."', background: 'field', verse: 'Micah 6:8' },
        { speaker: 'Narrator', text: '📖 Three prophets, one message: God wants our hearts — expressed through justice, mercy, and humility. He loves us like Hosea loved his wife — faithfully, even when we\'re unfaithful. ⚖️❤️', background: 'field' }
      ]}
    ]
  },
  {
    id: 'minor-prophets-2',
    title: 'Jonah, Habakkuk & Malachi: Questions & Answers',
    description: 'Jonah ran from God. Habakkuk questioned God. Malachi called people back. God answered them all.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '❓', color: 'from-blue-500 to-indigo-500',
    scenes: [
      { id: 0, background: 'ocean-creatures', dialogue: [
        { speaker: 'Narrator', text: 'JONAH: God said "Go to Nineveh." Jonah went the opposite direction. A storm, a great fish, three days in its belly — then obedience. God\'s mercy reached even Israel\'s enemies.', background: 'ocean-creatures', verse: 'Jonah 1-4' },
        { speaker: 'Narrator', text: 'HABAKKUK asked: "How long, Lord, must I call for help while violence continues?" God answered: "The righteous will live by faith." And Habakkuk learned to rejoice even when nothing goes right.', background: 'desert', verse: 'Habakkuk 1:2, 2:4, 3:17-18' },
        { speaker: 'Habakkuk', text: '"Though the fig tree does not bud and there are no grapes on the vines... yet I will rejoice in the Lord, I will be joyful in God my Savior."', verse: 'Habakkuk 3:17-18', character: 'habakkuk', emotion: 'faithful' },
        { speaker: 'Narrator', text: 'MALACHI: The last prophet before 400 years of silence. "Return to me, and I will return to you." He promised the "Sun of Righteousness" would rise with healing in His rays.', background: 'dawn', verse: 'Malachi 3:7, 4:2' },
        { speaker: 'Narrator', text: '📖 God can handle our questions. Run, question, or wander — He pursues us. "The righteous will live by faith" — a truth that would echo into the New Testament (Romans 1:17). ❓🙏', background: 'dawn' }
      ]}
    ]
  },
  {
    id: 'minor-prophets-3',
    title: 'Joel, Zechariah & Haggai: The Spirit & The King',
    description: 'God promised His Spirit, a coming King on a donkey, and a call to rebuild what matters most.',
    category: 'old-testament', difficulty: 'medium', ageGroup: 'all', icon: '🕊️', color: 'from-purple-400 to-sky-400',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Narrator', text: 'JOEL: After a devastating locust plague, God promised something beautiful:', background: 'glorious-light' },
        { speaker: 'God', text: '"I will pour out My Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions."', verse: 'Joel 2:28', character: 'god' },
        { speaker: 'Narrator', text: 'HAGGAI: The people had rebuilt their own houses but let God\'s temple lie in ruins. "Give careful thought to your ways!" he challenged. They obeyed and rebuilt.', background: 'building-ark', verse: 'Haggai 1:5-7' },
        { speaker: 'Narrator', text: 'ZECHARIAH: Visions of the coming Messiah:', background: 'glorious-light' },
        { speaker: 'Zechariah', text: '"See, your King comes to you, righteous and victorious, riding on a donkey." ... "They will look on Me, the one they have pierced, and they will mourn."', verse: 'Zechariah 9:9, 12:10', character: 'isaiah' },
        { speaker: 'Narrator', text: '📖 Joel\'s promise was fulfilled at Pentecost (Acts 2). Zechariah\'s King rode into Jerusalem on a donkey (Matthew 21). God\'s promises span centuries — but they always come true. 🕊️👑', background: 'glorious-light' }
      ]}
    ]
  }
];
