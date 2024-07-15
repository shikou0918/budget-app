import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router';
import BudgetList from '../components/BudgetList.vue';
import AddBudgetItem from '../components/AddBudgetItem.vue';

const router: Array<RouteRecordRaw> = [
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