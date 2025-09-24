export const privyConfig = {
  // Login methods to enable
  loginMethods: ['email', 'google', 'apple', 'wallet'] as ('email' | 'google' | 'apple' | 'wallet')[],
  
  // Appearance configuration
  appearance: {
    theme: 'dark' as const,
    accentColor: '#3B82F6' as const,
    logo: '/logo/logo.png',
    showWalletLoginFirst: false,
    walletChainType: 'ethereum-only',
  },
  
  // Modal configuration for v3.0
  modal: {
    size: 'compact' as const,
  },
  
  // Embedded wallet configuration
  embeddedWallets: {
    ethereum: {
      createOnLogin: 'users-without-wallets' as const,
    },
  },
  
  // Legal and privacy
  legal: {
    termsAndConditionsUrl: 'https://rougee.com/terms',
    privacyPolicyUrl: 'https://rougee.com/privacy',
  },
  
  // Customize the login modal
  mfa: {
    noPromptOnMfaRequired: false,
  },
}

// Environment variable for App ID
export const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID || 'cmfr2qk33005dl20dh3yirnho'

// Validate that we have the App ID
if (!process.env.NEXT_PUBLIC_PRIVY_APP_ID) {
  console.warn('NEXT_PUBLIC_PRIVY_APP_ID is not set. Using fallback App ID. For production, add NEXT_PUBLIC_PRIVY_APP_ID to .env.local file')
}

// Debug logging - removed for production