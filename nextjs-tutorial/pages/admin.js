import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

export default function Admin() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    // admin 이동 시 /api/isLogin에 로그인 상태인지 확인 후 아니면 /login 으로 이동
    function checkLogin() {
        axios.get("/api/isLogin").then((res) => {
            if (res.status === 200 && res.data.name) {
                // 로그인
                setIsLogin(true);
            } else {
                // 로그인 안됨
                router.push("/login");
            }
        });
    }

    function logout() {
        axios.get("/api/logout").then((res) => {
            if (res.status === 200) {
                router.push("/");
            }
        });
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return <>admin{isLogin && <Button onClick={logout}>Logout</Button>}</>;
}
