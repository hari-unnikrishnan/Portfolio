<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "harunnikrishnan16@gmail.com"; // your email to receive enquiry
    $name = strip_tags($_POST["name"]);
    $email = strip_tags($_POST["email"]);
    $subject = strip_tags($_POST["subject"]);
    $message = strip_tags($_POST["message"]);

    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "You have received a new enquiry:\n\n";
    $fullMessage .= "Name: $name\n";
    $fullMessage .= "Email: $email\n";
    $fullMessage .= "Subject: $subject\n";
    $fullMessage .= "Message:\n$message\n";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "<h3 style='color:green;'>Enquiry sent successfully!</h3>";
    } else {
        echo "<h3 style='color:red;'>Failed to send enquiry. Please try again later.</h3>";
    }
}
?>
