<?php 
	$width = "100%";
	$height = "100%";
	

	
	if(!empty($_GET["width"])){$width = htmlspecialchars($_GET["width"]);}
	if(!empty($_GET["height"])){$height = htmlspecialchars($_GET["height"]);}

	?>

<iframe width="<?php echo $width; ?>" height="<?php echo $height; ?>" scrolling="yes" frameborder="no" src="https://www.google.com/fusiontables/embedviz?viz=GVIZ&amp;t=TABLE&amp;q=select+col3%3E%3E1 as 'Nombre' %2C+col5%3E%3E1 as 'Tipo de sensor' %2C+MINIMUM(col1%3E%3E0) as 'Fecha Instalación' %2C+MAXIMUM(col1%3E%3E0) as 'Último registro'%2C+count() as 'Horas' +from+1WENRMKLPrLdl-8WCKE0P6PTCwRkqCn88tRg-WuHV+group+by+col3%3E%3E1%2Ccol0%3E%3E0%2Ccol5%3E%3E1&amp;containerId=googft-gviz-canvas"></iframe>
<iframe width="500" height="300" scrolling="yes" frameborder="no" src="https://www.google.com/fusiontables/embedviz?viz=GVIZ&amp;t=TABLE&amp;q=select+col3%3E%3E1%2C+col0%3E%3E0%2C+col5%3E%3E1%2C+count()%2C+MINIMUM(col2%3E%3E0)%2C+MAXIMUM(col2%3E%3E0)%2C+AVERAGE(col2%3E%3E0)%2C+SUM(col2%3E%3E0)%2C+MINIMUM(col1%3E%3E0)%2C+MAXIMUM(col1%3E%3E0)+from+1WENRMKLPrLdl-8WCKE0P6PTCwRkqCn88tRg-WuHV+where+col1%3E%3E0+%3C%3D+&#39;2014-03-20+23%3A00%3A00&#39;+and+col1%3E%3E0+%3E%3D+&#39;2014-03-20+00%3A00%3A00&#39;+group+by+col3%3E%3E1%2Ccol0%3E%3E0%2Ccol5%3E%3E1&amp;containerId=googft-gviz-canvas"></iframe>
