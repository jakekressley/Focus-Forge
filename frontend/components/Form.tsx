// register functionality
"use client"
import { useState } from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from "../state/index";
import Dropzone from "react-dropzone";

// When we validate inputs
const registerSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    nickName: yup.string().required("required"),
    profilePicture: yup.string().required("required"),
    balance :yup.string().required("required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesRegister = {
    email: "",
    password: "",
    nickName: "",
    profilePicture: "",
    balance: 0,
}

const initialValuesLogin = {
    email: "",
    password: "",
}

const Form = () => {
    // Display a different form depending on the page type
    const [pageType, setPageType] = useState("login");
    const [loggedInUser, setLoggedInUser] = useState(null);
    //const navigate = useNavigate();

    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const register = async (values:any, onSubmitProps:any) => {
        // allows to send form info with an image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        //formData.append('picturePath', values.picture.name);

        const savedUserResponse = await fetch("http://localhost:3001/auth/register", 
        {
            method: "POST",
            body: formData,
        });
        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();

        if (savedUser) {
            setPageType("login");
        }
    };

    const login = async (values:any, onSubmitProps:any) => {
        const loggedInResponse = await fetch("http://localhost:3001/auth/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();

        if (loggedIn) {
            setLoggedInUser(loggedIn.user);
            // ...
        }
    };

    const handleFormSubmit = async(values:any, onSubmitProps:any) => {
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    }

    return (
        <Formik 
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0 1fr))"
                    >
                        {isRegister && (
                            <>
                                <TextField 
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={Boolean(touched.email) && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </>
                        )}
                        <TextField 
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <TextField 
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                    </Box>

                    {/* BUTTONS */}
                    <Box>
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                backgroundColor: "#000",
                                color: "#fff",
                            }}
                        >
                            {isLogin ? "LOGIN" : "REGISTER"}
                        </Button>
                        <Typography
                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                color: "#000",
                                backgroundColor: "#fff",
                                cursor: "pointer",
                                textAlign: "center",
                            }}
                        >
                            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                        </Typography>
                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default Form;