import React from 'react';
import {useNavigate} from 'react-router-dom'

function Logout() {
    const history = useNavigate();

    // This function will be called when the user clicks on the logout button.
    const handleLogout = () => {
        // Remove the login status from localStorage.
        localStorage.removeItem('isLoggedIn');
        // Navigate to the home page (or login page).
        history('/inf');
    };

    return (
        <div className='h-screen w-full flex items-center justify-center bg-blue-200'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
            <h1 className='text-3xl font-roboto text-blue-800 mb-4'>
              Are you sure ?
            </h1>
            <div className='mt-6'>
              <button
                onClick={handleLogout}
                className='py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
    )
    }
    

export default Logout
