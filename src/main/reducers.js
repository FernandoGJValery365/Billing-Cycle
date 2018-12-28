import { combineReducers } from "redux";
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducers';
import BillingCyleReducer from '../billingCycles/billingCycleReducers';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyleReducer
});

export default rootReducer;