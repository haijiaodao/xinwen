<?php
// save.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];
 
    // 确保消息不包含不安全的字符
    $message = htmlspecialchars($message);
 
    // 确定保存文件的路径和文件名
    $filename = "messages.html";
 
    // 将消息追加到文件
    file_put_contents($filename, $message . "<br>", FILE_APPEND);
 
    // 提示用户留言已保存
    echo "Message saved!";
}
?>