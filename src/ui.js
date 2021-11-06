export default function getInputData(){
    //monday input values
    let mondayMorning = document.getElementById('monday-morning').getAttribute("data-value");
    let mondayMorningActivity = document.getElementById("monday-morning-activity").value;
    let mondayMorningStart = document.getElementById("monday-morning-start").value;
    let mondayMorningEnd = document.getElementById("monday-morning-end").value;
    let mondayEvening = document.getElementById('monday-evening').getAttribute("data-value");
    let mondayEveningActivity = document.getElementById("monday-evening-activity").value;
    let mondayEveningStart = document.getElementById("monday-evening-start").value;
    let mondayEveningEnd = document.getElementById("monday-evening-end").value;
    //tuesday input values
    let tuesdayMorning = document.getElementById('tuesday-morning').getAttribute("data-value");
    let tuesdayMorningActivity = document.getElementById("tuesday-morning-activity").value;
    let tuesdayMorningStart = document.getElementById("tuesday-morning-start").value;
    let tuesdayMorningEnd = document.getElementById("tuesday-morning-end").value;
    let tuesdayEvening = document.getElementById('tuesday-evening').getAttribute("data-value");
    let tuesdayEveningActivity = document.getElementById("tuesday-evening-activity").value;
    let tuesdayEveningStart = document.getElementById("tuesday-evening-start").value;
    let tuesdayEveningEnd = document.getElementById("tuesday-evening-end").value;
    //wednesday input values
    let wednesdayMorning = document.getElementById('wednesday-morning').getAttribute("data-value");
    let wednesdayMorningActivity = document.getElementById("wednesday-morning-activity").value;
    let wednesdayMorningStart = document.getElementById("wednesday-morning-start").value;
    let wednesdayMorningEnd = document.getElementById("wednesday-morning-end").value;
    let wednesdayEvening = document.getElementById('wednesday-evening').getAttribute("data-value");
    let wednesdayEveningActivity = document.getElementById("wednesday-evening-activity").value;
    let wednesdayEveningStart = document.getElementById("wednesday-evening-start").value;
    let wednesdayEveningEnd = document.getElementById("wednesday-evening-end").value;
    //thursday input values
    let thursdayMorning = document.getElementById('thursday-morning').getAttribute("data-value");
    let thursdayMorningActivity = document.getElementById("thursday-morning-activity").value;
    let thursdayMorningStart = document.getElementById("thursday-morning-start").value;
    let thursdayMorningEnd = document.getElementById("thursday-morning-end").value;
    let thursdayEvening = document.getElementById('thursday-evening').getAttribute("data-value");
    let thursdayEveningActivity = document.getElementById("thursday-evening-activity").value;
    let thursdayEveningStart = document.getElementById("thursday-evening-start").value;
    let thursdayEveningEnd = document.getElementById("thursday-evening-end").value;
    //friday input values
    let fridayMorning = document.getElementById('friday-morning').getAttribute("data-value");
    let fridayMorningActivity = document.getElementById("friday-morning-activity").value;
    let fridayMorningStart = document.getElementById("friday-morning-start").value;
    let fridayMorningEnd = document.getElementById("friday-morning-end").value;
    let fridayEvening = document.getElementById('friday-evening').getAttribute("data-value");
    let fridayEveningActivity = document.getElementById("friday-evening-activity").value;
    let fridayEveningStart = document.getElementById("friday-evening-start").value;
    let fridayEveningEnd = document.getElementById("friday-evening-end").value;

    let arr = [];

    //class for creating activity objects
    class Activity {
        constructor(weekday, activity, startTime, endTime) {
            this.weekday = weekday;
            this.activity = activity;
            this.startTime = startTime;
            this.endTime = endTime;
        }
    }

    //instantiating new objects
    const mondayMorningObj = new Activity(mondayMorning, mondayMorningActivity, mondayMorningStart, mondayMorningEnd);
    const mondayEveningObj = new Activity(mondayEvening, mondayEveningActivity, mondayEveningStart, mondayEveningEnd);
    const tuesdayMorningObj = new Activity(tuesdayMorning, tuesdayMorningActivity, tuesdayMorningStart, tuesdayMorningEnd);
    const tuesdayEveningObj = new Activity(tuesdayEvening, tuesdayEveningActivity, tuesdayEveningStart, tuesdayEveningEnd);
    const wednesdayMorningObj = new Activity(wednesdayMorning, wednesdayMorningActivity, wednesdayMorningStart, wednesdayMorningEnd);
    const wednesdayEveningObj = new Activity(wednesdayEvening, wednesdayEveningActivity, wednesdayEveningStart, wednesdayEveningEnd);
    const thursdayMorningObj = new Activity(thursdayMorning, thursdayMorningActivity, thursdayMorningStart, thursdayMorningEnd);
    const thursdayEveningObj = new Activity(thursdayEvening, thursdayEveningActivity, thursdayEveningStart, thursdayEveningEnd);
    const fridayMorningObj = new Activity(fridayMorning, fridayMorningActivity, fridayMorningStart, fridayMorningEnd);
    const fridayEveningObj = new Activity(fridayEvening, fridayEveningActivity, fridayEveningStart, fridayEveningEnd);

    //pushing the objects in an array
    arr.push(mondayMorningObj, mondayEveningObj, tuesdayMorningObj, tuesdayEveningObj, wednesdayMorningObj, wednesdayEveningObj, thursdayMorningObj, thursdayEveningObj, fridayMorningObj, fridayEveningObj);

    return arr;
};

 
