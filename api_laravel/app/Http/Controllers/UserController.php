<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
{
    $user = User::find($id);
    if ($user) {
        return response()->json($user);
    } else {
        return response()->json(['error' => 'Usuario no encontrado'], 404);
    }
}

    public function edit(string $id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return response()->json($user);
    }

    public function destroy(string $id)
    {
        $user = User::find($id);
        if($user){
            $user->delete();
            return response()->json(['message' => 'Usuario eliminado con éxito']);
        }else{
            return response()->json(['Error' => 'Usuario no encontrado' ,400]);
        }
    }
}
