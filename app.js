// ===== LISTS =====

const RACE_LIST = [
  { key: 'human',      label: 'Human',      icon: '🧑' },
  { key: 'elf',        label: 'Elf',         icon: '🌙' },
  { key: 'dwarf',      label: 'Dwarf',       icon: '⛏️' },
  { key: 'halfling',   label: 'Halfling',    icon: '🍀' },
  { key: 'tiefling',   label: 'Tiefling',    icon: '🔥' },
  { key: 'half-orc',   label: 'Half-Orc',    icon: '💪' },
  { key: 'gnome',      label: 'Gnome',       icon: '⚙️' },
  { key: 'dragonborn', label: 'Dragonborn',  icon: '🐉' },
  { key: 'half-elf',   label: 'Half-Elf',    icon: '🌟' },
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

const ALIGNMENT_LIST = [
  { key: 'lawful-good',     label: 'Lawful Good' },
  { key: 'neutral-good',    label: 'Neutral Good' },
  { key: 'chaotic-good',    label: 'Chaotic Good' },
  { key: 'lawful-neutral',  label: 'Lawful Neutral' },
  { key: 'true-neutral',    label: 'True Neutral' },
  { key: 'chaotic-neutral', label: 'Chaotic Neutral' },
  { key: 'lawful-evil',     label: 'Lawful Evil' },
  { key: 'neutral-evil',    label: 'Neutral Evil' },
  { key: 'chaotic-evil',    label: 'Chaotic Evil' },
];

const FEAT_LIST = [
  { key: 'actor',               label: 'Actor' },
  { key: 'alert',               label: 'Alert' },
  { key: 'athlete',             label: 'Athlete' },
  { key: 'charger',             label: 'Charger' },
  { key: 'crossbow-expert',     label: 'Crossbow Expert' },
  { key: 'dual-wielder',        label: 'Dual Wielder' },
  { key: 'durable',             label: 'Durable' },
  { key: 'grappler',            label: 'Grappler' },
  { key: 'great-weapon-master', label: 'Great Weapon Master' },
  { key: 'healer',              label: 'Healer' },
  { key: 'heavy-armor-master',  label: 'Heavy Armor Master' },
  { key: 'inspiring-leader',    label: 'Inspiring Leader' },
  { key: 'keen-mind',           label: 'Keen Mind' },
  { key: 'lucky',               label: 'Lucky' },
  { key: 'mage-slayer',         label: 'Mage Slayer' },
  { key: 'magic-initiate',      label: 'Magic Initiate' },
  { key: 'mobile',              label: 'Mobile' },
  { key: 'mounted-combatant',   label: 'Mounted Combatant' },
  { key: 'observant',           label: 'Observant' },
  { key: 'polearm-master',      label: 'Polearm Master' },
  { key: 'resilient',           label: 'Resilient' },
  { key: 'ritual-caster',       label: 'Ritual Caster' },
  { key: 'sentinel',            label: 'Sentinel' },
  { key: 'sharpshooter',        label: 'Sharpshooter' },
  { key: 'shield-master',       label: 'Shield Master' },
  { key: 'skilled',             label: 'Skilled' },
  { key: 'spell-sniper',        label: 'Spell Sniper' },
  { key: 'tavern-brawler',      label: 'Tavern Brawler' },
  { key: 'telekinetic',         label: 'Telekinetic' },
  { key: 'telepathic',          label: 'Telepathic' },
  { key: 'tough',               label: 'Tough' },
  { key: 'war-caster',          label: 'War Caster' },
  { key: 'weapon-master',       label: 'Weapon Master' },
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

// ===== BACKSTORY TEMPLATES =====

const RACES = {
  human:      { flavor: ['raised among the relentless churn of human ambition — cities that never slept, opportunities that never waited', 'shaped by the peculiar human gift for forgetting history and repeating it with fresh enthusiasm', 'born into a world that moves too fast to look back, which suited {name} well enough'] },
  elf:        { flavor: ['carrying centuries of memory behind eyes that have watched empires dissolve', 'raised with the elven understanding that time is a river — though the events that followed made patience difficult', 'burdened with the elven gift for outliving nearly everything {they} care about'] },
  dwarf:      { flavor: ['raised on clan oaths and the rhythm of hammer on stone, where your word was heavier than gold', 'shaped by the dwarven conviction that what is built well lasts, and what lasts matters', 'carrying the weight of ancestral expectation in every deliberate step'] },
  halfling:   { flavor: ['raised in a community that considered adventure mildly impolite and adventure-seeking a personality flaw', 'shaped by the halfling talent for finding warmth in unlikely places and luck in unlikely moments', 'carrying the halfling belief that home is worth protecting — which turns out to be a more dangerous conviction than it sounds'] },
  tiefling:   { flavor: ['having learned early that the world forms its opinions before introductions are made', 'shaped by a lifetime of suspicion that eventually hardened into something fierce, self-reliant, and quietly proud', 'carrying infernal heritage not as a curse but as a fact — one {they} learned, eventually, to use'] },
  'half-orc': { flavor: ['raised in the uncomfortable borderland between two worlds, belonging fully to neither', 'shaped by the need to prove worth in a world that had already made up its mind', 'carrying a fury that, over years of deliberate work, was refined into something purposeful'] },
  gnome:      { flavor: ['raised with the gnomish certainty that every problem is a puzzle and every puzzle is a gift', 'shaped by a community that celebrated curiosity above almost everything, including caution', 'carrying a wonder for the world that years of hard experience have not quite extinguished'] },
  dragonborn: { flavor: ['raised on clan honor and the expectation that draconic heritage is not a heritage to waste', 'shaped by the dragonborn belief that who you are is the sum of what you do, not what you were given', 'carrying the ancestral fire of {their} bloodline — sometimes literally'] },
  'half-elf': { flavor: ['raised at the intersection of two cultures, inheriting the best and most inconvenient traits of both', 'shaped by the particular loneliness of belonging almost everywhere and fully nowhere', 'carrying elven patience and human restlessness in equal, frequently inconvenient measure'] },
};

const BACKGROUNDS = {
  acolyte: {
    origins:   ['{name} grew up within temple walls, learning scripture before learning much else. The rhythm of prayer shaped {their} days, and the faith of those around {them} was as familiar as breathing.', 'From childhood, {name} served at a shrine — sweeping floors, lighting candles, carrying offerings. It was quiet work, but {they} believed in every part of it.', '{name} was taken in by a religious order as a young child. The gods were not abstract concepts to {them}. They were as present and immediate as hunger.'],
    conflicts: ['Then the temple burned. Or the doctrine cracked. Or a question arose that no scripture could answer without costing something {name} was not willing to pay.', 'Something shook that certainty: a vision that defied the texts, a betrayal from within the faith, or a miracle that went sideways in a way the order refused to discuss.', 'Until the day {name} witnessed something that no prayer explained away, and realized the world outside the temple was larger — and stranger — than anyone inside had admitted.'],
  },
  charlatan: {
    origins:   ['{name} learned early that people believe what they want to believe. A little confidence, the right presentation, and the world becomes a series of doors that open themselves.', 'By twelve, {name} was running minor cons. By fifteen, significant ones. The work was creative, mostly harmless, and paid far better than honest labor.', '{name} grew up in a traveling act — one part entertainment, two parts swindle — and learned to read a crowd before learning to read a map.'],
    conflicts: ['The problem with building a life on performance is that eventually something real happens, and {they} discover they have no idea how to face it without a role to play.', 'One mark turned out to be connected to people who did not appreciate being fooled and had the reach to express that displeasure.', '{name} made a mistake — the kind that follows you across city lines and does not forgive.'],
  },
  criminal: {
    origins:   ['{name} did not choose the work. It was more that circumstances made choosing unnecessary, and {they} turned out to be good at what followed.', 'The guild found {name} young, and the guild took care of its own. That was the arrangement. For years, it was enough.', 'Survival in {name}\'s neighborhood meant certain compromises. {name} made them without drama and got very good at what was required.'],
    conflicts: ['Then a job went wrong, or a contact vanished, or {name} crossed a line {they} had not known was there until {they} were on the other side of it.', 'The work has a way of catching up. {name}\'s caught up on a night that changed the arithmetic of everything.', 'One job, one mistake, one morning when {name} understood that staying meant dying. {they} left before sunrise.'],
  },
  entertainer: {
    origins:   ['{name} grew up performing — first for family, then for coins, then for anyone willing to watch. The craft kept getting sharper.', 'The stage found {name} before {they} found much of anything else. Acting, music, acrobatics — {they} learned all of it and loved most of it.', '{name} traveled with a troupe from childhood, learning early that a story told with commitment can become more true than the truth.'],
    conflicts: ['The road has a habit of showing you things that belong in no performance — things you cannot file away as material.', 'Then the troupe fell apart, the theater burned, or {name} slipped too deep into a role and did not know how to climb back out.', 'Until the night the audience became something dangerous, and the curtain came down hard on everything {name} had built.'],
  },
  'folk-hero': {
    origins:   ['{name} was an ordinary person from an ordinary place, until the day that place needed something it did not have, and {they} happened to be standing there.', '{name} stepped up when others stepped back. It was not heroism exactly — it was more that {they} could not figure out how not to.', 'The village, the mill, the crossroads — {name} knew that life, lived it fully, and was altered by one moment inside it that could not be undone.'],
    conflicts: ['People remember. Songs get written. The awkward part is that the person in the song and the person inside {name}\'s skin are only loosely related.', 'The problem with being called a hero is that everyone expects you to keep being one, whether or not the situation warrants it.', 'After that day, staying still felt like a different kind of failure. So {name} kept moving.'],
  },
  'guild-artisan': {
    origins:   ['{name} apprenticed young, learned the trade through calloused hands and long hours, and earned a guild mark through years of stubborn, careful work.', 'The craft was everything: the precision, the satisfaction of making something real and lasting. {name} was good at it and knew it.', '{name} came from a family of makers and was expected to become one. For a long time, that expectation fit comfortably.'],
    conflicts: ['Then the work became insufficient — not the craft itself, but what {they} could do with it — and something came through the workshop door that no manual covered.', 'The guild could not protect what mattered when it mattered. {name} filed that away and did not forget it.', 'The day came when the tools in {name}\'s hands felt like the wrong tools for the problem directly ahead.'],
  },
  hermit: {
    origins:   ['{name} withdrew from the world deliberately — seeking silence, or answers, or simply distance from something that had gone wrong. The solitude became its own country.', 'Years in isolation gave {name} a different kind of education: the patience of seasons, the honesty of wilderness, the clarity that comes when there is no one left to perform for.', '{name} lived apart by choice, tending a small fire and considerably larger thoughts, until the quiet showed {them} something that required going back outside.'],
    conflicts: ['What {they} found in the silence changed things. Or someone found {them}, which changed things differently.', 'The revelation arrived gradually, then suddenly, in the way that certain truths do when you stop arguing with them.', 'The world comes to collect you eventually. {name} learned this the hard way.'],
  },
  noble: {
    origins:   ['{name} was born into comfort and raised into obligation. The family name opened every door; what waited behind those doors was, depending on the door, either magnificent or appalling.', 'Tutors, titles, banquets, politics — {name}\'s childhood was structured and abundant and, at its center, surprisingly hollow.', 'Growing up in a house of privilege meant growing up in a house of performance. Every meal was a negotiation. Every friendship had a ledger.'],
    conflicts: ['Then the estate fell, or the title meant nothing when it mattered, or {name} simply chose to stop being what had been decided for {them}.', 'Something in the shadow of the family\'s power showed {name} what the comfort was actually built on. {they} could not un-see it.', 'The doors closed, or {name} walked through one that did not lead back.'],
  },
  outlander: {
    origins:   ['{name} was raised at the edge of the map, where settlements thin out and the wilderness has its own opinions about who belongs.', 'The wild was home: its rhythms, its dangers, its brutal honesty. {name} learned its language before the language of cities.', '{name} grew up moving — following herds, seasons, or the decisions of a clan that read the land the way others read books.'],
    conflicts: ['Then the land changed, or was changed by something that did not have the right to change it, and {name} followed the threat inward, toward the world of walls.', 'The wilderness {name} knew was altered, poisoned, or lost. The answer was not inside it.', 'Something emerged from the deep wild that even the wilderness could not contain, and {name} had been tracking it ever since.'],
  },
  sage: {
    origins:   ['{name} grew up surrounded by books and people who believed in them absolutely. The library was a second home; the archive, a third.', 'Questions were the family trade — not answers, questions. {name} learned early that knowing the right question is worth more than a dozen easy answers.', '{name} spent years chasing a single piece of knowledge through crumbling manuscripts and the fading memories of older scholars, always one reference away from the truth.'],
    conflicts: ['Then the research led somewhere no existing book covered, and the only way forward was through a world that does not care about footnotes.', 'The answer {they} found raised ten worse questions. One of them required going outside.', 'Something in the archives should not have been there — or was missing in a way that meant something had deliberately taken it.'],
  },
  sailor: {
    origins:   ['{name} took to the sea young, by choice or circumstance, and the sea decided to keep {them}. Salt, rope, and starless nights — {they} grew to love most of it.', 'The ship was {name}\'s first real home. The crew, {their} first real family. The ocean, an ongoing lesson in who is actually in charge.', '{name} grew up in a port city where every interesting person was either arriving or leaving, and eventually chose to be one of the latter.'],
    conflicts: ['A storm, or a mutiny, or a cargo that turned out to be nothing like what the manifest claimed.', 'The sea gave {name} something and took something else back. The exchange felt fair at the time. It does not, in retrospect.', '{name} stepped off the last ship and did not return. The reason still has a name.'],
  },
  soldier: {
    origins:   ['{name} enlisted young — out of duty, desperation, or the genuine belief that the cause was worth the cost. The army is a thorough instructor regardless of why you arrived.', 'The ranks made {name} what {they} are: disciplined, watchful, and precise about what things actually cost.', '{name} came from a military family. The path was established before {they} could question it. The question became not whether to serve, but how.'],
    conflicts: ['Then the war ended, the cause dissolved, or {name} followed an order {they} should not have — or refused one {they} should have.', 'The campaign was lost. Or won in a way that felt indistinguishable from losing.', 'When it was over, {name} understood that a soldier without a war is a different kind of problem entirely.'],
  },
};

const CLASSES = {
  barbarian: { awakenings: ['The rage arrived before {name} had a name for it — a white heat that rose when needed and refused to be argued with. {name} eventually stopped arguing.', '{name} discovered the fury not through training but through loss. Something broke, and the breaking, improbably, made {them} stronger.', 'There was no teacher. The power was always present, just below the surface, waiting for the specific kind of pressure that finally unlocked it.'], motivation: ['{name} carries the fury like a weapon — mostly aimed at things that deserve it, mostly under control.', 'The rage is not {their} enemy. It has preserved {their} life too many times to frame it that way.'] },
  bard:      { awakenings: ['{name} realized, somewhere between the third song and the fourth, that the music was doing something real — not just moving people emotionally, but actually changing things.', 'The power hid inside the performance for years before {name} understood what it was. A song that calmed a riot. A story that unsettled a locked door.', '{name} learned that words have weight independent of their meaning — that rhythm carries power, that a well-told story can reshape what someone believes is possible.'], motivation: ['The art and the ability are the same thing. {name} has never found a clean line between them and suspects that is the point.', 'Words were always {their} sharpest instrument. That they happen to be magic strikes {name} as entirely correct.'] },
  cleric:    { awakenings: ['The god answered. Not metaphorically — {name} asked, something answered, and the world changed shape in a way that left no room for interpretation.', '{name} was desperate enough to pray sincerely for the first time, and whatever was listening decided sincerity merited a response.', '{name} had lived with faith. Then came proof. The moment it arrived reorganized everything {they} understood about the path forward.'], motivation: ['The divine commission is clear even when the road is not. {name} moves through the world as both instrument and witness.', 'Serving a god sounds simple. It is, {name} has found, endlessly complicated — and {they} are learning that with every mile.'] },
  druid:     { awakenings: ['The first time {name} felt the natural world genuinely respond — not weather behaving like weather, but a deliberate response — {they} understood what {they} had always been.', 'A dying forest. A poisoned river. Something in {name} reached toward it, and to {their} considerable surprise, the wild reached back.', '{name} did not choose the old ways so much as stumble into them. An ancient circle found {them}, or {they} found something old and patient in the deep wood, and there was no returning to what {they} had been.'], motivation: ['The natural world speaks. {name} is one of the few who can hear it clearly enough to act on what it says.', 'The balance is always threatened. {name} is always in motion. The connection makes both of those things true at once.'] },
  fighter:   { awakenings: ['{name} trained because {they} had to. Then because {they} wanted to. Then because training was the one thing that made complete sense when nothing else did.', 'The first real fight taught {name} that survival is a learnable skill. Every fight since has been a refinement.', '{name} was not born talented. {they} built it — repetition by repetition, bruise by bruise — until the body knew what to do before the mind had finished deciding.'], motivation: ['Combat is a language {name} is fluent in. Everything else, in comparison, requires translation.', '{name} fights because {they} are very good at it, and because the things worth protecting do not protect themselves.'] },
  monk:      { awakenings: ['The monastery offered discipline when {name} had none — a structured world to replace the chaos {they} came from. {name} took the practice seriously. It gave something back.', '{name} found the way through years of stillness, and then through one very loud moment that required perfect stillness to survive.', 'The ki was not granted. It was uncovered — present all along, waiting for the particular quality of silence that reveals it.'], motivation: ['Every movement is deliberate. The path is the practice, and the practice does not end.', '{name} moves through the world as the monastery taught: with presence, economy, and — when occasion demands — decisive force.'] },
  paladin:   { awakenings: ['The oath was not a casual thing. {name} stood before something — a god, a dying ideal, a moment of absolute moral clarity — and made a promise that rewrote the terms of {their} existence.', '{name} had the power first and the understanding later. The oath gave the power a direction.', 'The call arrived in a moment of crisis — a choice between easy and right, with no middle option. {name} chose right. The choice left a permanent mark.'], motivation: ['The oath is not a limitation. It is the reason for everything. {name} moves through the world as both weapon and example.', '{name} does not fight for recognition. {they} fight because the oath demands it and because, beneath the demand, {they} believe it too.'] },
  ranger:    { awakenings: ['{name} learned to track before learning most other things. The wilderness is not a kind teacher, but it is thorough.', 'Years in the wild refined {name} into something the wilderness respects — patient, quiet, capable of a stillness that animals do not bother to avoid.', 'The ranger\'s path grew from a long accumulation of survival, observation, and hard-won understanding of how things hunt and how things are hunted.'], motivation: ['{name} keeps to the edge of the settled world, watching the border between the known and the dangerous.', 'The wilderness is not hostile to {name}. It is honest — and honesty, {they} have found, is worth considerably more than comfort.'] },
  rogue:     { awakenings: ['{name} learned early that the world runs on two sets of rules — the ones written down and the ones that actually apply. {they} became fluent in the second set.', 'The skills accumulated without ceremony: lockpicking from necessity, sleight of hand from hunger, the ability to disappear from pure survival instinct.', '{name} had a talent for noticing what others missed and a gift for using that information carefully. Both sharpened with practice.'], motivation: ['{name} works in the space between what is seen and what is real. It is a useful place to operate from.', 'Trust is a resource. {name} manages it the way others manage coin — carefully, and always with one eye on the exit.'] },
  sorcerer:  { awakenings: ['The magic did not arrive — it surfaced. {name} had been carrying it without knowing, until something happened that made concealment impossible.', '{name} cast {their} first spell by accident, and the accident was significant enough that pretending otherwise was not an option available to anyone present.', 'The power is embedded in blood, or fate, or something older than either. {name} did not choose it. The only choice was what to do with it.'], motivation: ['The magic is not a tool {name} carries. It is part of what {they} are. Learning to use it is the same project as learning to be {themselves}.', '{name} moves through the world trailing the subtle warmth of power, trying to use it wisely and succeeding often enough to matter.'] },
  warlock:   { awakenings: ['{name} made a deal. The specific terms are private. What {they} received in exchange is not.', 'The patron appeared when {name} was desperate enough to say yes without reading the fine print carefully. The power is genuine. The cost is ongoing.', '{name} sought the pact deliberately, eyes open, having calculated that what was being offered was worth what was being asked. {they} still believe that. Mostly.'], motivation: ['The patron\'s interests are not always legible. {name}\'s obligation is to keep moving and trust that their goals, for now, point in the same direction.', 'Power carries obligation. {name} honors {their} end of the arrangement and expects the same in return. So far, the balance holds.'] },
  wizard:    { awakenings: ['{name} found the first spellbook — or it found {them}. Either way, the future changed shape entirely.', 'The study was slow, exhausting, and occasionally dangerous. {name} did not care. The knowledge existed and reaching it felt like the only thing worth doing.', '{name} understood that magic is not intuition — it is precision. It rewarded exactly the kind of mind {they} had always been told was a problem. {they} gave it everything.'], motivation: ['Every question answered opens three more. {name} finds this deeply satisfying.', 'The spellbook is always close. The next page is always more interesting than the last.'] },
};

const FEATS = {
  actor:                ['{name} has worn enough faces that {they} sometimes check, quietly, to confirm which one is actually on.', 'Becoming someone else was a survival skill before it was a performance skill. {name} has never fully separated the two.'],
  alert:                ['{name} never sits with {their} back to the door. It is not paranoia — it is arithmetic.', '{they} sleep lightly and wake fast. The habit was learned expensively.'],
  athlete:              ['The body is a tool {name} has sharpened deliberately, knowing that the gap between safe and dead is sometimes measured in seconds.', '{they} train when {they} do not need to, because {they} remember exactly what happens when the training stops.'],
  charger:              ['{name}\'s approach to obstacles is direct: momentum, commitment, impact. It works more often than it probably should.'],
  'crossbow-expert':    ['{they} learned that distance is a form of mercy — for both parties. It is cleaner to solve a problem from across the room than inside it.'],
  'dual-wielder':       ['Two blades felt correct in a way one never had. {name} stopped questioning the preference and started refining it.'],
  durable:              ['{name} has survived things that were not designed to be survivable. {they} have stopped wondering why and started accepting the pattern.'],
  grappler:             ['When the blade is the wrong answer, {name}\'s hands are the right one. More than a few situations have ended with nothing but reach and willingness to use it.'],
  'great-weapon-master':['The large weapons matched {name}\'s philosophy: if something is worth stopping, it is worth stopping completely.'],
  healer:               ['Keeping people alive requires as much attention as ending threats. {name} paid that attention and does not intend to stop.'],
  'heavy-armor-master': ['{they} took the hits so others did not have to. Eventually, the hits began to matter considerably less.'],
  'inspiring-leader':   ['{name} discovered that the right words at the right moment accomplish things no weapon can. {they} practice both, for different reasons.'],
  'keen-mind':          ['{name} forgets almost nothing — a gift that carries, like most gifts, a corresponding weight.'],
  lucky:                ['The universe appears to have opinions about {name}\'s continued existence, and so far those opinions have been favorable.', '{they} have survived situations where survival was not statistically likely. {name} has come to accept this as information about the shape of things.'],
  'mage-slayer':        ['{name} received a thorough education in what magic does when it is aimed at you. The lesson has not faded.'],
  'magic-initiate':     ['A fragment of borrowed power sits at the edge of everything {name} can do — small, quiet, and occasionally decisive.'],
  mobile:               ['{name} learned that not occupying the space where danger lands is half the work of surviving it.', 'Speed is a philosophy {name} has committed to: if you cannot stop it, redirect it; if you cannot redirect it, simply be somewhere else.'],
  'mounted-combatant':  ['{name} and {their} mount developed an understanding that required years and significant mutual trust to build.'],
  observant:            ['{name} notices things: the wrong cup, the shifted rug, the smile that arrives a half-second too late. It is an attention that has been trained too long to switch off.'],
  'polearm-master':     ['{they} believe in reach — keeping what matters at the end of a long weapon and everything problematic at a comfortable distance.'],
  resilient:            ['{name} bends where others break. Whether that is strength or stubbornness is a distinction {they} have decided does not matter.'],
  'ritual-caster':      ['{name} learned that some magic rewards patience over force — careful, slow work with an elegance that rapid casting cannot replicate.'],
  sentinel:             ['{they} do not retreat. {name} decided, once, that something was worth standing in front of — and the decision seems to have become permanent.'],
  sharpshooter:         ['{name} learned that the most elegant solution to most problems is a good elevation, a clear line, and a steady hand.'],
  'shield-master':      ['Defense is not passive. {name} learned that a shield is a weapon, and that lesson changed the entire geometry of how {they} fight.'],
  skilled:              ['{name} collected skills the way others accumulate regrets — deliberately and with a clear sense of future application.'],
  'spell-sniper':       ['{they} worked out that most obstacles between a spell and its destination are navigable, if you think carefully about the angles.'],
  'tavern-brawler':     ['{name} has started — and finished — more fights in taverns than {they} can accurately recall. The number is not a source of pride. It is simply a fact.'],
  telekinetic:          ['Moving things without touching them began as an accident. Now it is closer to instinct.'],
  telepathic:           ['{name} hears more than {they} mention. Most people\'s surface thoughts are louder than they realize, and {they} have learned to neither react nor acknowledge.'],
  tough:                ['{name} has been injured in ways that were meant to be final. {they} are still determining what that means.', 'The body keeps a record. {name}\'s record is extensive. {they} have stopped auditing it.'],
  'war-caster':         ['{name} learned that maintaining concentration is a discipline, not a given — a broken spell at the wrong moment is its own kind of wound.'],
  'weapon-master':      ['{name} speaks multiple dialects of combat. The education was long and occasionally painful. Thoroughness has its own rewards.'],
};

const TONES = {
  heroic:     { closings: ['The road ahead is long. {name} walks it with clear eyes and a purpose that has not wavered.', '{name} does not know exactly what comes next. {they} know {they} can face it.', 'Whatever lies ahead, {name} carries both the weight of the past and the certainty that it was preparation.'] },
  dark:       { closings: ['The past follows {name}. {they} have stopped trying to outrun it and started pointing it at things that deserve it.', '{name} has seen what people are truly capable of. {they} have made their peace with it — mostly.', 'There are no clean endings in {name}\'s story so far. That has not stopped {them} from moving forward.'] },
  mysterious: { closings: ['What {name} is actually searching for, exactly, is something {they} keep to {themselves}.', 'There are things {name} knows that {they} will not share, and reasons for the journey {they} have not named aloud — not even to {themselves}.', 'Some doors, once you know they exist, cannot be left unopened. {name} found one of those doors.'] },
  comedic:    { closings: ['{name} would like it noted that most of this was not {their} fault. The parts that were are understandable in context.', 'Somehow this became {their} life. {name} is making the best of it, which is, all things considered, going fine.', 'It is possible a wiser person would have made different choices at several key junctures. {name} is at peace with this.'] },
};

// ===== PERSONALITY FIELDS =====

const PERSONALITY_TRAITS = {
  acolyte:       ['I see omens in every event and action. The gods try to speak to us — we just need to listen.', 'I am slow to make friends but fiercely loyal to those I trust. I expect the same in return.', 'I have a tendency to quote sacred texts in situations where they are only loosely applicable.'],
  charlatan:     ['I have a different name and a different story for every new town.', 'I can find the humor in almost any situation, especially ones that call for gravity.', 'I size up every person I meet and calculate, before they finish speaking, what they want to hear.'],
  criminal:      ['I always have a plan for when things go wrong.', 'I am slow to trust people I have not worked with before — and faster to trust them once I have.', 'I have a dark sense of humor that not everyone appreciates, and this does not trouble me.'],
  entertainer:   ['I love being the center of attention, and I work to maintain that position.', 'I know a story for every occasion and a crowd for every story.', 'I will do anything for applause — which has gotten me into trouble more than once.'],
  'folk-hero':   ['I judge people by their actions, not their station.', 'If someone is in trouble, I help. That is not a policy — it is just how I am made.', 'I am more comfortable with animals and common people than with anyone who expects a formal greeting.'],
  'guild-artisan':['I believe that anything worth doing is worth doing well. Shortcuts are for other people.', 'I am not above showing off the quality of my work — in all things.', 'I would rather work with my hands than talk about working with my hands.'],
  hermit:        ['I am perfectly comfortable with silence. Most people, I have found, are not.', 'I have spent so long alone that I sometimes say things aloud that probably should have stayed thoughts.', 'The simple things — a fire, a meal, good company — matter more to me than most people realize.'],
  noble:         ['My eloquence and bearing open doors that other people have to knock on.', 'I have high standards. I know this can be difficult for others. I do not intend to lower them.', 'I am accustomed to getting what I want, and I have learned many ways to arrange for that.'],
  outlander:     ['I watch people with the same attention I give the wilderness — looking for patterns, assessing risk.', 'I have little patience for social rituals that serve no practical function.', 'I feel more at ease under open sky than under any roof.'],
  sage:          ['I will always find a way to reframe any problem as a research question.', 'I am willing to listen to almost any theory, no matter how unlikely. Evidence is always interesting.', 'I tend to correct people even when they are close enough to right. I am working on this.'],
  sailor:        ['My language is more colorful than polite company expects. I am not entirely sorry.', 'I know weather by feel and strangers by bearing. Both instincts are usually correct.', 'I get restless when I am in one place too long. Walls close in faster than horizons.'],
  soldier:       ['I am always polite and respectful — unless I am not, at which point the situation has become serious.', 'I face problems directly and expect others to do the same.', 'I have a healthy respect for careful planning and a profound distrust of improvisation.'],
};

const IDEALS = {
  'lawful-good':     ['Honor. I will not compromise my principles, even at great personal cost.', 'Justice. Every wrong deserves accountability. Every person deserves protection.'],
  'neutral-good':    ['Greater Good. What matters is helping people — the method is secondary.', 'Compassion. I try to see the best in others, even when they make it difficult.'],
  'chaotic-good':    ['Freedom. Everyone deserves the right to determine their own path. I will fight for that.', 'Change. Old institutions deserve scrutiny, and some deserve to be dismantled entirely.'],
  'lawful-neutral':  ['Order. Civilization depends on structure. I will uphold it even when the rules are inconvenient.', 'Tradition. The old ways exist because they worked. I am not quick to abandon them.'],
  'true-neutral':    ['Balance. Every force requires a counterweight. I try to be one.', 'Pragmatism. I do what works. Ideology is a luxury the practical cannot always afford.'],
  'chaotic-neutral': ['Freedom. I live as I choose and extend that right to everyone else.', 'Self-reliance. No system is reliable enough to depend on entirely. I depend on myself.'],
  'lawful-evil':     ['Power. The strong make the rules. I intend to be among the strong.', 'Domination. Order is just another word for control — and control is everything.'],
  'neutral-evil':    ['Self-interest. I look out for myself first, and everyone else when convenient.', 'Greed. There is no such thing as enough — only more.'],
  'chaotic-evil':    ['Destruction. Some things deserve to burn. I am here to decide which ones.', 'Power. Rules are for people who need them. I prefer to make my own.'],
  'any':             ['Ambition. I will be something the world cannot ignore.', 'Survival. Whatever it takes, for as long as it takes.'],
};

const BONDS = {
  acolyte:       ['I will restore the temple that was destroyed, even if it takes everything I have.', 'There is a member of the faith who guided me when I was lost. I would give my life for them.', 'I carry a sacred relic and believe my purpose is to return it to where it belongs.'],
  charlatan:     ['I have a target — someone who wronged me — and I am building toward settling the account.', 'Somewhere there is a person I deceived who deserved better. I have not forgotten.', 'I would burn everything down to protect the one person I have never lied to.'],
  criminal:      ['I am loyal to the people who were loyal to me when everyone else gave up.', 'I owe a debt that cannot be paid in coin. I am paying it in service.', 'There is someone from my past I am trying to protect from the things I have become.'],
  entertainer:   ['I want to become famous enough that the people who dismissed me cannot avoid hearing my name.', 'A mentor gave me my first real chance. Everything I do is dedicated to that person.', 'My craft is everything to me. I would rather lose all else than lose the ability to create.'],
  'folk-hero':   ['The people who depend on me are my entire reason for everything I do.', 'I carry a memento from the person whose life I saved. They never knew it was me.', 'The community I came from is always in the back of my mind. I am still fighting for them.'],
  'guild-artisan':['My masterwork is the one thing I have not finished. Everything I do is in service of completing it.', 'The guild took care of me when I had nothing. I will not let them down.', 'My work is my legacy. I want to make something that outlasts me by centuries.'],
  hermit:        ['The revelation I found in solitude is too important to keep to myself, however much I might prefer to.', 'There is a person from before my retreat who I have not stopped thinking about.', 'The wilderness I came from is being destroyed. I left to find a way to stop it.'],
  noble:         ['My family name carries obligations that I intend to honor, even if the family no longer does.', 'There is someone beneath my station whose loyalty has meant more to me than any title.', 'I am working to rebuild what my family lost — or expose what they did to lose it.'],
  outlander:     ['My clan is gone. Finding out what happened to them is the reason I am here.', 'The land I came from is sacred to me. I will protect it from what is coming for it.', 'There is one person from the old life who I would travel the entire world to find.'],
  sage:          ['There is a piece of knowledge I am searching for that has been hidden or suppressed.', 'My mentor taught me everything I know. Honoring their legacy drives all of my choices.', 'I discovered something that powerful people do not want known. I cannot un-discover it.'],
  sailor:        ['I am looking for the ship that was lost — or the person on it.', 'The sea took something from me. I have not yet decided whether I have forgiven it.', 'My crew would die for me. I intend to make sure they do not have to.'],
  soldier:       ['My unit was destroyed. Finding out who gave the order is why I am still moving.', 'I protect the innocent because no one protected them when they needed it.', 'Someone I served with is in trouble. I do not leave people behind.'],
};

const FLAWS = {
  acolyte:       ['I judge others harshly against a standard they did not agree to.', 'My faith sometimes makes me inflexible when flexibility would serve me better.', 'I am suspicious of anyone who does not share my beliefs, even when suspicion is unwarranted.'],
  charlatan:     ['I cannot help sizing up strangers for the angle, even when there is none.', 'I am not above a convenient lie when the truth would cost me something.', 'My pride will not allow me to admit when I am wrong, even privately.'],
  criminal:      ['I turn to crime as my first solution when another would serve just as well.', 'I struggle to trust people whose loyalty has not been tested under real pressure.', 'I have a weakness that costs me — coin, reputation, or worse — on a regular basis.'],
  entertainer:   ['I cannot resist the spotlight, even when staying quiet would be significantly safer.', 'I am jealous of anyone who receives more attention than I do, and I am not subtle about it.', 'I make promises I intend to keep but rarely have the patience to follow through on.'],
  'folk-hero':   ['I have trouble refusing someone who asks for help, even when I am the wrong person for the job.', 'I am blunt to the point of causing offense. Diplomacy feels dishonest to me.', 'I hold a grudge long after I should have let it go.'],
  'guild-artisan':['My standards are high enough that I struggle to accept help from anyone not meeting them.', 'I think most problems could be solved if people applied more rigor. I say this often.', 'I have strong opinions about how things should be done and significant difficulty keeping them to myself.'],
  hermit:        ['I have been alone long enough that large groups make me genuinely uncomfortable.', 'I expect insights to come through reflection, not conversation, which frustrates other people.', 'I am dismissive of things I have not personally verified. Hearsay does not interest me.'],
  noble:         ['I have a difficult time believing that people of lower status have anything useful to teach me.', 'I do not part with money easily, even when generosity would serve me well.', 'I am accustomed to getting what I want, and I handle not getting it poorly.'],
  outlander:     ['I have no patience for the social rituals of cities. They seem like a waste of everyone\'s time.', 'I distrust anything I cannot verify with my own senses.', 'I sometimes forget other people were not raised by the same rules I was, and I hold it against them.'],
  sage:          ['I am convinced my interpretation of events is correct even when evidence suggests otherwise.', 'I tend toward lengthy explanations when a brief one would serve.', 'I do not deal well with being wrong, and I have been known to argue past the point of reason.'],
  sailor:        ['I make poor financial decisions with reliable regularity.', 'I have a tendency toward dishonesty when honesty seems inconvenient.', 'I am reckless when I should be cautious, because risk has always worked out for me — so far.'],
  soldier:       ['I follow orders even when questioning them might produce a better outcome.', 'I have difficulty relating to people who have not been tested under real pressure.', 'I dwell on my failures longer than I should, and it affects my judgment.'],
};

// ===== ART PROMPT DATA =====

const RACE_VISUALS = {
  human:      ['a human adventurer with determined eyes and a well-traveled look', 'a weathered human whose expression carries more history than their age suggests'],
  elf:        ['a lithe elf with sharply pointed ears and ancient, luminous eyes', 'a tall elf with silver-white hair, an otherworldly grace, and a gaze that has seen centuries'],
  dwarf:      ['a stocky dwarf with a braided beard and the bearing of someone who has survived many things', 'a broad-shouldered dwarf with eyes like polished stone and hands that tell a story of long labor'],
  halfling:   ['a small, nimble halfling with warm eyes and a deceptively easy smile', 'a diminutive halfling carrying themselves with the confidence of someone twice their size'],
  tiefling:   ['a tiefling with elegantly curved horns, skin in deep crimson tones, and eyes like smoldering embers', 'a striking tiefling with a barbed tail and the composed expression of someone used to being underestimated'],
  'half-orc': ['a half-orc with grey-green skin, a powerful frame, and a face that has clearly seen conflict', 'a broad-shouldered half-orc with prominent tusks and watchful, intelligent eyes'],
  gnome:      ['a small gnome with wild hair, bright inquisitive eyes, and the restless energy of someone who just had a very good idea', 'a compact gnome with an expressive face and the hands of someone who makes things'],
  dragonborn: ['a tall dragonborn covered in iridescent scales with a noble bearing and a subtle inner fire', 'a dragonborn with draconic features and the presence of someone accustomed to commanding attention'],
  'half-elf': ['a half-elf with subtly pointed ears and an expressive face, at ease in most rooms', 'a graceful half-elf carrying both human warmth and elven distance in their expression'],
};

const CLASS_VISUALS = {
  barbarian: ['wearing rough furs and scarred leather armor, carrying a massive weapon with practiced ease, radiating barely contained intensity', 'in minimal armor marked with battle scars and runic tattoos, a weapon of brutal size across their back'],
  bard:      ['in colorful, well-traveled clothing, carrying an instrument, with a performer\'s ease and something sharper behind the charm', 'in a mix of practical and flamboyant attire, easy smile in place, a lute or pipe at hand'],
  cleric:    ['in robes bearing divine symbols, a holy focus raised, with the calm authority of someone who speaks for something greater', 'in practical clerical vestments, weapon or shield close at hand, eyes bright with conviction'],
  druid:     ['in layered earthy robes woven with leaves and natural materials, holding a gnarled wooden staff, with wild hair and a forest\'s stillness', 'in natural garments that seem to belong to the wilderness, bare-footed, with eyes that watch something beyond the frame'],
  fighter:   ['in battered but well-maintained armor, standing with the calm readiness of someone who has been in enough fights to stop being afraid of them', 'in practical combat gear showing real use, weapons close, posture easy but alert'],
  monk:      ['in simple monastic robes, hands at rest in a posture of complete readiness, surrounded by an aura of controlled stillness', 'in understated clothing, with a precise economy of movement and focused, distant eyes'],
  paladin:   ['in gleaming armor bearing a holy symbol, one hand on a weapon, the other raised in benediction or ward', 'in heavy armor decorated with divine motifs, carrying a shield and weapon with righteous purpose'],
  ranger:    ['in weathered earth-tone traveling clothes, a bow across their back, alert eyes scanning the middle distance', 'in practical gear that blends with the wild, a hand near a blade, expression watchful and calm'],
  rogue:     ['in dark practical clothing with concealed blades, the posture of someone never quite as off-guard as they appear', 'in a leather hood and close-fitting armor, knives at the belt, a carefully neutral expression'],
  sorcerer:  ['in dramatic robes that seem to move in a wind only they can feel, eyes occasionally flickering with arcane light', 'in flowing garments with magical energy visibly crackling at their fingertips or behind their eyes'],
  warlock:   ['in dark clothing marked with eldritch symbols, an arcane focus in hand, and an expression that suggests knowledge not come by honestly', 'in deep robes, one eye subtly wrong, contained energy radiating from a pact fulfilled'],
  wizard:    ['in scholarly robes covered in arcane annotations, a well-worn spellbook close at hand, peering at the world with the intensity of someone thinking several steps ahead', 'in layered academic robes with a glowing arcane focus, surrounded by floating motes of spell-light'],
};

const TONE_MOODS = {
  heroic:     'dramatic fantasy illustration, warm golden light, heroic and triumphant composition, detailed and epic',
  dark:       'dark fantasy art style, deep shadows, desaturated color palette, gritty and atmospheric, painterly',
  mysterious: 'painterly fantasy illustration, atmospheric mist or shadow, candlelight, air of ancient secrets, moody',
  comedic:    'warm expressive fantasy illustration, vibrant colors, dynamic pose, personality-forward, whimsical',
};

// ===== PARTY TEMPLATES =====

const PARTY = {
  intros: [
    'Some groups are assembled by purpose. This one came together by accident — and stayed together by choice.',
    'Fate rarely announces itself before it arrives. It certainly did not here.',
    'The road has a way of collecting people.',
    'Not every fellowship is forged in heroism. Some begin in a tavern. Some begin in a cell. This one began in something more complicated than either.',
  ],
  contexts: [
    'a job that none of them expected to survive — and all of them did, barely',
    'a tavern brawl that only two of them started',
    'a dungeon entrance that each of them had separately decided was a good idea',
    'a shared enemy who made the mistake of creating multiple problems at once',
    'a notice board posting that each of them answered independently and for entirely different reasons',
    'an ambush that none of them planned and all of them had to finish',
    'a night in the same jail cell — the charges, on all sides, were complicated',
  ],
  bonds: [
    'What kept them together was not the mission. It was the fact that each of them had, at some point, saved someone else\'s life — and been saved in return.',
    'They would not all describe themselves as friends. But they had stopped someone from dying together, and that creates a bond that titles cannot.',
    'The shared history is still short. But it is already marked by enough to know that the people standing beside you matter.',
    'They have argued about nearly everything. They have agreed on one thing: whatever comes next, they face it together.',
    'None of them came looking for a party. None of them would trade this one now.',
  ],
};

// ===== GENERATOR UTILITIES =====

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

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
    .replace(/([.!?]\s+)([a-z])/g, (_, p, ch) => p + ch.toUpperCase());
}

// ===== BACKSTORY GENERATOR =====

function generateBackstory(inputs) {
  const { name, race, characterClass, background, feats, tone, abilityNotes, campaignSetting } = inputs;
  const displayName = name.trim() || pick(['the wanderer', 'the adventurer', 'the stranger']);
  const vars = { name: displayName, they: 'they', their: 'their', them: 'them' };

  const raceData  = RACES[race];
  const bgData    = BACKGROUNDS[background];
  const classData = CLASSES[characterClass];
  const toneData  = TONES[tone];

  // Para 1: origin
  const originLine   = fill(pick(bgData.origins), vars);
  const raceLine     = fill(pick(raceData.flavor), vars);
  const conflictLine = fill(pick(bgData.conflicts), vars);

  let settingOpener = '';
  if (campaignSetting && campaignSetting.trim()) {
    settingOpener = `In ${campaignSetting.trim()}, `;
    const first = originLine.charAt(0).toLowerCase() + originLine.slice(1);
    var para1 = capitalizeSentences(`${settingOpener}${first} ${displayName.split(' ')[0]} was ${raceLine}. ${conflictLine}`);
  } else {
    var para1 = capitalizeSentences(`${originLine} ${displayName.split(' ')[0]} was ${raceLine}. ${conflictLine}`);
  }

  // Para 2: class awakening + ability notes
  const awakeningLine  = fill(pick(classData.awakenings), vars);
  const motivationLine = fill(pick(classData.motivation), vars);
  let abilityLine = '';
  if (abilityNotes && abilityNotes.trim()) {
    abilityLine = ` Among those who knew ${displayName.split(' ')[0]}, the first thing noted was always this: ${abilityNotes.trim()}.`;
  }
  const para2 = capitalizeSentences(`${awakeningLine}${abilityLine} ${motivationLine}`);

  // Para 3: feats + closing
  const selectedFeats = feats.filter(f => FEATS[f]);
  const shuffledFeats = [...selectedFeats].sort(() => Math.random() - 0.5).slice(0, 2);
  const featLines = shuffledFeats.map(f => fill(pick(FEATS[f]), vars));
  const closingLine = fill(pick(toneData.closings), vars);
  const para3 = capitalizeSentences([...featLines, closingLine].join(' '));

  return [para1, para2, para3].join('\n\n');
}

// ===== PERSONALITY GENERATOR =====

function generatePersonalityFields(inputs) {
  const bg = inputs.background;
  const alignKey = inputs.alignment || 'any';
  const idealsPool = IDEALS[alignKey] || IDEALS['any'];
  return {
    trait: pick(PERSONALITY_TRAITS[bg] || PERSONALITY_TRAITS.soldier),
    ideal: pick(idealsPool),
    bond:  pick(BONDS[bg] || BONDS.soldier),
    flaw:  pick(FLAWS[bg] || FLAWS.soldier),
  };
}

// ===== ART PROMPT GENERATOR =====

function generateArtPrompt(inputs, charName) {
  const { race, characterClass, tone, campaignSetting } = inputs;
  const displayName = charName.trim() || 'the character';
  const raceDesc  = pick(RACE_VISUALS[race] || RACE_VISUALS.human);
  const classDesc = pick(CLASS_VISUALS[characterClass] || CLASS_VISUALS.fighter);
  const moodDesc  = TONE_MOODS[tone] || TONE_MOODS.heroic;
  const setting   = campaignSetting?.trim() ? ` Set in ${campaignSetting.trim()}.` : '';

  return `${raceDesc.charAt(0).toUpperCase() + raceDesc.slice(1)}, ${classDesc}.${setting} Fantasy RPG character portrait, ${moodDesc}, intricate details, digital art.`;
}

// ===== PARTY STORY GENERATOR =====

function generatePartyStory(characters) {
  const intro   = pick(PARTY.intros);
  const context = pick(PARTY.contexts);
  const bond    = pick(PARTY.bonds);

  const names = characters.map(c => {
    const n = (c.name || 'an adventurer').trim();
    const cls = CLASS_LIST.find(x => x.key === c.characterClass)?.label || 'adventurer';
    return `${n} the ${cls}`;
  });

  let nameStr = '';
  if (names.length === 2) nameStr = `${names[0]} and ${names[1]}`;
  else nameStr = names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];

  const para1 = `${intro}\n\n${nameStr} found themselves in the same place at the same time because of ${context}. The specifics are, depending on who is telling the story, somewhat contested.`;
  const para2 = bond;

  return [para1, para2].join('\n\n');
}

