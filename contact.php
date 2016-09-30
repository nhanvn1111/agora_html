<?php
	
	//EMAIL VALIDATION
	function validateEmail($value){
		return preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $value);
	}
	
	//CHECK VARIABLES (EMPTY/NULL OR DEFAULT)
	if ( isset($_POST['name']) && $_POST['name']!="Name" && isset($_POST['email']) && $_POST['email']!="Email" && isset($_POST['message']) && $_POST['message']!="Your comments..." ) {
		
		//CHECK EMAIL	
		if ( validateEmail($_POST['email']) ) {
			
			
			
			////////////////////// EDIT HERE  /////////////////////////
			
			//SET HERE YOUR DESTINATION EMAIL
			//IT SHOULD BE FROM THE SAME DOMAIN WHERE SITE IS HOSTED
			$destination="name@yourdomain";
			
			//SET HERE YOUR EMAIL SUBJECT
			$subject="New message received from website contact form";

			//MESSAGE DATA (HTML FORMATTED)
			$mailMessage.="<dt><strong>Name:</strong></dt><dd>".$_POST['name']."</dd>";
			$mailMessage.="<dt><strong>E-mail:</strong></dt><dd>".$_POST['email']."</dd>";
			$mailMessage.="<dt><strong>Comments:</strong></dt><dd>";  
			$mailMessage.=nl2br($_POST['message'])."</dd></dl>";
			$mailMessage = utf8_decode($mailMessage);
			
			////////////////////// END EDIT  /////////////////////////
			
			
			
			//SENDER EMAIL
			$mailFrom=$_POST['email'];
			
			//HEADER DATA
			$mailHeader="From:".$mailFrom."\nReply-To:".$_POST['name']."<".$mailFrom.">\n"; 
			$mailHeader=$mailHeader."X-Mailer:PHP/".phpversion()."\n"; 
			$mailHeader=$mailHeader."Mime-Version: 1.0\n"; 
			$mailHeader=$mailHeader."Content-Type: text/html";
			
			if ( mail($destination,$subject,$mailMessage,$mailHeader) ) {
				echo 'Form succesfully sent!';
			}			
			else echo 'Server error. Please, try again later';
			
		}		
		else echo 'Non valid Email!';	//EMAIL VALIDATION ERROR
		
	}
	else echo 'Missing fields!';		//VARS ERROR		

?>