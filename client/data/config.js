import Raven from 'raven-js';

const sentry_key = '773d393fd9d54f3089b87458c9ac6c52';
const sentry_app = '81210';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
