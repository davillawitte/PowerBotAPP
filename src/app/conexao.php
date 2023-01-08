<?php

  //Change the password to match your configuration
  $link = mysqli_connect("localhost", "root", "", "zdg");

  // Check connection
  if($link === false){
      die("ERROR: Could not connect. " . mysqli_connect_error());
  }
  echo "<br>";


  $sql = "SELECT id, user, nome, itens, pagamento, localizacao, total, horario FROM pedido_full";
  $result = $link->query($sql);
