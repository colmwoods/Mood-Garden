export function loadAnalytics() {

    let logs =
    JSON.parse(localStorage.getItem("moodLogs")) || [];


    /* TOTAL ENTRIES */

    const totalEntries = logs.length;



    /* HAPPY DAYS */

    let happyCount = 0;

    logs.forEach(log => {

        if(log.mood === "happy"){
            happyCount++;
        }

    });

    const happyPercent =
    totalEntries === 0
    ? 0
    : Math.round((happyCount / totalEntries) * 100);



    /* DAY STREAK */

    let streak = 0;

    const dates =
    logs.map(l => new Date(l.date))
        .sort((a,b)=>b-a);


    let today =
    new Date();


    for(let i=0;i<dates.length;i++){

        const diff =
        Math.floor(
        (today - dates[i])
        / (1000*60*60*24)
        );

        if(diff === streak){
            streak++;
        }
        else{
            break;
        }

    }



    /* UPDATE UI */

    const stats =
    document.querySelectorAll(
    "#page-analytics .text-2xl.font-bold"
    );

    if(stats.length >= 3){

        stats[0].innerText =
        happyPercent + "%";

        stats[1].innerText =
        streak;

        stats[2].innerText =
        totalEntries;

    }

}