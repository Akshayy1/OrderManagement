import { Button } from '../components/ui/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrderListing() {
  return (
    <div className="space-y-4 md:space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-textMain">Orders</h2>
          <p className="text-sm text-textMuted mt-0.5">Manage and track your order fulfillments.</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/orders/new" className="flex-1 sm:flex-none">
            <Button className="w-full h-10 px-3 md:px-4">
              Create <span className="hidden sm:inline">Order</span>
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
