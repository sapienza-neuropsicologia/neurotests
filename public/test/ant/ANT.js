/************ 
 * Ant *
 ************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ANT';  // from the Builder filename that created this script
let expInfo = {
    'Età': '',
    'Sesso': '',
    'Anni di istruzione': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(PracInstrucRoutineBegin());
flowScheduler.add(PracInstrucRoutineEachFrame());
flowScheduler.add(PracInstrucRoutineEnd());
const pracLoop1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pracLoop1LoopBegin(pracLoop1LoopScheduler));
flowScheduler.add(pracLoop1LoopScheduler);
flowScheduler.add(pracLoop1LoopEnd);




flowScheduler.add(MainInstrucRoutineBegin());
flowScheduler.add(MainInstrucRoutineEachFrame());
flowScheduler.add(MainInstrucRoutineEnd());
const blockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopLoopBegin(blockLoopLoopScheduler));
flowScheduler.add(blockLoopLoopScheduler);
flowScheduler.add(blockLoopLoopEnd);







flowScheduler.add(quitPsychoJS, 'Il test è concluso', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'cond.csv', 'path': 'cond.csv'},
    {'name': 'stim/upper.png', 'path': 'stim/upper.png'},
    {'name': 'stim/congLeft.png', 'path': 'stim/congLeft.png'},
    {'name': 'stim/both.png', 'path': 'stim/both.png'},
    {'name': 'stim/centre.png', 'path': 'stim/centre.png'},
    {'name': 'stim/blank.png', 'path': 'stim/blank.png'},
    {'name': 'stim/lower.png', 'path': 'stim/lower.png'},
    {'name': 'stim/congRight.png', 'path': 'stim/congRight.png'},
    {'name': 'stim/incongLeft.png', 'path': 'stim/incongLeft.png'},
    {'name': 'stim/incongRight.png', 'path': 'stim/incongRight.png'},
    {'name': 'stim/neutralLeft.png', 'path': 'stim/neutralLeft.png'},
    {'name': 'stim/neutralRight.png', 'path': 'stim/neutralRight.png'},
    {'name': 'cond.csv', 'path': 'cond.csv'},
    {'name': 'stim/upper.png', 'path': 'stim/upper.png'},
    {'name': 'stim/congLeft.png', 'path': 'stim/congLeft.png'},
    {'name': 'stim/both.png', 'path': 'stim/both.png'},
    {'name': 'stim/centre.png', 'path': 'stim/centre.png'},
    {'name': 'stim/blank.png', 'path': 'stim/blank.png'},
    {'name': 'stim/lower.png', 'path': 'stim/lower.png'},
    {'name': 'stim/congRight.png', 'path': 'stim/congRight.png'},
    {'name': 'stim/incongLeft.png', 'path': 'stim/incongLeft.png'},
    {'name': 'stim/incongRight.png', 'path': 'stim/incongRight.png'},
    {'name': 'stim/neutralLeft.png', 'path': 'stim/neutralLeft.png'},
    {'name': 'stim/neutralRight.png', 'path': 'stim/neutralRight.png'},
    {'name': 'stim/fix.png', 'path': 'stim/fix.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var PracInstrucClock;
var pracText1;
var pracResp1;
var fixation1Clock;
var fixDuration;
var image_2;
var trial1Clock;
var cues_2;
var target_2;
var resp_2;
var fixationshort_2;
var feedback1Clock;
var text_2;
var MainInstrucClock;
var mainInst;
var instResp;
var fixationClock;
var image;
var trialClock;
var cues;
var target;
var resp;
var fixationshort;
var fix2Clock;
var posttargetfix;
var fix_post_tar;
var RestClock;
var rest;
var restResp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "PracInstruc"
  PracInstrucClock = new util.Clock();
  pracText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracText1',
    text: "Quando sei pronto per iniziare con un po' di pratica, premi un tasto.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  pracResp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation1"
  fixation1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  fixDuration = 0.4;
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'height', 
    image : 'stim/fix.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial1"
  trial1Clock = new util.Clock();
  cues_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cues_2', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  target_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target_2', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixationshort_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fixationshort_2', units : 'height', 
    image : 'stim/fix.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "feedback1"
  feedback1Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: ' ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "MainInstruc"
  MainInstrucClock = new util.Clock();
  mainInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'mainInst',
    text: 'La prova è terminata. Adesso comincerà il test vero e proprio, che sarà diviso in tre blocchi di circa 4 minuti ciascuno.\n\nIl compito sarà lo stesso di prima, ma da ora in poi non ti verrà più comunicato sei hai sbagliato o no.\n\n\nPremi un tasto per cominciare.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  fixDuration = 0.4;
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'height', 
    image : 'stim/fix.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  cues = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cues', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixationshort = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fixationshort', units : 'height', 
    image : 'stim/fix.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "fix2"
  fix2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  posttargetfix = 0.2;
  
  fix_post_tar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fix_post_tar', units : 'height', 
    image : 'stim/fix.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Rest"
  RestClock = new util.Clock();
  rest = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  restResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _pracResp1_allKeys;
var PracInstrucComponents;
function PracInstrucRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PracInstruc' ---
    t = 0;
    PracInstrucClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('PracInstruc.started', globalClock.getTime());
    pracResp1.keys = undefined;
    pracResp1.rt = undefined;
    _pracResp1_allKeys = [];
    // keep track of which components have finished
    PracInstrucComponents = [];
    PracInstrucComponents.push(pracText1);
    PracInstrucComponents.push(pracResp1);
    
    for (const thisComponent of PracInstrucComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PracInstrucRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PracInstruc' ---
    // get current time
    t = PracInstrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracText1* updates
    if (t >= 0.0 && pracText1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracText1.tStart = t;  // (not accounting for frame time here)
      pracText1.frameNStart = frameN;  // exact frame index
      
      pracText1.setAutoDraw(true);
    }
    
    
    // *pracResp1* updates
    if (t >= 0.0 && pracResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracResp1.tStart = t;  // (not accounting for frame time here)
      pracResp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracResp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracResp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracResp1.clearEvents(); });
    }
    
    if (pracResp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracResp1.getKeys({keyList: [], waitRelease: false});
      _pracResp1_allKeys = _pracResp1_allKeys.concat(theseKeys);
      if (_pracResp1_allKeys.length > 0) {
        pracResp1.keys = _pracResp1_allKeys[_pracResp1_allKeys.length - 1].name;  // just the last key pressed
        pracResp1.rt = _pracResp1_allKeys[_pracResp1_allKeys.length - 1].rt;
        pracResp1.duration = _pracResp1_allKeys[_pracResp1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PracInstrucComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracInstrucRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PracInstruc' ---
    for (const thisComponent of PracInstrucComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PracInstruc.stopped', globalClock.getTime());
    pracResp1.stop();
    // the Routine "PracInstruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pracLoop1;
function pracLoop1LoopBegin(pracLoop1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pracLoop1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'cond.csv', '0:24'),
      seed: undefined, name: 'pracLoop1'
    });
    psychoJS.experiment.addLoop(pracLoop1); // add the loop to the experiment
    currentLoop = pracLoop1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracLoop1 of pracLoop1) {
      snapshot = pracLoop1.getSnapshot();
      pracLoop1LoopScheduler.add(importConditions(snapshot));
      pracLoop1LoopScheduler.add(fixation1RoutineBegin(snapshot));
      pracLoop1LoopScheduler.add(fixation1RoutineEachFrame());
      pracLoop1LoopScheduler.add(fixation1RoutineEnd(snapshot));
      pracLoop1LoopScheduler.add(trial1RoutineBegin(snapshot));
      pracLoop1LoopScheduler.add(trial1RoutineEachFrame());
      pracLoop1LoopScheduler.add(trial1RoutineEnd(snapshot));
      pracLoop1LoopScheduler.add(feedback1RoutineBegin(snapshot));
      pracLoop1LoopScheduler.add(feedback1RoutineEachFrame());
      pracLoop1LoopScheduler.add(feedback1RoutineEnd(snapshot));
      pracLoop1LoopScheduler.add(pracLoop1LoopEndIteration(pracLoop1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function pracLoop1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pracLoop1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pracLoop1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blockLoop;
function blockLoopLoopBegin(blockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blockLoop'
    });
    psychoJS.experiment.addLoop(blockLoop); // add the loop to the experiment
    currentLoop = blockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlockLoop of blockLoop) {
      snapshot = blockLoop.getSnapshot();
      blockLoopLoopScheduler.add(importConditions(snapshot));
      const mainLoopLoopScheduler = new Scheduler(psychoJS);
      blockLoopLoopScheduler.add(mainLoopLoopBegin(mainLoopLoopScheduler, snapshot));
      blockLoopLoopScheduler.add(mainLoopLoopScheduler);
      blockLoopLoopScheduler.add(mainLoopLoopEnd);
      blockLoopLoopScheduler.add(RestRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(RestRoutineEachFrame());
      blockLoopLoopScheduler.add(RestRoutineEnd(snapshot));
      blockLoopLoopScheduler.add(blockLoopLoopEndIteration(blockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var mainLoop;
function mainLoopLoopBegin(mainLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mainLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond.csv',
      seed: undefined, name: 'mainLoop'
    });
    psychoJS.experiment.addLoop(mainLoop); // add the loop to the experiment
    currentLoop = mainLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMainLoop of mainLoop) {
      snapshot = mainLoop.getSnapshot();
      mainLoopLoopScheduler.add(importConditions(snapshot));
      mainLoopLoopScheduler.add(fixationRoutineBegin(snapshot));
      mainLoopLoopScheduler.add(fixationRoutineEachFrame());
      mainLoopLoopScheduler.add(fixationRoutineEnd(snapshot));
      mainLoopLoopScheduler.add(trialRoutineBegin(snapshot));
      mainLoopLoopScheduler.add(trialRoutineEachFrame());
      mainLoopLoopScheduler.add(trialRoutineEnd(snapshot));
      mainLoopLoopScheduler.add(fix2RoutineBegin(snapshot));
      mainLoopLoopScheduler.add(fix2RoutineEachFrame());
      mainLoopLoopScheduler.add(fix2RoutineEnd(snapshot));
      mainLoopLoopScheduler.add(mainLoopLoopEndIteration(mainLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mainLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mainLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mainLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blockLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var durations;
var i;
var step;
var fixation1Components;
function fixation1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation1' ---
    t = 0;
    fixation1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    fixDuration  = .4;
    durations = [];
    i=.4;
    step = .05;
    
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    while(i<=.6) {
        durations.push(i)
        i = i + step;
    }
    
    durations = shuffle(durations);
    fixDuration  = durations[0]; // Take one of the randomized durations
    
    // keep track of which components have finished
    fixation1Components = [];
    fixation1Components.push(image_2);
    
    for (const thisComponent of fixation1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation1' ---
    // get current time
    t = fixation1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + fixDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation1' ---
    for (const thisComponent of fixation1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation1.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    psychoJS.experiment.addData("fixFuration", fixDuration);
    
    // the Routine "fixation1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_2_allKeys;
var trial1Components;
function trial1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial1' ---
    t = 0;
    trial1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.200000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial1.started', globalClock.getTime());
    cues_2.setImage(cueimg);
    target_2.setOri(targOrientation);
    target_2.setImage(targetimg);
    resp_2.keys = undefined;
    resp_2.rt = undefined;
    _resp_2_allKeys = [];
    // keep track of which components have finished
    trial1Components = [];
    trial1Components.push(cues_2);
    trial1Components.push(target_2);
    trial1Components.push(resp_2);
    trial1Components.push(fixationshort_2);
    
    for (const thisComponent of trial1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial1' ---
    // get current time
    t = trial1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cues_2* updates
    if (t >= 0 && cues_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cues_2.tStart = t;  // (not accounting for frame time here)
      cues_2.frameNStart = frameN;  // exact frame index
      
      cues_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cues_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cues_2.setAutoDraw(false);
    }
    
    
    // *target_2* updates
    if (t >= 0.5 && target_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_2.tStart = t;  // (not accounting for frame time here)
      target_2.frameNStart = frameN;  // exact frame index
      
      target_2.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_2.setAutoDraw(false);
    }
    
    
    // *resp_2* updates
    if (t >= 0.5 && resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2.tStart = t;  // (not accounting for frame time here)
      resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_2.clearEvents(); });
    }
    
    frameRemains = 0.5 + 1.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_2_allKeys = _resp_2_allKeys.concat(theseKeys);
      if (_resp_2_allKeys.length > 0) {
        resp_2.keys = _resp_2_allKeys[0].name;  // just the first key pressed
        resp_2.rt = _resp_2_allKeys[0].rt;
        resp_2.duration = _resp_2_allKeys[0].duration;
        // was this correct?
        if (resp_2.keys == corrAns) {
            resp_2.corr = 1;
        } else {
            resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixationshort_2* updates
    if (t >= 0.0 && fixationshort_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationshort_2.tStart = t;  // (not accounting for frame time here)
      fixationshort_2.frameNStart = frameN;  // exact frame index
      
      fixationshort_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationshort_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationshort_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial1' ---
    for (const thisComponent of trial1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp_2.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         resp_2.corr = 1;  // correct non-response
      } else {
         resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_2.corr, level);
    }
    psychoJS.experiment.addData('resp_2.keys', resp_2.keys);
    psychoJS.experiment.addData('resp_2.corr', resp_2.corr);
    if (typeof resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_2.rt', resp_2.rt);
        psychoJS.experiment.addData('resp_2.duration', resp_2.duration);
        routineTimer.reset();
        }
    
    resp_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var msg;
var feedback1Components;
function feedback1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback1' ---
    t = 0;
    feedback1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    msg = "";
    if (resp_2.corr) {
        msg = "Giusto!";
    } else {
        if ((! resp_2.corr)) {
            msg = "Sbagliato!";
        }
    }
    text_2.setText(msg);
    
    // keep track of which components have finished
    feedback1Components = [];
    feedback1Components.push(text_2);
    
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback1' ---
    // get current time
    t = feedback1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback1' ---
    for (const thisComponent of feedback1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback1.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instResp_allKeys;
var MainInstrucComponents;
function MainInstrucRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MainInstruc' ---
    t = 0;
    MainInstrucClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('MainInstruc.started', globalClock.getTime());
    instResp.keys = undefined;
    instResp.rt = undefined;
    _instResp_allKeys = [];
    // keep track of which components have finished
    MainInstrucComponents = [];
    MainInstrucComponents.push(mainInst);
    MainInstrucComponents.push(instResp);
    
    for (const thisComponent of MainInstrucComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MainInstrucRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MainInstruc' ---
    // get current time
    t = MainInstrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mainInst* updates
    if (t >= 0.0 && mainInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainInst.tStart = t;  // (not accounting for frame time here)
      mainInst.frameNStart = frameN;  // exact frame index
      
      mainInst.setAutoDraw(true);
    }
    
    
    // *instResp* updates
    if (t >= 0.0 && instResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instResp.tStart = t;  // (not accounting for frame time here)
      instResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instResp.clearEvents(); });
    }
    
    if (instResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instResp.getKeys({keyList: [], waitRelease: false});
      _instResp_allKeys = _instResp_allKeys.concat(theseKeys);
      if (_instResp_allKeys.length > 0) {
        instResp.keys = _instResp_allKeys[_instResp_allKeys.length - 1].name;  // just the last key pressed
        instResp.rt = _instResp_allKeys[_instResp_allKeys.length - 1].rt;
        instResp.duration = _instResp_allKeys[_instResp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MainInstrucComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MainInstrucRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MainInstruc' ---
    for (const thisComponent of MainInstrucComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('MainInstruc.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instResp.corr, level);
    }
    psychoJS.experiment.addData('instResp.keys', instResp.keys);
    if (typeof instResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instResp.rt', instResp.rt);
        psychoJS.experiment.addData('instResp.duration', instResp.duration);
        routineTimer.reset();
        }
    
    instResp.stop();
    // the Routine "MainInstruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    fixDuration  = .4;
    durations = [];
    i=.4;
    step = .2;
    
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    while(i<=1.6) {
        durations.push(i)
        i = i + step;
    }
    
    durations = shuffle(durations);
    fixDuration  = durations[0]; // Take one of the randomized durations
    
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(image);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + fixDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    psychoJS.experiment.addData("fixDuration", fixDuration);
    
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.200000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    cues.setImage(cueimg);
    target.setOri(targOrientation);
    target.setImage(targetimg);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(cues);
    trialComponents.push(target);
    trialComponents.push(resp);
    trialComponents.push(fixationshort);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cues* updates
    if (t >= 0 && cues.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cues.tStart = t;  // (not accounting for frame time here)
      cues.frameNStart = frameN;  // exact frame index
      
      cues.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cues.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cues.setAutoDraw(false);
    }
    
    
    // *target* updates
    if (t >= 0.5 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target.setAutoDraw(false);
    }
    
    
    // *resp* updates
    if (t >= 0.5 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    frameRemains = 0.5 + 1.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[0].name;  // just the first key pressed
        resp.rt = _resp_allKeys[0].rt;
        resp.duration = _resp_allKeys[0].duration;
        // was this correct?
        if (resp.keys == corrAns) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixationshort* updates
    if (t >= 0.0 && fixationshort.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationshort.tStart = t;  // (not accounting for frame time here)
      fixationshort.frameNStart = frameN;  // exact frame index
      
      fixationshort.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationshort.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationshort.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        routineTimer.reset();
        }
    
    resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix2Components;
function fix2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix2' ---
    t = 0;
    fix2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    if ((resp.keys === null)) {
        resp.rt = 0;
    }
    posttargetfix = (1.7 - fixDuration);
    
    // keep track of which components have finished
    fix2Components = [];
    fix2Components.push(fix_post_tar);
    
    for (const thisComponent of fix2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fix2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix2' ---
    // get current time
    t = fix2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_post_tar* updates
    if (t >= 0.0 && fix_post_tar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_post_tar.tStart = t;  // (not accounting for frame time here)
      fix_post_tar.frameNStart = frameN;  // exact frame index
      
      fix_post_tar.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + posttargetfix - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_post_tar.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_post_tar.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix2' ---
    for (const thisComponent of fix2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fix2.stopped', globalClock.getTime());
    // the Routine "fix2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _restResp_allKeys;
var RestComponents;
function RestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Rest' ---
    t = 0;
    RestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Rest.started', globalClock.getTime());
    restResp.keys = undefined;
    restResp.rt = undefined;
    _restResp_allKeys = [];
    // Run 'Begin Routine' code from code_6
    if ((blockLoop.thisN === 2)) {
        rest.setText("Il test \u00e8 terminato. Premi un tasto per uscire.");
    } else {
        rest.setText("Possiamo fare una pausa. Premi un tasto quando vuoi cominciare il prossimo blocco.");
    }
    
    // keep track of which components have finished
    RestComponents = [];
    RestComponents.push(rest);
    RestComponents.push(restResp);
    
    for (const thisComponent of RestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Rest' ---
    // get current time
    t = RestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rest* updates
    if (t >= 0.0 && rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest.tStart = t;  // (not accounting for frame time here)
      rest.frameNStart = frameN;  // exact frame index
      
      rest.setAutoDraw(true);
    }
    
    
    // *restResp* updates
    if (t >= 0.0 && restResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restResp.tStart = t;  // (not accounting for frame time here)
      restResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { restResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { restResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { restResp.clearEvents(); });
    }
    
    if (restResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = restResp.getKeys({keyList: [], waitRelease: false});
      _restResp_allKeys = _restResp_allKeys.concat(theseKeys);
      if (_restResp_allKeys.length > 0) {
        restResp.keys = _restResp_allKeys[_restResp_allKeys.length - 1].name;  // just the last key pressed
        restResp.rt = _restResp_allKeys[_restResp_allKeys.length - 1].rt;
        restResp.duration = _restResp_allKeys[_restResp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Rest' ---
    for (const thisComponent of RestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Rest.stopped', globalClock.getTime());
    restResp.stop();
    // the Routine "Rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
