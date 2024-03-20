import React, { useEffect, useState } from "react";

const RegistrationForm = () => {
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

	const [user, setUser] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		if (submitted) {
			const timer = setTimeout(() => {
				setSubmitted(false); // Reset submitted state after showing the message
			}, 2000);

			return () => clearTimeout(timer); // Cleanup when component unmounts
		}
	}, [submitted]);

	const formValidation = () => {
		const newErrors = {};

		if (!user.firstName) {
			newErrors.firstName = "First Name is required!";
		}

		if (!user.lastName) {
			newErrors.lastName = "Last name is required";
		}

		if (!user.email) {
			newErrors.email = "Email is required";
		}

		if (!user.password) {
			newErrors.password = "Password is required";
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (user.email && !emailRegex.test(user.email)) {
			newErrors.email = "Invalid email format";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChangeInput = ({ target }) => {
		const { name, value } = target;

		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formValidation());
		console.log(errors);
		if (formValidation()) {
			console.log("User data:", user);
			setUser(initialState);
			setSubmitted(true);
		}
	};

	return (
		<form
			className="w-[600px] shadow-2xl rounded-xl pt-12 px-6 pb-14 flex flex-col gap-4"
			onSubmit={handleSubmit}
		>
			<h1 className="text-4xl font-semibold mb-6">Register Form</h1>

			<div className="grid grid-cols-4">
				<label
					htmlFor="firstName"
					className="form-label col-span-1 font-semibold"
				>
					First Name
				</label>
				<input
					type="text"
					className="form-control border-[1px] border-black rounded-lg col-span-3 py-2 px-4"
					id="firstName"
					name="firstName"
					value={user.firstName}
					onChange={handleChangeInput}
					placeholder="First name"
				/>
				{errors.firstName && (
					<p className="text-rose-500 font-semibold p-2 col-start-2 col-end-5">
						{errors.firstName}
					</p>
				)}
			</div>
			<div className="grid grid-cols-4">
				<label
					htmlFor="lastName"
					className="form-label col-span-1 font-semibold"
				>
					Last Name
				</label>
				<input
					type="text"
					className="form-control border-[1px] border-black rounded-lg col-span-3 py-2 px-4"
					id="lastName"
					name="lastName"
					value={user.lastName}
					onChange={handleChangeInput}
					placeholder="Last name"
				/>
				{errors.lastName && (
					<p className="text-rose-500 font-semibold p-2 col-start-2 col-end-5">
						{errors.lastName}
					</p>
				)}
			</div>
			<div className="grid grid-cols-4">
				<label
					htmlFor="email"
					className="form-label col-span-1 font-semibold"
				>
					Email
				</label>
				<input
					type="email"
					className="form-control border-[1px] border-black rounded-lg col-span-3 py-2 px-4"
					id="email"
					name="email"
					value={user.email}
					onChange={handleChangeInput}
					placeholder="Email"
				/>
				{errors.email && (
					<p className="text-rose-500 font-semibold p-2 col-start-2 col-end-5">
						{errors.email}
					</p>
				)}
			</div>
			<div className="grid grid-cols-4">
				<label
					htmlFor="password"
					className="form-label col-span-1 font-semibold"
				>
					Password
				</label>
				<input
					type="password"
					className="form-control border-[1px] border-black rounded-lg col-span-3 py-2 px-4"
					id="password"
					name="password"
					value={user.password}
					onChange={handleChangeInput}
					placeholder="Password"
				/>
				{errors.password && (
					<p className="text-rose-500 font-semibold p-2 col-start-2 col-end-5">
						{errors.password}
					</p>
				)}
			</div>
			<div className="grid">
				<button
					type="submit"
					className="py-2 px-12 bg-emerald-400 rounded-md shadow-md text-white font-semibold"
				>
					Register
				</button>
			</div>
			{submitted && (
				<p className="rounded-lg text-white bg-emerald-400 py-2 px-6 font-semibold">
					Registration successful! 🎉 Thank you for signing up.
				</p>
			)}
		</form>
	);
};

export default RegistrationForm;
