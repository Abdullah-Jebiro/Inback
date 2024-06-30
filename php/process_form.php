<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $city = $_POST['city'];
    $details = $_POST['details'];

    // Here you can add code to handle the form data, such as saving it to a database or sending an email
    // Example: Sending an email
    $to = "abdullahjebiro@gmail.com";
    $subject = "New Contact Us Form Submission";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nCity: $city\nDetails: $details";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>
