music_name = {
    1:"Plum - Stage Start",
    2:"DOT96 - MAKE IT FUNKY NOW",
    3:"Akira Complex - LVL.99",
    4:"Overnote' - Hyperorbit",
    5:"F-777 - Hydra"
}

level_by = {
    1:"쇼핑잉",
    2:"PizzaLovers007",
    3:"Star4th",
    4:"FluffyYoshi",
    5:"1nstagram",
}

tiles = {
    1:479,
    2:478,
    3:960,
    4:1077,
    5:2408,
}

bpm =  {
    1:118,
    2:146,
    3:170,
    4:147,
    5:200,
}

levels = {
    1:6,
    2:8,
    3:13,
    4:16,
    5:19,
}

yt_movie_url = {
    1:'<iframe width="560" height="315" src="https://www.youtube.com/embed/E60BX59nI_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    2:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-B7N20AUIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    3:'<iframe width="560" height="315" src="https://www.youtube.com/embed/9DAZ_FKsb68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    4:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Qae5Rf5djzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    5:'<iframe width="560" height="315" src="https://www.youtube.com/embed/pe7DoQtpimY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
}
youtube_url =  {
    1:"https://www.youtube.com/watch?v=E60BX59nI_M&feature=youtu.be",
    2:"https://www.youtube.com/watch?v=Q-B7N20AUIU&feature=youtu.be",
    3:"https://www.youtube.com/watch?v=9DAZ_FKsb68&feature=youtu.be",
    4:"https://www.youtube.com/watch?v=Qae5Rf5djzw",
    5:"https://www.youtube.com/watch?v=pe7DoQtpimY&feature=youtu.be"
}

steam_url = {
    1:"https://steamcommunity.com/sharedfiles/filedetails/?id=2731982647",
    2:"https://steamcommunity.com/sharedfiles/filedetails/?id=2125867763",
    3:"https://steamcommunity.com/sharedfiles/filedetails/?id=2531234550",
    4:"https://steamcommunity.com/sharedfiles/filedetails/?id=2771347965",
    5:"https://steamcommunity.com/sharedfiles/filedetails/?id=2582702421"
}

exp = {
    1:"1,000",
    2:"1,000",
    3:"1,500",
    4:"2,000",
    5:"3,000"
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
    var st = '<a href='+steam_url[events]+' target="_blank">Steam WorkShop</a>'

    levels_list = "<h3>Music:"+music_name[events]+"</h3>"+
                          "<h4>level by "+level_by[events]+"</h4>"+
                          "<p>Level:"+levels[events]+"&emsp; Tiles:"+tiles[events]+"&emsp; BPM:"+bpm[events]+"&emsp; 獲得経験値:"+exp[events]+"</p>"+
                          yt_movie_url[events]+"<br>"+
                          yt+"&emsp; "+st+"<br>";
    document.getElementById("levels").innerHTML = levels_list
}