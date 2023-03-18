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

function calc_dojo(){
    //ID読み込み
    var d_level = document.getElementById("level_exp_dojo").value
    var d_speed_1 = document.getElementById("speed_exp1").value
    var d_speed_2 = document.getElementById("speed_exp2").value
    var d_speed_3 = document.getElementById("speed_exp3").value
    var d_speed_4 = document.getElementById("speed_exp4").value
    var d_speed_5 = document.getElementById("speed_exp5").value
    var d_speed_6 = document.getElementById("speed_exp6").value

    //経験値挿入
    if(d_level == 1){
        d_level = 10000;
    }
    if(d_level == 2){
        d_level = 20000;
    }
    if(d_level == 3){
        d_level = 30000;
    }
    if(d_level == 4){
        d_level = 40000;
    }
    if(d_level == 5){
        d_level = 50000;
    }
    if(d_level == 6){
        d_level = 60000;
    }
    var calc_d = 0;

    //計算式
    if(d_speed_1 == 1){
        calc_d = d_level * (1+(d_speed_2*d_speed_3*d_speed_4*d_speed_5*d_speed_6)/100)
    }
    if(d_speed_2 == 1){
        calc_d = d_level * (1+(d_speed_1*d_speed_3*d_speed_4*d_speed_5*d_speed_6)/100)
    }
    if(d_speed_3 == 1){
        calc_d = d_level * (1+(d_speed_1*d_speed_2*d_speed_4*d_speed_5*d_speed_6)/100)
    }
    if(d_speed_4 == 1){
        calc_d = d_level * (1+(d_speed_1*d_speed_2*d_speed_3*d_speed_5*d_speed_6)/100)
    }
    if(d_speed_5 == 1){
        calc_d = d_level * (1+(d_speed_1*d_speed_2*d_speed_3*d_speed_4*d_speed_6)/100)
    }
    if(d_speed_6 == 1){
        calc_d = d_level * (1+(d_speed_1*d_speed_2*d_speed_3*d_speed_4*d_speed_5)/100)
    }
    if(d_speed_1 == 1 &&
             d_speed_2 == 1 &&
             d_speed_3 == 1 &&
             d_speed_4 == 1 &&
             d_speed_5 == 1 &&
             d_speed_6 == 1){
                calc_d = d_level
    }
    else{
        calc_d = d_level * (1+(d_speed_1*d_speed_2*d_speed_3*d_speed_4*d_speed_5*d_speed_6)/100)
    }
    
    //結果挿入
    document.getElementById("ans2").innerHTML = "<h5>獲得経験値(計算結果)："+Math.round(calc_d)+"</h5>"
}