// ===== STATE =====

let state = {
  race:           null,
  characterClass: null,
  alignment:      null,
  tone:           'heroic',
  feats:          new Set(),
  lastInputs:     null,
  partySelected:  new Set(),
};

// ===== UI BUILDERS =====

function buildRaceGrid() {
  const grid = document.getElementById('race-grid');
  RACE_LIST.forEach(r => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'option-card';
    card.dataset.key = r.key;
    card.innerHTML = `<span class="option-icon">${r.icon}</span>${r.label}`;
    card.addEventListener('click', () => {
      state.race = r.key;
      grid.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
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
    card.innerHTML = `<span class="option-icon">${c.icon}</span>${c.label}`;
    card.addEventListener('click', () => {
      state.characterClass = c.key;
      grid.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
      card.classList.add('selected');
    });
    grid.appendChild(card);
  });
}

function buildAlignmentGrid() {
  const grid = document.getElementById('alignment-grid');
  ALIGNMENT_LIST.forEach(a => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'align-btn';
    btn.dataset.key = a.key;
    btn.textContent = a.label;
    btn.addEventListener('click', () => {
      if (state.alignment === a.key) {
        state.alignment = null;
        btn.classList.remove('selected');
      } else {
        state.alignment = a.key;
        grid.querySelectorAll('.align-btn').forEach(el => el.classList.remove('selected'));
        btn.classList.add('selected');
      }
    });
    grid.appendChild(btn);
  });
}

