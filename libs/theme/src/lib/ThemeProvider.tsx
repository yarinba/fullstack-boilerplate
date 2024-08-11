import * as React from 'react';
import { deepmerge } from '@mui/utils';
import {
  ThemeProvider as MuiThemeProvider,
  useTheme,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens, getThemedComponents } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * If not `undefined`, the provider is considered nesting and does not render CssBaseline
   */
  mode?: 'light' | 'dark';
}

export function ThemeProvider({
  children,
  mode: modeProp,
}: ThemeProviderProps) {
  const upperTheme = useTheme();

  const mode = modeProp || upperTheme.palette.mode;

  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens(mode);
    let newTheme = createTheme(designTokens);

    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));

    return newTheme;
  }, [mode]);

  return (
    <MuiThemeProvider theme={modeProp ? () => theme : theme}>
      {/* {!modeProp && <CssBaseline />} */}
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
