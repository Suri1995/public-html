# Amma Eye Care Hospital Website

Complete HTML/CSS/JavaScript frontend with PHP/MySQL backend for a comprehensive eye care hospital website.

## Features

### Frontend Pages
- **Homepage** (index.html) - Hero section with top 6 priority services
- **Services Overview** (services.html) - All 25+ services in mobile-friendly accordions
- **Service Details** (service-detail.html) - Dynamic page for each service with comprehensive information
- **Appointment Booking** (appointment.html) - Full form with service selection and file uploads
- **Video Consultation** (video-consultation.html) - Remote consultation booking
- **About Us** (about.html) - Hospital information and values
- **Contact** (contact.html) - Contact form and information
- **Admin Panel** (admin/) - Login and dashboard for managing bookings

### Backend Features
- Appointment booking with email notifications
- Video consultation scheduling
- Contact form submissions
- File upload handling for medical reports
- Admin authentication and dashboard
- MySQL database for data persistence

## Installation

### Requirements
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache/Nginx web server
- SMTP server for email notifications (optional)

### Setup Steps

1. **Database Setup**
   ```bash
   # Create database
   mysql -u root -p -e "CREATE DATABASE amma_eye_care"
   
   # Import schema
   mysql -u root -p amma_eye_care < database/schema.sql
   
   # Import seed data
   mysql -u root -p amma_eye_care < database/seed-data.sql
   ```

2. **Configure Database Connection**
   
   Edit `api/config.php` and update with your database credentials:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'amma_eye_care');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   ```

3. **Configure Email Settings**
   
   Update email settings in `api/config.php`:
   ```php
   define('SMTP_HOST', 'smtp.gmail.com');
   define('SMTP_USER', 'your-email@gmail.com');
   define('SMTP_PASS', 'your-app-password');
   define('ADMIN_EMAIL', 'admin@ammaeyecare.com');
   ```

4. **Set File Upload Permissions**
   ```bash
   mkdir uploads
   chmod 755 uploads
   ```

5. **Upload to Web Server**
   - Upload all files to your web server's document root
   - Ensure `api/` directory has proper permissions
   - Verify `.htaccess` files are in place

## Admin Access

Default admin credentials (change after first login):
- Username: `admin`
- Password: `Admin@123`

Access admin panel at: `yourdomain.com/admin/login.html`

## Project Structure

```
/
├── index.html                 # Homepage
├── services.html              # Services overview
├── service-detail.html        # Dynamic service details
├── appointment.html           # Appointment booking
├── video-consultation.html    # Video consultation booking
├── about.html                # About page
├── contact.html              # Contact page
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       ├── main.js           # Main JavaScript
│       └── service-data.js   # Service data for dynamic pages
├── api/
│   ├── config.php            # Database and email configuration
│   ├── book-appointment.php  # Appointment booking endpoint
│   ├── book-video-consultation.php
│   ├── contact.php           # Contact form handler
│   ├── admin-login.php       # Admin authentication
│   ├── admin-get-data.php    # Admin dashboard data
│   └── admin-update-status.php
├── admin/
│   ├── login.html            # Admin login page
│   └── dashboard.html        # Admin dashboard
├── database/
│   ├── schema.sql            # Database structure
│   ├── seed-data.sql         # Initial data
│   └── sample-queries.sql    # Useful queries
├── public/
│   └── logo-amma.png         # Hospital logo
└── uploads/                  # File upload directory
```

## Database Tables

- `appointments` - In-person appointment bookings
- `video_consultations` - Video consultation bookings
- `contact_messages` - Contact form submissions
- `services` - Eye care services offered
- `admin_users` - Admin panel users

## Security Features

- Password hashing with bcrypt
- Prepared SQL statements to prevent injection
- Input validation and sanitization
- File upload restrictions
- Session-based admin authentication
- CORS headers configured

## Customization

### Update Hospital Information
Edit contact details in all HTML files:
- Phone numbers
- Email addresses
- Physical address
- Business hours

### Modify Services
Edit `assets/js/service-data.js` to add/modify services

### Change Brand Colors
Update CSS variables in `assets/css/style.css`:
```css
:root {
  --primary: #1e3a8a;
  --danger: #dc2626;
  /* Add your colors */
}
```

## Troubleshooting

### Email Not Sending
- Verify SMTP credentials in `api/config.php`
- Check if your hosting allows SMTP connections
- Consider using a service like SendGrid or Mailgun

### File Uploads Failing
- Check `uploads/` directory permissions (755)
- Verify PHP `upload_max_filesize` and `post_max_size` settings
- Ensure sufficient disk space

### Database Connection Errors
- Verify credentials in `api/config.php`
- Check if MySQL service is running
- Ensure database user has proper permissions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2025 Amma Eye Care Hospital. All rights reserved.

## Support

For technical support, contact: dev@ammaeyecare.com
