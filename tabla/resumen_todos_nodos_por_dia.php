<?php 

/* Devuelve información general sobre 1 día concreto de todos los nodos del sistema
 * @param date Fecha de la solicitud
 * */
	$width = "100%";
	$height = "100%";

	
	if(!empty($_GET["width"])){$width = htmlspecialchars($_GET["width"]);}
	if(!empty($_GET["height"])){$height = htmlspecialchars($_GET["height"]);}
	
	if(!empty($_GET["date"])){
		$date = htmlspecialchars($_GET["date"]);

	?>
	<input type="hidden" name="date" value="<?php echo $date; ?>" ></input>
<iframe width="<?php echo $width; ?>" height="<?php echo $height; ?>" scrolling="yes" frameborder="no" id="tabla" name="tabla" src="https://www.google.com/fusiontables/
	embedviz?viz=GVIZ&amp;
	t=TABLE&amp;q=select
		+col0%3E%3E0 as 'id' %2C
		+col3%3E%3E1 as 'Nombre'  %2C
		+SUM(col2%3E%3E0)      as 'Sum'  %2C
		+count() as 'Horas con registros'		%2C
		+MINIMUM(col2%3E%3E0)  as 'Min' %2C
		+MAXIMUM(col2%3E%3E0)  as 'Max'   %2C
		+AVERAGE(col2%3E%3E0)  as 'Avg'  
		from+1WENRMKLPrLdl-8WCKE0P6PTCwRkqCn88tRg-WuHV+where+col1%3E%3E0+%3C%3D+&#39;<?php echo $date; ?>+23%3A00%3A00&#39;+and+col1%3E%3E0+%3E%3D+&#39;<?php echo $date; ?>+00%3A00%3A00&#39;+group+by+col3%3E%3E1%2Ccol0%3E%3E0%2Ccol5%3E%3E1&amp;containerId=googft-gviz-canvas"></iframe>

<?php

} // Del if(!empty($_GET["date"]))
else{
?>

<?php

echo '<h1>Una fecha es necesaria</h1>';
	
	
} //Del else


?>
