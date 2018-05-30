<?php

use App\Film;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class FilmsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Film::create([
            'name' => 'Titanic',
            'description' => 'This is a tragedy movie.',
            'release-date' => Carbon::create(1997, 18, 11, 0),
            'rating' => 4.8,
            'ticket-price' => 10,
            'country' => 'America',
            'genre' => 'Tragedy',
            'photo'=>'titanic.jpg'
        ]);
        Film::create([
            'name' => 'The Mummy',
            'description' => 'This is a horror movie.',
            'release-date' => Carbon::create(2000, 04, 02, 0),
            'rating' => 4,
            'ticket-price' => 10,
            'country' => 'America',
            'genre' => 'Horror',
            'photo'=>'mummy.jpg'
        ]);
        Film::create([
            'name' => 'Troy',
            'description' => 'This is a historical movie.',
            'release-date' => Carbon::create(1996, 18, 11, 0),
            'rating' => 4.8,
            'ticket-price' => 3,
            'country' => 'America',
            'genre' => 'History',
            'photo'=>'troy.jpg'
        ]);
    }
}
