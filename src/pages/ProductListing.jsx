import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import {Package} from 'lucide-react';

export default function ProductListing() {
  return (
    <div className="space-y-4 md:space-y-6">
  
          <Link to="/products/new" className="flex-1 sm:flex-none">
            <Button className="w-full h-10 px-3 md:px-4">
              <Package className="w-4 h-4 mr-2 hidden sm:inline" />
              Add <span className="hidden sm:inline">Product</span>
            </Button>
          </Link>

    </div>
  );
}
