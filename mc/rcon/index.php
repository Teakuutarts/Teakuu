<?php
require 'config.php';
?>
<!DOCTYPE HTML>
<html>
<head>
	<title>TeakuuMC ✩ RCON</title>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="keywords" content="teakuu, teakuumc, teakuutarts, rcon" />
	<meta name="mobile-web-app-capable" content="yes">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Teakuu ✩ RCON">
	<meta property="og:site_name" content="Teakuu">
	<meta property="og:url" href="https://www.teakuu.tk/mc/rcon/">
	<meta property="og:description" content="Connect to TeakuuMC with ease!">
	<meta property="og:image" content="https://www.teakuu.tk/i/cat_sleep_tarst_large.jpg">
	<meta name="msapplication-TileColor" content="#FC6066">
	<meta name="theme-color" content="#FC6066">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	<script type="text/JavaScript" src="script.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">

</head>


<body>
	<!-- Stack the columns on mobile by making one full-width and the other half-width -->
	<div class="container-fluid content" style="padding-top: 15px;">
		<div class="alert alert-info" id="alertMessenge">Welcome to the Teakuu Hub Console.</div>
		<div class="alert alert-info"><center><?php echo $serverName; ?></center></div>
		<div class="row">
			<div class="col-md-8 col-lg-8 console">
				<div class="panel panel-primary" >
					<div class="panel-heading">
						<h3 class="panel-title">Console</h3>
					</div>
					<div class="panel-body">
						<ul class="list-group" id="groupConsole">
							<li class="list-group-item list-group-item-info">You are connected to TeakuuMC > Hub.</li>
							<li class="list-group-item list-group-item-info">Please select the <a href="./teakuu_console_hub.zip">Download</a> button if you do not wish to use this.</li>
						</ul>

					</div>
				</div>

				<div class="checkbox panel panel-default panel-body">
					<label style="padding-top: 1%;">
						<input type="checkbox" id="chkAutoScroll" checked="true" > Auto scroll
					</label>
					<button type="button" class="btn btn-primary" tabindex="0" id="btnClearLog" style="float:right;"><span class="glyphicon glyphicon-remove-sign"></span> Clear Console</button>
				</div>

				<div class="input-group">
					<input type="text" class="form-control" id="txtCommand">
					<div class="input-group-btn">
						<button type="button" class="btn btn-primary" tabindex="-1" id="btnSend"><span class="glyphicon glyphicon-arrow-right"></span> Send</button>
					</div>
				</div>
			</div>



			<div class="col-md-4 col-lg-4 status">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Server Status & Info</h3>
					</div>
					<div class="panel-body">
						<iframe src="query/status.php" width="100%" height="200px" frameBorder="0">Browser not compatible.</iframe>
					</div>

				</div>
				<div class="panel panel-default">
					<div class="panel-body">
						<li><a href="./teakuu_console_hub.zip">Download</a></li>
					</div>
				</div>

			</div>

		</div>
	</div>



</body>

<footer id = "footer">
	<div class="container-fluid">

	</div>
</footer>

</html>
