
// https://firebase.google.com/docs/auth/admin/errors

export const generateFirebaseAuthErrorMessage = (error) => {
  switch (error?.code) {
    case "auth/invalid-email":
      alert("Invalid email address. Please enter a valid email.");
      break;
    case "auth/user-not-found":
      alert("User not found. Please check the email address.");
      break;
    case "auth/wrong-password":
      alert("Incorrect password. Please try again.");
      break;
    case "auth/email-already-in-use":
      alert("Email already in use. Please try another email.");
      break;
    case "auth/weak-password":
      alert("Password should be at least 6 characters.");
      break;
    case "auth/operation-not-allowed":
      alert("Operation not allowed. Please try again later.");
      break;
    case "auth/invalid-verification-code":
      alert("Invalid verification code. Please try again.");
      break;
    case "auth/invalid-verification-id":
      alert("Invalid verification ID. Please try again.");
      break;
    case "auth/code-expired":
      alert("Code expired. Please try again.");
      break;
    case "auth/invalid-action-code":
      alert("Invalid action code. Please try again.");
      break;
    case "auth/user-disabled":
      alert("User disabled. Please contact support.");
      break;
    case "auth/invalid-credential":
      alert("Invalid credential. Please try again.");
      break;
    case "auth/invalid-continue-uri":
      alert("Invalid continue URL. Please try again.");
      break;
    case "auth/unauthorized-continue-uri":
      alert("Unauthorized continue URL. Please try again.");
      break;
    case "auth/missing-continue-uri":
      alert("Missing continue URL. Please try again.");
      break;
    case "auth/missing-verification-code":
      alert("Missing verification code. Please try again.");
      break;
    case "auth/missing-verification-id":
      alert("Missing verification ID. Please try again.");
      break;
    case "auth/captcha-check-failed":
      alert("Captcha check failed. Please try again.");
      break;
    case "auth/invalid-phone-number":
      alert("Invalid phone number. Please try again.");
      break;
    case "auth/missing-phone-number":
      alert("Missing phone number. Please try again.");
      break;
    case "auth/quota-exceeded":
      alert("Quota exceeded. Please try again.");
      break;
    case "auth/missing-app-credential":
      alert("Missing app credential. Please try again.");
      break;
    case "auth/invalid-app-credential":
      alert("Invalid app credential. Please try again.");
      break;
    case "auth/session-expired":
      alert("Session expired. Please try again.");
      break;
    case "auth/missing-or-invalid-nonce":
      alert("Missing or invalid nonce. Please try again.");
      break;
    case "auth/missing-client-identifier":
      alert("Missing client identifier. Please try again.");
      break;
    case "auth/key-retrieval-failed":
      alert("Key retrieval failed. Please try again.");
      break;
    case "auth/invalid-oauth-provider":
      alert("Invalid OAuth provider. Please try again.");
      break;
    case "auth/invalid-oauth-client-id":
      alert("Invalid OAuth client ID. Please try again.");
      break;
    case "auth/invalid-cert-hash":
      alert("Invalid cert hash. Please try again.");
      break;
    case "auth/invalid-user-token":
      alert("Invalid user token. Please try again.");
      break;
    case "auth/invalid-custom-token":
      alert("Invalid custom token. Please try again.");
      break;
    case "auth/app-deleted":
      alert("App deleted. Please try again.");
      break;
    case "auth/app-not-authorized":
      alert("App not authorized. Please try again.");
      break;
    case "auth/argument-error":
      alert("Argument error. Please try again.");
      break;
    case "auth/invalid-api-key":
      alert("Invalid API key. Please try again.");
      break;
    case "auth/network-request-failed":
      alert("Network request failed. Please try again.");
      break;
    case "auth/requires-recent-login":
      alert("Requires recent login. Please try again.");
      break;
    case "auth/too-many-requests":
      alert("Too many requests. Please try again.");
      break;
    case "auth/unauthorized-domain":
      alert("Unauthorized domain. Please try again.");
      break;
    case "auth/user-token-expired":
      alert("User token expired. Please try again.");
      break;
    case "auth/web-storage-unsupported":
      alert("Web storage unsupported. Please try again.");
      break;
    case "auth/account-exists-with-different-credential":
      alert("Account exists with different credential. Please try again.");
      break;
    case "auth/auth-domain-config-required":
      alert("Auth domain config required. Please try again.");
      break;
    case "auth/cancelled-popup-request":
      alert("Cancelled popup request. Please try again.");
      break;
    case "auth/credential-already-in-use":
      alert("Credential already in use. Please try again.");
      break;
    case "auth/custom-token-mismatch":
      alert("Custom token mismatch. Please try again.");
      break;
    case "auth/provider-already-linked":
      alert("Provider already linked. Please try again.");
      break;
    case "auth/timeout":
      alert("Timeout. Please try again.");
      break;
    case "auth/missing-android-pkg-name":
      alert("Missing Android package name. Please try again.");
      break;
    case "auth/missing-ios-bundle-id":
      alert("Missing iOS bundle ID. Please try again.");
      break;
    case "auth/invalid-dynamic-link-domain":
      alert("Invalid dynamic link domain. Please try again.");
      break;
    case "auth/invalid-persistence-type":
      alert("Invalid persistence type. Please try again.");
      break;
    case "auth/unsupported-persistence-type":
      alert("Unsupported persistence type. Please try again.");
      break;
    case "auth/invalid-oauth-client-secret":
      alert("Invalid OAuth client secret. Please try again.");
      break;
    case "auth/invalid-argument":
      alert("Invalid argument. Please try again.");
      break;
    case "auth/invalid-creation-time":
      alert("Invalid creation time. Please try again.");
      break;
    case "auth/invalid-disabled-field":
      alert("Invalid disabled field. Please try again.");
      break;
    case "auth/invalid-display-name":
      alert("Invalid display name. Please try again.");
      break;
    case "auth/invalid-email-verified":
      alert("Invalid email verified. Please try again.");
      break;
    case "auth/invalid-hash-algorithm":
      alert("Invalid hash algorithm. Please try again.");
      break;
    case "auth/invalid-hash-block-size":
      alert("Invalid hash block size. Please try again.");
      break;
    case "auth/invalid-hash-derived-key-length":
      alert("Invalid hash derived key length. Please try again.");
      break;
    case "auth/invalid-hash-key":
      alert("Invalid hash key. Please try again.");
      break;
    case "auth/invalid-hash-memory-cost":
      alert("Invalid hash memory cost. Please try again.");
      break;
    case "auth/invalid-hash-parallelization":
      alert("Invalid hash parallelization. Please try again.");
      break;
    case "auth/invalid-hash-rounds":
      alert("Invalid hash rounds. Please try again.");
      break;
    case "auth/invalid-hash-salt-separator":
      alert("Invalid hash salt separator. Please try again.");
      break;
    case "auth/invalid-id-token":
      alert("Invalid ID token. Please try again.");
      break;
    case "auth/invalid-last-sign-in-time":
      alert("Invalid last sign in time. Please try again.");
      break;
    case "auth/invalid-page-token":
      alert("Invalid page token. Please try again.");
      break;
    case "auth/invalid-password":
      alert("Invalid password. Please try again.");
      break;
    case "auth/invalid-password-hash":
      alert("Invalid password hash. Please try again.");
      break;
    case "auth/invalid-password-salt":
      alert("Invalid password salt. Please try again.");
      break;
    case "auth/invalid-photo-url":
      alert("Invalid photo URL. Please try again.");
      break;
    case "auth/invalid-provider-id":
      alert("Invalid provider ID. Please try again.");
      break;
    case "auth/invalid-session-cookie-duration":
      alert("Invalid session cookie duration. Please try again.");
      break;
    case "auth/invalid-uid":
      alert("Invalid UID. Please try again.");
      break;
    case "auth/invalid-user-import":
      alert("Invalid user import. Please try again.");
      break;
    case "auth/invalid-provider-data":
      alert("Invalid provider data. Please try again.");
      break;
    case "auth/maximum-user-count-exceeded":
      alert("Maximum user count exceeded. Please try again.");
      break;
    case "auth/missing-hash-algorithm":
      alert("Missing hash algorithm. Please try again.");
      break;
    case "auth/missing-uid":
      alert("Missing UID. Please try again.");
      break;
    case "auth/reserved-claims":
      alert("Reserved claims. Please try again.");
      break;
    case "auth/session-cookie-revoked":
      alert("Session cookie revoked. Please try again.");
      break;
    case "auth/uid-already-exists":
      alert("UID already exists. Please try again.");
      break;
    case "auth/email-already-exists":
      alert("Email already exists. Please try again.");
      break;
    case "auth/phone-number-already-exists":
      alert("Phone number already exists. Please try again.");
      break;
    case "auth/project-not-found":
      alert("Project not found. Please try again.");
      break;
    case "auth/insufficient-permission":
      alert("Insufficient permission. Please try again.");
      break;
    case "auth/internal-error":
      alert("Internal error. Please try again.");
      break;

    default:
      alert("Oops! Something went wrong. Please try again later.");
  }
};