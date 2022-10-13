import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const Pricing = () => {
    return (
        <MainLayout>
            <h2>Pricing Page</h2>

            <h1 className={'title'}>
                {/*Ir a <a href="/">Home</a>*/}
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/pricing.js</code>
            </p>
        </MainLayout>
    );
};

export default Pricing;