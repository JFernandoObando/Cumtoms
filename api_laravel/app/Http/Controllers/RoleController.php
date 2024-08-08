<?php

namespace App\Http\Controllers;
use App\Models\Roles;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(){
        $role = Roles::all();
        return response()->json($role);
    }

    public function store(Request $request)
    {
        $request->validate([
            'roleCode' => 'required|unique:roles,role_code',
            'roleName' => 'required',
        ]);

        $role = new Roles();
        $role->role_code = $request->roleCode;
        $role->role_name = $request->roleName;
        $role->save();

        return response()->json(['message' => 'Rol creado exitosamente'], 201);
    }

    // Obtener todos los roles
    public function index()
    {
        $roles = Roles::all();
        return response()->json($roles);
    }

     // Obtener un rol por ID
     public function show($id)
     {
         $role = Role::find($id);
 
         if ($role) {
             return response()->json($role);
         } else {
             return response()->json(['message' => 'Role not found'], 404);
         }
     }

     // Actualizar un rol existente
    public function update(Request $request, $id)
    {
        $role = Role::find($id);

        if ($role) {
            $request->validate([
                'code' => 'required|string|max:255',
                'name' => 'required|string|max:255',
            ]);

            $role->update([
                'code' => $request->code,
                'name' => $request->name,
            ]);

            return response()->json($role);
        } else {
            return response()->json(['message' => 'Role not found'], 404);
        }
    }

    // Eliminar un rol
    public function destroy($id)
    {
        $role = Role::find($id);

        if ($role) {
            $role->delete();
            return response()->json(['message' => 'Role deleted successfully']);
        } else {
            return response()->json(['message' => 'Role not found'], 404);
        }
    }
}