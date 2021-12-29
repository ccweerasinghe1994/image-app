import Document, {Head, Html, Main, NextScript} from "next/document";


class MyDocument extends Document {
    render() {
        return (
            <Html lang={"eng"}>
                <Head>

                    <link rel={"preload"} href="fonts/Roboto-Light.ttf" as={"font"} crossOrigin={"anonymos"}></link>
                    <link rel={"preload"} href="fonts/Lato-Thin.ttf" as={"font"} crossOrigin={"anonymos"}></link>
                    {/*<link rel={"preload"} href="fonts/IBMPlexSans-Regular.ttf" as={"font"} crossOrigin={"anonymos"}></link>*/}
                    {/*<link rel={"preload"} href="fonts/IBMPlexSans-Thin.ttf" as={"font"} crossOrigin={"anonymos"}></link>*/}
                </Head>
                <body>
                <Main>
                </Main>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;