var min_1 = 1 ;
var max_1 = 4481 ;

var number = Math.floor( Math.random() * (max_1 + 1 - min_1) ) + min_1 ;

var min_2 = 1;
var max_2 = 11;
var number_2 = Math.floor( Math.random() * (max_2 + 1 - min_2) ) + min_2 ;
//Database
/* 
追加方法
1.songsに名前を追加
2.id_steamにsteamコミュニティにあるidを打つ
3.Youtube linkがあるならリンクもうつ
*/
//easy
var songs = {
    1:"PIKASONIC - Friendship! (HYONSU)",
    2:"LeaF - もぺもぺ (ancotor)", // 譜面作者名要確認
    3:"かめりあ - Newspapers for Magicians (Cadence)", // 譜面作者名要確認
    4:"Bossfight - Commando Steve (Onslayet & LUMI)",
    5:"PIKASONIC - Hyper (HYONSU)",   
    6:"かめりあ - crystallized (Team Vega)",
    7:"Xtrullor - Cry (easy) (Ihj, Original by -K)",
    8:"linear ring - enchanted love (and the witch's selfish heart) (Team Vega)",
    9:"3xp0 - Transporter (3xp0)",
    10:"ああああ - 僕たちの旅とエピローグ。(Long ver.) (Team Vega)",
    11:"TheFatRat - Unity (Onslayet)",
    12:"ああああ - 劇場版『マージナルフロンティア』 (Team Vega)",
    13:"Cosmograph - ELIMINATOR (XiZnYng)",
    14:"かめりあ - Blackmagik Blazing (CARCINOGENS)", // 譜面作者名要確認
    15:"t+pazolite - Dogbite (Kew - Zew)",
    16:"Adryx-G - Tetris 2020 (Strode)",
    17:"S3RL - R4V3 B0Y (chocomint)", // 無断掲載可能性？ Jerri = chocomint?
    18:"cYsmix - Fright March (zedwards)", // 譜面作者名要確認
    19:"TheFatRat - Xenogenesis (Parku)", 
    20:"snakywine - Classy Kitty (pixelo3o)",
    21:"かめりあ - Together forever, my lovely lovely video game cartridges (Blowfish)", // 譜面作者名要確認
    22:"かめりあ - First Town of This Journey (Petey)", // 譜面作者名要確認
    23:"PIKASONIC - Hanataba (ash9874)", // 譜面作者名要確認
    24:"Plum - Terrasphere (에텔 Etell)", // 譜面作者名要確認
    25:"Waterflame - Clutterfunk (Short) (Fix) (Editor AlriC)",
    26:"er - ハイパーミラクルシューティングスター (PowerFactory)",
    27:"BoomKitty - Holy War (miguel)", // 譜面作者名要確認
    28:"PIKASONIC - Cosmos (7even)", // 譜面作者名要確認
    29:"Halv - Overflow (Pharah & FluffyYoshi)",
};

var steam_link = "https://steamcommunity.com/sharedfiles/filedetails/?id="
var id_steam = {
    1:"2488734143",
    2:"2488623090",
    3:"2451450717",
    4:"2131162004",
    5:"2254414088",
    6:"2496566890",
    7:"2124999530",
    8:"2512741996",
    9:"2220484025",
    10:"2491521486",
    11:"2124041197",
    12:"2633486812",
    13:"2378436297",
    14:"2308680580",
    15:"2225112086",
    16:"2245465912",
    17:"2710972905",
    18:"2620666643",
    19:"2277745106",
    20:"2488171556",
    21:"2130983497",
    22:"2217866712",
    23:"2262749627",
    24:"2515943059",
    25:"2570811745",
    26:"2223045507",
    27:"2288013515",
    28:"2137189443",
    29:"2672884097",
};

window.onload = function selectOsusume(){
    //ランダムで出力する部分
    var name = songs[number_2];
    var steam_url = steam_link+id_steam[number_2];
    
    let results = document.getElementById('results').innerHTML; //宣言
    document.getElementById('results').innerHTML = 
    '<h2>'+
    name+
    '<br>'+
    '<a class="nav-link" href="'+steam_url+'"  target="_blank">ここを押してSteamワークショップにいこう!</a></h2>'+
    '';
    
    //収録譜面を表示させる部分
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    //divに登録
    document.getElementById('lists').appendChild(table);
    //生成(最上位)
    let song_name = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "譜面一覧";
    song_name.appendChild(heading_1);
    thead.appendChild(song_name);

    
    //二段目以降
    for(var i = 1; i <= Object.keys(songs).length;i++){
    let namei = document.createElement('tr');
    let i_data = document.createElement('td');
    i_data.innerHTML = i+" : "+songs[i];
    namei.appendChild(i_data);
    tbody.appendChild(namei);
    }

    //説明欄
    let subtitle = document.getElementById('subtitle').innerHTML; //宣言
    document.getElementById('subtitle').innerHTML = 
    '初心者から中級者むけに厳選した'+ Object.keys(songs).length + '曲を用意!<br>'+
    '出た譜面をダウンロードして遊んでみよう！'
}


function selectSong() {
    let results = document.getElementById('results').innerHTML; //宣言
    document.getElementById('results').innerHTML = '<a class="nav-link" href="https://adofai.gg/levels/'+number+'"target="_blank">譜面はこれだ！！</a>';
}

function reload(){
    window.location.reload();
}
