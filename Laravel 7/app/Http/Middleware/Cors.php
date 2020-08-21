<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
        ->header('Access-Control-allow-Origin', "*")
        ->header('Access-Control-allow-Methods', "PUT, POST, DELETE, GET, OPTIONS")
        ->header('Access-Control-allow-Headers', "Accept, Authorization, Content-Type");
    }
}
