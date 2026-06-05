// ===== DATA =====

const RACE_LIST = [
  { key: 'human',     label: 'Human',     icon: '🧑' },
  { key: 'elf',       label: 'Elf',        icon: '🌙' },
  { key: 'dwarf',     label: 'Dwarf',      icon: '⛏️' },
  { key: 'halfling',  label: 'Halfling',   icon: '🍀' },
  { key: 'tiefling',  label: 'Tiefling',   icon: '🔥' },
  { key: 'half-orc',  label: 'Half-Orc',   icon: '💪' },
  { key: 'gnome',     label: 'Gnome',      icon: '⚙️' },
  { key: 'dragonborn',label: 'Dragonborn', icon: '🐉' },
  { key: 'half-elf',  label: 'Half-Elf',   icon: '🌟' },
];

const CLASS_LIST = [
  { key: 'barbarian', label: 'Barbarian', icon: '🪓' },
  { key: 'bard',      label: 'Bard',      icon: '🎵' },
  { key: 'cleric',    label: 'Cleric',    icon: '⚜️' },
  { key: 'druid',     label: 'Druid',     icon: '🌿' },
  { key: 'fighter',   label: 'Fighter',   icon: '🛡️' },
  { key: 'monk',      label: 'Monk',      icon: '👊' },
  { key: 'paladin',   label: 'Paladin',   icon: '⚔️' },
  { key: 'ranger',    label: 'Ranger',    icon: '🏹' },
  { key: 'rogue',     label: 'Rogue',     icon: '🗡️' },
  { key: 'sorcerer',  label: 'Sorcerer',  icon: '✨' },
  { key: 'warlock',   label: 'Warlock',   icon: '🌑' },
  { key: 'wizard',    label: 'Wizard',    icon: '📜' },
];

const FEAT_LIST = [
  { key: 'actor',              label: 'Actor' },
  { key: 'alert',              label: 'Alert' },
  { key: 'athlete',            label: 'Athlete' },
  { key: 'charger',            label: 'Charger' },
  { key: 'crossbow-expert',    label: 'Crossbow Expert' },
  { key: 'dual-wielder',       label: 'Dual Wielder' },
  { key: 'durable',            label: 'Durable' },
  { key: 'grappler',           label: 'Grappler' },
  { key: 'great-weapon-master',label: 'Great Weapon Master' },
  { key: 'healer',             label: 'Healer' },
  { key: 'heavy-armor-master', label: 'Heavy Armor Master' },
  { key: 'inspiring-leader',   label: 'Inspiring Leader' },
  { key: 'keen-mind',          label: 'Keen Mind' },
  { key: 'lucky',              label: 'Lucky' },
  { key: 'mage-slayer',        label: 'Mage Slayer' },
  { key: 'magic-initiate',     label: 'Magic Initiate' },
  { key: 'mobile',             label: 'Mobile' },
  { key: 'mounted-combatant',  label: 'Mounted Combatant' },
  { key: 'observant',          label: 'Observant' },
  { key: 'polearm-master',     label: 'Polearm Master' },
  { key: 'resilient',          label: 'Resilient' },
  { key: 'ritual-caster',      label: 'Ritual Caster' },
  { key: 'sentinel',           label: 'Sentinel' },
  { key: 'sharpshooter',       label: 'Sharpshooter' },
  { key: 'shield-master',      label: 'Shield Master' },
  { key: 'skilled',            label: 'Skilled' },
  { key: 'spell-sniper',       label: 'Spell Sniper' },
  { key: 'tavern-brawler',     label: 'Tavern Brawler' },
  { key: 'telekinetic',        label: 'Telekinetic' },
  { key: 'telepathic',         label: 'Telepathic' },
  { key: 'tough',              label: 'Tough' },
  { key: 'war-caster',         label: 'War Caster' },
  { key: 'weapon-master',      label: 'Weapon Master' },
];

const TONE_LIST = [
  { key: 'heroic',     label: 'Heroic' },
  { key: 'dark',       label: 'Dark & Gritty' },
  { key: 'mysterious', label: 'Mysterious' },
  { key: 'comedic',    label: 'Comedic' },
];

