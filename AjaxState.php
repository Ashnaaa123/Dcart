<?php
    include("../Connection.php");



    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_state where country_id='".$_GET["id"]."'";
        $result = $con->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

?>