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

const handleSignIn = function(event) {
  event.preventDefault();
  const origin = window.location.origin
  redirectToSignIn(origin, origin + '/manifest.json', ['publish_data', 'store_write'])
};

document.getElementById('signin-button').addEventListener('click', handleSignIn)
document.getElementById('signout-button').addEventListener('click', function(event) {
  event.preventDefault()
  blockstack.signUserOut(window.location.href)
})
