import { InferGetServerSidePropsType } from "next";
import React, { Fragment, ReactElement, useState } from "react";
import {
	getProviders,
	getCsrfToken,
	getSession,
	signIn,
	SignInResponse,
} from "next-auth/react";
import { CtxOrReq } from "next-auth/client/_utils";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/MainLayout";
import Head from "next/head";
import PageHeader from "../../components/partials/PageHeader";

const Login = ({
	providers,
	csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const loginWithCredential = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		signIn("credentials", {
			redirect: false,
			email: email,
			password: password,
		}).then((res: SignInResponse | undefined) => {
			if (res!.ok) {
				router.push("/");
			} else {
				// toast.error("Credentials not match our record", {
				// 	theme: "colored",
				// });
				console.log(res);
			}
		});
	};

	return (
		<Fragment>
			<Head>
				<title>Login</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="User Login" />
			{/* content */}
			<div className="login-section padding-tb">
				<div className=" container">
					<div className="account-wrapper">
						<h3 className="title">Login</h3>
						{providers ? (
							<Fragment>
								<form
									className="account-form"
									method="post"
									action="/api/auth/callback/credentials"
								>
									<input
										name="csrfToken"
										type="hidden"
										defaultValue={csrfToken}
									/>
									<div className="form-group">
										<input
											type="email"
											placeholder="email@example.com"
											name="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											placeholder="Password"
											name="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<div className="d-flex justify-content-between flex-wrap pt-sm-2">
											<div className="checkgroup">
												<input
													type="checkbox"
													name="remember"
													id="remember"
												/>
												<label htmlFor="remember">Remember Me</label>
											</div>
											<a href="#">Forget Password?</a>
										</div>
									</div>
									<div className="form-group">
										<button className="d-block lab-btn" type="submit">
											<span>Submit Now</span>
										</button>
									</div>
								</form>

								<div className="account-bottom">
									<span className="d-block cate pt-10">
										Don’t Have any Account?{" "}
										<a href="registration.html"> Sign Up</a>
									</span>
									<span className="or">
										<span>or</span>
									</span>
									<h5 className="subtitle">Login With Social Media</h5>
									<ul className="social-media social-color lab-ul d-flex justify-content-center">
										<li>
											<a href="#" className="facebook">
												<i className="fab fa-facebook-f" />
											</a>
										</li>
										<li>
											<a href="#" className="twitter">
												<i className="fab fa-twitter" />
											</a>
										</li>
										<li>
											<a href="#" className="linkedin">
												<i className="fab fa-linkedin-in" />
											</a>
										</li>
										<li>
											<a href="#" className="instagram">
												<i className="fab fa-instagram" />
											</a>
										</li>
										<li>
											<a href="#" className="pinterest">
												<i className="fab fa-pinterest" />
											</a>
										</li>
									</ul>
								</div>
							</Fragment>
						) : null}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Login.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Login;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
	const providers = await getProviders();
	const csrfToken = await getCsrfToken(context);
	const session = await getSession(context);

	return {
		// redirect: {
		// 	destination: "/",
		// },
		props: { providers, csrfToken },
	};
};
