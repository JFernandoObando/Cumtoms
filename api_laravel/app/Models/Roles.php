<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory;

    // Especifica la tabla si el nombre no sigue la convención pluralizada
    protected $table = 'roles';

    // Define los campos que pueden ser asignados en masa
    protected $fillable = ['role_code', 'role_name'];

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'role_id');
    }
}