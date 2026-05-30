<?php

/*
 * This file is part of justoverclock/flarum-ext-welcomebox.
 *
 * Copyright (c) Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\Welcomebox;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    (new Extend\Locales(__DIR__ . '/locale')),
    (new Extend\Settings())
        ->serializeToForum('justoverclock-welcomebox.showGuestBox', 'justoverclock-welcomebox.show.guestbox', 'boolval', false)
        ->serializeToForum('justoverclock-welcomebox.UseWidget', 'justoverclock-welcomebox.UseWidget', 'boolval', false)
        ->serializeToForum('justoverclock-welcomebox.imgUrl', 'justoverclock-welcomebox.imgUrl', 'strval', ''),
];
