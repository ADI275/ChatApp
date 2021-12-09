import { createTheme, ThemeProvider } from '@material-ui/core';
import React, { createContext } from 'react';

export const TemplateContext=createContext(null);
const TemplateProvider = ({children}) => {
    const theme=createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    height: '95%',
                    top: 18,
                    width: '28%',
                    left: 62,
                    boxShadow: 'none'
                }
            },
            MuiBackdrop: {
                root: {
                    backgroundColor: 'unset'
                }
            }
        }
    });
    return (
        <React.Fragment>
            <TemplateContext.Provider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </TemplateContext.Provider>
        </React.Fragment>
    );
}
 
export default TemplateProvider;