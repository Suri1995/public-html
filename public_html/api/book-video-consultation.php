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
    $age = intval($_POST['age'] ?? 0);
    $consultDate = sanitizeInput($_POST['consultDate'] ?? '');
    $consultTime = sanitizeInput($_POST['consultTime'] ?? '');
    $consultType = sanitizeInput($_POST['consultType'] ?? '');
    $service = sanitizeInput($_POST['service'] ?? '');
    $symptoms = sanitizeInput($_POST['symptoms'] ?? '');
    $medications = sanitizeInput($_POST['medications'] ?? '');
    $medicalHistory = sanitizeInput($_POST['medicalHistory'] ?? '');
    
    // Validate required fields
    if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || 
        empty($dob) || empty($age) || empty($consultDate) || empty($consultTime) || 
        empty($consultType) || empty($service) || empty($symptoms)) {
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
    $sql = "INSERT INTO video_consultations (
        first_name, last_name, email, phone, dob, age,
        consult_date, consult_time, consult_type, service,
        symptoms, medications, medical_history, report_file,
        created_at, status
    ) VALUES (
        :firstName, :lastName, :email, :phone, :dob, :age,
        :consultDate, :consultTime, :consultType, :service,
        :symptoms, :medications, :medicalHistory, :reportFile,
        NOW(), 'pending'
    )";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':firstName' => $firstName,
        ':lastName' => $lastName,
        ':email' => $email,
        ':phone' => $phone,
        ':dob' => $dob,
        ':age' => $age,
        ':consultDate' => $consultDate,
        ':consultTime' => $consultTime,
        ':consultType' => $consultType,
        ':service' => $service,
        ':symptoms' => $symptoms,
        ':medications' => $medications,
        ':medicalHistory' => $medicalHistory,
        ':reportFile' => $reportFile
    ]);
    
    $consultationId = $conn->lastInsertId();
    
    // Send email notification to admin
    $emailSubject = "New Video Consultation Booking - Amma Eye Care Hospital";
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
                <h2>New Video Consultation Booking</h2>
            </div>
            <div class='content'>
                <div class='field'><span class='label'>Consultation ID:</span> #{$consultationId}</div>
                <div class='field'><span class='label'>Name:</span> {$firstName} {$lastName}</div>
                <div class='field'><span class='label'>Email:</span> {$email}</div>
                <div class='field'><span class='label'>Phone:</span> {$phone}</div>
                <div class='field'><span class='label'>Age:</span> {$age}</div>
                <div class='field'><span class='label'>Consultation Date:</span> {$consultDate}</div>
                <div class='field'><span class='label'>Consultation Time:</span> {$consultTime}</div>
                <div class='field'><span class='label'>Consultation Type:</span> {$consultType}</div>
                <div class='field'><span class='label'>Service:</span> {$service}</div>
                <div class='field'><span class='label'>Symptoms:</span> {$symptoms}</div>
                <div class='field'><span class='label'>Medications:</span> {$medications}</div>
                <div class='field'><span class='label'>Medical History:</span> {$medicalHistory}</div>
                " . ($reportFile ? "<div class='field'><span class='label'>Report File:</span> {$reportFile}</div>" : "") . "
            </div>
        </div>
    </body>
    </html>
    ";
    
    sendEmailNotification(ADMIN_EMAIL, $emailSubject, $emailMessage);
    
    // Send confirmation email to patient
    $patientEmailSubject = "Video Consultation Confirmation - Amma Eye Care Hospital";
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
                <h2>Video Consultation Confirmation</h2>
            </div>
            <div class='content'>
                <p>Dear {$firstName} {$lastName},</p>
                <p>Thank you for booking a video consultation with Amma Eye Care Hospital.</p>
                <p><strong>Consultation Details:</strong></p>
                <p>Date: {$consultDate}<br>
                Time: {$consultTime}<br>
                Service: {$service}<br>
                Type: {$consultType}</p>
                <p>We will send you a video consultation link via email/SMS closer to your appointment time.</p>
                <p><strong>Please ensure you have:</strong></p>
                <ul>
                    <li>Stable internet connection</li>
                    <li>Device with camera and microphone</li>
                    <li>Good lighting in the room</li>
                </ul>
                <p>If you need to reschedule or cancel, please call us at +1 (234) 567-890.</p>
                <p>Best regards,<br>Amma Eye Care Hospital Team</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    sendEmailNotification($email, $patientEmailSubject, $patientEmailMessage);
    
    sendJSONResponse(true, 'Video consultation booked successfully! We will send you the meeting link shortly.', [
        'consultationId' => $consultationId
    ]);
    
} catch (Exception $e) {
    error_log('Video consultation booking error: ' . $e->getMessage());
    sendJSONResponse(false, 'An error occurred while booking your video consultation. Please try again or call us directly.');
}
?>
