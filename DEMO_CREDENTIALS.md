# Demo Mode Credentials

The application is now running in **DEMO MODE** - no database required!

## Demo Login Credentials

### 👤 User Login
- **Username:** `demo`
- **Password:** `demo123`
- **User ID:** `demo001`

**Alternative User:**
- **Username:** `user`
- **Password:** `user123`
- **User ID:** `user001`

### 🛡️ Admin Login
- **Name:** `admin`
- **Password:** `admin123`

### 👮 Officer Login
- **Officer Name:** `officer1`
- **Officer ID:** `off001`

**Alternative Officer:**
- **Officer Name:** `officer2`
- **Officer ID:** `off002`

## How to Use

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Access the application:**
   - Open your browser and go to `http://localhost:3000`

3. **Login:**
   - Click "Get Started" or go to `/sub-pages/login.html`
   - Choose your role (User, Officer, or Admin)
   - Use the credentials above

## Demo Features

- ✅ All login types work without database
- ✅ View dashboards with sample data
- ✅ Create new complaints (stored in memory)
- ✅ Update complaint status
- ✅ Assign officers to complaints
- ✅ Delete complaints

## Notes

- Data is stored in memory and will reset when the server restarts
- Image uploads use placeholder images in demo mode
- You can still sign up new users, but they'll only exist during the session

## Switching Back to Database Mode

To use the database instead, edit `index.js` and change:
```javascript
const DEMO_MODE = true;  // Change to false
```

Then update all controller files to set `DEMO_MODE = false` as well.

