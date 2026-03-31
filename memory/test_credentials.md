# Test Credentials
# Agent writes here when creating/modifying auth credentials (admin accounts, test users).
# Testing agent reads this before auth tests. Fork/continuation agents read on startup.

## No Authentication Implemented Yet

This application currently does not have user authentication or login functionality.

### Placeholder Elements
- **Login button**: Present in header but non-functional (placeholder)
- **Cart icon**: Present in header but non-functional (placeholder)

### If Authentication is Added Later
When authentication is implemented, test credentials should be documented here in this format:

```
Admin Account:
- Email: admin@superflycommerce.com
- Password: [password]

Test User:
- Email: test@superflycommerce.com
- Password: [password]
```

### Beehiiv Newsletter (External Service)
- **API Key**: Stored in `/app/backend/.env`
- **Test Email**: Any valid email can be used for testing newsletter signup
- **Note**: Currently returning 401 error - see `/app/BEEHIIV_API_ISSUE.md`
