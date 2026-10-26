import { Story } from '../types';

// ═══════════════════════════════════════
// MATTHEW through ACTS (Gospels & History)
// ═══════════════════════════════════════

export const nt1Stories: Story[] = [
  // ─── MATTHEW ───
  {
    id: 'matthew-sermon',
    title: 'Matthew: The Sermon on the Mount',
    description: 'Jesus sat on a hillside and redefined everything — the Beatitudes, the Lord\'s Prayer, love for enemies.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🏔️', color: 'from-emerald-400 to-teal-500',
    scenes: [
      { id: 0, background: 'hillside', dialogue: [
        { speaker: 'Narrator', text: 'Jesus went up on a mountainside and sat down. His disciples gathered around. He opened His mouth and changed the world.', background: 'hillside', character: 'jesus' },
        { speaker: 'Jesus', text: '"Blessed are the poor in spirit — theirs is the kingdom of heaven. Blessed are those who mourn — they will be comforted. Blessed are the meek — they will inherit the earth. Blessed are those who hunger for righteousness — they will be filled."', verse: 'Matthew 5:3-6', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Jesus', text: '"Blessed are the merciful, the pure in heart, the peacemakers — they will see God and be called His children. Blessed are the persecuted — theirs is the kingdom of heaven."', verse: 'Matthew 5:7-10', character: 'jesus' },
        { speaker: 'Jesus', text: '"You are the light of the world. Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."', verse: 'Matthew 5:14-16', character: 'jesus' },
        { speaker: 'Jesus', text: '"You have heard \'love your neighbor, hate your enemy.\' But I say: LOVE your enemies and pray for those who persecute you."', verse: 'Matthew 5:43-44', character: 'jesus', emotion: 'loving' },
        { speaker: 'Jesus', text: '"Pray like this: Our Father in heaven, hallowed be Your name. Your kingdom come, Your will be done. Give us today our daily bread. Forgive us our debts. Lead us not into temptation."', verse: 'Matthew 6:9-13', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 Matthew presents Jesus as the promised King. The Sermon on the Mount is the constitution of His kingdom — where the meek inherit, the merciful receive mercy, and enemies are loved. 🏔️👑', background: 'hillside' }
      ]}
    ]
  },
  {
    id: 'matthew-great-commission',
    title: 'Matthew: The Great Commission',
    description: 'Jesus\' final command: "Go and make disciples of all nations. I am with you always."',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'all', icon: '🌍', color: 'from-blue-500 to-green-500',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Jesus', text: '"All authority in heaven and on earth has been given to Me. Therefore go and make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit, and teaching them to obey everything I have commanded you."', verse: 'Matthew 28:18-20', character: 'jesus', emotion: 'glorious' },
        { speaker: 'Jesus', text: '"And surely I am with you always, to the very end of the age."', verse: 'Matthew 28:20', character: 'jesus', emotion: 'loving' },
        { speaker: 'Narrator', text: '📖 This is our marching orders. Go. Make disciples. Teach. And the promise: He is WITH us — always, everywhere, until the end. 🌍✝️', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── MARK ───
  {
    id: 'mark-paralyzed',
    title: 'Mark: The Paralyzed Man',
    description: 'Four friends wouldn\'t take no for an answer. They tore through a roof to get their friend to Jesus.',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'kids', icon: '🏠', color: 'from-amber-500 to-red-500',
    scenes: [
      { id: 0, background: 'nazareth', dialogue: [
        { speaker: 'Narrator', text: 'Jesus was teaching in a packed house. No room to move. Four men arrived carrying their paralyzed friend on a mat.', background: 'nazareth' },
        { speaker: 'Narrator', text: 'They couldn\'t get through the crowd. So they climbed the roof, tore it open, and lowered their friend down right in front of Jesus!', background: 'nazareth', verse: 'Mark 2:1-4' },
        { speaker: 'Jesus', text: '"When Jesus saw THEIR faith, He said to the paralyzed man: Son, your sins are forgiven." Then: "Get up, take your mat and go home."', verse: 'Mark 2:5, 11', character: 'jesus', emotion: 'compassionate' },
        { speaker: 'Narrator', text: 'The man got up and walked out carrying his mat. Everyone was amazed!', background: 'celebration', verse: 'Mark 2:12' },
        { speaker: 'Narrator', text: '📖 Sometimes YOUR faith is what gets someone else to Jesus. Don\'t give up on the people God puts in your life. Tear through roofs if you have to! 🏠💪', background: 'celebration' }
      ]}
    ]
  },

  // ─── LUKE ───
  {
    id: 'luke-emmaus',
    title: 'Luke: The Road to Emmaus',
    description: 'Two discouraged disciples walked with a stranger who opened the Scriptures — and their hearts burned.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🚶', color: 'from-orange-400 to-rose-400',
    scenes: [
      { id: 0, background: 'road', dialogue: [
        { speaker: 'Narrator', text: 'After the crucifixion, two disciples walked toward Emmaus, crushed and confused. "We had hoped He was the one to redeem Israel," they said.', background: 'road', verse: 'Luke 24:13-21' },
        { speaker: 'Narrator', text: 'A stranger joined them and asked what they were discussing. They explained everything — the prophets, the crucifixion, the empty tomb.', background: 'road', verse: 'Luke 24:22-24' },
        { speaker: 'Jesus', text: '"How foolish you are! How slow to believe all the prophets have spoken! Did not the Messiah have to suffer these things and then enter His glory?" Beginning with Moses and the prophets, He explained what was said about Himself in all the Scriptures.', verse: 'Luke 24:25-27', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Narrator', text: 'They reached the village and urged Him to stay. At dinner, He took bread, blessed it, broke it — and their eyes were opened. It was JESUS! He vanished.', background: 'stable', verse: 'Luke 24:28-31' },
        { speaker: 'Narrator', text: 'They said to each other: "Were not our hearts burning within us while He talked with us on the road and opened the Scriptures?"', background: 'road', verse: 'Luke 24:32' },
        { speaker: 'Narrator', text: '📖 Jesus is on every page of Scripture. When we read the Bible, He walks with us. Ask Him to open your eyes — and let your heart burn! 🚶🔥', background: 'road' }
      ]}
    ]
  },
  {
    id: 'luke-prodigal',
    title: 'Luke: The Prodigal Son',
    description: 'A son squandered everything. But his father was watching the road — ready to run, embrace, and celebrate.',
    category: 'parables', difficulty: 'easy', ageGroup: 'kids', icon: '🏠', color: 'from-rose-400 to-amber-400',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'Jesus', text: '"A man had two sons. The younger demanded his inheritance early — essentially saying \'I wish you were dead.\' He left and wasted everything on wild living."', verse: 'Luke 15:11-13', character: 'jesus' },
        { speaker: 'Narrator', text: 'A famine came. The son was starving, feeding pigs — the lowest point for a Jewish boy. He came to his senses:', background: 'far-country' },
        { speaker: 'Son', text: '"How many of my father\'s servants have food to spare? I\'ll go to him and say: Father, I have sinned. I am no longer worthy to be your son. Make me a servant."', verse: 'Luke 15:17-19', character: 'son', emotion: 'ashamed' },
        { speaker: 'Narrator', text: 'But while he was still a long way off, his father SAW him. He was filled with compassion. He RAN to his son — undignified, unrestrained — threw his arms around him and kissed him!', background: 'field', verse: 'Luke 15:20', character: 'father' },
        { speaker: 'Father', text: '"Quick! Best robe! Ring on his finger! Sandals on his feet! Kill the fattened calf! Let\'s feast! This son of mine was DEAD and is ALIVE again! He was LOST and is FOUND!"', verse: 'Luke 15:22-24', character: 'father', emotion: 'joyful' },
        { speaker: 'Narrator', text: '📖 That father is God. No matter how far you\'ve run, He\'s watching the road. When you turn home, He doesn\'t lecture — He RUNS to you. 🏠❤️', background: 'celebration' }
      ]}
    ]
  },

  // ─── JOHN ───
  {
    id: 'john-woman-well',
    title: 'John: The Woman at the Well',
    description: 'Jesus broke every social barrier to offer "living water" to a woman with a broken past.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '💧', color: 'from-blue-400 to-cyan-500',
    scenes: [
      { id: 0, background: 'desert', dialogue: [
        { speaker: 'Narrator', text: 'Jesus sat tired by a well in Samaria at noon. A Samaritan woman came to draw water — at the unusual hour, avoiding others.', background: 'desert', verse: 'John 4:5-7' },
        { speaker: 'Jesus', text: '"Will you give Me a drink?" Jews and Samaritans didn\'t associate. She was shocked.', verse: 'John 4:7-9', character: 'jesus' },
        { speaker: 'Jesus', text: '"If you knew the gift of God and who asks you for a drink, you would have asked Him and He would have given you living water." ... "Everyone who drinks this water will be thirsty again. But whoever drinks the water I give will never thirst again — it will become a spring of water welling up to eternal life."', verse: 'John 4:10-14', character: 'jesus', emotion: 'loving' },
        { speaker: 'Narrator', text: 'Jesus knew everything about her — five husbands, current broken relationship. Yet He offered her living water anyway.', background: 'desert', verse: 'John 4:16-18' },
        { speaker: 'Narrator', text: 'She ran back to town: "Come see a man who told me everything I ever did! Could He be the Messiah?" The whole village came to Jesus.', background: 'celebration', verse: 'John 4:28-30, 39' },
        { speaker: 'Narrator', text: '📖 Jesus crosses every barrier — race, gender, reputation — to offer living water. Whatever thirst you carry, only He can satisfy it. 💧❤️', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'john-lazarus',
    title: 'John: Lazarus — "I Am the Resurrection"',
    description: 'Jesus wept at the tomb of His friend — then called him back to life with a shout.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🪦', color: 'from-gray-600 to-emerald-500',
    scenes: [
      { id: 0, background: 'tomb-dark', dialogue: [
        { speaker: 'Narrator', text: 'Jesus\' dear friend Lazarus was sick. Jesus waited two days before going. By the time He arrived, Lazarus had been dead four days.', background: 'tomb-dark', verse: 'John 11:1-6, 17' },
        { speaker: 'Martha', text: '"Lord, if You had been here, my brother would not have died."', verse: 'John 11:21', character: 'martha', emotion: 'sad' },
        { speaker: 'Jesus', text: '"I am the resurrection and the life. The one who believes in Me will live, even though they die. Do you believe this?"', verse: 'John 11:25-26', character: 'jesus', emotion: 'loving' },
        { speaker: 'Narrator', text: 'Jesus saw Mary weeping. He was deeply moved. And Jesus WEPT — the shortest verse, the deepest love.', background: 'tomb-dark', verse: 'John 11:35' },
        { speaker: 'Jesus', text: '"Take away the stone." ... "Lazarus, come out!"', verse: 'John 11:39, 43', character: 'jesus', emotion: 'powerful' },
        { speaker: 'Narrator', text: 'Lazarus walked out — wrapped in burial cloths but ALIVE! Death had no power when Jesus spoke.', background: 'glorious-light', verse: 'John 11:44' },
        { speaker: 'Narrator', text: '📖 Jesus doesn\'t just comfort us in grief — He conquers grief itself. "I am the resurrection and the life." Because He lives, we will live too. 🪦➡️✨', background: 'glorious-light' }
      ]}
    ]
  },
  {
    id: 'john-i-am',
    title: 'John: "I Am" Statements',
    description: 'Seven times Jesus said "I Am" — echoing God\'s name from the burning bush — revealing who He truly is.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '✝️', color: 'from-indigo-500 to-purple-500',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Narrator', text: 'In John\'s Gospel, Jesus makes seven "I Am" statements — echoing God\'s name from Exodus: "I AM WHO I AM."', background: 'glorious-light' },
        { speaker: 'Jesus', text: '"I am the Bread of Life." (6:35) — I satisfy your deepest hunger.\n"I am the Light of the World." (8:12) — I guide you through darkness.\n"I am the Gate." (10:9) — I am the way to safety.\n"I am the Good Shepherd." (10:11) — I lay down My life for you.', character: 'jesus', emotion: 'teaching' },
        { speaker: 'Jesus', text: '"I am the Resurrection and the Life." (11:25) — I conquer death.\n"I am the Way, the Truth, and the Life." (14:6) — I am the only path to the Father.\n"I am the Vine." (15:5) — Stay connected to Me and you will bear fruit.', character: 'jesus' },
        { speaker: 'Narrator', text: '📖 Every "I Am" reveals a different aspect of who Jesus is for us. He is everything we need. Whatever you lack — He is it. ✝️❤️', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── ACTS ───
  {
    id: 'acts-pentecost',
    title: 'Acts: Pentecost — The Church is Born',
    description: 'Fire from heaven, many languages, 3,000 saved — the Holy Spirit arrived and the Church exploded.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🔥', color: 'from-red-500 to-orange-400',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Jesus', text: '"Wait in Jerusalem for the gift My Father promised — you will be baptized with the Holy Spirit. You will receive power when the Holy Spirit comes on you, and you will be My witnesses."', verse: 'Acts 1:4-5, 8', character: 'jesus' },
        { speaker: 'Narrator', text: '120 believers gathered, praying together. Suddenly: a sound like a mighty wind! Tongues of fire rested on each person! They were filled with the Holy Spirit and spoke in other languages!', background: 'glorious-light', verse: 'Acts 2:1-4' },
        { speaker: 'Narrator', text: 'Jews from every nation heard the Gospel in their own language! Peter preached boldly. That day, 3,000 people believed!', background: 'celebration', verse: 'Acts 2:5-41' },
        { speaker: 'Narrator', text: '📖 The Holy Spirit is not an add-on — He is the power source for the Christian life. "You will receive power." The Church wasn\'t born in a boardroom — it was born in fire. 🔥⛪', background: 'celebration' }
      ]}
    ]
  },
  {
    id: 'acts-paul',
    title: 'Acts: Paul\'s Conversion & Mission',
    description: 'The church\'s worst persecutor met Jesus on a road — and became its greatest missionary.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '💡', color: 'from-yellow-400 to-red-500',
    scenes: [
      { id: 0, background: 'road', dialogue: [
        { speaker: 'Narrator', text: 'Saul was breathing threats against Christians. He arrested men and women, approved of their executions. He was the church\'s worst enemy.', background: 'road', verse: 'Acts 8:1-3, 9:1-2' },
        { speaker: 'Narrator', text: 'On the road to Damascus, a light from heaven blinded him. A voice:', background: 'glorious-light', verse: 'Acts 9:3-4' },
        { speaker: 'Jesus', text: '"Saul, Saul, why do you persecute Me?" "Who are You, Lord?" "I am Jesus, whom you are persecuting."', verse: 'Acts 9:4-5', character: 'jesus', emotion: 'powerful' },
        { speaker: 'Narrator', text: 'Three days blind, Saul fasted and prayed. A believer named Ananias prayed for him. Scales fell from his eyes. He was baptized — and immediately began preaching that Jesus is the Son of God!', background: 'glorious-light', verse: 'Acts 9:9-20' },
        { speaker: 'Narrator', text: 'Paul went on three missionary journeys, planted churches across the Roman Empire, and wrote most of the New Testament letters.', background: 'celebration' },
        { speaker: 'Narrator', text: '📖 No one is beyond God\'s reach. The worst enemy became the greatest apostle. "If anyone is in Christ, the new creation has come!" — 2 Corinthians 5:17 💡✝️', background: 'celebration' }
      ]}
    ]
  }
];
