import * as Sentry from "@sentry/react";
export function initSentry() {
    Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false,
            }),
        ],
        tracesSampleRate: 0.1,
        tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 0.1,
    });


}


