import app from 'flarum/admin/app';

app.initializers.add('justoverclock/flarum-ext-welcomebox', () => {
  app.extensionData
    .for('justoverclock-welcomebox')
    .registerSetting({
      setting: 'justoverclock-welcomebox.UseWidget',
      label: app.translator.trans('flarum-ext-welcomebox.admin.UseWidget'),
      type: 'boolean',
      help: app.translator.trans('flarum-ext-welcomebox.admin.UseWidgetHelp'),
    })
    .registerSetting({
      setting: 'justoverclock-welcomebox.show.guestbox',
      label: app.translator.trans('flarum-ext-welcomebox.admin.enablepostbox'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'justoverclock-welcomebox.imgUrl',
      name: 'imgUrl',
      type: 'URL',
      label: app.translator.trans('flarum-ext-welcomebox.admin.img'),
      help: app.translator.trans('flarum-ext-welcomebox.admin.img-help'),
    });
});
