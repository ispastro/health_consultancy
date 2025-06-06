<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        
        Schema::create('appointments', function (Blueprint $table) {

            $table->id("appointment_id")->onDelete("cascade");

            $table->foreignId('doctor_id')->constrained('doctors', 'doctor_id');
            $table->foreignId('patient_id')->constrained('patients', 'patient_id');

            $table->string('symptoms');

            $table->date('appointmentDate');
            $table->time('appointmentTime');

            $table->decimal('price', 10, 2);
            $table->string('statusAppointment')->default('no');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
