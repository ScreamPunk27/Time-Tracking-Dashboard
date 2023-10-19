const time=document.querySelectorAll('.time');
const day=document.getElementById('day-a');
const week=document.getElementById('week-a');
const month=document.getElementById('month-a');

const a=document.querySelectorAll('a');

a.forEach((enlace)=>{
    enlace.addEventListener('click',()=>{
        getDate(enlace);
    })
})

const defaultScreen = ()=>{
    fetch('data.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        getDay(data);
     
    })
}


const getDate = (enlace) =>{
    fetch('data.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        (enlace.textContent==='Daily')
        ? getDay(data)
        : (enlace.textContent==='Weekly')
        ? getWeek(data)
        : (enlace.textContent==='Monthly')
        ? getMonth(data)
        : null
    })
}

const getDay = (data)=>{

    time.forEach((day)=>{
        day.textContent="Day";
    });

    day.style.color="#fff";
    week.style.color="var(--desaturatedBlue)";
    month.style.color="var(--desaturatedBlue)";

    day.addEventListener('mouseover',()=>{
        day.style.color="#fff";
    })
    
    day.addEventListener('mouseout',()=>{
        day.style.color="#fff";
    })

    week.addEventListener('mouseover',()=>{
        week.style.color="#fff";
    })
    
    week.addEventListener('mouseout',()=>{
        week.style.color="var(--desaturatedBlue)";
    })

    month.addEventListener('mouseover',()=>{
        month.style.color="#fff";
    })
    
    month.addEventListener('mouseout',()=>{
        month.style.color="var(--desaturatedBlue)";
    })

    /*WORK*/
    document.getElementById('hrs-work').textContent=data[0].timeframes.daily.current;
    document.getElementById('lasthrs-work').textContent=data[0].timeframes.daily.previous;

    /*PLAY*/
    document.getElementById('hrs-play').textContent=data[1].timeframes.daily.current;
    document.getElementById('lasthrs-play').textContent=data[1].timeframes.daily.previous;

    /*STUDY*/
    document.getElementById('hrs-study').textContent=data[2].timeframes.daily.current;
    document.getElementById('lasthrs-study').textContent=data[2].timeframes.daily.previous;

     /*EXERCISE */
     document.getElementById('hrs-exercise').textContent=data[3].timeframes.daily.current;
     document.getElementById('lasthrs-exercise').textContent=data[3].timeframes.daily.previous;

     /*SOCIAL*/
     document.getElementById('hrs-social').textContent=data[4].timeframes.daily.current;
     document.getElementById('lasthrs-social').textContent=data[4].timeframes.daily.previous;

     /*SELF CARE*/
     document.getElementById('hrs-self').textContent=data[5].timeframes.daily.current;
     document.getElementById('lasthrs-self').textContent=data[5].timeframes.daily.previous;
}

const getWeek = (data)=>{

    time.forEach((week)=>{
        week.textContent="Week";
    });

    day.style.color="var(--desaturatedBlue)";
    week.style.color="#fff";
    month.style.color="var(--desaturatedBlue)";

    day.addEventListener('mouseover',()=>{
        day.style.color="#fff";
    })
    
    day.addEventListener('mouseout',()=>{
        day.style.color="var(--desaturatedBlue)";
    })

    week.addEventListener('mouseover',()=>{
        week.style.color="#fff";
    })
    
    week.addEventListener('mouseout',()=>{
        week.style.color="#fff";
    })

    month.addEventListener('mouseover',()=>{
        month.style.color="#fff";
    })
    
    month.addEventListener('mouseout',()=>{
        month.style.color="var(--desaturatedBlue)";
    })

    /*WORK*/
    document.getElementById('hrs-work').textContent=data[0].timeframes.weekly.current;
    document.getElementById('lasthrs-work').textContent=data[0].timeframes.weekly.previous;

    /*PLAY*/
    document.getElementById('hrs-play').textContent=data[1].timeframes.weekly.current;
    document.getElementById('lasthrs-play').textContent=data[1].timeframes.weekly.previous;

    /*STUDY*/
    document.getElementById('hrs-study').textContent=data[2].timeframes.weekly.current;
    document.getElementById('lasthrs-study').textContent=data[2].timeframes.weekly.previous;

     /*EXERCISE */
     document.getElementById('hrs-exercise').textContent=data[3].timeframes.weekly.current;
     document.getElementById('lasthrs-exercise').textContent=data[3].timeframes.weekly.previous;

     /*SOCIAL*/
     document.getElementById('hrs-social').textContent=data[4].timeframes.weekly.current;
     document.getElementById('lasthrs-social').textContent=data[4].timeframes.weekly.previous;

     /*SELF CARE*/
     document.getElementById('hrs-self').textContent=data[5].timeframes.weekly.current;
     document.getElementById('lasthrs-self').textContent=data[5].timeframes.weekly.previous;
}

const getMonth = (data)=>{

    time.forEach((month)=>{
        month.textContent="Month";
    });

    day.style.color="var(--desaturatedBlue)";
    week.style.color="var(--desaturatedBlue)";
    month.style.color="#fff";

    day.addEventListener('mouseover',()=>{
        day.style.color="#fff";
    })
    
    day.addEventListener('mouseout',()=>{
        day.style.color="var(--desaturatedBlue)";
    })

    week.addEventListener('mouseover',()=>{
        week.style.color="#fff";
    })
    
    week.addEventListener('mouseout',()=>{
        week.style.color="var(--desaturatedBlue)";
    })

    month.addEventListener('mouseover',()=>{
        month.style.color="#fff";
    })
    
    month.addEventListener('mouseout',()=>{
        month.style.color="#fff";
    })

    /*WORK*/
    document.getElementById('hrs-work').textContent=data[0].timeframes.monthly.current;
    document.getElementById('lasthrs-work').textContent=data[0].timeframes.monthly.previous;

    /*PLAY*/
    document.getElementById('hrs-play').textContent=data[1].timeframes.monthly.current;
    document.getElementById('lasthrs-play').textContent=data[1].timeframes.monthly.previous;

    /*STUDY*/
    document.getElementById('hrs-study').textContent=data[2].timeframes.monthly.current;
    document.getElementById('lasthrs-study').textContent=data[2].timeframes.monthly.previous;

     /*EXERCISE */
     document.getElementById('hrs-exercise').textContent=data[3].timeframes.monthly.current;
     document.getElementById('lasthrs-exercise').textContent=data[3].timeframes.monthly.previous;

     /*SOCIAL*/
     document.getElementById('hrs-social').textContent=data[4].timeframes.monthly.current;
     document.getElementById('lasthrs-social').textContent=data[4].timeframes.monthly.previous;

     /*SELF CARE*/
     document.getElementById('hrs-self').textContent=data[5].timeframes.monthly.current;
     document.getElementById('lasthrs-self').textContent=data[5].timeframes.monthly.previous;
}

defaultScreen();