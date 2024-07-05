<?php
$targetDir = "uploads/";
$imageList = [];

// Open directory and read its contents
if ($handle = opendir($targetDir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            $imageList[] = array(
                'filename' => $entry
            );
        }
    }
    closedir($handle);
}

// Output JSON array of image filenames
header('Content-Type: application/json');
echo json_encode($imageList);
?>
