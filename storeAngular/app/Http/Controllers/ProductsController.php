<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
class ProductsController extends Controller
{
    public function getAllProducts(){
        $products = Products::All();
        return response()->json($products);

    }
}
