<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->email,
        'phone' => $faker->phoneNumber,
        'password' => app('hash')->make('1234'),
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});

$factory->define(App\Models\Person::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->email,
        'phone' => $faker->phoneNumber,
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});

$factory->define(App\Models\Veterinary::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->email,
        'phone' => $faker->phoneNumber,
        'veterinary_id' => $faker->randomDigitNotNull,
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});

$factory->define(App\Models\Animal::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->firstNameMale,
        'statuscode' => $faker->randomElement(['On Hold', 'In Foster', 'Adopted', 'Deceased']),
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});

$factory->define(App\Models\Product::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->firstNameMale,
        'serial' => $faker->randomNumber($nbDigits = NULL, $strict = false),
        'quantity' => $faker->randomDigitNotNull,
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});

$factory->define(App\Models\BankAccount::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->firstNameMale,
        'number' => $faker->randomNumber($nbDigits = NULL, $strict = false),
        'balance' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 100000),
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});

$factory->define(App\Models\AccountTransaction::class, function (Faker\Generator $faker) {
    return [
        'number' => $faker->randomNumber($nbDigits = NULL, $strict = false),
        'account_id' => $faker->randomDigitNotNull,
        'transaction_date' => $faker->dateTime($max = 'now', $timezone = null),
        'amount' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 10000),
        'transaction_type' => $faker->randomElement($array = array ('d','c')),
        'created_by' => $faker->randomDigitNotNull,
        'updated_by' => $faker->randomDigitNotNull        
    ];
});