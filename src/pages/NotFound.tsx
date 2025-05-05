import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <div style={{fontSize: 34, display: "grid", height: "40vh",
                alignItems: "end", fontFamily: 'MontserratAlt', textAlign: "center",
                color: "#F7E4AF"}}>
                <p>Ошибка 404, страница не найдена</p>
            </div>
            <div style={{textAlign: "center"}}>
                <Link style={{fontSize: 24, textDecoration: "underline"}} to="/">Вернуться на главную</Link>
            </div>
        </div>
    )
}