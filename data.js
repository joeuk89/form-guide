// All content lives here. Edit this file to change cues, add exercises or swap videos.
// video: { id: YouTube video id, by: channel, len: duration }

const RAMP = (first) => [
  first,
  "Ramp up: about 50% of your top set x5, 70% x3, 85% x1-2. Rest a minute between, longer before the top set.",
  "Treat every warm-up rep like a heavy one: same set-up, same brace, same bar path."
];
const LIGHT = "No separate warm-up needed once you're warm from the main lift. Do one easy feeler set of 6-8 at about half the working weight to find the groove.";

window.EXERCISES = [
  // ---------- THE FIVE ----------
  {
    id: "bench-press", name: "Bench Press", kit: "Barbell", big: true,
    muscles: "Chest, triceps, front delts",
    cues: ["Shoulder blades back and down, pinned into the bench", "Bend the bar: break it in half", "Touch low on the chest, press back toward your face", "Push yourself away from the bar, feet driving the floor"],
    see: "You're not pushing the bar up. You're pushing your body down through the bench and into the floor, and the bar happens to rise.",
    setup: ["Eyes under the bar. Feet flat, planted where you can push the floor away.", "Squeeze shoulder blades together and down, small arch, chest proud. Keep bum on the bench.", "Grip just outside shoulder width, bar low in the palm over the wrist, knuckles to the ceiling.", "Big breath, unrack with straight arms, bring the bar over the shoulders."],
    rep: ["Breathe in and hold. Lower under control to the lower chest, elbows about 45-70 degrees from your sides.", "Forearms vertical at the bottom. Light touch, no bounce.", "Drive the feet, press up and slightly back so the bar finishes over the shoulders.", "Breathe out near the top. Re-set the shoulder blades if they slide."],
    mistakes: ["Elbows flared straight out to the sides (hard on the shoulders)", "Shoulders rolling forward at the top, losing the pinned-back position", "Bouncing the bar off the chest", "Bum lifting off the bench", "Wrists bent back, bar high in the fingers"],
    warmup: RAMP("10 band pull-aparts and 10 scapular push-ups, then the empty bar for 10 slow reps with a pause on the chest."),
    video: { id: "JY2PW3LhHtQ", by: "Barbell Logic", len: "4:01" }
  },
  {
    id: "back-squat", name: "Back Squat", kit: "Barbell", big: true,
    muscles: "Quads, glutes, adductors, trunk",
    cues: ["Big breath into the belt line, brace like you're about to be punched", "Screw the feet into the floor, knees track over toes", "Sit down between your hips, chest and hips rise together", "Bar stays over the middle of the foot"],
    see: "A vertical line runs from the bar to your mid-foot. Your body folds and unfolds around that line like an accordion, and the bar never leaves it.",
    setup: ["Bar on the upper traps (high bar) or across the rear delts (low bar). Hands as close as shoulders allow, elbows under the bar.", "Squeeze the upper back tight, stand the bar up, two or three short steps back.", "Feet about shoulder width, toes turned out 15-30 degrees.", "Whole foot rooted: big toe, little toe, heel."],
    rep: ["Breathe in and brace before you move.", "Break at hips and knees together. Knees travel forward and out in line with the toes.", "Go to at least hip crease level with the knee, keeping the back angle steady.", "Drive the floor away. Lead with the chest so the hips don't shoot up first. Breathe out at the top."],
    mistakes: ["Hips shooting up first out of the bottom (turns it into a good morning)", "Knees caving in on the way up", "Heels lifting or weight rocking onto the toes", "Losing the brace and rounding at the bottom", "Cutting depth as the bar gets heavier"],
    warmup: RAMP("2 minutes easy movement, then 10 bodyweight squats with a 2-second pause at the bottom, 10 glute bridges, and 5 slow goblet squats prying the knees out. Then the empty bar x8."),
    video: { id: "7v_V6xiA_AA", by: "Squat University", len: "3:16" }
  },
  {
    id: "deadlift", name: "Deadlift", kit: "Barbell", big: true,
    muscles: "Glutes, hamstrings, back, grip",
    cues: ["Bar over mid-foot, shins to the bar, don't move the bar", "Squeeze oranges in your armpits: lats on", "Pull the slack out, then push the floor away", "Bar drags up the legs. Stand tall, don't lean back"],
    see: "It's a leg press against the floor. Your arms are ropes and your back is a steel beam: nothing changes shape, the floor just moves away.",
    setup: ["Feet hip width, bar over the middle of the foot (about an inch from the shins).", "Hinge and grip just outside the legs without moving the bar.", "Bend the knees until shins touch the bar. Lift the chest to flatten the back.", "Big breath, brace, pull the slack out of the bar until it clicks against the plates."],
    rep: ["Push the floor away. Hips and shoulders rise at the same rate.", "Keep the bar in contact with the legs the whole way.", "As the bar passes the knees, drive the hips through and stand tall. Squeeze the glutes.", "Lower by pushing the hips back first, then bend the knees once the bar passes them. Reset each rep."],
    mistakes: ["Bar drifting away from the legs", "Jerking the bar off the floor with slack arms", "Hips shooting up before the bar moves", "Lower back rounding as the bar breaks the floor", "Leaning back and over-extending at lockout"],
    warmup: RAMP("10 bodyweight hip hinges with hands sliding down the thighs, 10 glute bridges, 5 cat-cows. Then a light bar from plates or blocks x5, practising the slack pull."),
    video: { id: "p2OPUi4xGrM", by: "Starting Strength", len: "4:23" }
  },
  {
    id: "overhead-press", name: "Overhead Press", kit: "Barbell", big: true,
    muscles: "Shoulders, triceps, upper chest, trunk",
    cues: ["Squeeze glutes and abs: stand like a plank", "Elbows slightly in front of the bar, forearms vertical", "Head back, bar straight up past the nose", "Head through the window, shrug to the ceiling"],
    see: "The bar travels in a dead straight line. Your face gets out of its way, then your head moves through the window your arms make.",
    setup: ["Grip just outside shoulders, bar low in the palm, wrists stacked over elbows.", "Bar rests on the upper chest and front delts, elbows a touch in front of the bar.", "Feet about hip width. Lock the knees, squeeze glutes, ribs down.", "Big breath in and brace."],
    rep: ["Tuck the chin and pull the head back slightly.", "Press straight up, keeping the bar close to the face.", "Once the bar clears the forehead, push the head forward under it.", "Lock out with the bar over mid-foot, shoulders shrugged up. Lower under control to the collarbone."],
    mistakes: ["Leaning back and turning it into a standing incline press", "Pressing the bar out and around the face", "Elbows flared out behind the bar at the start", "Soft knees or a loose middle leaking force", "Not finishing: stopping short of the head-through lockout"],
    warmup: RAMP("10 band pull-aparts, 10 shoulder dislocates with a band or stick, 5 wall slides. Then the empty bar x10."),
    video: { id: "wJlKUo2-P4o", by: "Alan Thrall", len: "2:42" }
  },
  {
    id: "pull-up", name: "Pull Up", kit: "Bar", big: true,
    muscles: "Lats, upper back, biceps, grip",
    cues: ["Start from a dead hang, shoulders down first", "Ribs down, legs slightly in front: hollow body", "Drive elbows down into your back pockets", "Chest to the bar, then lower slow"],
    see: "You're not pulling yourself up. You're pulling the bar down to your chest, elbows spearing into your back pockets.",
    setup: ["Overhand grip just outside shoulder width, thumbs around the bar.", "Hang with arms straight. Squeeze glutes, cross nothing, legs together slightly in front.", "Pull the shoulder blades down away from the ears before the arms bend."],
    rep: ["Lead with the chest. Pull the elbows down and back.", "Get the chin clearly over the bar without craning the neck.", "Pause for a beat at the top.", "Lower for 2-3 seconds to a full dead hang. Every rep starts from straight arms."],
    mistakes: ["Half reps: not reaching a full hang or not clearing the bar", "Kicking or swinging to get up", "Chin reaching for the bar while the chest stays low", "Shoulders shrugged up by the ears at the top", "Dropping fast on the way down"],
    warmup: ["20-30 second dead hang, then 5-8 scapular pull-ups.", "5 band pull-aparts and a few arm circles.", "One easy set of 2-3 banded pull-ups or one slow negative before the first working set."],
    video: { id: "XB_7En-zf_M", by: "FitnessFAQs", len: "2:24" }
  },

  // ---------- PULL-UP LADDER ----------
  {
    id: "banded-pull-up", name: "Pull Up (Band)", kit: "Bar + band",
    muscles: "Lats, upper back, biceps",
    cues: ["Same pull-up, just lighter: no bouncing off the band", "Shoulders down first, then elbows to pockets", "Chest to bar, slow down"],
    see: "The band only helps at the bottom. Own the top half yourself and lower like the band isn't there.",
    setup: ["Loop the band over the bar. Put one foot (or knee) in it and cross the other leg over.", "Hang with straight arms, body in a slight hollow."],
    rep: ["Depress the shoulder blades, then pull the elbows down.", "Chin over the bar, brief pause.", "Lower for 2-3 seconds to a full hang."],
    mistakes: ["Using the band's rebound to bounce out of the bottom", "Losing the hollow body and swinging", "Never shrinking the band: use the thinnest that still gives clean reps"],
    warmup: ["20-second dead hang and 5 scapular pull-ups."],
    video: { id: "JpsiZGnlQ_4", by: "PureGym", len: "0:10" }
  },
  {
    id: "negative-pull-up", name: "Negative Pull Up", kit: "Bar + box",
    muscles: "Lats, biceps, grip",
    cues: ["Jump to the top, chin over the bar", "Fight gravity: 3 to 5 seconds down", "Same speed all the way, especially the last third"],
    see: "You're a lift descending one floor at a time. No free fall between floors.",
    setup: ["Use a box to step or jump so your chin starts above the bar.", "Squeeze everything at the top: glutes, abs, grip."],
    rep: ["Hold the top for a second.", "Lower at an even pace, shoulders staying down.", "Finish in a full dead hang, then step back onto the box."],
    mistakes: ["Dropping through the bottom third where it's hardest", "Starting with the chin below the bar", "Doing too many: stop when you can't control the descent"],
    warmup: ["Done after pull-up work, so no extra warm-up. If first, hang 20 seconds and do 5 scapular pull-ups."],
    video: { id: "gbPURTSxQLY", by: "Bodybuilding.com", len: "1:02" }
  },
  {
    id: "scapular-pull-up", name: "Scapular Pull Up", kit: "Bar",
    muscles: "Lower traps, lats",
    cues: ["Arms stay locked straight", "Pull shoulders down away from ears", "Small movement, slow and deliberate"],
    see: "Your arms are steel cables. The only thing moving is your shoulder blades sliding into your back pockets.",
    setup: ["Dead hang, overhand grip, elbows locked."],
    rep: ["Without bending the elbows, pull the shoulder blades down and slightly together. Your body rises a few centimetres.", "Hold for a second.", "Relax back to a full passive hang."],
    mistakes: ["Bending the elbows and turning it into a mini pull-up", "Rushing: bouncing in and out", "Arching hard instead of moving the shoulder blades"],
    warmup: ["This is itself a warm-up drill. Just hang for 10 seconds first."],
    video: { id: "WqCXcFrA1Iw", by: "FitnessFAQs", len: "0:45" }
  },
  {
    id: "flexed-arm-hang", name: "Flexed Arm Hang", kit: "Bar",
    muscles: "Biceps, lats, grip",
    cues: ["Chin over the bar, elbows squeezed to ribs", "Shoulders down, chest up to the bar", "Breathe: don't hold your breath"],
    see: "You're locked onto the bar like a clamp. Nothing sags.",
    setup: ["Step or jump to the top position, chin above the bar."],
    rep: ["Hold with shoulders pulled down and body tight.", "Keep breathing steadily.", "End the set when the chin drops below the bar, then lower slowly."],
    mistakes: ["Resting the chin on the bar", "Shoulders creeping up to the ears", "Dropping out instead of finishing with a slow lower"],
    warmup: ["Done after pull-ups, so you're warm."],
    video: { id: "QXVQfPFmbSI", by: "Girls Gone Strong", len: "0:32" }
  },
  {
    id: "dead-hang", name: "Dead Hang", kit: "Bar",
    muscles: "Grip, shoulders, lats (stretch)",
    cues: ["Full grip, thumbs around", "Let the shoulders open, ribs stay down", "Slow breaths, relax into it"],
    see: "You're a coat on a hook. Heavy and long, the spine lengthening with each breath out.",
    setup: ["Overhand grip about shoulder width."],
    rep: ["Hang with straight arms and let the body lengthen.", "Keep a little tension in the shoulders if a fully passive hang is uncomfortable.", "Step down under control."],
    mistakes: ["Swinging", "Big rib flare and arched lower back", "Holding your breath"],
    warmup: ["None needed."],
    video: { id: "no_ZdiJsLu4", by: "Tom Morrison", len: "3:33" }
  },

  // ---------- BARBELL ACCESSORIES ----------
  {
    id: "romanian-deadlift", name: "Romanian Deadlift", kit: "Barbell",
    muscles: "Hamstrings, glutes, lower back",
    cues: ["Soft knees, then hips back to the wall behind you", "Bar shaves the thighs", "Stop when the hips stop: feel the hamstring stretch", "Stand up by driving hips forward"],
    see: "There's a wall a foot behind you. Reach your bum back to touch it while your chest stays long and proud.",
    setup: ["Start standing with the bar at the hips, feet hip width.", "Unlock the knees a little and keep that bend fixed.", "Lats on: pull the bar into the thighs."],
    rep: ["Push the hips straight back, torso tipping forward with a flat back.", "Lower until the hamstrings are fully stretched, usually just below the knees.", "Squeeze the glutes and drive the hips forward to stand."],
    mistakes: ["Bending the knees more to get lower (becomes a deadlift)", "Rounding the back to reach the floor", "Bar drifting forward off the legs", "Leaning back at the top"],
    warmup: ["You're warm from squats. One light set of 8 focusing on the hip-back groove."],
    video: { id: "7j-2w4-P14I", by: "Nuffield Health", len: "0:42" }
  },
  {
    id: "bent-over-row", name: "Bent Over Row", kit: "Barbell",
    muscles: "Lats, mid back, rear delts, biceps",
    cues: ["Hinge and freeze: torso doesn't move", "Pull elbows to hips, bar to the belly button", "Squeeze, then lower with control"],
    see: "Your torso is a table. The bar comes up to meet the underside of it; the table never tips.",
    setup: ["Hinge to roughly 30-45 degrees above horizontal, knees soft, back flat.", "Overhand grip just outside the legs, arms hanging straight.", "Brace."],
    rep: ["Pull the bar to the lower ribs or belly button, elbows travelling back toward the hips.", "Pause briefly and squeeze the shoulder blades.", "Lower until the arms are straight and the shoulder blades spread."],
    mistakes: ["Standing up a little more each rep", "Heaving with the hips", "Pulling to the chest with flared elbows", "Cutting the range short at the top or bottom"],
    warmup: ["One light set of 8 with a pause at the top."],
    video: { id: "9efgcAjQe7E", by: "ScottHermanFitness", len: "3:05" }
  },
  {
    id: "hip-thrust", name: "Hip Thrust", kit: "Barbell + bench",
    muscles: "Glutes, hamstrings",
    cues: ["Chin tucked, ribs down", "Drive through the heels", "Finish with a hard glute squeeze: shins vertical", "Hips move, lower back doesn't"],
    see: "Your torso from ribs to knees is one plank that hinges on the bench. At the top it's a flat table.",
    setup: ["Upper back on the bench, bottom of the shoulder blades on the edge.", "Bar in the hip crease with padding. Feet flat, about shoulder width.", "Set the feet so the shins are vertical at the top."],
    rep: ["Tuck the chin, brace, and drive the hips up through the heels.", "Lock out with hips level with shoulders and knees. Squeeze 1 second.", "Lower under control until the plates nearly touch."],
    mistakes: ["Arching the lower back to get higher instead of extending the hips", "Head thrown back, ribs flaring", "Feet too far (hamstrings take over) or too close (quads take over)", "Bouncing off the floor"],
    warmup: ["10 bodyweight glute bridges with a 2-second squeeze, then one light set of 8."],
    video: { id: "Zp26q4BY5HE", by: "Girls Gone Strong", len: "1:28" }
  },
  {
    id: "box-squat", name: "Box Squat", kit: "Barbell + box", pt: true,
    muscles: "Glutes, hamstrings, quads",
    cues: ["Sit back to the box, shins near vertical", "Stay tight on the box: pause, don't relax", "Drive up by pushing the floor apart"],
    see: "You're lowering yourself onto a chair that might be pulled away. Controlled all the way, never a plop.",
    setup: ["Box at or just below parallel, behind you.", "Same bar position and brace as your back squat. Stance often a touch wider."],
    rep: ["Push the hips back and lower under control until you're sitting on the box.", "Pause for a second, staying braced with the back tight.", "Drive up, hips and chest together."],
    mistakes: ["Crashing onto the box", "Relaxing and rocking back, then rocking forward to stand", "Knees caving on the way up"],
    warmup: ["Same as the back squat: bodyweight squats, glute bridges, then ramp from the empty bar."],
    video: { id: "ae7gIVNosHg", by: "Starting Strength", len: "3:35" }
  },
  {
    id: "lat-pulldown", name: "Lat Pulldown", kit: "Cable machine", pt: true,
    muscles: "Lats, upper back, biceps",
    cues: ["Chest up to the bar, slight lean back", "Pull elbows down to your sides", "Bar to the top of the chest, control it back up"],
    see: "Your hands are hooks. The elbows do the pulling, driving down into your back pockets.",
    setup: ["Thigh pad snug. Grip just outside shoulder width.", "Sit tall, lean back slightly, chest lifted."],
    rep: ["Pull the shoulders down first, then the elbows.", "Bring the bar to the upper chest.", "Let it rise slowly until the arms are straight and the lats stretch."],
    mistakes: ["Leaning way back and rowing it", "Pulling behind the neck", "Yanking with the arms and cutting the stretch at the top"],
    warmup: ["One light set of 10 with a full stretch at the top."],
    video: { id: "ZxgD_89klTQ", by: "Colossus Fitness", len: "4:05" }
  },

  // ---------- DUMBBELL PRESSES AND ROWS ----------
  {
    id: "incline-db-press", name: "Incline Bench Press", kit: "Dumbbells",
    muscles: "Upper chest, front delts, triceps",
    cues: ["Shoulder blades pinned back and down", "Elbows about 45 degrees, forearms vertical", "Deep stretch at the bottom, press up and slightly in"],
    see: "Your chest stays the highest point the whole set. The dumbbells sink beside it and rise above it.",
    setup: ["Bench at 30-45 degrees. Kick the dumbbells up from the knees.", "Feet planted, shoulder blades squeezed, slight arch."],
    rep: ["Lower for 2-3 seconds until the dumbbells are level with the chest and you feel a stretch.", "Press up and slightly together without clanging them.", "Stop just short of losing shoulder position at the top."],
    mistakes: ["Bench too steep (becomes a shoulder press)", "Elbows flared straight out", "Short range: not going deep", "Shoulders rolling forward at the top"],
    warmup: [LIGHT],
    video: { id: "8iPEnn-ltC8", by: "ScottHermanFitness", len: "2:43" }
  },
  {
    id: "db-shoulder-press", name: "Shoulder Press", kit: "Dumbbells",
    muscles: "Shoulders, triceps",
    cues: ["Ribs down, glutes tight", "Elbows slightly forward, not flared straight out", "Press up and slightly in, biceps by ears"],
    see: "Two pistons moving straight up from your shoulders, your torso a pillar that doesn't lean.",
    setup: ["Seated with back support or standing. Dumbbells at shoulder height.", "Forearms vertical, elbows about 30 degrees in front of the body line."],
    rep: ["Press overhead until the arms are straight.", "Lower under control until the dumbbells are at about ear to shoulder level.", "Keep the lower back from arching."],
    mistakes: ["Leaning back and arching", "Stopping the lowering phase high", "Wrists bent back", "Banging the dumbbells together at the top"],
    warmup: [LIGHT],
    video: { id: "qEwKCR5JCog", by: "ScottHermanFitness", len: "2:24" }
  },
  {
    id: "chest-supported-row", name: "Chest Supported Row", kit: "Dumbbells + incline bench",
    muscles: "Mid back, lats, rear delts",
    cues: ["Chest glued to the pad", "Elbows back toward the hips", "Squeeze the shoulder blades, then let them spread"],
    see: "Someone has put a pencil between your shoulder blades. Pinch it at the top of every rep, release it at the bottom.",
    setup: ["Bench at about 30-45 degrees. Lie face down, chest on the top of the pad, feet braced.", "Arms hanging straight down, neutral grip."],
    rep: ["Row the elbows back, dumbbells toward the hips.", "Pause and squeeze for a second.", "Lower all the way and let the shoulders reach forward."],
    mistakes: ["Chest lifting off the pad to cheat the weight up", "Shrugging toward the ears", "Short, fast reps with no stretch"],
    warmup: [LIGHT],
    video: { id: "llFTFDwmGcw", by: "Colossus Fitness", len: "2:37" }
  },

  // ---------- SHOULDERS ----------
  {
    id: "lateral-raise", name: "Lateral Raise", kit: "Dumbbells",
    muscles: "Side delts",
    cues: ["Lead with the elbows, not the hands", "Reach out to the walls, not up", "Stop at shoulder height, lower slow"],
    see: "You're pushing the dumbbells out toward opposite walls, making yourself as wide as possible.",
    setup: ["Stand tall with a slight forward lean, dumbbells by your sides, soft elbows.", "Shoulders down away from the ears."],
    rep: ["Raise out to the sides, slightly in front of the body.", "Stop when the arms are about parallel to the floor.", "Lower for 2-3 seconds."],
    mistakes: ["Swinging with the hips", "Shrugging the traps up", "Hands higher than elbows", "Going too heavy to control the lowering"],
    warmup: ["None needed. First set doubles as the warm-up."],
    video: { id: "pgrWjBfaFe8", by: "Colossus Fitness", len: "1:43" }
  },
  {
    id: "rear-delt-fly", name: "Rear Delt Fly", kit: "Dumbbells",
    muscles: "Rear delts, upper back",
    cues: ["Hinge over, back flat, neck long", "Sweep the arms wide, pinkies leading", "Move from the shoulders, not the shoulder blades"],
    see: "You're opening a huge pair of wings as wide as they'll go, not pulling them back.",
    setup: ["Hinge until the torso is near parallel to the floor, or lie chest down on an incline bench.", "Dumbbells hanging under the shoulders, soft elbows."],
    rep: ["Raise the arms out to the sides in a wide arc.", "Stop when they're in line with the shoulders.", "Lower slowly without swinging."],
    mistakes: ["Too heavy, turning it into a row", "Standing up as you lift", "Squeezing the shoulder blades hard so the traps take over"],
    warmup: ["None needed. Keep the weight light and the reps strict."],
    video: { id: "buuYPLVXsJg", by: "Colossus Fitness", len: "3:31" }
  },

  // ---------- ARMS ----------
  {
    id: "db-curl", name: "Bicep Curl", kit: "Dumbbells",
    muscles: "Biceps",
    cues: ["Elbows pinned to your sides", "Curl and turn the pinky up", "Lower all the way, slow"],
    see: "Your upper arms are bolted to your ribs. Only the forearms move, like a hinge.",
    setup: ["Stand tall, palms forward, shoulders back."],
    rep: ["Curl without letting the elbows drift forward.", "Squeeze at the top.", "Lower for 2-3 seconds to a fully straight arm."],
    mistakes: ["Swinging the body", "Elbows drifting forward so the shoulders help", "Half reps at the bottom"],
    warmup: ["None needed."],
    video: { id: "cBSD6mQIPQk", by: "Nuffield Health", len: "0:36" }
  },
  {
    id: "incline-curl", name: "Incline Curl", kit: "Dumbbells + incline bench",
    muscles: "Biceps (long head, stretched)",
    cues: ["Arms hang straight down behind the body", "Elbows stay pointing at the floor", "Full stretch at the bottom every rep"],
    see: "Your elbows are nailed in place pointing at the floor. The dumbbells swing up from a long, stretched hang.",
    setup: ["Bench at about 45-60 degrees. Sit back, head and shoulders on the pad.", "Let the arms hang straight down, palms forward."],
    rep: ["Curl up without the elbows coming forward.", "Squeeze, then lower slowly to a full stretch.", "Keep the shoulders back on the pad."],
    mistakes: ["Elbows swinging forward", "Shoulders rolling off the bench", "Cutting the bottom stretch, which is the whole point"],
    warmup: ["None needed. Start lighter than your standing curl."],
    video: { id: "soxrZlIl35U", by: "ScottHermanFitness", len: "1:45" }
  },
  {
    id: "hammer-curl", name: "Hammer Curl", kit: "Dumbbells",
    muscles: "Brachialis, forearms, biceps",
    cues: ["Thumbs up the whole way", "Elbows pinned", "No swing, slow down"],
    see: "You're lifting two hammers to tap a nail at shoulder height. The wrist never turns.",
    setup: ["Stand tall, palms facing each other."],
    rep: ["Curl with a neutral grip until the forearm is just past parallel.", "Lower under control to straight arms."],
    mistakes: ["Swinging", "Elbows flaring out or drifting forward", "Rotating the wrist into a normal curl"],
    warmup: ["None needed."],
    video: { id: "Hy5L3-QJETc", by: "Colossus Fitness", len: "2:02" }
  },
  {
    id: "overhead-triceps-extension", name: "Overhead Triceps Extension", kit: "Dumbbell",
    muscles: "Triceps (long head)",
    cues: ["Elbows point at the ceiling, squeezed in", "Deep stretch behind the head", "Ribs down, don't arch"],
    see: "Your upper arms are two posts either side of your head. Only the forearms hinge.",
    setup: ["Seated or standing. One dumbbell held in both hands by the top plate, arms straight overhead.", "Brace the abs so the ribs stay down."],
    rep: ["Lower the dumbbell behind the head until the triceps are fully stretched.", "Extend to straight arms without the elbows flaring wide.", "Control every rep. No bouncing at the bottom."],
    mistakes: ["Elbows flaring out", "Arching the lower back", "Shallow range", "Upper arms drifting forward"],
    warmup: ["One light set of 10 to warm the elbows."],
    video: { id: "-Vyt2QdsR7E", by: "ScottHermanFitness", len: "1:43" }
  },
  {
    id: "dip-negatives", name: "Dip Negatives", kit: "Dip station",
    muscles: "Chest, triceps, front delts",
    cues: ["Start locked out, shoulders pushed down", "Slight forward lean, elbows back", "3 to 5 seconds down, as deep as is comfortable"],
    see: "You're lowering yourself into a hot bath. Slow, even, in control to the bottom.",
    setup: ["Jump or step to the top with arms locked.", "Shoulders down away from the ears, chest proud, legs slightly forward."],
    rep: ["Bend the elbows and lower slowly with a small forward lean.", "Go until the shoulders are about level with the elbows, or as far as feels good.", "Step off at the bottom and reset at the top."],
    mistakes: ["Shoulders shrugging up to the ears", "Dropping through the bottom", "Going deeper than the shoulders tolerate", "Elbows flaring wide"],
    warmup: ["10 scapular push-ups and a 10-second top support hold, shoulders pressed down."],
    video: { id: "y9yrMvmS-yU", by: "Calixpert", len: "1:30" }
  },

  // ---------- LEGS ----------
  {
    id: "bulgarian-split-squat", name: "Bulgarian Split Squat", kit: "Dumbbells + bench",
    muscles: "Quads, glutes",
    cues: ["Weight on the front foot, whole foot", "Drop straight down, back knee to the floor", "Front knee tracks over toes", "Back leg is a kickstand"],
    see: "You're in a lift going straight down and straight up. No travelling forward or back.",
    setup: ["Back foot laces-down on a bench about knee height.", "Front foot far enough forward that the heel stays down at the bottom.", "Dumbbells at your sides, slight forward lean from the hips."],
    rep: ["Lower under control until the back knee nearly touches the floor.", "Drive through the front foot to stand.", "Finish all reps on one side, then switch."],
    mistakes: ["Pushing off the back leg", "Front heel lifting", "Front knee caving in", "Stance so short the knee jams forward, or so long you can't get depth"],
    warmup: ["5 bodyweight reps per side to find your foot position before picking up the dumbbells."],
    video: { id: "2C-uNgKwPLE", by: "ScottHermanFitness", len: "2:55" }
  },
  {
    id: "split-squat", name: "Split Squat", kit: "Dumbbells",
    muscles: "Quads, glutes",
    cues: ["Feet on train tracks, not a tightrope", "Straight down, back knee kisses the floor", "Push through the front foot"],
    see: "Your hips move in a vertical slot. Down and up, nothing else.",
    setup: ["Long stride stance, feet hip width apart, back heel up.", "Torso tall with a slight forward lean."],
    rep: ["Bend both knees and lower until the back knee is just off the floor.", "Drive through the whole front foot to stand.", "Stay in the split stance for all reps."],
    mistakes: ["Feet in line so you wobble", "Front heel lifting", "Lunging forward instead of dropping down"],
    warmup: ["5 bodyweight reps per side."],
    video: { id: "Wcmg-3iHwjQ", by: "OPEX Fitness", len: "0:12" }
  },
  {
    id: "goblet-squat", name: "Goblet Squat", kit: "Dumbbell or kettlebell",
    muscles: "Quads, glutes, trunk",
    cues: ["Weight tight to the chest", "Elbows inside the knees", "Sit between the heels, chest up"],
    see: "You're sitting down into a narrow space between your feet, the weight a counterbalance that keeps you upright.",
    setup: ["Hold the weight against the chest, elbows tucked.", "Feet about shoulder width, toes slightly out."],
    rep: ["Brace and sit straight down.", "At the bottom the elbows brush the inside of the knees.", "Drive up through the whole foot."],
    mistakes: ["Weight drifting away from the chest", "Heels lifting", "Chest collapsing forward", "Knees caving in"],
    warmup: ["5 bodyweight squats with a pause at the bottom."],
    video: { id: "MeIiIdhvXT4", by: "ScottHermanFitness", len: "3:12" }
  },
  {
    id: "single-leg-calf-raise", name: "Single Leg Standing Calf Raise", kit: "Dumbbell + step",
    muscles: "Calves",
    cues: ["Full stretch at the bottom, pause 1-2 seconds", "Up onto the big toe", "Knee straight, no bounce"],
    see: "Your heel is a slow lift: all the way to the basement, pause, all the way to the top floor, pause.",
    setup: ["Ball of one foot on a step, heel hanging off.", "Dumbbell in the same-side hand, other hand lightly on a support."],
    rep: ["Lower the heel as far as it goes and pause.", "Rise as high as possible, pressing through the big toe.", "Pause at the top, then lower slowly."],
    mistakes: ["Bouncing out of the bottom", "Tiny range of motion", "Rolling to the outside of the foot", "Bending the knee to help"],
    warmup: ["None needed."],
    video: { id: "ORT4oJ_R8Qs", by: "ScottHermanFitness", len: "1:47" }
  },

  // ---------- CORE AND CARRIES ----------
  {
    id: "ab-wheel", name: "Ab Wheel Rollout", kit: "Ab wheel",
    muscles: "Abs, lats",
    cues: ["Tuck the tail, ribs down: hollow first", "Hips and wheel move together", "Only as far as the back stays flat", "Pull back with abs and lats, not the hips"],
    see: "You're a plank on wheels. The plank gets longer, then shorter, and never sags in the middle.",
    setup: ["Kneel on a mat, wheel under the shoulders, arms straight.", "Round the upper back slightly and squeeze the glutes."],
    rep: ["Roll forward, hips travelling with you, arms staying straight.", "Stop just before the lower back wants to arch.", "Pull the wheel back toward the knees keeping the hollow shape."],
    mistakes: ["Lower back sagging", "Hips staying back so only the arms move", "Hips piking back first on the return", "Going further than you can control"],
    warmup: ["A 20-second hollow hold or plank."],
    video: { id: "dakSdrMV98M", by: "Mind Pump TV", len: "2:51" }
  },
  {
    id: "lying-leg-raise", name: "Lying Leg Raise", kit: "Floor",
    muscles: "Lower abs, hip flexors",
    cues: ["Lower back pressed into the floor", "Lower the legs slow", "Stop before the back peels up"],
    see: "There's a grape under your lower back. Squash it for the whole set.",
    setup: ["Lie on your back, legs straight up or slightly bent, hands by your sides or under the hips.", "Flatten the lower back to the floor."],
    rep: ["Lower the legs slowly toward the floor.", "Stop at the point where the lower back is about to lift.", "Raise back up without swinging."],
    mistakes: ["Lower back arching off the floor", "Dropping the legs fast", "Using momentum to swing back up"],
    warmup: ["None needed."],
    video: { id: "JB2oyawG9KI", by: "LIVESTRONG", len: "1:14" }
  },
  {
    id: "farmers-walk", name: "Farmers Walk", kit: "Dumbbells",
    muscles: "Grip, traps, trunk",
    cues: ["Stand tall, shoulders back and down", "Crush the handles", "Short, quick steps"],
    see: "A string pulls the crown of your head to the ceiling while the weights try to pull your arms out of their sockets.",
    setup: ["Deadlift the dumbbells up with a flat back.", "Ribs down, eyes forward."],
    rep: ["Walk with short, quick, even steps.", "Keep the dumbbells still, not swinging or banging the legs.", "Set them down with a hinge, not a rounded back."],
    mistakes: ["Slumping forward or shrugging up", "Long loping strides", "Leaning back", "Rounding to pick up or put down"],
    warmup: ["None needed after deadlifts."],
    video: { id: "X72HhVGAko4", by: "Squat University", len: "1:00" }
  },
  {
    id: "suitcase-carry", name: "Suitcase Carry", kit: "Dumbbell",
    muscles: "Obliques, grip, glutes",
    cues: ["Shoulders level, hips level", "Don't lean away from the weight", "Walk tall and slow"],
    see: "Someone watching from behind shouldn't be able to tell which hand is holding the weight.",
    setup: ["One dumbbell in one hand, picked up with a hinge.", "Free hand relaxed or out to the side."],
    rep: ["Walk steadily, resisting the pull to the loaded side.", "Keep the weight slightly off the leg.", "Switch hands and repeat."],
    mistakes: ["Leaning away from, or toward, the weight", "Hip hiking out to the side", "Rushing"],
    warmup: ["None needed."],
    video: { id: "LJaq4BS7KpE", by: "Squat University", len: "4:55" }
  },

  // ---------- CONDITIONING ----------
  {
    id: "kettlebell-swing", name: "Kettlebell Swing", kit: "Kettlebell",
    muscles: "Glutes, hamstrings, trunk",
    cues: ["Hike it back high between the thighs", "Snap the hips, stand tall like a plank", "Arms are ropes: the bell floats", "Wait for it, then hinge late"],
    see: "You're hiking a rugby ball back to someone behind you, then jumping without leaving the floor.",
    setup: ["Bell a foot in front of you. Hinge, grip, tilt it back toward you.", "Lats on, back flat, shins near vertical."],
    rep: ["Hike the bell back above the knees, forearms against the inner thighs.", "Drive the hips forward hard and squeeze glutes and abs at the top.", "Let the bell float to about chest height. Don't lift it.", "Let it fall and hinge only when the arms reconnect with the ribs."],
    mistakes: ["Squatting it instead of hinging", "Lifting with the arms and shoulders", "Leaning back at the top", "Bell dropping below the knees", "Hinging too early so the bell pulls you forward"],
    warmup: ["10 bodyweight hip hinges, 10 glute bridges, then 5 kettlebell deadlifts and 5 easy swings."],
    video: { id: "LBhaLLc153A", by: "Squat University", len: "3:52" }
  },
  {
    id: "mountain-climber", name: "Mountain Climber", kit: "Floor",
    muscles: "Trunk, hip flexors, shoulders",
    cues: ["Shoulders over wrists", "Hips level: don't pike", "Drive knee to chest, quick feet"],
    see: "You could balance a glass of water on your lower back while your legs sprint underneath.",
    setup: ["High plank, hands under shoulders, body in a straight line."],
    rep: ["Drive one knee toward the chest, then switch quickly.", "Keep the hips at shoulder height and the abs tight.", "Find a rhythm you can hold."],
    mistakes: ["Bum piking up in the air", "Hips bouncing", "Shoulders drifting back behind the hands"],
    warmup: ["None needed."],
    video: { id: "cnyTQDSE884", by: "Well+Good", len: "1:17" }
  },
  {
    id: "ring-push-up", name: "Ring Push Up", kit: "Rings",
    muscles: "Chest, triceps, shoulders, trunk",
    cues: ["Body is a plank: glutes and abs tight", "Rings tight to the ribs at the bottom", "Push up and turn the rings out at the top"],
    see: "The rings want to fly apart. You're squeezing them still, like holding two wobbling plates steady.",
    setup: ["Rings low, about shoulder width. Hands on the rings, arms straight, body in a line.", "Start with the rings turned slightly out, shoulders pressed down."],
    rep: ["Lower with the elbows about 45 degrees and the rings close to the body.", "Go until the hands are beside the chest.", "Press up to a full lockout and turn the rings out."],
    mistakes: ["Hips sagging", "Elbows flaring and rings drifting wide", "Short lockout", "Shoulders shrugged to the ears"],
    warmup: ["5 normal push-ups and a 10-second ring support plank."],
    video: { id: "FRiiZRhapeU", by: "CrossFit", len: "0:43" }
  },
  {
    id: "balance-board", name: "Balance Board Stand", kit: "Balance board",
    muscles: "Ankles, feet, hips",
    cues: ["Soft knees, tall chest", "Eyes on a fixed point ahead", "Small, quiet corrections from the ankles"],
    see: "Your head is still, as if balancing a book. All the work happens quietly below the knees.",
    setup: ["Board near a wall or support the first few times.", "Feet about shoulder width, evenly placed."],
    rep: ["Step on and find the middle.", "Keep the knees slightly bent and weight centred.", "Breathe and let the ankles make small adjustments."],
    mistakes: ["Looking down at your feet", "Locked knees", "Big upper-body lurches to correct"],
    warmup: ["None needed."],
    video: { id: "OYT91K6WwT0", by: "INDO BOARD", len: "2:36" }
  }
];