function buildBackgroundSelect() {
  const select = document.getElementById('background-select');
  Object.keys(BACKGROUNDS).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    select.appendChild(opt);
  });
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
      if (state.feats.has(f.key)) { state.feats.delete(f.key); btn.classList.remove('selected'); }
      else { state.feats.add(f.key); btn.classList.add('selected'); }
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
    btn.addEventListener('click', () => {
      state.tone = t.key;
      row.querySelectorAll('.tone-btn').forEach(el => el.classList.remove('selected'));
      btn.classList.add('selected');
    });
    row.appendChild(btn);
  });
}

// ===== RANDOM NAME =====

document.getElementById('random-name-btn').addEventListener('click', () => {
  const pool = NAMES[state.race] || NAMES.human;
  document.getElementById('char-name').value = pick(pool);
});

// ===== TABS =====

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document.getElementById('panel-' + tab.dataset.panel).classList.remove('hidden');
    if (tab.dataset.panel === 'saved') renderSavedCharacters();
    if (tab.dataset.panel === 'party') renderPartyMode();
  });
});

// ===== FORM SUBMIT =====

document.getElementById('backstory-form').addEventListener('submit', e => { e.preventDefault(); runGenerate(); });
document.getElementById('regenerate-btn').addEventListener('click', () => { if (state.lastInputs) runGenerate(); });

