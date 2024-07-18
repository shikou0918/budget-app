import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router';
import BudgetList from '../components/BudgetList.vue';
import AddBudgetItem from '../components/AddBudgetItem.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'BudegetList',
        component: BudgetList
    },
    {
        path: '/add',
        name: 'AddBudgetItem',
        component: AddBudgetItem
    }, 
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;