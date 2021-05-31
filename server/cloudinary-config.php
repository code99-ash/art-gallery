<?php

require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use Cloudinary\Cloudinary;
// use Cloudinary\Configuration\Configuration;

// configure an instance via a JSON object

$cloudName = $_ENV['CLOUD_NAME'];

$cloudinary = new Cloudinary([
  'cloud' => [
    'cloud_name' => $_ENV['CLOUD_NAME'],
    'api_key'  => $_ENV['CLOUD_API_KEY'],
    'api_secret' => $_ENV['CLOUD_API_SECRET'],
  'url' => [
    'secure' => true]]]);


?>