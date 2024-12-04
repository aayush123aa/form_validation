<?php
// Retrieve form data
$fname = $_POST["aayush_fname"];
$lname = $_POST["aayush_lname"];
$email = $_POST["aayush_email"];
$age = $_POST["aayush_age"];
$gender = $_POST["aayush_gen"];
$faculty = $_POST["aayush_faculty"];
$country_code = $_POST["aayush_con"];
$num = $_POST["aayush_con_num"];

// Combine country code with contact number
$phone = $country_code . $num;

// Define regex patterns
$fname_pattern = "/^[A-Za-z]+$/";  // Only letters, no spaces
$lname_pattern = "/^[A-Za-z]+$/";
$email_pattern = "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/";
$age_pattern = "/^\d+$/";  // Digits only
$number_pattern = "/^\+\d{1,3}\d{7,13}$/";  // Includes country code

// Validate fields
$errors = [];

if (empty($fname)) {
    $errors[] = "First name is required.";
} elseif (!preg_match($fname_pattern, $fname)) {
    $errors[] = "First name must contain only letters.";
}

if (empty($lname)) {
    $errors[] = "Last name is required.";
} elseif (!preg_match($lname_pattern, $lname)) {
    $errors[] = "Last name must contain only letters.";
}

if (empty($email)) {
    $errors[] = "Email is required.";
} elseif (!preg_match($email_pattern, $email)) {
    $errors[] = "Invalid email format.";
}

if (empty($age)) {
    $errors[] = "Age is required.";
} elseif (!preg_match($age_pattern, $age)) {
    $errors[] = "Age must be a number.";
}

if (empty($gender)) {
    $errors[] = "Gender is required.";
}

if (empty($faculty)) {
    $errors[] = "Faculty is required.";
}

if (empty($num)) {
    $errors[] = "Phone number is required.";
} elseif (!preg_match($number_pattern, $phone)) {
    $errors[] = "Invalid phone number format.";
}

// Display errors or success message
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p style='color: red;'>$error</p>";
    }
} else {
    echo "<p style='color: green;'>Form submitted successfully!</p>";
    echo "<p>First Name: $fname</p>";
    echo "<p>Last Name: $lname</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Age: $age</p>";
    echo "<p>Gender: $gender</p>";
    echo "<p>Faculty: $faculty</p>";
    echo "<p>Contact Number: $phone</p>";
}
?>
