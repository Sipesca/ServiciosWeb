<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
		//Cargamos los paquetes necesarios.
      google.load('visualization', '1', {'packages':['motionchart']});
      google.load('visualization', '1', { packages: ['table'] });

      google.setOnLoadCallback(drawChart);
      function drawChart() {
        
        var gvizQuery = new google.visualization.Query('http://www.google.com/fusiontables/gvizdata?tq="select col0>>0,col1>>0,col2>>0 from 1WENRMKLPrLdl-8WCKE0P6PTCwRkqCn88tRg-WuHV Where idNodo=<?php echo $_GET["nodo"]; ?> "') ;
        
        console.log('http://www.google.com/fusiontables/gvizdata?tq="select col1>>0,col0>>0,col2>>0 from 1WENRMKLPrLdl-8WCKE0P6PTCwRkqCn88tRg-WuHV where idNodo=<?php echo $_GET["nodo"]; ?>"');
        
		var data;
        
        gvizQuery.send(function(response){
			
			data = response.getDataTable();
			
			console.log(data);
			var chart = new google.visualization.MotionChart(document.getElementById('chart_div'));
        chart.draw(data, {width: 900, height:360});
			
			});
        
      }
    </script>
  </head>

  <body>
    <div id="chart_div" style="width: 920px; height: 380px;"></div>
  </body>
</html>
