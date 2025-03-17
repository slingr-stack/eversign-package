/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookSendGrid = {
    label: 'Catch HTTP SendGrid events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/eversign',
        }
    },
    callback: function(event) {
        sys.logs.info('[eversign] Received Eversign webhook. Processing and triggering a package event.', event);
        sys.events.triggerEvent('eversign:webhook', event.data);
    }
};
