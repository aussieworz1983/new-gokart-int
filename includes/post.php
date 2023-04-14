<?php
if (isset($_POST['name'])) {
  $name = $_POST['name'];
  $last_name = $_POST['last_name'];
  $email = $_POST['email'];
  $number = $_POST['number'];
  $message = $_POST['message'];
  
  $headers = array(
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion()
  );
  
  $body = "$name $last_name $message $number";
  
  if (mail('info@youremail.com', 'Next Level Developments Customer Enquiry', $body, $headers)) {
    echo 'sent mail';
  } else {
    echo 'error sending mail';
  }
}

