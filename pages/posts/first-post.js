import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost(){

    return (
        <Layout>
        <Head>
            <title>This is the First Post</title>
        </Head>

        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={()=>console.log("Script loaded Successfully")}
        />

        <h1>First Post</h1>
        <h2>
        <Link href="/">
            <a>Back to homepage!</a>
        </Link>
        </h2>
        </Layout>
    )
}