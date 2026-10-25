import { Story } from '../types';

// ═══════════════════════════════════════
// ROMANS through REVELATION (Epistles & Prophecy)
// ═══════════════════════════════════════

export const nt2Stories: Story[] = [
  // ─── ROMANS ───
  {
    id: 'romans-love',
    title: 'Romans: Nothing Can Separate Us',
    description: 'Paul\'s masterpiece: we are saved by grace, justified by faith, and nothing in all creation can separate us from God\'s love.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '❤️', color: 'from-red-500 to-rose-600',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Paul', text: '"For all have sinned and fall short of the glory of God, and all are justified freely by His grace through the redemption that came by Christ Jesus."', verse: 'Romans 3:23-24', character: 'paul' },
        { speaker: 'Paul', text: '"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."', verse: 'Romans 6:23', character: 'paul' },
        { speaker: 'Paul', text: '"Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free."', verse: 'Romans 8:1-2', character: 'paul', emotion: 'joyful' },
        { speaker: 'Paul', text: '"And we know that in all things God works for the good of those who love Him, who have been called according to His purpose."', verse: 'Romans 8:28', character: 'paul' },
        { speaker: 'Paul', text: '"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor ANYTHING ELSE in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."', verse: 'Romans 8:38-39', character: 'paul', emotion: 'passionate' },
        { speaker: 'Narrator', text: '📖 Romans is the fullest explanation of the Gospel ever written. The bottom line: you are saved by grace, kept by grace, and NOTHING can separate you from God\'s love. ❤️🙏', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── 1 CORINTHIANS ───
  {
    id: 'corinthians-love',
    title: '1 Corinthians 13: The Love Chapter',
    description: 'Paul describes what real, God-shaped love looks like — and says without it, we are nothing.',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'all', icon: '💕', color: 'from-rose-400 to-red-500',
    scenes: [
      { id: 0, background: 'celebration', dialogue: [
        { speaker: 'Paul', text: '"If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. If I have faith that can move mountains, but do not have love, I am nothing."', verse: '1 Corinthians 13:1-2', character: 'paul', emotion: 'teaching' },
        { speaker: 'Paul', text: '"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."', verse: '1 Corinthians 13:4-7', character: 'paul' },
        { speaker: 'Paul', text: '"Love never fails. Now these three remain: faith, hope, and love. But the greatest of these is love."', verse: '1 Corinthians 13:8, 13', character: 'paul', emotion: 'inspired' },
        { speaker: 'Narrator', text: '📖 Try it: replace "love" with your name. "[Your name] is patient, [your name] is kind..." Let God shape your love to be more like His! 💕', background: 'celebration' }
      ]}
    ]
  },

  // ─── 2 CORINTHIANS ───
  {
    id: '2corinthians-treasure',
    title: '2 Corinthians: Treasure in Jars of Clay',
    description: 'We are fragile clay pots carrying an infinite treasure — so the power belongs to God, not us.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🏺', color: 'from-amber-400 to-yellow-500',
    scenes: [
      { id: 0, background: 'stable', dialogue: [
        { speaker: 'Paul', text: '"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"', verse: '2 Corinthians 5:17', character: 'paul', emotion: 'joyful' },
        { speaker: 'Paul', text: '"All this is from God, who reconciled us to Himself through Christ and gave us the ministry of reconciliation: that God was reconciling the world to Himself in Christ, not counting people\'s sins against them."', verse: '2 Corinthians 5:18-19', character: 'paul' },
        { speaker: 'Paul', text: '"But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed."', verse: '2 Corinthians 4:7-9', character: 'paul' },
        { speaker: 'Paul', text: '"My grace is sufficient for you, for My power is made perfect in weakness." ... "When I am weak, then I am strong."', verse: '2 Corinthians 12:9-10', character: 'paul', emotion: 'humble' },
        { speaker: 'Narrator', text: '📖 You are a clay pot — fragile, ordinary. But the treasure inside you (the Holy Spirit!) is infinite. Your weakness is where God\'s power shines brightest. 🏺✨', background: 'stable' }
      ]}
    ]
  },

  // ─── GALATIANS ───
  {
    id: 'galatians-freedom',
    title: 'Galatians: Freedom in Christ',
    description: 'Paul fought against legalism: we are saved by grace through faith — not by following rules.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🕊️', color: 'from-sky-400 to-blue-500',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Paul', text: '"A person is not justified by the works of the law, but by faith in Jesus Christ. For by the works of the law no one will be justified."', verse: 'Galatians 2:16', character: 'paul' },
        { speaker: 'Paul', text: '"I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave Himself for me."', verse: 'Galatians 2:20', character: 'paul', emotion: 'passionate' },
        { speaker: 'Paul', text: '"It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery."', verse: 'Galatians 5:1', character: 'paul' },
        { speaker: 'Paul', text: '"The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."', verse: 'Galatians 5:22-23', character: 'paul', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 You don\'t earn God\'s love — you receive it. Freedom in Christ means freedom FROM earning, freedom TO love. Stay connected to the Vine and the fruit will come naturally. 🕊️🍇', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── EPHESIANS ───
  {
    id: 'ephesians-grace',
    title: 'Ephesians: Saved by Grace, Armored for Battle',
    description: 'By grace you have been saved — and God equips you with spiritual armor for the battle ahead.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🛡️', color: 'from-slate-500 to-indigo-600',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Paul', text: '"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast. For we are God\'s handiwork, created in Christ Jesus to do good works."', verse: 'Ephesians 2:8-10', character: 'paul' },
        { speaker: 'Paul', text: '"Be imitators of God, therefore, as dearly loved children and walk in the way of love, just as Christ loved us and gave Himself up for us."', verse: 'Ephesians 5:1-2', character: 'paul', emotion: 'loving' },
        { speaker: 'Paul', text: '"Put on the full armor of God: the belt of truth, the breastplate of righteousness, feet fitted with the gospel of peace, the shield of faith, the helmet of salvation, and the sword of the Spirit — which is the Word of God."', verse: 'Ephesians 6:13-17', character: 'paul', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 You are God\'s masterpiece (handiwork). Saved by grace. Armed for battle. "My grace is sufficient." Put on the full armor daily! 🛡️⚔️', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── PHILIPPIANS ───
  {
    id: 'philippians-rejoice',
    title: 'Philippians: Rejoice Always',
    description: 'Written from prison, Paul\'s letter overflows with joy: "I can do all things through Christ who strengthens me."',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'all', icon: '😊', color: 'from-yellow-400 to-amber-500',
    scenes: [
      { id: 0, background: 'lions-den-peaceful', dialogue: [
        { speaker: 'Paul', text: '"Rejoice in the Lord always. I will say it again: Rejoice!"', verse: 'Philippians 4:4', character: 'paul', emotion: 'joyful' },
        { speaker: 'Paul', text: '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and minds."', verse: 'Philippians 4:6-7', character: 'paul' },
        { speaker: 'Paul', text: '"I can do all things through Christ who strengthens me."', verse: 'Philippians 4:13', character: 'paul', emotion: 'confident' },
        { speaker: 'Paul', text: '"Our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, who will transform our lowly bodies to be like His glorious body."', verse: 'Philippians 3:20-21', character: 'paul' },
        { speaker: 'Narrator', text: '📖 Paul wrote this from PRISON — yet it\'s the most joyful letter in the Bible. Joy isn\'t circumstances; it\'s Christ in you. "Rejoice always!" 😊🙏', background: 'lions-den-peaceful' }
      ]}
    ]
  },

  // ─── COLOSSIANS ───
  {
    id: 'colossians-christ-above',
    title: 'Colossians: Christ Above All',
    description: 'Jesus is supreme over everything — the image of the invisible God, the firstborn over all creation.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '👑', color: 'from-amber-500 to-indigo-500',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Paul', text: '"The Son is the image of the invisible God, the firstborn over all creation. For in Him all things were created: things in heaven and on earth, visible and invisible. All things have been created through Him and for Him. He is before all things, and in Him all things hold together."', verse: 'Colossians 1:15-17', character: 'paul', emotion: 'worshipful' },
        { speaker: 'Paul', text: '"Set your minds on things above, not on earthly things. For you died, and your life is now hidden with Christ in God."', verse: 'Colossians 3:1-3', character: 'paul' },
        { speaker: 'Paul', text: '"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. It is the Lord Christ you are serving."', verse: 'Colossians 3:23-24', character: 'paul', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 Jesus holds everything together — including you. Whatever you do today, do it for Him. "In Him all things hold together." 👑🙏', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── 1 & 2 THESSALONIANS ───
  {
    id: 'thessalonians-return',
    title: 'Thessalonians: The Lord Will Return',
    description: 'Encouragement for suffering believers: Jesus is coming back, and we will be with Him forever.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '☁️', color: 'from-sky-400 to-indigo-400',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Paul', text: '"The Lord Himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. Then we who are alive will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever."', verse: '1 Thessalonians 4:16-17', character: 'paul' },
        { speaker: 'Paul', text: '"Rejoice always, pray continually, give thanks in all circumstances; for this is God\'s will for you in Christ Jesus."', verse: '1 Thessalonians 5:16-18', character: 'paul', emotion: 'teaching' },
        { speaker: 'Narrator', text: '📖 We have a living hope: Jesus is coming back! Until then: rejoice, pray, give thanks. That is God\'s will for you. ☁️✝️', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── PASTORAL LETTERS ───
  {
    id: 'timothy-fight',
    title: 'Timothy: Fight the Good Fight',
    description: 'Paul\'s final words to his young protégé: pass on what you\'ve learned, endure hardship, finish the race.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🏃', color: 'from-green-500 to-emerald-600',
    scenes: [
      { id: 0, background: 'lions-den', dialogue: [
        { speaker: 'Paul', text: '"Don\'t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."', verse: '1 Timothy 4:12', character: 'paul', emotion: 'encouraging' },
        { speaker: 'Paul', text: '"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work."', verse: '2 Timothy 3:16-17', character: 'paul' },
        { speaker: 'Paul', text: '"I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord will award to me and to all who have longed for His appearing."', verse: '2 Timothy 4:7-8', character: 'paul', emotion: 'triumphant' },
        { speaker: 'Narrator', text: '📖 Paul wrote 2 Timothy from a Roman prison, facing execution. His final words: "Fight the good fight. Finish the race. Keep the faith." Pass it on. 🏃🏆', background: 'lions-den' }
      ]}
    ]
  },

  // ─── PHILEMON ───
  {
    id: 'philemon-forgiveness',
    title: 'Philemon: Forgiveness & Reconciliation',
    description: 'Paul pleads for a runaway slave to be received back — not as a slave, but as a brother.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🤝', color: 'from-teal-400 to-green-500',
    scenes: [
      { id: 0, background: 'stable', dialogue: [
        { speaker: 'Narrator', text: 'Onesimus, a runaway slave, had stolen from his master Philemon and fled. He met Paul in prison and became a believer.', background: 'stable', verse: 'Philemon 1:10' },
        { speaker: 'Paul', text: '"I am sending him back to you, sending my very heart. Perhaps the reason he was separated from you for a little while was that you might have him back forever — no longer as a slave, but better than a slave, as a dear brother."', verse: 'Philemon 1:12-16', character: 'paul', emotion: 'loving' },
        { speaker: 'Narrator', text: '📖 The Gospel destroys social barriers. In Christ, there is no slave or free — only brothers and sisters. Forgiveness and reconciliation are at the heart of what Jesus does. 🤝❤️', background: 'stable' }
      ]}
    ]
  },

  // ─── HEBREWS ───
  {
    id: 'hebrews-faith',
    title: 'Hebrews: The Hall of Faith',
    description: 'A cloud of witnesses who trusted God — and Jesus, the perfect High Priest who sympathizes with our weakness.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🏛️', color: 'from-stone-500 to-amber-500',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Narrator', text: '"For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin."', verse: 'Hebrews 4:15' },
        { speaker: 'Narrator', text: '"Now faith is confidence in what we hope for and assurance about what we do not see."', verse: 'Hebrews 11:1' },
        { speaker: 'Narrator', text: 'By faith: Abel offered a better sacrifice. Enoch walked with God. Noah built an ark. Abraham obeyed and went. Moses chose suffering over pleasure. Rahab welcomed the spies. Gideon, Barak, Samson, David, the prophets — through faith they conquered kingdoms, administered justice, shut the mouths of lions!', background: 'glorious-light', verse: 'Hebrews 11:4-33' },
        { speaker: 'Narrator', text: '"Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith."', verse: 'Hebrews 12:1-2', emotion: 'inspiring' },
        { speaker: 'Narrator', text: '📖 You are surrounded by a cloud of witnesses — every faithful person who ever lived. Run your race. Fix your eyes on Jesus. He started this faith journey in you, and He will finish it. 🏛️🏃', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── JAMES ───
  {
    id: 'james-works',
    title: 'James: Faith Without Works is Dead',
    description: 'Real faith produces real action. Tame your tongue, care for the poor, and be doers of the Word.',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'all', icon: '🔨', color: 'from-stone-500 to-green-600',
    scenes: [
      { id: 0, background: 'field', dialogue: [
        { speaker: 'James', text: '"What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them? Faith by itself, if it is not accompanied by action, is dead."', verse: 'James 2:14, 17', character: 'paul', emotion: 'teaching' },
        { speaker: 'James', text: '"Consider it pure joy whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance." ... "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault."', verse: 'James 1:2-3, 5', character: 'paul' },
        { speaker: 'James', text: '"The tongue is a small part of the body, but it makes great boasts. Consider what a great forest is set on fire by a small spark."', verse: 'James 3:5', character: 'paul' },
        { speaker: 'James', text: '"Submit yourselves to God. Resist the devil, and he will flee from you. Come near to God and He will come near to you."', verse: 'James 4:7-8', character: 'paul', emotion: 'encouraging' },
        { speaker: 'Narrator', text: '📖 Faith without works is like a car without an engine — it looks right but goes nowhere. Let your faith MOVE. "Come near to God and He will come near to you." 🔨🙏', background: 'field' }
      ]}
    ]
  },

  // ─── 1 PETER ───
  {
    id: '1peter-living-stones',
    title: '1 Peter: Living Stones & Suffering Well',
    description: 'Peter encourages persecuted believers: you are a chosen people, a royal priesthood, living stones in God\'s temple.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '🪨', color: 'from-stone-500 to-blue-500',
    scenes: [
      { id: 0, background: 'mountain-sinai', dialogue: [
        { speaker: 'Peter', text: '"You also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ."', verse: '1 Peter 2:5', character: 'peter' },
        { speaker: 'Peter', text: '"But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession, that you may declare the praises of Him who called you out of darkness into His wonderful light."', verse: '1 Peter 2:9', character: 'peter', emotion: 'inspired' },
        { speaker: 'Peter', text: '"Cast all your anxiety on Him because He cares for you." ... "Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion. Resist him, standing firm in the faith."', verse: '1 Peter 5:7-9', character: 'peter', emotion: 'encouraging' },
        { speaker: 'Narrator', text: '📖 You are a living stone in God\'s temple. You are chosen, royal, holy. Cast your anxiety on Him — He cares. Stand firm. 🪨👑', background: 'mountain-sinai' }
      ]}
    ]
  },

  // ─── 1 JOHN ───
  {
    id: '1john-god-is-love',
    title: '1 John: God is Love',
    description: 'The beloved disciple\'s final teaching: walk in the light, love one another, and know you have eternal life.',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'all', icon: '💗', color: 'from-rose-400 to-purple-500',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'John', text: '"This is the message we have heard from Him and declare to you: God is light; in Him there is no darkness at all."', verse: '1 John 1:5', character: 'john' },
        { speaker: 'John', text: '"If we confess our sins, He is faithful and just and will forgive us our sins and purify us from all unrighteousness."', verse: '1 John 1:9', character: 'john', emotion: 'loving' },
        { speaker: 'John', text: '"Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love."', verse: '1 John 4:7-8', character: 'john' },
        { speaker: 'John', text: '"This is how God showed His love among us: He sent His one and only Son into the world that we might live through Him."', verse: '1 John 4:9', character: 'john' },
        { speaker: 'John', text: '"I write these things to you who believe in the name of the Son of God so that you may KNOW that you have eternal life."', verse: '1 John 5:13', character: 'john', emotion: 'assuring' },
        { speaker: 'Narrator', text: '📖 You can KNOW you have eternal life. Not hope, not guess — KNOW. God is love. Walk in the light. Love one another. 💗✝️', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── JUDE ───
  {
    id: 'jude-keep',
    title: 'Jude: Keep Yourselves in God\'s Love',
    description: 'A short letter with a powerful doxology: to Him who is able to keep you from falling!',
    category: 'new-testament', difficulty: 'easy', ageGroup: 'all', icon: '🛡️', color: 'from-indigo-500 to-purple-600',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Jude', text: '"Keep yourselves in God\'s love as you wait for the mercy of our Lord Jesus Christ to bring you to eternal life."', verse: 'Jude 1:21', character: 'paul' },
        { speaker: 'Jude', text: '"To Him who is able to keep you from stumbling and to present you before His glorious presence without fault and with great joy — to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen."', verse: 'Jude 1:24-25', character: 'paul', emotion: 'worshipful' },
        { speaker: 'Narrator', text: '📖 He is ABLE to keep you from falling. Not by your strength — by His. Rest in that. 🛡️🙏', background: 'glorious-light' }
      ]}
    ]
  },

  // ─── REVELATION ───
  {
    id: 'revelation-new-creation',
    title: 'Revelation: A New Heaven & Earth',
    description: 'The Bible\'s grand finale: God makes everything new, dwells with His people, and wipes every tear away.',
    category: 'new-testament', difficulty: 'medium', ageGroup: 'all', icon: '👑', color: 'from-amber-400 to-indigo-600',
    scenes: [
      { id: 0, background: 'glorious-light', dialogue: [
        { speaker: 'Narrator', text: 'The last book of the Bible — Revelation — unveils the end of all things. John saw visions of cosmic battle, the defeat of evil, and the final victory of God.', background: 'glorious-light' },
        { speaker: 'John', text: '"Then I saw a new heaven and a new earth. I saw the Holy City, the new Jerusalem, coming down out of heaven from God."', verse: 'Revelation 21:1-2', character: 'john' },
        { speaker: 'God', text: '"Look! God\'s dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God."', verse: 'Revelation 21:3', character: 'god', emotion: 'glorious' },
        { speaker: 'God', text: '"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." ... "I am making everything new!"', verse: 'Revelation 21:4-5', character: 'god', emotion: 'loving' },
        { speaker: 'Jesus', text: '"Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done. I am the Alpha and the Omega, the First and the Last, the Beginning and the End."', verse: 'Revelation 22:12-13', character: 'jesus', emotion: 'glorious' },
        { speaker: 'Narrator', text: '📖 The Bible begins in a garden and ends in a city. It begins with separation and ends with dwelling together. "He who testifies to these things says, \'Yes, I am coming soon.\' Amen. Come, Lord Jesus! The grace of the Lord Jesus be with God\'s people. Amen." — Revelation 22:20-21 👑✨', background: 'glorious-light' }
      ]}
    ]
  }
];
