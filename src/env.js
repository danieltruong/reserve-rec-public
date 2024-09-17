(function (window) {
  window.__env = window.__env || {};

  window.__env.logLevel = 0; // All

  // Get config from remote host?
  window.__env.configEndpoint = false;
  window.__env.MAPBOX_API_KEY = "";

  // Environment name
  window.__env.ENVIRONMENT = "local"; // local | dev | test | prod

  window.__env.API_LOCATION = "http://localhost:3000";
  window.__env.API_PATH = "/api";
  window.__env.GH_HASH = "local-build";

  window.__env.USER_POOL_ID = "USER_POOL_ID";
  window.__env.USER_POOL_CLIENT_ID = "USER_POOL_CLIENT_ID";
  window.__env.IDENTITY_POOL_ID = "IDENTITY_POOL_ID";
  window.__env.OAUTH_DOMAIN = "reserve-rec-dev.auth.ca-central-1.amazoncognito.com";

  // Add any feature-toggles
  // window.__env.coolFeatureActive = false;
})(this);
