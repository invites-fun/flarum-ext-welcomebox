import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import WelcomeBoxContent from '../common/components/WelcomeBoxContent';

import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/flarum-ext-welcomebox', () => {
  registerWidget(app);

  extend(IndexPage.prototype, 'sidebarItems', (items) => {
    const user = app.session.user;
    const useWidget = app.forum.attribute('justoverclock-welcomebox.UseWidget');

    if (useWidget) {
      return;
    }

    if (user) {
      items.add('welcomeBox', <WelcomeBoxContent user={user} />, 20);
    } else if (app.forum.attribute('showGuestBox')) {
      items.add('welcomeBoxGuest', <WelcomeBoxContent />, 20);
    }
  });
});
