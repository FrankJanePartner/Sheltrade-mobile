import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "@env"; // Load from .env
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await axios.get(`${API_BASE_URL}/auth/user/`, {
                    headers: { Authorization: `Token ${token}` }
                });
                setUser(response.data);
            }
        } catch (error) {
            setUser(null);
        }
        setLoading(false);
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login/`, {
                email, password
            });
            await AsyncStorage.setItem("token", response.data.key);
            setUser(response.data.user);
            navigation.replace("Dashboard");
        } catch (error) {
            console.log("Login failed", error);
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem("token");
        setUser(null);
        navigation.replace("Home");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {loading ? <LoadingScreen /> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
