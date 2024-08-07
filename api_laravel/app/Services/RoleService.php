<?php

namespace App\Services;

use App\Models\Role;
use Illuminate\Support\Facades\Validator;

class RoleService
{
    public function createRole(array $data)
    {
        $validatedData = Validator::make($data, [
            'roleCode' => 'required|unique:roles,role_code',
            'roleName' => 'required',
        ])->validate();

        $role = new Role();
        $role->role_code = $validatedData['roleCode'];
        $role->role_name = $validatedData['roleName'];
        $role->save();

        return $role;
    }
}
