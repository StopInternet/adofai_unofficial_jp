   //GAS WebアプリのURL
   const END_POINT = "https://script.google.com/macros/s/AKfycbyPT2WkKiwbG8Vi8I0xmUsOA2g9XaUyapFo09wqXEhb/dev";
   //読み書きするスプレッドシート（タブ）の番号
   const SHEET_NO = 1; 
   document.getElementById("postButton").addEventListener('click', postToGAS, false);
   document.getElementById("getButton").addEventListener('click', getFromGAS, false);
   let dataObj = {};
   function postToGAS() {
     const Content = document.getElementById("textArea").value.trim();
     console.log(Content);
     //データがJSONかどうかのチェック
     try {
       const checkJSON = JSON.parse(Content);
       if (checkJSON.length > 0 && Object.keys(checkJSON).length > 0) {
         console.log("data is OK");
       } else {
         throw "data is not array of object";
       }
     }
     catch (e) {
       alert("error:" + e);
       return;
     }
     //POST送信
     $.ajax({
       type: "POST",
       url: END_POINT,
       dataType: "json",
       data: { sheetNo: SHEET_NO, data: Content }
     })
       .then(
         (result) => { // 成功した時の処理
           console.log(JSON.stringify(result));
         },
         (error) => { // 失敗した時の処理
           alert('Error:' + JSON.stringify(error));
         }
       );
   }
   function getFromGAS() {
     $.ajax({
       type: "GET",
       url: END_POINT,
       data: { sheetNo: SHEET_NO }
     }).done((result) => {        // 成功した時の処理
       dataObj = JSON.parse(result);
       document.getElementById("textArea").value = result;
       console.log("get done:" + result);
     }).fail((error) => {  // 失敗した時の処理
       alert('Error:' + JSON.stringify(error));
     }).always((data) => {// 常にやる処理
       // do something
     });
   }
