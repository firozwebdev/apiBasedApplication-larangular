<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmsController extends Controller
{
    public function getFilms(){
        $films = Film::paginate(1);
        return response()->json($films);
    }
}
