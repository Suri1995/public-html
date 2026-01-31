-- Seed data for Amma Eye Care Hospital

USE amma_eye_care;

-- Insert services
INSERT INTO services (slug, name, icon, category, overview, display_order) VALUES
-- Surgical Services
('cataract-surgery', 'Cataract Surgery', '👁️', 'Surgical', 'Advanced bladeless phacoemulsification with premium IOL options', 1),
('lasik-surgery', 'LASIK Surgery', '👓', 'Surgical', 'Blade-free LASIK with wavefront technology for precise vision correction', 2),
('icl-surgery', 'ICL (Implantable Contact Lens)', '👁️', 'Surgical', 'Perfect for high myopia and those not suitable for LASIK', 3),
('retinal-surgery', 'Retinal Surgery', '🔬', 'Surgical', 'Advanced vitreoretinal procedures for retinal conditions', 4),
('corneal-transplant', 'Corneal Transplant', '🔬', 'Surgical', 'Full and partial thickness corneal transplants', 5),
('glaucoma-surgery', 'Glaucoma Surgery', '🔍', 'Surgical', 'Minimally invasive glaucoma surgery (MIGS)', 6),

-- Medical Treatment Services
('glaucoma-treatment', 'Glaucoma Treatment', '🔍', 'Medical Treatment', 'Comprehensive glaucoma management with medications and laser therapy', 7),
('diabetic-retinopathy-screening', 'Diabetic Retinopathy Screening', '📊', 'Medical Treatment', 'Regular screening and treatment for diabetic patients', 8),
('dry-eye-treatment', 'Dry Eye Treatment', '💧', 'Medical Treatment', 'Advanced treatments for chronic dry eyes', 9),
('digital-eye-strain-treatment', 'Digital Eye Strain Treatment', '💻', 'Medical Treatment', 'Relief from computer vision syndrome', 10),
('amd-treatment', 'Age-Related Macular Degeneration', '👴', 'Medical Treatment', 'Advanced treatment options for AMD', 11),
('eye-infection-treatment', 'Eye Infection Treatment', '🦠', 'Medical Treatment', 'Treatment for various eye infections', 12),

-- Diagnostic Services
('comprehensive-eye-exam', 'Comprehensive Eye Examination', '👁️', 'Diagnostic', 'Complete eye health assessment', 13),
('oct-scan', 'OCT Scan', '📸', 'Diagnostic', 'Optical Coherence Tomography for detailed imaging', 14),
('visual-field-testing', 'Visual Field Testing', '📊', 'Diagnostic', 'Computerized perimetry for glaucoma detection', 15),
('fundus-photography', 'Fundus Photography', '📷', 'Diagnostic', 'High-resolution retinal imaging', 16),
('computerized-eye-testing', 'Computerized Eye Testing', '🖥️', 'Diagnostic', 'Automated refraction and corneal topography', 17),
('corneal-topography', 'Corneal Topography', '🗺️', 'Diagnostic', 'Detailed mapping of corneal surface', 18),

-- Specialized Care
('childrens-eye-care', 'Children\'s Eye Care', '👶', 'Specialized Care', 'Pediatric ophthalmology with child-friendly approach', 19),
('squint-treatment', 'Squint (Strabismus) Treatment', '👀', 'Specialized Care', 'Medical and surgical management of eye misalignment', 20),
('low-vision-aids', 'Low Vision Aids', '🔍', 'Specialized Care', 'Specialized optical and electronic devices', 21),
('contact-lens-fitting', 'Contact Lens Fitting', '👁️', 'Specialized Care', 'Expert fitting for all types of contact lenses', 22),
('eyeglass-prescription', 'Eyeglass Prescription', '👓', 'Specialized Care', 'Accurate prescriptions with wide selection', 23),
('second-opinion', 'Second Opinion Consultations', '🩺', 'Specialized Care', 'Expert second opinions on diagnosis and treatment', 24),

-- Additional Services
('lasik-evaluation', 'LASIK Candidate Evaluation', '✅', 'Additional', 'Comprehensive evaluation for LASIK suitability', 25),
('pre-surgery-counseling', 'Pre-Surgery Counseling', '💬', 'Additional', 'Detailed consultation to prepare for surgery', 26),
('post-operative-care', 'Post-Operative Care', '🏥', 'Additional', 'Comprehensive follow-up care after surgery', 27),
('emergency-eye-care', 'Emergency Eye Care', '🚨', 'Additional', '24/7 emergency services for eye injuries', 28);

-- Insert sample admin user (password: admin123 - change this in production!)
-- Password hash generated using: password_hash('admin123', PASSWORD_DEFAULT)
INSERT INTO admin_users (username, email, password_hash, full_name, role) VALUES
('admin', 'admin@ammaeyecare.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'System Administrator', 'admin');

-- Note: The password for admin is 'admin123' - CHANGE THIS IN PRODUCTION!
