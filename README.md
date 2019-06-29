# silent-audio
Silent background audio to keep timers working.

Chrome and Firefox (and others) throttle timers in background tabs, but not if audio is playing (otherwise MSE apps (like Spotify) would break).

This is the bare minimum to keep timers running. Doesn't stop throttling if the user explicitly mutes the tab.

```javascript
require('silent-audio')() // needs to be called in a user-gesture callback
```

Optionally, use an existing AudioContext:

```javascript
var ctx = new AudioContext() // needs to be called in a user-gesture callback
require('silent-audio')(ctx)
```
