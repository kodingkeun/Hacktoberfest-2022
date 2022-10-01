<?php
include "classes/class.phpmailer.php";
$mail = new PHPMailer; 
$mail->IsSMTP();
$mail->SMTPSecure = 'ssl'; 
$mail->Host = "namadomain.com"; //host masing2 provider email
$mail->SMTPDebug = 2;
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = "user@namadomain.com"; //user email
$mail->Password = "passwordemail123"; //password email 
$mail->SetFrom("user@namadomain.com","Nama Pegirim"); //set email pengirim
$mail->Subject = "Tes PHPmailer"; //subyek email
$mail->AddAddress("nama@emailpenerima.com","Nama Penerima");  //email tujuan email
$mail->MsgHTML("Tes Kirim Email Smtp Authentication IDwebhost");
if($mail->Send()) echo "Pesan Berhasil Di Kirim";
else echo "Failed to sending message";
?>