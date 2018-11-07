<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});



$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post(
        'auth/login', 
        [
           'uses' => 'AuthController@authenticate'
        ]
    );

    $router->group(
        ['middleware' => 'jwt.auth'], 
        function() use ($router) {
            $router->get('users', function() {
                $users = \App\User::all();
                return response()->json($users);
            });

            
        }
    );    

    $router->get('organizations',  ['uses' => 'OrganizationController@showAllOrganizations']);    
  
    $router->get('organizations/{id}', ['uses' => 'OrganizationController@showOneOrganization']);
  
    $router->post('organizations', ['uses' => 'OrganizationController@create']);
  
    $router->delete('organizations/{id}', ['uses' => 'OrganizationController@delete']);
  
    $router->put('organizations/{id}', ['uses' => 'OrganizationController@update']);
  });