// ===== RANDOM NAME BANKS =====
const NAMES = {
  human:      ['Aldric', 'Mara', 'Tobias', 'Lyra', 'Gareth', 'Sena', 'Corwin', 'Petra', 'Davan', 'Isara', 'Brennan', 'Tova'],
  elf:        ['Aelindra', 'Caelum', 'Sylvara', 'Elarion', 'Thalindra', 'Aelar', 'Naivara', 'Theren', 'Mirindel', 'Caela'],
  dwarf:      ['Thorvald', 'Bryndis', 'Gimara', 'Aldrun', 'Haldur', 'Marta', 'Brokk', 'Helga', 'Durgin', 'Astrid'],
  halfling:   ['Pippa', 'Merric', 'Calla', 'Tobren', 'Lila', 'Finnan', 'Della', 'Moss', 'Bree', 'Ferris'],
  tiefling:   ['Zariel', 'Morwen', 'Vesper', 'Kael', 'Serath', 'Nyx', 'Vayne', 'Lazuli', 'Cinder', 'Malvyn'],
  'half-orc': ['Grutha', 'Varek', 'Shara', 'Morgath', 'Ulda', 'Brek', 'Thasha', 'Goren', 'Rysa', 'Draven'],
  gnome:      ['Fizzwick', 'Tinkle', 'Zibble', 'Pepper', 'Cogsworth', 'Wren', 'Sprocket', 'Nibble', 'Clank', 'Mira'],
  dragonborn: ['Arjhan', 'Balasar', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Nadarr', 'Rhogar', 'Shedinn', 'Torinn'],
  'half-elf': ['Aerin', 'Liriel', 'Doven', 'Serana', 'Maerel', 'Tanis', 'Calder', 'Lirien', 'Aren', 'Syldan'],
};

// ===== TEMPLATE DATA =====

const RACES = {
  human: {
    flavor: [
      'raised among the relentless churn of human ambition — cities that never slept, markets that never closed',
      'shaped by the peculiar human gift for forgetting history and repeating it anyway',
      'born into a world that moves too fast to look back, which suited {name} well enough',
    ],
  },
  elf: {
    flavor: [
      'carrying centuries of memory behind eyes that have seen empires built and dissolved',
      'raised with the elven understanding that time is a river, not a race — though the events that followed made patience difficult',
      'burdened with the elven gift for outliving nearly everything {they} care about',
    ],
  },
  dwarf: {
    flavor: [
      'raised on clan oaths and the rhythm of hammer on stone, where your word was heavier than gold',
      'shaped by the dwarven conviction that what is built well lasts, and what lasts matters',
      'carrying the weight of ancestral expectation in every deliberate step',
    ],
  },
  halfling: {
    flavor: [
      'raised in a community that considered adventure mildly impolite and adventure-seeking a personality flaw',
      'shaped by the halfling talent for finding warmth in unlikely places and luck in unlikely moments',
      'carrying the halfling belief that home is worth protecting, which turns out to be a more dangerous conviction than it sounds',
    ],
  },
  tiefling: {
    flavor: [
      'having learned early that the world forms its opinions before you finish speaking',
      'shaped by a lifetime of suspicion that eventually hardened into something fierce, self-reliant, and quietly proud',
      'carrying infernal heritage not as a curse but as a fact — one {they} have learned to use',
    ],
  },
  'half-orc': {
    flavor: [
      'raised in the uncomfortable borderland between two worlds, belonging fully to neither',
      'shaped by the need to prove worth in a world that had already made up its mind',
      'carrying a fury that, over years of deliberate work, was refined into something purposeful',
    ],
  },
  gnome: {
    flavor: [
      'raised with the gnomish certainty that every problem is a puzzle and every puzzle is a gift',
      'shaped by a community that celebrated curiosity above almost everything, including caution',
      'carrying a wonder for the world that years of hard experience have not quite managed to extinguish',
    ],
  },
  dragonborn: {
    flavor: [
      'raised on clan honor and the expectation that draconic heritage is not a heritage to waste',
      'shaped by the dragonborn belief that who you are is the sum of what you do, not what you were given',
      'carrying the ancestral fire of {their} bloodline — sometimes literally',
    ],
  },
  'half-elf': {
    flavor: [
      'raised at the intersection of two cultures, inheriting the best and most inconvenient traits of both',
      'shaped by the particular loneliness of belonging almost everywhere and fully nowhere',
      'carrying elven patience and human restlessness in equal, frequently inconvenient measure',
    ],
  },
};

const BACKGROUNDS = {
  acolyte: {
    origins: [
      '{name} grew up within temple walls, learning scripture before learning much else. The rhythm of prayer shaped {their} days, and the faith of those around {them} was as familiar as breathing.',
      'From childhood, {name} served at a shrine — sweeping floors, lighting candles, carrying offerings. It was quiet work, but {they} believed in every part of it.',
      '{name} was taken in by a religious order as a young child. The gods were not abstract concepts to {them}. They were as present and immediate as hunger.',
    ],
    conflicts: [
      'Then the temple burned. Or the doctrine cracked. Or a question arose that no scripture could answer without costing something {name} was not willing to pay.',
      'Something shook that certainty: a vision that defied the texts, a betrayal from within the faith, or a miracle that went sideways in a way the order refused to discuss.',
      'Until the day {name} witnessed something that no prayer could explain away, and realized that the world outside the temple was larger — and stranger — than anyone inside had admitted.',
    ],
  },
  charlatan: {
    origins: [
      '{name} learned early that people believe what they want to believe. A little confidence, the right costume, and the world becomes a series of doors that open themselves.',
      'By twelve, {name} was running minor cons. By fifteen, significant ones. The work was creative, mostly harmless, and paid far better than honest labor ever had.',
      '{name} grew up in a traveling act — one part entertainment, two parts swindle — and learned to read a crowd before learning to read a map.',
    ],
    conflicts: [
      'The problem with building a life on performance is that eventually something real happens, and {they} have no idea how to face it without a role to play.',
      'One mark turned out to be connected to people who did not appreciate being fooled and had the reach to do something about it.',
      '{name} made a mistake — the kind that follows you across city lines and does not forgive.',
    ],
  },
  criminal: {
    origins: [
      '{name} did not exactly choose the work. It was more that a series of circumstances made choosing unnecessary, and {they} turned out to be good at what was required.',
      'The guild found {name} young, and the guild took care of its own. That was the arrangement. For years, it was enough.',
      'Survival in {name}\'s neighborhood meant certain compromises. {name} made them without drama and got very good at what followed.',
    ],
    conflicts: [
      'Then a job went wrong, or a contact vanished, or {name} crossed a line {they} had not known was there until {they} were already on the other side of it.',
      'The work has a way of catching up. {name}\'s caught up on a night that changed the arithmetic of everything.',
      'One job, one mistake, one morning when {name} understood that staying meant dying. {they} left before sunrise.',
    ],
  },
  entertainer: {
    origins: [
      '{name} grew up performing — first for family, then for coins, then for anyone willing to watch. The attention never got old, and the craft kept getting sharper.',
      'The stage found {name} before {they} found much of anything else. Acting, music, acrobatics — {they} learned all of it and loved most of it.',
      '{name} traveled with a troupe from childhood, learning early that a story told with commitment can become more true than the truth.',
    ],
    conflicts: [
      'The road, though, has a habit of showing you things that belong in no performance — things you cannot file away as material.',
      'Then the troupe fell apart, or the theater burned, or {name} slipped too deep into a role and did not know how to climb back out.',
      'Until the night the audience became something dangerous, and the curtain came down hard on everything {name} had built.',
    ],
  },
  'folk-hero': {
    origins: [
      '{name} was an ordinary person from an ordinary place, until the day that ordinary place needed something it did not have, and {they} happened to be standing there.',
      '{name} stepped up when others stepped back. It was not heroism, exactly. It was more that {they} could not figure out how not to.',
      'The village, the mill, the crossroads — {name} knew that life, lived it fully, and was altered by one moment inside it that could not be undone.',
    ],
    conflicts: [
      'People remember. Songs get written. The awkward part is that the person in the song and the person inside {name}\'s skin are only loosely related.',
      'The problem with being called a hero is that everyone expects you to keep being one, whether or not the situation warrants it.',
      'After that day, staying still felt like a different kind of failure. So {name} kept moving.',
    ],
  },
  'guild-artisan': {
    origins: [
      '{name} apprenticed young, learned the trade through calloused hands and long hours, and earned a guild mark through years of stubborn, careful work.',
      'The craft was everything: the precision of it, the satisfaction of making something real. {name} was good at it and knew it.',
      '{name} came from a family of makers and was expected to become one. For a long time, that expectation fit well enough to wear comfortably.',
    ],
    conflicts: [
      'Then the work became insufficient — not the craft itself, but what {they} could do with it — and something came through the workshop door that no manual had covered.',
      'The guild could not protect what mattered when it mattered. {name} filed that away and did not forget it.',
      'The day came when the tools in {name}\'s hands felt like entirely the wrong tools for the problem directly ahead.',
    ],
  },
  hermit: {
    origins: [
      '{name} withdrew from the world deliberately — seeking silence, or answers, or simply distance from something that had gone wrong. The solitude became its own country.',
      'Years in isolation gave {name} a different kind of education: the patience of seasons, the honesty of wilderness, the strange clarity that emerges when there is no one left to perform for.',
      '{name} lived apart by choice, tending a small fire and considerably larger thoughts, until the quiet showed {them} something that required going back outside.',
    ],
    conflicts: [
      'What {they} found in the silence changed things. Or someone found {them}, which changed things differently.',
      'The revelation arrived gradually, then suddenly, in the way that certain truths do when you stop arguing with them.',
      'The world comes to collect you eventually. {name} learned this the hard way.',
    ],
  },
  noble: {
    origins: [
      '{name} was born into comfort and raised into obligation. The family name opened every door; what waited behind those doors was, depending on the door, either magnificent or appalling.',
      'Tutors, titles, banquets, politics — {name}\'s childhood was structured and abundant and, in its way, surprisingly hollow at the center.',
      'Growing up in a house of privilege meant growing up in a house of performance. Every meal was a negotiation. Every friendship had a ledger.',
    ],
    conflicts: [
      'Then the estate fell, or the title meant nothing when it mattered, or {name} simply chose to stop being what had been decided for {them} before {they} could form an opinion.',
      'Something in the shadow of the family\'s power showed {name} what the comfort was actually built on. {they} could not un-see it.',
      'The doors closed, or {name} walked through one that did not lead back.',
    ],
  },
  outlander: {
    origins: [
      '{name} was raised at the edge of the map, where settlements thin out and the wilderness forms its own opinions about who belongs.',
      'The wild was home: its rhythms, its dangers, its brutal and clarifying honesty. {name} learned its language before the language of cities.',
      '{name} grew up moving — following herds, or seasons, or the decisions of a clan that could read the land the way others read books.',
    ],
    conflicts: [
      'Then the land changed, or was changed by something that did not have the right to change it, and {name} followed the threat inward, toward the world of walls.',
      'The wilderness {name} knew was altered, poisoned, or simply lost. The answer was not inside it.',
      'Something emerged from the deep wild that even the wilderness could not contain, and {name} had been tracking it ever since.',
    ],
  },
  sage: {
    origins: [
      '{name} grew up surrounded by books and people who believed in them absolutely. The library was a second home; the archive, a third.',
      'Questions were the family trade — not answers, questions. {name} learned early that knowing the right question is worth more than a dozen easy answers.',
      '{name} spent years chasing a single piece of knowledge through crumbling manuscripts and the fading memories of older scholars, always one reference away from the truth.',
    ],
    conflicts: [
      'Then the research led somewhere no existing book covered, and the only way forward was through a world that did not care about footnotes.',
      'The answer {they} found raised ten worse questions. One of them required going outside and not coming back for a while.',
      'Something in the archives should not have been there. Or was missing in a way that meant something had deliberately taken it.',
    ],
  },
  sailor: {
    origins: [
      '{name} took to the sea young, by choice or circumstance, and the sea decided to keep {them}. Salt, rope, and starless nights — {they} grew to love most of it.',
      'The ship was {name}\'s first real home. The crew, {their} first real family. The ocean, an ongoing lesson in who is actually in charge.',
      '{name} grew up in a port city where every interesting person was either arriving or leaving, and eventually chose to be one of the latter.',
    ],
    conflicts: [
      'A storm, or a mutiny, or a cargo that turned out to be nothing like what the manifest claimed.',
      'The sea gave {name} something and took something else back. The exchange felt fair at the time. It does not, in retrospect.',
      '{name} stepped off the last ship and did not return. The reason still has a name.',
    ],
  },
  soldier: {
    origins: [
      '{name} enlisted young — out of duty, desperation, or the genuine belief that the cause was worth the cost. The army is a thorough instructor regardless of why you arrived.',
      'The ranks made {name} what {they} are: disciplined, watchful, and precise about what things actually cost.',
      '{name} came from a military family. The path was established before {they} could question it. The question became not whether to serve, but how.',
    ],
    conflicts: [
      'Then the war ended, or the cause dissolved, or {name} followed an order {they} should not have — or refused one {they} should have.',
      'The campaign was lost. Or won in a way that felt indistinguishable from losing.',
      'When it was over, {name} understood that a soldier without a war is a different kind of problem entirely.',
    ],
  },
};

const CLASSES = {
  barbarian: {
    awakenings: [
      'The rage arrived before {name} had a name for it — a white heat that rose when needed and refused to be argued with. {name} eventually stopped arguing.',
      '{name} discovered the fury not through training but through loss. Something broke, and the breaking, improbably, made {them} stronger.',
      'There was no teacher. The power was always present, buried just below the surface, waiting for the specific kind of pressure that finally unlocked it.',
    ],
    motivation: [
      'Now {name} carries the fury like a weapon — mostly aimed at the things that deserve it, mostly under control.',
      'The rage is not {their} enemy. It has preserved {their} life too many times to frame it that way.',
    ],
  },
  bard: {
    awakenings: [
      '{name} realized, somewhere between the third song and the fourth, that the music was doing something real — not just moving people emotionally, but actually changing things.',
      'The power hid inside the performance for years before {name} understood what it was. A song that calmed a riot. A story that unsettled a locked door.',
      '{name} learned that words have weight independent of their meaning — that rhythm carries power, that a well-told story can reshape what someone believes is possible.',
    ],
    motivation: [
      'The art and the ability are the same thing. {name} has never found a clean line between them and suspects that is the point.',
      'Words were always {their} sharpest instrument. That they also happen to be magic strikes {name} as entirely correct.',
    ],
  },
  cleric: {
    awakenings: [
      'The god answered. Not as a metaphor or a feeling — {name} asked, something answered, and the world changed shape in a way that left no room for interpretation.',
      '{name} was desperate enough to pray sincerely for the first time, and whatever was listening decided that sincerity merited a response.',
      '{name} had lived with faith. Then came proof. The moment it arrived reorganized everything {they} understood about the path forward.',
    ],
    motivation: [
      'The divine commission is clear even when the road is not. {name} moves through the world as both instrument and witness.',
      'Serving a god sounds simple. It is, {name} has found, endlessly complicated, and {they} are learning that with every mile.',
    ],
  },
  druid: {
    awakenings: [
      'The first time {name} felt the natural world genuinely respond — not weather behaving like weather, but a deliberate response — {they} understood what {they} had always been.',
      'A dying forest. A poisoned river. Something in {name} reached toward it, and to {their} considerable surprise, the wild reached back.',
      '{name} did not choose the old ways so much as stumble into them. An ancient circle found {them}, or {they} found something old and patient in the deep wood, and there was no returning to whatever {they} had been before.',
    ],
    motivation: [
      'The natural world speaks. {name} is one of the few who can hear it clearly enough to act on what it says.',
      'The balance is always threatened. {name} is always in motion. The connection makes both of those things true at the same time.',
    ],
  },
  fighter: {
    awakenings: [
      '{name} trained because {they} had to. Then because {they} wanted to. Then because training was the one thing that made complete sense when nothing else did.',
      'The first real fight taught {name} that survival is a learnable skill. Every fight since has been a refinement.',
      '{name} was not born talented. {they} built it — repetition by repetition, bruise by bruise — until the body knew what to do before the mind had finished deciding.',
    ],
    motivation: [
      'Combat is a language {name} is fluent in. Everything else, in comparison, requires translation.',
      '{name} fights because {they} are very good at it, and because the things worth protecting do not protect themselves.',
    ],
  },
  monk: {
    awakenings: [
      'The monastery offered discipline when {name} had none — a structured world to replace the chaos {they} came from. {name} took the practice seriously. It gave something back.',
      '{name} found the way through years of stillness, and then through one very loud, very fast moment that required perfect stillness to survive.',
      'The ki was not granted. It was uncovered — present all along, inside {name}, waiting for the particular quality of silence that reveals it.',
    ],
    motivation: [
      'Every movement is deliberate. The path is the practice, and the practice does not end.',
      '{name} moves through the world as the monastery taught: with presence, economy, and — when occasion demands — decisive force.',
    ],
  },
  paladin: {
    awakenings: [
      'The oath was not a casual thing. {name} stood before something — a god, a dying ideal, a moment of absolute moral clarity — and made a promise that rewrote the terms of their existence.',
      '{name} had the power first and the understanding later. The oath gave the power a direction.',
      'The call arrived in a moment of crisis — a choice between easy and right, with no middle option. {name} chose right. The choice left a permanent mark.',
    ],
    motivation: [
      'The oath is not a limitation. It is the reason for everything. {name} moves through the world as both weapon and example.',
      '{name} does not fight for recognition. {they} fight because the oath demands it and because, beneath the demand, {they} believe it too.',
    ],
  },
  ranger: {
    awakenings: [
      '{name} learned to track before learning most other things. The wilderness is not a kind teacher, but it is a thorough one.',
      'Years in the wild refined {name} into something the wilderness respects — patient, quiet, and capable of a stillness that animals do not bother to avoid.',
      'The ranger\'s path grew gradually from a long accumulation of survival, observation, and hard-won understanding of how things hunt and how things are hunted.',
    ],
    motivation: [
      '{name} keeps to the edge of the settled world, watching the border between the known and the dangerous.',
      'The wilderness is not hostile to {name}. It is honest — and honesty, {they} have found, is worth considerably more than comfort.',
    ],
  },
  rogue: {
    awakenings: [
      '{name} learned early that the world runs on two sets of rules — the ones written down and the ones that actually apply. {they} became fluent in the second set.',
      'The skills accumulated without ceremony: lockpicking from necessity, sleight of hand from hunger, the ability to disappear from pure survival instinct.',
      '{name} had a talent for noticing what others missed and a gift for using that information carefully. Both things sharpened with practice.',
    ],
    motivation: [
      '{name} works in the space between what is seen and what is real. It is a useful place to operate from.',
      'Trust is a resource. {name} manages it the way others manage coin — carefully, and always with one eye on the exit.',
    ],
  },
  sorcerer: {
    awakenings: [
      'The magic did not arrive — it surfaced. {name} had been carrying it without knowing, until something happened that made concealment impossible.',
      '{name} cast {their} first spell by accident, and the accident was significant enough that pretending otherwise was not an option available to anyone present.',
      'The power is embedded in blood, or fate, or something older than either. {name} did not choose it. The only choice was what to do with it.',
    ],
    motivation: [
      'The magic is not a tool {name} carries. It is part of what {they} are. Learning to use it is the same project as learning to be {themselves}.',
      '{name} moves through the world trailing the subtle warmth of power, trying to use it wisely and succeeding often enough to matter.',
    ],
  },
  warlock: {
    awakenings: [
      '{name} made a deal. The specific terms are private. What {they} received in exchange is not.',
      'The patron appeared when {name} was desperate enough to say yes without reading the fine print carefully. The power is genuine. The cost is ongoing.',
      '{name} sought the pact deliberately, eyes open, having calculated that what was being offered was worth what was being asked. {they} still believe that. Mostly.',
    ],
    motivation: [
      'The patron\'s interests are not always legible. {name}\'s obligation is to keep moving and trust that their goals, for now, point in the same direction.',
      'Power carries obligation. {name} honors {their} end of the arrangement and expects the same in return. So far, the balance holds.',
    ],
  },
  wizard: {
    awakenings: [
      '{name} found the first spellbook — or it found {them}. The encounter does not matter as much as what happened after: the future changed shape entirely.',
      'The study was slow, exhausting, and occasionally dangerous. {name} did not care. The knowledge existed and reaching it felt like the only thing worth doing.',
      '{name} understood that magic is not intuition — it is precision. It rewarded exactly the kind of mind {they} had always been told was a problem. {they} gave it everything.',
    ],
    motivation: [
      'Every question answered opens three more. {name} finds this deeply satisfying.',
      'The spellbook is always close. The next page is always more interesting than the last.',
    ],
  },
};

const FEATS = {
  actor:               ['{name} has worn enough faces that {they} sometimes check, quietly, to confirm which one is actually on.', 'Becoming someone else was a survival skill before it was a performance skill. {name} has never entirely separated the two.'],
  alert:               ['{name} never sits with {their} back to the door. It is not paranoia. It is arithmetic.', '{they} sleep lightly and wake fast. The habit was learned expensively.'],
  athlete:             ['The body is a tool {name} has sharpened deliberately, knowing that the gap between safe and dead is sometimes measured in seconds and inches.', '{they} train when {they} do not need to, because {they} remember with precision what happens when the training stops.'],
  charger:             ['{name}\'s approach to obstacles is direct: momentum, commitment, impact. It works more often than it probably should.'],
  'crossbow-expert':   ['{they} learned that distance is a form of mercy — for both parties. It is cleaner to solve a problem from across the room than inside it.'],
  'dual-wielder':      ['Two blades felt correct in a way one never had. {name} stopped questioning the preference and started refining it.'],
  durable:             ['{name} has survived things that were not designed to be survivable. {they} have stopped wondering why and started accepting the pattern.'],
  grappler:            ['When the blade is the wrong answer, {name}\'s hands are the right one. More than a few situations have ended with nothing but reach and willingness to use it.'],
  'great-weapon-master': ['The large weapons matched {name}\'s philosophy: if something is worth stopping, it is worth stopping completely.'],
  healer:              ['Keeping people alive requires as much attention as killing things. {name} paid that attention and does not intend to stop.'],
  'heavy-armor-master':  ['{they} took the hits so others did not have to. Eventually, the hits began to matter considerably less.'],
  'inspiring-leader':  ['{name} discovered that the right words at the right moment accomplish things that no weapon can. {they} practice both, for different reasons.'],
  'keen-mind':         ['{name} forgets almost nothing — a gift that carries, like most gifts, a corresponding weight.'],
  lucky:               ['The universe appears to have opinions about {name}\'s continued existence, and so far those opinions have been favorable.', '{they} have survived situations where survival was not statistically likely. {name} has accepted this as information about the shape of things.'],
  'mage-slayer':       ['{name} received a very thorough education in what magic does when it is aimed at you. The lesson has not faded.'],
  'magic-initiate':    ['A fragment of borrowed or stumbled-into power sits at the edge of everything {name} can do — small, quiet, and occasionally decisive.'],
  mobile:              ['{name} learned that not occupying the space where danger lands is half the work of surviving it.', 'Speed is a philosophy {name} has committed to: if you cannot stop it, redirect it; if you cannot redirect it, simply be somewhere else.'],
  'mounted-combatant': ['{name} and {their} mount have developed an understanding that required years and significant mutual trust to build.'],
  observant:           ['{name} notices things: the wrong cup, the shifted rug, the smile that arrives a half-second too late. It is not a power. It is an attention that has been trained too long to switch off.'],
  'polearm-master':    ['{they} believe in reach — in keeping what matters at the end of a long weapon and everything problematic at a comfortable distance.'],
  resilient:           ['{name} bends where others break. Whether that is strength or stubbornness is a distinction {they} have decided does not matter.'],
  'ritual-caster':     ['{name} learned that some magic rewards patience over force — careful, slow work with an elegance that rapid casting cannot replicate.'],
  sentinel:            ['{they} do not retreat. It is not quite bravery. It is that {name} decided, once, that something was worth standing in front of, and the decision seems to have become permanent.'],
  sharpshooter:        ['{name} learned that the most elegant solution to most problems is a good elevation, a clear line, and a steady hand.'],
  'shield-master':     ['Defense is not passive. {name} learned that a shield is a weapon, and that lesson changed the entire geometry of how {they} fight.'],
  skilled:             ['{name} collected skills the way others accumulate regrets — deliberately and with a clear sense of future application.'],
  'spell-sniper':      ['{they} worked out that most obstacles between a spell and its destination are navigable, if you think carefully about the angles.'],
  'tavern-brawler':    ['{name} has started — and finished — more fights in taverns than {they} can accurately recall. The number is not a source of pride. It is simply a fact.'],
  telekinetic:         ['Moving things without touching them began as an accident. Now it is closer to instinct.'],
  telepathic:          ['{name} hears more than {they} mention. Most people\'s surface thoughts are louder than they realize, and {they} have learned to neither react nor acknowledge.'],
  tough:               ['{name} has been injured in ways that were meant to be final. {they} are still determining what that means.', 'The body keeps a record. {name}\'s record is extensive. {they} have stopped auditing it.'],
  'war-caster':        ['{name} learned that maintaining concentration is a discipline, not a given — and that a broken spell at the wrong moment is its own kind of wound.'],
  'weapon-master':     ['{name} speaks multiple dialects of combat. The education was long and occasionally painful. Thoroughness has its own rewards.'],
};

const TONES = {
  heroic: {
    closings: [
      'The road ahead is long. {name} walks it with clear eyes and a purpose that has not wavered.',
      '{name} does not know exactly what comes next. {they} know {they} can face it.',
      'Whatever lies ahead, {name} carries both the weight of the past and the certainty that it was preparation.',
    ],
  },
  dark: {
    closings: [
      'The past follows {name}. {they} have stopped trying to outrun it and started pointing it at things that deserve it.',
      '{name} has seen what people are truly capable of. {they} have made their peace with it — mostly.',
      'There are no clean endings in {name}\'s story so far. That has not stopped {them} from moving forward.',
    ],
  },
  mysterious: {
    closings: [
      'What {name} is actually searching for, exactly, is something {they} keep to {themselves}.',
      'There are things {name} knows that {they} will not share, and reasons for the journey {they} have not named aloud — not even to {themselves}.',
      'Some doors, once you know they exist, cannot be left unopened. {name} found one of those doors.',
    ],
  },
  comedic: {
    closings: [
      '{name} would like it noted that most of this was not {their} fault. The parts that were are understandable in context.',
      'Somehow, this became {their} life. {name} is making the best of it, which is, all things considered, going fine.',
      'It is possible that a wiser person would have made different choices at several key junctures. {name} is at peace with this.',
    ],
  },
};

// ===== GENERATOR =====

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fill(template, vars) {
  return template
    .replace(/\{name\}/g, vars.name)
    .replace(/\{they\}/g, vars.they)
    .replace(/\{their\}/g, vars.their)
    .replace(/\{them\}/g, vars.them);
}

function capitalizeSentences(text) {
  return text
    .replace(/^([a-z])/, ch => ch.toUpperCase())
    .replace(/([.!?]\s+)([a-z])/g, (_, punct, ch) => punct + ch.toUpperCase());
}

function generateBackstory({ name, race, characterClass, background, feats, tone }) {
  const displayName = name.trim() || pick(['the wanderer', 'the adventurer', 'the stranger']);
  const vars = { name: displayName, they: 'they', their: 'their', them: 'them' };

  const raceData  = RACES[race];
  const bgData    = BACKGROUNDS[background];
  const classData = CLASSES[characterClass];
  const toneData  = TONES[tone];

  // --- Paragraph 1: Origin (background + race flavor) ---
  const originLine   = fill(pick(bgData.origins), vars);
  const raceLine     = fill(pick(raceData.flavor), vars);
  const conflictLine = fill(pick(bgData.conflicts), vars);

  // Weave race flavor into origin naturally
  const para1 = capitalizeSentences(
    `${originLine} ${displayName.split(' ')[0]} was ${raceLine}. ${conflictLine}`
  );

  // --- Paragraph 2: Class awakening + motivation ---
  const awakeningLine  = fill(pick(classData.awakenings), vars);
  const motivationLine = fill(pick(classData.motivation), vars);

  const para2 = capitalizeSentences(`${awakeningLine} ${motivationLine}`);

  // --- Paragraph 3: Feat hooks (up to 2) + tone closing ---
  const selectedFeats = feats.filter(f => FEATS[f]);
  const shuffledFeats = [...selectedFeats].sort(() => Math.random() - 0.5).slice(0, 2);
  const featLines = shuffledFeats.map(f => fill(pick(FEATS[f]), vars));
  const closingLine = fill(pick(toneData.closings), vars);

  const para3Parts = [...featLines, closingLine];
  const para3 = capitalizeSentences(para3Parts.join(' '));

  return [para1, para2, para3].join('\n\n');
}

// ===== STATE =====
let state = {
  race:           null,
  characterClass: null,
  background:     '',
  feats:          new Set(),
  tone:           'heroic',
  lastInputs:     null,
};

// ===== UI INIT =====

function buildRaceGrid() {
  const grid = document.getElementById('race-grid');
  RACE_LIST.forEach(r => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'option-card';
    card.dataset.key = r.key;
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', 'false');
    card.innerHTML = `<span class="option-icon">${r.icon}</span>${r.label}`;
    card.addEventListener('click', () => {
      state.race = r.key;
      grid.querySelectorAll('.option-card').forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-checked', 'false');
      });
      card.classList.add('selected');
      card.setAttribute('aria-checked', 'true');
      updateRandomNameHint();
    });
    grid.appendChild(card);
  });
}