function gatherInputs() {
  return {
    name:           document.getElementById('char-name').value,
    race:           state.race,
    characterClass: state.characterClass,
    background:     document.getElementById('background-select').value,
    alignment:      state.alignment,
    abilityNotes:   document.getElementById('ability-notes').value,
    campaignSetting:document.getElementById('campaign-setting').value,
    feats:          [...state.feats],
    tone:           state.tone,
  };
}

function runGenerate() {
  const errorEl = document.getElementById('form-error');
  errorEl.classList.add('hidden');
  const inputs = gatherInputs();
  const missing = [];
  if (!inputs.race)           missing.push('a Race');
  if (!inputs.characterClass) missing.push('a Class');
  if (!inputs.background)     missing.push('a Background');
  if (missing.length) { errorEl.textContent = `Please select ${missing.join(', ')}.`; errorEl.classList.remove('hidden'); return; }
  state.lastInputs = inputs;
  const backstory    = generateBackstory(inputs);
  const personality  = generatePersonalityFields(inputs);
  const artPrompt    = generateArtPrompt(inputs, inputs.name);
  renderResult(inputs, backstory, personality, artPrompt);
}

// ===== RENDER RESULT =====

function renderResult(inputs, backstory, personality, artPrompt) {
  const charName   = inputs.name.trim() || 'The Adventurer';
  const raceLabel  = RACE_LIST.find(r => r.key === inputs.race)?.label || '';
  const classLabel = CLASS_LIST.find(c => c.key === inputs.characterClass)?.label || '';
  const bgLabel    = inputs.background.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const alignLabel = inputs.alignment ? ALIGNMENT_LIST.find(a => a.key === inputs.alignment)?.label : '';
  const metaParts  = [raceLabel, classLabel, bgLabel, alignLabel].filter(Boolean);

  document.getElementById('result-name').textContent = charName;
  document.getElementById('result-meta').textContent = metaParts.join(' • ');
  document.getElementById('result-text').innerHTML = backstory.split('\n\n').map(p => `<p>${p}</p>`).join('');
  document.getElementById('result-trait').textContent = personality.trait;
  document.getElementById('result-ideal').textContent = personality.ideal;
  document.getElementById('result-bond').textContent  = personality.bond;
  document.getElementById('result-flaw').textContent  = personality.flaw;
  document.getElementById('result-art-prompt').textContent = artPrompt;

  const resultSection = document.getElementById('result-section');
  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Wire save button with fresh data
  const saveBtn = document.getElementById('save-btn');
  saveBtn.onclick = () => saveCharacter(inputs, { backstory, ...personality, artPrompt });
}

