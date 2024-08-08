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

public function update(Request $request, $id)
{
    // Validar los datos de la solicitud
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'surname' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users,email,' . $id,
        'role_id' => 'nullable|exists:roles,id',
    ]);

    // Encontrar al usuario por ID
    $user = User::findOrFail($id);

    // Actualizar el usuario con los datos validados
    $user->update($validatedData);

    // Retornar la respuesta JSON con el usuario actualizado
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
