<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $films = Film::all();
        return response()->json($films,200);
    }

   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Film $film)
    {
              
        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = $file->getClientOriginalName();
            $request->file('photo')->move("upload/film-images/",$fileName);
            $img_directory = asset('/upload/film-images/'. $fileName); 
        }else{
            $img_directory = '';
        }
        
        // Film::create([
        //     'name' => $request->name,
        //     'slug' => str_slug($request->name),
        //     'description' => $request->description,
        //     'release-date' => $request->releaseDate,
        //     'photo' => $img_directory,
        // ]);

        $film->name = $request->get('name');
        $film->slug = str_slug($request->get('name'));
        $film->description = $request->get('description');
        $film->releaseDate = $request->get('releaseDate');
        $film->photo = $img_directory;

        return response()->json([
            'message' => 'Film Saved Successfully',
            'film' => $film
        ],201);
       
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
