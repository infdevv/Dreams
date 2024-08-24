files = {
    "index.html": `<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
      <link href="styles.css" rel="stylesheet" type="text/css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    </head>
    <body>
      
      <div class="area">
          <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
      <div>
          <div id="title"><span>Dream Unbl<span>o</span>cker</span></div>
          <input id="search" placeholder="Search or enter URL">
          <input id="bridge" placeholder="(OPTIONAL) Enter second proxy URL">
          <br>
          <script>
              document.getElementById("search").addEventListener("keyup", function(event) {
                  if (event.keyCode === 13) {
                      load();
                  }
              });
  
              function load() {
                  url = document.getElementById("search").value;
                  if (!url.includes(".")){
                      url = "https://www.google.com/search?q=" + url
                  }
                  else if (url.includes(".") && (!url.includes("https://"))){
          url = "https://" + url
                  }
                  if (document.getElementById("bridge").value != "") {
                      url =  document.getElementById("bridge").value + url
                  }
                  const xor = {
                      encode(str) {
                          if (!str) return str;
                          let result = "";
                          for (let i = 0; i < str.length; i++) {
                              result += i % 2 ? String.fromCharCode(str.charCodeAt(i) ^ 2) : str[i];
                          }
                          return encodeURIComponent(result);
                      },
                      decode(str) {
                          if (!str) return str;
                          const [input, ...search] = str.split("?");
                          let result = "";
                          const decoded = decodeURIComponent(input);
                          for (let i = 0; i < decoded.length; i++) {
                              result += i % 2 ? String.fromCharCode(decoded.charCodeAt(i) ^ 2) : decoded[i];
                          }
                          return result + (search.length ? "?" + search.join("?") : "");
                      },
                  };
  
                  var x = "uv/service/" + xor.encode(url);
                  var code = \`
                      <body style="background-color: black">
                      <iframe src="\` + x + \`" frameborder="0" style="border: none; background-color: black" width="100%" height="100%"></iframe>
                      </body>
                  \`;
                  var newWindow = window.open("about:blank", "_blank");
                  newWindow.document.write(code);
                  newWindow.document.body.style.backgroundColor = "black";
                  window.close();
              }
          </script>
      </div>
    </body>
  </html>
  `,
  "styles.css": `body {
    /* purple to black gradient up*/
     background: linear-gradient(180deg, #000000, #9b59b6 );
 
     /* make it not move */
     background-attachment: fixed;
 
     /* center it */
     background-position: center;
 
   overflow: hidden; }
 
   @import url('https://fonts.googleapis.com/css?family=Exo:400,700');
 
   *{
       margin: 0px;
       padding: 0px;
   }
   
   body{
       font-family: 'Exo', sans-serif;
   }
   
   
   .context {
       width: 100%;
       position: absolute;
       top:50vh;
       
   }
   
   .context h1{
       text-align: center;
       color: #fff;
       font-size: 50px;
   }
   
   
   .area{
       width: 100%;
       height:100vh;
       
      
   }
   
   .circles{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       overflow: hidden;
   }
   
   .circles li{
       position: absolute;
       display: block;
       list-style: none;
       width: 20px;
       height: 20px;
       background: rgba(255, 255, 255, 0.2);
       animation: animate 25s linear infinite;
       bottom: -150px;
       
   }
   
   .circles li:nth-child(1){
       left: 25%;
       width: 80px;
       height: 80px;
       animation-delay: 0s;
   }
   
   
   .circles li:nth-child(2){
       left: 10%;
       width: 20px;
       height: 20px;
       animation-delay: 2s;
       animation-duration: 12s;
   }
   
   .circles li:nth-child(3){
       left: 70%;
       width: 20px;
       height: 20px;
       animation-delay: 4s;
   }
   
   .circles li:nth-child(4){
       left: 40%;
       width: 60px;
       height: 60px;
       animation-delay: 0s;
       animation-duration: 18s;
   }
   
   .circles li:nth-child(5){
       left: 65%;
       width: 20px;
       height: 20px;
       animation-delay: 0s;
   }
   
   .circles li:nth-child(6){
       left: 75%;
       width: 110px;
       height: 110px;
       animation-delay: 3s;
   }
   
   .circles li:nth-child(7){
       left: 35%;
       width: 150px;
       height: 150px;
       animation-delay: 7s;
   }
   
   .circles li:nth-child(8){
       left: 50%;
       width: 25px;
       height: 25px;
       animation-delay: 15s;
       animation-duration: 45s;
   }
   
   .circles li:nth-child(9){
       left: 20%;
       width: 15px;
       height: 15px;
       animation-delay: 2s;
       animation-duration: 35s;
   }
   
   .circles li:nth-child(10){
       left: 85%;
       width: 150px;
       height: 150px;
       animation-delay: 0s;
       animation-duration: 11s;
   }
   
   
   
   @keyframes animate {
   
       0%{
           transform: translateY(0) rotate(0deg);
           opacity: 1;
           border-radius: 0;
       }
   
       100%{
           transform: translateY(-1000px) rotate(720deg);
           opacity: 0;
           border-radius: 50%;
       }
   
   }
     #title {
         position: fixed;
         top: 25%;
         left: 0;
         right: 0;
         color: #FFF;
         text-align: center;
         font-family: "Pacifico", cursive;
         font-weight: 400;
         font-size: 45px;
         font-style: normal;
         letter-spacing: 10px;
         margin-top: -60px;
         padding-left: 10px; 
     }
         
 
 input {
     position: fixed;
     padding: 15px;
     font-size: 16px;
     border: 0;
     background: #fff;
     display: block;
     margin: 20px auto;
     text-align: center;
     outline: none;
     font-family: "Lato", sans-serif;
     font-weight: 400;
     font-style: normal;
     border-radius: 15px;
     width: 59%;
     top: 40%;
     left: 0;
     right: 0;
 
 
 }
 
 .shortcut {
     position: fixed;
     padding: 15px;
     font-size: 16px;
     border: 0;
     background: #fff;
     display: block;
     margin: 20px auto;
     text-align: center;
     outline: none;
     font-family: "Lato", sans-serif;
     font-weight: 400;
     font-style: normal;
     border-radius: 15px;
     width: 150px;
     top: 40%;
     left: 0;
     right: 0;
 }`,
 "/uv/config.js":`self.__uv$config = {
    prefix: "/a/",
    bare: "/ov/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/handler.js",
    bundle: "/uv/bundle.js",
    config: "/uv/config.js",
    sw: "/uv/sw.js",
  }`,
  "/uv/handler.js":`YXN5bmMgZnVuY3Rpb24gX191dkhvb2soZSx0PXt9LGE9Ii9vdi8iKXtpZigiX191diJpbiBlJiZlLl9fdXYgaW5zdGFuY2VvZiBVbHRyYXZpb2xldClyZXR1cm4hMTtlLmRvY3VtZW50JiZlLndpbmRvdyYmZS5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJzY3JpcHRbX191di1zY3JpcHRdIikuZm9yRWFjaCgoZT0+ZS5yZW1vdmUoKSkpO2NvbnN0IHI9IWUud2luZG93LG89Il9fdXYiLG49Il9fdXYkIixsPW5ldyBVbHRyYXZpb2xldCh7Li4udCx3aW5kb3c6ZX0pOyJmdW5jdGlvbiI9PXR5cGVvZiB0LmNvbnN0cnVjdCYmdC5jb25zdHJ1Y3QobCxyPyJ3b3JrZXIiOiJ3aW5kb3ciKTtjb25zdHtjbGllbnQ6aX09bCx7SFRNTE1lZGlhRWxlbWVudDpzLEhUTUxTY3JpcHRFbGVtZW50OmQsSFRNTEF1ZGlvRWxlbWVudDpjLEhUTUxWaWRlb0VsZW1lbnQ6dSxIVE1MSW5wdXRFbGVtZW50Om0sSFRNTEVtYmVkRWxlbWVudDpoLEhUTUxUcmFja0VsZW1lbnQ6dixIVE1MQW5jaG9yRWxlbWVudDpnLEhUTUxJRnJhbWVFbGVtZW50OnAsSFRNTEFyZWFFbGVtZW50OmIsSFRNTExpbmtFbGVtZW50OmYsSFRNTEJhc2VFbGVtZW50Ol8sSFRNTEZvcm1FbGVtZW50OnksSFRNTEltYWdlRWxlbWVudDpTLEhUTUxTb3VyY2VFbGVtZW50Ond9PWU7aS5uYXRpdmVNZXRob2RzLmRlZmluZVByb3BlcnR5KGUsIl9fdXYiLHt2YWx1ZTpsLGVudW1lcmFibGU6ITF9KSxsLm1ldGEub3JpZ2luPWxvY2F0aW9uLm9yaWdpbixsLmxvY2F0aW9uPWkubG9jYXRpb24uZW11bGF0ZSgoZT0+ImFib3V0OnNyY2RvYyI9PT1lP25ldyBVUkwoZSk6KGUuc3RhcnRzV2l0aCgiYmxvYjoiKSYmKGU9ZS5zbGljZSg1KSksbmV3IFVSTChsLnNvdXJjZVVybChlKSkpKSwoZT0+bC5yZXdyaXRlVXJsKGUpKSksbC5jb29raWVTdHI9ZS5fX3V2JGNvb2tpZXN8fCIiLGwubWV0YS51cmw9bC5sb2NhdGlvbixsLmRvbWFpbj1sLm1ldGEudXJsLmhvc3QsbC5ibG9iVXJscz1uZXcgZS5NYXAsbC5yZWZlcnJlcj0iIixsLmNvb2tpZXM9W10sbC5sb2NhbFN0b3JhZ2VPYmo9e30sbC5zZXNzaW9uU3RvcmFnZU9iaj17fTt0cnl7bC5iYXJlPW5ldyBVUkwoYSxlLmxvY2F0aW9uLmhyZWYpfWNhdGNoKHQpe2wuYmFyZT1lLnBhcmVudC5fX3V2LmJhcmV9aWYoImFib3V0OnNyY2RvYyI9PT1sLmxvY2F0aW9uLmhyZWYmJihsLm1ldGE9ZS5wYXJlbnQuX191di5tZXRhKSxlLkV2ZW50VGFyZ2V0JiYobC5hZGRFdmVudExpc3RlbmVyPWUuRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsbC5yZW1vdmVMaXN0ZW5lcj1lLkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcixsLmRpc3BhdGNoRXZlbnQ9ZS5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCksaS5uYXRpdmVNZXRob2RzLmRlZmluZVByb3BlcnR5KGkuc3RvcmFnZS5zdG9yZVByb3RvLCJfX3V2JHN0b3JhZ2VPYmoiLHtnZXQoKXtyZXR1cm4gdGhpcz09PWkuc3RvcmFnZS5zZXNzaW9uU3RvcmFnZT9sLnNlc3Npb25TdG9yYWdlT2JqOnRoaXM9PT1pLnN0b3JhZ2UubG9jYWxTdG9yYWdlP2wubG9jYWxTdG9yYWdlT2JqOnZvaWQgMH0sZW51bWVyYWJsZTohMX0pLGUubG9jYWxTdG9yYWdlKXtmb3IoY29uc3QgdCBpbiBlLmxvY2FsU3RvcmFnZSl0LnN0YXJ0c1dpdGgobitsLmxvY2F0aW9uLm9yaWdpbisiQCIpJiYobC5sb2NhbFN0b3JhZ2VPYmpbdC5zbGljZSgobitsLmxvY2F0aW9uLm9yaWdpbisiQCIpLmxlbmd0aCldPWUubG9jYWxTdG9yYWdlLmdldEl0ZW0odCkpO2wubHNXcmFwPWkuc3RvcmFnZS5lbXVsYXRlKGkuc3RvcmFnZS5sb2NhbFN0b3JhZ2UsbC5sb2NhbFN0b3JhZ2VPYmopfWlmKGUuc2Vzc2lvblN0b3JhZ2Upe2Zvcihjb25zdCB0IGluIGUuc2Vzc2lvblN0b3JhZ2UpdC5zdGFydHNXaXRoKG4rbC5sb2NhdGlvbi5vcmlnaW4rIkAiKSYmKGwuc2Vzc2lvblN0b3JhZ2VPYmpbdC5zbGljZSgobitsLmxvY2F0aW9uLm9yaWdpbisiQCIpLmxlbmd0aCldPWUuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0KSk7bC5zc1dyYXA9aS5zdG9yYWdlLmVtdWxhdGUoaS5zdG9yYWdlLnNlc3Npb25TdG9yYWdlLGwuc2Vzc2lvblN0b3JhZ2VPYmopfWxldCBQPWUuZG9jdW1lbnQ/aS5ub2RlLmJhc2VVUkkuZ2V0LmNhbGwoZS5kb2N1bWVudCk6ZS5sb2NhdGlvbi5ocmVmLGs9bC5zb3VyY2VVcmwoUCk7aWYoaS5uYXRpdmVNZXRob2RzLmRlZmluZVByb3BlcnR5KGwubWV0YSwiYmFzZSIse2dldDooKT0+ZS5kb2N1bWVudD8oaS5ub2RlLmJhc2VVUkkuZ2V0LmNhbGwoZS5kb2N1bWVudCkhPT1QJiYoUD1pLm5vZGUuYmFzZVVSSS5nZXQuY2FsbChlLmRvY3VtZW50KSxrPWwuc291cmNlVXJsKFApKSxrKTpsLm1ldGEudXJsLmhyZWZ9KSxsLm1ldGhvZHM9e3NldFNvdXJjZTpuKyJzZXRTb3VyY2UiLHNvdXJjZTpuKyJzb3VyY2UiLGxvY2F0aW9uOm4rImxvY2F0aW9uIixmdW5jdGlvbjpuKyJmdW5jdGlvbiIsc3RyaW5nOm4rInN0cmluZyIsZXZhbDpuKyJldmFsIixwYXJlbnQ6bisicGFyZW50Iix0b3A6bisidG9wIn0sbC5maWx0ZXJLZXlzPVtvLGwubWV0aG9kcy5zZXRTb3VyY2UsbC5tZXRob2RzLnNvdXJjZSxsLm1ldGhvZHMubG9jYXRpb24sbC5tZXRob2RzLmZ1bmN0aW9uLGwubWV0aG9kcy5zdHJpbmcsbC5tZXRob2RzLmV2YWwsbC5tZXRob2RzLnBhcmVudCxsLm1ldGhvZHMudG9wLG4rInByb3RvY29sIixuKyJzdG9yYWdlT2JqIixuKyJ1cmwiLG4rIm1vZGlmaWVkU3R5bGUiLG4rImNvbmZpZyIsbisiZGlzcGF0Y2hlZCIsIlVsdHJhdmlvbGV0IiwiX191dkhvb2siXSxpLm9uKCJ3cmFwIiwoKGUsdCk9PntpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkodCwibmFtZSIsaS5uYXRpdmVNZXRob2RzLmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCJuYW1lIikpLGkubmF0aXZlTWV0aG9kcy5kZWZpbmVQcm9wZXJ0eSh0LCJsZW5ndGgiLGkubmF0aXZlTWV0aG9kcy5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwibGVuZ3RoIikpLGkubmF0aXZlTWV0aG9kcy5kZWZpbmVQcm9wZXJ0eSh0LGwubWV0aG9kcy5zdHJpbmcse2VudW1lcmFibGU6ITEsdmFsdWU6aS5uYXRpdmVNZXRob2RzLmZuVG9TdHJpbmcuY2FsbChlKX0pLGkubmF0aXZlTWV0aG9kcy5kZWZpbmVQcm9wZXJ0eSh0LGwubWV0aG9kcy5mdW5jdGlvbix7ZW51bWVyYWJsZTohMSx2YWx1ZTplfSl9KSksaS5mZXRjaC5vbigicmVxdWVzdCIsKGU9PntlLmRhdGEuaW5wdXQ9bC5yZXdyaXRlVXJsKGUuZGF0YS5pbnB1dCl9KSksaS5mZXRjaC5vbigicmVxdWVzdFVybCIsKGU9PntlLmRhdGEudmFsdWU9bC5zb3VyY2VVcmwoZS5kYXRhLnZhbHVlKX0pKSxpLmZldGNoLm9uKCJyZXNwb25zZVVybCIsKGU9PntlLmRhdGEudmFsdWU9bC5zb3VyY2VVcmwoZS5kYXRhLnZhbHVlKX0pKSxpLnhoci5vbigib3BlbiIsKGU9PntlLmRhdGEuaW5wdXQ9bC5yZXdyaXRlVXJsKGUuZGF0YS5pbnB1dCl9KSksaS54aHIub24oInJlc3BvbnNlVXJsIiwoZT0+e2UuZGF0YS52YWx1ZT1sLnNvdXJjZVVybChlLmRhdGEudmFsdWUpfSkpLGkud29ya2Vycy5vbigid29ya2VyIiwoZT0+e2UuZGF0YS51cmw9bC5yZXdyaXRlVXJsKGUuZGF0YS51cmwpfSkpLGkud29ya2Vycy5vbigiYWRkTW9kdWxlIiwoZT0+e2UuZGF0YS51cmw9bC5yZXdyaXRlVXJsKGUuZGF0YS51cmwpfSkpLGkud29ya2Vycy5vbigiaW1wb3J0U2NyaXB0cyIsKGU9Pntmb3IoY29uc3QgdCBpbiBlLmRhdGEuc2NyaXB0cyllLmRhdGEuc2NyaXB0c1t0XT1sLnJld3JpdGVVcmwoZS5kYXRhLnNjcmlwdHNbdF0pfSkpLGkud29ya2Vycy5vbigicG9zdE1lc3NhZ2UiLChlPT57bGV0IHQ9ZS5kYXRhLm9yaWdpbjtlLmRhdGEub3JpZ2luPSIqIixlLmRhdGEubWVzc2FnZT17X19kYXRhOmUuZGF0YS5tZXNzYWdlLF9fb3JpZ2luOmwubWV0YS51cmwub3JpZ2luLF9fdG86dH19KSksaS5uYXZpZ2F0b3Iub24oInNlbmRCZWFjb24iLChlPT57ZS5kYXRhLnVybD1sLnJld3JpdGVVcmwoZS5kYXRhLnVybCl9KSksaS5kb2N1bWVudC5vbigiZ2V0Q29va2llIiwoZT0+e2UuZGF0YS52YWx1ZT1sLmNvb2tpZVN0cn0pKSxpLmRvY3VtZW50Lm9uKCJzZXRDb29raWUiLChlPT57UHJvbWlzZS5yZXNvbHZlKGwuY29va2llLnNldENvb2tpZXMoZS5kYXRhLnZhbHVlLGwuZGIsbC5tZXRhKSkudGhlbigoKCk9PntsLmNvb2tpZS5kYigpLnRoZW4oKGU9PntsLmNvb2tpZS5nZXRDb29raWVzKGUpLnRoZW4oKGU9PntsLmNvb2tpZVN0cj1sLmNvb2tpZS5zZXJpYWxpemUoZSxsLm1ldGEsITApfSkpfSkpfSkpO2NvbnN0IHQ9bC5jb29raWUuc2V0Q29va2llKGUuZGF0YS52YWx1ZSlbMF07dC5wYXRofHwodC5wYXRoPSIvIiksdC5kb21haW58fCh0LmRvbWFpbj1sLm1ldGEudXJsLmhvc3RuYW1lKSxsLmNvb2tpZS52YWxpZGF0ZUNvb2tpZSh0LGwubWV0YSwhMCkmJihsLmNvb2tpZVN0ci5sZW5ndGgmJihsLmNvb2tpZVN0cis9IjsgIiksbC5jb29raWVTdHIrPWAke3QubmFtZX09JHt0LnZhbHVlfWApLGUucmVzcG9uZFdpdGgoZS5kYXRhLnZhbHVlKX0pKSxpLmVsZW1lbnQub24oInNldElubmVySFRNTCIsKGU9Pntzd2l0Y2goZS50aGF0LnRhZ05hbWUpe2Nhc2UiU0NSSVBUIjplLmRhdGEudmFsdWU9bC5qcy5yZXdyaXRlKGUuZGF0YS52YWx1ZSk7YnJlYWs7Y2FzZSJTVFlMRSI6ZS5kYXRhLnZhbHVlPWwucmV3cml0ZUNTUyhlLmRhdGEudmFsdWUpO2JyZWFrO2RlZmF1bHQ6ZS5kYXRhLnZhbHVlPWwucmV3cml0ZUh0bWwoZS5kYXRhLnZhbHVlKX19KSksaS5lbGVtZW50Lm9uKCJnZXRJbm5lckhUTUwiLChlPT57aWYoIlNDUklQVCI9PT1lLnRoYXQudGFnTmFtZSllLmRhdGEudmFsdWU9bC5qcy5zb3VyY2UoZS5kYXRhLnZhbHVlKTtlbHNlIGUuZGF0YS52YWx1ZT1sLnNvdXJjZUh0bWwoZS5kYXRhLnZhbHVlKX0pKSxpLmVsZW1lbnQub24oInNldE91dGVySFRNTCIsKGU9PntlLmRhdGEudmFsdWU9bC5yZXdyaXRlSHRtbChlLmRhdGEudmFsdWUse2RvY3VtZW50OiJIVE1MIj09PWUudGhhdC50YWdOYW1lfSl9KSksaS5lbGVtZW50Lm9uKCJnZXRPdXRlckhUTUwiLChlPT57c3dpdGNoKGUudGhhdC50YWdOYW1lKXtjYXNlIkhFQUQiOmUuZGF0YS52YWx1ZT1sLnNvdXJjZUh0bWwoZS5kYXRhLnZhbHVlLnJlcGxhY2UoLzxoZWFkKC4qKT4oLiopPFwvaGVhZD4vcywiPG9wLWhlYWQkMT4kMjwvb3AtaGVhZD4iKSkucmVwbGFjZSgvPG9wLWhlYWQoLiopPiguKik8XC9vcC1oZWFkPi9zLCI8aGVhZCQxPiQyPC9oZWFkPiIpO2JyZWFrO2Nhc2UiQk9EWSI6ZS5kYXRhLnZhbHVlPWwuc291cmNlSHRtbChlLmRhdGEudmFsdWUucmVwbGFjZSgvPGJvZHkoLiopPiguKik8XC9ib2R5Pi9zLCI8b3AtYm9keSQxPiQyPC9vcC1ib2R5PiIpKS5yZXBsYWNlKC88b3AtYm9keSguKik+KC4qKTxcL29wLWJvZHk+L3MsIjxib2R5JDE+JDI8L2JvZHk+Iik7YnJlYWs7ZGVmYXVsdDplLmRhdGEudmFsdWU9bC5zb3VyY2VIdG1sKGUuZGF0YS52YWx1ZSx7ZG9jdW1lbnQ6IkhUTUwiPT09ZS50aGF0LnRhZ05hbWV9KX19KSksaS5kb2N1bWVudC5vbigid3JpdGUiLChlPT57aWYoIWUuZGF0YS5odG1sLmxlbmd0aClyZXR1cm4hMTtlLmRhdGEuaHRtbD1bbC5yZXdyaXRlSHRtbChlLmRhdGEuaHRtbC5qb2luKCIiKSldfSkpLGkuZG9jdW1lbnQub24oIndyaXRlbG4iLChlPT57aWYoIWUuZGF0YS5odG1sLmxlbmd0aClyZXR1cm4hMTtlLmRhdGEuaHRtbD1bbC5yZXdyaXRlSHRtbChlLmRhdGEuaHRtbC5qb2luKCIiKSldfSkpLGkuZWxlbWVudC5vbigiaW5zZXJ0QWRqYWNlbnRIVE1MIiwoZT0+e2UuZGF0YS5odG1sPWwucmV3cml0ZUh0bWwoZS5kYXRhLmh0bWwpfSkpLGkuZXZlbnRTb3VyY2Uub24oImNvbnN0cnVjdCIsKGU9PntlLmRhdGEudXJsPWwucmV3cml0ZVVybChlLmRhdGEudXJsKX0pKSxpLmV2ZW50U291cmNlLm9uKCJ1cmwiLChlPT57ZS5kYXRhLnVybD1sLnJld3JpdGVVcmwoZS5kYXRhLnVybCl9KSksaS5oaXN0b3J5Lm9uKCJyZXBsYWNlU3RhdGUiLChlPT57ZS5kYXRhLnVybCYmKGUuZGF0YS51cmw9bC5yZXdyaXRlVXJsKGUuZGF0YS51cmwsIl9fdXYiaW4gZS50aGF0P2UudGhhdC5fX3V2Lm1ldGE6bC5tZXRhKSl9KSksaS5oaXN0b3J5Lm9uKCJwdXNoU3RhdGUiLChlPT57ZS5kYXRhLnVybCYmKGUuZGF0YS51cmw9bC5yZXdyaXRlVXJsKGUuZGF0YS51cmwsIl9fdXYiaW4gZS50aGF0P2UudGhhdC5fX3V2Lm1ldGE6bC5tZXRhKSl9KSksaS5lbGVtZW50Lm9uKCJnZXRBdHRyaWJ1dGUiLChlPT57aS5lbGVtZW50Lmhhc0F0dHJpYnV0ZS5jYWxsKGUudGhhdCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItIitlLmRhdGEubmFtZSkmJmUucmVzcG9uZFdpdGgoZS50YXJnZXQuY2FsbChlLnRoYXQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLSIrZS5kYXRhLm5hbWUpKX0pKSxpLm1lc3NhZ2Uub24oInBvc3RNZXNzYWdlIiwoZT0+e2xldCB0PWUuZGF0YS5vcmlnaW4sYT1sLmNhbGw7ZS50aGF0JiYoYT1lLnRoYXQuX191diRzb3VyY2UuY2FsbCksZS5kYXRhLm9yaWdpbj0iKiIsZS5kYXRhLm1lc3NhZ2U9e19fZGF0YTplLmRhdGEubWVzc2FnZSxfX29yaWdpbjooZS50aGF0fHxlLnRhcmdldCkuX191diRzb3VyY2UubG9jYXRpb24ub3JpZ2luLF9fdG86dH0sZS5yZXNwb25kV2l0aChhKGUudGFyZ2V0LHI/W2UuZGF0YS5tZXNzYWdlLGUuZGF0YS50cmFuc2Zlcl06W2UuZGF0YS5tZXNzYWdlLGUuZGF0YS5vcmlnaW4sZS5kYXRhLnRyYW5zZmVyXSxlLnRoYXQpKX0pKSxpLm1lc3NhZ2Uub24oImRhdGEiLChlPT57Y29uc3R7dmFsdWU6dH09ZS5kYXRhOyJvYmplY3QiPT10eXBlb2YgdCYmIl9fZGF0YSJpbiB0JiYiX19vcmlnaW4iaW4gdCYmZS5yZXNwb25kV2l0aCh0Ll9fZGF0YSl9KSksaS5tZXNzYWdlLm9uKCJvcmlnaW4iLChlPT57Y29uc3QgdD1pLm1lc3NhZ2UubWVzc2FnZURhdGEuZ2V0LmNhbGwoZS50aGF0KTsib2JqZWN0Ij09dHlwZW9mIHQmJnQuX19kYXRhJiZ0Ll9fb3JpZ2luJiZlLnJlc3BvbmRXaXRoKHQuX19vcmlnaW4pfSkpLGkub3ZlcnJpZGVEZXNjcmlwdG9yKGUsIm9yaWdpbiIse2dldDooZSx0KT0+bC5sb2NhdGlvbi5vcmlnaW59KSxpLm5vZGUub24oImJhc2VVUkkiLCh0PT57dC5kYXRhLnZhbHVlLnN0YXJ0c1dpdGgoZS5sb2NhdGlvbi5vcmlnaW4pJiYodC5kYXRhLnZhbHVlPWwuc291cmNlVXJsKHQuZGF0YS52YWx1ZSkpfSkpLGkuZWxlbWVudC5vbigic2V0QXR0cmlidXRlIiwodD0+e2lmKHQudGhhdCBpbnN0YW5jZW9mIHMmJiJzcmMiPT09dC5kYXRhLm5hbWUmJnQuZGF0YS52YWx1ZS5zdGFydHNXaXRoKCJibG9iOiIpKXJldHVybiB0LnRhcmdldC5jYWxsKHQudGhhdCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItIit0LmRhdGEubmFtZSx0LmRhdGEudmFsdWUpLHZvaWQodC5kYXRhLnZhbHVlPWwuYmxvYlVybHMuZ2V0KHQuZGF0YS52YWx1ZSkpO2wuYXR0cnMuaXNVcmwodC5kYXRhLm5hbWUpJiYodC50YXJnZXQuY2FsbCh0LnRoYXQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLSIrdC5kYXRhLm5hbWUsdC5kYXRhLnZhbHVlKSx0LmRhdGEudmFsdWU9bC5yZXdyaXRlVXJsKHQuZGF0YS52YWx1ZSkpLGwuYXR0cnMuaXNTdHlsZSh0LmRhdGEubmFtZSkmJih0LnRhcmdldC5jYWxsKHQudGhhdCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItIit0LmRhdGEubmFtZSx0LmRhdGEudmFsdWUpLHQuZGF0YS52YWx1ZT1sLnJld3JpdGVDU1ModC5kYXRhLnZhbHVlLHtjb250ZXh0OiJkZWNsYXJhdGlvbkxpc3QifSkpLGwuYXR0cnMuaXNIdG1sKHQuZGF0YS5uYW1lKSYmKHQudGFyZ2V0LmNhbGwodC50aGF0LGwuYXR0cmlidXRlUHJlZml4KyItYXR0ci0iK3QuZGF0YS5uYW1lLHQuZGF0YS52YWx1ZSksdC5kYXRhLnZhbHVlPWwucmV3cml0ZUh0bWwodC5kYXRhLnZhbHVlLHsuLi5sLm1ldGEsZG9jdW1lbnQ6ITAsaW5qZWN0SGVhZDpsLmNyZWF0ZUh0bWxJbmplY3QobC5oYW5kbGVyU2NyaXB0LGwuYnVuZGxlU2NyaXB0LGwuY29uZmlnU2NyaXB0LGwuY29va2llU3RyLGUubG9jYXRpb24uaHJlZil9KSksbC5hdHRycy5pc1NyY3NldCh0LmRhdGEubmFtZSkmJih0LnRhcmdldC5jYWxsKHQudGhhdCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItIit0LmRhdGEubmFtZSx0LmRhdGEudmFsdWUpLHQuZGF0YS52YWx1ZT1sLmh0bWwud3JhcFNyY3NldCh0LmRhdGEudmFsdWUpKSxsLmF0dHJzLmlzRm9yYmlkZGVuKHQuZGF0YS5uYW1lKSYmKHQuZGF0YS5uYW1lPWwuYXR0cmlidXRlUHJlZml4KyItYXR0ci0iK3QuZGF0YS5uYW1lKX0pKSxpLmVsZW1lbnQub24oImF1ZGlvIiwoZT0+e2UuZGF0YS51cmw9bC5yZXdyaXRlVXJsKGUuZGF0YS51cmwpfSkpLGkuZWxlbWVudC5ob29rUHJvcGVydHkoW2csYixmLF9dLCJocmVmIix7Z2V0OihlLHQpPT5sLnNvdXJjZVVybChlLmNhbGwodCkpLHNldDooZSx0LFthXSk9PntpLmVsZW1lbnQuc2V0QXR0cmlidXRlLmNhbGwodCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItaHJlZiIsYSksZS5jYWxsKHQsbC5yZXdyaXRlVXJsKGEpKX19KSxpLmVsZW1lbnQuaG9va1Byb3BlcnR5KFtkLGMsdSxzLFMsbSxoLHAsdix3XSwic3JjIix7Z2V0OihlLHQpPT5sLnNvdXJjZVVybChlLmNhbGwodCkpLHNldDooZSx0LFthXSk9PntpZihuZXcgU3RyaW5nKGEpLnRvU3RyaW5nKCkudHJpbSgpLnN0YXJ0c1dpdGgoImJsb2I6IikmJnQgaW5zdGFuY2VvZiBzKXJldHVybiBpLmVsZW1lbnQuc2V0QXR0cmlidXRlLmNhbGwodCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItc3JjIixhKSxlLmNhbGwodCxsLmJsb2JVcmxzLmdldChhKXx8YSk7aS5lbGVtZW50LnNldEF0dHJpYnV0ZS5jYWxsKHQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLXNyYyIsYSksZS5jYWxsKHQsbC5yZXdyaXRlVXJsKGEpKX19KSxpLmVsZW1lbnQuaG9va1Byb3BlcnR5KFt5XSwiYWN0aW9uIix7Z2V0OihlLHQpPT5sLnNvdXJjZVVybChlLmNhbGwodCkpLHNldDooZSx0LFthXSk9PntpLmVsZW1lbnQuc2V0QXR0cmlidXRlLmNhbGwodCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItYWN0aW9uIixhKSxlLmNhbGwodCxsLnJld3JpdGVVcmwoYSkpfX0pLGkuZWxlbWVudC5ob29rUHJvcGVydHkoW1NdLCJzcmNzZXQiLHtnZXQ6KGUsdCk9PmkuZWxlbWVudC5nZXRBdHRyaWJ1dGUuY2FsbCh0LGwuYXR0cmlidXRlUHJlZml4KyItYXR0ci1zcmNzZXQiKXx8ZS5jYWxsKHQpLHNldDooZSx0LFthXSk9PntpLmVsZW1lbnQuc2V0QXR0cmlidXRlLmNhbGwodCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItc3Jjc2V0IixhKSxlLmNhbGwodCxsLmh0bWwud3JhcFNyY3NldChhKSl9fSksaS5lbGVtZW50Lmhvb2tQcm9wZXJ0eShkLCJpbnRlZ3JpdHkiLHtnZXQ6KGUsdCk9PmkuZWxlbWVudC5nZXRBdHRyaWJ1dGUuY2FsbCh0LGwuYXR0cmlidXRlUHJlZml4KyItYXR0ci1pbnRlZ3JpdHkiKSxzZXQ6KGUsdCxbYV0pPT57aS5lbGVtZW50LnNldEF0dHJpYnV0ZS5jYWxsKHQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLWludGVncml0eSIsYSl9fSksaS5lbGVtZW50Lmhvb2tQcm9wZXJ0eShwLCJzYW5kYm94Iix7Z2V0OihlLHQpPT5pLmVsZW1lbnQuZ2V0QXR0cmlidXRlLmNhbGwodCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItc2FuZGJveCIpfHxlLmNhbGwodCksc2V0OihlLHQsW2FdKT0+e2kuZWxlbWVudC5zZXRBdHRyaWJ1dGUuY2FsbCh0LGwuYXR0cmlidXRlUHJlZml4KyItYXR0ci1zYW5kYm94IixhKX19KSxpLmVsZW1lbnQuaG9va1Byb3BlcnR5KHAsImNvbnRlbnRXaW5kb3ciLHtnZXQ6KGUscik9Pntjb25zdCBvPWUuY2FsbChyKTt0cnl7cmV0dXJuIG8uX191dnx8X191dkhvb2sobyx0LGEpLG99Y2F0Y2goZSl7cmV0dXJuIG99fX0pLGkuZWxlbWVudC5ob29rUHJvcGVydHkocCwiY29udGVudERvY3VtZW50Iix7Z2V0OihlLHIpPT57Y29uc3Qgbz1lLmNhbGwocik7dHJ5e2NvbnN0IGU9by5kZWZhdWx0VmlldztyZXR1cm4gZS5fX3V2fHxfX3V2SG9vayhlLHQsYSksb31jYXRjaChlKXtyZXR1cm4gd2lufX19KSxpLmVsZW1lbnQuaG9va1Byb3BlcnR5KHAsInNyY2RvYyIse2dldDooZSx0KT0+aS5lbGVtZW50LmdldEF0dHJpYnV0ZS5jYWxsKHQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLXNyY2RvYyIpfHxlLmNhbGwodCksc2V0Oih0LGEsW3JdKT0+e3QuY2FsbChhLGwucmV3cml0ZUh0bWwocix7ZG9jdW1lbnQ6ITAsaW5qZWN0SGVhZDpsLmNyZWF0ZUh0bWxJbmplY3QobC5oYW5kbGVyU2NyaXB0LGwuYnVuZGxlU2NyaXB0LGwuY29uZmlnU2NyaXB0LGwuY29va2llU3RyLGUubG9jYXRpb24uaHJlZil9KSl9fSksaS5ub2RlLm9uKCJnZXRUZXh0Q29udGVudCIsKGU9PnsiU0NSSVBUIj09PWUudGhhdC50YWdOYW1lJiYoZS5kYXRhLnZhbHVlPWwuanMuc291cmNlKGUuZGF0YS52YWx1ZSkpfSkpLGkubm9kZS5vbigic2V0VGV4dENvbnRlbnQiLChlPT57IlNDUklQVCI9PT1lLnRoYXQudGFnTmFtZSYmKGUuZGF0YS52YWx1ZT1sLmpzLnJld3JpdGUoZS5kYXRhLnZhbHVlKSl9KSksInNlcnZpY2VXb3JrZXIiaW4gZS5uYXZpZ2F0b3ImJmRlbGV0ZSBlLk5hdmlnYXRvci5wcm90b3R5cGUuc2VydmljZVdvcmtlcixpLmRvY3VtZW50Lm9uKCJnZXREb21haW4iLChlPT57ZS5kYXRhLnZhbHVlPWwuZG9tYWlufSkpLGkuZG9jdW1lbnQub24oInNldERvbWFpbiIsKGU9PntpZighZS5kYXRhLnZhbHVlLnRvU3RyaW5nKCkuZW5kc1dpdGgobC5tZXRhLnVybC5ob3N0bmFtZS5zcGxpdCgiLiIpLnNsaWNlKC0yKS5qb2luKCIuIikpKXJldHVybiBlLnJlc3BvbmRXaXRoKCIiKTtlLnJlc3BvbmRXaXRoKGwuZG9tYWluPWUuZGF0YS52YWx1ZSl9KSksaS5kb2N1bWVudC5vbigidXJsIiwoZT0+e2UuZGF0YS52YWx1ZT1sLmxvY2F0aW9uLmhyZWZ9KSksaS5kb2N1bWVudC5vbigiZG9jdW1lbnRVUkkiLChlPT57ZS5kYXRhLnZhbHVlPWwubG9jYXRpb24uaHJlZn0pKSxpLmRvY3VtZW50Lm9uKCJyZWZlcnJlciIsKGU9PntlLmRhdGEudmFsdWU9bC5yZWZlcnJlcnx8bC5zb3VyY2VVcmwoZS5kYXRhLnZhbHVlKX0pKSxpLmRvY3VtZW50Lm9uKCJwYXJzZUZyb21TdHJpbmciLChlPT57aWYoInRleHQvaHRtbCIhPT1lLmRhdGEudHlwZSlyZXR1cm4hMTtlLmRhdGEuc3RyaW5nPWwucmV3cml0ZUh0bWwoZS5kYXRhLnN0cmluZyx7Li4ubC5tZXRhLGRvY3VtZW50OiEwfSl9KSksaS5hdHRyaWJ1dGUub24oImdldFZhbHVlIiwoZT0+e2kuZWxlbWVudC5oYXNBdHRyaWJ1dGUuY2FsbChlLnRoYXQub3duZXJFbGVtZW50LGwuYXR0cmlidXRlUHJlZml4KyItYXR0ci0iK2UuZGF0YS5uYW1lKSYmKGUuZGF0YS52YWx1ZT1pLmVsZW1lbnQuZ2V0QXR0cmlidXRlLmNhbGwoZS50aGF0Lm93bmVyRWxlbWVudCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItIitlLmRhdGEubmFtZSkpfSkpLGkuYXR0cmlidXRlLm9uKCJzZXRWYWx1ZSIsKHQ9PntsLmF0dHJzLmlzVXJsKHQuZGF0YS5uYW1lKSYmKGkuZWxlbWVudC5zZXRBdHRyaWJ1dGUuY2FsbCh0LnRoYXQub3duZXJFbGVtZW50LGwuYXR0cmlidXRlUHJlZml4KyItYXR0ci0iK3QuZGF0YS5uYW1lLHQuZGF0YS52YWx1ZSksdC5kYXRhLnZhbHVlPWwucmV3cml0ZVVybCh0LmRhdGEudmFsdWUpKSxsLmF0dHJzLmlzU3R5bGUodC5kYXRhLm5hbWUpJiYoaS5lbGVtZW50LnNldEF0dHJpYnV0ZS5jYWxsKHQudGhhdC5vd25lckVsZW1lbnQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLSIrdC5kYXRhLm5hbWUsdC5kYXRhLnZhbHVlKSx0LmRhdGEudmFsdWU9bC5yZXdyaXRlQ1NTKHQuZGF0YS52YWx1ZSx7Y29udGV4dDoiZGVjbGFyYXRpb25MaXN0In0pKSxsLmF0dHJzLmlzSHRtbCh0LmRhdGEubmFtZSkmJihpLmVsZW1lbnQuc2V0QXR0cmlidXRlLmNhbGwodC50aGF0Lm93bmVyRWxlbWVudCxsLmF0dHJpYnV0ZVByZWZpeCsiLWF0dHItIit0LmRhdGEubmFtZSx0LmRhdGEudmFsdWUpLHQuZGF0YS52YWx1ZT1sLnJld3JpdGVIdG1sKHQuZGF0YS52YWx1ZSx7Li4ubC5tZXRhLGRvY3VtZW50OiEwLGluamVjdEhlYWQ6bC5jcmVhdGVIdG1sSW5qZWN0KGwuaGFuZGxlclNjcmlwdCxsLmJ1bmRsZVNjcmlwdCxsLmNvbmZpZ1NjcmlwdCxsLmNvb2tpZVN0cixlLmxvY2F0aW9uLmhyZWYpfSkpLGwuYXR0cnMuaXNTcmNzZXQodC5kYXRhLm5hbWUpJiYoaS5lbGVtZW50LnNldEF0dHJpYnV0ZS5jYWxsKHQudGhhdC5vd25lckVsZW1lbnQsbC5hdHRyaWJ1dGVQcmVmaXgrIi1hdHRyLSIrdC5kYXRhLm5hbWUsdC5kYXRhLnZhbHVlKSx0LmRhdGEudmFsdWU9bC5odG1sLndyYXBTcmNzZXQodC5kYXRhLnZhbHVlKSl9KSksaS51cmwub24oImNyZWF0ZU9iamVjdFVSTCIsKHQ9PntsZXQgYT10LnRhcmdldC5jYWxsKHQudGhhdCx0LmRhdGEub2JqZWN0KTtpZihhLnN0YXJ0c1dpdGgoImJsb2I6Iitsb2NhdGlvbi5vcmlnaW4pKXtsZXQgcj0iYmxvYjoiKygiYWJvdXQ6YmxhbmsiIT09bC5tZXRhLnVybC5ocmVmP2wubWV0YS51cmwub3JpZ2luOmUucGFyZW50Ll9fdXYubWV0YS51cmwub3JpZ2luKSthLnNsaWNlKDUrbG9jYXRpb24ub3JpZ2luLmxlbmd0aCk7bC5ibG9iVXJscy5zZXQocixhKSx0LnJlc3BvbmRXaXRoKHIpfWVsc2UgdC5yZXNwb25kV2l0aChhKX0pKSxpLnVybC5vbigicmV2b2tlT2JqZWN0VVJMIiwoZT0+e2lmKGwuYmxvYlVybHMuaGFzKGUuZGF0YS51cmwpKXtjb25zdCB0PWUuZGF0YS51cmw7ZS5kYXRhLnVybD1sLmJsb2JVcmxzLmdldChlLmRhdGEudXJsKSxsLmJsb2JVcmxzLmRlbGV0ZSh0KX19KSksaS5zdG9yYWdlLm9uKCJnZXQiLChlPT57ZS5kYXRhLm5hbWU9bitsLm1ldGEudXJsLm9yaWdpbisiQCIrZS5kYXRhLm5hbWV9KSksaS5zdG9yYWdlLm9uKCJzZXQiLChlPT57ZS50aGF0Ll9fdXYkc3RvcmFnZU9iaiYmKGUudGhhdC5fX3V2JHN0b3JhZ2VPYmpbZS5kYXRhLm5hbWVdPWUuZGF0YS52YWx1ZSksZS5kYXRhLm5hbWU9bitsLm1ldGEudXJsLm9yaWdpbisiQCIrZS5kYXRhLm5hbWV9KSksaS5zdG9yYWdlLm9uKCJkZWxldGUiLChlPT57ZS50aGF0Ll9fdXYkc3RvcmFnZU9iaiYmZGVsZXRlIGUudGhhdC5fX3V2JHN0b3JhZ2VPYmpbZS5kYXRhLm5hbWVdLGUuZGF0YS5uYW1lPW4rbC5tZXRhLnVybC5vcmlnaW4rIkAiK2UuZGF0YS5uYW1lfSkpLGkuc3RvcmFnZS5vbigiZ2V0SXRlbSIsKGU9PntlLmRhdGEubmFtZT1uK2wubWV0YS51cmwub3JpZ2luKyJAIitlLmRhdGEubmFtZX0pKSxpLnN0b3JhZ2Uub24oInNldEl0ZW0iLChlPT57ZS50aGF0Ll9fdXYkc3RvcmFnZU9iaiYmKGUudGhhdC5fX3V2JHN0b3JhZ2VPYmpbZS5kYXRhLm5hbWVdPWUuZGF0YS52YWx1ZSksZS5kYXRhLm5hbWU9bitsLm1ldGEudXJsLm9yaWdpbisiQCIrZS5kYXRhLm5hbWV9KSksaS5zdG9yYWdlLm9uKCJyZW1vdmVJdGVtIiwoZT0+e2UudGhhdC5fX3V2JHN0b3JhZ2VPYmomJmRlbGV0ZSBlLnRoYXQuX191diRzdG9yYWdlT2JqW2UuZGF0YS5uYW1lXSxlLmRhdGEubmFtZT1uK2wubWV0YS51cmwub3JpZ2luKyJAIitlLmRhdGEubmFtZX0pKSxpLnN0b3JhZ2Uub24oImNsZWFyIiwoZT0+e2lmKGUudGhhdC5fX3V2JHN0b3JhZ2VPYmopZm9yKGNvbnN0IHQgb2YgaS5uYXRpdmVNZXRob2RzLmtleXMuY2FsbChudWxsLGUudGhhdC5fX3V2JHN0b3JhZ2VPYmopKWRlbGV0ZSBlLnRoYXQuX191diRzdG9yYWdlT2JqW3RdLGkuc3RvcmFnZS5yZW1vdmVJdGVtLmNhbGwoZS50aGF0LG4rbC5tZXRhLnVybC5vcmlnaW4rIkAiK3QpLGUucmVzcG9uZFdpdGgoKX0pKSxpLnN0b3JhZ2Uub24oImxlbmd0aCIsKGU9PntlLnRoYXQuX191diRzdG9yYWdlT2JqJiZlLnJlc3BvbmRXaXRoKGkubmF0aXZlTWV0aG9kcy5rZXlzLmNhbGwobnVsbCxlLnRoYXQuX191diRzdG9yYWdlT2JqKS5sZW5ndGgpfSkpLGkuc3RvcmFnZS5vbigia2V5IiwoZT0+e2UudGhhdC5fX3V2JHN0b3JhZ2VPYmomJmUucmVzcG9uZFdpdGgoaS5uYXRpdmVNZXRob2RzLmtleXMuY2FsbChudWxsLGUudGhhdC5fX3V2JHN0b3JhZ2VPYmopW2UuZGF0YS5pbmRleF18fG51bGwpfSkpLGkud2Vic29ja2V0Lm9uKCJ3ZWJzb2NrZXQiLChhc3luYyB0PT57bGV0IGE7dHJ5e2E9bmV3IFVSTCh0LmRhdGEudXJsKX1jYXRjaChlKXtyZXR1cm59Y29uc3Qgcj17SG9zdDphLmhvc3QsT3JpZ2luOmwubWV0YS51cmwub3JpZ2luLFByYWdtYToibm8tY2FjaGUiLCJDYWNoZS1Db250cm9sIjoibm8tY2FjaGUiLFVwZ3JhZGU6IndlYnNvY2tldCIsIlVzZXItQWdlbnQiOmUubmF2aWdhdG9yLnVzZXJBZ2VudCxDb25uZWN0aW9uOiJVcGdyYWRlIn0sbz1sLmNvb2tpZS5zZXJpYWxpemUobC5jb29raWVzLHt1cmw6YX0sITEpO28mJihyLkNvb2tpZT1vKTtjb25zdCBzPVsuLi50LmRhdGEucHJvdG9jb2xzXSxkPXtwcm90b2NvbDphLnByb3RvY29sLGhvc3Q6YS5ob3N0bmFtZSxwb3J0OmEucG9ydHx8KCJ3c3M6Ij09PWEucHJvdG9jb2w/IjQ0MyI6IjgwIikscGF0aDphLnBhdGhuYW1lK2Euc2VhcmNofTtzLmxlbmd0aCYmKHJbIlNlYy1XZWJTb2NrZXQtUHJvdG9jb2wiXT1zLmpvaW4oIiwgIikpLHQuZGF0YS51cmw9KCJodHRwczoiPT09bC5iYXJlLnByb3RvY29sPyJ3c3M6Ly8iOiJ3czovLyIpK2wuYmFyZS5ob3N0K2wuYmFyZS5wYXRobmFtZSsidjEvIix0LmRhdGEucHJvdG9jb2xzPVsiYmFyZSIsbC5lbmNvZGVQcm90b2NvbChKU09OLnN0cmluZ2lmeSh7cmVtb3RlOmQsaGVhZGVyczpyLGZvcndhcmRfaGVhZGVyczpbImFjY2VwdCIsImFjY2VwdC1lbmNvZGluZyIsImFjY2VwdC1sYW5ndWFnZSIsInNlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyIsInNlYy13ZWJzb2NrZXQta2V5Iiwic2VjLXdlYnNvY2tldC12ZXJzaW9uIl19KSldO2NvbnN0IGM9bmV3IHQudGFyZ2V0KHQuZGF0YS51cmwsdC5kYXRhLnByb3RvY29scyk7aS5uYXRpdmVNZXRob2RzLmRlZmluZVByb3BlcnR5KGMsbisidXJsIix7ZW51bWVyYWJsZTohMSx2YWx1ZTphLmhyZWZ9KSx0LnJlc3BvbmRXaXRoKGMpfSkpLGkud2Vic29ja2V0Lm9uKCJ1cmwiLChlPT57Il9fdXYkdXJsImluIGUudGhhdCYmKGUuZGF0YS52YWx1ZT1lLnRoYXQuX191diR1cmwpfSkpLGkud2Vic29ja2V0Lm9uKCJwcm90b2NvbCIsKGU9PnsiX191diRwcm90b2NvbCJpbiBlLnRoYXQmJihlLmRhdGEudmFsdWU9ZS50aGF0Ll9fdXYkcHJvdG9jb2wpfSkpLGkuZnVuY3Rpb24ub24oImZ1bmN0aW9uIiwoZT0+e2UuZGF0YS5zY3JpcHQ9bC5yZXdyaXRlSlMoZS5kYXRhLnNjcmlwdCl9KSksaS5mdW5jdGlvbi5vbigidG9TdHJpbmciLChlPT57bC5tZXRob2RzLnN0cmluZyBpbiBlLnRoYXQmJmUucmVzcG9uZFdpdGgoZS50aGF0W2wubWV0aG9kcy5zdHJpbmddKX0pKSxpLm9iamVjdC5vbigiZ2V0T3duUHJvcGVydHlOYW1lcyIsKGU9PntlLmRhdGEubmFtZXM9ZS5kYXRhLm5hbWVzLmZpbHRlcigoZT0+IWwuZmlsdGVyS2V5cy5pbmNsdWRlcyhlKSkpfSkpLGkub2JqZWN0Lm9uKCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwoZT0+e2Zvcihjb25zdCB0IG9mIGwuZmlsdGVyS2V5cylkZWxldGUgZS5kYXRhLmRlc2NyaXB0b3JzW3RdfSkpLGkuc3R5bGUub24oInNldFByb3BlcnR5IiwoZT0+e2kuc3R5bGUuZGFzaGVkVXJsUHJvcHMuaW5jbHVkZXMoZS5kYXRhLnByb3BlcnR5KSYmKGUuZGF0YS52YWx1ZT1sLnJld3JpdGVDU1MoZS5kYXRhLnZhbHVlLHtjb250ZXh0OiJ2YWx1ZSIsLi4ubC5tZXRhfSkpfSkpLGkuc3R5bGUub24oImdldFByb3BlcnR5VmFsdWUiLChlPT57aS5zdHlsZS5kYXNoZWRVcmxQcm9wcy5pbmNsdWRlcyhlLmRhdGEucHJvcGVydHkpJiZlLnJlc3BvbmRXaXRoKGwuc291cmNlQ1NTKGUudGFyZ2V0LmNhbGwoZS50aGF0LGUuZGF0YS5wcm9wZXJ0eSkse2NvbnRleHQ6InZhbHVlIiwuLi5sLm1ldGF9KSl9KSksIkNTUzJQcm9wZXJ0aWVzImluIGUpZm9yKGNvbnN0IHQgb2YgaS5zdHlsZS51cmxQcm9wcylpLm92ZXJyaWRlRGVzY3JpcHRvcihlLkNTUzJQcm9wZXJ0aWVzLnByb3RvdHlwZSx0LHtnZXQ6KGUsdCk9Pmwuc291cmNlQ1NTKGUuY2FsbCh0KSx7Y29udGV4dDoidmFsdWUiLC4uLmwubWV0YX0pLHNldDooZSx0LGEpPT57ZS5jYWxsKHQsbC5yZXdyaXRlQ1NTKGEse2NvbnRleHQ6InZhbHVlIiwuLi5sLm1ldGF9KSl9fSk7ZWxzZSJIVE1MRWxlbWVudCJpbiBlJiZpLm92ZXJyaWRlRGVzY3JpcHRvcihlLkhUTUxFbGVtZW50LnByb3RvdHlwZSwic3R5bGUiLHtnZXQ6KGUsdCk9Pntjb25zdCBhPWUuY2FsbCh0KTtpZighYVtuKyJtb2RpZmllZFN0eWxlIl0pZm9yKGNvbnN0IGUgb2YgaS5zdHlsZS51cmxQcm9wcylpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkoYSxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQoKXtjb25zdCB0PWkuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZS5jYWxsKHRoaXMsZSl8fCIiO3JldHVybiBsLnNvdXJjZUNTUyh0LHtjb250ZXh0OiJ2YWx1ZSIsLi4ubC5tZXRhfSl9LHNldCh0KXtpLnN0eWxlLnNldFByb3BlcnR5LmNhbGwodGhpcyxpLnN0eWxlLnByb3BUb0Rhc2hlZFtlXXx8ZSxsLnJld3JpdGVDU1ModCx7Y29udGV4dDoidmFsdWUiLC4uLmwubWV0YX0pKX19KSxpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkoYSxuKyJtb2RpZmllZFN0eWxlIix7ZW51bWVyYWJsZTohMSx2YWx1ZTohMH0pO3JldHVybiBhfX0pO2kuc3R5bGUub24oInNldENzc1RleHQiLChlPT57ZS5kYXRhLnZhbHVlPWwucmV3cml0ZUNTUyhlLmRhdGEudmFsdWUse2NvbnRleHQ6ImRlY2xhcmF0aW9uTGlzdCIsLi4ubC5tZXRhfSl9KSksaS5zdHlsZS5vbigiZ2V0Q3NzVGV4dCIsKGU9PntlLmRhdGEudmFsdWU9bC5zb3VyY2VDU1MoZS5kYXRhLnZhbHVlLHtjb250ZXh0OiJkZWNsYXJhdGlvbkxpc3QiLC4uLmwubWV0YX0pfSkpLGUud2luZG93JiZsLmFkZEV2ZW50TGlzdGVuZXIuY2FsbChlLCJoYXNoY2hhbmdlIiwodD0+e2lmKHQuX191diRkaXNwYXRjaGVkKXJldHVybiExO3Quc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7Y29uc3QgYT1lLmxvY2F0aW9uLmhhc2g7aS5oaXN0b3J5LnJlcGxhY2VTdGF0ZS5jYWxsKGUuaGlzdG9yeSwiIiwiIix0Lm9sZFVSTCksbC5sb2NhdGlvbi5oYXNoPWF9KSksaS5sb2NhdGlvbi5vbigiaGFzaGNoYW5nZSIsKCh0LGEscik9PntpZihyLkhhc2hDaGFuZ2VFdmVudCYmaS5oaXN0b3J5LnJlcGxhY2VTdGF0ZSl7aS5oaXN0b3J5LnJlcGxhY2VTdGF0ZS5jYWxsKGUuaGlzdG9yeSwiIiwiIixsLnJld3JpdGVVcmwoYSkpO2NvbnN0IG89bmV3IHIuSGFzaENoYW5nZUV2ZW50KCJoYXNoY2hhbmdlIix7bmV3VVJMOmEsb2xkVVJMOnR9KTtpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkobyxuKyJkaXNwYXRjaGVkIix7dmFsdWU6ITAsZW51bWVyYWJsZTohMX0pLGwuZGlzcGF0Y2hFdmVudC5jYWxsKGUsbyl9fSkpLGkuZmV0Y2gub3ZlcnJpZGVSZXF1ZXN0KCksaS5mZXRjaC5vdmVycmlkZVVybCgpLGkueGhyLm92ZXJyaWRlT3BlbigpLGkueGhyLm92ZXJyaWRlUmVzcG9uc2VVcmwoKSxpLmVsZW1lbnQub3ZlcnJpZGVIdG1sKCksaS5lbGVtZW50Lm92ZXJyaWRlQXR0cmlidXRlKCksaS5lbGVtZW50Lm92ZXJyaWRlSW5zZXJ0QWRqYWNlbnRIVE1MKCksaS5lbGVtZW50Lm92ZXJyaWRlQXVkaW8oKSxpLm5vZGUub3ZlcnJpZGVCYXNlVVJJKCksaS5ub2RlLm92ZXJyaWRlVGV4dENvbnRlbnQoKSxpLmF0dHJpYnV0ZS5vdmVycmlkZU5hbWVWYWx1ZSgpLGkuZG9jdW1lbnQub3ZlcnJpZGVEb21haW4oKSxpLmRvY3VtZW50Lm92ZXJyaWRlVVJMKCksaS5kb2N1bWVudC5vdmVycmlkZURvY3VtZW50VVJJKCksaS5kb2N1bWVudC5vdmVycmlkZVdyaXRlKCksaS5kb2N1bWVudC5vdmVycmlkZVJlZmVycmVyKCksaS5kb2N1bWVudC5vdmVycmlkZVBhcnNlRnJvbVN0cmluZygpLGkuc3RvcmFnZS5vdmVycmlkZU1ldGhvZHMoKSxpLnN0b3JhZ2Uub3ZlcnJpZGVMZW5ndGgoKSxpLm9iamVjdC5vdmVycmlkZUdldFByb3BlcnR5TmFtZXMoKSxpLm9iamVjdC5vdmVycmlkZUdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoKSxpLmhpc3Rvcnkub3ZlcnJpZGVQdXNoU3RhdGUoKSxpLmhpc3Rvcnkub3ZlcnJpZGVSZXBsYWNlU3RhdGUoKSxpLmV2ZW50U291cmNlLm92ZXJyaWRlQ29uc3RydWN0KCksaS5ldmVudFNvdXJjZS5vdmVycmlkZVVybCgpLGkud2Vic29ja2V0Lm92ZXJyaWRlV2ViU29ja2V0KCksaS53ZWJzb2NrZXQub3ZlcnJpZGVQcm90b2NvbCgpLGkud2Vic29ja2V0Lm92ZXJyaWRlVXJsKCksaS51cmwub3ZlcnJpZGVPYmplY3RVUkwoKSxpLmRvY3VtZW50Lm92ZXJyaWRlQ29va2llKCksaS5tZXNzYWdlLm92ZXJyaWRlUG9zdE1lc3NhZ2UoKSxpLm1lc3NhZ2Uub3ZlcnJpZGVNZXNzYWdlT3JpZ2luKCksaS5tZXNzYWdlLm92ZXJyaWRlTWVzc2FnZURhdGEoKSxpLndvcmtlcnMub3ZlcnJpZGVXb3JrZXIoKSxpLndvcmtlcnMub3ZlcnJpZGVBZGRNb2R1bGUoKSxpLndvcmtlcnMub3ZlcnJpZGVJbXBvcnRTY3JpcHRzKCksaS53b3JrZXJzLm92ZXJyaWRlUG9zdE1lc3NhZ2UoKSxpLnN0eWxlLm92ZXJyaWRlU2V0R2V0UHJvcGVydHkoKSxpLnN0eWxlLm92ZXJyaWRlQ3NzVGV4dCgpLGkubmF2aWdhdG9yLm92ZXJyaWRlU2VuZEJlYWNvbigpLGkuZnVuY3Rpb24ub3ZlcnJpZGVGdW5jdGlvbigpLGkuZnVuY3Rpb24ub3ZlcnJpZGVUb1N0cmluZygpLGkubG9jYXRpb24ub3ZlcnJpZGVXb3JrZXJMb2NhdGlvbigoZT0+bmV3IFVSTChsLnNvdXJjZVVybChlKSkpKSxpLm92ZXJyaWRlRGVzY3JpcHRvcihlLCJsb2NhbFN0b3JhZ2UiLHtnZXQ6KHQsYSk9PihhfHxlKS5fX3V2LmxzV3JhcH0pLGkub3ZlcnJpZGVEZXNjcmlwdG9yKGUsInNlc3Npb25TdG9yYWdlIix7Z2V0Oih0LGEpPT4oYXx8ZSkuX191di5zc1dyYXB9KSxpLm92ZXJyaWRlKGUsIm9wZW4iLCgoZSx0LGEpPT57aWYoIWEubGVuZ3RoKXJldHVybiBlLmFwcGx5KHQsYSk7bGV0W3JdPWE7cmV0dXJuIHI9bC5yZXdyaXRlVXJsKHIpLGUuY2FsbCh0LHIpfSkpLGwuJHdyYXA9ZnVuY3Rpb24oZSl7cmV0dXJuImxvY2F0aW9uIj09PWU/bC5tZXRob2RzLmxvY2F0aW9uOiJldmFsIj09PWU/bC5tZXRob2RzLmV2YWw6ZX0sbC4kZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0PT09ZS5sb2NhdGlvbj9sLmxvY2F0aW9uOnQ9PT1lLmV2YWw/bC5ldmFsOnQ9PT1lLnBhcmVudD9lLl9fdXYkcGFyZW50OnQ9PT1lLnRvcD9lLl9fdXYkdG9wOnR9LGwuZXZhbD1pLndyYXAoZSwiZXZhbCIsKChlLHQsYSk9PntpZighYS5sZW5ndGh8fCJzdHJpbmciIT10eXBlb2YgYVswXSlyZXR1cm4gZS5hcHBseSh0LGEpO2xldFtyXT1hO3JldHVybiByPWwucmV3cml0ZUpTKHIpLGUuY2FsbCh0LHIpfSkpLGwuY2FsbD1mdW5jdGlvbihlLHQsYSl7cmV0dXJuIGE/ZS5hcHBseShhLHQpOmUoLi4udCl9LGwuY2FsbCQ9ZnVuY3Rpb24oZSx0LGE9W10pe3JldHVybiBlW3RdLmFwcGx5KGUsYSl9LGkubmF0aXZlTWV0aG9kcy5kZWZpbmVQcm9wZXJ0eShlLk9iamVjdC5wcm90b3R5cGUsbyx7Z2V0OigpPT5sLGVudW1lcmFibGU6ITF9KSxpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkoZS5PYmplY3QucHJvdG90eXBlLGwubWV0aG9kcy5zZXRTb3VyY2Use3ZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBpLm5hdGl2ZU1ldGhvZHMuaXNFeHRlbnNpYmxlKHRoaXMpPyhpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkodGhpcyxsLm1ldGhvZHMuc291cmNlLHt2YWx1ZTplLHdyaXRhYmxlOiEwLGVudW1lcmFibGU6ITF9KSx0aGlzKTp0aGlzfSxlbnVtZXJhYmxlOiExfSksaS5uYXRpdmVNZXRob2RzLmRlZmluZVByb3BlcnR5KGUuT2JqZWN0LnByb3RvdHlwZSxsLm1ldGhvZHMuc291cmNlLHt2YWx1ZTpsLHdyaXRhYmxlOiEwLGVudW1lcmFibGU6ITF9KSxpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkoZS5PYmplY3QucHJvdG90eXBlLGwubWV0aG9kcy5sb2NhdGlvbix7Y29uZmlndXJhYmxlOiEwLGdldCgpe3JldHVybiB0aGlzPT09ZS5kb2N1bWVudHx8dGhpcz09PWU/bC5sb2NhdGlvbjp0aGlzLmxvY2F0aW9ufSxzZXQodCl7dGhpcz09PWUuZG9jdW1lbnR8fHRoaXM9PT1lP2wubG9jYXRpb24uaHJlZj10OnRoaXMubG9jYXRpb249dH19KSxpLm5hdGl2ZU1ldGhvZHMuZGVmaW5lUHJvcGVydHkoZS5PYmplY3QucHJvdG90eXBlLGwubWV0aG9kcy5wYXJlbnQse2NvbmZpZ3VyYWJsZTohMCxnZXQoKXtjb25zdCB0PXRoaXMucGFyZW50O2lmKHRoaXM9PT1lKXRyeXtyZXR1cm4iX191diJpbiB0P3Q6dGhpc31jYXRjaChlKXtyZXR1cm4gdGhpc31yZXR1cm4gdH0sc2V0KGUpe3RoaXMucGFyZW50PWV9fSksaS5uYXRpdmVNZXRob2RzLmRlZmluZVByb3BlcnR5KGUuT2JqZWN0LnByb3RvdHlwZSxsLm1ldGhvZHMudG9wLHtjb25maWd1cmFibGU6ITAsZ2V0KCl7Y29uc3QgdD10aGlzLnRvcDtpZih0aGlzPT09ZSl7aWYodD09PXRoaXMucGFyZW50KXJldHVybiB0aGlzW2wubWV0aG9kcy5wYXJlbnRdO3RyeXtpZigiX191diJpbiB0KXJldHVybiB0O3tsZXQgZT10aGlzO2Zvcig7ZS5wYXJlbnQhPT10OyllPWUucGFyZW50O3JldHVybiJfX3V2ImluIGU/ZTp0aGlzfX1jYXRjaChlKXtyZXR1cm4gdGhpc319cmV0dXJuIHR9LHNldChlKXt0aGlzLnRvcD1lfX0pLGkubmF0aXZlTWV0aG9kcy5kZWZpbmVQcm9wZXJ0eShlLk9iamVjdC5wcm90b3R5cGUsbC5tZXRob2RzLmV2YWwse2NvbmZpZ3VyYWJsZTohMCxnZXQoKXtyZXR1cm4gdGhpcz09PWU/bC5ldmFsOnRoaXMuZXZhbH0sc2V0KGUpe3RoaXMuZXZhbD1lfX0pfXNlbGYuX191dnx8X191dkhvb2soc2VsZixzZWxmLl9fdXYkY29uZmlnLHNlbGYuX191diRjb25maWcuYmFyZSk7`,
  "/uv/sw.js": `aW1wb3J0U2NyaXB0cygiL3V2L2J1bmRsZS5qcyIpLGltcG9ydFNjcmlwdHMoIi91di9jb25maWcuanMiKTtjbGFzcyBVVlNlcnZpY2VXb3JrZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXJ7Y29uc3RydWN0b3IoZT1fX3V2JGNvbmZpZyl7c3VwZXIoKSxlLmJhcmV8fChlLmJhcmU9Ii9iYXJlLyIpLHRoaXMuYWRkcmVzc2VzPSJzdHJpbmciPT10eXBlb2YgZS5iYXJlP1tuZXcgVVJMKGUuYmFyZSxsb2NhdGlvbildOmUuYmFyZS5tYXAoKGU9Pm5ldyBVUkwoZSxsb2NhdGlvbikpKSx0aGlzLmhlYWRlcnM9e2NzcDpbImNyb3NzLW9yaWdpbi1lbWJlZGRlci1wb2xpY3kiLCJjcm9zcy1vcmlnaW4tb3BlbmVyLXBvbGljeSIsImNyb3NzLW9yaWdpbi1yZXNvdXJjZS1wb2xpY3kiLCJjb250ZW50LXNlY3VyaXR5LXBvbGljeSIsImNvbnRlbnQtc2VjdXJpdHktcG9saWN5LXJlcG9ydC1vbmx5IiwiZXhwZWN0LWN0IiwiZmVhdHVyZS1wb2xpY3kiLCJvcmlnaW4taXNvbGF0aW9uIiwic3RyaWN0LXRyYW5zcG9ydC1zZWN1cml0eSIsInVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHMiLCJ4LWNvbnRlbnQtdHlwZS1vcHRpb25zIiwieC1kb3dubG9hZC1vcHRpb25zIiwieC1mcmFtZS1vcHRpb25zIiwieC1wZXJtaXR0ZWQtY3Jvc3MtZG9tYWluLXBvbGljaWVzIiwieC1wb3dlcmVkLWJ5IiwieC14c3MtcHJvdGVjdGlvbiJdLGZvcndhcmQ6WyJhY2NlcHQtZW5jb2RpbmciLCJjb25uZWN0aW9uIiwiY29udGVudC1sZW5ndGgiXX0sdGhpcy5tZXRob2Q9e2VtcHR5OlsiR0VUIiwiSEVBRCJdfSx0aGlzLnN0YXR1c0NvZGU9e2VtcHR5OlsyMDQsMzA0XX0sdGhpcy5jb25maWc9ZSx0aGlzLmJyb3dzZXI9VWx0cmF2aW9sZXQuQm93c2VyLmdldFBhcnNlcihzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQpLmdldEJyb3dzZXJOYW1lKCksIkZpcmVmb3giPT09dGhpcy5icm93c2VyJiYodGhpcy5oZWFkZXJzLmZvcndhcmQucHVzaCgidXNlci1hZ2VudCIpLHRoaXMuaGVhZGVycy5mb3J3YXJkLnB1c2goImNvbnRlbnQtdHlwZSIpKX1hc3luYyBmZXRjaCh7cmVxdWVzdDplfSl7aWYoIWUudXJsLnN0YXJ0c1dpdGgobG9jYXRpb24ub3JpZ2luKyh0aGlzLmNvbmZpZy5wcmVmaXh8fCIvc2VydmljZS8iKSkpcmV0dXJuIGZldGNoKGUpO3RyeXtjb25zdCB0PW5ldyBVbHRyYXZpb2xldCh0aGlzLmNvbmZpZyk7ImZ1bmN0aW9uIj09dHlwZW9mIHRoaXMuY29uZmlnLmNvbnN0cnVjdCYmdGhpcy5jb25maWcuY29uc3RydWN0KHQsInNlcnZpY2UiKTtjb25zdCByPWF3YWl0IHQuY29va2llLmRiKCk7dC5tZXRhLm9yaWdpbj1sb2NhdGlvbi5vcmlnaW4sdC5tZXRhLmJhc2U9dC5tZXRhLnVybD1uZXcgVVJMKHQuc291cmNlVXJsKGUudXJsKSk7Y29uc3Qgbj1uZXcgUmVxdWVzdENvbnRleHQoZSx0aGlzLHQsdGhpcy5tZXRob2QuZW1wdHkuaW5jbHVkZXMoZS5tZXRob2QudG9VcHBlckNhc2UoKSk/bnVsbDphd2FpdCBlLmJsb2IoKSk7aWYoImJsb2I6Ij09PXQubWV0YS51cmwucHJvdG9jb2wmJihuLmJsb2I9ITAsbi5iYXNlPW4udXJsPW5ldyBVUkwobi51cmwucGF0aG5hbWUpKSxlLnJlZmVycmVyJiZlLnJlZmVycmVyLnN0YXJ0c1dpdGgobG9jYXRpb24ub3JpZ2luKSl7Y29uc3Qgcj1uZXcgVVJMKHQuc291cmNlVXJsKGUucmVmZXJyZXIpKTsobi5oZWFkZXJzLm9yaWdpbnx8dC5tZXRhLnVybC5vcmlnaW4hPT1yLm9yaWdpbiYmImNvcnMiPT09ZS5tb2RlKSYmKG4uaGVhZGVycy5vcmlnaW49ci5vcmlnaW4pLG4uaGVhZGVycy5yZWZlcmVyPXIuaHJlZn1jb25zdCBzPWF3YWl0IHQuY29va2llLmdldENvb2tpZXMocil8fFtdLGk9dC5jb29raWUuc2VyaWFsaXplKHMsdC5tZXRhLCExKTsiRmlyZWZveCI9PT10aGlzLmJyb3dzZXImJiJpZnJhbWUiIT09ZS5kZXN0aW5hdGlvbiYmImRvY3VtZW50IiE9PWUuZGVzdGluYXRpb24mJm4uZm9yd2FyZC5zaGlmdCgpLGkmJihuLmhlYWRlcnMuY29va2llPWkpLG4uaGVhZGVycy5Ib3N0PW4udXJsLmhvc3Q7Y29uc3Qgbz1uZXcgSG9va0V2ZW50KG4sbnVsbCxudWxsKTtpZih0aGlzLmVtaXQoInJlcXVlc3QiLG8pLG8uaW50ZXJjZXB0ZWQpcmV0dXJuIG8ucmV0dXJuVmFsdWU7Y29uc3QgYT1hd2FpdCBmZXRjaChuLnNlbmQpO2lmKDUwMD09PWEuc3RhdHVzKXJldHVybiBQcm9taXNlLnJlamVjdCgiIik7Y29uc3QgYz1uZXcgUmVzcG9uc2VDb250ZXh0KG4sYSx0aGlzKSx1PW5ldyBIb29rRXZlbnQoYyxudWxsLG51bGwpO2lmKHRoaXMuZW1pdCgiYmVmb3JlbW9kIix1KSx1LmludGVyY2VwdGVkKXJldHVybiB1LnJldHVyblZhbHVlO2Zvcihjb25zdCBlIG9mIHRoaXMuaGVhZGVycy5jc3ApYy5oZWFkZXJzW2VdJiZkZWxldGUgYy5oZWFkZXJzW2VdO2lmKGMuaGVhZGVycy5sb2NhdGlvbiYmKGMuaGVhZGVycy5sb2NhdGlvbj10LnJld3JpdGVVcmwoYy5oZWFkZXJzLmxvY2F0aW9uKSksYy5oZWFkZXJzWyJzZXQtY29va2llIl0mJihQcm9taXNlLnJlc29sdmUodC5jb29raWUuc2V0Q29va2llcyhjLmhlYWRlcnNbInNldC1jb29raWUiXSxyLHQubWV0YSkpLnRoZW4oKCgpPT57c2VsZi5jbGllbnRzLm1hdGNoQWxsKCkudGhlbigoZnVuY3Rpb24oZSl7ZS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLnBvc3RNZXNzYWdlKHttc2c6InVwZGF0ZUNvb2tpZXMiLHVybDp0Lm1ldGEudXJsLmhyZWZ9KX0pKX0pKX0pKSxkZWxldGUgYy5oZWFkZXJzWyJzZXQtY29va2llIl0pLGMuYm9keSlzd2l0Y2goZS5kZXN0aW5hdGlvbil7Y2FzZSJzY3JpcHQiOmNhc2Uid29ya2VyIjpjLmJvZHk9YGlmICghc2VsZi5fX3V2ICYmIHNlbGYuaW1wb3J0U2NyaXB0cykgaW1wb3J0U2NyaXB0cygnJHtfX3V2JGNvbmZpZy5idW5kbGV9JywgJyR7X191diRjb25maWcuY29uZmlnfScsICcke19fdXYkY29uZmlnLmhhbmRsZXJ9Jyk7XG5gLGMuYm9keSs9dC5qcy5yZXdyaXRlKGF3YWl0IGEudGV4dCgpKTticmVhaztjYXNlInN0eWxlIjpjLmJvZHk9dC5yZXdyaXRlQ1NTKGF3YWl0IGEudGV4dCgpKTticmVhaztjYXNlImlmcmFtZSI6Y2FzZSJkb2N1bWVudCI6aXNIdG1sKHQubWV0YS51cmwsYy5oZWFkZXJzWyJjb250ZW50LXR5cGUiXXx8IiIpJiYoYy5ib2R5PXQucmV3cml0ZUh0bWwoYXdhaXQgYS50ZXh0KCkse2RvY3VtZW50OiEwLGluamVjdEhlYWQ6dC5jcmVhdGVIdG1sSW5qZWN0KHRoaXMuY29uZmlnLmhhbmRsZXIsdGhpcy5jb25maWcuYnVuZGxlLHRoaXMuY29uZmlnLmNvbmZpZyx0LmNvb2tpZS5zZXJpYWxpemUocyx0Lm1ldGEsITApLGUucmVmZXJyZXIpfSkpfXJldHVybiJ0ZXh0L2V2ZW50LXN0cmVhbSI9PT1uLmhlYWRlcnMuYWNjZXB0JiYoYy5oZWFkZXJzWyJjb250ZW50LXR5cGUiXT0idGV4dC9ldmVudC1zdHJlYW0iKSx0aGlzLmVtaXQoInJlc3BvbnNlIix1KSx1LmludGVyY2VwdGVkP3UucmV0dXJuVmFsdWU6bmV3IFJlc3BvbnNlKGMuYm9keSx7aGVhZGVyczpjLmhlYWRlcnMsc3RhdHVzOmMuc3RhdHVzLHN0YXR1c1RleHQ6Yy5zdGF0dXNUZXh0fSl9Y2F0Y2goZSl7cmV0dXJuIG5ldyBSZXNwb25zZShlLnRvU3RyaW5nKCkse3N0YXR1czo1MDB9KX19Z2V0QmFyZXJSZXNwb25zZShlKXtjb25zdCB0PXt9LHI9SlNPTi5wYXJzZShlLmhlYWRlcnMuZ2V0KCJ4LWJhcmUtaGVhZGVycyIpKTtmb3IoY29uc3QgZSBpbiByKXRbZS50b0xvd2VyQ2FzZSgpXT1yW2VdO3JldHVybntoZWFkZXJzOnQsc3RhdHVzOitlLmhlYWRlcnMuZ2V0KCJ4LWJhcmUtc3RhdHVzIiksc3RhdHVzVGV4dDplLmhlYWRlcnMuZ2V0KCJ4LWJhcmUtc3RhdHVzLXRleHQiKSxib2R5OnRoaXMuc3RhdHVzQ29kZS5lbXB0eS5pbmNsdWRlcygrZS5oZWFkZXJzLmdldCgieC1iYXJlLXN0YXR1cyIpKT9udWxsOmUuYm9keX19Z2V0IGFkZHJlc3MoKXtyZXR1cm4gdGhpcy5hZGRyZXNzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMuYWRkcmVzc2VzLmxlbmd0aCldfXN0YXRpYyBVbHRyYXZpb2xldD1VbHRyYXZpb2xldH1zZWxmLlVWU2VydmljZVdvcmtlcj1VVlNlcnZpY2VXb3JrZXI7Y2xhc3MgUmVzcG9uc2VDb250ZXh0e2NvbnN0cnVjdG9yKGUsdCxyKXtjb25zdHtoZWFkZXJzOm4sc3RhdHVzOnMsc3RhdHVzVGV4dDppLGJvZHk6b309ZS5ibG9iP3tzdGF0dXM6dC5zdGF0dXMsc3RhdHVzVGV4dDp0LnN0YXR1c1RleHQsaGVhZGVyczpPYmplY3QuZnJvbUVudHJpZXMoWy4uLnQuaGVhZGVycy5lbnRyaWVzKCldKSxib2R5OnQuYm9keX06ci5nZXRCYXJlclJlc3BvbnNlKHQpO3RoaXMucmVxdWVzdD1lLHRoaXMucmF3PXQsdGhpcy51bHRyYXZpb2xldD1lLnVsdHJhdmlvbGV0LHRoaXMuaGVhZGVycz1uLHRoaXMuc3RhdHVzPXMsdGhpcy5zdGF0dXNUZXh0PWksdGhpcy5ib2R5PW99Z2V0IHVybCgpe3JldHVybiB0aGlzLnJlcXVlc3QudXJsfWdldCBiYXNlKCl7cmV0dXJuIHRoaXMucmVxdWVzdC5iYXNlfXNldCBiYXNlKGUpe3RoaXMucmVxdWVzdC5iYXNlPWV9fWNsYXNzIFJlcXVlc3RDb250ZXh0e2NvbnN0cnVjdG9yKGUsdCxyLG49bnVsbCl7dGhpcy51bHRyYXZpb2xldD1yLHRoaXMucmVxdWVzdD1lLHRoaXMuaGVhZGVycz1PYmplY3QuZnJvbUVudHJpZXMoWy4uLmUuaGVhZGVycy5lbnRyaWVzKCldKSx0aGlzLm1ldGhvZD1lLm1ldGhvZCx0aGlzLmZvcndhcmQ9Wy4uLnQuaGVhZGVycy5mb3J3YXJkXSx0aGlzLmFkZHJlc3M9dC5hZGRyZXNzLHRoaXMuYm9keT1ufHxudWxsLHRoaXMucmVkaXJlY3Q9ZS5yZWRpcmVjdCx0aGlzLmNyZWRlbnRpYWxzPSJvbWl0Iix0aGlzLm1vZGU9ImNvcnMiPT09ZS5tb2RlP2UubW9kZToic2FtZS1vcmlnaW4iLHRoaXMuYmxvYj0hMX1nZXQgc2VuZCgpe3JldHVybiBuZXcgUmVxdWVzdCh0aGlzLmJsb2I/ImJsb2I6Iitsb2NhdGlvbi5vcmlnaW4rdGhpcy51cmwucGF0aG5hbWU6dGhpcy5hZGRyZXNzLmhyZWYrInYxLyIse21ldGhvZDp0aGlzLm1ldGhvZCxoZWFkZXJzOnsieC1iYXJlLXByb3RvY29sIjp0aGlzLnVybC5wcm90b2NvbCwieC1iYXJlLWhvc3QiOnRoaXMudXJsLmhvc3RuYW1lLCJ4LWJhcmUtcGF0aCI6dGhpcy51cmwucGF0aG5hbWUrdGhpcy51cmwuc2VhcmNoLCJ4LWJhcmUtcG9ydCI6dGhpcy51cmwucG9ydHx8KCJodHRwczoiPT09dGhpcy51cmwucHJvdG9jb2w/IjQ0MyI6IjgwIiksIngtYmFyZS1oZWFkZXJzIjpKU09OLnN0cmluZ2lmeSh0aGlzLmhlYWRlcnMpLCJ4LWJhcmUtZm9yd2FyZC1oZWFkZXJzIjpKU09OLnN0cmluZ2lmeSh0aGlzLmZvcndhcmQpLHVzZXJLZXk6dXNlcktleX0scmVkaXJlY3Q6dGhpcy5yZWRpcmVjdCxjcmVkZW50aWFsczp0aGlzLmNyZWRlbnRpYWxzLG1vZGU6bG9jYXRpb24ub3JpZ2luIT09dGhpcy5hZGRyZXNzLm9yaWdpbj8iY29ycyI6dGhpcy5tb2RlLGJvZHk6dGhpcy5ib2R5fSl9Z2V0IHVybCgpe3JldHVybiB0aGlzLnVsdHJhdmlvbGV0Lm1ldGEudXJsfXNldCB1cmwoZSl7dGhpcy51bHRyYXZpb2xldC5tZXRhLnVybD1lfWdldCBiYXNlKCl7cmV0dXJuIHRoaXMudWx0cmF2aW9sZXQubWV0YS5iYXNlfXNldCBiYXNlKGUpe3RoaXMudWx0cmF2aW9sZXQubWV0YS5iYXNlPWV9fWZ1bmN0aW9uIGlzSHRtbChlLHQ9IiIpe3JldHVybiJ0ZXh0L2h0bWwiPT09KFVsdHJhdmlvbGV0Lm1pbWUuY29udGVudFR5cGUodHx8ZS5wYXRobmFtZSl8fCJ0ZXh0L2h0bWwiKS5zcGxpdCgiOyIpWzBdfWNsYXNzIEhvb2tFdmVudHsjZTsjdDtjb25zdHJ1Y3RvcihlPXt9LHQ9bnVsbCxyPW51bGwpe3RoaXMuI2U9ITEsdGhpcy4jdD1udWxsLHRoaXMuZGF0YT1lLHRoaXMudGFyZ2V0PXQsdGhpcy50aGF0PXJ9Z2V0IGludGVyY2VwdGVkKCl7cmV0dXJuIHRoaXMuI2V9Z2V0IHJldHVyblZhbHVlKCl7cmV0dXJuIHRoaXMuI3R9cmVzcG9uZFdpdGgoZSl7dGhpcy4jdD1lLHRoaXMuI2U9ITB9fXZhciBSZWZsZWN0T3duS2V5cyxSPSJvYmplY3QiPT10eXBlb2YgUmVmbGVjdD9SZWZsZWN0Om51bGwsUmVmbGVjdEFwcGx5PVImJiJmdW5jdGlvbiI9PXR5cGVvZiBSLmFwcGx5P1IuYXBwbHk6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChlLHQscil9O2Z1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyhlKXtjb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybihlKX1SZWZsZWN0T3duS2V5cz1SJiYiZnVuY3Rpb24iPT10eXBlb2YgUi5vd25LZXlzP1Iub3duS2V5czpPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSl9OmZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKX07dmFyIE51bWJlcklzTmFOPU51bWJlci5pc05hTnx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPWV9O2Z1bmN0aW9uIEV2ZW50RW1pdHRlcigpe0V2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyl9RXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlcj1FdmVudEVtaXR0ZXIsRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzPXZvaWQgMCxFdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudD0wLEV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycz12b2lkIDA7dmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnM9MTA7ZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihlKXtpZigiZnVuY3Rpb24iIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgImxpc3RlbmVyIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgZSl9ZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyhlKXtyZXR1cm4gdm9pZCAwPT09ZS5fbWF4TGlzdGVuZXJzP0V2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzOmUuX21heExpc3RlbmVyc31mdW5jdGlvbiBfYWRkTGlzdGVuZXIoZSx0LHIsbil7dmFyIHMsaSxvO2lmKGNoZWNrTGlzdGVuZXIociksdm9pZCAwPT09KGk9ZS5fZXZlbnRzKT8oaT1lLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSxlLl9ldmVudHNDb3VudD0wKToodm9pZCAwIT09aS5uZXdMaXN0ZW5lciYmKGUuZW1pdCgibmV3TGlzdGVuZXIiLHQsci5saXN0ZW5lcj9yLmxpc3RlbmVyOnIpLGk9ZS5fZXZlbnRzKSxvPWlbdF0pLHZvaWQgMD09PW8pbz1pW3RdPXIsKytlLl9ldmVudHNDb3VudDtlbHNlIGlmKCJmdW5jdGlvbiI9PXR5cGVvZiBvP289aVt0XT1uP1tyLG9dOltvLHJdOm4/by51bnNoaWZ0KHIpOm8ucHVzaChyKSwocz1fZ2V0TWF4TGlzdGVuZXJzKGUpKT4wJiZvLmxlbmd0aD5zJiYhby53YXJuZWQpe28ud2FybmVkPSEwO3ZhciBhPW5ldyBFcnJvcigiUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAiK28ubGVuZ3RoKyIgIitTdHJpbmcodCkrIiBsaXN0ZW5lcnMgYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0Iik7YS5uYW1lPSJNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmciLGEuZW1pdHRlcj1lLGEudHlwZT10LGEuY291bnQ9by5sZW5ndGgsUHJvY2Vzc0VtaXRXYXJuaW5nKGEpfXJldHVybiBlfWZ1bmN0aW9uIG9uY2VXcmFwcGVyKCl7aWYoIXRoaXMuZmlyZWQpcmV0dXJuIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSx0aGlzLndyYXBGbiksdGhpcy5maXJlZD0hMCwwPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpOnRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsYXJndW1lbnRzKX1mdW5jdGlvbiBfb25jZVdyYXAoZSx0LHIpe3ZhciBuPXtmaXJlZDohMSx3cmFwRm46dm9pZCAwLHRhcmdldDplLHR5cGU6dCxsaXN0ZW5lcjpyfSxzPW9uY2VXcmFwcGVyLmJpbmQobik7cmV0dXJuIHMubGlzdGVuZXI9cixuLndyYXBGbj1zLHN9ZnVuY3Rpb24gX2xpc3RlbmVycyhlLHQscil7dmFyIG49ZS5fZXZlbnRzO2lmKHZvaWQgMD09PW4pcmV0dXJuW107dmFyIHM9blt0XTtyZXR1cm4gdm9pZCAwPT09cz9bXToiZnVuY3Rpb24iPT10eXBlb2Ygcz9yP1tzLmxpc3RlbmVyfHxzXTpbc106cj91bndyYXBMaXN0ZW5lcnMocyk6YXJyYXlDbG9uZShzLHMubGVuZ3RoKX1mdW5jdGlvbiBsaXN0ZW5lckNvdW50KGUpe3ZhciB0PXRoaXMuX2V2ZW50cztpZih2b2lkIDAhPT10KXt2YXIgcj10W2VdO2lmKCJmdW5jdGlvbiI9PXR5cGVvZiByKXJldHVybiAxO2lmKHZvaWQgMCE9PXIpcmV0dXJuIHIubGVuZ3RofXJldHVybiAwfWZ1bmN0aW9uIGFycmF5Q2xvbmUoZSx0KXtmb3IodmFyIHI9bmV3IEFycmF5KHQpLG49MDtuPHQ7KytuKXJbbl09ZVtuXTtyZXR1cm4gcn1mdW5jdGlvbiBzcGxpY2VPbmUoZSx0KXtmb3IoO3QrMTxlLmxlbmd0aDt0KyspZVt0XT1lW3QrMV07ZS5wb3AoKX1mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoZSl7Zm9yKHZhciB0PW5ldyBBcnJheShlLmxlbmd0aCkscj0wO3I8dC5sZW5ndGg7KytyKXRbcl09ZVtyXS5saXN0ZW5lcnx8ZVtyXTtyZXR1cm4gdH1mdW5jdGlvbiBvbmNlKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihyLG4pe2Z1bmN0aW9uIHMocil7ZS5yZW1vdmVMaXN0ZW5lcih0LGkpLG4ocil9ZnVuY3Rpb24gaSgpeyJmdW5jdGlvbiI9PXR5cGVvZiBlLnJlbW92ZUxpc3RlbmVyJiZlLnJlbW92ZUxpc3RlbmVyKCJlcnJvciIscykscihbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfWV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlLHQsaSx7b25jZTohMH0pLCJlcnJvciIhPT10JiZhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlLHMse29uY2U6ITB9KX0pKX1mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlLHQscil7ImZ1bmN0aW9uIj09dHlwZW9mIGUub24mJmV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlLCJlcnJvciIsdCxyKX1mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZSx0LHIsbil7aWYoImZ1bmN0aW9uIj09dHlwZW9mIGUub24pbi5vbmNlP2Uub25jZSh0LHIpOmUub24odCxyKTtlbHNle2lmKCJmdW5jdGlvbiIhPXR5cGVvZiBlLmFkZEV2ZW50TGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlICJlbWl0dGVyIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGUpO2UuYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbiBzKGkpe24ub25jZSYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQscykscihpKX0pKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwiZGVmYXVsdE1heExpc3RlbmVycyIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnN9LHNldDpmdW5jdGlvbihlKXtpZigibnVtYmVyIiE9dHlwZW9mIGV8fGU8MHx8TnVtYmVySXNOYU4oZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiAiZGVmYXVsdE1heExpc3RlbmVycyIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJytlKyIuIik7ZGVmYXVsdE1heExpc3RlbmVycz1lfX0pLEV2ZW50RW1pdHRlci5pbml0PWZ1bmN0aW9uKCl7dm9pZCAwIT09dGhpcy5fZXZlbnRzJiZ0aGlzLl9ldmVudHMhPT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50c3x8KHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApLHRoaXMuX21heExpc3RlbmVycz10aGlzLl9tYXhMaXN0ZW5lcnN8fHZvaWQgMH0sRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7aWYoIm51bWJlciIhPXR5cGVvZiBlfHxlPDB8fE51bWJlcklzTmFOKGUpKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgIm4iIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrZSsiLiIpO3JldHVybiB0aGlzLl9tYXhMaXN0ZW5lcnM9ZSx0aGlzfSxFdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycz1mdW5jdGlvbigpe3JldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpfSxFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXQucHVzaChhcmd1bWVudHNbcl0pO3ZhciBuPSJlcnJvciI9PT1lLHM9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PXMpbj1uJiZ2b2lkIDA9PT1zLmVycm9yO2Vsc2UgaWYoIW4pcmV0dXJuITE7aWYobil7dmFyIGk7aWYodC5sZW5ndGg+MCYmKGk9dFswXSksaSBpbnN0YW5jZW9mIEVycm9yKXRocm93IGk7dmFyIG89bmV3IEVycm9yKCJVbmhhbmRsZWQgZXJyb3IuIisoaT8iICgiK2kubWVzc2FnZSsiKSI6IiIpKTt0aHJvdyBvLmNvbnRleHQ9aSxvfXZhciBhPXNbZV07aWYodm9pZCAwPT09YSlyZXR1cm4hMTtpZigiZnVuY3Rpb24iPT10eXBlb2YgYSlSZWZsZWN0QXBwbHkoYSx0aGlzLHQpO2Vsc2V7dmFyIGM9YS5sZW5ndGgsdT1hcnJheUNsb25lKGEsYyk7Zm9yKHI9MDtyPGM7KytyKVJlZmxlY3RBcHBseSh1W3JdLHRoaXMsdCl9cmV0dXJuITB9LEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsZSx0LCExKX0sRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbj1FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyLEV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLGUsdCwhMCl9LEV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZT1mdW5jdGlvbihlLHQpe3JldHVybiBjaGVja0xpc3RlbmVyKHQpLHRoaXMub24oZSxfb25jZVdyYXAodGhpcyxlLHQpKSx0aGlzfSxFdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gY2hlY2tMaXN0ZW5lcih0KSx0aGlzLnByZXBlbmRMaXN0ZW5lcihlLF9vbmNlV3JhcCh0aGlzLGUsdCkpLHRoaXN9LEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLHMsaSxvO2lmKGNoZWNrTGlzdGVuZXIodCksdm9pZCAwPT09KG49dGhpcy5fZXZlbnRzKSlyZXR1cm4gdGhpcztpZih2b2lkIDA9PT0ocj1uW2VdKSlyZXR1cm4gdGhpcztpZihyPT09dHx8ci5saXN0ZW5lcj09PXQpMD09LS10aGlzLl9ldmVudHNDb3VudD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTooZGVsZXRlIG5bZV0sbi5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KCJyZW1vdmVMaXN0ZW5lciIsZSxyLmxpc3RlbmVyfHx0KSk7ZWxzZSBpZigiZnVuY3Rpb24iIT10eXBlb2Ygcil7Zm9yKHM9LTEsaT1yLmxlbmd0aC0xO2k+PTA7aS0tKWlmKHJbaV09PT10fHxyW2ldLmxpc3RlbmVyPT09dCl7bz1yW2ldLmxpc3RlbmVyLHM9aTticmVha31pZihzPDApcmV0dXJuIHRoaXM7MD09PXM/ci5zaGlmdCgpOnNwbGljZU9uZShyLHMpLDE9PT1yLmxlbmd0aCYmKG5bZV09clswXSksdm9pZCAwIT09bi5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KCJyZW1vdmVMaXN0ZW5lciIsZSxvfHx0KX1yZXR1cm4gdGhpc30sRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmY9RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcixFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycz1mdW5jdGlvbihlKXt2YXIgdCxyLG47aWYodm9pZCAwPT09KHI9dGhpcy5fZXZlbnRzKSlyZXR1cm4gdGhpcztpZih2b2lkIDA9PT1yLnJlbW92ZUxpc3RlbmVyKXJldHVybiAwPT09YXJndW1lbnRzLmxlbmd0aD8odGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCk6dm9pZCAwIT09cltlXSYmKDA9PS0tdGhpcy5fZXZlbnRzQ291bnQ/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6ZGVsZXRlIHJbZV0pLHRoaXM7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBzLGk9T2JqZWN0LmtleXMocik7Zm9yKG49MDtuPGkubGVuZ3RoOysrbikicmVtb3ZlTGlzdGVuZXIiIT09KHM9aVtuXSkmJnRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKHMpO3JldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygicmVtb3ZlTGlzdGVuZXIiKSx0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wLHRoaXN9aWYoImZ1bmN0aW9uIj09dHlwZW9mKHQ9cltlXSkpdGhpcy5yZW1vdmVMaXN0ZW5lcihlLHQpO2Vsc2UgaWYodm9pZCAwIT09dClmb3Iobj10Lmxlbmd0aC0xO24+PTA7bi0tKXRoaXMucmVtb3ZlTGlzdGVuZXIoZSx0W25dKTtyZXR1cm4gdGhpc30sRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIF9saXN0ZW5lcnModGhpcyxlLCEwKX0sRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIF9saXN0ZW5lcnModGhpcyxlLCExKX0sRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2YgZS5saXN0ZW5lckNvdW50P2UubGlzdGVuZXJDb3VudCh0KTpsaXN0ZW5lckNvdW50LmNhbGwoZSx0KX0sRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50PWxpc3RlbmVyQ291bnQsRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50PjA/UmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKTpbXX07`
} 

base_64_encoded = ["/uv/sw.js","/uv/handler.js","/uv/bundle.js"]

for (let i = 0; i < base_64_encoded.length; i++) {
    const file = base_64_encoded[i];
    const data = files[file];
    const buffer = Buffer.from(data, 'base64');
    const string = buffer.toString('utf8');
    files[file] = string;
}

const { createBareServer } = require('@tomphttp/bare-server-node');
const { createServer } = require('http');
const Fastify = require('fastify');
const fastifyStatic = require('@fastify/static');
const { join } = require('path');

const bare = createBareServer('/bare/');
const fastify = Fastify();
const proxyServer = httpProxy.createProxyServer();

__dirname = join(__filename, '..');


fastify.get('/*', (req, reply) => {
  const fileName = req.params['*'];
  
  if (files[fileName]) {
    // Return the content from the in-memory files object
    reply.type('text/html').send(files[fileName]);
  } else {
    // If the file is not found in the in-memory object, return a 404 or fallback to static files
    reply.code(404).send('File not found');
  }
});

const server = createServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
    return;
  }

  fastify.ready(err => {
    if (err) throw err;
    fastify.server.emit('request', req, res);
  });
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening on port ${process.env.PORT || 8080}`);
});