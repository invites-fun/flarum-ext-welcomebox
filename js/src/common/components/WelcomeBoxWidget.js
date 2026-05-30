import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import WelcomeBoxContent from './WelcomeBoxContent';


export default class WelcomeBoxWidget extends Widget {
  className() {
    return 'welcomebox-widget';
  }

  icon() {
    return 'fas fa-user-tie';
  }

  content() {
    const user = app.session.user;
    const useWidget = app.forum.attribute('justoverclock-welcomebox.UseWidget');

    if (!useWidget) {
      return null;
    }

    if (user) {
      return <WelcomeBoxContent user={user} />;
    }

    if (app.forum.attribute('justoverclock-welcomebox.showGuestBox')) {
      return <WelcomeBoxContent />;
    }

    return null;
  }
}