function buildClassGrid() {
  const grid = document.getElementById('class-grid');
  CLASS_LIST.forEach(c => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'option-card';
    card.dataset.key = c.key;
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', 'false');
    card.innerHTML = `<span class="option-icon">${c.icon}</span>${c.label}`;
    card.addEventListener('click', () => {
      state.characterClass = c.key;
      grid.querySelectorAll('.option-card').forEach(el => {
        el.classList.remove('selected');
        el.setAttribute('aria-checked', 'false');
      });
      card.classList.add('selected');
      card.setAttribute('aria-checked', 'true');
    });
    grid.appendChild(card);
  });
}

function buildBackgroundSelect() {
  const select = document.getElementById('background-select');
  Object.entries(BACKGROUNDS).forEach(([key, bg]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    select.appendChild(opt);
  });
  select.addEventListener('change', () => { state.background = select.value; });
}

function buildFeatGrid() {
  const grid = document.getElementById('feat-grid');
  FEAT_LIST.forEach(f => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'feat-tag';
    btn.dataset.key = f.key;
    btn.textContent = f.label;
    btn.addEventListener('click', () => {
      if (state.feats.has(f.key)) {
        state.feats.delete(f.key);
        btn.classList.remove('selected');
      } else {
        state.feats.add(f.key);
        btn.classList.add('selected');
      }
    });
    grid.appendChild(btn);
  });
}