// ===== COPY =====

document.getElementById('copy-btn').addEventListener('click', () => {
  const name = document.getElementById('result-name').textContent;
  const meta = document.getElementById('result-meta').textContent;
  const text = document.getElementById('result-text').innerText;
  navigator.clipboard.writeText(`${name}\n${meta}\n\n${text}`).then(() => flashBtn('copy-btn', '✓ Copied'));
});

document.getElementById('copy-art-btn').addEventListener('click', () => {
  const text = document.getElementById('result-art-prompt').textContent;
  navigator.clipboard.writeText(text).then(() => flashBtn('copy-art-btn', '✓ Copied'));
});

function flashBtn(id, msg) {
  const btn = document.getElementById(id);
  const orig = btn.textContent;
  btn.textContent = msg;
  setTimeout(() => { btn.textContent = orig; }, 2000);
}

// ===== LOCALSTORAGE =====

const LS_KEY = 'dnd-characters';

function getSavedCharacters() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
}

function saveCharacter(inputs, outputs) {
  const chars = getSavedCharacters();
  const char = {
    id:        Date.now(),
    name:      inputs.name.trim() || 'The Adventurer',
    race:      inputs.race,
    characterClass: inputs.characterClass,
    background: inputs.background,
    alignment:  inputs.alignment,
    feats:      inputs.feats,
    tone:       inputs.tone,
    abilityNotes: inputs.abilityNotes,
    campaignSetting: inputs.campaignSetting,
    backstory:  outputs.backstory,
    trait:      outputs.trait,
    ideal:      outputs.ideal,
    bond:       outputs.bond,
    flaw:       outputs.flaw,
    artPrompt:  outputs.artPrompt,
  };
  chars.unshift(char);
  localStorage.setItem(LS_KEY, JSON.stringify(chars));
  flashBtn('save-btn', '✓ Saved!');
}

