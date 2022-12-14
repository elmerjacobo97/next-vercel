import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";

export default function About() {
    return (
        <>
            <h2>About Page</h2>

            <h1 className={'title'}>
                {/*Ir a <a href="/">Home</a>*/}
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </>
    )
}

About.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}