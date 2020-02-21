<?php

    $recipient='design@offsetcreatives.com';
    $subject="Website Contact";
    $name=$_POST["nameForm"];
    $senderEmail=$_POST["emailForm"];
    $comments=$_POST["commentsForm"];	

    $mailBody="Name: $name\nEmail: $senderEmail\nComments: $comments";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

