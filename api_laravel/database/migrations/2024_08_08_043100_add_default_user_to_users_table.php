<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        DB::table('users')->insert([
            'name' => 'Default',
            'surname' => 'User',
            'email' => 'defaultuser@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password123'), // Cambia la contraseña según sea necesario
            'role_id' => 1, // Ajusta el role_id según tu configuración
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
    
    public function down()
    {
        DB::table('users')->where('email', 'defaultuser@example.com')->delete();
    }
};
