var elixir = require('laravel-elixir');

// Config
elixir.extend('sourcemaps', false);

/**
 |--------------------------------------------------------------------------
 | Asset management
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix.sass('app.scss');
});
