import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const handleCancel = () => {
        navigate("/products");
    };

    return (
        <div className="logout-page">
            <div className="logout-header">
                <h1>Logout</h1>
            </div>

            <p>Are you sure you want to logout?</p>

            <div className="logout-actions">
                <button onClick={handleCancel}>
                    Cancel
                </button>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
