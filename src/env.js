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
  window.__env.MAPBOX_API_KEY = "pk.eyJ1IjoiZHRydW9uZyIsImEiOiJjbTA3Y2llbXYwYjlhMmpuMWoyMXdzeWZrIn0.fmMD412QsUKQi05HySZzUg";

  window.__env.USER_POOL_ID = "	ca-central-1_ewDAFxf3y";
  window.__env.USER_POOL_CLIENT_ID = "3306dh1hjm1id1v2tc7obnlfg";
  window.__env.IDENTITY_POOL_ID = "ca-central-1:80cd253f-0b27-4604-84af-bbc3af961cf8";

  // Add any feature-toggles
  // window.__env.coolFeatureActive = false;
})(this);
