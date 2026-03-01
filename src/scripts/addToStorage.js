import { moodStorage } from "../storage.js";

const items = [ {
    "date": "2026-02-28", "mood": "calm", "note": "Relaxing evening"
}, {
    "date": "2026-02-27", "mood": "happy", "note": "Feeling overwhelmed"
}, {
    "date": "2026-02-26", "mood": "sad", "note": "Had a long meeting"
}, {
    "date": "2026-02-25", "mood": "angry", "note": "Read a good book"
}, {
    "date": "2026-02-24", "mood": "anxious", "note": "Feeling overwhelmed"
}, {
    "date": "2026-02-23", "mood": "happy", "note": "Read a good book"
}, {
    "date": "2026-02-22", "mood": "sad", "note": "Took a nap"
}, {
    "date": "2026-02-21", "mood": "sad", "note": "Meditated in the morning"
}, {
    "date": "2026-02-20", "mood": "angry", "note": "Feeling creative"
}, {
    "date": "2026-02-19", "mood": "sad", "note": "Feeling grateful"
}, {
    "date": "2026-02-18", "mood": "happy", "note": "Feeling grateful"
}, {
    "date": "2026-02-17", "mood": "anxious", "note": "Feeling grateful"
}, {
    "date": "2026-02-16", "mood": "sad", "note": "Had a long meeting"
}, {
    "date": "2026-02-15", "mood": "happy", "note": "Tried something new"
}, {
    "date": "2026-02-14", "mood": "anxious", "note": "Caught up with friends"
}, {
    "date": "2026-02-13", "mood": "calm", "note": "Feeling a bit down"
}, {
    "date": "2026-02-12", "mood": "angry", "note": "Read a good book"
}, {
    "date": "2026-02-11", "mood": "happy", "note": "Caught up with friends"
}, {
    "date": "2026-02-10", "mood": "happy", "note": "Feeling a bit down"
}, {
    "date": "2026-02-09", "mood": "anxious", "note": "Productive day at work"
}, {
    "date": "2026-02-08", "mood": "calm", "note": "Watched a movie"
}, {
    "date": "2026-02-07", "mood": "angry", "note": "Worked late"
}, {
    "date": "2026-02-06", "mood": "calm", "note": "Caught up with friends"
}, {
    "date": "2026-02-05", "mood": "bored", "note": "Enjoyed a walk outside"
}, {
    "date": "2026-02-04", "mood": "happy", "note": "Had a great coffee"
}, {
    "date": "2026-02-03", "mood": "calm", "note": "Feeling overwhelmed"
}, {
    "date": "2026-02-02", "mood": "happy", "note": "Finished a big task"
}, {
    "date": "2026-02-01", "mood": "sad", "note": "Took a nap"
}, {
    "date": "2026-01-31", "mood": "happy", "note": "Feeling inspired"
}, {
    "date": "2026-01-29", "mood": "happy", "note": "Took a nap"
}, {
    "date": "2026-01-28", "mood": "anxious", "note": "Had a slow day"
}, {
    "date": "2026-01-27", "mood": "sad", "note": "Feeling under the weather"
}, {
    "date": "2026-01-26", "mood": "happy", "note": "Had a great coffee"
}, {
    "date": "2026-01-25", "mood": "anxious", "note": "Tried something new"
}, {
    "date": "2026-01-24", "mood": "anxious", "note": "Feeling overwhelmed"
}, {
    "date": "2026-01-24", "mood": "anxious", "note": "Productive day at work"
}, {
    "date": "2026-01-23", "mood": "angry", "note": "Feeling inspired"
}, {
    "date": "2026-01-22", "mood": "angry", "note": "Feeling overwhelmed"
}, {
    "date": "2026-01-21", "mood": "angry", "note": "Meditated in the morning"
}, {
    "date": "2026-01-20", "mood": "anxious", "note": "Read a good book"
}, {
    "date": "2026-01-19", "mood": "sad", "note": "Cooked a new recipe"
}, {
    "date": "2026-01-18", "mood": "happy", "note": "Had a great workout"
}, {
    "date": "2026-01-17", "mood": "anxious", "note": "Feeling creative"
}, {
    "date": "2026-01-16", "mood": "happy", "note": "Took a nap"
}, {
    "date": "2026-01-15", "mood": "anxious", "note": "Meditated in the morning"
}, {
    "date": "2026-01-14", "mood": "happy", "note": "Had a slow day"
}, {
    "date": "2026-01-13", "mood": "happy", "note": "Finished a big task"
}, {
    "date": "2026-01-12", "mood": "angry", "note": "Cooked a new recipe"
}, {
    "date": "2026-01-11", "mood": "angry", "note": "Feeling under the weather"
}, {
    "date": "2026-01-10", "mood": "sad", "note": "Feeling nostalgic"
}, {
    "date": "2026-01-09", "mood": "happy", "note": "Feeling a bit down"
}, {
    "date": "2026-01-08", "mood": "calm", "note": "Relaxing evening"
}, {
    "date": "2026-01-07", "mood": "sad", "note": "Had a long meeting"
}, {
    "date": "2026-01-06", "mood": "anxious", "note": "Feeling nostalgic"
}, {
    "date": "2026-01-05", "mood": "anxious", "note": "Caught up with friends"
}, {
    "date": "2026-01-04", "mood": "sad", "note": "Explored a new place"
}, {
    "date": "2026-01-03", "mood": "happy", "note": "Relaxing evening"
}, {
    "date": "2026-01-02", "mood": "angry", "note": "Caught up with friends"
}, {
    "date": "2026-01-01", "mood": "sad", "note": "Relaxing evening"
}, {
    "date": "2025-12-31", "mood": "angry", "note": "Had a slow day"
} ];
moodStorage.init();
items.forEach(item => moodStorage.saveEntry(item));
console.log(`Додано ${items.length} записів.`);