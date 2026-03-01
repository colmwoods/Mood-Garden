function getToday() {
    return new Date().toISOString().split("T")[0];
}


function saveMood(mood, note) {

    let logs =
    JSON.parse(localStorage.getItem("moodLogs")) || [];

    let today = getToday();


    let alreadyLogged =
    logs.find(log => log.date === today);

    if (alreadyLogged) {
        return false;
    }


    let entry = {

        mood: mood,
        note: note,
        date: today

    };


    logs.push(entry);


    localStorage.setItem(
        "moodLogs",
        JSON.stringify(logs)
    );


    addPlant(entry);


    return true;

}



function addPlant(entry){

    let garden =
    JSON.parse(localStorage.getItem("garden")) || [];

    garden.push(entry);

    localStorage.setItem(
        "garden",
        JSON.stringify(garden)
    );

}