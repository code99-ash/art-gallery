<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require '../vendor/autoload.php';
require "../cloudinary-config.php";

use Cloudinary\Api\Upload\UploadApi;

$data = array(
    'error' => false,
    'msg' => null
);
    if(isset($_POST['uploadToGallery'])) {
        
        $file = $_FILES['file'];

        $size = $file['size'];
        $tmp = $file['tmp_name'];
        $name = $file['name'];
        // $type = $file['type'];
        $newName = md5($name.time());

        $allowed = array('jpg', 'jpeg', 'png');
        $extension = pathinfo($name, PATHINFO_EXTENSION);

            if(in_array(strtolower($extension), $allowed)) {
                if($size <= 5000000) {
                    try {
                        $cloudinary->uploadApi()->upload($tmp, [
                            "public_id" => $newName
                        ]);
                        
                        $url = "https://res.cloudinary.com/$cloudName/image/upload/$newName";

                        Gallery::create(['url' => $url, 'file_name' => $newName]);
                        $gallery = Gallery::where('url', $url)->get();

                        $data['error'] = false;
                        $data['msg'] = $gallery[0];

                    }catch(Exception $e) {
                        $data['error'] = true;
                        $data['msg'] = $e;
                    }
                } else {
                    $data['error'] = true;
                    $data['msg'] = 'File size should not be more than 5MB';
                }
            } else {
                $data['error'] = true;
                $data['msg']= 'Only jpeg, jpeg and png file is allowed';
            }

            echo json_encode($data);
    }

    if(isset($_GET['fetchGallery'])) {
        $gallery = Gallery::all();
        echo $gallery;
    }

    if(isset($_POST['deleteFile'])) {
        $fileName = $_POST['deleteFile'];
        $fileName = explode(",",$fileName);
        
        try {
            Gallery::whereIn('file_name', $fileName)->delete();

            foreach($fileName as $name) {
                $cloudinary->uploadApi()->destroy($name);
            }

            $data['error'] = false;
            $data['msg'] = 'image deleted successfully';

        } catch(Exception $e) {
            $data['error'] = true;
            $data['msg'] = $e;
        }

        echo json_encode($data);
    }


?>