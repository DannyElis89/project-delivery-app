import React from 'react';
import './style.css';

import Header from '../../../components/header';
import OrdersCard from '../../../components/ordersCard';

function Orders() {
  return (
    <div>
      <Header />
      <div className="pageOrder">
        <div className="divcardsOrder">
          <OrdersCard />
        </div>
      </div>
    </div>
  );
}
export default Orders;
