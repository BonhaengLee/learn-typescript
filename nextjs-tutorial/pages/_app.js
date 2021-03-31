import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ width: 1000, margin: "0 auto" }}>
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;

// 페이지 전환 시 레이아웃 유지
// 페이지 전환 시 상탯값 유지
// componentDidCatch로 커스텀 에러 핸들링
// 추가적인 데이터를 페이지로 주입 가능
// 글로벌 css 선언
