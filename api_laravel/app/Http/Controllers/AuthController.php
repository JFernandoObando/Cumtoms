<?php
 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /*
    * Create a new AuthController instance.
    *
    * @return void
    */
   public function __construct()
   {
       $this->middleware('auth:api', ['except' => ['login', 'register']]);
   }
 
 
   /**
    * Register a User.
    *
    * @return \Illuminate\Http\JsonResponse
    */
   public function register() {
       $validator = Validator::make(request()->all(), [
           'name' => 'required',
           'surname' => 'required',
           'email' => 'required|email|unique:users',
           'password' => 'required|min:8',
           'role_id' => 'required',
       ]);
 
       if($validator->fails()){
           return response()->json($validator->errors()->toJson(), 400);
       }
 
       $user = new User;
       $user->name = request()->name;
       $user->surname = request()->surname;
       $user->email = request()->email;
       $user->password = bcrypt(request()->password);
       $user->role_id = request()->role_id;
       $user->save();
 
       return response()->json($user, 201);
   }
 
 
   /**
    * Get a JWT via given credentials.
    *
    * @return \Illuminate\Http\JsonResponse
    */
   public function login()
   {
       $credentials = request(['email', 'password']);
 
       if (! $token = auth('api')->attempt($credentials)) {
           return response()->json(['error' => 'Unauthorized'], 401);
       }
 
       return $this->respondWithToken($token);
   }
 
   /**
    * Get the authenticated User.
    *
    * @return \Illuminate\Http\JsonResponse
    */
   public function me()
   {
       return response()->json(auth('api')->user());
   }
 
   /**
    * Log the user out (Invalidate the token).
    *
    * @return \Illuminate\Http\JsonResponse
    */
   public function logout()
   {
       auth('api')->logout();
 
       return response()->json(['message' => 'Successfully logged out']);
   }
 
   /**
    * Refresh a token.
    *
    * @return \Illuminate\Http\JsonResponse
    */
   public function refresh()
   {
       return $this->respondWithToken(auth('api')->refresh());
   }
 
   /**
    * Get the token array structure.
    *
    * @param  string $token
    *
    * @return \Illuminate\Http\JsonResponse
    */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
            'user' => [
                'full_name' => auth('api')->user()->name
                    .''.auth('api')->user()->surname,
                'email' => auth('api')->user()->email,
             ]
        ]);
    }
}