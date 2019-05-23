<?php
/*
THIS FILE USES PHPMAILER INSTEAD OF THE PHP MAIL() FUNCTION
*/

require 'PHPMailer/PHPMailerAutoload.php';

/*
*  CONFIGURE EVERYTHING HERE
*/

// an email address that will be in the From field of the email.
$fromEmail = 'portfoliocaio@caio.com';
$fromName = 'Portfolio - Caio Poyares';

// an email address that will receive the email with the output of the form
$sendToEmail = 'capoyares@gmail.com';
$sendToName = 'Caio';

// subject of the email
$subject = 'Novo formulario de contato';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Nome','email' => 'Email', 'message' => 'Mensagem');

// message that will be displayed when everything is OK :)
$okMessage = 'Formulario de contato enviado com sucesso. Obrigado, entrarei em contato assim que possível!';

// If something goes wrong, we will display this message.
$errorMessage = 'Houve um erro enquanto a mensagem estava sendo enviada. Por favor, tente novamente.';

/*
*  LET'S DO THE SENDING
*/

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // robot detection
    $honeypot = trim($_POST["address"]);     
  
    if(!empty($honeypot)) {
      echo "BAD ROBOT!"; 
      exit;
    }
}

try
{
    
    if(count($_POST) == 0) throw new \Exception('Form is empty');
    
    $emailTextHtml = "<h1>Você recebeu um novo formulário de contato</h1><hr>";
    $emailTextHtml .= "<table>";

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email
        if (isset($fields[$key])) {
            $emailTextHtml .= "<tr><th>$fields[$key]</th><td>$value</td></tr>";
        }
    }
    $emailTextHtml .= "</table><hr>";
    $emailTextHtml .= "";
    
    $mail = new PHPMailer;

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($sendToEmail, $sendToName); // you can add more addresses by simply adding another line with $mail->addAddress();
    $mail->addAddress($sendToEmail2, $sendToName2);
    $mail->addReplyTo($from);
    
    $mail->isHTML(true);

    $mail->Subject = $subject;
    $mail->msgHTML($emailTextHtml); // this will also create a plain-text version of the HTML email, very handy
    
    
    if(!$mail->send()) {
        throw new \Exception('I could not send the email.' . $mail->ErrorInfo);
    }
    
    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    // $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['message'];
}