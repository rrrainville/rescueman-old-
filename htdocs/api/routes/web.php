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

    /*
    $router->group(
        ['middleware' => 'jwt.auth'], 
        function() use ($router) {
            $router->get('users', function() {
                $users = \App\User::all();
                return response()->json($users);
            });

            
        }
    );    
    */

    /*
	Model: User
	Controller: UserController
    */
    $router->get('users',  ['uses' => 'UserController@getAll']);    
    $router->get('users/{id}', ['uses' => 'UserController@get']);
    $router->post('users', ['uses' => 'UserController@create']);
    $router->delete('users/{id}', ['uses' => 'UserController@delete']);
    $router->put('users/{id}', ['uses' => 'UserController@update']);

    /*
	Model: Organization
	Controller: OrganizationController
    */
    $router->get('organizations',  ['uses' => 'OrganizationController@getAll']);    
    $router->get('organizations/{id}', ['uses' => 'OrganizationController@get']);
    $router->post('organizations', ['uses' => 'OrganizationController@create']);
    $router->delete('organizations/{id}', ['uses' => 'OrganizationController@delete']);
    $router->put('organizations/{id}', ['uses' => 'OrganizationController@update']);

    /*
	Model: ActivityEvent
	Controller: ActivityEventController
    */
    $router->get('events',  ['uses' => 'ActivityEventController@getAll']);    
    $router->get('events/{id}', ['uses' => 'ActivityEventController@get']);
    $router->post('events', ['uses' => 'ActivityEventController@create']);
    $router->delete('events/{id}', ['uses' => 'ActivityEventController@delete']);
    $router->put('events/{id}', ['uses' => 'ActivityEventController@update']);

    /*
	Model: Animal
	Controller: AnimalController
    */
    $router->get('animals',  ['uses' => 'AnimalController@getAll']);    
    $router->get('animals/{id}', ['uses' => 'AnimalController@get']);
    $router->post('animals', ['uses' => 'AnimalController@create']);
    $router->delete('animals/{id}', ['uses' => 'AnimalController@delete']);
    $router->put('animals/{id}', ['uses' => 'AnimalController@update']);

    /*
	Model: Appointment
	Controller: AppointmentController
    */
    $router->get('appointments',  ['uses' => 'AppointmentController@getAll']);    
    $router->get('appointments/{id}', ['uses' => 'AppointmentController@get']);
    $router->post('appointments', ['uses' => 'AppointmentController@create']);
    $router->delete('appointments/{id}', ['uses' => 'AppointmentController@delete']);
    $router->put('appointments/{id}', ['uses' => 'AppointmentController@update']);

    /*
	Model: BankAccount
	Controller: BankAccountController
    */
    $router->get('bankaccounts',  ['uses' => 'BankAccountController@getAll']);    
    $router->get('bankaccounts/{id}', ['uses' => 'BankAccountController@get']);
    $router->post('bankaccounts', ['uses' => 'BankAccountController@create']);
    $router->delete('bankaccounts/{id}', ['uses' => 'BankAccountController@delete']);
    $router->put('bankaccounts/{id}', ['uses' => 'BankAccountController@update']);

    /*
	Model: BankTransaction
	Controller: BankTransactionController
    */
    $router->get('banktransactions',  ['uses' => 'BankTransactionController@getAll']);    
    $router->get('banktransactions/{id}', ['uses' => 'BankTransactionController@get']);
    $router->post('banktransactions', ['uses' => 'BankTransactionController@create']);
    $router->delete('banktransactions/{id}', ['uses' => 'BankTransactionController@delete']);
    $router->put('banktransactions/{id}', ['uses' => 'BankTransactionController@update']);

    /*
	Model: Document
	Controller: DocumentController
    */
    $router->get('documents',  ['uses' => 'DocumentController@getAll']);    
    $router->get('documents/{id}', ['uses' => 'DocumentController@get']);
    $router->post('documents', ['uses' => 'DocumentController@create']);
    $router->delete('documents/{id}', ['uses' => 'DocumentController@delete']);
    $router->put('documents/{id}', ['uses' => 'DocumentController@update']);

    /*
	Model: Email
	Controller: EmailController
    */
    $router->get('emails',  ['uses' => 'EmailController@getAll']);    
    $router->get('emails/{id}', ['uses' => 'EmailController@get']);
    $router->post('emails', ['uses' => 'EmailController@create']);
    $router->delete('emails/{id}', ['uses' => 'EmailController@delete']);
    $router->put('emails/{id}', ['uses' => 'EmailController@update']);

    /*
        Model: Note
        Controller: NoteController
    */
    $router->get('notes',  ['uses' => 'NoteController@getAll']);    
    $router->get('notes/{id}', ['uses' => 'NoteController@get']);
    $router->post('notes', ['uses' => 'NoteController@create']);
    $router->delete('notes/{id}', ['uses' => 'NoteController@delete']);
    $router->put('notes/{id}', ['uses' => 'NoteController@update']);

    /*
        Model: Person
        Controller: PersonController
    */
    $router->get('people',  ['uses' => 'PersonController@getAll']);    
    $router->get('people/{id}', ['uses' => 'PersonController@get']);
    $router->post('people', ['uses' => 'PersonController@create']);
    $router->delete('people/{id}', ['uses' => 'PersonController@delete']);
    $router->put('people/{id}', ['uses' => 'PersonController@update']);

    /*
	Model: PersonAnimal
	Controller: PersonAnimalController
    */
    $router->get('personanimals',  ['uses' => 'PersonAnimalController@getAll']);    
    $router->get('personanimals/{id}', ['uses' => 'PersonAnimalController@get']);
    $router->post('personanimals', ['uses' => 'PersonAnimalController@create']);
    $router->delete('personanimals/{id}', ['uses' => 'PersonAnimalController@delete']);
    $router->put('personanimals/{id}', ['uses' => 'PersonAnimalController@update']);

    /*
	Model: PhoneCall
	Controller: PhoneCallController
    */
    $router->get('phonecalls',  ['uses' => 'PhoneCallController@getAll']);    
    $router->get('phonecalls/{id}', ['uses' => 'PhoneCallController@get']);
    $router->post('phonecalls', ['uses' => 'PhoneCallController@create']);
    $router->delete('phonecalls/{id}', ['uses' => 'PhoneCallController@delete']);
    $router->put('phonecalls/{id}', ['uses' => 'PhoneCallController@update']);

    /*
	Model: Product
	Controller: ProductController
    */
    $router->get('products',  ['uses' => 'ProductController@getAll']);    
    $router->get('products/{id}', ['uses' => 'ProductController@get']);
    $router->post('products', ['uses' => 'ProductController@create']);
    $router->delete('products/{id}', ['uses' => 'ProductController@delete']);
    $router->put('products/{id}', ['uses' => 'ProductController@update']);

    /*
	Model: Report
	Controller: ReportController
    */
    $router->get('reports',  ['uses' => 'ReportController@getAll']);    
    $router->get('reports/{id}', ['uses' => 'ReportController@get']);
    $router->post('reports', ['uses' => 'ReportController@create']);
    $router->delete('reports/{id}', ['uses' => 'ReportController@delete']);
    $router->put('reports/{id}', ['uses' => 'ReportController@update']);

    /*
	Model: SecurityRole
	Controller: SecurityRoleController
    */
    $router->get('securityroles',  ['uses' => 'SecurityRoleController@getAll']);    
    $router->get('securityroles/{id}', ['uses' => 'SecurityRoleController@get']);
    $router->post('securityroles', ['uses' => 'SecurityRoleController@create']);
    $router->delete('securityroles/{id}', ['uses' => 'SecurityRoleController@delete']);
    $router->put('securityroles/{id}', ['uses' => 'SecurityRoleController@update']);

    /*
	Model: Task
	Controller: TaskController
    */
    $router->get('tasks',  ['uses' => 'TaskController@getAll']);    
    $router->get('tasks/{id}', ['uses' => 'TaskController@get']);
    $router->post('tasks', ['uses' => 'TaskController@create']);
    $router->delete('tasks/{id}', ['uses' => 'TaskController@delete']);
    $router->put('tasks/{id}', ['uses' => 'TaskController@update']);

    /*
	Model: Transport
	Controller: TransportController
    */
    $router->get('transports',  ['uses' => 'TransportController@getAll']);    
    $router->get('transports/{id}', ['uses' => 'TransportController@get']);
    $router->post('transports', ['uses' => 'TransportController@create']);
    $router->delete('transports/{id}', ['uses' => 'TransportController@delete']);
    $router->put('transports/{id}', ['uses' => 'TransportController@update']);

    /*
	Model: Veterinary
	Controller: VeterinaryController
    */
    $router->get('veterinarians',  ['uses' => 'VeterinaryController@getAll']);    
    $router->get('veterinarians/{id}', ['uses' => 'VeterinaryController@get']);
    $router->post('veterinarians', ['uses' => 'VeterinaryController@create']);
    $router->delete('veterinarians/{id}', ['uses' => 'VeterinaryController@delete']);
    $router->put('veterinarians/{id}', ['uses' => 'VeterinaryController@update']);

    /*
	Model: VeterinaryVisit
	Controller: VeterinaryVisitController
    */
    $router->get('veterinaryvisits',  ['uses' => 'VeterinaryVisitController@getAll']);    
    $router->get('veterinaryvisits/{id}', ['uses' => 'VeterinaryVisitController@get']);
    $router->post('veterinaryvisits', ['uses' => 'VeterinaryVisitController@create']);
    $router->delete('veterinaryvisits/{id}', ['uses' => 'VeterinaryVisitController@delete']);
    $router->put('veterinaryvisits/{id}', ['uses' => 'VeterinaryVisitController@update']);

    /*
	Model: VeterinaryVisitService
	Controller: VeterinaryVisitServiceController
    */
    $router->get('veterinaryvisitservices',  ['uses' => 'VeterinaryVisitServiceController@getAll']);    
    $router->get('veterinaryvisitservices/{id}', ['uses' => 'VeterinaryVisitServiceController@get']);
    $router->post('veterinaryvisitservices', ['uses' => 'VeterinaryVisitServiceController@create']);
    $router->delete('veterinaryvisitservices/{id}', ['uses' => 'VeterinaryVisitServiceController@delete']);
    $router->put('veterinaryvisitservices/{id}', ['uses' => 'VeterinaryVisitServiceController@update']);

  });
