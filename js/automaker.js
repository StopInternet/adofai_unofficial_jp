//tiles
counts = [];
tiles =`{
	"angleData": [ `+counts.join('')+`],`


//settings
settings = `"settings":
{
    "version": 11 ,
    "artist": "", 
    "specialArtistType": "None", 
    "artistPermission": "", 
    "song": "", 
    "author": "", 
    "separateCountdownTime": "Enabled", 
    "previewImage": "", 
    "previewIcon": "", 
    "previewIconColor": "003f52", 
    "previewSongStart": 0, 
    "previewSongDuration": 10, 
    "seizureWarning": "Disabled", 
    "levelDesc": "", 
    "levelTags": "", 
    "artistLinks": "", 
    "difficulty": 1, 
    "requiredMods": [],
    "songFilename": "", 
    "bpm": 100, 
    "volume": 100, 
    "offset": 0, 
    "pitch": 100, 
    "hitsound": "Kick", 
    "hitsoundVolume": 100, 
    "countdownTicks": 4,
    "trackColorType": "Single", 
    "trackColor": "debb7b", 
    "secondaryTrackColor": "ffffff", 
    "trackColorAnimDuration": 2, 
    "trackColorPulse": "None", 
    "trackPulseLength": 10, 
    "trackStyle": "Standard", 
    "trackGlowIntensity": 100, 
    "trackAnimation": "None", 
    "beatsAhead": 3, 
    "trackDisappearAnimation": "None", 
    "beatsBehind": 4,
    "backgroundColor": "000000", 
    "showDefaultBGIfNoImage": "Enabled", 
    "bgImage": "", 
    "bgImageColor": "ffffff", 
    "parallax": [100, 100], 
    "bgDisplayMode": "FitToScreen", 
    "lockRot": "Disabled", 
    "loopBG": "Disabled", 
    "unscaledSize": 100,
    "relativeTo": "Player", 
    "position": [0, 0], 
    "rotation": 0, 
    "zoom": 100, 
    "pulseOnFloor": "Enabled", 
    "startCamLowVFX": "Disabled",
    "bgVideo": "", 
    "loopVideo": "Disabled", 
    "vidOffset": 0, 
    "floorIconOutlines": "Disabled", 
    "stickToFloors": "Enabled", 
    "planetEase": "Linear", 
    "planetEaseParts": 1, 
    "planetEasePartBehavior": "Mirror", 
    "customClass": "",
    "legacyFlash": false ,
    "legacyCamRelativeTo": false ,
    "legacySpriteTiles": false 
},
"actions":
	[
	],
	"decorations":
	[
	]
}`

function tile_maker(){
    tile_count = document.getElementById("Count_tile").value

    for(var i=1;i<=tile_count;i++){
        counts[i] = "0,";
    }

}


function tile_output(){
        //入力値を配列に出力
        tile_maker()
     
        //csvに展開し、改行して縦列に変換
        var content  = tiles+settings
        //csvの生成
        var mimeType = 'text/plain';
        var name     = tile_count+'.adofai';
        var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
        var blob = new Blob([bom, content], {type : mimeType});
        var named = document.createElement('named');
        named.download = name;
        named.target   = '_blank';
        //ダウンロード処理（各ブラウザごとに処理が違う）
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, name)
        }else if (window.URL && window.URL.createObjectURL) {
            named.href = window.URL.createObjectURL(blob);
            document.body.appendChild(content);
            named.click();
            document.body.removeChild(content);
        }else if (window.webkitURL && window.webkitURL.createObject) {
            named.href = window.webkitURL.createObjectURL(blob);
            named.click();
        }else {
            window.open('data:' + mimeType + ';base64,' + window.Base64.encode(content), '_blank');
        }
    }
