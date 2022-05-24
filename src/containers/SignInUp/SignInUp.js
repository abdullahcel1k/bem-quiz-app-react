import React from 'react';
import './signinup.scss';
import { Form, Formik } from 'formik';
import { SignInModel } from '../../utils/forms/sigin-in/initialModel';
import { SignInValidationScheme } from '../../utils/forms/sigin-in/validationScheme';
import { SignUpModel } from '../../utils/forms/sign-up/initialModel';
import { SignUpValidationScheme } from '../../utils/forms/sign-up/validationScheme';


const SignInUp = () => {
  return (
    <div className='col-6 offset-3 mt-5'>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-signin-tab" data-bs-toggle="tab" data-bs-target="#nav-signin" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Giriş Yap</button>
          <button className="nav-link" id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Kayıt Ol</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <Formik
            initialValues={SignInModel}
            validationSchema={SignInValidationScheme}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("başarılı!")
            }}
          >{({ isSubmitting, handleSubmit,
            errors, touched, handleChange }) => (
            <Form>
              <img class="mb-4" src="/images/quiz.webp" alt="" width="72" height="57" />
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input type="text" name='email' onChange={handleChange} class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                {errors.email && touched.email ? <small >{errors.email}</small> : null}
              </div>
              <div class="form-floating">
                <input type="password" name="password" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
                {errors.password && touched.password ? <small>{errors.password}</small> : null}
              </div>

              {/* <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </Form>
          )}</Formik>
        </div>
        <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab" tabindex="0">
          <Formik
            initialValues={SignUpModel}
            validationSchema={SignUpValidationScheme}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("başarılı!")
            }}
          >{({ isSubmitting, handleSubmit,
            errors, touched, handleChange }) => (
            <Form>
              <img class="mb-4" src="/images/quiz.webp" alt="" width="72" height="57" />
              <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

              <div class="form-floating">
                <input type="text" name='fullName' onChange={handleChange} class="form-control" id="floatingInput" />
                <label for="floatingInput">Full Name</label>
                {errors.fullName && touched.fullName ? <small >{errors.fullName}</small> : null}
              </div>
              <div class="form-floating">
                <input type="text" name='email' onChange={handleChange} class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                {errors.email && touched.email ? <small >{errors.email}</small> : null}
              </div>
              <div class="form-floating">
                <input type="password" name="password" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
                {errors.password && touched.password ? <small>{errors.password}</small> : null}
              </div>
              <div class="form-floating">
                <input type="password" name="rePassword" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="Re-Password" />
                <label for="floatingPassword">Re-Password</label>
                {errors.rePassword && touched.rePassword ? <small>{errors.rePassword}</small> : null}
              </div>

              {/* <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </Form>
          )}</Formik>
        </div>
      </div>
    </div>
  )
}

export default SignInUp