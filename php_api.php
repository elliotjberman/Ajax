<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');  

$data1 = $_POST['datafield1']; //takes 2 sets of data from ajax call
$data2 = $_POST['datafield2'];

$con = mysql_connect('db','username','password');

if(!$con)
{
	die('Could not connect: ' . mysql_error());
}

mysql_select_db("jasdw",$con) or die(mysql_error());

$sql = "sql query using $data1 and $data2";

$result = mysql_query($sql,$con) or die(mysql_error());
$data = array(5);

while($row = mysql_fetch_array($result))
{
	$data = array(
		"data 1" => $row[0],
		"data 2" => $row[1],

}  

echo json_encode($data["data 1"] . ',' . $data["data 2"]);
mysql_close($con);
?>
