import Success from './success';
import iconList from './assets/images/icon-list.svg'
import iconSuccess from './assets/images/icon-success.svg'
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg'
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg'
import { useFormik } from 'formik';
import { useState } from 'react';


function App() {
    const [success, setSuccess] = useState(false)

    // To validate the email we will use Formik by creating a function with only one value becose we will validate only email

    const validate = (values) => {
        //if wee get  any errors we will creating them in this object!!
        const errors = {};
        // 'values.email' is the field where we writi 
        if (!values.email) {
            //if there are no emails or wrong email input tish error will show up.
            errors.email = 'Valid email required!'
        } else if (
            //this regex will check if the email is corect by using '.test' function
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Valid email required!'
        }
        // and we need to return the errors to display them.
        return errors;
    }
    //this function will check the validation function and display the result
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validate,
        onSubmit: (values) => {
            setSuccess(true)

        }
    })
     
     
    return (
        <>

            {!success && <div className=' bg-g w-full flex items-center justify-center h-screen'>

                <section className='md:flex md:flex-row-reverse bg-white md:p-5 md:rounded-3xl'>
                    <picture >
                        <source media='(min-width: 640px)' srcSet={illustrationDesktop} />
                        <img src={illustrationMobile} alt="" className=' w-full' />
                    </picture>
                    <div className='p-4 md:w-[28rem] md:m-8 items-center'>
                        <h1 className='text-4xl font-bold my-4 md:text-6xl'>Stay updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <div className='flex items-center pt-4  gap-5'>
                            <img src={iconList} alt="" />
                            <p className=''>Product discovery and building what matters</p>
                        </div>
                        <div className='flex items-center pt-4  gap-5'>
                            <img src={iconList} alt="" />
                            <p className=''>Measuring to ensure updates are a success</p>

                        </div>
                        <div className='flex items-center pt-4  gap-5 mb-8'>
                            <img src={iconList} alt="" />
                            <p className='items-center'>And much more!</p>

                        </div>


                        <form onSubmit={formik.handleSubmit} autoComplete='off'>
                            <article className='flex justify-between'>
                                <label htmlFor="email" className='text-sm font-bold mb-2'>Email address</label>
                                {formik.errors.email ? <p className='text-sm text-rose-500 font-bold'>{formik.errors.email}</p> : null}
                            </article>
                            <input type="email"
                                name='email'
                                id='email'
                                placeholder="email@company.com"
                                value={formik.values.email}//thsi will conect the function with the input
                                onChange={formik.handleChange}
                                className={`p-4 cursor-pointer border focus:border-slate-400 rounded-md w-full ${formik.errors.email && "bg-rose-100 focus:border-rose-400 border-rose-500"}`} />
                            <button
                                onClick={formik.handleSubmit}
                                type='submit'
                                className='w-full hover:shadow-2xl hover:shadow-slate-500 p-4 bg-btn  mt-4 rounded-md 
             hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 text-white'>Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                </section >
            </div>}
            {success && <Success user={formik.values.email} setSuccess={setSuccess}/>}
        </>
    );
}

export default App;
