<?php
require 'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager;

Manager::schema()->dropIfExists('galleries');
Manager::schema()->create('galleries', function($table) {
    $table->increments('id');
    $table->string('file_name');
    $table->string('url');
    $table->timestamps();
});


?>