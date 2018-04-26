'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'form-input-conditional-validation',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    "ember-validated-form": {
      label: {
        submit: "Go for it!"
      },
      css: {
        // bootstrap classes
        group: "form-group",
        radio: "radio",
        control: "form-control",
        label: "col-form-label",
        help: "small form-text text-danger",
        hint: "small form-text text-muted",
        checkbox: "checkbox",
        button: "btn btn-default",
        submit: "btn btn-primary",
        loading: "loading",
        valid: "is-valid",
        invalid: "is-invalid"
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
