<?php
$to = 'teakuusweettart@gmail.com';
$subject = 'Hello from Teakuu!';
$message = 'This is a test';
$headers = "From: asierdavis@gmail.com\r\n";
if (mail($to, $subject, $message, $headers)) {
   echo "SUCCESS";
} else {
   echo "ERROR";
}