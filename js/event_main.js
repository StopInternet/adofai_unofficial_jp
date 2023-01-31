music_name = {
    1:"Macaron",
    2:"skymuted - Departure",
    3:"Excelsia",
    4:"DJ-Nate - Thermodynamix (Short)",
    5:"Cosmograph - Comet",
    6:"【高難易度】PLUM MEGAMIX 2"
}

level_by = {
    1:"바퀴",
    2:"P쇼핑잉 & NfK",
    3:"Fir3ns",
    4:"Lupel_2 & 비누",
    5:"HYONSU",
    6:"Irin"
}

tiles = {
    1:719,
    2:284,
    3:503,
    4:410,
    5:1491,
    6:6635,
}

bpm =  {
    1:128,
    2:90,
    3:188,
    4:130,
    5:185,
    6:"160~180",
}

levels = {
    1:4,
    2:6,
    3:8,
    4:12,
    5:16,
    6:19
}

yt_movie_url = {
    1:'<iframe width="560" height="315" src="https://www.youtube.com/embed/LCfwVuYpbtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    2:'<iframe width="560" height="315" src="https://www.youtube.com/embed/MWICX7uft3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    3:'<iframe width="560" height="315" src="https://www.youtube.com/embed/FyojHFQ4wpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    4:'<iframe width="560" height="315" src="https://www.youtube.com/embed/2VGm7u0PZFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    5:'<iframe width="560" height="315" src="https://www.youtube.com/embed/8E1GBirccJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    6:'<iframe width="560" height="315" src="https://www.youtube.com/embed/SfJAQUWt4Ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
}
youtube_url =  {
    1:"https://www.youtube.com/watch?v=LCfwVuYpbtw",
    2:"https://www.youtube.com/watch?v=MWICX7uft3k",
    3:"https://www.youtube.com/watch?v=FyojHFQ4wpw",
    4:"https://www.youtube.com/watch?v=2VGm7u0PZFY",
    5:"https://www.youtube.com/watch?v=8E1GBirccJQ",
    6:"https://www.youtube.com/watch?v=SfJAQUWt4Ww"
}

steam_url = {
    1:"null",
    2:"https://steamcommunity.com/sharedfiles/filedetails/?id=2835788903",
    3:"null",
    4:"null",
    5:"https://steamcommunity.com/sharedfiles/filedetails/?id=2385882723",
    6:"https://steamcommunity.com/sharedfiles/filedetails/?id=2924697157"
}

exp = {
    1:"85%",
    2:"85%",
    3:"85%",
    4:"85%",
    5:"85%",
    6:"85%"
}

window.onload= function event_mains(){
    //optionsにmusic_name分の要素数のoptionを生成。
    options = []
    music_name_length = Object.keys(music_name).length;
    for(var i=1;i<=music_name_length;i++){
        options[i] = "<option value="+i+">"+music_name[i]+"</option>"
    }
    //select分の生成
    document.getElementById("select").innerHTML="<select id='musics'>"+options.join()+"</select>"+
                                                "<button id='btns' onclick='selects()'>選択</button>"

    
}

function selects(){
    //valueを取得
    var events = document.getElementById("musics").value
    var eventSelect = events.selectedOptions
    //ytとsteamのurlを生成
    var yt = '<a href='+youtube_url[events]+' target="_blank">Youtube</a>'
    var st = "";
    if(steam_url[events] == "null"){
        st = " ";
    }else{
        st = '<a href='+steam_url[events]+' target="_blank">Steam WorkShop</a>'
    }
    
    

    levels_list = "<h3>Music:"+music_name[events]+"</h3>"+
                          "<h4>level by "+level_by[events]+"</h4>"+
                          "<p>Level:"+levels[events]+"&emsp; Tiles:"+tiles[events]+"&emsp; BPM:"+bpm[events]+"&emsp; イベントブースト:"+exp[events]+"</p>"+
                          yt_movie_url[events]+"<br>"+
                          yt+"&emsp; "+st+"<br>";
    document.getElementById("levels").innerHTML = levels_list
}