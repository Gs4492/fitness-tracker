import type {
  Exercise,
  WorkoutDay,
  TrainingProgram,
} from "../types";

const exercises: { [key: string]: Exercise } = {
  pushup: {
    id: 'pushup',
    name: 'Push-Up',
    targets: ['Chest', 'Triceps', 'Front Shoulders'],
    description: 'Classic bodyweight pressing movement',
    why: 'Builds overall chest mass while improving shoulder stability and pressing strength',
    form: [
      'Hands shoulder-width apart',
      'Body in straight line from head to heels',
      'Lower until chest nearly touches ground',
      'Press back up to start position',
      'Keep elbows about 45 degrees from body',
    ],
    mistakes: [
      'Flaring elbows too wide',
      'Hips sagging or piking up',
      'Partial range of motion',
      'Head dropping down',
    ],
    sets: 4,
    reps: 12,
    tempo: '3-1-1',
    rest: 90,
    easyVariation: 'Incline push-up with hands elevated on bench',
    hardVariation: 'Diamond push-up or archer push-up',
  },
  pullup: {
    id: 'pullup',
    name: 'Resistance Band Pull-Down',
    targets: ['Back', 'Biceps', 'Lats'],
    description: 'Vertical pulling using resistance band',
    why: 'Develops lat width and upper back thickness crucial for V-taper',
    form: [
      'Anchor band overhead',
      'Grip wider than shoulder width',
      'Pull down to chest level',
      'Control the return to start',
      'Feel the stretch in lats at top',
    ],
    mistakes: [
      'Using too much arm instead of back',
      'Not pulling down far enough',
      'Leaning back excessively',
    ],
    sets: 4,
    reps: 12,
    tempo: '2-1-2',
    rest: 90,
    easyVariation: 'Lighter band or higher anchor point',
    hardVariation: 'Darker band or single-arm variations',
  },
  dumbbellBench: {
    id: 'dumbbellBench',
    name: 'Dumbbell Floor Press',
    targets: ['Chest', 'Triceps', 'Shoulders'],
    description: 'Horizontal pressing with dumbbells',
    why: 'Builds chest strength and size with greater range of motion than push-ups',
    form: [
      'Lie on back with knees bent, feet flat',
      'Hold dumbbells at chest level',
      'Press up in controlled manner',
      'Lower until dumbbells are at chest level',
      'Full extension at top',
    ],
    mistakes: [
      'Bouncing the dumbbells',
      'Uneven arm movement',
      'Too much shoulder shrugging',
    ],
    sets: 4,
    reps: 10,
    tempo: '2-0-2',
    rest: 90,
    easyVariation: 'Lighter dumbbells or incline position',
    hardVariation: 'Heavier dumbbells or single-arm variations',
  },
  deadlift: {
    id: 'deadlift',
    name: 'Dumbbell Deadlift',
    targets: ['Back', 'Legs', 'Glutes'],
    description: 'Hip hinge movement with dumbbells',
    why: 'Builds posterior chain strength, improves posture, and engages entire backside',
    form: [
      'Feet hip-width apart',
      'Dumbbells in front of thighs',
      'Hinge at hips, slight knee bend',
      'Keep chest up and back straight',
      'Drive through heels to return',
    ],
    mistakes: [
      'Rounding the back',
      'Letting dumbbells drift away from body',
      'Not hinging enough at hips',
    ],
    sets: 4,
    reps: 10,
    tempo: '2-1-2',
    rest: 120,
    easyVariation: 'Lighter dumbbells',
    hardVariation: 'Heavier dumbbells or trap bar variation',
  },
  dumbbellRow: {
    id: 'dumbbellRow',
    name: 'Dumbbell Row',
    targets: ['Back', 'Biceps', 'Rear Shoulder'],
    description: 'Horizontal pulling movement',
    why: 'Builds back thickness and bicep strength essential for wide back development',
    form: [
      'Hip hinge to 45 degrees',
      'Neutral spine',
      'Elbow drives back',
      'Squeeze back muscles',
      'Control the lower',
    ],
    mistakes: [
      'Using momentum',
      'Not full range of motion',
      'Twisting torso',
    ],
    sets: 4,
    reps: 12,
    tempo: '2-1-2',
    rest: 90,
    easyVariation: 'Lighter dumbbells or single-leg support',
    hardVariation: 'Heavier dumbbells or paused reps',
  },
  dumbbellCurl: {
    id: 'dumbbellCurl',
    name: 'Dumbbell Bicep Curl',
    targets: ['Biceps', 'Forearms'],
    description: 'Vertical arm flexion',
    why: 'Direct bicep isolation for arm size and shape development',
    form: [
      'Stand with dumbbells at sides',
      'Curl up keeping elbows stationary',
      'Full contraction at top',
      'Lower with control',
      'Full stretch at bottom',
    ],
    mistakes: [
      'Elbows moving forward',
      'Partial range of motion',
      'Swinging the dumbbells',
    ],
    sets: 3,
    reps: 12,
    tempo: '2-1-2',
    rest: 60,
    easyVariation: 'Lighter dumbbells',
    hardVariation: 'Heavier dumbbells or single-arm variations',
  },
  dumbellTricepPress: {
    id: 'dumbbellTricepPress',
    name: 'Dumbbell Overhead Tricep Press',
    targets: ['Triceps', 'Shoulders'],
    description: 'Vertical pressing isolation',
    why: 'Triceps make up 2/3 of arm mass and this directly targets the long head',
    form: [
      'Stand with dumbbell overhead',
      'Lower behind head with bent elbows',
      'Press back up fully',
      'Keep elbows pointing forward',
      'Controlled throughout',
    ],
    mistakes: [
      'Elbows flaring out',
      'Partial range of motion',
      'Letting dumbbell drift',
    ],
    sets: 3,
    reps: 12,
    tempo: '2-1-2',
    rest: 60,
    easyVariation: 'Two dumbbells together for easier press',
    hardVariation: 'Single dumbbell variation',
  },
  lateralRaise: {
    id: 'lateralRaise',
    name: 'Dumbbell Lateral Raise',
    targets: ['Lateral Shoulder', 'Upper Back'],
    description: 'Isolation raise for shoulder width',
    why: 'Lateral delts create the width for a V-shaped physique',
    form: [
      'Stand with dumbbells at sides',
      'Slight bend in elbows',
      'Raise to shoulder height',
      'Control the lower',
      'Feel the lateral delt working',
    ],
    mistakes: [
      'Too much momentum',
      'Going above shoulder height',
      'Too heavy weight reducing range',
    ],
    sets: 3,
    reps: 15,
    tempo: '2-1-2',
    rest: 60,
    easyVariation: 'Lighter dumbbells',
    hardVariation: 'Heavier dumbbells or paused reps',
  },
  squats: {
    id: 'squats',
    name: 'Dumbbell Goblet Squat',
    targets: ['Legs', 'Core', 'Glutes'],
    description: 'Lower body vertical pressing',
    why: 'Builds leg strength and athletic power crucial for overall physique and injury prevention',
    form: [
      'Hold dumbbell at chest',
      'Feet shoulder-width apart',
      'Lower into squat',
      'Knees tracking over toes',
      'Drive through heels to stand',
    ],
    mistakes: [
      'Knees caving inward',
      'Leaning too far forward',
      'Not hitting depth',
    ],
    sets: 4,
    reps: 15,
    tempo: '2-1-2',
    rest: 90,
    easyVariation: 'Lighter dumbbell or hold onto support',
    hardVariation: 'Heavier dumbbell or pause at bottom',
  },
  plank: {
    id: 'plank',
    name: 'Plank Hold',
    targets: ['Core', 'Shoulders'],
    description: 'Isometric core strengthening',
    why: 'Anti-extension exercise crucial for visible abs and spinal health',
    form: [
      'Forearms on ground, body in straight line',
      'Engage core',
      'Glutes tight',
      'Breathe steadily',
      'No sagging or piking',
    ],
    mistakes: [
      'Hips sagging down',
      'Hips piking up too high',
      'Holding breath',
    ],
    sets: 3,
    reps: 45,
    tempo: '0-hold-0',
    rest: 60,
    easyVariation: 'Knee plank',
    hardVariation: 'Single-leg plank or plank with movement',
  },
  crunch: {
    id: 'crunch',
    name: 'Dumbbell Weighted Crunch',
    targets: ['Upper Abs', 'Core'],
    description: 'Upper abdominal flexion',
    why: 'Direct upper ab stimulation for visible upper abdominal development',
    form: [
      'Lie on back with knees bent',
      'Hold dumbbell on chest',
      'Crunch up, lifting shoulders',
      'Pause at top',
      'Lower with control',
    ],
    mistakes: [
      'Pulling on neck',
      'Not enough contraction',
      'Too much momentum',
    ],
    sets: 3,
    reps: 15,
    tempo: '1-1-2',
    rest: 45,
    easyVariation: 'Bodyweight crunch',
    hardVariation: 'Dumbbell between hands held higher',
  },
  pushupBarsPushup: {
    id: "pushupBarsPushup",
    name: "Deep Push-Up (Push-Up Bars)",
    targets: ["Chest", "Front Shoulders", "Triceps"],
    description: "Deep range push-up using push-up bars.",
    why: "Your primary chest builder. The deeper stretch creates more muscle stimulus than a normal floor push-up.",
    form: [
      "Grip the push-up bars firmly.",
      "Keep your body straight.",
      "Lower until your chest drops below your hands.",
      "Pause briefly.",
      "Press back up explosively."
    ],
    mistakes: [
      "Half reps.",
      "Sagging hips.",
      "Flaring elbows.",
      "Looking down."
    ],
    sets: 4,
    reps: 10,
    tempo: "3-1-1",
    rest: 90,
    easyVariation: "Incline Push-Up",
    hardVariation: "Band Resisted Push-Up"
  },

  bandChestPress: {
    id: "bandChestPress",
    name: "Resistance Band Chest Press",
    targets: ["Chest", "Front Shoulders", "Triceps"],
    description: "Standing chest press using a resistance band.",
    why: "Adds constant tension to the chest where push-ups become easier.",
    form: [
      "Anchor the band behind you.",
      "Hands at chest height.",
      "Press forward.",
      "Squeeze your chest.",
      "Return slowly."
    ],
    mistakes: [
      "Shoulders shrugging.",
      "Arching the lower back.",
      "Rushing the movement."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Use lighter band",
    hardVariation: "Single-arm press"
  },

  bandChestFly: {
    id: "bandChestFly",
    name: "Resistance Band Chest Fly",
    targets: ["Inner Chest"],
    description: "Chest fly using resistance bands.",
    why: "Improves chest contraction and develops inner chest.",
    form: [
      "Anchor band behind you.",
      "Slight bend in elbows.",
      "Bring hands together.",
      "Squeeze chest.",
      "Return slowly."
    ],
    mistakes: [
      "Straight elbows.",
      "Using momentum.",
      "Shrugging shoulders."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Use lighter band",
    hardVariation: "Slow negative"
  },

  shoulderPress: {
    id: "shoulderPress",
    name: "Standing Dumbbell Shoulder Press",
    targets: ["Front Delts", "Side Delts", "Triceps"],
    description: "Standing overhead dumbbell press.",
    why: "Builds bigger shoulders for a wider V-taper.",
    form: [
      "Stand tall.",
      "Core tight.",
      "Press overhead.",
      "Lower under control."
    ],
    mistakes: [
      "Leaning backward.",
      "Half reps.",
      "Rushing."
    ],
    sets: 3,
    reps: 12,
    tempo: "2-1-2",
    rest: 75,
    easyVariation: "Seated press",
    hardVariation: "Band + Dumbbells"
  },
  bandRow: {
    id: "bandRow",
    name: "Resistance Band Row",
    targets: ["Lats", "Middle Back", "Biceps"],
    description: "Horizontal pulling movement with resistance band.",
    why: "Primary movement for building a thicker back and improving posture.",
    form: [
      "Anchor the band securely.",
      "Keep your chest up.",
      "Pull your elbows back.",
      "Squeeze your shoulder blades.",
      "Return slowly."
    ],
    mistakes: [
      "Shrugging shoulders.",
      "Using momentum.",
      "Not squeezing the back."
    ],
    sets: 4,
    reps: 12,
    tempo: "2-1-2",
    rest: 75,
    easyVariation: "Lighter band",
    hardVariation: "Single-arm row"
  },

  straightArmPulldown: {
    id: "straightArmPulldown",
    name: "Band Straight-Arm Pulldown",
    targets: ["Lats"],
    description: "Isolation movement for the lats.",
    why: "Helps create the V-taper by directly training the lats.",
    form: [
      "Arms almost straight.",
      "Pull toward thighs.",
      "Keep chest up.",
      "Return under control."
    ],
    mistakes: [
      "Bending elbows too much.",
      "Using body swing."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Lighter band",
    hardVariation: "Extra-hard band"
  },

  hammerCurl: {
    id: "hammerCurl",
    name: "Hammer Curl",
    targets: ["Biceps", "Brachialis", "Forearms"],
    description: "Neutral-grip dumbbell curl.",
    why: "Builds thicker upper arms and stronger forearms.",
    form: [
      "Keep palms facing each other.",
      "Elbows stay close.",
      "Lift with control.",
      "Lower slowly."
    ],
    mistakes: [
      "Swinging.",
      "Moving elbows forward."
    ],
    sets: 3,
    reps: 12,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Lighter dumbbells",
    hardVariation: "Slow negatives"
  },

  rearDeltFly: {
    id: "rearDeltFly",
    name: "Bent-Over Rear Delt Fly",
    targets: ["Rear Delts", "Upper Back"],
    description: "Rear shoulder isolation.",
    why: "Improves posture and builds 3D shoulders.",
    form: [
      "Hip hinge.",
      "Slight elbow bend.",
      "Raise to shoulder height.",
      "Control down."
    ],
    mistakes: [
      "Swinging.",
      "Shrugging shoulders."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Lighter dumbbells",
    hardVariation: "Pause at the top"
  },

  deadBug: {
    id: "deadBug",
    name: "Dead Bug",
    targets: ["Core"],
    description: "Core stability exercise.",
    why: "Improves abdominal control and protects the lower back.",
    form: [
      "Keep lower back pressed into the floor.",
      "Move opposite arm and leg slowly.",
      "Return with control."
    ],
    mistakes: [
      "Arching the lower back.",
      "Moving too quickly."
    ],
    sets: 3,
    reps: 12,
    tempo: "Slow",
    rest: 45,
    easyVariation: "Legs only",
    hardVariation: "Hold a band for resistance"
  },
  romanianDeadlift: {
    id: "romanianDeadlift",
    name: "Romanian Deadlift",
    targets: ["Hamstrings", "Glutes", "Lower Back"],
    description: "Hip hinge for posterior chain development.",
    why: "One of the best movements for hamstrings, glutes and athletic power.",
    form: [
      "Keep knees slightly bent.",
      "Push hips backwards.",
      "Keep dumbbells close to legs.",
      "Keep back neutral.",
      "Drive hips forward to stand."
    ],
    mistakes: [
      "Rounding the back.",
      "Turning it into a squat.",
      "Looking down."
    ],
    sets: 4,
    reps: 12,
    tempo: "3-1-1",
    rest: 90,
    easyVariation: "Bodyweight hip hinge",
    hardVariation: "Band + Dumbbells"
  },

  bulgarianSplitSquat: {
    id: "bulgarianSplitSquat",
    name: "Bulgarian Split Squat",
    targets: ["Quads", "Glutes", "Core"],
    description: "Single-leg strength exercise.",
    why: "Builds leg strength, balance and athleticism.",
    form: [
      "Rear foot elevated.",
      "Chest tall.",
      "Front knee over foot.",
      "Lower under control.",
      "Drive through front heel."
    ],
    mistakes: [
      "Leaning forward.",
      "Short range of motion."
    ],
    sets: 3,
    reps: 10,
    tempo: "2-1-2",
    rest: 75,
    easyVariation: "Static Split Squat",
    hardVariation: "Band Resistance"
  },

  walkingLunge: {
    id: "walkingLunge",
    name: "Walking Lunge",
    targets: ["Quads", "Glutes", "Hamstrings"],
    description: "Alternating lunge movement.",
    why: "Improves athletic movement and leg stability.",
    form: [
      "Take a long step.",
      "Lower until both knees are near 90°.",
      "Push into the next step."
    ],
    mistakes: [
      "Short steps.",
      "Knee collapsing inward."
    ],
    sets: 3,
    reps: 12,
    tempo: "Controlled",
    rest: 60,
    easyVariation: "Bodyweight",
    hardVariation: "Hold Dumbbells"
  },

  gluteBridge: {
    id: "gluteBridge",
    name: "Glute Bridge",
    targets: ["Glutes", "Hamstrings"],
    description: "Hip extension exercise.",
    why: "Improves hip power and protects the lower back.",
    form: [
      "Feet flat.",
      "Drive hips upward.",
      "Squeeze glutes.",
      "Lower slowly."
    ],
    mistakes: [
      "Overarching the back.",
      "Not locking out hips."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-2-2",
    rest: 45,
    easyVariation: "Bodyweight",
    hardVariation: "Single-leg"
  },

  calfRaise: {
    id: "calfRaise",
    name: "Standing Calf Raise",
    targets: ["Calves"],
    description: "Calf strengthening exercise.",
    why: "Builds lower leg strength and improves athletic movement.",
    form: [
      "Rise onto toes.",
      "Pause.",
      "Lower slowly."
    ],
    mistakes: [
      "Bouncing.",
      "Half reps."
    ],
    sets: 4,
    reps: 20,
    tempo: "2-1-2",
    rest: 45,
    easyVariation: "Bodyweight",
    hardVariation: "Single-leg"
  },

  mountainClimber: {
    id: "mountainClimber",
    name: "Mountain Climber",
    targets: ["Core", "Hip Flexors", "Shoulders"],
    description: "Core and conditioning movement.",
    why: "Improves conditioning while strengthening the core.",
    form: [
      "Push-up position.",
      "Drive knees forward quickly.",
      "Keep hips low."
    ],
    mistakes: [
      "Hips too high.",
      "Short range."
    ],
    sets: 3,
    reps: 30,
    tempo: "Fast",
    rest: 45,
    easyVariation: "Slow Mountain Climbers",
    hardVariation: "Cross-body Mountain Climbers"
  },
  declinePushup: {
    id: "declinePushup",
    name: "Decline Push-Up",
    targets: ["Upper Chest", "Front Shoulders", "Triceps"],
    description: "Feet elevated push-up.",
    why: "Shifts more work to the upper chest and shoulders to improve chest shape.",
    form: [
      "Place feet on a stable chair or bench.",
      "Hands on push-up bars.",
      "Lower until chest passes hands.",
      "Press back up under control."
    ],
    mistakes: [
      "Hips sagging.",
      "Half reps.",
      "Looking down."
    ],
    sets: 4,
    reps: 8,
    tempo: "3-1-1",
    rest: 90,
    easyVariation: "Regular Push-Up",
    hardVariation: "Band Decline Push-Up"
  },

  pikePushup: {
    id: "pikePushup",
    name: "Pike Push-Up",
    targets: ["Shoulders", "Upper Chest", "Triceps"],
    description: "Bodyweight shoulder press.",
    why: "Builds overhead pressing strength without heavy weights.",
    form: [
      "Hips high.",
      "Head moves toward floor.",
      "Press back up."
    ],
    mistakes: [
      "Body too flat.",
      "Elbows flaring."
    ],
    sets: 3,
    reps: 10,
    tempo: "2-1-2",
    rest: 75,
    easyVariation: "Hands elevated",
    hardVariation: "Feet elevated"
  },

  facePull: {
    id: "facePull",
    name: "Resistance Band Face Pull",
    targets: ["Rear Delts", "Upper Back", "Rotator Cuff"],
    description: "Band face pull.",
    why: "Improves posture and keeps shoulders healthy while balancing chest work.",
    form: [
      "Anchor band at face height.",
      "Pull toward forehead.",
      "Lead with elbows.",
      "Squeeze shoulder blades."
    ],
    mistakes: [
      "Shrugging.",
      "Using momentum."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Lighter band",
    hardVariation: "Extra-hard band"
  },

  sidePlank: {
    id: "sidePlank",
    name: "Side Plank",
    targets: ["Obliques", "Core"],
    description: "Lateral core stability.",
    why: "Strengthens the obliques and improves overall trunk stability.",
    form: [
      "Body in a straight line.",
      "Hips lifted.",
      "Hold steadily."
    ],
    mistakes: [
      "Dropping hips.",
      "Rotating forward."
    ],
    sets: 3,
    reps: 30,
    tempo: "Hold",
    rest: 30,
    easyVariation: "Bent-knee side plank",
    hardVariation: "Raise top leg"
  },
  reverseCurl: {
    id: "reverseCurl",
    name: "Reverse Curl",
    targets: ["Brachialis", "Forearms"],
    description: "Overhand dumbbell curl.",
    why: "Builds thicker forearms and improves overall arm development.",
    form: [
      "Use an overhand grip.",
      "Keep elbows close.",
      "Lift under control.",
      "Lower slowly."
    ],
    mistakes: [
      "Swinging.",
      "Moving elbows."
    ],
    sets: 3,
    reps: 12,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Lighter dumbbells",
    hardVariation: "Slow negatives"
  },

  concentrationCurl: {
    id: "concentrationCurl",
    name: "Concentration Curl",
    targets: ["Biceps"],
    description: "Single-arm bicep isolation.",
    why: "Improves peak contraction and mind-muscle connection.",
    form: [
      "Elbow against inner thigh.",
      "Curl slowly.",
      "Squeeze at the top.",
      "Lower under control."
    ],
    mistakes: [
      "Using momentum.",
      "Rushing."
    ],
    sets: 3,
    reps: 12,
    tempo: "2-1-2",
    rest: 45,
    easyVariation: "Lighter dumbbell",
    hardVariation: "4-second negative"
  },

  birdDog: {
    id: "birdDog",
    name: "Bird Dog",
    targets: ["Core", "Lower Back", "Glutes"],
    description: "Core stability exercise.",
    why: "Improves balance, posture and spinal stability.",
    form: [
      "Extend opposite arm and leg.",
      "Keep hips level.",
      "Pause.",
      "Return slowly."
    ],
    mistakes: [
      "Arching back.",
      "Moving too quickly."
    ],
    sets: 3,
    reps: 10,
    tempo: "Slow",
    rest: 30,
    easyVariation: "Legs only",
    hardVariation: "Hold for 3 seconds"
  },
  reverseCrunch: {
    id: "reverseCrunch",
    name: "Reverse Crunch",
    targets: ["Lower Abs", "Core"],
    description: "Lower abdominal exercise.",
    why: "Targets the lower abdominal muscles while minimizing hip flexor involvement.",
    form: [
      "Lie on your back.",
      "Bring knees toward your chest.",
      "Lift hips slightly off the floor.",
      "Lower slowly."
    ],
    mistakes: [
      "Using momentum.",
      "Swinging the legs.",
      "Not controlling the lowering phase."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 45,
    easyVariation: "Bent-knee reverse crunch",
    hardVariation: "Slow negatives"
  },
  bandOverheadPress: {
    id: "bandOverheadPress",
    name: "Resistance Band Overhead Press",
    targets: ["Front Delts", "Side Delts", "Triceps"],
    description: "Standing overhead press using a resistance band.",
    why: "Provides constant tension throughout the press and builds stronger shoulders.",
    form: [
      "Stand on the resistance band.",
      "Hands at shoulder height.",
      "Press overhead until arms are straight.",
      "Lower slowly under control."
    ],
    mistakes: [
      "Arching the lower back.",
      "Locking elbows aggressively.",
      "Using momentum."
    ],
    sets: 4,
    reps: 12,
    tempo: "2-1-2",
    rest: 75,
    easyVariation: "Use lighter band",
    hardVariation: "Extra-hard band"
  },

  frontRaise: {
    id: "frontRaise",
    name: "Dumbbell Front Raise",
    targets: ["Front Delts"],
    description: "Isolation exercise for the front shoulder.",
    why: "Develops front deltoids to improve shoulder size and pressing strength.",
    form: [
      "Hold dumbbells in front of thighs.",
      "Raise to shoulder height.",
      "Pause briefly.",
      "Lower slowly."
    ],
    mistakes: [
      "Swinging the weights.",
      "Going above shoulder height.",
      "Shrugging shoulders."
    ],
    sets: 3,
    reps: 15,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "One arm at a time",
    hardVariation: "Slow negatives"
  },

  closeGripPushup: {
    id: "closeGripPushup",
    name: "Close-Grip Push-Up",
    targets: ["Triceps", "Inner Chest"],
    description: "Push-up with hands close together.",
    why: "Places greater emphasis on the triceps while still training the chest.",
    form: [
      "Hands slightly narrower than shoulder width.",
      "Keep elbows close to your sides.",
      "Lower until chest nearly touches the floor.",
      "Press back up."
    ],
    mistakes: [
      "Elbows flaring out.",
      "Hips sagging.",
      "Half reps."
    ],
    sets: 3,
    reps: 12,
    tempo: "2-1-2",
    rest: 60,
    easyVariation: "Incline close-grip push-up",
    hardVariation: "Band-resisted close-grip push-up"
  },
  squatJump: {
    id: "squatJump",
    name: "Squat Jump",
    targets: ["Quads", "Glutes", "Calves", "Power"],
    description: "Explosive bodyweight squat.",
    why: "Develops explosive leg power, athleticism and conditioning while improving lower-body coordination.",
    form: [
      "Stand with feet shoulder-width apart.",
      "Lower into a squat.",
      "Explode upward as high as possible.",
      "Land softly with knees slightly bent.",
      "Go straight into the next rep."
    ],
    mistakes: [
      "Landing with stiff knees.",
      "Not squatting deep enough.",
      "Leaning too far forward."
    ],
    sets: 3,
    reps: 12,
    tempo: "Explosive",
    rest: 60,
    easyVariation: "Bodyweight Squat",
    hardVariation: "Band-Resisted Squat Jump"
  },

};

function cloneDays(days: WorkoutDay[]): WorkoutDay[] {
  return structuredClone(days);
}

const week1Days: WorkoutDay[] = [
  {
    id: "week1-day1",
    day: 1,
    name: "Push A",
    focus: "Chest Priority • Shoulders • Triceps",
    duration: 55,

    exercises: [
      exercises.pushupBarsPushup,
      exercises.bandChestPress,
      exercises.dumbbellBench,
      exercises.bandChestFly,
      exercises.lateralRaise,
      exercises.dumbellTricepPress,
    ],

    warmup: [
      "March in place - 60 sec",
      "Arm circles - 20 forward / 20 backward",
      "Band pull-aparts - 2 x 15",
      "Scapular push-ups - 2 x 10",
      "World's Greatest Stretch - 5 each side",
      "Bodyweight squats - 15 reps",
    ],

    cooldown: [
      "Doorway chest stretch - 45 sec",
      "Shoulder stretch - 45 sec",
      "Triceps stretch - 45 sec",
      "Child's pose - 60 sec",
      "Deep breathing - 2 min",
    ],
  },

  {
    id: "week1-day2",
    day: 2,
    name: "Pull A",
    focus: "Back Width • Back Thickness • Biceps",
    duration: 55,

    exercises: [
      exercises.pullup,
      exercises.dumbbellRow,
      exercises.straightArmPulldown,
      exercises.facePull,
      exercises.dumbbellCurl,
      exercises.hammerCurl,
    ],

    warmup: [
      "March in place - 60 sec",
      "Band pull-aparts - 2 x 15",
      "Arm circles - 20 each direction",
      "Cat-Cow - 10 reps",
      "Scapular Retractions - 15 reps",
      "Shoulder Rolls - 15 reps",
    ],

    cooldown: [
      "Lat Stretch - 45 sec",
      "Biceps Stretch - 45 sec",
      "Upper Back Stretch - 45 sec",
      "Child's Pose - 60 sec",
      "Deep Breathing - 2 min",
    ],
  },
  {
    id: "week1-day3",
    day: 3,
    name: "Legs A",
    focus: "Leg Strength • Athleticism • Core",
    duration: 55,

    exercises: [
      exercises.squats,
      exercises.bulgarianSplitSquat,
      exercises.romanianDeadlift,
      exercises.calfRaise,
      exercises.plank,
      exercises.reverseCrunch,
      exercises.deadBug,
    ],

    warmup: [
      "March in place - 60 sec",
      "Hip circles - 15 each direction",
      "Leg swings - 15 each leg",
      "Bodyweight squats - 15 reps",
      "Walking lunges - 10 each leg",
      "Glute bridges - 15 reps",
    ],

    cooldown: [
      "Standing hamstring stretch - 45 sec",
      "Quad stretch - 45 sec",
      "Hip flexor stretch - 45 sec",
      "Calf stretch - 45 sec",
      "Child's pose - 60 sec",
      "Deep breathing - 2 min",
    ],
  },
  {
    id: "week1-day4",
    day: 4,
    name: "Push B",
    focus: "Upper Chest • Shoulders • Triceps",
    duration: 55,

    exercises: [
      exercises.declinePushup,
      exercises.bandOverheadPress,
      exercises.lateralRaise,
      exercises.frontRaise,
      exercises.facePull,
      exercises.closeGripPushup,
    ],

    warmup: [
      "March in place - 60 sec",
      "Band pull-aparts - 2 x 15",
      "Arm circles - 20 each direction",
      "Scapular push-ups - 15 reps",
      "World's Greatest Stretch - 5 each side",
      "Shoulder mobility - 60 sec",
    ],

    cooldown: [
      "Doorway chest stretch - 45 sec",
      "Cross-body shoulder stretch - 45 sec",
      "Triceps stretch - 45 sec",
      "Child's Pose - 60 sec",
      "Deep breathing - 2 min",
    ],
  },
  {
    id: "week1-day5",
    day: 5,
    name: "Pull B",
    focus: "Back Thickness • Rear Delts • Arms",
    duration: 55,

    exercises: [
      exercises.pullup,
      exercises.dumbbellRow,
      exercises.facePull,
      exercises.rearDeltFly,
      exercises.reverseCurl,
      exercises.hammerCurl,
    ],

    warmup: [
      "March in place - 60 sec",
      "Band pull-aparts - 2 x 15",
      "Arm circles - 20 each direction",
      "Cat-Cow - 10 reps",
      "Shoulder rolls - 15 reps",
      "Scapular retractions - 15 reps",
    ],

    cooldown: [
      "Lat stretch - 45 sec",
      "Biceps stretch - 45 sec",
      "Upper back stretch - 45 sec",
      "Child's Pose - 60 sec",
      "Deep breathing - 2 min",
    ],
  },
  {
    id: "week1-day6",
    day: 6,
    name: "Legs B",
    focus: "Athletic Legs • Conditioning • Core",
    duration: 55,

    exercises: [
      exercises.squats,
      exercises.romanianDeadlift,
      exercises.walkingLunge,
      exercises.squatJump,
      exercises.calfRaise,
      exercises.sidePlank,
    ],

    warmup: [
      "March in place - 60 sec",
      "Hip circles - 15 each direction",
      "Leg swings - 15 each leg",
      "Bodyweight squats - 15 reps",
      "Walking lunges - 10 each leg",
      "Glute bridges - 15 reps",
    ],

    cooldown: [
      "Hamstring stretch - 45 sec",
      "Quad stretch - 45 sec",
      "Hip flexor stretch - 45 sec",
      "Calf stretch - 45 sec",
      "Figure-4 glute stretch - 45 sec",
      "Deep breathing - 2 min",
    ],
  },
];

const week2Days = cloneDays(week1Days);

// ----------------------
// Week 2 Progression
// ----------------------

week2Days.forEach((day) => {
  day.exercises.forEach((exercise) => {

    // Increase reps on almost every exercise
    if (
      exercise.reps &&
      exercise.name !== "Plank Hold" &&
      exercise.name !== "Side Plank"
    ) {
      exercise.reps += 2;
    }

  });
});

const week3Days = cloneDays(week2Days);

// ----------------------
// Week 3 Progression
// ----------------------

week3Days.forEach((day) => {
  day.exercises.forEach((exercise) => {

    // Add one set to the main compound lifts
    if (
      [
        "Deep Push-Up (Push-Up Bars)",
        "Resistance Band Pull-Down",
        "Dumbbell Goblet Squat",
        "Dumbbell Floor Press",
        "Dumbbell Row",
        "Romanian Deadlift",
        "Decline Push-Up",
      ].includes(exercise.name)
    ) {
      if (exercise.sets) {
        exercise.sets += 1;
      }
    }

  });
});

const week4Days = cloneDays(week3Days);

// ----------------------
// Week 4 Progression
// ----------------------

week4Days.forEach((day) => {
  day.exercises.forEach((exercise) => {

    // Slower tempo for more time under tension
    exercise.tempo = "4-1-2";

    // Reduce rest slightly (don't go below 30 sec)
    if (exercise.rest) {
      exercise.rest = Math.max(30, exercise.rest - 15);
    }

  });
});

const week5Days = cloneDays(week4Days);

// ----------------------
// Week 5 Progression
// ----------------------

week5Days.forEach((day) => {
  day.exercises = day.exercises.map((exercise) => {

    switch (exercise.id) {

      case "pushupBarsPushup":
        return {
          ...exercise,
          name: "Band Resisted Push-Up",
          reps: 10,
          sets: 4,
          why:
            "Added resistance builds significantly more chest and triceps strength.",
        };

      case "romanianDeadlift":
        return {
          ...exercise,
          name: "Single-Leg Romanian Deadlift",
          reps: 10,
          sets: 4,
          why:
            "Improves balance while increasing hamstring and glute activation.",
        };

      case "plank":
        return {
          ...exercise,
          name: "Plank Shoulder Taps",
          reps: 20,
          why:
            "Adds anti-rotation strength and greater core stability.",
        };

      default:
        return exercise;
    }

  });
});

const trainingProgram: TrainingProgram = {
  name: '12-Week Home Body Recomposition',
  duration: 12,
  weeks: [
    {
      week: 1,
      days: week1Days,
    },
    {
      week: 2,
      days: week2Days,
    },
    {
      week: 3,
      days: week3Days,
    },
    {
      week: 4,
      days: week4Days,
    },
    {
      week: 5,
      days: week5Days,
    },
  ],

};

export const programData = trainingProgram;
export const exercisesData = exercises;
