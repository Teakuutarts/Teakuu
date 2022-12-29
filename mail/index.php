<?php
$to = "root@localhost";
$subject = "Mercury Test Email";
$message = "Testing Mercury to see if it sends email properly.";

if (mail($to,$subject,$message,$headers)) {
echo "The email has been sent!";
} else {
echo "The email has failed!";
}
?>
