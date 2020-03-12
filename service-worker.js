self.addEventListener('notificationclick', function (e) {
    var notification = e.notification;
    var action = e.action;

    console.log('notification', notification);
    console.log('action', action);

    if(action === 'confirm') {
        console.log('Confirm was chosen');
        notification.close();
    } else {
        console.log('Action was not confirmed',action);
    }
});

self.addEventListener('notificationclose', function (e) {
    console.log('Notification was closed', e);
});