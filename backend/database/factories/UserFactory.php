<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Film::class, function (Faker $faker) {
    $i = 1; $i++;
    return [
        'name' => $faker->name,
        'slug' => str_slug($faker->name,'-'),
        'description' => $faker->text,
        'release-date' => $faker->dateTimeThisDecade($max = '+10 years'),
        'rating' => rand(1,5),
        'ticket-price' =>  $faker->randomFloat(2,1,100),
        'country' =>  $faker->country,
        'photo'=> 'image-'.$faker->unique()->randomNumber($nbDigits = 1)
    ];
});

$factory->define(App\Genre::class, function (Faker $faker) {
    static $genreName = ['Historical','Romantic','Horror','Tragedy'];
    return [
        'film_id' => App\Film::all()->random()->id,
        'genre-name' => $genreName[rand(0,3)]
    ];
});
