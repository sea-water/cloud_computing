import Header from './header';
import Footer from './footer';


export default function Layout({children}) {
    return (
        <>
            <Header/>
            <h1>작년에 수강한 영상디자인 수업의 과제 모음집</h1>
            <div>{children}</div>
            <Footer/>
        </>
    )
}