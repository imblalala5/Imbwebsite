<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $camera = htmlspecialchars($_POST['camera']);
    $duration = htmlspecialchars($_POST['duration']);
    
    $orderData = "Nama: $name\nKamera: $camera\nDurasi: $duration jam\n\n";
    
    file_put_contents('orders.txt', $orderData, FILE_APPEND);
    
    echo "Pesanan Anda telah diterima. Terima kasih!";
}
?>