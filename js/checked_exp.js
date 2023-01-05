function calc(){
    var level = document.getElementById("level_exp").value 
    var speed = document.getElementById("speed_exp").value 
    var boost = 1+(document.getElementById("event_boost").value/100)

    var calc = 0;
    if(1 <= speed && boost == 0){
        calc = (level*100)*speed
    }
    if(1 <= speed && 1 <= boost){
        calc = ((level*100)*speed)*boost
    }
    document.getElementById("ans").innerHTML = "<h5>獲得経験値(計算結果)："+Math.round(calc)+"</h5>"
}
