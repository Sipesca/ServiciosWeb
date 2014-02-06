//Controles añadidos

//Variable del cronómetro para el PLAY del tiempo
var crono;

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;
};

function updatelayer(){
  var cadena = "Intervalo = '";

  cadena += $("#map-date").val();

  cadena += " ";

  cadena += $("#map-hour").val();

  cadena += ":00:00'"

  console.log(cadena);

  layer.query.where = cadena;
  layer.setMap(map);
  infoWindow.close();

  //Codigo de las trazas
  cadena = "Fecha = '";
  cadena += $("#map-date").val();
  cadena += " ";
  cadena += $("#map-hour").val();
  cadena += ":00:00'"
  cadena += " AND Origen='";
  cadena += nodo;
  cadena += "'";

  layer_trazas.query.where = cadena;
  layer_trazas.setMap(map);

  //Actualizamos la información mostrada en el Info usando un disparador
  if(nodo != null){
    var mev = {stop: null, latLng: nodo_posicion }
  //google.maps.event.trigger(layer, 'click', {latLng:nodo_posicion});

   $("#ventanaInfoTramoValor").html("");
   $("#ventanaInfoNodoValorPasos").html("");

   //Hacemos invisible el tramo
   tramo_marcador.setVisible(false);

   //Volvemos a ajustar la interfaz (para los centrados y eso)
   google.maps.event.trigger(map, "resize");
}
}

function DateControl(controlDiv,map){
controlDiv.style.padding = '5px';

var controlUI = document.createElement('div');
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Elige la fecha de los datos';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';

  var cadena = "";

  cadena = '<div onclick="ClickDateMinus()" id ="map-date-minus" class="card" style="display:inline;" > - </div>';

  cadena = cadena + '<input value="' + new Date().toDateInputValue() +'" type="date" id="map-date" onchange="updatelayer()" name="_map.date" class="card">';

  cadena = cadena + '<div onclick="ClickDatePlus()" id ="map-date-plus" style="display:inline;" class="card" > + </div>';

  controlText.innerHTML = cadena;
  controlUI.appendChild(controlText);
}

function InfoControl(controlDiv,map){
controlDiv.style.padding = '5px';

var controlUI = document.createElement('div');
  controlUI.style.textAlign = 'center';
  //controlUI.className = "card";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '14px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';

  var cadena = "";

  cadena = '<div id ="ventanaInfoNodo" class="card" style="display:block;" > Nodo: <div id="ventanaInfoNodoValor" style="display:inline"> </div></div>';

  cadena = cadena + '<div id ="VentanaInfoTramo" style="display:block;" class="card" > Tramo: <div id="ventanaInfoTramoValor" style="display:inline"> </div> </div>';

  controlText.innerHTML = cadena;
  controlUI.appendChild(controlText);
}


function HourControl(controlDiv,map){

controlDiv.style.cssText = "padding:5px;background-color:white;width:65%; margin-bottom:20px;font-size: smaller;direction: ltr;overflow: hidden;text-align: center;position: relative;color: rgb(0, 0, 0);-webkit-user-select: none;font-size: 11px;background-color: rgb(255, 255, 255);padding: 1px 6px;border-bottom-left-radius: 2px;border-top-left-radius: 2px;-webkit-background-clip: padding-box;background-clip: padding-box;border: 1px solid rgba(0, 0, 0, 0.14902);-webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;";

var controlUI = document.createElement('div');
  //controlUI.style.backgroundColor = 'white';
  //controlUI.style.borderStyle = 'solid';
  //controlUI.style.borderColor = 'white';
  //controlUI.style.borderWidth = '2px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Elige la hora de los datos';
  controlDiv.appendChild(controlUI);


  // Set CSS for the control interior
 var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';


  
var cadena = '<output for="map-hour" id="map-hour-label">00:00</output>';

cadena = cadena + '<input style="width:100%" value="0" type="range" min="0" max="23" step="1" id="map-hour" name="_map.hour" list="hour_list" onchange="outputUpdatemaphour(value)"> <datalist id=hour_list> <option>0</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></datalist>';
cadena = cadena + '<div onclick="ClickHourMinus()" id ="map-hour-minus" style="display:inline;" class="card" > - </div>';
cadena = cadena + '<div onclick="ClickHourPlay()" id ="map-hour-play" style="display:inline;" class="card" > ▶ </div>';
cadena = cadena + '<div onclick="ClickHourPlus()" id ="map-hour-plus" style="display:inline;" class="card" > + </div>';
  controlText.innerHTML = cadena;
  

  controlUI.appendChild(controlText);



}

function outputUpdatemaphour(vol) { document.querySelector("#map-hour-label").value = vol + ":00"; updatelayer();}



//Añadir funcionalidad botón fecha-menos
function ClickDateMinus(){
  var fecha = new Date($("#map-date").val());
  $("#map-date").val(fecha.addDays(-1).toDateInputValue());
  updatelayer();
}

//Añadir funcionalidad botón fecha-más
function ClickDatePlus(){
  var fecha = new Date($("#map-date").val());
  $("#map-date").val(fecha.addDays(1).toDateInputValue());
  updatelayer();
}

//Añadir funcionalidad botón hora-mas
function ClickHourPlus(){
  var hora = $("#map-hour").val();
  if(hora==23){
     ClickDatePlus();
    $("#map-hour").val(0);
    outputUpdatemaphour(0);
  }else{
    $("#map-hour").val(parseInt(hora)+1);
    outputUpdatemaphour(parseInt(hora)+1);
  }
  updatelayer();
}

//Añadir funcionalidad botón hora-menos
function ClickHourMinus(){
  var hora = $("#map-hour").val();
  if(hora==0){
     ClickDateMinus();
    $("#map-hour").val(23);
    outputUpdatemaphour(23);
  }else{
    $("#map-hour").val(parseInt(hora)-1);
    outputUpdatemaphour(parseInt(hora)-1);
  }
  updatelayer();
}

function ClickHourPlay(){

if($("#map-hour-play").html() == " ▶ "){
  $("#map-hour-play").html(" ■ ");
  crono = setInterval(
    function(){
      ClickHourPlus();
    }
    ,2000);
}else{
  clearInterval(crono);
  $("#map-hour-play").html(" ▶ ");
}



}