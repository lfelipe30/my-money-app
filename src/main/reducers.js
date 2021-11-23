import {combineReducers} from 'redux'

//Reducers
import DashBoardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer.jsx'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer
