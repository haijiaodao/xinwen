console.clear();var btn=document.getElementById("btn");var re=document.getElementById("return");var data=JSON.parse(localStorage.getItem("record"))||[];function update(b){var d=b.length;var e="";for(var c=0;c<d;c++){var a="    <li class='li_"+b[c].Color+"'>      <span>"+b[c].Text+"</span>      <span>BMI: "+b[c].BMI+"</span>      <span>weight: "+b[c].Weight+" kg</span>      <span>height: "+b[c].Height+" cm</span>      <span>"+b[c].Time+"</span>    </li>";e+=a}console.log(e);document.querySelector(".content ul").innerHTML=e;console.log("good")}function calc(){var e=document.querySelector(".height").value/100;var k=document.querySelector(".weight").value*1;var a=(k/(e*e)).toFixed(2);document.querySelector(".btn h3").textContent=a;function b(m){if(m<18.5){return{color:"underweight",text:"過輕"}}else{if(m<24&&m>=18.5){return{color:"ideal",text:"理想"}}else{if(m<27&&m>=24){return{color:"overweight",text:"過重"}}else{if(m<30&&m>=27){return{color:"light_fat",text:"輕度肥胖"}}else{if(m<35&&m>=30){return{color:"medium_fat",text:"中度肥胖"}}else{if(m>=35){return{color:"over_fat",text:"重度肥胖"}}else{return{color:"ideal",weight:"請重新輸入"}}}}}}}}document.querySelector(".result_text").textContent=b(a).text;var c=new Date();var h=c.getMinutes();var f=c.getHours();var i=c.getMonth();var d=c.getDate();var l=c.getFullYear();var j=f+":"+h+" "+d+"-"+i+"-"+l;var g={Height:String(e*100),Weight:String(k),BMI:a,Time:j,Text:b(a).text,Color:b(a).color};btn.className=g.Color+" btn";document.querySelector(".result_text").className=g.Color+" result_text";re.className=g.Color+" return";console.log(g);data.push(g);localStorage.setItem("record",JSON.stringify(data));update(data)}function restart(){btn.className="btn";re.className="return";document.querySelector(".btn h3").textContent="看結果";document.querySelector(".result_text").className="result_text";document.querySelector(".weight").value="";document.querySelector(".height").value=""}update(data);console.log(data);btn.addEventListener("click",calc,false);re.addEventListener("click",restart,false);