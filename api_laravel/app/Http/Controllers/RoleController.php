<?php

namespace App\Http\Controllers;
use App\Models\Roles;
use Illuminate\Http\Request;

class RoleController extends Controller
{
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
}