<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>LitePlayer</title>

	<link rel="stylesheet" href="src/liteplayer.css">
</head>
<body>

	<div id="player"></div>
	
	<script src="src/liteplayer.js"></script>
	<script>
		var player = new LitePlayer({
			container: '#player',
			src: 'ebony.mp4',
			autoplay:true
		});
	</script>
</body>
</html>