function buildToneRow() {
  const row = document.getElementById('tone-row');
  TONE_LIST.forEach(t => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tone-btn' + (t.key === 'heroic' ? ' selected' : '');
    btn.dataset.key = t.key;
    btn.textContent = t.label;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', t.key === 'heroic' ? 'true' : 'false');
    btn.addEventListener('click', () => {
      state.tone = t.key;
      row.querySelectorAll('.tone-btn').forEach(el => {
        el.classList.remove('selected');
        el.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-checked', 'true');
    });
    row.appendChild(btn);
  });
}

function updateRandomNameHint() {}

document.getElementById('random-name-btn').addEventListener('click', () => {
  const raceKey = state.race || 'human';
  const pool = NAMES[raceKey] || NAMES.human;
  document.getElementById('char-name').value = pick(pool);
});

// ===== FORM SUBMIT =====

document.getElementById('backstory-form').addEventListener('submit', e => {
  e.preventDefault();
  runGenerate();
});

document.getElementById('regenerate-btn').addEventListener('click', () => {
  if (state.lastInputs) runGenerate();
});

function runGenerate() {
  const errorEl = document.getElementById('form-error');
  errorEl.classList.add('hidden');

  const inputs = {
    name:           document.getElementById('char-name').value,
    race:           state.race,
    characterClass: state.characterClass,
    background:     document.getElementById('background-select').value,
    feats:          [...state.feats],
    tone:           state.tone,
  };

  const missing = [];
  if (!inputs.race)           missing.push('a Race');
  if (!inputs.characterClass) missing.push('a Class');
  if (!inputs.background)     missing.push('a Background');
  if (missing.length) {
    errorEl.textContent = `Please select ${missing.join(', ')}.`;
    errorEl.classList.remove('hidden');
    return;
  }

  state.lastInputs = inputs;

  const backstory = generateBackstory(inputs);
  renderResult(inputs, backstory);
}

function renderResult(inputs, backstory) {
  const resultSection = document.getElementById('result-section');
  const nameEl  = document.getElementById('result-name');
  const metaEl  = document.getElementById('result-meta');
  const textEl  = document.getElementById('result-text');

  const charName = inputs.name.trim() || 'The Adventurer';
  const raceLabel  = RACE_LIST.find(r => r.key === inputs.race)?.label || '';
  const classLabel = CLASS_LIST.find(c => c.key === inputs.characterClass)?.label || '';
  const bgLabel    = inputs.background.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  nameEl.textContent = charName;
  metaEl.textContent = `${raceLabel} • ${classLabel} • ${bgLabel}`;

  textEl.innerHTML = backstory
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== COPY =====
document.getElementById('copy-btn').addEventListener('click', () => {
  const name = document.getElementById('result-name').textContent;
  const meta = document.getElementById('result-meta').textContent;
  const text = document.getElementById('result-text').innerText;
  const full = `${name}\n${meta}\n\n${text}`;

  navigator.clipboard.writeText(full).then(() => {
    const btn = document.getElementById('copy-btn');
    const orig = btn.textContent;
    btn.textContent = '✓ Copied';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  }).catch(() => {});
});

// ===== BOOT =====
buildRaceGrid();
buildClassGrid();
buildBackgroundSelect();
buildFeatGrid();
buildToneRow();
