window.onload = function() {
    try {
      TagCanvas.Start('myCanvas','tags', options);
    } catch(e) {
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
  var options = { 
    textColour : 'white',
    outlineThickness : 0.5,
    outlineColour : '#fe0853',
    maxSpeed : 0.06,
    freezeActive:true,
    shuffleTags:true,
    shape:'sphere',
    zoom:1,
    noSelect:true,
    textFont:'arial',
    textHeight:'30',
    pinchZoom:true,
    freezeDecel:true,
    fadeIn:3000,
    initial: [0.3,-0.1],
    depth : 0.8
  }
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("myCanvas").style.width = "300px";
    document.getElementById("myCanvas").style.height = "300px";
    }
  else {
    document.getElementById("myCanvas").style.width = "500px";
    document.getElementById("myCanvas").style.height = "500px";
  }
  
  function es_bisiesto(anho){
    if (((anho % 4 == 0) && (anho % 100 != 0 )) || (anho % 400 == 0)){
      return true;
    }
    return false;
  }
  let fecha1 = new Date('1997/10/17');
  let fecha2 = new Date()
  let dias_anho = 365;

  if(es_bisiesto(fecha2.getFullYear)){
    dias_anho = 366;
  }

  let resta = fecha2.getTime() - fecha1.getTime()
  let edad_anhos = Math.round(resta/ (1000*60*60*24*dias_anho))
  let edad_dias = Math.round(resta/ (1000*60*60*24))

  document.getElementById("edad").innerHTML = edad_anhos;
  document.getElementById("dias_vida").innerHTML = edad_dias;