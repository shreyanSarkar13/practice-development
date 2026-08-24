import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await registerUser(name, email, password);

            alert("Registration successful. Please login.");

            navigate("/login");
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Registration failed");
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Register</h1>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleRegister}>
                    Register
                </button>

                <p>
                    Already have an account?{" "}
                    <button onClick={() => navigate("/login")}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}
