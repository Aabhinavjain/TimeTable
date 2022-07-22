function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

if(screen.width<=780)
{    
    var now = new Date();
    var dateStr = now;
    var day = getDayName(dateStr, "en-US");
    fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {

        var table = document.getElementById('phone');
        
        for(var i = 0; i < data.days.length; i++)
        {
            if(data.days[i].day == day)
            {
                console.log(i)
                table.innerHTML += '<div class="day" id="'+day+'"><div class="dayname">'+day+'</div></div>';
                var dayname = document.getElementById(day);
                for(var j = 0; j < data.days[i].subjects.length; j++)
                {
                    dayname.innerHTML +='<div class="period '+data.days[i].subjects[j].type+'"><h2>'+data.days[i].subjects[j].name+'<br>'+data.days[i].subjects[j].time+'<br>'+data.days[i].subjects[j].place+'</h2></div>';
                }
                break;
            }
        }
    });

}

    fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        var table = document.getElementById('content');
        for(var i = 0; i < data.days.length; i++)
        {
            var dayname = data.days[i].day
            
            table.innerHTML += '<div class="day" id="'+dayname+'"><div class="dayname">'+dayname+'</div></div>';
            
            var day = document.getElementById(dayname);
            for(var j = 0; j < data.days[i].subjects.length; j++)
            {
                day.innerHTML +='<div class="period '+data.days[i].subjects[j].type+'"><h2>'+data.days[i].subjects[j].name+'<br>'+data.days[i].subjects[j].time+'<br>'+data.days[i].subjects[j].place+'</h2></div>';
            }
        }
    });

