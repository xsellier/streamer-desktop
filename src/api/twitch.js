import { Window } from 'nw.gui'
import TwitchApi from 'twitch-api'

let code      = null;
let twitch = new TwitchApi({
  clientId: '---',
  clientSecret: '---',
  redirectUri: 'https://github.com/xsellier/streamer-desktop',
  scopes: ['channel_commercial', 'channel_read', 'channel_editor', 'user_read', 'chat_login', 'user_subscriptions', 'user_blocks_read', 'user_blocks_edit']
});

Window.open(twitch.getAuthorizationUrl(), {
  'position' : 'center',
  'width'    : 1024,
  'height'   : 768,
  'focus'    : true
}, function(authWindows) {
  authWindows.on('loading', function() {
    if (code == null) {
      let hashLocation = this.window.document.location.search;
      let startAt      = hashLocation.indexOf('?code=');
      let endAt        = hashLocation.indexOf('&scope=' + self.scope);
      let code         = hashLocation.replace('?code=', '').replace('&scope=' + self.scope, '');

      if (startAt < 0 || endAt < 0 || endAt == startAt) {
        // wait till url contains auth code
      } else {
        if (code.length <= 0) {
          console.warn('Wait for authorization ...');
        } else {
          console.log('Successfully logged in.', code);
          twitch.getAccessToken(code, function(err, body) {
            if (err) {
              console.log(err);
            } else {
              /*
              * body = {
              *   access_token: 'your authenticated user access token',
              *   scopes: [array of granted scopes]
              * }
              */
              authWindows.close(true)
            }
          });
        }
      }
    }
  });

  authWindows.on('close', function() {
    authWindows.close(true);

    if (code == null) {
      console.log('Can\'t retrieve code, please retry to authorize.');
    }
  });
});