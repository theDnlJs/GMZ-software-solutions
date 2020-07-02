import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Provider } from 'react-redux';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from '../core/theme';

import { store } from '../core/store';



export default function MyApp( props )
{
    const { Component, pageProps } = props;
    const jss = create( { plugins: [...jssPreset().plugins, rtl()] } );

    React.useEffect( () =>
    {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector( '#jss-server-side' );
        if ( jssStyles )
        {
            jssStyles.parentElement.removeChild( jssStyles );
        }

    }, [] );


    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
            </Head>
            <Provider store={store}>
                <StylesProvider jss={jss}>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Container maxWidth="md">
                            <Component {...pageProps} />
                        </Container>
                    </ThemeProvider>
                </StylesProvider>
            </Provider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};