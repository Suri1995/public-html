<?php
require_once 'config.php';

setJSONHeaders();

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSONResponse(false, 'Invalid request method');
}

try {
    // Get database connection
    $conn = getDBConnection();
    if (!$conn) {
        throw new Exception('Database connection failed');
    }
    
    // Sanitize and validate input
    $name = sanitizeInput($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $subject = sanitizeInput($_POST['subject'] ?? '');
    $message = sanitizeInput($_POST['message'] ?? '');
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        sendJSONResponse(false, 'Please fill in all required fields');
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendJSONResponse(false, 'Invalid email format');
    }
    
    // Insert into database
    $sql = "INSERT INTO contact_messages (
        name, email, phone, subject, message, created_at
    ) VALUES (
        :name, :email, :phone, :subject, :message, NOW()
    )";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':subject' => $subject,
        ':message' => $message
    ]);
    
    $messageId = $conn->lastInsertId();
    
    // Send email notification to admin
    $emailSubject = "New Contact Form Submission - Amma Eye Care Hospital";
    $emailMessage = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { background: #f8fafc; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e3a8a; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='field'><span class='label'>Message ID:</span> #{$messageId}</div>
                <div class='field'><span class='label'>Name:</span> {$name}</div>
                <div class='field'><span class='label'>Email:</span> {$email}</div>
                <div class='field'><span class='label'>Phone:</span> {$phone}</div>
                <div class='field'><span class='label'>Subject:</span> {$subject}</div>
                <div class='field'><span class='label'>Message:</span><br>{$message}</div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    sendEmailNotification(ADMIN_EMAIL, $emailSubject, $emailMessage);
    
    sendJSONResponse(true, 'Thank you for contacting us! We will respond to your inquiry shortly.');
    
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    sendJSONResponse(false, 'An error occurred while sending your message. Please try again or call us directly.');
}
?>
