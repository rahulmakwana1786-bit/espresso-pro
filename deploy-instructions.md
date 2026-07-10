# Deployment Instructions for GlobeHost

## Files to Upload
Upload all contents from the `dist` folder to your website's root directory (usually `public_html`).

## Important Files in dist folder:
- `index.html` - Main HTML file
- `assets/` folder - Contains all CSS, JS, and image files
- All other files and folders

## Steps:
1. Login to GlobeHost cPanel
2. Open File Manager
3. Navigate to public_html (or your domain folder)
4. **BACKUP CURRENT FILES FIRST!**
5. Delete old files (keep any .htaccess or config files you need)
6. Upload all files from the `dist` folder
7. Set proper file permissions if needed (usually 644 for files, 755 for folders)

## After Upload:
- Visit your website to test
- Check all pages and functionality
- Verify social media links work
- Test the animated counter and tablet display

## Troubleshooting:
- If images don't load, check file paths and permissions
- If site doesn't work, verify all files uploaded correctly
- Contact GlobeHost support: +91 88810 88820 if needed

## Quick Update Process:
1. Make changes to your code
2. Run `npm run build`
3. Upload new dist files to replace old ones
4. Clear browser cache to see changes