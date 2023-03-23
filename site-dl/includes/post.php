<?php
if(isset($_POST['name'])){
    $name = $_POST['name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];
    send_mail($name,$email,$message,$number);
    //echo "success".$name." ".var_dump($email)." ".$message." ".$number;
    echo "sent mail";




}
function send_mail($name,$last_name,$email,$message,$number){
     $to      = 'info@gokartinternational.com';
$subject = 'Next Level Developments Customer Enquiry';

$message = $name." ".$last_name." ".$message;



$headers = 'From:' . $email . "\r\n" .
    'Reply-To:' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


}
?>
