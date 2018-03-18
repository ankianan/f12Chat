export const isUserSignedIn = () => {
  if (blockstack.isUserSignedIn()) {
    return true;
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      window.location = window.location.origin
    });
  }
  return false;
}

export const handleSignIn = function(event) {
  event.preventDefault();
  const origin = window.location.origin
  redirectToSignIn(origin, origin + '/manifest.json', ['publish_data', 'store_write'])
};



