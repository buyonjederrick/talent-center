export const genres = [
    { label: "Pop", value: 1 }, 
    { label: "Rock", value: 2 }, 
    { label: "Jazz", value: 3 }, 
    { label: "Classical", value: 4 }, 
    { label: "Hip-hop", value: 5 }, 
    { label: "R&B (Rhythm and Blues)", value: 6 }, 
    { label: "Country", value: 7 }, 
    { label: "Electronic", value: 8 }, 
    { label: "Reggae", value: 9 }, 
    { label: "Blues", value: 10 }, 
    { label: "Folk", value: 11 }, 
    { label: "Funk", value: 12 }, 
    { label: "Soul", value: 13 }, 
    { label: "Gospel", value: 14 }, 
    { label: "Punk", value: 15 }, 
    { label: "Metal", value: 16 }, 
    { label: "Alternative", value: 17 }, 
    { label: "Indie", value: 18 }, 
    { label: "Dance", value: 19 }, 
    { label: "Ska", value: 20 }, 
    { label: "Latin", value: 21 }, 
    { label: "Afrobeat", value: 22 }, 
    { label: "Disco", value: 23 }, 
    { label: "Ambient", value: 24 }, 
    { label: "World", value: 25 }, 
    { label: "Experimental", value: 26 }, 
    { label: "Reggaeton", value: 27 }, 
    { label: "Opera", value: 28 }, 
    { label: "Classical", value: 29 }, 
    { label: "Techno", value: 30 }, 
].map((genre) => ({
    ...genre,
    value: genre.value.toString()
}));

export const productionsoftwares = [
    { label: "Ableton Live", value: 1 }, 
    { label: "FL Studio", value: 2 }, 
    { label: "Logic Pro", value: 3 }, 
    { label: "Pro Tools", value: 4 }, 
    { label: "Cubase", value: 5 }, 
    { label: "Studio One", value: 6 }, 
    { label: "Reason", value: 7 }, 
    { label: "Bitwig Studio", value: 8 }, 
    { label: "Native Instruments Maschine", value: 9 }, 
    { label: "Reaper", value: 10 }, 
].map((productionsoftware) => ({
    ...productionsoftware,
    value: productionsoftware.value.toString()
}));

export const instruments = [
   { label: "Guitar", value: 1 }, 
   { label: "Violin", value: 2 }, 
   { label: "Cello", value: 3 }, 
   { label: "Double bass", value: 4 }, 
   { label: "Viola", value: 5 }, 
   { label: "Banjo", value: 6 }, 
   { label: "Mandolin", value: 7 }, 
   { label: "Ukulele", value: 8 }, 
   { label: "Flute", value: 9 }, 
   { label: "Clarinet", value: 10 }, 
   { label: "Saxophone", value: 11 }, 
   { label: "Trumpet", value: 12 }, 
   { label: "Trombone", value: 13 }, 
   { label: "Tuba", value: 14 }, 
   { label: "Baritone horn", value: 15 }, 
   { label: "Euphonium", value: 16 }, 
   { label: "Drum kit", value: 17 }, 
   { label: "Snare drum", value: 18 }, 
   { label: "Bass drum", value: 19 }, 
   { label: "Cymbals", value: 20 }, 
   { label: "Tambourine", value: 21 }, 
   { label: "Bongos", value: 22 }, 
   { label: "Piano", value: 23 }, 
   { label: "Synthesizer", value: 24 }, 
   { label: "Digital piano", value: 25 }, 
].map((instrument) => ({
    ...instrument,
    value: instrument.value.toString()
}));

export const productionpurposes = [
    { label: "Films & Videos", value: 1 }, 
    { label: "Sound Design", value: 2 }, 
    { label: "Music Production", value: 3 }, 
    { label: "Video games", value: 4 }, 
    { label: "Applications", value: 5 }, 

 ].map((productionpurpose) => ({
     ...productionpurpose,
     value: productionpurpose.value.toString()
 }));

 export const languages = [
    { label: "English", value: 1 }, 
    { label: "Luganda", value: 2 }, 
    { label: "Acholi", value: 3 }, 
    { label: "Lango", value: 4 }, 
    { label: "Runyankole", value: 5 }, 
    { label: "Ateso", value: 6 }, 
    { label: "Luo", value: 7 }, 
    { label: "Lugbara", value: 8 }, 
    { label: "Rutooro", value: 9 }, 
    { label: "Iteso", value: 10 }, 
    { label: "Lusoga", value: 11 }, 
    { label: "Alur", value: 12 }, 
    { label: "Kinyarwanda", value: 13 }, 
    { label: "French", value: 14 }, 
    { label: "Kinyarwanda", value: 15 }, 
    { label: "French", value: 16 }, 
    { label: "Kirundi", value: 17 }, 
    { label: "Somali", value: 18 }, 
    { label: "Arabic", value: 19 }, 
    { label: "Dinka", value: 20 }, 
    { label: "Kalenjin", value: 21 }, 
    { label: "Somali", value: 22 }, 
 ].map((language) => ({
     ...language,
     value: language.value.toString()
 }));

 export const genders = [
    { label: "Male", value: 1 }, 
    { label: "Female", value: 2 }, 
 ].map((gender) => ({
     ...gender,
     value: gender.value.toString()
 }));

 export const accents = [
    { label: "English - American", value: 1 }, 
    { label: "English - British", value: 2 }, 
 ].map((accent) => ({
     ...accent,
     value: accent.value.toString()
 }));

 export const ageranges = [
    { label: "Adult", value: 1 }, 
    { label: "Child", value: 2 }, 
    { label: "Grand", value: 3 }, 
 ].map((agerange) => ({
     ...agerange,
     value: agerange.value.toString()
 }));

 export const voiceovertones = [
    { label: "Authoritative", value: 1 }, 
    { label: "Calming", value: 2 }, 
    { label: "Casual", value: 3 }, 
    { label: "Angry", value: 4 }, 
    { label: "Corporate", value: 5 }, 
    { label: "Dramatic", value: 6 }, 
    { label: "Energetic", value: 7 }, 
    { label: "Emotional", value: 8 }, 
    
 ].map((voiceovertone) => ({
     ...voiceovertone,
     value: voiceovertone.value.toString()
 }));

 export const voiceoverpurposes = [
    { label: "Radio", value: 1 }, 
    { label: "TV", value: 2 }, 
    { label: "Youtube", value: 3 }, 
    { label: "Video narration", value: 4 }, 
    { label: "E-learning", value: 5 }, 
    { label: "Video game", value: 6 }, 
 ].map((voiceoverpurpose) => ({
     ...voiceoverpurpose,
     value: voiceoverpurpose.value.toString()
 }));

 export const beatmoods = [
    { label: "Upbeat", value: 1 }, 
    { label: "Chill", value: 2 }, 
    { label: "Dark", value: 3 }, 
    { label: "Inspirational", value: 4 }, 
    { label: "Epic", value: 5 }, 
    { label: "Funky", value: 6 }, 
    { label: "Bouncy", value: 7 }, 
    { label: "Ethereal", value: 8 }, 
    { label: "Aggressive", value: 9 }, 
    { label: "Romantic", value: 10 }, 
    { label: "Experimental", value: 11 }, 
    { label: "Trippy", value: 12 }, 
    { label: "Euphoric", value: 13 }, 
    { label: "Dramatic", value: 14 }, 
    { label: "Laid-back", value: 15 }, 
 ].map((beatmood) => ({
     ...beatmood,
     value: beatmood.value.toString()
 }));




