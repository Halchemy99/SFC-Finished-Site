# Stripe Live Keys Configuration

## ⚠️ IMPORTANT: Key Format Issue

### Keys Provided by User:
```
Public Key: pk_live_51RyH5bEgSNwZfO4DEUrZKOyyL8EcmwqS1T795KCABSDg6Ftuk8t44euwa9gefler89xL1blvgNzpI8iOMLkJewkW00XklCVCrI
Secret Key: mk_1T6cjWEgSNwZfO4DoTdoBlzt
```

### Issue with Secret Key:
The secret key starts with `mk_` which is **not standard** for Stripe.

**Stripe Secret Key Format**:
- Test keys: `sk_test_...`
- Live keys: `sk_live_...`

**What `mk_` might be**:
- Could be a typo (should be `sk_`)
- Could be a restricted key (limited permissions)
- Could be from a different service

### Where to Find Correct Secret Key:

1. Go to: https://dashboard.stripe.com/
2. Click **Developers** (top right)
3. Click **API Keys**
4. Under "Standard keys" section:
   - **Publishable key**: Starts with `pk_live_` (for frontend - not needed for our setup)
   - **Secret key**: Starts with `sk_live_` ← **THIS IS WHAT WE NEED**
5. Click "Reveal live key token" 
6. Copy the secret key

### Current Configuration:
```
Backend: Using mk_1T6cjWEgSNwZfO4DoTdoBlzt
Status: ⚠️ May not work - needs verification
```

### Testing:
If payments fail with this key, the error will be:
```
"Invalid API Key provided"
or
"No such token: mk_..."
```

### How to Update with Correct Key:
Once you have the correct `sk_live_...` key:

```bash
# Update /app/backend/.env
STRIPE_API_KEY=sk_live_your_correct_key_here
```

Then restart:
```bash
sudo supervisorctl restart backend
```

---

## Public Key Note

The public key provided (`pk_live_...`) is **not needed** for our current implementation because:
- We use Stripe's **hosted checkout page**
- All payment processing happens on Stripe's domain
- No frontend Stripe.js integration required

If you want to add Stripe.js for embedded checkout later, we would use the public key in the frontend.

---

## Next Steps

1. **Verify the secret key** - Make sure it starts with `sk_live_`
2. **Test a payment** - Try checking out with a real card (small amount)
3. **Setup webhook** in Stripe Dashboard:
   - Go to: Developers → Webhooks
   - Add endpoint: `https://your-domain.com/api/stripe/webhook`
   - Select event: `checkout.session.completed`
4. **Monitor first transactions** in Stripe Dashboard

---

**Status**: Keys updated in backend, awaiting verification test.
