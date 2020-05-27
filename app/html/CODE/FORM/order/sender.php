<?
 //если проблемы с кодировкой файла сохранить его в другой
    $name = $_POST['name']; // пришедшие переменные
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $text = $_POST['info'];

    echo $name;
    echo $phone;
    echo $text;

    $to = 'kuznecovs45@gmail.com';
    //$to = 'kuznecovs45@gmail.com';
    if ($name){$mainName="Имя: <strong>$name</strong><br>";}
    if ($phone){$mainPhone="Телефон: <strong>$phone</strong><br>";}
    if ($mail){$mainMail="Телефон: <strong>$mail</strong><br>";}
    if ($text){$mainText="Сообщение: <strong>$text</strong><br>";}
    $subject = 'Заявка с сайта ===========';
    $body = "Информация:<br><br>          
            $mainName
            $mainPhone
            $mainMail
            $mainText
            ";

    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/html; charset=utf-8";
    $headers[] = "Subject: {$subject}";
    $headers[] = "From: mail@===========";
    $headers[] = "X-Mailer: PHP/".phpversion();


    mail($to,  $subject, $body, implode("\r\n", $headers));

?>