// day: 0 = Sunday ... 6 = Saturday (matches JavaScript's getDay)
window.DAYS = [
  { id: "mon", day: 1, short: "Mon", title: "OHP, back and arms", items: ["overhead-press", "chest-supported-row", "incline-curl", "lateral-raise", "rear-delt-fly"], extra: { label: "Conditioning", items: ["kettlebell-swing"] } },
  { id: "tue", day: 2, short: "Tue", title: "PT session", note: "Your trainer sets this one. Chest and back one week, legs and core the next.", items: ["bench-press", "lat-pulldown", "db-curl", "back-squat", "box-squat", "deadlift"] },
  { id: "wed", day: 3, short: "Wed", title: "Pull-up volume and core", items: ["banded-pull-up", "flexed-arm-hang", "suitcase-carry", "single-leg-calf-raise", "lying-leg-raise", "negative-pull-up", "scapular-pull-up"] },
  { id: "fri", day: 5, short: "Fri", title: "Pull-up test, squat and legs", items: ["pull-up", "back-squat", "romanian-deadlift", "db-shoulder-press", "single-leg-calf-raise", "split-squat", "ab-wheel"] },
  { id: "sat", day: 6, short: "Sat", title: "Bench, back and arms", items: ["bench-press", "bent-over-row", "dip-negatives", "incline-db-press", "lateral-raise", "overhead-triceps-extension"] },
  { id: "sun", day: 0, short: "Sun", title: "Deadlift and legs", items: ["banded-pull-up", "deadlift", "hip-thrust", "bulgarian-split-squat", "db-curl", "farmers-walk", "hammer-curl"] },
  { id: "cond", day: null, short: "Circuit", title: "Strength circuit", items: ["goblet-squat", "kettlebell-swing", "mountain-climber", "ring-push-up"] },
  { id: "daily", day: null, short: "Daily", title: "Hang and balance", items: ["balance-board", "dead-hang"] }
];

window.SESSION_WARMUP = [
  "3-5 minutes of easy movement to raise your temperature: brisk walk, skipping, or light swings.",
  "Then the specific prep and ramp-up sets listed under the day's main lift.",
  "Accessories after that need at most one light feeler set."
];
