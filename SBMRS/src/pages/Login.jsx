/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Input from '../components/Input';
import { validateForm } from "../utils/formValidate.js";
import MoviePoster from '../components/MoviePoster';

// import {Facebook,GitHub,Google} from '@mui/material/Icon';



function Login(props) {
    const [form, setForm] = useState([
        
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email",
            validate: ["isNotEmpty", "isEmail"],
            isValidated: false,
            errorFormName: "Email",
            error: "",
        },
        {
            id: "password",
            name: "password",
            type: "text",
            placeholder: "Password",
            validate: ["isNotEmpty"],
            isValidated: false,
            errorFormName: "Password",
            error: "",
        },
    ]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        setForm(
            form.map(eachForm => {
                const formStatus = validateForm(
                    formData.get(eachForm.name),
                    eachForm.validate,
                    eachForm.errorFormName
                );
                eachForm.isValidated = !formStatus.isPass;
                eachForm.error = formStatus.message;
                return eachForm;
            })
        );
    }

    return (
        <div className="App">
             <MoviePoster />
            <div className="pt-20 absolute top-0 left-0 right-0 mx-auto  lg:min-h-screen font-poppins bg-primary-red-500 bg-intro-mobile lg:bg-intro-desktop overflow-hidden bg-desktop-intro lg:flex py-12">
                <div className="max-w-[1240px] mx-auto container flex flex-grow">
                    <div className="mx-3 flex flex-wrap h-full">
                        <div className="px-3 py-20 lg:py-0 w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
                            <div className="text-white space-y-8 my-auto xl:w-10/12">
                                <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold">
                                    Learn to code by watching others
                                </h1>
                                <p>
                                    See how experienced developers solve
                                    problems in real-time. Watching scripted
                                    tutorials is great, but understanding how
                                    developers think is invaluable.
                                </p>
                            </div>
                        </div>
                        <div className="px-3 w-full lg:w-1/2 flex items-center">
                            <div className="space-y-8 w-full">
                            
                                <form
                                    className="bg-white rounded-lg shadow-hard-gray"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="p-8 text-sm space-y-6">
                                        {form.map((_form, _index) => {
                                            return (
                                                <Input
                                                    key={`form-${_index}`}
                                                    id={_form.id}
                                                    name={_form.name}
                                                    placeholder={
                                                        _form.placeholder
                                                    }
                                                    isValidated={
                                                        _form.isValidated
                                                    }
                                                    error={_form.error}
                                                />
                                            );
                                        })}
                                        <button
                                            
                                            
                                            className="bg-[#ff5100] hover:bg-[#c63600]  font-semibold text-white py-4 px-3 rounded-lg text-center w-full uppercase border-b-[6px] border-primary-green-600"
                                        >Login</button>
                                        <p className="text-center text-neutral-grayish-blue-500 text-[12px]">
                                            By clicking the button, you are
                                            agreeing to our
                                            <a
                                                className="text-primary-red-500 font-semibold ml-1"
                                                href="/"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                Terms and Services
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Login;