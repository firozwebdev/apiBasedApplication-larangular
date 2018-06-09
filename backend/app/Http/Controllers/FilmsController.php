<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmsController extends Controller
{
    public function getFilms(){
        $films = Film::all();
        return response()->json($films);
    }

    public function saveFilm(Request $request){
       
       
      
       if($request->hasFile('photo')) {
         $file = $request->file('photo');
       }
       

        $fileName = $file->getClientOriginalName();
        
        
        $request->file('photo')->move("upload/film-images/",$fileName);
        $img_directory = asset('/upload/film-images/'. $fileName); 
        
        if($fileName){
           
            
            Film::create([
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'description' => $request->description,
                'release-date' => $request->releaseDate,
                'photo' => $img_directory,
            ]);

            return 'Data is saved';
         }
    }
}   
