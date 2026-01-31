# Amma Eye Care Hospital - Database Setup Guide

## Prerequisites

- MySQL 5.7+ or MariaDB 10.2+
- PHP 7.4+ with PDO MySQL extension
- Web server (Apache/Nginx) with PHP support

## Installation Steps

### 1. Create the Database

Run the schema file to create the database and tables:

```bash
mysql -u root -p < database/schema.sql
```

Or using phpMyAdmin:
1. Open phpMyAdmin
2. Click on "Import" tab
3. Select `database/schema.sql` file
4. Click "Go"

### 2. Seed Initial Data

Load the seed data to populate services and create admin user:

```bash
mysql -u root -p < database/seed-data.sql
```

### 3. Configure PHP Backend

Edit `api/config.php` and update the database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('DB_NAME', 'amma_eye_care');
```

Also update the email configuration:

```php
define('ADMIN_EMAIL', 'your_admin@email.com');
define('FROM_EMAIL', 'noreply@yourdomain.com');
```

### 4. Set Up File Uploads

Create the uploads directory and set proper permissions:

```bash
mkdir uploads
chmod 755 uploads
```

For Apache, ensure the directory is writable by the web server:

```bash
chown -R www-data:www-data uploads
```

### 5. Configure Email (Optional)

For production, configure SMTP email sending by modifying the `sendEmailNotification()` function in `api/config.php` to use PHPMailer or similar library.

## Database Structure

### Tables

1. **appointments** - Stores in-person appointment bookings
2. **video_consultations** - Stores video consultation bookings
3. **contact_messages** - Stores contact form submissions
4. **services** - Manages available services (optional)
5. **admin_users** - Admin/staff login credentials
6. **appointment_notes** - Doctor notes for appointments
7. **consultation_notes** - Doctor notes for consultations

### Default Admin Credentials

```
Username: admin
Password: admin123
```

**⚠️ IMPORTANT: Change this password immediately in production!**

## Sample Queries

The `database/sample-queries.sql` file contains useful queries for:

- Viewing today's appointments
- Generating reports
- Managing patient records
- Service statistics
- Data cleanup

## Security Recommendations

1. **Change default admin password** immediately
2. **Use prepared statements** (already implemented in PHP files)
3. **Enable SSL/TLS** for database connections in production
4. **Restrict database user permissions** - only grant necessary privileges
5. **Regular backups** - set up automated daily backups
6. **File upload validation** - already implemented with file type and size checks

## Backup Command

To backup the database:

```bash
mysqldump -u root -p amma_eye_care > backup_$(date +%Y%m%d).sql
```

## Restore Command

To restore from backup:

```bash
mysql -u root -p amma_eye_care < backup_20250101.sql
```

## Troubleshooting

### Connection Issues

If you get "Connection refused" error:
- Check if MySQL service is running: `sudo service mysql status`
- Verify credentials in `api/config.php`
- Check if port 3306 is open

### Permission Issues

If file uploads fail:
- Check uploads directory permissions
- Verify web server user has write access
- Check PHP `upload_max_filesize` and `post_max_size` settings

### Email Not Sending

- Verify email configuration in `api/config.php`
- Check server mail configuration
- Consider using SMTP with PHPMailer for reliability

## Support

For issues or questions, contact: admin@ammaeyecare.com
