# Rougee Player Setup Instructions

## 🚀 Privy Authentication Setup

### **Step 1: Get Your Privy App ID**

1. **Visit**: [https://dashboard.privy.io/](https://dashboard.privy.io/)
2. **Sign up** for a free account
3. **Create a new project** called "Rougee Player"
4. **Copy your App ID** from the dashboard

### **Step 2: Configure Environment Variables**

Create a `.env.local` file in your project root:

```env
# Privy Configuration
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id_here
```

**Replace `your_privy_app_id_here` with your actual Privy App ID**

### **Step 3: Configure Privy Dashboard**

In your Privy dashboard, configure:

#### **Authentication Methods**
- ✅ **Email** - Enable email/password login
- ✅ **Google** - Enable Google OAuth
- ✅ **Apple** - Enable Apple Sign-In
- ✅ **Wallet** - Enable wallet connections

#### **App Settings**
- **App Name**: Rougee Player
- **App URL**: `http://localhost:3000` (for development)
- **Redirect URLs**: 
  - `http://localhost:3000`
  - `http://localhost:3000/auth/callback`

#### **Embedded Wallets**
- ✅ **Enable embedded wallets**
- ✅ **Create on login** for users without wallets
- ✅ **Base network** support

### **Step 4: Test the Setup**

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** to `http://localhost:3000`

3. **Click "Sign In"** in the top-right corner

4. **Test different login methods**:
   - Email/password
   - Google OAuth
   - Wallet connection

### **Step 5: Verify Authentication**

After successful login, you should see:
- ✅ **User avatar** in the navbar
- ✅ **User dropdown** with profile info
- ✅ **Logout functionality**

## 🔧 Troubleshooting

### **Common Issues**

#### **"NEXT_PUBLIC_PRIVY_APP_ID is not set"**
- Make sure your `.env.local` file exists
- Verify the App ID is correct
- Restart your development server

#### **"Invalid App ID"**
- Double-check your App ID in the Privy dashboard
- Ensure you're using the correct project

#### **Login not working**
- Check your Privy dashboard configuration
- Verify redirect URLs are set correctly
- Check browser console for errors

#### **Embedded wallets not working**
- Ensure Base network is configured in Privy
- Check that embedded wallets are enabled

### **Development Tips**

1. **Use Chrome DevTools** to inspect network requests
2. **Check browser console** for any error messages
3. **Test on different devices** (mobile/desktop)
4. **Clear browser cache** if you encounter issues

## 🎯 Next Steps

Once authentication is working:

1. **Test all login methods**
2. **Verify user data** is accessible
3. **Test logout functionality**
4. **Move to next phase**: Remove mock data

## 📱 Mobile Testing

Test the authentication flow on:
- **iOS Safari**
- **Android Chrome**
- **Different screen sizes**

## 🔐 Security Notes

- **Never commit** `.env.local` to version control
- **Use different App IDs** for development/production
- **Enable MFA** in production
- **Regularly rotate** API keys

---

**Your Privy authentication system is now ready!** 🎉

