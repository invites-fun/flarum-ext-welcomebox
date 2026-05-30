import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/common/utils/formatNumber';
import listItems from 'flarum/common/helpers/listItems';
import AvatarEditor from 'flarum/forum/components/AvatarEditor';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import Button from 'flarum/common/components/Button';
import Link from 'flarum/common/components/Link';

export default class WelcomeBoxContent extends Component {
  view() {
    const user = this.attrs.user;

    if (user) {
      return this.userView(user);
    }

    return this.guestView();
  }

  userView(user) {
    const moneyName = app.forum.attribute('huoxin-money-with-history.moneyname') || app.forum.attribute('antoinefr-money.moneyname');
    const money = moneyName ? user.attribute('money') : null;
    const displayMoneyName = (moneyName || '').replace('[money] ', '');
    const settingsLink = app.route('settings');

    return (
      <div className="containerwb">
        <div className="backgrwb">
          <Button
            icon="fas fa-sign-out-alt logoutt"
            title={app.translator.trans('core.forum.header.log_out_button')}
            className="Dropdown-toggle logwbox"
            onclick={app.session.logout.bind(app.session)}
          />
          <div>
            <Link href={app.route.user(user)}>
              <div className="avatarwb">
                <AvatarEditor user={user} />
              </div>
            </Link>
          </div>
          <div className="contentwb">
            <div className="textinfo">
              {app.translator.trans('flarum-ext-welcomebox.forum.wback')}
              <br />
              <strong>{username(user)}</strong>
            </div>
            <div className="cont">
              <div className="circletop">
                <Link href={settingsLink} title={app.translator.trans('core.forum.settings.title')}>
                  <i className="menuicon fas fa-tasks"></i>
                </Link>
                <Link href={app.route.user(user)} title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipProfile')}>
                  <i className="menuicon far fa-user"></i>
                </Link>
                <Link href={app.route.user(user) + '/mentions'} title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipMentions')}>
                  <i className="menuicon fas fa-at"></i>
                </Link>
                <Link href={app.route.user(user) + '/discussions'} title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipDisclist')}>
                  <i className="menuicon far fa-list-alt"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="iconbadge">{listItems(user.badges().toArray())}</div>
          <ul className="ulwb contentwb">
            <li>
              <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.npost')}</label>:{' '}
              <strong className="textinfo">{formatNumber(user.commentCount())}</strong>
            </li>
            <li>
              <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.discussion')}</label>:{' '}
              <strong className="textinfo">{formatNumber(user.discussionCount())}</strong>
            </li>
            {moneyName && (
              <li>
                <label className="textinfo">{displayMoneyName}</label>: <strong className="textinfo">{money}</strong>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

  guestView() {
    const imgAvatar =
      app.forum.attribute('justoverclock-welcomebox.imgUrl') ||
      app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';
    const allowSignUp = app.forum.attribute('allowSignUp');

    return (
      <div className="containerwb">
        <div className="backgrwbguest">
          <img
            className="guestavatarimg"
            src={imgAvatar}
            alt={app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')}
          />
          <div className="guesttext">{app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')}</div>
          <p className="guestdesc">{app.translator.trans('flarum-ext-welcomebox.forum.notregistered')}</p>
          {allowSignUp && (
            <Button
              className="Button--primary hasIcon SplitDropdown-button"
              onclick={() => app.modal.show(SignUpModal)}
            >
              {app.translator.trans('core.forum.header.sign_up_link')}
            </Button>
          )}
          <div className="contentwb"></div>
        </div>
      </div>
    );
  }
}
