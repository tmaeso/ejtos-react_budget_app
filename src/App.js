import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Add code to import components:
import Budget from './components/Budget';
import Remaining from './components/Remaining';

import ExpenseTotal from './components/ExpenseTotal';





import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div className='col-sm'>
                                <Budget/>
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'>
                                <Remaining/>
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'>
                                <ExpenseTotal/>
                            </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
