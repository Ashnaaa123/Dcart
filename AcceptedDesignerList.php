

 <?php
 include("../Connection.php");

        $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_designer where designer_vstatus=1 ";
    $row = $con->query($selQry);
    while($data = $row->fetch_assoc())
    {
        $i++;
        $list[] =  $data;
        $list[$j]['id'] = $i;
        $j++;
    }
    
    echo json_encode($list);
?>