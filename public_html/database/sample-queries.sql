-- Sample SQL queries for managing the Amma Eye Care Hospital database

USE amma_eye_care;

-- =====================================================
-- APPOINTMENT QUERIES
-- =====================================================

-- Get all pending appointments for today
SELECT 
    a.id,
    CONCAT(a.first_name, ' ', a.last_name) AS patient_name,
    a.email,
    a.phone,
    a.appointment_date,
    a.appointment_time,
    a.service,
    a.status
FROM appointments a
WHERE a.appointment_date = CURDATE()
AND a.status = 'pending'
ORDER BY a.appointment_time;

-- Get all appointments for a specific date range
SELECT 
    a.id,
    CONCAT(a.first_name, ' ', a.last_name) AS patient_name,
    a.email,
    a.phone,
    a.appointment_date,
    a.appointment_time,
    a.service,
    a.insurance,
    a.status
FROM appointments a
WHERE a.appointment_date BETWEEN '2025-01-01' AND '2025-01-31'
ORDER BY a.appointment_date, a.appointment_time;

-- Get appointment statistics
SELECT 
    DATE(appointment_date) AS date,
    COUNT(*) AS total_appointments,
    SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending,
    SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) AS confirmed,
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
    SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled
FROM appointments
WHERE appointment_date >= CURDATE()
GROUP BY DATE(appointment_date)
ORDER BY date;

-- Update appointment status
UPDATE appointments
SET status = 'confirmed'
WHERE id = 1;

-- =====================================================
-- VIDEO CONSULTATION QUERIES
-- =====================================================

-- Get all pending video consultations for today
SELECT 
    v.id,
    CONCAT(v.first_name, ' ', v.last_name) AS patient_name,
    v.email,
    v.phone,
    v.age,
    v.consult_date,
    v.consult_time,
    v.service,
    v.consult_type,
    v.status
FROM video_consultations v
WHERE v.consult_date = CURDATE()
AND v.status = 'pending'
ORDER BY v.consult_time;

-- Get all consultations with symptoms containing specific keywords
SELECT 
    v.id,
    CONCAT(v.first_name, ' ', v.last_name) AS patient_name,
    v.symptoms,
    v.consult_date,
    v.service
FROM video_consultations v
WHERE v.symptoms LIKE '%blurry vision%'
OR v.symptoms LIKE '%headache%'
ORDER BY v.consult_date DESC;

-- Update consultation with meeting link
UPDATE video_consultations
SET meeting_link = 'https://meet.example.com/consultation-12345',
    status = 'confirmed'
WHERE id = 1;

-- =====================================================
-- SERVICE MANAGEMENT QUERIES
-- =====================================================

-- Get all active services grouped by category
SELECT 
    category,
    COUNT(*) AS service_count,
    GROUP_CONCAT(name SEPARATOR ', ') AS services
FROM services
WHERE is_active = TRUE
GROUP BY category
ORDER BY category;

-- Get most requested services from appointments
SELECT 
    service,
    COUNT(*) AS request_count
FROM appointments
WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY service
ORDER BY request_count DESC
LIMIT 10;

-- =====================================================
-- PATIENT QUERIES
-- =====================================================

-- Find all appointments for a specific patient by email
SELECT 
    a.id,
    a.appointment_date,
    a.appointment_time,
    a.service,
    a.status,
    a.created_at
FROM appointments a
WHERE a.email = 'patient@example.com'
ORDER BY a.appointment_date DESC;

-- Get patient history (both appointments and consultations)
SELECT 
    'Appointment' AS type,
    id,
    first_name,
    last_name,
    email,
    appointment_date AS visit_date,
    service,
    status,
    created_at
FROM appointments
WHERE email = 'patient@example.com'
UNION ALL
SELECT 
    'Video Consultation' AS type,
    id,
    first_name,
    last_name,
    email,
    consult_date AS visit_date,
    service,
    status,
    created_at
FROM video_consultations
WHERE email = 'patient@example.com'
ORDER BY visit_date DESC;

-- =====================================================
-- REPORTING QUERIES
-- =====================================================

-- Monthly appointment summary
SELECT 
    DATE_FORMAT(appointment_date, '%Y-%m') AS month,
    COUNT(*) AS total_appointments,
    COUNT(DISTINCT email) AS unique_patients,
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed
FROM appointments
WHERE appointment_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
GROUP BY DATE_FORMAT(appointment_date, '%Y-%m')
ORDER BY month DESC;

-- Service popularity report
SELECT 
    service,
    COUNT(*) AS total_bookings,
    AVG(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) * 100 AS completion_rate
FROM appointments
GROUP BY service
ORDER BY total_bookings DESC;

-- Contact message summary
SELECT 
    DATE(created_at) AS date,
    COUNT(*) AS message_count,
    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) AS unread
FROM contact_messages
WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- =====================================================
-- CLEANUP QUERIES (Use with caution!)
-- =====================================================

-- Delete old cancelled appointments (older than 1 year)
DELETE FROM appointments
WHERE status = 'cancelled'
AND appointment_date < DATE_SUB(CURDATE(), INTERVAL 1 YEAR);

-- Archive completed consultations older than 2 years
-- (You might want to move these to an archive table first)
-- CREATE TABLE archived_consultations LIKE video_consultations;
-- INSERT INTO archived_consultations SELECT * FROM video_consultations WHERE...
-- Then delete:
DELETE FROM video_consultations
WHERE status = 'completed'
AND consult_date < DATE_SUB(CURDATE(), INTERVAL 2 YEAR);
