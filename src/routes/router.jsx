import { createBrowserRouter } from 'react-router';

// Layouts
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// Public Pages
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Error404 from '../pages/Error/Error404';

// Worker Dashboard Pages
import WorkerHome from '../pages/Dashboard/Worker/WorkerHome';
import TaskList from '../pages/Dashboard/Worker/TaskList';
import TaskDetails from '../pages/Dashboard/Worker/TaskDetails';
import MySubmissions from '../pages/Dashboard/Worker/MySubmissions';
import Withdrawals from '../pages/Dashboard/Worker/Withdrawals';

// Buyer Dashboard Pages
import BuyerHome from '../pages/Dashboard/Buyer/BuyerHome';
import AddTask from '../pages/Dashboard/Buyer/AddTask';
import MyTasks from '../pages/Dashboard/Buyer/MyTasks';
import PurchaseCoin from '../pages/Dashboard/Buyer/PurchaseCoin';
import PaymentHistory from '../pages/Dashboard/Buyer/PaymentHistory';

// Admin Dashboard Pages
import AdminHome from '../pages/Dashboard/Admin/AdminHome';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import ManageTasks from '../pages/Dashboard/Admin/ManageTasks';

const router = createBrowserRouter([
  // Public Routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },

  // Worker Dashboard Routes
  {
    path: '/dashboard/worker',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <WorkerHome /> },
      { path: 'tasks', element: <TaskList /> },
      { path: 'tasks/:id', element: <TaskDetails /> },
      { path: 'submissions', element: <MySubmissions /> },
      { path: 'withdrawals', element: <Withdrawals /> },
    ],
  },

  // Buyer Dashboard Routes
  {
    path: '/dashboard/buyer',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <BuyerHome /> },
      { path: 'tasks', element: <MyTasks /> },
      { path: 'add-task', element: <AddTask /> },
      { path: 'purchase', element: <PurchaseCoin /> },
      { path: 'payments', element: <PaymentHistory /> },
    ],
  },

  // Admin Dashboard Routes
  {
    path: '/dashboard/admin',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: 'users', element: <ManageUsers /> },
      { path: 'tasks', element: <ManageTasks /> },
    ],
  },

  // 404 Catch-all
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
