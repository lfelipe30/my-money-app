import React from 'react'

import {
  Routes,
  Route,
  Navigate 
} from "react-router-dom"

import Dashboard from '../dashboard/dashboard'
//import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/billingCycles' element={<BillingCycle />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
)


