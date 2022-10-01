<?php

// membuat signature by member twice hehe

// encrypt
$pass = "pagikucerah";
$secret = "Jihyo/Nayeon/Jeongyeon/Momo/Sana/Mina/Dahyun/Chaeyoung/Tzuyu"
$lockSig = hash_hmac('sha256', $pass, $secret);
echo $lockSig;


//descrypt
$pass = "masukan kode encrypt nya";
$secret = "Jihyo/Nayeon/Jeongyeon/Momo/Sana/Mina/Dahyun/Chaeyoung/Tzuyu"
$unlockSig = hash_hmac('sha256', $pass, $secret);
echo $unlockSig;

// end membuat signature



?>