function deleteCharacter(id) {
  const chars = getSavedCharacters().filter(c => c.id !== id);
  localStorage.setItem(LS_KEY, JSON.stringify(chars));
}

// ===== SAVED PANEL =====

function renderSavedCharacters() {
  const grid   = document.getElementById('saved-grid');
  const empty  = document.getElementById('saved-empty');
  const chars  = getSavedCharacters();
  grid.innerHTML = '';
  if (!chars.length) { grid.appendChild(empty); empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  chars.forEach(c => {
    const raceLabel  = RACE_LIST.find(r => r.key === c.race)?.label || c.race;
    const classLabel = CLASS_LIST.find(x => x.key === c.characterClass)?.label || c.characterClass;
    const bgLabel    = (c.background || '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const card = document.createElement('div');
    card.className = 'saved-card';
    card.innerHTML = `
      <div class="saved-card-name">${c.name}</div>
      <div class="saved-card-meta">${raceLabel} • ${classLabel}</div>
      <div class="saved-card-meta">${bgLabel}</div>
      <div class="saved-card-preview">${c.backstory || ''}</div>
      <div class="saved-card-actions">
        <button class="saved-card-btn load-btn">Load</button>
        <button class="saved-card-btn delete delete-btn">Delete</button>
      </div>`;
    card.querySelector('.load-btn').addEventListener('click', e => { e.stopPropagation(); loadCharacter(c); });
    card.querySelector('.delete-btn').addEventListener('click', e => { e.stopPropagation(); deleteCharacter(c.id); renderSavedCharacters(); });
    grid.appendChild(card);
  });
}

function loadCharacter(c) {
  // Switch to builder tab
  document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  const builderTab = document.querySelector('.tab[data-panel="builder"]');
  builderTab.classList.add('active');
  builderTab.setAttribute('aria-selected', 'true');
  document.getElementById('panel-builder').classList.remove('hidden');

  // Restore fields
  document.getElementById('char-name').value = c.name === 'The Adventurer' ? '' : c.name;
  document.getElementById('ability-notes').value = c.abilityNotes || '';
  document.getElementById('campaign-setting').value = c.campaignSetting || '';
  document.getElementById('background-select').value = c.background || '';

  // Race
  state.race = c.race;
  document.querySelectorAll('#race-grid .option-card').forEach(el => {
    el.classList.toggle('selected', el.dataset.key === c.race);
  });

  // Class
  state.characterClass = c.characterClass;
  document.querySelectorAll('#class-grid .option-card').forEach(el => {
    el.classList.toggle('selected', el.dataset.key === c.characterClass);
  });

  // Alignment
  state.alignment = c.alignment || null;
  document.querySelectorAll('#alignment-grid .align-btn').forEach(el => {
    el.classList.toggle('selected', el.dataset.key === c.alignment);
  });

  // Feats
  state.feats = new Set(c.feats || []);
  document.querySelectorAll('#feat-grid .feat-tag').forEach(el => {
    el.classList.toggle('selected', state.feats.has(el.dataset.key));
  });

  // Tone
  state.tone = c.tone || 'heroic';
  document.querySelectorAll('#tone-row .tone-btn').forEach(el => {
    el.classList.toggle('selected', el.dataset.key === state.tone);
  });

  // Render stored result
  if (c.backstory) {
    renderResult(
      { name: c.name, race: c.race, characterClass: c.characterClass, background: c.background, alignment: c.alignment },
      c.backstory,
      { trait: c.trait, ideal: c.ideal, bond: c.bond, flaw: c.flaw },
      c.artPrompt || ''
    );
  }
  document.getElementById('panel-builder').scrollIntoView({ behavior: 'smooth' });
}

// ===== PARTY PANEL =====

function renderPartyMode() {
  const grid     = document.getElementById('party-select-grid');
  const emptyEl  = document.getElementById('party-empty');
  const controls = document.getElementById('party-controls');
  const chars    = getSavedCharacters();
  grid.innerHTML = '';

  if (!chars.length) {
    emptyEl.classList.remove('hidden');
    controls.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  controls.classList.remove('hidden');

  chars.forEach(c => {
    const raceLabel  = RACE_LIST.find(r => r.key === c.race)?.label || c.race;
    const classLabel = CLASS_LIST.find(x => x.key === c.characterClass)?.label || c.characterClass;
    const card = document.createElement('div');
    card.className = 'saved-card' + (state.partySelected.has(c.id) ? ' party-selected' : '');
    card.innerHTML = `
      <div class="saved-card-name">${c.name}</div>
      <div class="saved-card-meta">${raceLabel} • ${classLabel}</div>
      <div class="saved-card-preview">${c.backstory || ''}</div>`;
    card.addEventListener('click', () => {
      if (state.partySelected.has(c.id)) {
        state.partySelected.delete(c.id);
        card.classList.remove('party-selected');
      } else if (state.partySelected.size < 4) {
        state.partySelected.add(c.id);
        card.classList.add('party-selected');
      }
      updatePartyControls(chars);
    });
    grid.appendChild(card);
  });

  updatePartyControls(chars);
}

function updatePartyControls(chars) {
  const count = state.partySelected.size;
  const countEl = document.getElementById('party-count');
  const genBtn  = document.getElementById('party-generate-btn');
  countEl.textContent = count === 0
    ? 'Select 2–4 characters'
    : `${count} character${count > 1 ? 's' : ''} selected${count < 2 ? ' — select at least one more' : ''}`;
  genBtn.disabled = count < 2;
}

document.getElementById('party-generate-btn').addEventListener('click', runPartyGenerate);
document.getElementById('party-regenerate-btn').addEventListener('click', runPartyGenerate);

function runPartyGenerate() {
  const chars = getSavedCharacters().filter(c => state.partySelected.has(c.id));
  if (chars.length < 2) return;
  const story = generatePartyStory(chars);
  const metaParts = chars.map(c => c.name || 'Adventurer');
  document.getElementById('party-meta').textContent = metaParts.join(' • ');
  document.getElementById('party-text').innerHTML = story.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const result = document.getElementById('party-result');
  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById('party-copy-btn').addEventListener('click', () => {
  const text = document.getElementById('party-text').innerText;
  navigator.clipboard.writeText(text).then(() => flashBtn('party-copy-btn', '✓ Copied'));
});

// ===== BOOT =====
buildRaceGrid();
buildClassGrid();
buildAlignmentGrid();
buildBackgroundSelect();
buildFeatGrid();
buildToneRow();
