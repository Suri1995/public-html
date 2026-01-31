<?php
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';

// Check if admin is logged in
if (!isset($_SESSION['admin_id'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Unauthorized'
    ]);
    exit;
}

try {
    // Get statistics
    $statsQuery = "
        SELECT 
            (SELECT COUNT(*) FROM appointments WHERE MONTH(created_at) = MONTH(CURDATE())) as appointments,
            (SELECT COUNT(*) FROM video_consultations WHERE MONTH(created_at) = MONTH(CURDATE())) as consultations,
            (SELECT COUNT(*) FROM appointments WHERE status = 'pending') + 
            (SELECT COUNT(*) FROM video_consultations WHERE status = 'pending') as pending,
            (SELECT COUNT(*) FROM contact_messages WHERE is_read = 0) as messages
    ";
    $stats = $pdo->query($statsQuery)->fetch(PDO::FETCH_ASSOC);
    
    // Get recent appointments
    $appointmentsQuery = "
        SELECT id, name, service, preferred_date as date, preferred_time as time, status
        FROM appointments
        ORDER BY created_at DESC
        LIMIT 20
    ";
    $appointments = $pdo->query($appointmentsQuery)->fetchAll(PDO::FETCH_ASSOC);
    
    // Format data
    foreach ($appointments as &$apt) {
        $apt['status'] = ucfirst($apt['status']);
    }
    
    echo json_encode([
        'success' => true,
        'stats' => $stats,
        'appointments' => $appointments
    ]);
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
