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
    $firstName = sanitizeInput($_POST['firstName'] ?? '');
    $lastName = sanitizeInput($_POST['lastName'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $dob = sanitizeInput($_POST['dob'] ?? '');
    $appointmentDate = sanitizeInput($_POST['appointmentDate'] ?? '');
    $appointmentTime = sanitizeInput($_POST['appointmentTime'] ?? '');
    $service = sanitizeInput($_POST['service'] ?? '');
    $insurance = sanitizeInput($_POST['insurance'] ?? '');
    $policyNumber = sanitizeInput($_POST['policyNumber'] ?? '');
    $reason = sanitizeInput($_POST['reason'] ?? '');
    
    // Validate required fields
    if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || 
        empty($dob) || empty($appointmentDate) || empty($appointmentTime) || empty($service)) {
        sendJSONResponse(false, 'Please fill in all required fields');
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendJSONResponse(false, 'Invalid email format');
    }
    
    // Handle file upload
    $reportFile = null;
    if (isset($_FILES['reportFile']) && $_FILES['reportFile']['error'] !== UPLOAD_ERR_NO_FILE) {
        try {
            $reportFile = handleFileUpload($_FILES['reportFile']);
        } catch (Exception $e) {
            sendJSONResponse(false, $e->getMessage());
        }
    }
    
    // Insert into database
    $sql = "INSERT INTO appointments (
        first_name, last_name, email, phone, dob, 
        appointment_date, appointment_time, service, 
        insurance, policy_number, reason, report_file,
        created_at, status
    ) VALUES (
        :firstName, :lastName, :email, :phone, :dob,
        :appointmentDate, :appointmentTime, :service,
        :insurance, :policyNumber, :reason, :reportFile,
        NOW(), 'pending'
    )";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':firstName' => $firstName,
        ':lastName' => $lastName,
        ':email' => $email,
        ':phone' => $phone,
        ':dob' => $dob,
        ':appointmentDate' => $appointmentDate,
        ':appointmentTime' => $appointmentTime,
        ':service' => $service,
        ':insurance' => $insurance,
        ':policyNumber' => $policyNumber,
        ':reason' => $reason,
        ':reportFile' => $reportFile
    ]);
    
    $appointmentId = $conn->lastInsertId();
    
    // Send email notification to admin
    $emailSubject = "New Appointment Booking - Amma Eye Care Hospital";
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
                <h2>New Appointment Booking</h2>
            </div>
            <div class='content'>
                <div class='field'><span class='label'>Appointment ID:</span> #{$appointmentId}</div>
                <div class='field'><span class='label'>Name:</span> {$firstName} {$lastName}</div>
                <div class='field'><span class='label'>Email:</span> {$email}</div>
                <div class='field'><span class='label'>Phone:</span> {$phone}</div>
                <div class='field'><span class='label'>Date of Birth:</span> {$dob}</div>
                <div class='field'><span class='label'>Appointment Date:</span> {$appointmentDate}</div>
                <div class='field'><span class='label'>Appointment Time:</span> {$appointmentTime}</div>
                <div class='field'><span class='label'>Service:</span> {$service}</div>
                <div class='field'><span class='label'>Insurance:</span> {$insurance}</div>
                <div class='field'><span class='label'>Policy Number:</span> {$policyNumber}</div>
                <div class='field'><span class='label'>Reason:</span> {$reason}</div>
                " . ($reportFile ? "<div class='field'><span class='label'>Report File:</span> {$reportFile}</div>" : "") . "
            </div>
        </div>
    </body>
    </html>
    ";
    
    sendEmailNotification(ADMIN_EMAIL, $emailSubject, $emailMessage);
    
    // Send confirmation email to patient
    $patientEmailSubject = "Appointment Confirmation - Amma Eye Care Hospital";
    $patientEmailMessage = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { background: #f8fafc; padding: 20px; line-height: 1.6; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Appointment Confirmation</h2>
            </div>
            <div class='content'>
                <p>Dear {$firstName} {$lastName},</p>
                <p>Thank you for booking an appointment with Amma Eye Care Hospital.</p>
                <p><strong>Appointment Details:</strong></p>
                <p>Date: {$appointmentDate}<br>
                Time: {$appointmentTime}<br>
                Service: {$service}</p>
                <p>Our team will contact you within 24 hours to confirm your appointment.</p>
                <p>Please arrive 15 minutes early and bring your insurance card and ID.</p>
                <p>If you need to reschedule or cancel, please call us at +1 (234) 567-890.</p>
                <p>Best regards,<br>Amma Eye Care Hospital Team</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    sendEmailNotification($email, $patientEmailSubject, $patientEmailMessage);
    
    sendJSONResponse(true, 'Appointment booked successfully! We will contact you shortly to confirm.', [
        'appointmentId' => $appointmentId
    ]);
    
} catch (Exception $e) {
    error_log('Appointment booking error: ' . $e->getMessage());
    sendJSONResponse(false, 'An error occurred while booking your appointment. Please try again or call us directly.');
}
?>
