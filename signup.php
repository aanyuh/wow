<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get user input
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirm_password"];

    // Validate password match
    if ($password !== $confirmPassword) {
        echo "Passwords do not match";
    } else {
        // Server-side validation and sanitization
        $username = mysqli_real_escape_string($conn, $username);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email address";
        } else {
            // Hash the password (you should use a proper password hashing library)
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Prepare and execute a SQL statement (use prepared statements)
            $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $email, $hashedPassword);

            if ($stmt->execute()) {
                echo "Registration successful!";
            } else {
                echo "Error: " . $stmt->error;
            }

            // Close the statement and database connection
            $stmt->close();
        }
    }

    // Close the database connection
    $conn->close();
}
?>
